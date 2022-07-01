import React, {useState}from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [listData, setListData] = useState(TASKS)
 
  let tasksToDisplay = listData.filter((index)=> {
    if (selectedCategory==="All"){return index=true}
    else return index.category===selectedCategory
    })

  function handleCategoryClick (e){
    setSelectedCategory(e.target.innerText);
    
  }

  function addTask (obj){
    setListData([...listData, obj])
  }

  function handleDelete (e){
    let updateList = listData.filter((index)=>{return e.target.previousSibling.innerText!== index.text })
    setListData(updateList)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={CATEGORIES} 
      handleCategoryClick={handleCategoryClick} 
      selectedCategory={selectedCategory}
      />
      <NewTaskForm categories={CATEGORIES}  onTaskFormSubmit={addTask}/>
      <TaskList listData={listData} selectedCategory={selectedCategory} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
