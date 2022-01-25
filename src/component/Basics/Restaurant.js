import React from 'react'
import './style.css'
import Menu from './menuApi'
import MenuCard from "./MenuCard"
import Navbar from './Navbar'

const uniqueList= [...new Set( Menu.map((curEle)=>{
    return curEle.category;
})),
"All"]

const Restaurant = () => {
    const [menuData, setmenuData] = React.useState(Menu)
    const [menuList, setmenuList] = React.useState(uniqueList)

    const filterItem=(category)=>{
        if (category==="All"){
            setmenuData(Menu)
            return;
        }
        const updatedList=Menu.filter((curEle)=>{
            return curEle.category===category
        })
        setmenuData(updatedList);
    }
    return (
        <>

            <Navbar filterItem={filterItem} menuList={menuList}/>
            <MenuCard menuData={menuData}/>
        </>
    )
}

export default Restaurant
