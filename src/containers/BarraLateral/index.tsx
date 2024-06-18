import FiltroCard from '../components/FiltroCard'

import * as S from './styles'
import { Campo } from '../../styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <Campo type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard legenda="Familia" contador={3} ativo />
        <FiltroCard legenda="Amigo" contador={2} />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
