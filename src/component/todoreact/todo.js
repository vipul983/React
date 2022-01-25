import React,{useState,useEffect} from 'react'
import './style.css'

//get the local storage data
const getLocalData=()=>{
    const lists= localStorage.getItem("mytodolist")
    if(lists){
        return JSON.parse(lists)
    }
    else{
        return []
    }
}


const Todo = () => {
    const [inputData, setInputData] = useState("")
    const [items, setItems] = useState(getLocalData())
    const [isEditItem, setisEditItem] = useState("")
    const [toggleButton, settoggleButton] = useState(false)

    // add the items function
    const addItems=()=>{
        if(!inputData){
            alert("Please fill the data first!!")
        }
        else if(inputData && toggleButton){
            setItems(items.map((curEle)=>{
                if(curEle.id===isEditItem){
                    return {...curEle,name:inputData}
                }
                return curEle

            }))


            setInputData("")
            setisEditItem(null)
            settoggleButton(false)
        }
        else{
            const myNewInputData={
                id: new Date().getTime().toString(),
                name:inputData,
            }
            setItems([...items,myNewInputData])
            setInputData("")
        }
    }
    //edit an item
    const editItem=(index)=>{
        const edited_todo_item=items.find((curEle)=>{
            return curEle.id===index
        })
        setInputData(edited_todo_item.name)
        setisEditItem(index)
        settoggleButton(true)
    }


    // delete single item
    const deleteItem=(index)=>{
        const updatedItems=items.filter((curEle)=>{
            return curEle.id!==index
        })
        setItems(updatedItems)

    }
    //delete all items
    const deleteAll=()=>{
        setItems([])
    }


    // add local storage
    useEffect(() => {
        localStorage.setItem("mytodolist",JSON.stringify(items))
    }, [items])

    return (
        <>
            <div className='main-div'>
                <div className='child-div'>
                    <figure>
                        <img src="./images/todo.svg" alt="todologo" srcset="" />
                        <figcaption>Add Your List Here 🖐️</figcaption>
                    </figure>
                    <div className='addItems'>
                        <input type="text" placeholder='✍️Add Item' className='form-control' value={inputData} onChange={(event)=>setInputData(event.target.value)}/>
                        {
                            toggleButton? <i className="far fa-edit add-btn" onClick={addItems} ></i>:<i className="fa fa-plus add-btn" onClick={addItems} ></i>
                        }
                        {/* <i className="fa fa-plus add-btn" onClick={addItems} ></i> */}
                    </div>
                    {/* show items */}
                    <div className='showItems'>
                        {
                            items.map((curEle)=>{
                                return (
                                    <div className='eachItem' key={curEle.id}>
                            <h3>{curEle.name}</h3>
                            <div className='todo-btn'>
                                <i className="far fa-edit add-btn" onClick={()=>editItem(curEle.id)}></i>
                                <i className="far fa-trash-alt add-btn" onClick={()=>deleteItem(curEle.id)}></i>
                            </div>
                        </div>

                                )
                            })
                        }
                        
                    </div>
                    {/* remove button */}
                    <div className='showItems'>
                        <button className='btn effect04' data-sm-link-text='Remove All' onClick={deleteAll}><span>Check List</span> </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo
