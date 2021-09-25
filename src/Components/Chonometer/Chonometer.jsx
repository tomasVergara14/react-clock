import React, {useState} from 'react'

import { Button } from '@material-ui/core'

import './Chronometer.css'

function Chonometer(){

    // establecemos el punto de partida
    const [time, setTime] = useState({ms:0, s:0, m:0, h:0})
    // lo guardamos para despues poder frenarlo
    const [interv, setInterv]= useState()
    // alternamos entre que botones se van a ver
    // sin empezar 0, empezado 1, parado 2
    const [status, setStatus] = useState(0)

    var updateMs = time.ms
    var updateS = time.s
    var updateM = time.m
    var updateH = time.h

    //aumentamos en 1 cada vez que los milisegundos llegan a 100
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
        <div className="chronometerContainer">
            <div className="chronometer">
                <p>{(time.h >=10)? time.h : "0"+ time.h }:</p>
                <p>{(time.m >=10)? time.m : "0"+ time.m }:</p>
                <p>{(time.s >=10)? time.s : "0"+ time.s }</p>
            </div>
            {/* consultamos el estado del contador */}
            {status ===0?
                <Button variant="contained"  color="secondary" size="large" onClick={start} >Start</Button>
                :
                <div className="buttonsContainer">
                    {/* alternamos los botones entre parar y continuar */}
                    {status ===2?<Button variant="contained" color="secondary" onClick={start} >resume</Button>:<Button variant="contained" color="secondary" size="large" onClick={stop} >Stop</Button> }                    
                    <Button variant="contained" color="secondary" onClick={reset}>reset</Button>
                </div>
                
            }
                        
                        
            
        </div>
    )
}

export default Chonometer
