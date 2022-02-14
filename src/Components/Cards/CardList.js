import Cards from "./Cards";

function CardList({ monsters }) {
  return monsters.map((monsters, i) => {
    //console.log(monsters.id);
    return <Cards key={i} monsters={monsters.name} email={monsters.email} id={monsters.id}/>;
  });
}

export default CardList;
