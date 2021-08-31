export const passwordValidations = {
  pattern: {
    value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
    message:
      "Password must have length 8 and includes both a capital an lower case.",
  },
};

export const passwordConfirmation = (getValues) => ({
  validate: (val) =>
    val === getValues("password") || "Passwords doesn't match.",
});
