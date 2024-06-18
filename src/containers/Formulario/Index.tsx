import { BotaoSalvar, MainContainer } from '../../styles'

import { Campo } from '../../styles'
import { Form, Opcoes } from './styles'

const Formulario = () => (
  <MainContainer>
    <p>Novo Contato</p>
    <Form>
      <Campo type="text" placeholder="Nome do contato" />
      <Campo as="textarea" placeholder="Telefone e email" />
      <Opcoes>
        <p>Parentesco</p>
        <input name="Prioridade" type="radio" id="Familia" />{' '}
        <label htmlFor="Familia">Familia</label>
        <input name="Prioridade" type="radio" id="Amigo" />{' '}
        <label htmlFor="Amigo">Amigo</label>
      </Opcoes>
      <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
    </Form>
  </MainContainer>
)

export default Formulario
