import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import About from './components/About';
import Login from './components/Login';

import Fea from './components/Fea';
import Books from './components/Books';
import Signup from './components/Signup';




function App() {
  return (
   <div>
  
    
    { <BrowserRouter>
    
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path="/About" element={ <About/> } />\
        <Route path="/Books" element={ <Books/> } />
        <Route path="/Signup" element={ <Signup/> } />
        <Route path="/Login" element={ <Login/> } />
      </Routes>
    </BrowserRouter> }
  
    
   
    </div>
  
  );
}

export default App;
