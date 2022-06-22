/* eslint-disable no-useless-constructor */
import { Usuario } from '../../../entities/Usuario'
import { IUsuarioRepository } from '../../../infra/seqInterfaces/IUsuarioRepository'
import { DataInUse } from '../../../main/errors-type/DataInUse'
import { DataNotFound } from '../../../main/errors-type/DataNotFound'
import { UseCase } from '../../../main/protocols/usecase'
import { VerifyUsuarioUseCase } from '../VerifyUsuario/VerifyUsuarioUseCase'
import { UpdateUsuarioDTO } from './UpdateUsuarioDTO'

export class UpdateUsuariosUseCase implements UseCase {
  constructor (
    private usuarioRepository: IUsuarioRepository,

    private verifyUserUseCase: VerifyUsuarioUseCase
  ) {}

  async execute (data: UpdateUsuarioDTO): Promise<void> {
    await this.verifyUserUseCase.execute(data.id)

    const existUser = await this.usuarioRepository.findById(data.id)
    if (!existUser) throw new DataNotFound('Usuário')

    const existUserEmail = await this.usuarioRepository.findUsuarioByEmail(data.email)
    if (existUserEmail.email !== existUser.email) {
      if (existUserEmail.email === data.email) throw new DataInUse('Email')
    }

    const existUserName = await this.usuarioRepository.findUsuarioByUserName(data.username)
    if (existUserName.username !== existUser.username) {
      if (existUserName.username === data.username) throw new DataInUse('UserName')
    }

    const usuarioUpdate = new Usuario(data)

    await this.usuarioRepository.update(usuarioUpdate)
  }
}
