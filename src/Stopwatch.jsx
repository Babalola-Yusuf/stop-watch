import { useState,useEffect, useRef } from "react";

function StopWatch(){
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(null);
     

    useEffect(()=>{
        if(isRunning){
        intervalIdRef.current = setInterval(()=>{
            
                setElapsedTime(Date.now() - startTimeRef.current);
                console.log(Date.now() - startTimeRef.current);
            } , 10);
        }
        return () => {
            clearInterval(intervalIdRef.current);
        }
    },[isRunning] )
    
    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
        console.log(startTimeRef.current);
    }

    function stop(){
        setIsRunning(false);

    }
    
    function reset(){
        setElapsedTime(0);
        setIsRunning(false);
    }


    function formatTime(){
        let hours = Math.floor(elapsedTime/(1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime/(1000 * 60 ) % 60);
        let seconds = Math.floor(elapsedTime/1000 % 60);
        let milliseconds = Math.floor((elapsedTime % 1000)/10);

        hours = hours < 10 ? `0${hours}` : hours;
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        seconds = seconds < 10 ? `0${seconds}` : seconds;
        milliseconds = milliseconds < 10 ? `0${milliseconds}` : milliseconds;

        return `${minutes} : ${seconds} : ${milliseconds} `
    }

    return(
        <div className="stopwatch-container">
            <div className="stopwatch">
            {formatTime()}
            </div>
            
            <div className="buttons">
            <button onClick={start}>start</button>
            <button onClick={stop}>stop</button>
            <button onClick={reset}>reset</button>
            </div>
            
        </div>
    )
}

export default StopWatch;