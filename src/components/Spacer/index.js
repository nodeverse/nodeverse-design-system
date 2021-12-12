/**
 * Spacer - 
 *  Default Width and Height - 1rem
 */
import React from 'react';
import styled from 'styled-components';

const SpacerStyles = styled.div`
  height: 1rem;
  width: 1rem;

  background-color:transparent;

  ${(props) => props.x !== undefined && `width: ${props.x}rem;` }
  ${(props) => props.y !== undefined && `height: ${props.y}rem;` }
`;

export const Spacer = (props) => {
  return (
    <SpacerStyles {...props} />
  );
};