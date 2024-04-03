import { useForm } from "react-hook-form";
import "./ShippingForm.scss";

const ShippingForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const ErrorMessages = {
    required: "This field is required",
    email: "Make sure that email contains @ and has correct format",
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          placeholder="Name"
          {...register("firstName", { required: true })}
        />
        {errors.firstName && <p>{ErrorMessages.required}</p>}
      </div>
      <>
        <input
          placeholder="Surname"
          {...register("lastName", { required: true })}
        />
        {errors.lastName && <p>{ErrorMessages.required}</p>}
      </>
      <>
        <input
          placeholder="Phone Number"
          type="number"
          {...register("phoneNumber")}
        />
        {errors.phoneNumber && <p>{ErrorMessages.required}</p>}
      </>
      <>
        <input
          placeholder="Email"
          type="email"
          {...register("emailAddress", {
            required: true,
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          })}
        />
        {errors.emailAddress && <p>{ErrorMessages.email}</p>}
      </>
      <>
        <input
          placeholder="Date of birth"
          type="date"
          {...register("dateOfBirth", { required: true })}
        />
        {errors.dateOfBirth && <p>{ErrorMessages.required}</p>}
      </>
      <>
        <input
          placeholder="Address"
          {...register("address", { required: true })}
        />
        {errors.address && <p>{ErrorMessages.required}</p>}
      </>
      <>
        <input placeholder="City" {...register("city", { required: true })} />
        {errors.city && <p>{ErrorMessages.required}</p>}
      </>
      <>
        <input placeholder="State" {...register("state", { required: true })} />
        {errors.state && <p>{ErrorMessages.required}</p>}
      </>
      <>
        <input
          placeholder="Zip Code"
          type="number"
          {...register("zipCode", { required: true })}
        />
        {errors.zipCode && <p>{ErrorMessages.required}</p>}
      </>

      <input
        className="button"
        type="submit"
        disabled={!isValid}
        value="Submit"
      />
    </form>
  );
};

export default ShippingForm;
