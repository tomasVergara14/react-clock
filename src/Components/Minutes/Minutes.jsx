import React from 'react'

const nowMinutes = new Date()
const minutes = nowMinutes.getMinutes()
console.log(minutes) 

const Minutes = () => {

    if(minutes < 10){
        return(
            <div>0{minutes}  </div>
        )
    }

    return (
        <div>
            {minutes}
        </div>
    )
}

export default Minutes
