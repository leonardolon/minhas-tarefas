import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

const contatosSlice = createSlice({
  name: 'contatos',
  initialState: {
    itens: [
      new Contato(
        'Eduardo',
        'Familia',
        'Email: edu@hotmail.com, telefone: (11)98888-8888',
        1
      ),
      new Contato(
        'Leonardo',
        'Amigo',
        'Email: leo@hotmail.com, telefone: (11)98888-8888',
        2
      ),
      new Contato(
        'Josefa',
        'Familia',
        'Email: josi@hotmail.com, telefone: (11)98888-8888',
        3
      )
    ]
  },
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    }
  }
})

export const { remover, editar } = contatosSlice.actions

export default contatosSlice.reducer
