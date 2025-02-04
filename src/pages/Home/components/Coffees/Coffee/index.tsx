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
        <Controls>
          <UpDownContent>
            <button>
              <Minus size={14} />
            </button>
            <span>1</span>
            <button>
              <Plus size={14} />
            </button>
          </UpDownContent>

          <div>
            <ShoppingCartSimple size={22} weight="fill" />
          </div>
        </Controls>
      </ValueContent>
    </CoffeeContainer>
  )
}
