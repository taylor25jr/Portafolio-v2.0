import styled from "styled-components";


export const Container = styled.main`
  position: relative;
  z-index: 0;
  padding: 30px;
  width: 100% !important;
  overflow-x: hidden;
  #tsparticles{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  @media (max-width: 740px){
    padding: 0 4rem;

    .tsContainer{
      padding: 30px;
      width: 100% !important;
    }
  }

  @media(max-width: 360px){
    padding: 0 2rem;
  }
`