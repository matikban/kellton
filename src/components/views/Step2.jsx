import Button from "../Button/Button";
import FiguresList from "../FiguresList/FiguresList";

const Step2 = ({
  fetchedFigures,
  selectedFigure,
  setSelectedFigure,
  setCurrentView,
  setPartsDetails,
  setIsLoading,
}) => {
  const getParts = async () => {
    try {
      const response = await fetch(
        `https://rebrickable.com/api/v3/lego/minifigs/${selectedFigure}/parts/?key=${
          import.meta.env.VITE_API_KEY
        }`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setPartsDetails(data.results);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const proceedToCheckout = () => {
    setIsLoading(true);
    getParts();
    setCurrentView("step3");
  };

  return (
    <div className="Step2">
      <h1>Choose your Minifig</h1>
      <FiguresList
        fetchedFigures={fetchedFigures}
        setSelectedFigure={setSelectedFigure}
        selectedFigure={selectedFigure}
      />
      <Button
        className={`button ${selectedFigure === null && "disabled"}`}
        onClick={proceedToCheckout}
        text="Proceed to checkout"
      />
    </div>
  );
};

export default Step2;
