function Cards({ monsters, id, email }) {
  return (
    <div>
      <div className="Card">
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
