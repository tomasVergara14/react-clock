import React, {useState, useEffect} from 'react'

import './Chronometer.css'

function Chonometer(){

    // establecemos el punto de partida
    const [time, setTime] = useState({ms:0, s:0, m:0, h:0})
    // lo guardamos para despues poder frenarlo
    const [interv, setInterv]= useState()

    console.log(time)

    var updateMs = time.ms
    var updateS = time.s
    var updateM = time.m
    var updateH = time.h

    const run=()=>{
        if(updateM === 60){
            updateH++;
            updateM = 0
        }
        if(updateS ===60){
            updateM++;
            updateS = 0
        }
        if(updateMs ===100){
            updateS++;
            updateMs=0
        }
        updateMs++
        return setTime({ms:updateMs, s:updateS, m:updateM, h:updateH})
    }

    const start = ()=>{
        run();
        setInterv(setInterval(run,10)) 
    }
    const stop = ()=>{
        clearInterval(interv)
    }

    return (
        <div>
            <div className="chronometer">
                <p>{(time.h >10)? time.h : "0"+ time.h }:</p>
                <p>{(time.m >10)? time.m : "0"+ time.m }:</p>
                <p>{(time.s >10)? time.s : "0"+ time.s }:</p>
                <p>{(time.ms >10)? time.ms : "0"+ time.ms } </p>
            </div>
            <button onClick={start} >Start</button>
            <button onClick={stop} >Stop</button>
        </div>
    )
}

export default Chonometer
