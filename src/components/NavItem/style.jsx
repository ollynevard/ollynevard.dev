import styled from '@emotion/styled';
import { Link } from 'gatsby';

export const NavItemContainer = styled.li`
  font-size: 16px;
  font-weight: 600;
  list-style: none;
  margin-bottom: 10px;
  text-transform: uppercase;

  @media (min-width: 576px) {
    margin-right: 30px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const NavItemInternalLink = styled(Link)`
  color: inherit;
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const NavItemExternalLink = styled.a`
  align-items: center;
  color: inherit;
  display: flex;
  position: relative;
  text-decoration: none;

  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.pink};
    visibility: hidden;
    transition: all 0.3s ease-in-out;
  }

  &:hover:before {
    visibility: visible;
    width: 100%;
  }
`;
