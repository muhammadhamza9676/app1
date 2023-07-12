import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";



function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
      setAlert({
        msg : message,
        type : type
      })


      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === "light")
    {
      setMode("dark");
      document.body.style.backgroundColor = '#0b1146';
      showAlert("Dark Mode has been enabled.", "success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled.", "success");
    }
  }
  return (
    <>
      <Navbar title="TextSite" comp1="Home" comp2="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert =  {alert} />
      <div className="container my-3">
        {/* <Router>
        <Switch> */}
          {/* <Route exact path="/about"> */}
            {/* <About /> */}
          {/* </Route> */}
          {/* <Route exact path="/"> */}
            <TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert}/>
          {/* </Route> */}
        {/* </Switch>
        </Router> */}
      </div>
      
      
    </>
  );
}

export default App;
