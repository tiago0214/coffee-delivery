import logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import {
  CheckoutCart,
  CheckoutContainer,
  HeaderContainer,
  Info,
} from './styles'
import { NavLink } from 'react-router'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>

      <CheckoutContainer>
        <Info>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </Info>

        <CheckoutCart>
          <NavLink to={'/checkout'}>
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
        </CheckoutCart>
      </CheckoutContainer>
    </HeaderContainer>
  )
}
