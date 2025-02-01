import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  width: 70rem;
  align-items: center;

  margin: 0 auto;
  padding: 2rem 0;
`

export const CheckoutContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const Info = styled.div`
  display: flex;
  align-items: center;

  padding: 0.5rem;
  background-color: ${(props) => props.theme['purple-light']};
  border-radius: 6px;

  font-size: 0.875rem;
  color: ${(props) => props.theme['purple-dark']};
  line-height: 1.3;
  gap: 0.25rem;

  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const CheckoutCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme['yellow-light']};
  border-radius: 6px;
  padding: 0.5rem;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`
