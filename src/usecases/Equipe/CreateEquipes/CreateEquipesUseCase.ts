/* eslint-disable no-useless-constructor */
import { Equipe } from '../../../entities/Equipe'
import { IEquipeRepository } from '../../../infra/seqInterfaces/IEquipeRepository'
import { DataInUse } from '../../../main/errors-type/DataInUse'
import { DataRequired } from '../../../main/errors-type/DataRequired'
import { UseCase } from '../../../main/protocols/usecase'
import { VerifyUsuarioUseCase } from '../../Usuario/VerifyUsuario/VerifyUsuarioUseCase'
import { CreateEquipeDTO } from './CreateEquipesDTO'

export class CreateEquipesUseCase implements UseCase {
  constructor (
    private equipeReposiotry: IEquipeRepository,

    private verifyUserUseCase: VerifyUsuarioUseCase
  ) {}

  async execute (data: CreateEquipeDTO): Promise<void> {
    if (!data.nome) throw new DataRequired('Nome', 'Equipe')
    await this.verifyUserUseCase.execute(data.idUser)

    const equipe = new Equipe(data)

    const existEquipe = await this.equipeReposiotry.findByName(equipe.nome, data.idUser)
    if (existEquipe) throw new DataInUse('Nome')

    await this.equipeReposiotry.save(equipe, data.idUser)
  }
}
