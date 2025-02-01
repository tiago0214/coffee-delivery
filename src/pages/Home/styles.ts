import styled from 'styled-components'

export const HomeContainer = styled.section`
  position: relative;

  img#hero {
    position: absolute;
    top: 0;
    left: 0;
    max-height: 544px;
    width: 100vw;
    object-fit: cover;
  }
`

export const HomeContent = styled.div`
  display: flex;

  padding: 5.75rem 0;
  gap: 3.5rem;
  width: 70rem;
  margin: auto;
`

export const HomeInfoContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`

export const HomeTitleInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-family: 'Baloo 2';
    line-height: 1.3;
    font-size: 3rem;
    font-weight: 800;
  }

  span {
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-text']};
  }
`

export const HomeInfoFooter = styled.footer`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 2.5rem;
  row-gap: 1.25rem;

  div {
    display: flex;
    gap: 0.75rem;
    align-items: center;
  }
`

export const FooterSpan = styled.span`
  line-height: 1;
`
