import React from 'react'
import styled from 'styled-components'

import Header from '../primitives/Header'
import Main from '../primitives/Main'
import ThemeProvider from '../../theme'

import Menu from './Menu'

const StyledHeader = styled(Header)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;

  @media screen and (min-width: 796px) {
    height: 110px;
  }
`

const StyledMain = styled(Main)`
  width: 100%;
`

export default function Default({ head, children, scripts, active }) {
  return (
    <ThemeProvider>
      <html lang="en">
        {head}
        <body>
          <StyledHeader>
            <Menu active={active} />
          </StyledHeader>
          <StyledMain>{children}</StyledMain>
          {scripts}
        </body>
      </html>
    </ThemeProvider>
  )
}
