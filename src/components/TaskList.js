import React from "react";
import Task from "./Task"
import { v4 as uuid } from "uuid";

function TaskList({listData, selectedCategory, handleDelete}) {
  
  let tasksToDisplay = listData.filter((index)=> {
    if (selectedCategory==="All"){return index=true}
    else return index.category===selectedCategory
    })


  //-------makesure to pass that above variable down below
  return (
    <div className="tasks">{
      tasksToDisplay.map((index)=>
      <Task key={uuid()}category={index.category} text={index.text} handleDelete={handleDelete}/>)
    }
     
    </div>
  );
}

export default TaskList;

//-------map the data to a Task Component--


