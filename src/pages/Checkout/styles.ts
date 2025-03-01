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
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    padding: 0.75rem;
    background: ${(props) => props.theme['base-input']};
    border-radius: 4px;

    border: solid 1px ${(props) => props.theme['base-button']};
  }

  input:focus-within {
    border: solid 1px ${(props) => props.theme['yellow-dark']};
  }

  input::placeholder {
    color: ${(props) => props.theme['base-label']};
    font-size: 14px;
  }

  #cep > input {
    width: 12.5rem;
  }

  #rua > input {
    width: 100%;
  }

  #numero-complemento {
    display: grid;
    grid-template-columns: 12.5rem 1fr;
    gap: 0.75rem;
  }

  #bairro-cidade-uf {
    display: grid;
    grid-template-columns: 12.5rem 1fr 3.75rem;
    gap: 0.75rem;
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

export const PaymentHeader = styled.header`
  display: flex;

  gap: 0.5rem;

  div {
    display: flex;
    flex-direction: column;

    & > :first-child {
      color: ${(props) => props.theme['base-subtitle']};
      line-height: 1.3;
    }

    & > :last-child {
      color: ${(props) => props.theme['base-text']};
      font-size: 0.875rem;
      line-height: 1.3;
    }
  }
`

export const PaymentOption = styled.div`
  margin-top: 2rem;

  display: flex;
  gap: 0.75rem;
`

export const PaymentMethod = styled.div`
  input {
    display: none;
  }

  label {
    cursor: pointer;
    padding: 1rem;
    border-radius: 6px;
    background: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme['base-text']};
    font-family: 'Roboto';
    font-size: 0.75rem;
    line-height: 1.6;

    border: 1px solid transparent;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  label:hover {
    background: ${(props) => props.theme['base-hover']};
  }
  input[type='radio']:checked + label {
    border: 1px solid ${(props) => props.theme.purple};
    background: ${(props) => props.theme['purple-light']};
  }
`

export const SelectedCoffesContainer = styled.div`
  & > header {
    font-size: 1.125rem;
    font-weight: 700;
    font-family: 'Baloo 2';
    line-height: 1.3;
  }
`
export const CoffeContainer = styled.div`
  margin-top: 0.95rem;
  width: 28rem;
  padding: 2.5rem;

  border-radius: 6px 32px 6px 32px;

  background-color: ${(props) => props.theme['base-card']};
`
