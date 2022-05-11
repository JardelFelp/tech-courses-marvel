import React from 'react'
import styled from 'styled-components'

const CustomButton = styled.button`
  background-color: #e62429;
  color: #ffffff;
  border: 0;
  padding: 10px 20px;
  font-weight: 600;
  text-transform: uppercase;
`

const Button = (props) => {
  console.log(props)

  return (
    <CustomButton onClick={ props.onClick }>
      { props.children }
    </CustomButton>
  )
}

export default Button