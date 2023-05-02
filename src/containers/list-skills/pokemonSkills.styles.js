import styled from "styled-components";

export const SkillsContainer = styled.div`
  text-align: center;
  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin: 50px 0;
  padding: 30px 60px;
  border: 1px solid ${(props) => props.theme.colors.primary};
  box-shadow: 1px 1px 30px rgba(159, 25, 25, 1);
  background-color: rgba(159, 25, 25, 0.2);
  border-radius: 20px;
  @media (max-width: 425px) {
    display: none;
  }
`;
