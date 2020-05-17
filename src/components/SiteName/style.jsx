import styled from '@emotion/styled';
import { Link } from 'gatsby';

export const SiteNameContainer = styled.h1`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  text-transform: uppercase;
`;

export const SiteNameLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;
