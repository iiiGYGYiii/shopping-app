import { useForm } from "react-hook-form";

import "./LogIn.styles.scss";

import { FormInput, CustomButton } from "../components";

const LogIn = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const submitAction = handleSubmit((data) => {
    console.log(errors);
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
          options={{
            pattern: {
              value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
              message:
                "Password must have length 8 and includes both a capital an lower case.",
            },
          }}
        />
        {errors.password && `${errors.password.message}`}
        <CustomButton type="submit">Log In</CustomButton>
      </form>
    </div>
  );
};

export default LogIn;
