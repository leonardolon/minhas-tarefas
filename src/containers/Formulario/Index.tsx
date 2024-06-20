import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { BotaoSalvar, MainContainer } from '../../styles'

import { Campo } from '../../styles'
import { Form, Opcoes } from './styles'
import Contato from '../../models/Contato'
import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    const contatoParaAdicionar = new Contato(titulo, prioridade, descricao, 9)

    dispatch(cadastrar(contatoParaAdicionar))
    navigate('/')
  }

  return (
    <MainContainer>
      <p>Novo Contato</p>
      <Form onSubmit={cadastrarContato}>
        <Campo
          value={titulo}
          onChange={(evento) => setTitulo(evento.target.value)}
          type="text"
          placeholder="Nome do contato"
        />
        <Campo
          value={descricao}
          onChange={({ target }) => setDescricao(target.value)}
          as="textarea"
          placeholder="Telefone e email"
        />
        <Opcoes>
          <p>Parentesco</p>
          <input
            value={prioridade}
            onChange={(evento) => setPrioridade(evento.target.value)}
            name="Prioridade"
            type="radio"
            id="Familia"
          />{' '}
          <label htmlFor="Familia">Familia</label>
          <input
            value={prioridade}
            onChange={(evento) => setPrioridade(evento.target.value)}
            name="Prioridade"
            type="radio"
            id="Amigo"
          />{' '}
          <label htmlFor="Amigo">Amigo</label>
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
