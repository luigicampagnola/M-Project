import "./App.css";
import { useEffect, useState } from "react";
import CardList from "./Components/Cards/CardList";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState("");

/*   function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handleName(e) {
    setName(e.target.value);
  }
 */
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Monsters</h1>
        {/*         <div>Name</div>
        <input onChange={handleName} />
        <div>Email</div>
        <input onChange={handleEmail} />
        <button onClick={() => setCount(count + 1)}>Click me!</button> */}
        <div className="Cards-Container">
          <CardList monsters={monsters} />
        </div>
      </header>{" "}
      *
    </div>
  );
}

export default App;
