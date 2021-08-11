import "./SignUp.styles.scss";

import { auth, createUserProfileDocument } from "../../services/firebase.utils";

import { FormInput, CustomButton } from "../components";
import { useForm } from "react-hook-form";
import {
  passwordConfirmation,
  passwordValidations,
} from "../../utils/validation.utils";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    reset,
    formState: { errors },
  } = useForm();
  const submitAction = handleSubmit(async (data) => {
    const { email, password, displayName } = data;
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      reset();
    } catch (error) {
      console.error(error);
    }
  });
  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account.</h2>
      <span>Sign up with your email and password.</span>
      <form onSubmit={submitAction}>
        <FormInput
          value={watch("displayName")}
          register={register}
          id={"displayName"}
          required
        />
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
          options={passwordValidations}
          required
        />
        {errors.password && errors.password.message}
        <FormInput
          value={watch("confirmPassword")}
          type={"password"}
          id={"confirmPassword"}
          register={register}
          options={passwordConfirmation(getValues)}
          required
        />
        {errors.confirmPassword && errors.confirmPassword.message}
        <CustomButton type="submit">Sign Up!</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
