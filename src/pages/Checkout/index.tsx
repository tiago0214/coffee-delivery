import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'
import {
  AddressHeader,
  AdressContainer,
  AdressContent,
  AdressInputs,
  CheckoutContainer,
  CoffeContainer,
  FormContainer,
  PaymentHeader,
  PaymentMethod,
  PaymentOption,
  SelectedCoffesContainer,
} from './styles'
import { SelectedCoffe } from './SelectedCoffe'

export function Checkout() {
  return (
    <CheckoutContainer>
      <FormContainer>
        <AdressContainer>
          <header>Complete seu pedido</header>

          <AdressContent>
            <div>
              <AddressHeader>
                <MapPinLine size={22} color="#C47F17" />

                <span>
                  <p>Endereço de Entrega</p>
                  <p>Informe o endereço onde deseja receber seu pedido</p>
                </span>
              </AddressHeader>

              <AdressInputs>
                <div id="cep">
                  <input type="text" placeholder="CEP" />
                </div>

                <div id="rua">
                  <input type="text" placeholder="Rua" name="street" />
                </div>

                <div id="numero-complemento">
                  <input type="text" placeholder="Número" name="number" />
                  <input type="text" placeholder="Complemento" />
                </div>

                <div id="bairro-cidade-uf">
                  <input type="text" placeholder="Bairro" />
                  <input type="text" placeholder="Cidade" />
                  <input type="text" placeholder="UF" name="state" />
                </div>
              </AdressInputs>
            </div>

            <div>
              <PaymentHeader>
                <CurrencyDollar size={22} color="#8047F8" />

                <div>
                  <span>Pagamento</span>
                  <span>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </span>
                </div>
              </PaymentHeader>

              <PaymentOption>
                <PaymentMethod>
                  <input
                    type="radio"
                    name="payment"
                    id="credit-card"
                    value="credit-card"
                  />
                  <label htmlFor="credit-card">
                    <CreditCard size={16} color="#8047F8" />
                    <span>CARTÃO DE CRÉDITO</span>
                  </label>
                </PaymentMethod>

                <PaymentMethod>
                  <input
                    type="radio"
                    name="payment"
                    id="debit-card"
                    value="debit-card"
                  />
                  <label htmlFor="debit-card">
                    <Bank size={16} color="#8047F8" />
                    <span>CARTÃO DE DEBITO</span>
                  </label>
                </PaymentMethod>

                <PaymentMethod>
                  <input type="radio" name="payment" id="cash" value="cash" />
                  <label htmlFor="cash">
                    <Money size={16} color="#8047F8" />
                    <span>DINHEIRO</span>
                  </label>
                </PaymentMethod>
              </PaymentOption>
            </div>
          </AdressContent>
        </AdressContainer>

        <SelectedCoffesContainer>
          <header>Cafés selecionados</header>
          <CoffeContainer>
            <SelectedCoffe />
            <SelectedCoffe />
          </CoffeContainer>
        </SelectedCoffesContainer>
      </FormContainer>
    </CheckoutContainer>
  )
}
