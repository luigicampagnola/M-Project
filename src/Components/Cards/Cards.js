import "./Card.styles.css";

function Cards({ cats }) {
  return (
    <div>
      <div className="Card-Container">
        <img alt="" src={`https://robohash.org/${cats.id}?set=set4&size=180x160`} />

        <h1>{cats.name}</h1>
        <div>{cats.id}</div>
        <div>{cats.email}</div>
      </div>
    </div>
  );
}

export default Cards;
