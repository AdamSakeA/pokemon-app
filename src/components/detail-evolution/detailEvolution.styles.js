import styled from "styled-components";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

export const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 20px;
  gap: 20px;
  margin-bottom: 20px;
  padding: 10px 20px;
  background-color: #090909;
  cursor: pointer;
  @media (max-width: 425px) {
    text-align: center;
    flex-direction: column;
  }
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    margin-bottom: 10px;
  }
  .types {
    display: flex;
    margin: 0px;
    gap: 20px;
    color: grey;
  }
`;

export const IconEvol = styled(BsFillArrowUpRightCircleFill)`
  font-size: 40px;
  @media (max-width: 425px) {
    display: none;
  }
`;
