import * as React from "react";
import "./styles.css";
import PhoneAdded from "./components/phoneAdded";
import PhonesList from "./components/phonesList";
import MainContainer from "./components/mainContainer";

export default function App() {
  return (
    <div className="App">
      <PhoneAdded />
      <PhonesList />
    </div>
  );
}
