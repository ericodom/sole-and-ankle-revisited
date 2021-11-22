/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import { X } from "react-feather";

import {  QUERIES } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {

  return (
    <Overlay
      isOpen={isOpen}
      onDismiss={onDismiss}
    >
      <Content>
        <Row>
          <CloseButton onClick={onDismiss}>
            <X />
            <VisuallyHidden>
              Dismiss modal
            </VisuallyHidden>
          </CloseButton>
        </Row>
        
        <NavWrapper>
          <MenuLink color={'var(--color-secondary)'} href="/sale">Sale</MenuLink>
          <MenuLink href="/new">New&nbsp;Releases</MenuLink>
          <MenuLink href="/men">Men</MenuLink>
          <MenuLink href="/women">Women</MenuLink>
          <MenuLink href="/kids">Kids</MenuLink>
          <MenuLink href="/collections">Collections</MenuLink>
        </NavWrapper>
        <Row>
          <FooterWrapper>
            <FooterLink href="/terms">Terms and Conditions</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
          </FooterWrapper>
        </Row>
        
      </Content>

    </Overlay>
    
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsl(0deg 0% 0% / 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

const Content = styled(DialogContent)`
  position: absolute;
  background: white;
  top: 0;
  right: 0;
  bottom: 0;
  width: 85%;
  padding: 2rem 2rem 1rem 2rem;
  display: flex;
  flex-direction: column;

  /* @media ${QUERIES.tabletAndDown} {
    display: none;
  } */
`;

const Row = styled.div`
  flex: 1;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

`;

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
`;

const FooterWrapper = styled.nav`
  display: flex;
  flex-direction: column;
   
`;

const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: transparent;
  border: none;
  width: 48px;
  height: 48px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuLink = styled.a`
  font-weight: 600;
  font-size: 18px;
  text-decoration: none;
  padding: 11px 0;
  text-transform: uppercase;
  color: ${p => p.color ? p.color : 'var(--color-gray-900)'};
`;

const FooterLink = styled.a`
  color: var(--color-gray-700);
  line-height: 16.44px;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  padding-bottom: 14px;
`;

export default MobileMenu;
