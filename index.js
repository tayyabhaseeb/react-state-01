import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "XBOX", quantity: 1, packed: true },
// ];

function App() {
  const [initialItems, setInitialItems] = useState([]);

  return (
    <div className="app">
      <Logo />
      <Form setInitialItems={setInitialItems} />
      <PackingList
        initialItems={initialItems}
        setInitialItems={setInitialItems}
      />
      <Stats />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
