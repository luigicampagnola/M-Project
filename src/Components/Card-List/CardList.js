import Cards from "../Cards/Cards";
import "./card-list.styles.css"

function CardList({ monsters }) {
  return monsters.map((monsters, i) => {
    //console.log(monsters.id);
    return (
      <div className="">
        <Cards
          key={i}
          monsters={monsters.name}
          email={monsters.email}
          id={monsters.id}
        />
      </div>
    );
  });
}

export default CardList;
