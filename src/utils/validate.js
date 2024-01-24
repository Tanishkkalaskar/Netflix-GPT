export const validateData = (name, email, password) => {
  const isNameValid = /^.+$/.test(name.current?.value);
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email.current.value
  );
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/.test(
      password.current.value
    );

  if (!isNameValid) return "Please enter a valid name";
  if (!isEmailValid) return "Please enter a valid email";
  if (!isPasswordValid) return "Please enter a valid password";

  return null;
};
