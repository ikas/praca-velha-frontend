import React from 'react';
import styled from 'styled-components'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const NavButton = styled.button`
  &::before {
    text-shadow: 0 2px 2px ${props => props.theme.colors.primary} !important;
    color: ${props => props.theme.colors.lightGrey} !important;
  }

  &:hover::before {
    color: ${props => props.theme.colors.secondary} !important;
  }
`

export default props => (
  <ImageGallery
    {...props}
    renderLeftNav={(onClick, disabled) => {
      return (
        <NavButton
          className='image-gallery-left-nav'
          disabled={disabled}
          onClick={onClick}/>
      )
    }}
    renderRightNav={(onClick, disabled) => {
      return (
        <NavButton
          className='image-gallery-right-nav'
          disabled={disabled}
          onClick={onClick}/>
      )
    }}
  />
)