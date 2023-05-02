import styled from "styled-components";
import { HiOutlineSearchCircle } from "react-icons/hi";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const SearchForm = styled.form`
  position: relative;
  text-align: center;
  width: 100%;
  margin-right: 100px;
  @media (max-width: 425px) {
    width: 50%;
    margin-right: 0px;
  }
`;

export const SearchStyled = styled.input`
  width: 100%;
  padding: 10px 30px;
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 20px;
  background-color: transparent;
  color: white;
  letter-spacing: 1.5px;
  &:focus {
    outline: 1px solid ${(props) => props.theme.colors.secondary};
    border: none;
    box-shadow: 1px 1px 20px ${(props) => props.theme.colors.primary};
  }
  @media (max-width: 425px) {
    padding: 10px 15px;
  }
`;

export const SearchIcon = styled(HiOutlineSearchCircle)`
  font-size: 40px;
  color: ${(props) => props.theme.colors.primary};
  @media (max-width: 425px) {
    display: none;
  }
`;

export const CloseIcon = styled(AiOutlineCloseCircle)`
  font-size: 25px;
  cursor: pointer;
  position: absolute;
  right: -50px;
  top: 5px;
  @media (max-width: 425px) {
    right: -20px;
  }
`;
