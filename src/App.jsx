import { useState } from "react";

import Step1 from "./components/views/Step1";
import Step2 from "./components/views/Step2";
import Step3 from "./components/views/Step3";
import "./app.scss";

function App() {
  const [currentView, setCurrentView] = useState("step1");
  const [fetchedFigures, setFetchedFigures] = useState([]);
  const [selectedFigure, setSelectedFigure] = useState(null);
  const [partsDetails, setPartsDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  return (
    <div className="container">
      {currentView === "step1" && isLoading !== true && (
        <Step1
          setCurrentView={setCurrentView}
          setFetchedFigures={setFetchedFigures}
          setIsLoading={setIsLoading}
        />
      )}
      {currentView === "step2" && isLoading !== true && (
        <Step2
          fetchedFigures={fetchedFigures}
          selectedFigure={selectedFigure}
          setSelectedFigure={setSelectedFigure}
          setCurrentView={setCurrentView}
          setPartsDetails={setPartsDetails}
          setIsLoading={setIsLoading}
        />
      )}
      {currentView === "step3" && isLoading !== true && (
        <Step3
          selectedFigure={selectedFigure}
          fetchedFigures={fetchedFigures}
          partsDetails={partsDetails}
          setCurrentView={setCurrentView}
          setIsLoading={setIsLoading}
          setOrderSubmitted={setOrderSubmitted}
        />
      )}
      {isLoading && orderSubmitted !== true && <span className="loader"></span>}
      {orderSubmitted && (
        <span>Order successfully submitted! Thank you :)</span>
      )}
    </div>
  );
}

export default App;
