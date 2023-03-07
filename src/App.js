import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let amount = parseInt(count);
    if (amount <= 0) {
      setText(["Number Must Exceed ZERO"]);

      // amount = 1;
    } else if (amount > 8) {
      setText(["Number Mustn't Exceed 8"]);
      // amount = 8;
    } else {
      setText(data.slice(0, amount));
    }
  };
  return (
    <section className="section-center">
      <h3>lorem ipsum paragraphs</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragrphs: </label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
