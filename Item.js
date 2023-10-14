import React from "react";
import { useState } from "react";
export default function Item({ obj, setInitialItems }) {
  const [packe, setPacke] = useState(false);

  function handle(e) {
    setPacke(e.target.checked);
    // setInitialItems((prev) => [...prev, { ...prev }]);
  }

  return (
    <li>
      <input
        type="checkbox"
        checked={packe}
        onChange={handle}
        name={obj.description}
        id={obj.description}
      />
      <span style={packe ? { textDecoration: "line-through" } : {}}>
        {obj.quantity} {obj.description}
      </span>
      <button>❌</button>
    </li>
  );
}

{
  /* <input 
                type="checkbox" 
                id="isFriendly" 
                checked={formData.isFriendly}
                onChange={handleChange}
                name="isFriendly"
            /> */
}
