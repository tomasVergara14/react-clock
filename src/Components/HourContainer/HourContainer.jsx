import React from 'react'

import Hours from '../Hours/Hours'
import Minutes from '../Minutes/Minutes'

import { Switch } from '@material-ui/core';

import './HourContainer.css'

const HourContainer = () => {
    
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <div className="container">
            <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            {checked? 
            <div className="HourContainer">
                <Hours/>
                <p className="split">:</p>
                <Minutes/>
            </div> :
                <div className="HourContainer">
                <p>00</p>
                <p className="split">:</p>
                <p>00</p>
            </div>}
            
        </div>
        
    )
}

export default HourContainer
