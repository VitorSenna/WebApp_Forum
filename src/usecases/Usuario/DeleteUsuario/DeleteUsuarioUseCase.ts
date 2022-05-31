/* eslint-disable no-useless-constructor */
import { IUsuarioRepository } from '../../../infra/seqInterfaces/IUsuarioRepository'
import { DataNotFound } from '../../../main/errors-type/DataNotFound'
import { UseCase } from '../../../main/protocols/usecase'

export class DeleteUsuarioUseCase implements UseCase {
  constructor (private usuarioRepository: IUsuarioRepository) {}

  async execute (id: number): Promise<void> {
    const existUser = await this.usuarioRepository.findById(id)
    if (!existUser) throw new DataNotFound('Usuário')

    await this.usuarioRepository.delete(id)
  }
}
