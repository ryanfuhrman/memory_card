import React, { useState } from "react";
import uniqid from "uniqid";
import Card from "./Card";
import ash from "./imgs/ash.png";
import bangalore from "./imgs/bangalore.png";
import bloodhound from "./imgs/bloodhound.png";
import caustic from "./imgs/caustic.png";
import gibraltar from "./imgs/gibraltar.png";
import horizon from "./imgs/horizon.png";
import octane from "./imgs/octane.png";
import pathfinder from "./imgs/pathfinder.png";
import seer from "./imgs/seer.png";
import valkyrie from "./imgs/valkyrie.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [streak, setStreak] = useState(0);
  const [cards, setCards] = useState([
    { name: "Ash", id: uniqid(), img: ash, clicked: false },
    {
      name: "Bangalore",
      id: uniqid(),
      img: bangalore,
      clicked: false,
    },
    {
      name: "Bloodhound",
      id: uniqid(),
      img: bloodhound,
      clicked: false,
    },
    {
      name: "Caustic",
      id: uniqid(),
      img: caustic,
      clicked: false,
    },
    {
      name: "Gibraltar",
      id: uniqid(),
      img: gibraltar,
      clicked: false,
    },
    {
      name: "Horizon",
      id: uniqid(),
      img: horizon,
      clicked: false,
    },
    {
      name: "Octane",
      id: uniqid(),
      img: octane,
      clicked: false,
    },
    {
      name: "Pathfinder",
      id: uniqid(),
      img: pathfinder,
      clicked: false,
    },
    { name: "Seer", id: uniqid(), img: seer, clicked: false },
    {
      name: "Valkyrie",
      id: uniqid(),
      img: valkyrie,
      clicked: false,
    },
  ]);

  return (
    <div className="App">
      <div className="count">Count: {count}</div>
      <div className="streak">Best Streak: {streak}</div>
      <Card cardInfo={cards} />
    </div>
  );
}

export default App;
