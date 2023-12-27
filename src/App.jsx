import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import './App.css';
import { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState('light');
  const [ alert,setAlert] = useState(null);


  const showalert = (message,type)=> {
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=> {
        setAlert(null);
      } ,1500);
  }

  const toggleMode =() => {
    if(mode === 'light'){
      setMode('dark')
document.body.style.backgroundColor='#042743';
showalert("Dark mode is Activated","success");
// document.body.style.color='white';

    }
    else{
      setMode ('light');
      document.body.style.backgroundColor='white';
      showalert("Light mode is Activated","success");
      // document.body.style.color='black';

    }
     
  }
  
  return (
    <>
    <BrowserRouter> 
      <Navbar title="WORD-COUNTER"  mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <Routes>
     <Route index element={<TextForm showalert={showalert} heading="ENTER THE TEXT TO ANALYZE BELOW" mode={mode}/>} />
     <Route path="/about" element={<About/>} />
        
        
      
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
