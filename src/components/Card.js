function Card(props) {


  
  return (
    <div className="card">
      <div className="card__body"></div>
      <h2 className="card__title"> {props.Date}</h2>
      <p className="card__temp"> {props.Conditions.temp}</p>
      <p className="card__wspd"> {props.Conditions.wspd}</p>
      <p className="card__humidity"> {props.Conditions.humidity} </p>
    </div>
  );
}
export default Card;