import React from "react";
import {useState} from "react"

function Search({items,onSearchItem}) {
  const [description,setDescription]= useState("")
  function handleSubmit(e) {

    e.preventDefault();
    //console.log("submitted",description);
    //console.log(items,description)
    const updatedItems = items.filter((item)=>item.description===description)
    onSearchItem(updatedItems)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
