import { useEffect, useState } from "react";

export default function TimeDiv(){
    const [elapsedTimeSec, setElapsed] = useState(0);

    const startTime = Date.now();
    
    function updateTime(){
        const currentTime = Date.now();
        
        setElapsed(Math.round((currentTime - startTime)/1000));
    };

    useEffect(() => {  
        setInterval(updateTime, 50);
    }, []);

    return (
        <div className="time">{elapsedTimeSec}</div>
    )
}