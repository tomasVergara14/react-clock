import React, { useState, useEffect} from 'react'

import './Minutes.css'


const Minutes = () => {

    const [minute, setMinute]= useState()


    function setDate(){
        const nowMinutes = new Date()
        const minutes = nowMinutes.getMinutes()
        setMinute(minutes)
        return minute
    }

    console.log(minute)
    
    setInterval(setDate, 1000)

    
    useEffect(()=>{
        return () => {
            setMinute({}); // bug de un componente unmounted, asi se soluciona
        };
    }, []);

    if(minute < 10){
        return(
            <div className="Minutes">
                <p>0{minute}</p>   
            </div>
        )
    }

    return (
        <div className="Minutes">
           <p>{minute}</p> 
        </div>
    )
}

export default Minutes
