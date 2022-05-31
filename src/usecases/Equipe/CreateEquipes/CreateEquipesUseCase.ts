/* eslint-disable no-useless-constructor */
import { Equipe } from '../../../entities/Equipe'
import { IEquipeRepository } from '../../../infra/seqInterfaces/IEquipeRepository'
import { DataRequired } from '../../../main/errors-type/DataRequired'
import { UseCase } from '../../../main/protocols/usecase'
import { CreateEquipeDTO } from './CreateEquipesDTO'

export class CreateEquipesUseCase implements UseCase {
  constructor (private equipeReposiotry: IEquipeRepository) {}

  async execute (data: CreateEquipeDTO): Promise<void> {
    if (!data.nome) throw new DataRequired('Nome', 'Equipe')

    const equipe = new Equipe({ ...data })

    await this.equipeReposiotry.save(equipe)
  }
}
