import React, {useState} from 'react'

import './Chronometer.css'

function Chonometer(){

    // establecemos el punto de partida
    const [time, setTime] = useState({ms:0, s:0, m:0, h:0})
    // lo guardamos para despues poder frenarlo
    const [interv, setInterv]= useState()
    // alternamos entre que botones se van a ver
    // sin empezar 0, empezado 1, parado 2
    const [status, setStatus] = useState(0)

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
        setStatus(1)
        setInterv(setInterval(run,10)) 
    }
    const reset = ()=>{        
        clearInterval(interv)
        setTime({ms:0, s:0, m:0, h:0})
        setStatus(0)
    }
    const stop = ()=>{
        clearInterval(interv)
        setStatus(2)
    }

    return (
        <div>
            <div className="chronometer">
                <p>{(time.h >10)? time.h : "0"+ time.h }:</p>
                <p>{(time.m >10)? time.m : "0"+ time.m }:</p>
                <p>{(time.s >10)? time.s : "0"+ time.s }:</p>
                <p>{(time.ms >10)? time.ms : "0"+ time.ms } </p>
            </div>
            {status ===0?
                <button onClick={start} >Start</button>
                :
                <div>
                    {status ===2?<button onClick={start} >resume</button>:<button onClick={stop} >Stop</button> }
                    
                    <button onClick={reset}>reset</button>
                </div>
                
            }
                        
                        
            
        </div>
    )
}

export default Chonometer
