import FiltroCard from '../components/FiltroCard'

import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard legenda="Adicionado" contador={3} ativo />
        <FiltroCard legenda="excluido" contador={2} />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
