import React from 'react'

import './Minutes.css'

const nowMinutes = new Date()
const minutes = nowMinutes.getMinutes()

const Minutes = () => {

    if(minutes < 10){
        return(
            <div className="Minutes">
                <p>0{minutes}</p>   
            </div>
        )
    }

    return (
        <div className="Minutes">
           <p>{minutes}</p> 
        </div>
    )
}

export default Minutes
