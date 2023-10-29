import "./Heading.css";

const Heading = ({icon, title}) => {
  return (
    <div className="card__heading">
      <div className="card__icon">{icon}</div>
      <h6 className="sub__heading">{title}</h6>
    </div>
  );
};

export default Heading;
