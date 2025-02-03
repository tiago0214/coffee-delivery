import { ShoppingCart } from '@phosphor-icons/react'
import { CoffeeContainer, CoffeImg, Controls, InfoContent } from './styles'

import coffeImg from '../../../../../assets/coffees/americano.png'
import { Tag } from './Tag'

export function Coffee() {
  return (
    <CoffeeContainer>
      <CoffeImg src={coffeImg} alt="" />

      <Tag />

      <InfoContent>
        <header>Expresso Tradicional</header>
        <span>O tradicional café feito com água quente e grãos moídos</span>
      </InfoContent>

      <Controls>
        <span>RS 9,90</span>

        <div>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>

        <div>
          <ShoppingCart />
        </div>
      </Controls>
    </CoffeeContainer>
  )
}
