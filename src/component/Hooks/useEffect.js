import React,{useState,useEffect} from 'react'
import './style.css'

const UseEffect = () => {
    
    const [myData, setmyData] = useState(0)
    useEffect(() => {
    document.title=`Chats(${myData})`
    })
    
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
                

            </div>
            
        </>
    )
}

export default UseEffect