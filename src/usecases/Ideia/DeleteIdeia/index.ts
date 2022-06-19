import { SeqEquipeRepository } from '../../../infra/sequelize/repositories/SeqEquipeRepository'
import { SeqIdeiaRepository } from '../../../infra/sequelize/repositories/SeqIdeiaRepository'
import { verifyUsuarioUseCase } from '../../Usuario/VerifyUsuario'
import { DeleteIdeiasController } from './DeleteIdeiasController'
import { DeleteIdeiasUseCase } from './DeleteIdeiasUseCase'

const ideiasRepository = new SeqIdeiaRepository()
const equipeRepository = new SeqEquipeRepository()
const deleteIdeiasUseCase = new DeleteIdeiasUseCase(ideiasRepository, equipeRepository, verifyUsuarioUseCase)
const deleteIdeiasController = new DeleteIdeiasController(deleteIdeiasUseCase)

export { deleteIdeiasUseCase, deleteIdeiasController }
