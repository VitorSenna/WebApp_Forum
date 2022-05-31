import { SeqUsuarioRepository } from '../../../infra/sequelize/repositories/SeqUsuarioRepository'
import { UpdateUsuariosController } from './UpdateUsuariosController'
import { UpdateUsuariosUseCase } from './UpdateUsuariosUseCase'

const usuarioRepository = new SeqUsuarioRepository()

const updateUsuarioUseCase = new UpdateUsuariosUseCase(usuarioRepository)

const updateUsuariosController = new UpdateUsuariosController(updateUsuarioUseCase)

export { updateUsuarioUseCase, updateUsuariosController }
