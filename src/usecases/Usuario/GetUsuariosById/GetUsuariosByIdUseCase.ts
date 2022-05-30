import { IUsuarioRepository } from '../../../infra/seqInterfaces/IUsuarioRepository'
import { DataNotFound } from '../../../main/errors-type/DataNotFound'
import { UseCase } from '../../../main/protocols/usecase'
import { GetUsuariosByIdDTO } from './GetUsuariosByIdDTO'

export class GetUsuariosByIdUseCase implements UseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor (private usuarioRepository: IUsuarioRepository) {}

  async execute (id: number): Promise<GetUsuariosByIdDTO> {
    const usuario = await this.usuarioRepository.findById(id)
    if (!usuario) throw new DataNotFound('Usuário')

    return {
      id: usuario.id,
      email: usuario.email,
      nome: usuario.nome,
      sobrenome: usuario.sobrenome,
      dataCadastro: usuario.dataCadastro
    }
  }
}
