import { SeqUsuarioRepository } from '../../../infra/sequelize/repositories/SeqUsuarioRepository'
import { DeleteUsuarioController } from './DeleteUsuarioController'
import { DeleteUsuarioUseCase } from './DeleteUsuarioUseCase'

const usuarioRepository = new SeqUsuarioRepository()

const deleteUsuarioUseCase = new DeleteUsuarioUseCase(usuarioRepository)

const deleteUsuarioController = new DeleteUsuarioController(deleteUsuarioUseCase)

export { deleteUsuarioController, deleteUsuarioUseCase }
