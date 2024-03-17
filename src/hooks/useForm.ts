import React, { useState } from "react";
import { helpHttp } from "../Helper/helpHttp";

interface FormState {
  form: object;
  errors: object;
  loading: boolean;
  response: boolean;
  handleChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  handleBlur: (
    event:
      | React.FocusEvent<HTMLInputElement>
      | React.FocusEvent<HTMLTextAreaElement>
  ) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const useForm = (
  initialForm: object,
  validations: (form: object) => object
) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(false);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (
    e:
      | React.FocusEvent<HTMLInputElement>
      | React.FocusEvent<HTMLTextAreaElement>
  ) => {
    handleChange(e);
    setErrors(validations(form));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors(validations(form));

    if (Object.keys(errors).length === 0) {
      setLoading(true);
      helpHttp()
        .post("https://formsubmit.co/ajax/luisdavidferrerconde@gmail.com", {
          method: "POST",
          body: form,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          signal: new AbortSignal(),
        })
        .then(() => {
          setLoading(false);
          setResponse(true);
          setTimeout(() => {
            setResponse(false);
          }, 5000);
          setForm(initialForm);
        });
    } else {
      return;
    }
  };

  const returned: FormState = {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };

  return returned;
};
