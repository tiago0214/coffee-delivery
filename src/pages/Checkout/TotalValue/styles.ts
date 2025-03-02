import styled from 'styled-components'

export const TotalValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  gap: 1.5rem;

  & > div {
    display: flex;
    gap: 0.75rem;
    flex-direction: column;
  }

  & > button {
    padding: 12px 0 12px 0;
    border-radius: 6px;
    background-color: ${(props) => props.theme.yellow};
    border: 0;
    color: ${(props) => props.theme.white};
    font-weight: 700;
    font-family: 'Roboto';
    line-height: 1.6;
    cursor: pointer;

    transition: background-color 0.2s;
  }

  & > button:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`

export const Summary = styled.div`
  display: flex;
  justify-content: space-between;

  font-family: 'Roboto';
  color: ${(props) => props.theme['base-text']};

  & > span:first-child {
    font-size: 0.875rem;
  }
`

export const Value = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  color: ${(props) => props.theme['base-subtitle']};
  font-size: 1.25rem;
  line-height: 1.3;
  font-family: 'Roboto';
`
