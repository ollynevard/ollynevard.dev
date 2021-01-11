import React from 'react';
import { useTheme } from '@emotion/react';
import Logo from 'components/Logo';
import Nav from 'components/Nav';
import NavItem from 'components/NavItem';
import { IconGitHub, IconLinkedIn, IconTwitter } from 'components/Icons';
import {
  VCardContainer,
  VCardInner,
  VCardMain,
  VCardName,
  VCardRole,
} from './style';

const VCard = () => {
  const theme = useTheme();
  return (
    <VCardContainer>
      <VCardInner>
        <Logo background={theme.colors.pink} foreground={theme.colors.grey1} />
        <VCardMain>
          <VCardName>Olly Nevard</VCardName>
          <VCardRole>Software Engineer</VCardRole>
          <Nav>
            <NavItem to="https://github.com/ollynevard" icon={<IconGitHub />}>
              GitHub
            </NavItem>
            <NavItem
              to="https://www.linkedin.com/in/ollynevard/"
              icon={<IconLinkedIn />}
            >
              LinkedIn
            </NavItem>
            <NavItem to="https://twitter.com/ollynevard" icon={<IconTwitter />}>
              Twitter
            </NavItem>
          </Nav>
        </VCardMain>
      </VCardInner>
    </VCardContainer>
  );
};

export default VCard;
