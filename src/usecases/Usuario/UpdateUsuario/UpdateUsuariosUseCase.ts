/* eslint-disable no-useless-constructor */
import { Usuario } from '../../../entities/Usuario'
import { IUsuarioRepository } from '../../../infra/seqInterfaces/IUsuarioRepository'
import { DataInUse } from '../../../main/errors-type/DataInUse'
import { DataNotFound } from '../../../main/errors-type/DataNotFound'
import { UseCase } from '../../../main/protocols/usecase'
import { UpdateUsuarioDTO } from './UpdateUsuarioDTO'

export class UpdateUsuariosUseCase implements UseCase {
  constructor (private usuarioRepository: IUsuarioRepository) {}

  async execute (data: UpdateUsuarioDTO): Promise<void> {
    const existUser = await this.usuarioRepository.findById(data.id)
    if (!existUser) throw new DataNotFound('Usuário')

    const existEmail = await this.usuarioRepository.findUsuarioByEmail(data.email)
    if (existEmail) throw new DataInUse('Email')

    const existUserName = await this.usuarioRepository.findUsuarioByUserName(data.username)
    if (existUserName) throw new DataInUse('UserName')

    const usuarioUpdate = new Usuario(data)

    await this.usuarioRepository.update(usuarioUpdate)
  }
}
