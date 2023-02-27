import React, { useState } from "react";
import uniqid from "uniqid";
import Card from "./Card";
import "./App.css";

function App() {
  const [cards, setCards] = useState([
    { name: "One", id: uniqid(), img: "", clicked: false },
    { name: "Two", id: uniqid(), img: "", clicked: false },
    { name: "Three", id: uniqid(), img: "", clicked: false },
    { name: "Four", id: uniqid(), img: "", clicked: false },
    { name: "Five", id: uniqid(), img: "", clicked: false },
    { name: "Six", id: uniqid(), img: "", clicked: false },
    { name: "Seven", id: uniqid(), img: "", clicked: false },
    { name: "Eight", id: uniqid(), img: "", clicked: false },
    { name: "Nine", id: uniqid(), img: "", clicked: false },
    { name: "Ten", id: uniqid(), img: "", clicked: false },
  ]);

  return (
    <div className="App">
      <Card cardInfo={cards} />
    </div>
  );
}

export default App;
