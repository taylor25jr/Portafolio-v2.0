import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  .hard-skills {
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }
  .hability {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 3.4rem;
    }
  }

  h2 {
    display: inline-block;
    margin-bottom: 2rem;
    // border-bottom: 0.2rem solid var(--blue);
    font-size: 3rem;
    margin-top: 0rem;
    color: var(--green);
  }

  h3 {
    margin-top: 2rem;
    color: var(--green);
  }

  p {
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }

  .about-image {
    text-align: center;
    img {
      margin-top: 2rem;
      width: 75%;
      filter: grayscale(0);
      transition: filter 0.5s;
      &:hover {
        filter: grayscale(0);
      }
    }
  }

  @media only screen and (max-width: 480px) {
    .about-image {
      max-width: 100%;
      margin-top: 4rem;
      height: 450px;
    }
    .imgAbout {
      margin-top: 2rem;
      width: 100%;
      height: 100% !important;
      filter: grayscale(0);
      transition: filter 0.5s;
      &:hover {
        filter: grayscale(0);
      }
    }
  }

  @media (max-width: 960px) {
    display: block;
    text-align: center;

    .hard-skills {
      justify-content: center;
    }
    .fAVEDL .about-image {
      max-width: 100%;
      margin-top: 4rem;
      height: 350px;
    }
    .imgAbout {
      margin-top: 2rem;
      width: 100%;
      height: 100% !important;
      filter: grayscale(0);
      transition: filter 0.5s;
      &:hover {
        filter: grayscale(0);
      }
    }
  }

  @media (min-width: 900px) and (max-width: 1360px) {
    display: block;
    text-align: center;

    .hard-skills {
      justify-content: center;
    }
    .about-image {
      max-width: 100%;
      margin-top: 4rem;
      height: 550px !important;
    }
    .imgAbout {
      margin-top: 2rem;
      width: 450px !important;
      height: 100% !important;
      filter: grayscale(0);
      transition: filter 0.5s;
      &:hover {
        filter: grayscale(0);
      }
    }
  }
`;
