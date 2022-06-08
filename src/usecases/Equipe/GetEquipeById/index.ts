import { SeqEquipeRepository } from '../../../infra/sequelize/repositories/SeqEquipeRepository'
import { GetEquipesByIdController } from './GetEquipesByIdController'
import { GetEquipesByIdUseCase } from './GetEquipesByIdUseCase'

const equipesRepository = new SeqEquipeRepository()

const getEquipesByIdUseCase = new GetEquipesByIdUseCase(equipesRepository)

const getEquipesByIdController = new GetEquipesByIdController(getEquipesByIdUseCase)

export { getEquipesByIdUseCase, getEquipesByIdController }
