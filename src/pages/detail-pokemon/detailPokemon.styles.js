import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 50px;
  .wrapper-types-container {
    display: flex;
    gap: 20px;
  }
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;
