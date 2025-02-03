import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'

import heroImg from '../../assets/hero-bg.svg'

import homeImg from '../../assets/ImagemHome.svg'
import {
  FooterSpan,
  HomeContainer,
  HomeContent,
  HomeInfoContent,
  HomeInfoFooter,
  HomeTitleInfo,
} from './styles'
import { IconBox } from './components/IconBox'
import { Coffees } from './components/Coffees'

export function Home() {
  return (
    <div>
      <HomeContainer>
        <HomeContent>
          <HomeInfoContent>
            <HomeTitleInfo>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <span>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </span>
            </HomeTitleInfo>

            <HomeInfoFooter>
              <div>
                <IconBox variant="yellow-dark">
                  <ShoppingCart size={16} weight="fill" />
                </IconBox>

                <FooterSpan>Compra simples e segura</FooterSpan>
              </div>

              <div>
                <IconBox variant="base-text">
                  <Package size={16} weight="fill" />
                </IconBox>

                <FooterSpan>Embalagem mantém o café intacto</FooterSpan>
              </div>

              <div>
                <IconBox variant="yellow">
                  <Timer size={16} weight="fill" />
                </IconBox>

                <FooterSpan>Entrega rápida e rastreada</FooterSpan>
              </div>

              <div>
                <IconBox variant="purple">
                  <Coffee size={16} weight="fill" />
                </IconBox>

                <FooterSpan>O café chega fresquinho até você</FooterSpan>
              </div>
            </HomeInfoFooter>
          </HomeInfoContent>
          <section>
            <img src={homeImg} alt="" />
          </section>
        </HomeContent>

        <img src={heroImg} id="hero" alt="" />
      </HomeContainer>

      <Coffees />
    </div>
  )
}
