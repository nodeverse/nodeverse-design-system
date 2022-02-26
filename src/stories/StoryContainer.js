import styled from "styled-components";

export const StoryContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  background: ${(props) => props.theme.colors.background};

  overflow: scroll;
  padding: 10rem 0 5rem;
`;
