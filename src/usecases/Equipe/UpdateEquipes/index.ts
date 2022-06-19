import { SeqEquipeRepository } from '../../../infra/sequelize/repositories/SeqEquipeRepository'
import { UpdateEquipesController } from './UpdateEquipesController'
import { UpdateEquipesUseCase } from './UpdateEquipesUseCase'

const equipesRepository = new SeqEquipeRepository()
const updateEquipesUseCase = new UpdateEquipesUseCase(equipesRepository)
const updateEquipesController = new UpdateEquipesController(updateEquipesUseCase)

export { updateEquipesController, updateEquipesUseCase }
