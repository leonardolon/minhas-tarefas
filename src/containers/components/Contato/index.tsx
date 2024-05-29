import { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { remover } from '../../../store/reducers/contatos'
import ContatoClass from '../../../models/Contato'

type Props = ContatoClass

const Contato = ({ descricao, prioridade, titulo, id }: Props) => {
  const dispatch = useDispatch()

  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag>{prioridade}</S.Tag>
      <S.Descricao value={descricao} />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover onClick={() => remover(id)}>
              Excluir
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
