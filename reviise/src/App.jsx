import React, { useState } from "react";
import './App.css';  // Import CSS file for styling

function App() {
  const [name, setName] = useState("");

  // Function to convert name to uppercase
  const firstName = (name) => name.toUpperCase();

  // Handle the change in the input field
  const handleChange = (event) => setName(event.target.value);

  return (
    <div className="app-container">
      <div className="card">
        <h1>Hii there! It's {firstName(name)}</h1>
        <input
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
      </div>
    </div>
  );
}

export default App;
