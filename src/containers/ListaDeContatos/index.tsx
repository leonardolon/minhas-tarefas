import { useSelector } from 'react-redux'
import Contato from '../components/Contato'
import { Container } from './styles'

import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <Container>
      <p>Sua lista de contatos</p>
      <ul>
        {itens.map((c) => (
          <li key={c.titulo}>
            <Contato
              id={c.id}
              descricao={c.descricao}
              titulo={c.titulo}
              prioridade={c.prioridade}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeContatos
