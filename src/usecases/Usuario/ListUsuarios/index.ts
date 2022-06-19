import { SeqUsuarioRepository } from '../../../infra/sequelize/repositories/SeqUsuarioRepository'
import { ListUsuariosController } from './ListUsuariosController'
import { ListUsuariosUseCase } from './ListUsuariosUseCase'

const usuarioRepository = new SeqUsuarioRepository()

const listUsuariosUseCase = new ListUsuariosUseCase(usuarioRepository)
const listUsuariosController = new ListUsuariosController(listUsuariosUseCase)

export { listUsuariosController, listUsuariosUseCase }
