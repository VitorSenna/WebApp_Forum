/* eslint-disable no-useless-constructor */
import { IEquipeRepository } from '../../infra/seqInterfaces/IEquipeRepository'
import { IUsuarioRepository } from '../../infra/seqInterfaces/IUsuarioRepository'
import { DataDuplicate } from '../../main/errors-type/DataDuplicate'
import { DataInUse } from '../../main/errors-type/DataInUse'
import { DataNotFound } from '../../main/errors-type/DataNotFound'
import { NotAuth } from '../../main/errors-type/NotAuth'
import { TypedErrors } from '../../main/errors-type/TypedErrors'
import { UseCase } from '../../main/protocols/usecase'
import { VerifyUsuarioUseCase } from '../Usuario/VerifyUsuario/VerifyUsuarioUseCase'

export class AddUserToEquipeUseCase implements UseCase {
  constructor (
    private usuarioRepository: IUsuarioRepository,
    private equipeRepository: IEquipeRepository,

    private verifyUserUseCase: VerifyUsuarioUseCase
  ) {}

  async execute (data: {idEquipe: number, idUser: number, username: string}): Promise<void> {
    const userOwner = await this.verifyUserUseCase.execute(data.idUser)

    if (userOwner.username === data.username) throw new DataDuplicate('Usuário')

    const usuario = await this.usuarioRepository.findUsuarioByUserName(data.username)
    if (!usuario) throw new DataNotFound('Usuário')
    if (usuario.isPrivate) throw new TypedErrors('Esse usuário pussui um perfil privado, não é possível adicioná-lo a sua equipe')

    const equipeOwner = await this.equipeRepository.findByIdOwner(data.idEquipe, data.idUser)
    if (!equipeOwner) throw new NotAuth('Usuário', 'adição de novos usuários nessa equipe')

    const userAlreadyRegistered = await this.equipeRepository.userAlreadyRegistered(usuario, data.idEquipe)
    if (userAlreadyRegistered) throw new DataInUse('Usuário', 'Equipe')

    await this.equipeRepository.addUserToEquipe(usuario, data.idEquipe)
  }
}
