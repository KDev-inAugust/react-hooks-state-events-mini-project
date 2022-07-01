import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const [input, setInput] = useState('');
  const [categoryDrop, setCategoryDrop] = useState('');

  const newItem = {
    id: uuid(), 
    text: input,
    category: categoryDrop,
  };

  function handleSubmit(e){
    e.preventDefault();
    onTaskFormSubmit(newItem)
    
  }

  function handleInputChange(e){
    setInput(e.target.value);
    console.log(e.target.value)
  }

  function handleCategory(e){
    setCategoryDrop(e.target.value)
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleInputChange}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategory}>
          {categories.map((index)=>{
            const categoryFilter = index!=="All" ? index :null;
            return (
              <option key={index}>{categoryFilter}</option>
            )
          }
          )}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
