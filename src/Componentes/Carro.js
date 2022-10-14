import styled from "styled-components";

const BoxEstilizado = styled.div`
  background-color: white;
  padding: 2rem;
  width: 40vw;
  margin: 0.5rem;
`

function Carro(props) {
  return (
    <BoxEstilizado>
      <h2>Volksvagem</h2>
      <ul>
        <li>Cor: {props.cor}</li>
        <li>Ano: {props.ano}</li>
        <li>Flex: {props.flex}</li>
        <li>Adicionado por: {props.adicionadoPor}</li>
      </ul>
    </BoxEstilizado>
  );
}

export default Carro;
