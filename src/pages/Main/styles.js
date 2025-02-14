import styled from "styled-components";

export const Container = styled.div`
  max-width: 700px;
  background: #f2eeb6;
  border-radius: 1rem;
  padding: 3rem;
  margin: 6.5rem auto;
  box-shadow: 0 0 1px 2px #1f1611;
  position: relative;
  overflow: hidden;

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
`;

export const Form = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: none;
    padding: 1rem 1.5rem;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    box-shadow: 0 1px 2px 2px #1f1611;
    font-size: 1.2rem;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;

    &:hover {
      background: #eae9dd;
    }
  }
`;

export const SubmitButton = styled.button`
  background: #1f1611;
  color: white;
  padding: 1rem 1.5rem;
  box-shadow: 0 1px 2px 2px #1f1611;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
