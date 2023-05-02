import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
  ${(props) => props.type && TYPE[props.type]}
  ${(props) => props.disabled && DISABLED}
  cursor: pointer;
  &:hover {
    transition: 0.5s;
  }
`;

// when button disabled
const DISABLED = css`
  cursor: not-allowed;
  background: #d4d4d4;
  color: #f5f5f5;
`;

// type button
const TYPE = {
  primary: css`
    padding: 10px 30px;
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.colors.primary};
    border-radius: 15px;
    letter-spacing: 1px;
    color: ${(props) => props.theme.colors.secondary};
    font-size: ${(props) => props.theme.font.size.small};
    &:hover {
      color: whitesmoke;
      background-color: ${(props) => props.theme.colors.secondary};
      box-shadow: 1px 1px 15px ${(props) => props.theme.colors.secondary};
    }
  `,
  secondary: css`
    padding: 10px 20px;
    border: 1px solid ${(props) => props.theme.colors.primary};
    border-radius: 10px;
    background-color: ${(props) => props.theme.colors.primary};
    color: white;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
    font-size: ${(props) => props.theme.font.size.xsmall};
    font-weight: 600;
    &:hover {
      box-shadow: 1px 1px 20px rgba(221, 40, 40, 1);
      background-color: ${(props) => props.theme.colors.primary};
      color: white;
    }
  `,
  secondaryActive: css`
    padding: 10px 20px;
    border-radius: 10px;
    background-color: white;
    border: 1px solid ${(props) => props.theme.colors.primary};
    box-shadow: 1px 1px 20px rgba(221, 40, 40, 1);
    color: ${(props) => props.theme.colors.primary};
    font-weight: 600;
    font-size: ${(props) => props.theme.font.size.xsmall};
  `,
  backToTop: css`
    padding: 10px 20px;
    border: 1px solid ${(props) => props.theme.colors.primary};
    border-radius: 10px;
    background-color: ${(props) => props.theme.colors.primary};
    color: white;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
    font-size: ${(props) => props.theme.font.size.xsmall};
    font-weight: 600;
    position: fixed;
    bottom: 20px;
    right: 30px;
    z-index: 99;
  `,
};
