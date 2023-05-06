import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 50px;
  .wrapper-content {
    width: 50%;
    h1 {
      font-size: 50px;
      margin-bottom: 10px;
    }
  }
  .wrapper-types-container {
    display: flex;
    color: grey;
    font-size: 16px;
    gap: 20px;
  }
  @media (max-width: 425px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .wrapper-content {
      width: 100%;
      h1 {
        text-align: center;
      }
    }
    .wrapper-types-container {
      justify-content: center;
    }
  }
`;

export const Contents = styled.div`
  display: flex;
  gap: 30px;
  div {
    flex: 2;
  }
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;
