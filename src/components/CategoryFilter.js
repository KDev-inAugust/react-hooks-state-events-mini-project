import React from "react";

function CategoryFilter({categories, handleCategoryClick, selectedCategory}) {

  



  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((index)=> {
        const buttonClass = selectedCategory===index  ? "selected" : "";
        return(
          <button key={index} onClick={handleCategoryClick} className={buttonClass}>{index}</button>
        )
      }
      )}
    </div>
  );
}

export default CategoryFilter;


// Whichever button was clicked should have a class of selected. 
// The other buttons should not have any class assigned.

//----onClick sets the state of the category, derive class from category