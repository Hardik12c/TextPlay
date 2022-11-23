import './App.css';
import Navbar from './components/navbar';
import Form from './components/form';
import Alert from './components/alert';
import {useState} from 'react'
// import About from './components/about';
function App() {
  const [alert, setalert] = useState(null);
  const [darkmode, setdarkmode] = useState(false);
  const handlechange=()=>{
    if(darkmode){
      setdarkmode(false);
      showalert('The Lightmode has been enabled','success');
    }
    else{
      setdarkmode(true);
      showalert('The Darkmode has been enabled','success');
    }
  }
  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }
  return (
    <>
      <Navbar title={'TextPlay'} mode={darkmode} changemode={handlechange} />
      <Alert alert={alert}/>
      <Form showalert={showalert} title={'Enter Text here'} mode={darkmode} />
      {/* <About/> */}
    </>
  );
}

export default App;
