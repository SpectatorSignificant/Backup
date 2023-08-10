import { createContext, useState} from "react"

const State = createContext("user1")

function UsernameProvider (props) {
    const [sharedState, setSharedState] = useState("")
  
    const updateState = (newState) => {
      setSharedState(newState)
    }
  
    return (
      <State.Provider value={ sharedState }>
        { props }
      </ State.Provider>
    )
}
  
  export { UsernameProvider, State};