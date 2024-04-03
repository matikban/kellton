import "./SingleFigure.scss";

const SingleFigure = ({ name, img, onClick, className, set_url }) => {
  return (
    <div className={className} onClick={onClick}>
      <img src={img} />
      <h3>{name}</h3>
      <a href={set_url} target="_blank">
        Show details
      </a>
    </div>
  );
};

export default SingleFigure;
