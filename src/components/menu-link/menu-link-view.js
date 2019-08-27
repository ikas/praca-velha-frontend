import styled from 'styled-components'
import Anchor from '../anchor'

export default styled(Anchor)`
  text-decoration: none;
  box-shadow: none;
  font-weight: 600;
  text-transform: uppercase;
  color: ${props => props.theme.colors.white};

  &::after {
    content: '';
    display: block;
    background: ${props => props.theme.colors.white};
    width: calc(100% - 10px);
    height: 3px;
    left: 0;
    transform: translateX(5px) scale3d(0,1,1);
    transition: transform 0.25s ease;
  }

  &.active::after, &:hover::after {
    transform: translateX(5px) scale3d(1,1,1);
  }
`