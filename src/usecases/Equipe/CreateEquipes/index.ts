import { SeqEquipeRepository } from '../../../infra/sequelize/repositories/SeqEquipeRepository'
import { verifyUsuarioUseCase } from '../../Usuario/VerifyUsuario'
import { CreateEquipesController } from './CreateEquipesController'
import { CreateEquipesUseCase } from './CreateEquipesUseCase'

const equipeRepository = new SeqEquipeRepository()

const createEquipesUseCase = new CreateEquipesUseCase(equipeRepository, verifyUsuarioUseCase)

const createEquipesController = new CreateEquipesController(createEquipesUseCase)

export { createEquipesController, createEquipesUseCase }
