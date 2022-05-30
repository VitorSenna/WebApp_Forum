import { SeqUsuarioRepository } from '../../../infra/sequelize/repositories/SeqUsuarioRepository'
import { CreateUsuarioController } from './CreateUsuarioController'
import { CreateUsuarioUseCase } from './CreateUsuarioUseCase'

const usuarioRepository = new SeqUsuarioRepository()

const createUsuarioUseCase = new CreateUsuarioUseCase(usuarioRepository)
const createUsuarioController = new CreateUsuarioController(createUsuarioUseCase)

export { createUsuarioController, createUsuarioUseCase }
