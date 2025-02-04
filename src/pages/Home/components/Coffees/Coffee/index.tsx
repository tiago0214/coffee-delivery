import { ShoppingCartSimple, Plus, Minus } from '@phosphor-icons/react'
import {
  CoffeeContainer,
  CoffeImg,
  Controls,
  InfoContent,
  UpDownContent,
  ValueContent,
} from './styles'

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

      <ValueContent>
        <div>
          <span>R$</span> <span>9,90</span>
        </div>

        <Controls>
          <UpDownContent>
            <button>
              <Minus size={14} weight="bold" />
            </button>
            <span>1</span>
            <button>
              <Plus size={14} weight="bold" />
            </button>
          </UpDownContent>

          <button>
            <ShoppingCartSimple size={22} weight="fill" />
          </button>
        </Controls>
      </ValueContent>
    </CoffeeContainer>
  )
}
