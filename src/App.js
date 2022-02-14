import "./App.css";
import { useEffect, useState } from "react";
import CardList from "./Components/Card-List/CardList";

function App() {
  const [cats, setcats] = useState([]);
/*   const [count, setCount] = useState(0);
  const [email, setEmail] = useState(""); */

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
      .then((users) => setcats(users));
  }, []);

  return (
    <div className="App">
      <header className="">
        <h1>Cats</h1>
        {/*         <div>Name</div>
        <input onChange={handleName} />
        <div>Email</div>
        <input onChange={handleEmail} />
        <button onClick={() => setCount(count + 1)}>Click me!</button> */}
        <div className="">
          <CardList cats={cats} />
        </div>
      </header>{" "}
      *
    </div>
  );
}

export default App;
