import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import Breadcrumbs from '../Breadcrumbs';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>

        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        
        
        <Side>
          <MobileNav>
            <UnstyledButton>
              <Icon id="shopping-bag" strokeWidth={2} size={24} />
            </UnstyledButton>

            <UnstyledButton>
              <Icon id="search" strokeWidth={2} size={24} />
            </UnstyledButton>
            <UnstyledButton onClick={() => setShowMobileMenu(true)}>
              <Icon id="menu" strokeWidth={2} size={24} />
            </UnstyledButton>
            
          </MobileNav>
        </Side>
      </MainHeader>

      <BreadcrumbsWrapper>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale/shoes">
            Shoes
          </Breadcrumbs.Crumb>
        </Breadcrumbs>
      </BreadcrumbsWrapper>

      <MobileMenu
        onClick={() => setShowMobileMenu(true)}
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--color-gray-300);

  @media ${QUERIES.tabletAndDown} {
    align-items: center;
    padding-right: 29px;
  }

  @media ${QUERIES.mobileAndDown} {
    padding-right: 16px;
    padding-left: 16px;
  }

`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(
    1rem,
    7vw - 1rem,
    5rem
  );
  margin: 0px 48px;

  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
  
`;

const MobileNav = styled.nav`
  justify-content: flex-end;
  align-items: baseline;
  
  margin: 0px 0px 0px auto;
  display: none;
  
  @media ${QUERIES.tabletAndDown} {
    display: flex;
    gap: 40px;
  }
  
  @media ${QUERIES.mobileAndDown} {
    display: flex;
    gap: 24px;
  }

`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(font-weight-medium);

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const BreadcrumbsWrapper = styled.div`
  display: none;
  padding: 48px 0 8px 32px;
  
  @media ${QUERIES.tabletAndDown} {
    display: block;
  }

  @media ${QUERIES.mobileAndDown} {
    padding-left: 16px;
  }
`;


export default Header;
