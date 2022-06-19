/* eslint-disable no-useless-constructor */
import { Ideia } from '../../../entities/Ideia'
import { IAreaIdeiaRepository } from '../../../infra/seqInterfaces/IAreaIdeiaRepository'
import { IEquipeRepository } from '../../../infra/seqInterfaces/IEquipeRepository'
import { IIdeiaRepository } from '../../../infra/seqInterfaces/IIdeiaRepository'
import { DataNotFound } from '../../../main/errors-type/DataNotFound'
import { UseCase } from '../../../main/protocols/usecase'
import { VerifyUsuarioUseCase } from '../../Usuario/VerifyUsuario/VerifyUsuarioUseCase'
import { CreateIdeiaDTO } from './CreateIdeiaDTO'

export class CreateIdeiaUseCase implements UseCase {
  constructor (
    private ideiaRepository: IIdeiaRepository,
    private equipeRepository: IEquipeRepository,
    private areaIdeiaRepository: IAreaIdeiaRepository,

    private verifyUserUseCase: VerifyUsuarioUseCase
  ) {}

  async execute (data: CreateIdeiaDTO): Promise<void> {
    await this.verifyUserUseCase.execute(data.idUser)

    const ideia = new Ideia(data)

    const equipe = await this.equipeRepository.findById(data.idEquipe, data.idUser)
    if (!equipe) throw new DataNotFound('Equipe')
    ideia.equipe = equipe

    const areaIdeia = await this.areaIdeiaRepository.findById(data.idAreaIdeia)
    if (!areaIdeia) throw new DataNotFound('Área da Ideia')
    ideia.areaIdeia = areaIdeia

    await this.ideiaRepository.save(ideia, data.idUser)
  }
}
