import { SeqEquipeRepository } from '../../../infra/sequelize/repositories/SeqEquipeRepository'
import { SeqIdeiaRepository } from '../../../infra/sequelize/repositories/SeqIdeiaRepository'
import { verifyUsuarioUseCase } from '../../Usuario/VerifyUsuario'
import { ListIdeiasController } from './ListIdeiasController'
import { ListIdeiasUseCase } from './ListIdeiasUseCase'

const ideiasRepository = new SeqIdeiaRepository()
const equipeRepository = new SeqEquipeRepository()
const listIdeiasUseCase = new ListIdeiasUseCase(ideiasRepository, equipeRepository, verifyUsuarioUseCase)
const listIdeiasController = new ListIdeiasController(listIdeiasUseCase)

export { listIdeiasController, listIdeiasUseCase }
