import styled from '@emotion/styled';
import { Link } from 'gatsby';

export const NavItemContainer = styled.li`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 16px;
  font-weight: 600;
  list-style: none;
  margin-right: 30px;
  text-transform: uppercase;

  &:last-child {
    margin-right: 0;
  }
`;

export const NavItemLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;
