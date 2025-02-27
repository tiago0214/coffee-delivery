import { MapPinLine } from '@phosphor-icons/react'
import {
  AddressHeader,
  AdressContainer,
  AdressContent,
  AdressInputs,
  CheckoutContainer,
  FormContainer,
  SelectedCoffesContainer,
} from './styles'

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
                  <input type="text" />
                </div>

                <div id="rua">
                  <input type="text" />
                </div>

                <div id="numero-complemento">
                  <input type="text" />
                  <input type="text" />
                </div>

                <div id="bairro-cidade-uf">
                  <input type="text" />
                  <input type="text" />
                  <input type="text" />
                </div>
              </AdressInputs>
            </div>

            <div>
              <header>Pagamento</header>

              <div>
                <input type="radio" name="" id="" />
                <input type="radio" name="" id="" />
                <input type="radio" name="" id="" />
              </div>
            </div>
          </AdressContent>
        </AdressContainer>

        <SelectedCoffesContainer>
          <header>Cafés selecionados</header>
        </SelectedCoffesContainer>
      </FormContainer>
    </CheckoutContainer>
  )
}
