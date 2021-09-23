import React from 'react'

const nowHour = new Date()
const hours = nowHour.getHours() 

const Hours = () => {

    return (
        <div>
            {hours}
        </div>
    )
}

export default Hours
