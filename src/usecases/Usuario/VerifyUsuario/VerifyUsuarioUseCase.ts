/* eslint-disable no-useless-constructor */
import { Usuario } from '../../../entities/Usuario'
import { IUsuarioRepository } from '../../../infra/seqInterfaces/IUsuarioRepository'
import { DataNotFound } from '../../../main/errors-type/DataNotFound'
import { UseCase } from '../../../main/protocols/usecase'

export class VerifyUsuarioUseCase implements UseCase {
  constructor (private usuarioRepository: IUsuarioRepository) {}

  async execute (idUser: number): Promise<Usuario> {
    const user = await this.usuarioRepository.findById(idUser)

    if (!user) throw new DataNotFound('Usuário')

    return user
  }
}
