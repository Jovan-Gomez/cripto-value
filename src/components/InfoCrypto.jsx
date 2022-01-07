import styled from '@emotion/styled'

const InfoContainer = styled.div`
  background-color: #fff;
  padding: 5px 20px;
  border-radius: 10px;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  align-items: center;
  @media (min-width: 768px) {
    text-align: start;
  }
`
const Price = styled.p`
  span {
    color: #5255ac;
    font-weight: 900;
    font-size: 18px;
  }
`
const Text = styled.p`
  span {
    font-weight: 700;
    font-size: 15px;
  }
`

const Img = styled.img`
  width: 130px;
  height: 130px;
`
const InfoCrypto = ({ infoCrypto }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = infoCrypto
  return (
    <InfoContainer>
      <Img src={`https://cryptocompare.com/${IMAGEURL}`} alt='crypto-img' />
      <div>
        <Price>
          Precio Actual: <span>{PRICE}</span>
        </Price>
        <Text>
          Precio mas alto del dia: <span>{HIGHDAY}</span>
        </Text>
        <Text>
          Precio mas bajo del dia: <span>{LOWDAY}</span>
        </Text>
        <Text>
          Variacion ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span>
        </Text>
        <Text>
          Ultima Actualizacion: <span>{LASTUPDATE}</span>
        </Text>
      </div>
    </InfoContainer>
  )
}

export default InfoCrypto
