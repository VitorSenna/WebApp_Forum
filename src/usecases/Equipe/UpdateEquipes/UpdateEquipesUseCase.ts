/* eslint-disable no-useless-constructor */
import { Equipe } from '../../../entities/Equipe'
import { IEquipeRepository } from '../../../infra/seqInterfaces/IEquipeRepository'
import { DataNotFound } from '../../../main/errors-type/DataNotFound'
import { UseCase } from '../../../main/protocols/usecase'
import { UpdateEquipesDTO } from './UpdateEquipesDTO'

export class UpdateEquipesUseCase implements UseCase {
  constructor (private equipeRepository: IEquipeRepository) {}

  async execute (data: UpdateEquipesDTO): Promise<void> {
    const existEquipe = await this.equipeRepository.findById(data.id, data.idUser)
    if (!existEquipe) throw new DataNotFound('Equipe')

    const equipeUpdate = new Equipe(data)

    await this.equipeRepository.update(equipeUpdate, data.idUser)
  }
}
