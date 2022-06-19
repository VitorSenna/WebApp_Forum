import { SeqAreaIdeiaRepository } from '../../../infra/sequelize/repositories/SeqAreaIdeiaRepository'
import { verifyUsuarioUseCase } from '../../Usuario/VerifyUsuario'
import { GetAreaIdeiaByIdController } from './GetAreaIdeiaByIdController'
import { GetAreaIdeiaByIdUseCase } from './GetAreaIdeiaByIdUseCase'

const areaIdeiaRepository = new SeqAreaIdeiaRepository()
const getAreaIdeiaByIdUseCase = new GetAreaIdeiaByIdUseCase(areaIdeiaRepository, verifyUsuarioUseCase)
const getAreaIdeiaByIdController = new GetAreaIdeiaByIdController(getAreaIdeiaByIdUseCase)

export { getAreaIdeiaByIdController, getAreaIdeiaByIdUseCase }
