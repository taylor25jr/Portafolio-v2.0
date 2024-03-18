import { Container } from "./styles";
import "../../styles/global";
import { useState } from "react";
import { LoaderSpinning } from "../Loader/Loader.tsx";
import { useForm, SubmitHandler } from "react-hook-form";
import { SuccessAlert } from "../SuccessAlert/SuccessAlert.tsx";

interface RequestOptions {
  method?: string;
  headers?: HeadersInit;
  body?: any;
}

type Inputs = {
  email: string;
  comments: string;
};

export function Form() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const url: string =
      "https://formsubmit.co/ajax/luisdavidferrerconde@gmail.com";
    const options: RequestOptions = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    try {
      setLoading(true);
      const res = await fetch(url, options);
      if (!res.ok) {
        Promise.reject({
          err: true,
          status: res.status || "00",
          statusText: res.statusText || "Ocurrió un error",
        });
      } else {
        const responseData = await res.json();
        console.log(responseData);
        setResponse(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setTimeout(() => {
        setResponse(false);
      }, 3000);
      reset();
    }
  };

  return (
    <Container>
      <div className="container__form">
        <form
          className="container__form__form"
          onSubmit={handleSubmit(onSubmit)}
        >
          {loading ? (
            <LoaderSpinning />
          ) : (
            <>
              <h1 className="container__form__title">Get in touch</h1>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Escribe tu email"
                {...register("email", {
                  required: true,
                  pattern: /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/,
                })}
              />
              {errors.email?.type === "required" && (
                <span>This field is required</span>
              )}
              {errors.email?.type === "pattern" && (
                <span>This is not a valid email</span>
              )}
              <br />
              <label htmlFor="comments">Comments</label>
              <textarea
                placeholder="Escribe tus comentarios"
                {...register("comments", {
                  required: true,
                  maxLength: 240,
                })}
              ></textarea>
              {errors.comments?.type === "required" && (
                <span>This field is required</span>
              )}
              {errors.comments?.type === "maxLength" && (
                <span>This field has more than 240 words</span>
              )}
              <button type="submit" className="submitButton">
                Sumbit
              </button>
            </>
          )}
        </form>
      </div>
      {response && <SuccessAlert />}
    </Container>
  );
}
