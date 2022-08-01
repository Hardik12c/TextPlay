import './App.css';
import Navbar from './components/navbar';
import Form from './components/form';
function App() {
  return (
    <>
      <Navbar title={'TextPlay'}/>
      <Form title={'Enter Text here'} title2={'Your text Summary'}/>
    </>
  );
}

export default App;
