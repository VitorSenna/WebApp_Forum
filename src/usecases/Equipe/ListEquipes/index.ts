import { SeqEquipeRepository } from '../../../infra/sequelize/repositories/SeqEquipeRepository'
import { ListEquipesController } from './ListEquipesController'
import { ListEquipesUseCase } from './ListEquipesUseCase'

const equipesRepository = new SeqEquipeRepository()

const listEquipesUseCase = new ListEquipesUseCase(equipesRepository)

const listEquipesController = new ListEquipesController(listEquipesUseCase)

export { listEquipesController, listEquipesUseCase }
