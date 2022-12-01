import './App.css';
import Dashboard from "./pages/Dashboard"
import Home from './pages/Home';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <Header/>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
