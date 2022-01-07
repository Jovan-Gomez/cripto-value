import styled from '@emotion/styled'
import { useState } from 'react'
import Form from './components/Form'
import InfoCrypto from './components/InfoCrypto'
import Spinner from './components/Spinner'
import imgCripto from './img/imagen-criptos.png'

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`
const Heading = styled.h1`
  color: #fff;
  font-weight: 700;
  font-size: 34px;
  margin-top: 80px;
  margin-bottom: 50px;
  text-align: center;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`

const Img = styled.img`
  display: block;
  width: 80%;
  max-width: 400px;
  margin: 100px auto 0 auto;
`

function App() {
  const [infoCrypto, setInfoCrypto] = useState({})
  const [loading, setLoading] = useState(false)
  return (
    <Container>
      <Img src={imgCripto} alt='banner' />
      <div>
        <Heading>Cotiza Criptomonedas al instante</Heading>
        <Form setInfoCrypto={setInfoCrypto} setLoading={setLoading} />
        {loading && <Spinner />}
        {infoCrypto.PRICE && <InfoCrypto infoCrypto={infoCrypto} />}
      </div>
    </Container>
  )
}

export default App
