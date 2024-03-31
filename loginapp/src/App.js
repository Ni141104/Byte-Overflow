import logo from './logo.svg';
import './App.css';
import Logintab1 from './components/Logintab1';
import Sign1 from './components/Sign1';
import { useState } from 'react';
function App() {
  const [tab, setTab] = useState("LogIn");
  function changeTabLogin() {
    setTab("LogIn")
  }
  function changeTabSign() {
    setTab("SignIn")
  }
  return (
    <div className='wrapper'>
      <div className='container'>

        <div className='tabBar'>
          <h2 onClick={changeTabLogin} className='loginHeading'>Login</h2>
          <h2 onClick={changeTabSign} className='signInHeading'>Sign Up</h2>
        </div>
        {
          tab === "LogIn" ? <Logintab1 setTab={setTab} /> : <Sign1 setTab={setTab} />
        }
        <div className="App">
        </div>
      </div>
    </div>
  );
}

export default App;
