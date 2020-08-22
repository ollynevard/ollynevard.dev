import React from 'react';

import { HeroContainer, HeroHeading, HeroQuote } from './style';

const Hero = () => (
  <HeroContainer>
    <HeroHeading>
      Software Engineer
      <br />
      dabbling in
      <br />
      React
    </HeroHeading>
    <HeroQuote>
      Jack of all trades, master of none, oftentimes better than master of one
    </HeroQuote>
  </HeroContainer>
);

export default Hero;
