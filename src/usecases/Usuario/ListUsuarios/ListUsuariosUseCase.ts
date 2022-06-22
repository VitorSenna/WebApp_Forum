import { IUsuarioRepository } from '../../../infra/seqInterfaces/IUsuarioRepository'
import { ListUsuariosDTO } from './ListUsuariosDTO'

export class ListUsuariosUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor (private usuarioRepository: IUsuarioRepository) {}

  async execute (): Promise<ListUsuariosDTO[]> {
    const usuarios = await this.usuarioRepository.findAll()

    return usuarios.map(usuario => {
      return {
        id: usuario.id,
        dataCadastro: usuario.dataCadastro,
        email: usuario.email,
        nome: usuario.nome,
        sobrenome: usuario.sobrenome,
        username: usuario.username,
        isPrivate: usuario.isPrivate
      }
    })
  }
}
