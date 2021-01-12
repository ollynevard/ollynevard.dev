import styled from '@emotion/styled';

export const NavContainer = styled.nav``;

export const NavList = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;

  @media (min-width: 576px) {
    align-items: flex-start;
    flex-direction: row;
  }
`;
