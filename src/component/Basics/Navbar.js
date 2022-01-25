import React from 'react'

const Navbar = ({filterItem,menuList}) => {
    return (
        <>
        <nav className='navbar'>
                <div className='btn-group'>
                    {
                        menuList.map((curEle)=>{
                            return <>
                                <button className='btn-group__item' onClick={()=> filterItem(curEle)}>{curEle}</button>
                            </>
                        })
                    }
                    
                    {/* <button className='btn-group__item' onClick={()=> filterItem("Lunch")}>Lunch</button>
                    <button className='btn-group__item' onClick={()=> filterItem("Dinner")}>Dinner</button> */}
                    {/* <button className='btn-group__item' onClick={()=> setmenuData(Menu)}>All</button> */}
                </div>
            </nav>
            
        </>
    )
}

export default Navbar
