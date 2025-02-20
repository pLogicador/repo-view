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

export const IssuesList = styled.ul`
  margin-top: 3rem;
  padding: 1rem;
  border-top: 1px solid white;
  list-style: none;
  background: transparent;

  li {
    display: flex;
    flex-wrap: wrap;
    padding: 1.5rem 1rem;

    & + li {
      margin-top: 1rem;
    }

    img {
      width: 3rem;
      height: 3rem;
      border-radius: 5rem;
      box-shadow: 0 0 1px 2px #f2eeb6;
    }

    div {
      flex: 1;
      margin-left: 1rem;
      min-width: 0;

      p {
        margin-top: 1rem;
        font-size: 1.1rem;
        color: #a6174b;

        &:hover {
          color: #f288b9;
        }
      }
    }

    strong {
      color: white;
      font-size: 1rem;
      flex-wrap: wrap;

      a {
        text-decoration: none;
        color: #7672f2;
        transform: 0.3s;

        &:hover {
          color: rgba(104, 99, 251, 0.83);
        }
      }

      span {
        font-size: 1rem;
        font-weight: 600;
        margin: 0.5rem;
        align-items: center;
        border-bottom-right-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
        background: #f2380f;
        padding: 0.1rem;
      }
    }

    /* devices */
    @media (max-width: 768px) {
      li {
        padding: 1rem;
        font-size: 0.9rem;
      }

      img {
        width: 2.5rem;
        height: 2.5rem;
      }

      div p {
        font-size: 1rem;
      }

      strong {
        font-size: 0.9rem;
      }

      span {
        font-size: 0.85rem;
      }
    }

    @media (max-width: 480px) {
      li {
        padding: 0.8rem;
        font-size: 0.85rem;
        gap: 0.5rem;
      }

      img {
        width: 2rem;
        height: 2rem;
      }

      div p {
        font-size: 0.9rem;
      }

      strong {
        font-size: 0.85rem;
      }

      span {
        font-size: 0.8rem;
      }
    }
  }
`;

export const PageAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    outline: none;
    border: 1px solid white;
    border-radius: 0.5rem;
    background: transparent;
    color: white;
    padding: 0.7rem;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
`;
