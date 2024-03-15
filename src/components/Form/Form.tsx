import { Container } from './styles'
import { useForm } from '../../hooks/useForm';


export function Form() {

  const intialForm = {
    email: "",
    comments: "",
  };
  
  const validation = (form: object) : object => {
    const errors: object = {};
    const regexEmail  = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    const regexComments = /^.{1,255}$/;

    if (!form.email.trim()) {
      errors.email = "El campo email es requerido";
    } else if (!regexEmail.test(form.email.trim())) {
      errors.email = "El campo email es incorrecto";
    }

    if (!form.comments.trim()) {
      errors.comments = "El campo comentarios es requerido";
    } else if (!regexComments.test(form.comments.trim())) {
      errors.comments = "El campo comentarios solo acepta 255 caracteres";
    }
    return errors;
  };

  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(intialForm, validation);
  
  return (
    <Container>
      <div className="container__form">
        <form className="container__form__form" onSubmit={handleSubmit}>
          {loading &&
          (
            <>
              <h1 className="container__form__title">Escribeme</h1>
              <label htmlFor="email">Correo electronico</label>
              <input
                type="email"
                name="email"
                placeholder="Escribe tu email"
                onChange={handleChange}
                value={form.email}
                onBlur={handleBlur}
                required
              />
              {errors.email && <p className="errorAlert">{errors.email}</p>}
              <br />
              <label htmlFor="comments">Comentarios</label>
              <textarea
                name="comments"
                placeholder="Escribe tus comentarios"
                value={form.comments}
                onBlur={handleBlur}
                onChange={handleChange}
                required
              ></textarea>
              {errors.comments && (
                <p className="errorAlert">{errors.comments}</p>
              )}
              <button type="submit" className="submitButton">
                Enviar
              </button>
            </>
          )}
        </form>
      </div>
    </Container>
  );
}
