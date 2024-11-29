"use client";

import React, {useState} from "react";
import { useRouter } from 'next/navigation';
import ImageLoaderComponent from "@/components/ImageLoaderComponent";

interface TimerComponentProp {
    // amount of time in seconds
    time: number;
    pokemonUrl: string;
}

// hatch counter to count how many times the timer has reached 0
// how many pomodoros have been completed
let hatchCounter = 0;

//path for which image to load
let imgSource = '/images/egg_png.png';


const TimerComponent = ({time, pokemonUrl}:TimerComponentProp) => {
    const [totalTime, setTotalTime] = useState(time);

    const [timerState, setTimerState] = useState<Boolean>(false); //false = pause, true = start

    const [timeInterval, setTimeInterval] = useState<number>(0)

    const router = useRouter();

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
        }
    }

    const pauseTimer = () => {
        console.log("paused")
        clearInterval(timeInterval)
        setTimerState(false)
    }

    const resetTimer = () => {
        console.log("reset timer");
        clearInterval(timeInterval);
        setTimerState(false);
        setTotalTime(time);
    }

    const getMinutes = () => {
        let minutes = (Math.floor((totalTime-1)/60));
        // when the timer reaches 0:00
        if (minutes == 0 && getSeconds() == 0) {
            // we count 1 completed pomodoro
            hatchCounter = hatchCounter + 1;
            if (hatchCounter == 2){
                hatchCounter = 0;
                imgSource = pokemonUrl;
                router.push('/hatch-egg');
            }

            console.log("add hatch count");
            // reset the timer
            resetTimer();
        }
        return minutes;
    }

    const getSeconds = () => {
        const x = totalTime - Math.floor((totalTime-1)/60) * 60 - 1
        if (x < 10){
            return ('0' + x);
        }
        return x
    }

    return (
        <div className="timer-component">
            <div className="pokemon-image">
                <ImageLoaderComponent link= {imgSource}/>
            </div>
            <h2 className="timer">{`${getMinutes()}:${getSeconds()}`}</h2>
            <div className="button-group">
                <button className="pauseButton" onClick={pauseTimer}> pause </button>
                <button className="startButton" onClick={startTimer}> start </button>
                <button className="resetButton" onClick={resetTimer}> reset </button>
            </div>
        </div>
    );
};

export default TimerComponent;