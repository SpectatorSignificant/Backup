import React from "react";
import { useEffect, useState} from "react";

let startTime = Date.now();

function Note(){
    const [displayTime, setStartTime] = useState(startTime)

    function updateTime(){
        const currentTime = Date.now();
        
        setStartTime(Math.round((currentTime - startTime)/1000));
    };

    document.addEventListener("keydown", updateTime)

    // setInterval(updateTime, 50)

    return <div className="note">
        <h1>This is the note title</h1>
        <p>This is the note content</p>
        <p>{displayTime}</p>
    </div>
}

export default Note;