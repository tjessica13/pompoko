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
let progressBarIconFull = '/images/progress_bar.png';
let progressBarIconEmpty = '/images/progress_bar_empty.png';


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
            incrementProgress(hatchCounter.toString());
            //num.toString();
            if (hatchCounter == 7){
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

    const incrementProgress = (divID: string) => {
        const currDiv = document.getElementById(divID) as HTMLImageElement;
        if (currDiv != null){
            currDiv.setAttribute("src", progressBarIconFull);
        }
        console.log("CHANGE")
    }

    //<Image id = "1" src={progressBarIconEmpty} alt = "icon" width={40} height={40}></Image>

    return (
        <div className="timer">
            <h2>{`${getMinutes()}:${getSeconds()}`}</h2>
            <button className="startButton" onClick={startTimer}> start </button>
            <button className="pauseButton" onClick={pauseTimer}> pause </button>
            <button className="pauseButton" onClick={resetTimer}> reset </button>
            <h1>{hatchCounter}</h1>
            <ImageLoaderComponent link= {imgSource}/>
            <br></br>
            <div className="progress bar" style = {{display: "flex"}}>
                <img id = "1" src = {progressBarIconEmpty} width={"40px"}></img>
                <img id = "2" src = {progressBarIconEmpty} width={"40px"}></img>
                <img id = "3" src = {progressBarIconEmpty} width={"40px"}></img>
                <img id = "4" src = {progressBarIconEmpty} width={"40px"}></img>
                <img id = "5" src = {progressBarIconEmpty} width={"40px"}></img>
                <img id = "6" src = {progressBarIconEmpty} width={"40px"}></img>
            </div>
        </div>
    );
};

export default TimerComponent;