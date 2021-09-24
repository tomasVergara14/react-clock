import React from 'react'

import Hours from '../Hours/Hours'
import Minutes from '../Minutes/Minutes'

import './HourContainer.css'

const HourContainer = () => {
    return (
        <div className="HourContainer">
            <Hours/>
            <p>:</p>
            <Minutes/>
        </div>
    )
}

export default HourContainer
