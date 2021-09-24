import React from 'react'

import Hours from '../Hours/Hours'
import Minutes from '../Minutes/Minutes'

import './HourContainer.css'

const HourContainer = () => {
    
   
    return (
        <div className="containerHour">
           
            <div className="HourContainer">
                <Hours/>
                <p className="split">:</p>
                <Minutes/>
            </div>
            
        </div>
        
    )
}

export default HourContainer
