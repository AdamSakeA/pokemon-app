import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 425px) {
    justify-content: center;
    align-items: center;
  }
`;
