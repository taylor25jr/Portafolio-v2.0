import styled from "styled-components";

export const Container = styled.div`
  :root {
    --h1: 48px;
    --h2: 32px;
    --h3: 20px;
    --body: 16px;
    --link: 16px;
    --primary: #a92935;
    --dark: #1e1e1e;
    --white: #ffffff;
  }

  .container__form {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px;
    height: 100%;
  }

  h1 {
    color: rgb(0, 0, 0);
    margin-bottom: 50px;
    width: 100%;
    text-align: center;
    font-weight: bolder;
    text-transform: uppercase;
    font-style: italic;
    font-size: 19px;
    text-align: center;
    margin-bottom: 30px;
  }

  label {
    font-size: 14px !important;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.02em;
    text-align: left;
    color: var(--white);
  }

  input[type="submit"] {
    padding: 10px 20px;
    font-size: 16px;
    width: 50%;
    text-align: center;
    text-decoration: none;
    align-self: center;
    cursor: pointer;
    border: 1px solid #999999;
    border-radius: 4px;
    background-color: #65d490;
    color: #333333;
    margin-top: 15px;
  }

  .container__form__form {
    max-width: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-self: center;
    padding: 20px;
    background-color: transparent;
    border-radius: 8px;
    margin-bottom: 50px;
    box-shadow: 0px 4px 16px 12px #00000040;
  }

  .container__form__title {
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.02em;
    text-align: center;
    color: var(--white);
    font-style: normal;
  }

  input[type="email"] {
    height: 35px;
    padding: 10px;
    border-radius: 6px;
    border: 1px;
    gap: 10px;
    background-color: transparent;
    border: 1px solid white;
    box-sizing: border-box;
    /* Esto hace que el padding no afecte el ancho total */
    font-size: 16px;
  }

  ::placeholder {
    color: #999999;
    font-size: 12px;
  }

  /* Estilos para textarea */
  textarea {
    padding: 10px;
    border-radius: 6px;
    border: 1px;
    gap: 10px;
    margin-bottom: 15px;
    box-sizing: border-box;
    font-size: 16px;
    resize: vertical;
    background-color: transparent;
    border: 1px solid white;
    /* Permite cambiar solo la altura vertical */
    resize: none;
  }
  .submitButton {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--primary);
    padding: 12px, 16px, 12px, 24px;
    border-radius: 6px;
    gap: 10px;
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: -0.02em;
    text-align: left;
    color: var(--white);
    height: 48px;
  }
`;

export const ContainerSucces = styled.div`
  margin-top: 10rem;
  text-align: center;

  button {
    border-radius: 0.6rem;
    padding: 1rem;
    margin-top: 0.8rem;
    text-transform: uppercase;
    text-align: center;
    color: #fbfbfb;
  }
`;
