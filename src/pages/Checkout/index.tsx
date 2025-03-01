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
