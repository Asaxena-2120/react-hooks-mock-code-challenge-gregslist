import React from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([])
  function handleSearchItem(updatedItems){
    //console.log("reached search handle",updatedItems)
    setItems(updatedItems)
  }
  return (
    <div className="app">
      <Header items={items}onSearchItem={handleSearchItem}/>
      <ListingsContainer items={items} onsetItems={setItems} />
    </div>
  );
}

export default App;
