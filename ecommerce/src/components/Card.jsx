import React from "react";

const Card = ({ name, studentClass, roll, school }) => {
  return (
    <div className="card">
      <h2>Student Details</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Class:</strong> {studentClass}</p>
      <p><strong>Roll No:</strong> {roll}</p>
      <p><strong>School:</strong> {school}</p>
      <p>changes by devMe</p>
      <p>changes by other dev2 </p>
    </div>
  );
};

export default Card;
