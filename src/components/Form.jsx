import styled from '@emotion/styled'
import useSelect from '../hooks/useSelect'
import { coins } from '../data/coins'
import { useEffect, useState } from 'react'
import Error from './Error'

const Submit = styled.button`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  margin-top: 10px;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #7a7dfe;
  }
`

const Form = ({ setInfoCrypto, setLoading }) => {
  const [infoCoin, setInfoCoin] = useState({})
  const [cryptos, setCryptos] = useState([])
  const [error, setError] = useState(false)
  const [coin, SelectCoin] = useSelect('Elige tu Moneda', coins)
  const [crypto, SelectCrypto] = useSelect('Elige tu Criptomoneda', cryptos)

  useEffect(() => {
    const getCryptos = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=MXN'
      try {
        const response = await fetch(url, {
          headers: {
            authorization: `Apikey ${import.meta.env.VITE_CRIPTO_KEY}`,
          },
        })
        const { Data } = await response.json()

        const cryptos = Data.map((coin) => {
          return {
            id: coin.CoinInfo.Name,
            name: coin.CoinInfo.FullName,
          }
        })

        setCryptos(cryptos)
      } catch (error) {
        console.error(error)
      }
    }
    getCryptos()
  }, [])

  useEffect(() => {
    if (Object.keys(infoCoin).length > 0) {
      setLoading(true)
      setInfoCrypto({})
      const getInfoCoin = async () => {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${coin}`
        const response = await fetch(url, {
          headers: {
            authorization: `Apikey ${import.meta.env.VITE_CRIPTO_KEY}`,
          },
        })
        const { DISPLAY } = await response.json()
        setInfoCrypto(DISPLAY[crypto][coin])
        setLoading(false)
      }
      getInfoCoin()
    }
  }, [infoCoin])

  const handleSubmit = (e) => {
    e.preventDefault()
    if ([coin, crypto].includes('')) {
      setError(true)
      return
    }

    setInfoCoin({
      coin,
      crypto,
    })
    setError(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <SelectCoin />
      <SelectCrypto />
      <Submit>Cotizar</Submit>
      {error && <Error />}
    </form>
  )
}

export default Form
