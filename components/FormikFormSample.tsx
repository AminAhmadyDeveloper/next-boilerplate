import { FC } from "react";
import styles from "@styles/Home.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { signUpInitial, SignUpSchema } from "@validators/schema/signUpSchema";
import { IFormikFormSampleProps } from "@interfaces/IProps";

const FormikFormSample: FC<IFormikFormSampleProps> = (props) => {
  return (
    <Formik
      onSubmit={props.onSubmit}
      validationSchema={SignUpSchema}
      initialValues={signUpInitial}
    >
      <Form className={styles.form}>
        <label htmlFor="firstName">First Name</label>
        <Field id="firstName" name="firstName" placeholder="John" />
        <ErrorMessage
          className={styles.error}
          component="h6"
          name="firstName"
        />

        <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" placeholder="Doe" />
        <ErrorMessage className={styles.error} component="h6" name="lastName" />

        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="john@acme.com"
          type="email"
        />
        <ErrorMessage className={styles.error} component="h6" name="email" />

        <button type="submit">Submit</button>

        <label>First Name: {props.formHook.formValues?.firstName}</label>
        <label>Last Name: {props.formHook.formValues?.lastName}</label>
        <label>Email: {props.formHook.formValues?.email}</label>
      </Form>
    </Formik>
  );
};

export default FormikFormSample;
