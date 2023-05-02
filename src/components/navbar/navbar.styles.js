import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  letter-spacing: 1px;
  font-size: ${(props) => props.theme.font.size.xsmall};
  font-weight: 600;
  text-decoration: none;
  a:link {
    text-decoration: none;
  }

  a:visited {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  a:active {
    text-decoration: none;
  }
  .link-navbar {
    color: white;
  }
  @media (max-width: 425px) {
    padding: 20px 0;
  }
  @media (max-width: 768px) {
    padding: 20px;
  }
  @media (max-width: 1024px) {
    padding: 20px;
  }
`;

export const NavDesktop = styled.div`
  display: none;
  @media (min-width: 426px) {
    display: block;
  }
`;

export const NavContents = styled.nav`
  display: flex;
  align-items: center;
  gap: 50px;
  .link {
    color: ${(props) => props.theme.colors.primary};
    border: 1px solid ${(props) => props.theme.colors.primary};
    padding: 5px 20px;
    border-radius: 10px;
  }
  .link-active {
    transition: 0.5s;
    color: whitesmoke;
    background-color: ${(props) => props.theme.colors.secondary};
    box-shadow: 1px 1px 15px ${(props) => props.theme.colors.secondary};
  }
  .link:hover {
    transition: 0.5s;
    color: whitesmoke;
    background-color: ${(props) => props.theme.colors.secondary};
    box-shadow: 1px 1px 15px ${(props) => props.theme.colors.secondary};
  }
`;

export const NavMobile = styled.div`
  display: none;
  @media (max-width: 426px) {
    display: block;
  }
`;

export const NavContentsMobile = styled.div`
  position: absolute;
  right: 0;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 20px 0;
  .link {
    color: grey;
    padding: 10px 20px;
    &:hover {
      background-color: grey;
      color: white;
    }
  }
  .link-active {
    color: ${(props) => props.theme.colors.secondary};
    transition: 0.5s;
  }
`;

export const IconOpen = styled(IoClose)`
  font-size: ${(props) => props.theme.font.size.medium};
`;

export const IconClose = styled(GiHamburgerMenu)`
  font-size: ${(props) => props.theme.font.size.medium};
`;
