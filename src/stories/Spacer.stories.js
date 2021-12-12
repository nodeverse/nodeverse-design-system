import React from 'react';
import { storiesOf } from '@storybook/react';

import { Spacer } from '../components/Spacer';

const stories = storiesOf('App Test', module);

stories.add('App', () => {
  return (
    <>
    <div style={{background: 'red', width: '10rem', height: '10rem'}} />
    <Spacer y={3} />
    <div style={{background: 'red', width: '10rem', height: '10rem'}} />
    </>
  );
});