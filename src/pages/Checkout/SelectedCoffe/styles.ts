import styled from 'styled-components'

export const CoffeContent = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 1.25rem;

  & > img {
    max-width: 64px;
    max-height: 64px;

    width: 100%;
    align-self: center;
  }

  & > div {
    display: flex;
    flex-direction: column;
  }

  padding-bottom: 1.5rem;
  border-bottom: solid 1px ${(props) => props.theme['base-button']};

  & + & {
    margin-top: 1.5rem;
  }
`

export const ContentHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  header {
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 1.3;
    font-family: 'Roboto';
  }

  span {
    color: ${(props) => props.theme['base-text']};
    font-weight: 700;
    font-family: 'Roboto';
  }
`

export const ValueCotent = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 0.5rem;

  & > button {
    display: flex;
    gap: 4px;
    background-color: ${(props) => props.theme['base-button']};
    padding: 8px;
    border-radius: 6px;
    align-items: center;
    border: 0;
    justify-content: center;
    cursor: pointer;

    span {
      color: ${(props) => props.theme['base-text']};
      font-family: 'Roboto';
      font-size: 0.75rem;
    }
  }
`

export const ControlCheckout = styled.div`
  display: flex;
  width: 4.5rem;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme['base-button']};
  padding: 8px;
  border-radius: 6px;

  & span {
    color: ${(props) => props.theme['base-title']};
  }

  & > button {
    border: 0;
    color: ${(props) => props.theme.purple};
    cursor: pointer;
    background: transparent;
    line-height: 0;
  }
`
