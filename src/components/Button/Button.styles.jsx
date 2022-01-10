/**
 * Styled Button
 */
import styled from "styled-components";

import { ButtonType } from "./Button.utils";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  padding: 2rem;
  height: ${(props) => props.theme.button[props.size].height}rem;

  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.colors[props.themeColor][0]};
  border-radius: 10rem;

  overflow: hidden;
  outline: none;
  -webkit-tap-highlight-color: transparent;

  ${ButtonType}

  &:focus {
    outline: none;
  }

  ${StyledButtonText} {
    color: ${(props) => props.theme.colors[props.themeColor][0]};
  }

  ${StyledButtonIconContainer} {
    svg {
      fill: ${(props) => props.theme.colors[props.themeColor][0]};
    }
  }
`;

export const StyledButtonText = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;

  font-size: ${(props) => props.theme.button[props.size].fontSize}rem;
`;

export const StyledButtonIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;

  ${(props) =>
    `width: ${props.theme.button[props.size].icon}rem;
    height: ${props.theme.button[props.size].icon}rem;`}
`;
