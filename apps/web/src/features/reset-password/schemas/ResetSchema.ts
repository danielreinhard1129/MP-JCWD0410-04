import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);

export const ResetSchema = Yup.object().shape({
  password: Yup.string()
    .required("Password is required")
    .minSymbols(1)
    .minLowercase(1)
    .minNumbers(1)
    .minUppercase(1)
    .min(6)
    .max(15),
});
