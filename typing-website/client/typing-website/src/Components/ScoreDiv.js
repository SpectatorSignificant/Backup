import { useContext, useEffect, useState } from "react"
import { State } from "../Provider"
export default function ScoreDiv(){
    const [username, setUsername] = useContext(State)
    
    useEffect(() => {
        console.log(username)
        setUsername(45)
    })
    return (
        <div className="score"></div>
    )
}