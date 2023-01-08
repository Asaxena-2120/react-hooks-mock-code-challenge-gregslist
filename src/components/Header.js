import React from "react";
import Search from "./Search";

function Header({items , onSearchItem}) {
  console.log(items)
  const handleOnSearchItem = (updatedItems) => {
    onSearchItem(updatedItems)
  }
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search  items={items} onSearchItem={handleOnSearchItem}/>
    </header>
  );
}

export default Header;
