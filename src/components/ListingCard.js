import React, { useState } from "react";

function ListingCard({id,description, image, location, onDelete}) {
  //console.log(description,image,location)

  const[liked,setLiked] = useState(false);
  function handleClick(){
    
    setLiked(liked=>!liked)
  }
  function handleDelete(e){
    //console.log(e.target)
    console.log(id)
    onDelete(id)
  }
  return (
   
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        {<img src={image} alt={"description"} />} 
        
      </div>
      <div className="details">
        {liked ? (
          <button onClick={handleClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
