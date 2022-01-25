import React from 'react'
import './style.css'

const useState = () => {
    
    const [myData, setmyData] = React.useState(5)
    return (
        <>

            <div className='center_div'>
                <p>{myData}</p>
                <div className='button2' onClick={()=>setmyData(myData+1)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR
                </div>
                <div className='button2' onClick={()=> (myData>0)? setmyData(myData-1) : setmyData(0)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    DECR
                </div>

            </div>
            
        </>
    )
}

export default useState
