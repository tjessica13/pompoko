"use client";

import React, {useState, useEffect} from "react";

interface TimerComponentProp {
    // amount of time in seconds
    time: number;
}

const TimerComponent = ({time}:TimerComponentProp) => {
    const [totalTime, setTotalTime] = useState(time)

    const [timerState, setTimerState] = useState<Boolean>(false); //false = pause, true = start

    const [timeInterval, setTimeInterval] = useState<number>(0)

    const startTimer = () =>{
        console.log("starting countdown")
        if (timerState == false){
            setTimerState(true)
            setTimeInterval(
                window.setInterval(()=>{
                    if (time === 0){
                        return;
                    }
                    setTotalTime((prev) => prev - 1)
                }, 1000)
            );
        }}

    const pauseTimer = () => {
        console.log("paused")
        clearInterval(timeInterval)
        setTimerState(false)
    }

    const resetTimer = () => {
        console.log("reset timer")
        setTimerState(false)
        setTotalTime(time)
    }

    const getMinutes = () => {
        return (Math.floor((totalTime-1)/60));
    }

    const getSeconds = () => {
        const x = totalTime - Math.floor((totalTime-1)/60) * 60 - 1
        if (x <= 10){
            return ('0' + x);
        }
        return x
    }

    return (
        <div className="timer">
            <h2>{`${getMinutes()}:${getSeconds()}`}</h2>
            <button className="startButton" onClick={startTimer}> start </button>
            <button className="pauseButton" onClick={pauseTimer}> pause </button>
            <button className="pauseButton" onClick={resetTimer}> reset </button>
        </div>
    );
};

export default TimerComponent;