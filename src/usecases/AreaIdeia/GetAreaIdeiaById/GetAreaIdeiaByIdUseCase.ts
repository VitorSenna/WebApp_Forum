/* eslint-disable no-useless-constructor */
import { IAreaIdeiaRepository } from '../../../infra/seqInterfaces/IAreaIdeiaRepository'
import { DataNotFound } from '../../../main/errors-type/DataNotFound'
import { UseCase } from '../../../main/protocols/usecase'
import { VerifyUsuarioUseCase } from '../../Usuario/VerifyUsuario/VerifyUsuarioUseCase'
import { GetAreaIdeiaByIdDTO } from './GetAreaIdeiaByIdDTO'

export class GetAreaIdeiaByIdUseCase implements UseCase {
  constructor (
    private areaIdeiaRepository: IAreaIdeiaRepository,

    private verifyUserUseCase: VerifyUsuarioUseCase
  ) {}

  async execute (data: {id: number, idUser: number}): Promise<GetAreaIdeiaByIdDTO> {
    await this.verifyUserUseCase.execute(data.idUser)

    const areaIdeia = await this.areaIdeiaRepository.findById(data.id)
    if (!areaIdeia) throw new DataNotFound('Área Ideia')

    return areaIdeia
  }
}
