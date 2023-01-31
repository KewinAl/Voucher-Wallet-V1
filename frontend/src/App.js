
import './App.css';
import {Route, Routes} from "react-router-dom";
import Registration from "./Pages/Registration";
import Congratulations from "./Pages/Congratulations";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/registration' element ={<Registration/>}/>
          <Route path='/Congratulations' element ={<Congratulations/>}/>
        </Routes>
    </div>
  );
}

export default App;
