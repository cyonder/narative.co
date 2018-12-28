import styled from 'styled-components'
import { media } from '@styles'

const Container = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 4rem;
  background: ${props =>
    props.background === 'dark' ? props.theme.colors.bg : 'transparent'};
  display: ${p => (p.hideOnDesktop ? 'none' : 'block')};

  ${media.desktop`
    max-width: 100%;
    display: ${p => (p.hideOnDesktop ? 'none' : 'block')};
  `};

  ${media.tablet`
    display: block;
  `};

  ${media.phablet`
    max-width: 100%;
    ${props => props.hideOverflow && `overflow: hidden`};
  `};

  ${media.phablet`
    padding: 0 4rem;
  `};
`

export default Container
