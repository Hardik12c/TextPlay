import "./App.css";
import Navbar from "./components/navbar";
import Form from "./components/form";
import Alert from "./components/alert";
import { useState } from "react";
import About from "./components/about";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [alert, setalert] = useState(null);
  const [darkmode, setdarkmode] = useState(false);
  const handlechange = () => {
    if (darkmode) {
      setdarkmode(false);
      showalert("The Lightmode has been enabled", "success");
      document.title = "TextPlay-Lightmode";
    } else {
      setdarkmode(true);
      showalert("The Darkmode has been enabled", "success");
      document.title = "TextPlay-Darkmode";
    }
  };
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };
  return (
    <Router>
      <>
        <Navbar title={"TextPlay"} mode={darkmode} changemode={handlechange} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/about"  element={<About mode={darkmode}/>} />
          <Route
            path="/"
            element={
              <Form
                showalert={showalert}
                title={"Enter Text here"}
                mode={darkmode}
              />
            }
          />
        </Routes>
      </>
    </Router>
  );
}

export default App;
