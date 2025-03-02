import { Summary, TotalValueContainer, Value } from './styles'

export function TotalValue() {
  return (
    <TotalValueContainer>
      <div>
        <Summary>
          <span>Total de Itens</span>
          <span>R$ 29,70</span>
        </Summary>

        <Summary>
          <span>Entrega</span>
          <span>R$ 3,50</span>
        </Summary>

        <Value>
          <span>Total</span>
          <span>R$ 33,20</span>
        </Value>
      </div>

      <button>CONFIRMAR PEDIDO</button>
    </TotalValueContainer>
  )
}
