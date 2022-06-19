import { SeqAreaIdeiaRepository } from '../../../infra/sequelize/repositories/SeqAreaIdeiaRepository'
import { SeqEquipeRepository } from '../../../infra/sequelize/repositories/SeqEquipeRepository'
import { SeqIdeiaRepository } from '../../../infra/sequelize/repositories/SeqIdeiaRepository'
import { verifyUsuarioUseCase } from '../../Usuario/VerifyUsuario'
import { CreateIdeiaController } from './CreateIdeiaController'
import { CreateIdeiaUseCase } from './CreateIdeiaUseCase'

const ideiaRepository = new SeqIdeiaRepository()
const equipeRepository = new SeqEquipeRepository()
const areaIdeiaRepository = new SeqAreaIdeiaRepository()

const createIdeiaUseCase = new CreateIdeiaUseCase(ideiaRepository, equipeRepository, areaIdeiaRepository, verifyUsuarioUseCase)

const createIdeiaController = new CreateIdeiaController(createIdeiaUseCase)

export { createIdeiaController, createIdeiaUseCase }
