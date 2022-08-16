import './App.css';
import Navbar from './components/navbar';
import Form from './components/form';
import {useState} from 'react'
// import About from './components/about';
function App() {
  const [darkmode, setdarkmode] = useState(false);
  const handlechange=()=>{
    if(darkmode){
      setdarkmode(false);
    }
    else{
      setdarkmode(true);
    }
  }
  return (
    <>
      <Navbar title={'TextPlay'} mode={darkmode} changemode={handlechange} />
      <Form title={'Enter Text here'} mode={darkmode} />
      {/* <About/> */}
    </>
  );
}

export default App;
