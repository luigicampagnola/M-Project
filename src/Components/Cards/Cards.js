import "./Card.styles.css"

function Cards({ monsters, id, email }) {
  return (
    <div>
      <div className="Card-Container">
        <div className="Img-Container">
          <img alt=""/>
        </div>
        <div>{monsters}</div>
        <div>{id}</div>
        <div>{email}</div>
      </div>
    </div>
  );
}

export default Cards;
