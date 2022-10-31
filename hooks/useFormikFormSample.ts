import { IFormikFormSample } from "@interfaces/IForms";
import { useState } from "react";

const useFormikFormSample = () => {
  const [formValues, setFormValues] = useState<IFormikFormSample>({
    firstName: "No Submit Yet",
    lastName: "No Submit Yet",
    email: "No Submit Yet",
  });

  return { setFormValues, formValues };
};

export default useFormikFormSample;
