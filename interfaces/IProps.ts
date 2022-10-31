import { FormikHelpers } from "formik";
import { IFormikFormSample } from "@interfaces/IForms";
import { Dispatch, SetStateAction } from "react";

export interface IFormikFormSampleProps {
  onSubmit:
    | ((
        values: IFormikFormSample,
        formikHelpers: FormikHelpers<IFormikFormSample>
      ) => void | Promise<any>)
    | (() => void);

  formHook: {
    setFormValues: Dispatch<SetStateAction<IFormikFormSample>>;
    formValues: IFormikFormSample;
  };
}
