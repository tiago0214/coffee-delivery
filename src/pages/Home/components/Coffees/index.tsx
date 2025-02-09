import { Coffee } from './Coffee'
import { CoffeesContainer } from './styles'

import coffesObject from '../../../../../data.json'

export function Coffees() {
  const { coffees } = coffesObject

  return (
    <CoffeesContainer>
      <h1>Nossos cafés</h1>

      <div>
        {coffees.map((coffe) => {
          return (
            <Coffee
              description={coffe.description}
              img={coffe.image}
              price={coffe.price}
              tags={coffe.tags}
              title={coffe.title}
              key={coffe.id}
            />
          )
        })}
      </div>
    </CoffeesContainer>
  )
}
