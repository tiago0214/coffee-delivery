import { ShoppingCartSimple, Plus, Minus } from '@phosphor-icons/react'
import {
  CoffeeContainer,
  CoffeImg,
  Controls,
  InfoContent,
  UpDownContent,
  ValueContent,
} from './styles'

import { Tag } from './Tag'

interface CoffeProps {
  id?: string
  title: string
  description: string
  tags: string[]
  price: number
  img: string
}

// "id": "0",
// "title": "Expresso Tradicional",
// "description": "O tradicional café feito com água quente e grãos moídos",
// "tags": ["tradicional"],
// "price": 9.90,
// "image": "./src/assets/coffees/expresso.png"

export function Coffee({ description, img, price, tags, title }: CoffeProps) {
  return (
    <CoffeeContainer>
      <CoffeImg src={img} alt="" />

      <Tag tags={tags} />

      <InfoContent>
        <header>{title}</header>
        <span>{description}</span>
      </InfoContent>

      <ValueContent>
        <div>
          <span>R$</span> <span>{String(price).padEnd(4, '0')}</span>
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
