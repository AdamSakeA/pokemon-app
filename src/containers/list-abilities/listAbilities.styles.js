import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  .abilities {
    display: flex;
    gap: 30px;
    margin-bottom: 20px;
  }
  @media (max-width: 425px) {
    .abilities {
      justify-content: center;
      gap: 15px;
    }
  }
`;
