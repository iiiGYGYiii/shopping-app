import { useForm } from "react-hook-form";

import "./LogIn.styles.scss";

import { FormInput, CustomButton } from "../components";
import { signInWithGoogle } from "../../services/firebase.utils";
import { passwordValidations } from "../../utils/validation.utils";

const LogIn = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const submitAction = handleSubmit((data) => {
    reset();
    console.log(data);
  });
  return (
    <div className="log-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={submitAction}>
        <FormInput
          value={watch("email")}
          type={"email"}
          id={"email"}
          register={register}
          required
        />
        <FormInput
          value={watch("password")}
          type={"password"}
          id={"password"}
          register={register}
          required
          options={passwordValidations}
        />
        {errors.password && `${errors.password.message}`}
        <div className="buttons">
          <CustomButton type="submit">Log In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Log In with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
