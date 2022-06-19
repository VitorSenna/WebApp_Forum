/* eslint-disable no-useless-constructor */
import { IEquipeRepository } from '../../../infra/seqInterfaces/IEquipeRepository'
import { DataNotFound } from '../../../main/errors-type/DataNotFound'
import { UseCase } from '../../../main/protocols/usecase'

export class DeleteEquipesUseCase implements UseCase {
  constructor (private equipesRepository: IEquipeRepository) {}

  async execute (id: number):Promise<void> {
    const existEquipe = await this.equipesRepository.findById(id)
    if (!existEquipe) throw new DataNotFound('Equipe')

    await this.equipesRepository.delete(id)
  }
}
