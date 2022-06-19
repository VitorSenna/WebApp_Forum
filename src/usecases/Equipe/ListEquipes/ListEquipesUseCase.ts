/* eslint-disable no-useless-constructor */
import { IEquipeRepository } from '../../../infra/seqInterfaces/IEquipeRepository'
import { UseCase } from '../../../main/protocols/usecase'
import { ListEquipesDTO } from './ListEquipesDTO'

export class ListEquipesUseCase implements UseCase {
  constructor (
    private equipesRepository: IEquipeRepository) {}

  async execute (idUser: number): Promise<ListEquipesDTO[]> {
    const usuarioEquipes = await this.equipesRepository.findAll(idUser)

    return usuarioEquipes.map(equipe => {
      return {
        id: equipe.id,
        nome: equipe.nome,
        descricao: equipe.descricao,
        dataCriacao: equipe.dataCriacao
      }
    })
  }
}
