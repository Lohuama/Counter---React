import Header from './Header';
import Counter from './Counter';
import './App.css';

function App() {
  return (
    <div>
      <Header name="Menu" links={["Sobre", "Comprar", "Contato"]}></Header>
      <Counter count={1}></Counter>
    </div>
  );
}

export default App;
