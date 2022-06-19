/* eslint-disable no-useless-constructor */
import { AreaIdeia } from '../../../entities/AreaIdeia'
import { IAreaIdeiaRepository } from '../../../infra/seqInterfaces/IAreaIdeiaRepository'
import { DataRequired } from '../../../main/errors-type/DataRequired'
import { UseCase } from '../../../main/protocols/usecase'
import { VerifyUsuarioUseCase } from '../../Usuario/VerifyUsuario/VerifyUsuarioUseCase'
import { CreateAreaIdeiaDTO } from './CreateAreaIdeiaDTO'

export class CreateAreaIdeiaUseCase implements UseCase {
  constructor (
    private areaIdeiaRepository: IAreaIdeiaRepository,

    private verifyUserUseCase: VerifyUsuarioUseCase
  ) {}

  async execute (data: CreateAreaIdeiaDTO): Promise<void> {
    await this.verifyUserUseCase.execute(data.idUser)

    if (!data.descricao) throw new DataRequired('Descrição da Área')

    const areaIdeia = new AreaIdeia(data)

    await this.areaIdeiaRepository.save(areaIdeia)
  }
}
