import React, { useEffect, useState } from 'react'
import './PlayScreen.css'

const SCREEN_HEIGHT = 660
const SCREEN_WIDTH = 1440
const TOTAL = 30
const MARGIN = 40

const getRandomArbitrary = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

let x = getRandomArbitrary(30, SCREEN_WIDTH - 30)
let y = getRandomArbitrary(30, SCREEN_HEIGHT - 40)
let mouseX = 0
let mouseY = 0

export default function PlayScreen({ setPoint, setTotal }) {
    const [number, setNumber] = useState(0)
    const [tempPoint,setTempPoint] = useState(0)

    const handleClick = (e) => {
        mouseX = e.nativeEvent.offsetX
        mouseY = e.nativeEvent.offsetY
        if (x-30 < mouseX && mouseX < x+30){
            if (y-30 < mouseY && mouseY < y+30){
                setTempPoint(tempPoint => tempPoint + 1)
            }
        }
        console.log(mouseX,mouseY,x,y)
    }

    useEffect(() => {
        setTimeout(async () => {
            if (number > TOTAL) return
            setTotal(number)
            x = getRandomArbitrary(MARGIN, SCREEN_WIDTH - MARGIN)
            y = getRandomArbitrary(MARGIN, SCREEN_HEIGHT - MARGIN)
            console.log(x,y,number)
            setNumber(number => number + 1)
        }, 800)
        setPoint(tempPoint)
    }, [number])

    return (
        <div onClick={(e) => handleClick(e)} className='play-screen'>
            {(number > 0) && <div
                style={{
                    position: "absolute",
                    left: `${x}px`,
                    top: `${y}px`,
                    width: '30px',
                    height: '30px',
                    backgroundColor: 'red',
                    borderRadius: '100px',
                    border: 'solid black',
                    zIndex: '-1'
                }}
            ></div>}
        </div>
    )
}
