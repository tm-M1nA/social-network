// import logo from './logo.svg';
// import './App.css';
import Menu from './components/Menu/Menu'
import Main from './components/Main/Main'
import Header from "./components/Header/Header";
import { sendMessage } from './data/state';


function App(props) {
  return (
    <div className="App">
      <Header></Header>
      <div className="row">
        <Menu></Menu>
        <Main state={props.state}
        dispatch={props.dispatch}
        ></Main>
      </div>
    </div>
  );
}

export default App;
