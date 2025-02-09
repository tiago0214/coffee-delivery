import styled from 'styled-components'

export const TagContainer = styled.div`
  display: flex;
  gap: 4px;

  span {
    padding: 0.25rem 0.5rem;
    background-color: ${(props) => props.theme['yellow-light']};
    border-radius: 16px;
    margin-top: 0.75rem;

    color: ${(props) => props.theme['yellow-dark']};
    font-weight: 700;
    font-size: 0.625rem;

    line-height: 1.3;
    text-transform: uppercase;
  }
`
