import React, { useState } from "react"; // rfce
// remember:
// -export at the end
import "./App.css";

export default function App() {
  // declare state at the begining of component
  const [count, setCount] = useState(0); //value

  let color = count > 0 ? "green" : count < 0 ? "red" : "black";
  /*if (count > 0) {
    //change color
    color = "green";
  }
  if (count < 0) {
    color = "red";
  }
  if (count === 0) {
    color = "black";
  }*/

  // functions
  const increment = () => setCount(count + 1); //add event
  const descrement = () => setCount(count - 1);
  const resetCount = () => setCount(0);

  return (
    // render
    // dat state truc tiep vao trong element html
    // dat even handle truc tiep vao trong element html
    <div className="container">
      <h1>Counter</h1>
      <span style={{ color: color }} id="value">
        {count}
      </span>
      <div class="btn-group">
        <button onClick={descrement} class="btn btn-decrease">
          DECREASE
        </button>
        <button onClick={resetCount} class="btn btn-reset">
          RESET
        </button>
        <button onClick={increment} class="btn btn-increase">
          INCREASE
        </button>
      </div>
    </div>
  );
}

// export default App;
//
