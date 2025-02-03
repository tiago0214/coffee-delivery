import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  display: flex;
  flex-direction: column;
  width: 16rem;

  border-radius: 8px;

  border-top-right-radius: 32px;
  border-bottom-left-radius: 32px;

  align-items: center;
`
export const CoffeImg = styled.img`
  max-width: 120px;
  max-height: 120px;
  width: 100%;
  margin-top: -20px;

  align-self: center;
`

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  padding: 16px 20px 33px 20px;
  gap: 0.5rem;

  > header {
    font-family: 'Baloo 2';
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }

  > span {
    font-size: 0.875rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-label']};
    text-align: center;
  }
`

export const Controls = styled.div`
  display: flex;
`
