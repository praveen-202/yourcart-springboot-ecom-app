import React from "react";
import "./App.css";
import Card from "./components/card";

function App() {
  return (
    <div className="app-container">
      <Card
        name="Praveen Kumar"
        studentClass="10th Grade"
        roll="23"
        school="VIT High School"
      />
    </div>
  );
}

export default App;
