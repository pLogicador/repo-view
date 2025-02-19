import { Link } from "react-router-dom";
import styled from "styled-components";

export const Loading = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 24px;
  font-weight: bold;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const Container = styled.div`
  margin: 8rem auto;
  padding: 3rem;
  max-width: 70rem;
  background: rgba(13, 13, 13, 0.6);
  border-radius: 1rem;
  box-shadow: 0 0 1px 2px #7350f2;

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 2rem;
    margin: 5rem auto;
  }

  @media (max-width: 480px) {
    max-width: 95%;
    padding: 1.5rem;
    margin: 3rem auto;
  }
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 10rem;
    border-radius: 2rem;
    margin: 2rem 0;

    /* devices */
    @media (max-width: 480px) {
      width: 7rem;
    }
  }

  h1 {
    font-size: 2rem;
    color: #f2b705;

    /* devices */
    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }

  p {
    color: #f2f2f2;
    margin: 1rem;
    font-size: 1.15rem;
    max-width: 400px;

    /* devices */
    @media (max-width: 480px) {
      font-size: 1rem;
      max-width: 90%;
    }
  }
`;

export const BackButton = styled(Link)`
  outline: none;
  border: none;
  background: transparent;
  margin-top: 0.5rem;
`;
