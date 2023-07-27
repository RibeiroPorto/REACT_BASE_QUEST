import './App.css';
import ColoredText from './textColor/textColor'
import Buttonlbl from './button/alertButton'

function App() {
  return (
    <div className="App">
      <ColoredText TextColor="red">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit nemo ex repellat id quae atque dolorem obcaecati laudantium corrupti a qui aspernatur delectus fugit, dolore molestias, harum eum veniam inventore.</ColoredText>
      
      <Buttonlbl label="Texto Do botão"></Buttonlbl>
    </div>
  );
}

export default App;
