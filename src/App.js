import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React, {useState} from 'react';
import ShowAlert from './component/ShowAlert';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
const [mode, setmode] = useState('light');
const [alert, setAlert] = useState(null);

const showAlert =(message, type) =>{
  setAlert({
    msg : message ,
    type : type
  })
  setTimeout(() => {
    setAlert(null);
  }, 1500);
}

const removeBodyBgColor=()=>{
  document.body.classList.remove('bg-warning')
  document.body.classList.remove('bg-success')
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-info')
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-danger')
  document.body.classList.remove('bg-primary')
  document.body.classList.remove('bg-secondary')
}

const togglemodeDemo=()=>{
  removeBodyBgColor();
  if(mode === 'light'){
    setmode('dark')
    document.body.style.backgroundColor = '#1e272e';
    showAlert("Dark mode has been enabled", "success");
 
  }
  else{
    setmode('light')
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled", "success");
  
  }
}


const togglemode=(cls)=>{
  removeBodyBgColor();
  document.body.classList.add('bg-'+cls)
  setmode('dark');
}

  return (
    <>

     
      <Router>
        <Navbar title="TextUtils"  HomeText="Home" AboutText="DarkModePage" mode={mode} togglemode={togglemode} togglemodeDemo={togglemodeDemo}/>
        <ShowAlert alert={alert}/> 
        <div className="container my-3">
          
          <Routes>
            <Route path='/' element={<TextForm heading="Try TextUtils - Word counter, character counter, lowercase to uppercase & more"  mode={mode} showAlert={showAlert}/>}>
              
            </Route>
            
          </Routes>
        </div>
      </Router>
      
    </>
  );
}

export default App;
