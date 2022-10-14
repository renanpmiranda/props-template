import { createGlobalStyle } from "styled-components";
import Garagem from "./Componentes/Garagem";
import "./styles.css";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export default function App() {
  function apresentaGaragem1(){
    alert(`Boas vindas à garagem de Ammal`)
  }
  function apresentaGaragem2(){
    alert(`Boas vindas à garagem de Renan`)
  }
  return (
    <>
      <GlobalStyle/>
      <div className="App">
        <Garagem nome={"Ammal"} mensagemApresentacao={apresentaGaragem1}/>

        <Garagem nome={"Renan"} mensagemApresentacao={apresentaGaragem2}/>
      </div>
    </>
  );
}
