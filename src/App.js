
import Header from './Header';
import Createarea from './Createarea'
import Note from './Note';
import React,{useState} from 'react';
import Count from './Count';
function App(props) {

  const[notes,setNotes]=useState([])  
  function addNote(newNote){
 
  setNotes(prevValue=>{
    return [...prevValue,newNote]
  })
  }
  function deleteNotes(id){
    setNotes(prevValue=>{
      return [...prevValue.filter((note,index)=>
        index!==id)]})
  }
  return (
    <div className="App">
      <Header/>
      <Count count={notes.length===0?'':`Total ${notes.length} Notes`}/>
      <Createarea onAdd={addNote}/>
      {notes.map((note,index)=>(
        <Note 
        key={index}
        id={index}
         title={note.title} 
         content={note.content}
         onDelete={deleteNotes}

         />
      ))}
      
    </div>
  );
}

export default App;
