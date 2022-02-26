import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { Text } from "../atoms/Text";
import { ToggleButton } from "../atoms/ToggleButton";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: fixed;
  height: 8rem;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
`;

export const Header = () => {
  const theme = useContext(ThemeContext);

  return (
    <HeaderContainer>
      <div style={{ display: "flex", marginRight: "2rem" }}>
        <Text size="md" weight="bold">
          Dark Theme
        </Text>
        <ToggleButton
          checked={theme.currentTheme === "DARK"}
          onChange={theme.toggleTheme}
        />
      </div>
    </HeaderContainer>
  );
};
