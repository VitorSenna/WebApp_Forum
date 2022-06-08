/* eslint-disable no-useless-constructor */
import { IEquipeRepository } from '../../../infra/seqInterfaces/IEquipeRepository'
import { UseCase } from '../../../main/protocols/usecase'
import { ListEquipesDTO } from './ListEquipesDTO'

export class ListEquipesUseCase implements UseCase {
  constructor (private equipesRepository: IEquipeRepository) {}

  async execute (): Promise<ListEquipesDTO[]> {
    const equipes = await this.equipesRepository.findAll()

    return equipes.map(equipe => {
      return {
        id: equipe.id,
        nome: equipe.nome,
        descricao: equipe.descricao
      }
    })
  }
}
