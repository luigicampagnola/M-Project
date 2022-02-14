import Cards from "../Cards/Cards";
import "./card-list.styles.css";

function CardList({ cats }) {
  return (
    <div className="card-list">
      {cats.map((cats, i) => {
        //console.log(monsters.id);
        return <Cards key={cats.id} cats={cats} />;
      })}
    </div>
  );
}

export default CardList;
