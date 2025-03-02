import styled from 'styled-components'

export const CoffeesContainer = styled.section`
  width: 70rem;
  margin: auto;
  padding-top: 2rem;
  padding-bottom: 9.5rem;

  & > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    row-gap: 2.5rem;
  }

  & > h1 {
    margin-bottom: 3.4rem;
    font-weight: 800;
    font-family: 'Baloo 2';
    font-size: 2rem;
    line-height: 1.3;
  }
`
