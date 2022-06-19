import { SeqAreaIdeiaRepository } from '../../../infra/sequelize/repositories/SeqAreaIdeiaRepository'
import { verifyUsuarioUseCase } from '../../Usuario/VerifyUsuario'
import { DeleteAreaIdeiaController } from './DeleteAreaIdeiaController'
import { DeleteAreaIdeiaUseCase } from './DeleteAreaIdeiaUseCase'

const areaIdeiaRepository = new SeqAreaIdeiaRepository()

const deleteAreaIdeiaUseCase = new DeleteAreaIdeiaUseCase(areaIdeiaRepository, verifyUsuarioUseCase)

const deleteAreaIdeiaController = new DeleteAreaIdeiaController(deleteAreaIdeiaUseCase)

export { deleteAreaIdeiaController, deleteAreaIdeiaUseCase }
