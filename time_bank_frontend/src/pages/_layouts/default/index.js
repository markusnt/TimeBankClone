import React from 'react'
import PropTypes from 'prop-types'

import Header from '~/components/Header'
import OutMenu from '~/components/OutMenu'

import { Wrapper } from './styles'

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      {/* <OutMenu /> */}
      {children}
    </Wrapper>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
}
