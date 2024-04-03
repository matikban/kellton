import SingleFigure from "../SingleFigure/SingleFigure";
import "./FiguresList.scss";

const FiguresList = ({ fetchedFigures, selectedFigure, setSelectedFigure }) => {
  return (
    <div className="FiguresList">
      {fetchedFigures?.map((figure) => {
        const { set_num, name, set_img_url, set_url } = figure;

        return (
          <SingleFigure
            className={`SingleFigure ${
              selectedFigure === set_num ? "selected" : ""
            }`}
            key={set_num}
            name={name}
            img={set_img_url}
            set_url={set_url}
            onClick={() => setSelectedFigure(set_num)}
          />
        );
      })}
    </div>
  );
};

export default FiguresList;
