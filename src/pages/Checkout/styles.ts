import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  width: 70rem;
  padding-top: 40px;
  margin: auto;
  display: flex;
`

export const FormContainer = styled.form`
  display: flex;
  width: 100%;
  gap: 2rem;
`

export const AdressContainer = styled.div`
  & > header {
    font-size: 1.125rem;
    font-weight: 700;
    font-family: 'Baloo 2';
    line-height: 1.3;
  }

  width: 40rem;
  /* flex: 1; */
  display: flex;
  flex-direction: column;
`
export const AdressContent = styled.div`
  margin-top: 0.95rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  & > div {
    background-color: ${(props) => props.theme['base-card']};
    padding: 2.5rem;
    border-radius: 6px;
  }
`

export const AdressInputs = styled.div`
  input {
    padding: 0.75rem;
    background: ${(props) => props.theme['base-input']};
    border-radius: 4px;

    border: solid 1px ${(props) => props.theme['base-button']};
  }
`

export const AddressHeader = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;

  & > span :first-child {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Roboto';
    line-height: 1.3;
  }

  & > span :last-child {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Roboto';
    line-height: 1.3;
    font-size: 14px;
  }
`

export const SelectedCoffesContainer = styled.div``
