import { useForm } from "react-hook-form";
import {
  passwordConfirmation,
  passwordValidations,
} from "../../utils/validation.utils";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../redux/reducers/user/user.reducer";

import "./SignUp.styles.scss";

import { FormInput, CustomButton } from "../components";

const SignUp = () => {
  const dispatch = useDispatch();
  const createUserWithEmailAndPassword = (data) => dispatch(signUpStart(data));
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm();
  const submitAction = handleSubmit(createUserWithEmailAndPassword);
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
