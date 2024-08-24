import * as Yup from 'yup';
import YupPassword from 'yup-password';
YupPassword(Yup);

export const EditProfileSchema = Yup.object().shape({
  username: Yup.string().min(6).max(15),
  email: Yup.string().email("Invalid email"),
  password: Yup.string()
    .minSymbols(1)
    .minLowercase(1)
    .minNumbers(1)
    .minUppercase(1)
    .min(6)
    .max(15),
});