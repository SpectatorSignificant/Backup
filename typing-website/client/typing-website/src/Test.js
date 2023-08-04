import { useEffect, useState } from "react"
import TimeDiv from "./Components/TimeDiv";
import Logo from "./Components/Logo"
import WrapperDiv from "./Components/WrapperDiv";
// import WordsDiv from "./Components/WordsDiv";
import RestartButton from "./Components/RestartButton";
import ScoreDiv from "./Components/ScoreDiv";
import "./style.css"
import jwtDecode from "jwt-decode"

// import dotenv from "dotenv"
// dotenv.config()

// const google = window.google

function App() {
  const [user, setUser] = useState({}) 

  const handleCallBackResponse = (response) => {
    const userObject = jwtDecode(response.credential)
    setUser(userObject)
    console.log("Encoded JWT ID token", userObject)
  }

  const handleSignOut = (e) => {
    setUser({})
  }

  useEffect(() => {
    /* global google */ 
    const client_id = process.env.REACT_APP_CLIENT_ID

    google.accounts.id.initialize({
      client_id,
      callback: handleCallBackResponse
    })

    google.accounts.id.renderButton(
      document.querySelector("#sign-in"),
      { theme: 'outline', size: 'large'}
    )
    
    google.accounts.id.prompt()
  }, [])

  useEffect(() => {
    console.log({user, bool: user === {}})
  })


  return (
    <div className="Test">
      {/* <div id='sign-in'></div> */}
      <Logo></Logo>
      { Object.keys(user).length === 0
        ? <div className='container-sign-in'><div id='sign-in'></div></div>
        : <button id='sign-out' onClick={handleSignOut}>Logout</button>
      }
      <WrapperDiv></WrapperDiv>
      {/* <TimeDiv></TimeDiv> */}
      <ScoreDiv></ScoreDiv>
      {/* <RestartButton /> */}

    </div>
  );
}

export default App;
