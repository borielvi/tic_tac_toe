import React, { useState, useEffect } from 'react';
import API from '../utils/API'

// Set state using React Hooks
function YourHomePage() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");


// You can use React Hooks to fetch data using the API we created 
// Check out the API folder for hints

// This will add an item

  const addItem = event => {
    event.preventDefault();
    setItems([
      ...items,
      {
        id: items.length,
        name: itemName
      }
    ]);
    setItemName("");
  };

  // When the form is submitted add Item is fired
  // Note the value will be the itemName set in state
  // Map allows you to create a new array
  
  return (
    <>
      <form onSubmit={addItem}>
        <label>
          <input
            name="item"
            type="text"
            value={itemName}
            onChange={e => setItemName(e.target.value)}
          />
        </label>
      </form>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}

export default YourHomePage;
