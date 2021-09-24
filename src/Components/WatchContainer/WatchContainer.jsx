import React from 'react'

import HourContainer from '../HourContainer/HourContainer';

import { Switch } from '@material-ui/core';

import './WatchContainer.css'

const WatchContainer = () => {

    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };


    return (

        <div className="container" > 
            <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            {checked?
                <div className="watchContainer">
                    <HourContainer/>
                </div>
            :
                <div className="watchContainer">
                    <p>No</p>
                </div>}
            
        </div>
    )
}

export default WatchContainer
