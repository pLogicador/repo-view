import styled, { keyframes, css } from "styled-components";

export const Container = styled.div`
  max-width: 700px;
  background: #f2eeb6;
  border-radius: 1rem;
  padding: 3rem;
  margin: 6.5rem auto;
  box-shadow: 0 0 1px 2px #1f1611;
  position: relative;
  overflow: hidden;
  transition: background 0.3s ease-in-out;

  &:focus-within {
    background: rgba(242, 238, 182, 0.67);
  }

  h1 {
    font-size: 1.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 1rem;
      cursor: pointer;
    }
  }

  &:hover {
    animation: neonGlow 1.5s infinite alternate;
  }

  @keyframes neonGlow {
    0% {
      box-shadow: 0 0 5px #a710a7, 0 0 5px #ffe100, 0 0 5px #6628a9,
        0 0 px #ff00ff;
    }
    25% {
      box-shadow: 0 0 5px #a710a7, 0 0 10px #ffe100, 0 0 15px #6628a9,
        0 0 20px #ff00ff;
    }
    50% {
      box-shadow: 0 0 5px #a710a7, 0 0 10px #ffe100, 0 0 15px #6628a9,
        0 0 20px #ff00ff;
    }
    75% {
      box-shadow: 0 0 5px #a710a7, 0 0 10px #ffe100, 0 0 15px #6628a9,
        0 0 20px #ff00ff;
    }
    100% {
      box-shadow: 0 0 5px #a710a7, 0 0 10px #ffe100, 0 0 15px #6628a9,
        0 0 20px #ff00ff;
    }
  }

  /* devices */
  @media (max-width: 768px) {
    max-width: 90%;
    padding: 2rem;
    margin: 4rem auto;
  }

  @media (max-width: 480px) {
    max-width: 90%;
    padding: 1.5rem;
    margin: 3rem auto;
  }
`;

export const Form = styled.form`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: none;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 1px 2px 2px
      ${(props) => (props.$error ? "#d92938" : " #1f1611")};
    font-size: 1.2rem;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;

    &:hover {
      background: #eae9dd;
    }
  }

  /* devices */
  @media (max-width: 480px) {
    flex-direction: column;

    input {
      margin-bottom: 0.5rem;
    }
  }
`;

// Button Animation
const animate = keyframes`
from{
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
`;

export const SubmitButton = styled.button.attrs((props) => ({
  type: "submit",
  disabled: props.$loading,
}))`
  background: #1f1611;
  color: white;
  padding: 1rem 1.5rem;
  box-shadow: 0 1px 2px 2px #1f1611;
  border-radius: 0.5rem;
  margin: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }

  ${(props) =>
    props.$loading &&
    css`
      svg {
        animation: ${animate} 2s linear infinite;
      }
    `}

  /* devices */
  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 1.5rem;

  li {
    padding: 1rem 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 1rem;

    & + li {
      border-top: 0.1rem solid #f2d479;
    }

    a {
      color: #151440;
    }
  }
`;

export const DeleteButton = styled.button.attrs({
  type: "button",
})`
  padding: 0.8rem 0.7rem;
  background: transparent;
  color: #d92938;
  border: none;
  border-radius: 0.5rem;
`;
