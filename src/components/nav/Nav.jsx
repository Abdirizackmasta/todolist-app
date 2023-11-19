import React, { useState } from "react";
import "./Nav.css";

function Nav({ onAddItems }) {
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, packed: false, id: Date.now() };

    onAddItems(newItem);

    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>What are you planning to do?</h3>
      <input
        type="text"
        placeholder="Todos..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default Nav;
