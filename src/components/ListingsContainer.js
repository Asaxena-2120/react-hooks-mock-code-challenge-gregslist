import React, { useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({items,onsetItems}) {
  //const [items, setItems] = useState([])

  useEffect(()=>{
    fetch("http://localhost:6001/listings")
    .then((resp)=>resp.json())
    .then((data)=>onsetItems(data))
  },[])
   console.log(items)
  function handleDelete(deletedItemId){
    console.log("items to be deleted", deletedItemId)
    //find the item to be deleted and update the list
    const updateItems = items.filter((item)=>item.id !==deletedItemId)
    onsetItems(updateItems)
    //we need a DELETE fetch request
   /*  fetch(`http://localhost:6001/listings/${deletedItemId}`,{
          method:"DELETE",
          headers: {
            'Content-type':'application/json'
          }
          })
          .then((resp)=>console.log(resp)); */
    
  }
  //console.log("items",items)
  const makeList = items.map((item)=>{
   //console.log(item.description);
    return (<ListingCard key={item.description} 
      id={item.id}
      description={item.description} 
      image={item.image} 
      location={item.location}
      onDelete={handleDelete}/>)
  })
  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {makeList}
        
      </ul>
    </main>
  );
}

export default ListingsContainer;
