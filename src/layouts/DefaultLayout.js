import React from 'react'
import styled from 'styled-components'

import Header from '../components/Header/Header'

const Container = styled.div`
  padding: 0 20px;
  margin: auto;

  @media screen and (max-width: 640px) {
    width: 100%;
  }

  @media screen and (max-width: 980px) {
    max-width: 950px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 1024px;
  }
`


const applyDefaultLayout = (Component) => {
  return () => {

    return (
      <>
        <Header />
        <Container>
          <Component />
        </Container>
      </>
    )
  }
}

export default applyDefaultLayout