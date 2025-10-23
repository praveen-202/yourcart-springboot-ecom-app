import React from "react";

const Card1 = ({ empId, name, sal, companyName }) => {
  return (
    <div className="card1">
      <h2>Employee Details</h2>
      <p><strong>Employee ID:</strong> {empId}</p>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Salary:</strong> ${sal}</p>
      <p><strong>Company:</strong> {companyName}</p>
    </div>
  );
};

export default Card1;
