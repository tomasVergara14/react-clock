import React, { useState} from 'react'

import './Hours.css'



const Hours = () => {

    const [hour, setHour]= useState()

    function setDate(){
        const nowHour = new Date()
        const hours = nowHour.getHours() 
        setHour(hours)
        return hour
    }
    
    setInterval(setDate, 1000)

    if(hour < 10){
        return(
            <div className="Hours">
                <p>0{hour}</p>   
            </div>
        )
    }

    return (
        <div className="Hours">
           <p>{hour}</p> 
        </div>
    )
}

export default Hours
