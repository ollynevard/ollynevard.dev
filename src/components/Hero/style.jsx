import styled from '@emotion/styled';

export const HeroContainer = styled.section`
  padding: 0;
  text-align: center;
`;

export const HeroHeading = styled.h1`
  font-size: 80px;
  font-weight: 400;
  margin: 80px 0;
`;

export const HeroQuote = styled.q`
  color: ${({ theme }) => theme.colors.dimmed};
  font-style: italic;
`;
