"use client";

import React, {useState, useEffect} from "react";

interface TimerComponentProp {
    // amount of time in seconds
    time: number;
}

interface State{
    time: number; 
    minutes: number;
    seconds: number;
}

const TimerComponent = ({time}:TimerComponentProp) => {
    const [totalTime, setTotalTime] = useState(time)
    const [minutes, setMinutes] = useState(Math.floor((time)/60))
    const [seconds, setSeconds] = useState(time - Math.floor((time)/60) * 60)

    const [state, setState] = useState<State>({
        time,
        minutes: Math.floor((time)/60),
        seconds: time - Math.floor((time)/60) * 60,
    });

    const [timeInterval, setTimeInterval] = useState<number>(0)

    const startTimer = () =>{
        console.log("starting countdown")
        setTimeInterval(
            window.setInterval(()=>{
                if (time === 0){
                    return;
                }
                // setState({
                //     time: time - 1,
                //     minutes: Math.floor((time-1)/60),
                //     seconds: state.time - Math.floor((time-1)/60) * 60 - 1
                // }); 
                setTotalTime((prev) => prev - 1)
            }, 1000)
        );
    }

    const pauseTimer = () => {
        console.log("paused")
        clearInterval(timeInterval)
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
        </div>
    );
};

export default TimerComponent;