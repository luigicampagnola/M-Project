import "./App.css";
import { useEffect, useState } from "react";
import CardList from "./Components/Card-List/CardList";
import SearchBox from "./Components/Search-Box/search-box";

function App() {
  const [cats, setcats] = useState([]);
  const [searchCats, setCatSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setcats(users));
  }, []);

  function searchCatHandler(e) {
    setCatSearchField(e.target.value);   
  }

  const filteredCats = cats.filter((cat) => {
    return cat.name.toLowerCase().includes(searchCats.toLowerCase());
  });

  return (
    <div className="App">
      <header className="">
        <h1>Hash Cats</h1>
        <SearchBox searchCatHandler={searchCatHandler} />
        <div className="">
          <CardList cats={filteredCats} />
        </div>
      </header>{" "}
      *
    </div>
  );
}

export default App;
