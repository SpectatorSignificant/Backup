import { useEffect, useState } from "react";

export default function TimeDiv(){
    const [elapsedTimeSec, setElapsed] = useState(0);

    const startTime = Date.now();
    
    const updateTime = () => {
        const currentTime = Date.now();
        
        setElapsed(Math.round((currentTime - startTime)/1000));
    };

    const handleKeyDown = (e) => {
        if (e.key.length === 1 || e.key === "Backspace"){
            setInterval(updateTime, 50);
        }
    }

    useEffect(() => {  
        document.addEventListener("keydown", handleKeyDown)
        // setInterval(updateTime, 50);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [])

    // useEffect(() => {
    //     document.addEventListener()
    // })

    return (
        <div className="time">{elapsedTimeSec}</div>
    )
}