import { SeqEquipeRepository } from '../../../infra/sequelize/repositories/SeqEquipeRepository'
import { CreateEquipesController } from './CreateEquipesController'
import { CreateEquipesUseCase } from './CreateEquipesUseCase'

const equipeRepository = new SeqEquipeRepository()

const createEquipesUseCase = new CreateEquipesUseCase(equipeRepository)

const createEquipesController = new CreateEquipesController(createEquipesUseCase)

export { createEquipesController, createEquipesUseCase }
