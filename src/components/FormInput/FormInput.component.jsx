import "./FormInput.styles.scss";

const FormInput = ({
  type = "text",
  register,
  options = {},
  required,
  id,
  ...otherProps
}) => (
  <div className="group">
    <label
      className={`${otherProps.value?.length ? "shrink" : ""} form-input-label`}
      htmlFor={id}
    >
      {id[0].toUpperCase() + id.slice(1)}:{" "}
    </label>
    <input
      type={type}
      id={id}
      className="form-input"
      {...register(id, { required, ...options })}
    />
  </div>
);

export default FormInput;
