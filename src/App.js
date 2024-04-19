import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextArea from './Components/TextArea';
import About from './Components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [theme,setTheme] = useState("light");

  const toggleTheme = () =>{
    if(theme === "light"){
      setTheme("dark");
      document.body.style.backgroundColor = 'grey';
      document.title = "Text Manipulator - Dark Mode";
    }else{
      setTheme("light");
      document.body.style.backgroundColor = 'white';
      document.title = "Text Manipulator - Light Mode";
    }
  }

  return (
    <Router>
      <Navbar title="HOME" link="ABOUT US" theme={theme} toggleTheme={toggleTheme}/>     
      <div className='app'>
          <Routes>
          <Route exact path="/" element={<TextArea title="Text Area" theme={theme} />} />
          <Route path="/about" element={<About theme={theme} />} />        
          </Routes>
      </div>
      </Router>  
      );
}

export default App;
