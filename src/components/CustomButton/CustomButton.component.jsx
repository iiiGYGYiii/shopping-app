import "./CustomButton.styles.scss";

const CustomButton = ({
  children,
  invert,
  isGoogleSignIn = false,
  ...otherProps
}) => (
  <button
    className={`${invert ? "inverted" : ""} ${
      isGoogleSignIn ? "google-sign-in" : ""
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
