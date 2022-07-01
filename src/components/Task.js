import React from "react";



function Task({keyData, category, text, handleDelete}) {

  //-----handle the delete button-----

  

  //---------------------------------
  return (
    <div className="task" key={keyData} >
      <div className="label" >{category}</div>
      <div className="text" >{text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
