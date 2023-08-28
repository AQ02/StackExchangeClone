import logo from './logo.svg';
import './App.css';
import LeftSideBar from './Components/LeftSideBar';
import QuestionBar from './Components/QuestionBar';


function App() {
  return (
    <div className="App">
    <div  className="col-20-left">
      <LeftSideBar></LeftSideBar>
    </div>
    <div className="col-40">
      <QuestionBar ></QuestionBar>
    </div>
    <div className="col-20-right">
     <p>extreme left</p>
    </div>
    </div>
  );
}

export default App;
