/* eslint-disable no-useless-constructor */
import { IEquipeRepository } from '../../infra/seqInterfaces/IEquipeRepository'
import { NotAuth } from '../../main/errors-type/NotAuth'
import { UseCase } from '../../main/protocols/usecase'
import { VerifyUsuarioUseCase } from '../Usuario/VerifyUsuario/VerifyUsuarioUseCase'
import { ListUsersByEquipeDTO } from './ListUsersByEquipeDTO'

export class ListAllUsersByEquipeUseCase implements UseCase {
  constructor (
    private equipeRepository: IEquipeRepository,

    private verifyUserUseCase: VerifyUsuarioUseCase
  ) {}

  async execute (data: {idEquipe: number, idUser: number}): Promise<ListUsersByEquipeDTO[]> {
    await this.verifyUserUseCase.execute(data.idUser)

    const equipe = await this.equipeRepository.findByIdOwner(data.idEquipe, data.idUser)
    if (!equipe) throw new NotAuth('Usuário', 'consulta de usuários dessa equipe')

    const users = await this.equipeRepository.findAllUsersByEquipe(data.idEquipe, data.idUser)

    return users.map(user => {
      return {
        id: user.id,
        nome: user.nome,
        sobrenome: user.sobrenome,
        email: user.email,
        username: user.username,
        dataCadastro: user.dataCadastro,
        isPrivate: user.isPrivate
      }
    })
  }
}
