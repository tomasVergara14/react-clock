import React from 'react'

import Hours from '../Hours/Hours'
import Minutes from '../Minutes/Minutes'
import SwitchElement from '../../elements/SwitchElement'

import './HourContainer.css'

const HourContainer = () => {
    
    console.log(SwitchElement)

    return (
        <div className="container">
            <SwitchElement/>
            
            <div className="HourContainer">
                <Hours/>
                <p className="split">:</p>
                <Minutes/>
            </div>
        </div>
        
    )
}

export default HourContainer
