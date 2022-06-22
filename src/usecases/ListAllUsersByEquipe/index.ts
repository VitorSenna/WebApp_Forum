import { SeqEquipeRepository } from '../../infra/sequelize/repositories/SeqEquipeRepository'
import { verifyUsuarioUseCase } from '../Usuario/VerifyUsuario'
import { ListAllUsersByEquipeController } from './ListAllUsersByEquipeController'
import { ListAllUsersByEquipeUseCase } from './ListAllUsersByEquipeUseCase'

const equipeRepository = new SeqEquipeRepository()

const listAllUsersByEquipeUseCase = new ListAllUsersByEquipeUseCase(equipeRepository, verifyUsuarioUseCase)

const listAllUsersByEquipeController = new ListAllUsersByEquipeController(listAllUsersByEquipeUseCase)

export { listAllUsersByEquipeController, listAllUsersByEquipeUseCase }
