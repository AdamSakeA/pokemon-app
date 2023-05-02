import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export const Responsive = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 50px 0;
  border: 1px solid ${(props) => props.theme.colors.primary};
  box-shadow: 1px 1px 30px rgba(159, 25, 25, 1);
  background-color: rgba(159, 25, 25, 0.2);
  border-radius: 20px;
  .responsive-contents {
    padding: 20px;
    color: grey;
    &:hover {
      background-color: ${(props) => props.theme.colors.secondary};
      color: white;
    }
  }
  .active {
    background-color: ${(props) => props.theme.colors.secondary};
    color: white;
  }
  @media (min-width: 426px) {
    display: none;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 25px;
  justify-content: space-between;
`;

export const IconOpen = styled(IoClose)`
  font-size: ${(props) => props.theme.font.size.medium};
  margin-bottom: 5px;
`;

export const IconClose = styled(GiHamburgerMenu)`
  font-size: ${(props) => props.theme.font.size.medium};
  margin-bottom: 5px;
`;
