import * as Yup from 'yup';
import YupPassword from 'yup-password';
YupPassword(Yup);

export const RegisterSchema = Yup.object().shape({
  username: Yup.string().required("Username is required").max(15),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required")
    .minLowercase(1)
    .minNumbers(1)
    .minUppercase(1)
    .min(6)
    .max(15),
});