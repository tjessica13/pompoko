// props for the pokemon component to use
"use client";
import Image from 'next/image'
import React, {useRef, useState, useEffect} from 'react';
import styles from './ImageLoaderComponent.module.css'

interface ImageLoaderProp {
    // amount of time in seconds
    link: string;
}


const ImageLoaderComponent = ({link}:ImageLoaderProp) => {
    // const canvasRef = useRef<HTMLCanvasElement>(null)
    const imgRef = useRef<HTMLImageElement>(null)


    useEffect(() => {
        // const canvas = canvasRef.current
        // if (canvas === null){ return }

        // const context = canvas.getContext('2d')
        // if (context === null){ return }

        //getting img from reference
        const image = imgRef.current
        if (image === null){ return }

        // //draw image to context
        // context.drawImage(image, 0, 0)
    }, [imgRef])    


    /**
     *      <h2>Image resize: </h2>
            <Image ref={imgRef} src={'/images/ditto_gif.gif'} width={480} height={480} quality={100} alt="cat picture" unoptimized={true}/> 
            <h2>Canvas: </h2>
            <canvas ref={canvasRef} className={styles.canvas}/>
     */
    return (
        <div className={styles.view}>
            <Image ref={imgRef} className={styles.canvas} src={link} width={96} height={96} alt="pokemon pixel image" unoptimized={true} priority/> 
        </div>
    );
};

export default ImageLoaderComponent;