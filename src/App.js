import './App.css';
import Dashboard from "./pages/Dashboard"
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Dashboard/>}/>
            
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
