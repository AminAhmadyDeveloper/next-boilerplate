import { IFormikFormSample } from "@interfaces/IForms";
import * as Yup from "yup";

export const SignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("First Name Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Last Name Required"),
  email: Yup.string().email("Invalid email").required("Email Address Required"),
});

export const signUpInitial: IFormikFormSample = {
  firstName: "",
  lastName: "",
  email: "",
};
