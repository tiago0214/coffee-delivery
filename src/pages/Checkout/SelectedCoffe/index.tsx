import { Minus, Plus, Trash } from '@phosphor-icons/react'
import {
  CoffeContent,
  ContentHeader,
  ControlCheckout,
  ValueCotent,
} from './styles'

import IMG from '../../../assets/coffees/americano.png'

export function SelectedCoffe() {
  return (
    <CoffeContent>
      <img src={IMG} alt="" />
      <div>
        <ContentHeader>
          <header>Expresso Tradicional</header>
          <span>RS 9,90</span>
        </ContentHeader>

        <ValueCotent>
          <ControlCheckout>
            <button>
              <Minus size={14} weight="bold" />
            </button>

            <span>1</span>

            <button>
              <Plus size={14} weight="bold" />
            </button>
          </ControlCheckout>

          <button>
            <Trash size={16} color="#8047F8" />
            <span>REMOVER</span>
          </button>
        </ValueCotent>
      </div>
    </CoffeContent>
  )
}
