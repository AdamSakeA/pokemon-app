import styled from "styled-components";

export const Container = styled.div`
  max-width: 1240px;
  margin: auto;
  margin-top: 100px;
  @media (max-width: 425px) {
    max-width: 300px;
    padding: 20px;
    margin-top: 30px;
  }

  @media (max-width: 768px) {
    max-width: 700px;
    margin-top: 50px;
    padding: 0px 30px;
  }

  @media (max-width: 1024px) {
    max-width: 900px;
    padding: 0 20px;
  }
`;
