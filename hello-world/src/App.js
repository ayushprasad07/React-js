import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const[mode,setMode]=useState('light'); // wheather dark mode enabled or not.
  const[alert,setAlert]=useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(()=>{
      setAlert(null)
    },1000)
  }
  const redMode=()=>{
    if (mode==='light' || mode==="dark" || mode==="warning" || mode==="primary"){
      setMode("danger")
      document.body.style.backgroundColor= "#d44652"
      showAlert("Red mode activated","success")
    }else{
      setMode("light")
      document.body.style.backgroundColor= 'white'
      showAlert("Changed to light mode","success")
    }
  }
  const blueMode=()=>{
    if (mode==='light' || mode==="dark" || mode==="danger" || mode==="warning"){
      setMode("primary")
      document.body.style.backgroundColor = "#8ecae6"
      showAlert("Blue mode activated","success")
    }else{
      setMode("light")
      document.body.style.backgroundColor= 'white'
      showAlert("Chnged to light mode","success")
    }
  }
  const yellowMode=()=>{
    if (mode==='light' || mode==="dark" || mode==="danger" || mode==="primary"){
      setMode("warning")
      document.body.style.backgroundColor = "#faa307"
      showAlert("Yellow mode activated","success")
    }else{
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Chnaged to light mode","success")
    }
  }
  const toggelMode=()=>{
    if (mode==='light'){
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode activated","success")
    }else{
      setMode('light');
       document.body.style.backgroundColor = 'white';
       showAlert("Changed to light mode","success")
    }
  }
  return (
    <>
    {/* // <Router> */}
      <Navbar title={{name:"TextUtils", second:"TextUtils2"}} 
      aboutText="About Us"  mode={mode} toggelMode={toggelMode} red={redMode} blue={blueMode} yellow={yellowMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      {/* <Routes> */}
          {/* <Route exact path="/about" element={<About />} /> */}
          <TextForm heading="Enter the text here to analyse" mode={mode} showAlert={showAlert}/>
      {/* </Routes> */}
      </div>
      {/* // </Router> */}
      </>
  );
}

export default App;