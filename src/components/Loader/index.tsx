import React from 'react';

import { Animation } from './styles';

const Loader = () => (
  <Animation>
    <span id="span-1">.</span>
    <span id="span-2">.</span>
    <span id="span-3">.</span>
  </Animation>
);

export default Loader;