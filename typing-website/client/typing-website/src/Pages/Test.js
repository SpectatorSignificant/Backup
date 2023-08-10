import { useEffect, useState } from "react"
// import TimeDiv from "../Components/TimeDiv";
import Logo from "../Components/Logo"
import WrapperDiv from "../Components/WrapperDiv";
// import WordsDiv from "./Components/WordsDiv";
// import RestartButton from "../Components/RestartButton";
import ScoreDiv from "../Components/ScoreDiv";
import "../style.css"
import jwtDecode from "jwt-decode"

// import dotenv from "dotenv"
// dotenv.config()

setTimeout(() => {
  let google = window.google
}, 50)
const google = window.google
// console.log(google)

function Test() {
  / * global google * /
  const [user, setUser] = useState({}) 

  const handleCallBackResponse = (response) => {
    const userObject = jwtDecode(response.credential)
    setUser(userObject)
    console.log("Encoded JWT ID token", userObject)
  }

  const handleSignOut = (e) => {
    setUser({})
  }

  const client_id = process.env.REACT_APP_CLIENT_ID
  setTimeout(() => {
      google.accounts.id.initialize({
        client_id,
        callback: handleCallBackResponse
      }, 100)

  // useEffect(() => {
  //   /* global google */ 

    
  //   })

    google.accounts.id.renderButton(
      document.querySelector("#sign-in"),
      { theme: 'outline', size: 'large'}
    )
    
    // google.accounts.id.prompt()
  }, [])

  useEffect(() => {
    console.log({user, bool: user === {}})
  })


  return (
    <div className="Test">
      {/* <div id='sign-in'></div> */}
      <Logo></Logo>
      { Object.keys(user).length === 0
        ? <div tabIndex={-1} className='container-sign'><div tabIndex={2} id='sign-in'></div></div>
        : <button tabIndex={2} className="container-sign" id='sign-out' onClick={handleSignOut}>Logout</button>
      }
      <WrapperDiv></WrapperDiv>
      {/* <TimeDiv></TimeDiv> */}
      <ScoreDiv></ScoreDiv>
      {/* <RestartButton /> */}

    </div>
  );
}

export default Test;
