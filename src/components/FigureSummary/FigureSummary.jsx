import "./FigureSummary.scss";

const FigureSummary = ({ fetchedFigures, selectedFigure, partsDetails }) => {
  const basicFigureInfo = fetchedFigures.find((figure) => {
    return figure.set_num === selectedFigure;
  });

  const { name, num_parts, set_img_url } = basicFigureInfo;

  return (
    <div className="FigureSummary">
      <h2>Summary</h2>
      <img src={set_img_url} alt="icon" />
      <h4>{name}</h4>
      <p>{`There are ${num_parts} parts in this minifig`}</p>
      <div className="FigureSummary__parts">
        {partsDetails?.map(({ part }) => {
          return (
            <div key={part.part_num} className="FigureSummary__parts__single">
              <img src={part.part_img_url} />
              <div>
                <h5>{part.name}</h5>
                <span>{part.part_num}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FigureSummary;
