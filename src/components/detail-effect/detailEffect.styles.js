import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    margin-bottom: 20px;
  }
  .content-container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 30px;
  }
  @media (max-width: 425px) {
    .content-container {
      width: 100%;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    margin-bottom: 10px;
  }
  .skill-effect {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    color: grey;
    margin-bottom: 10px;
  }
`;
