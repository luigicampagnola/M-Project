import "./Card.styles.css";

function Cards({ cats }) {
  return (
    <div>
      <div className="Card-Container">
        <img
          alt=""
          src={`https://robohash.org/${cats.id}?set=set4&size=180x160`}
        />

        <h2>{cats.name}</h2>
        <h3>{cats.email}</h3>
      </div>
    </div>
  );
}

export default Cards;
