import Carro from "./Carro";
import styled from "styled-components";

const BotaoEstilizado = styled.button`
  background-color: orange;
  border: 1px solid white;
  padding: 1rem;
`

const FundoEstilizado = styled.div`
  background-color: yellow;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  align-items:center;
`

function Garagem(props) {
  return (
    <FundoEstilizado>
      <h1>Garagem de {props.nome}</h1>
      <BotaoEstilizado onClick={props.mensagemApresentacao}>Mensagem</BotaoEstilizado>
      <Carro cor={"Vermelho"} ano={2022} flex={"true"} adicionadoPor={props.nome}/>
      <Carro cor={"Verde"} ano={2020} flex={"false"} adicionadoPor={props.nome}/>
      <Carro cor={"Amarelo"} ano={2009} flex={"false"} adicionadoPor={props.nome}/>
      <Carro cor={"Rosa"} ano={2022} flex={"true"} adicionadoPor={props.nome}/>
      <Carro cor={"Branco"} ano={2012} flex={"false"} adicionadoPor={props.nome}/>
      <Carro cor={"Azul"} ano={2021} flex={"false"} adicionadoPor={props.nome}/>
      <Carro cor={"Laranja"} ano={2016} flex={"true"} adicionadoPor={props.nome}/>
      <Carro cor={"Roxo"} ano={2018} flex={"true"} adicionadoPor={props.nome}/>
      
    </FundoEstilizado>
  );
}

export default Garagem;
