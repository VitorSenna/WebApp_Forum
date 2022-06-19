import { SeqEquipeRepository } from '../../../infra/sequelize/repositories/SeqEquipeRepository'
import { DeleteEquipesController } from './DeleteEquipesController'
import { DeleteEquipesUseCase } from './DeleteEquipesUseCase'

const equipesRepository = new SeqEquipeRepository()
const deleteEquipesUseCase = new DeleteEquipesUseCase(equipesRepository)
const deleteEquipesController = new DeleteEquipesController(deleteEquipesUseCase)

export { deleteEquipesController, deleteEquipesUseCase }
