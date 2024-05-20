import React, { useState } from "react";
import './FizzBuzz.css'

const FizzBuzz = () => {
  const [inputs, setInputs] = useState([1, 3, 5, "", 15, "A", 23]);
  const [results, setResults] = useState([]);
  const [show,setShow] = useState(false)

  const processInputs = () => {
    setShow(true)
    let newResults = [];
    inputs.forEach((input) => {
      if (typeof input === "number") {
        if (input % 3 === 0 && input % 5 === 0) {
          newResults.push("FizzBuzz");
        } else if (input % 3 === 0) {
          newResults.push("Fizz");
        } else if (input % 5 === 0) {
          newResults.push("Buzz");
        } else {
          newResults.push(`Divided ${input} by 3 or Divided ${input} by 5`);
        }
      } else {
        newResults.push("Invalid item");
      }
    });
    setResults(newResults);
  };

  const maxLength = Math.max(inputs.length, results.length);

  return (
    <div className="container">
      <h1>Coding Exercise - Accenture</h1>
      <button onClick={processInputs}>Show Table</button>
      {
        show && (
            <table>
        <thead>
          <tr>
              <th>Input</th>
              <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: maxLength }).map((_, index) => (
            <tr key={index}>
              <td>{inputs[index] !== undefined ? inputs[index] : ''}</td>
              <td>{results[index] !== undefined ? results[index] : ''}</td>
            </tr>
          ))}

        </tbody>
      </table>
        )
      }
    </div>
  );
};

export default FizzBuzz;
