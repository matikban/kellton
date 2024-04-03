import FigureSummary from "../FigureSummary/FigureSummary";
import ShippingForm from "../ShippingForm/ShippingForm";

const Step3 = ({
  selectedFigure,
  fetchedFigures,
  partsDetails,
  setCurrentView,
  setIsLoading,
  setOrderSubmitted,
}) => {
  const submitDataToFakeAPI = (formData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ success: true, message: "Data submitted successfully" });
      }, 1000);
    });
  };

  const onSubmit = (formData) => {
    setIsLoading(true);

    submitDataToFakeAPI(formData)
      .then((response) => {
        console.log("Success:", response);
        setOrderSubmitted(true);

        setTimeout(() => {
          setOrderSubmitted(false);
          setIsLoading(false);

          setCurrentView("step1");
        }, 1500);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="Step3">
      <div className="Step3__form">
        <h2>Shipping Details</h2>
        <ShippingForm onSubmit={onSubmit} />
      </div>
      <div className="Step3__summary">
        <FigureSummary
          selectedFigure={selectedFigure}
          fetchedFigures={fetchedFigures}
          partsDetails={partsDetails}
        />
      </div>
    </div>
  );
};

export default Step3;
