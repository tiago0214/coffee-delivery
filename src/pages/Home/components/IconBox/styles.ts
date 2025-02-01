import styled from 'styled-components'

const colorMap = {
  'yellow-dark': 'yellow-dark',
  'base-text': 'base-text',
  yellow: 'yellow',
  purple: 'purple',
}

interface FooterIconProps {
  variant: 'yellow-dark' | 'base-text' | 'yellow' | 'purple'
}

export const FooterIcon = styled.div<FooterIconProps>`
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 100%;
  background-color: ${(props) => props.theme[colorMap[props.variant]]};

  color: ${(props) => props.theme.white};
`
