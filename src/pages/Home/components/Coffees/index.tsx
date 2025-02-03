import { Coffee } from './Coffee'
import { CoffeesContainer } from './styles'

export function Coffees() {
  return (
    <CoffeesContainer>
      <h1>Nossos cafés</h1>

      <Coffee />
    </CoffeesContainer>
  )
}
