import { SeqAreaIdeiaRepository } from '../../../infra/sequelize/repositories/SeqAreaIdeiaRepository'
import { verifyUsuarioUseCase } from '../../Usuario/VerifyUsuario'
import { CreateAreaIdeiaController } from './CreateAreaIdeiaController'
import { CreateAreaIdeiaUseCase } from './CreateAreaIdeiaUseCase'

const areaIdeiaRepository = new SeqAreaIdeiaRepository()

const createAreaIdeiaUseCase = new CreateAreaIdeiaUseCase(areaIdeiaRepository, verifyUsuarioUseCase)

const createAreaIdeiaController = new CreateAreaIdeiaController(createAreaIdeiaUseCase)

export { createAreaIdeiaController, createAreaIdeiaUseCase }
