/* eslint-disable no-useless-constructor */
import { IEquipeRepository } from '../../../infra/seqInterfaces/IEquipeRepository'
import { DataNotFound } from '../../../main/errors-type/DataNotFound'
import { UseCase } from '../../../main/protocols/usecase'
import { GetEquipeByIdDTO } from './GetEquipesByIdDTO'

export class GetEquipesByIdUseCase implements UseCase {
  constructor (private equipesRepository: IEquipeRepository) {}

  async execute (data: {idEquipe: number, idUser: number}): Promise<GetEquipeByIdDTO> {
    const equipe = await this.equipesRepository.findByIdOwner(data.idEquipe, data.idUser)

    if (!equipe) throw new DataNotFound('Equipe')

    return {
      id: equipe.id,
      nome: equipe.nome,
      descricao: equipe.descricao
    }
  }
}
