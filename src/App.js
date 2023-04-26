import logo from './logo.svg';
import Letreiro from "./Components/Letreiro";
import Relogio from "./Components/Relogio";
import ContadorPessoas from "./Components/Contador";
import './App.css';

function App() {
  return (
    <div className="App">
      <Letreiro />
      <Relogio />
      <ContadorPessoas />
    </div>
  );
}

export default App;
