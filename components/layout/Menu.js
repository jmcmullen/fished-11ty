import React from 'react'
import styled, { css } from 'styled-components'

import Nav from '../primitives/Nav'
import Ul from '../primitives/Ul'
import Li from '../primitives/Li'
import A from '../primitives/A'
import Icon from '../ui/Icon'
import LogoImg from '../../content/img/logo.svg'
import MenuImg from '../../content/icons/menu.svg'
import CloseImg from '../../content/icons/close.svg'

const StyledA = styled(A)`
  text-decoration: none;
  color: #718096;

  ${(props) =>
    props.active &&
    css`
      padding-bottom: 0.25rem;
      color: #000;
      border-bottom: 2px solid #000;
    `}
`

const Logo = styled(LogoImg)`
  width: 140px;
  height: 40px;
`

const LogoLink = styled(A)`
  width: 140px;
  height: 40px;
`

const Navbar = styled(Nav)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1.45rem;

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
    padding: 1.25rem;
    margin-right: auto;
    margin-left: auto;
  }
`

const sections = [
  {
    text: 'How it works',
    url: '/#how-it-works',
  },
  {
    text: 'Early access',
    url: '/#early-access',
  },
  {
    text: 'Blog',
    url: '/blog/',
  },
]

const MobileNav = styled.div`
  display: block;
  margin: 0;

  @media screen and (min-width: 600px) {
    display: none;
  }
`

const DesktopNav = styled(Ul)`
  display: none;
  margin: 0;

  @media screen and (min-width: 600px) {
    display: flex;
  }
`

const MenuBtn = styled(MenuImg)`
  width: 38px;
  cursor: pointer;
`

const CloseBtn = styled(CloseImg)`
  width: 32px;
  cursor: pointer;
`

const NavLink = styled(Li)`
  padding: 0 0.5rem;
`

export default function Menu({ active }) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Navbar>
      <LogoLink href="/" title="Homepage" aria-label="Homepage">
        <Logo />
      </LogoLink>
      <MobileNav>
        {isOpen ? (
          <CloseBtn onClick={() => setIsOpen(false)} />
        ) : (
          <MenuBtn onClick={() => setIsOpen(true)} />
        )}
      </MobileNav>
      <DesktopNav inline reset>
        {sections.map((section, i) => (
          <NavLink key={i}>
            <StyledA
              title={section.text}
              href={section.url}
              active={active === section.url}
            >
              <Icon icon={section.icon} />
              {!section.noText && section.text}
            </StyledA>
          </NavLink>
        ))}
      </DesktopNav>
    </Navbar>
  )
}
