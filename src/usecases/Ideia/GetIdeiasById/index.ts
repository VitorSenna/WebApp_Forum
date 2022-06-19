import { SeqEquipeRepository } from '../../../infra/sequelize/repositories/SeqEquipeRepository'
import { SeqIdeiaRepository } from '../../../infra/sequelize/repositories/SeqIdeiaRepository'
import { verifyUsuarioUseCase } from '../../Usuario/VerifyUsuario'
import { GetIdeiasByIdController } from './GetIdeiasByIdController'
import { GetIdeiaByIdUseCase } from './GetIdeiasByIdUseCase'

const ideiasRepository = new SeqIdeiaRepository()
const equipeRepository = new SeqEquipeRepository()
const getIdeiasByIdUseCase = new GetIdeiaByIdUseCase(ideiasRepository, equipeRepository, verifyUsuarioUseCase)
const getIdeiasByIdController = new GetIdeiasByIdController(getIdeiasByIdUseCase)

export { getIdeiasByIdUseCase, getIdeiasByIdController }
