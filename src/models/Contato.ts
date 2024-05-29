class Contato {
  titulo: string
  prioridade: string
  descricao: string
  id: number

  constructor(
    titulo: string,
    prioridade: string,
    descricao: string,
    id: number
  ) {
    this.titulo = titulo
    this.prioridade = prioridade
    this.descricao = descricao
    this.id = id
  }
}

export default Contato
