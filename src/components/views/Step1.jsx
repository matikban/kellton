import Button from "../Button/Button";

const Step1 = ({ setCurrentView, setFetchedFigures, setIsLoading }) => {
  const fetchFigures = async () => {
    try {
      const response = await fetch(
        `https://rebrickable.com/api/v3/lego/minifigs/?key=${
          import.meta.env.VITE_API_KEY
        }&search=Gryffindor`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const randomFigures = getRandomElements(data.results, 3);

      setFetchedFigures(randomFigures);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getRandomElements = (array, n) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
  };

  const getFigures = () => {
    setIsLoading(true);
    fetchFigures();
    setCurrentView("step2");
  };

  return (
    <div className="Step1">
      <h1>Lego Minifigs Mystery Box</h1>
      <Button className="button" onClick={getFigures} text="Lets Go!" />
    </div>
  );
};

export default Step1;
