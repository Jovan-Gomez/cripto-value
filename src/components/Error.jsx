import styled from '@emotion/styled'

const Text = styled.div`
  background-color: #b7322c;
  color: #fff;
  padding: 15px;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  margin-top: 10px;
  border-radius: 10px;
`
const Error = () => {
  return (
    <div>
      <Text>Todos los campos son obligatorios.</Text>
    </div>
  )
}

export default Error
