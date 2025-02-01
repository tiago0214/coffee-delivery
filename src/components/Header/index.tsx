import logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import {
  CheckoutCart,
  CheckoutContainer,
  HeaderContainer,
  Info,
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />

      <CheckoutContainer>
        <Info>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </Info>

        <CheckoutCart>
          <ShoppingCart size={22} weight="fill" />
        </CheckoutCart>
      </CheckoutContainer>
    </HeaderContainer>
  )
}
