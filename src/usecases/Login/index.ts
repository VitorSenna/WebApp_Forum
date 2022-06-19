import { SeqUsuarioRepository } from '../../infra/sequelize/repositories/SeqUsuarioRepository'
import { AuthController } from './AuthController'
import { AuthUseCase } from './AuthUseCase'

const usuarioRepository = new SeqUsuarioRepository()
const authUseCase = new AuthUseCase(usuarioRepository)
const authController = new AuthController(authUseCase)

export { authController, authUseCase }
