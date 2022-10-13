import Garagem from "./Componentes/Garagem";
import "./styles.css";

export default function App() {
    function apresentaGaragem1(){
    alert(`Boas vindas à garagem de Ammal`)
  }
  function apresentaGaragem2(){
    alert(`Boas vindas à garagem de Renan`)
  }
  return (
    <div className="App">
      <Garagem nome={"Ammal"} mensagemApresentacao={apresentaGaragem1}/>

      <Garagem nome={"Renan"} mensagemApresentacao={apresentaGaragem2}/>
    </div>
  );
}
