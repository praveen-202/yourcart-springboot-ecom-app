import React from "react";
import "./App.css";
import Card from "./components/card";
import Card1 from "./components/Card1";

function App() {
  return (
    <div className="app-container">
      <Card
        name="Praveen Kumar"
        studentClass="10th Grade"
        roll="23"
        school="VIT High School"
      />
        <Card1
        empId="E123"
        name="Praveen Kumar"
        sal="50000"
        companyName="Nebulytix Technologies Pvt. Ltd."
      />
    </div>
  );
}

export default App;
