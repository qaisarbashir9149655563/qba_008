import React,{useState} from 'react'
import {IoIosAdd} from 'react-icons/io'

function Createarea({submitButon,onAdd}) {
    const[isExpand,setExpand]=useState(false);
    const[note,setNote]= useState({title:"",content:""})
    function handleChange(e){
        const{name,value}=e.target;
            setNote((prevValue)=>{
                return {
                    ...prevValue,[name]:value
                }
            })
    }
    function submitButon(event)
    {
        onAdd(note);
        setNote({
            title:"",
            content:""
        })
        event.preventDefault();
        
    }
    function handleExpand()
    {
        setExpand(true);
    }
    return (
        <div>
            <form>
               {isExpand && (<input value={note.title} type='text' placeholder='Take a note...' name ="title" onChange={handleChange}/>)}
                <p>
                    <textarea onClick={handleExpand} value={note.content} name ="content" placeholder="take a note..." onChange={handleChange}
                    rows ={isExpand? 3: 1}></textarea>
                </p>
                <button onClick={submitButon}><IoIosAdd size={35}/></button>
            </form>
            
        </div>
    )
}

export default Createarea
