import React from 'react'

import './Hours.css'

const nowHour = new Date()
const hours = nowHour.getHours() 

const Hours = () => {

    return (
        <div className="Hours">
            <p>{hours}</p> 
        </div>
    )
}

export default Hours
