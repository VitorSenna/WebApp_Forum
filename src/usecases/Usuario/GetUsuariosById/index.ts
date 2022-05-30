import { SeqUsuarioRepository } from '../../../infra/sequelize/repositories/SeqUsuarioRepository'
import { GetUsuariosByIdController } from './GetUsuariosByIdController'
import { GetUsuariosByIdUseCase } from './GetUsuariosByIdUseCase'

const usuarioRepository = new SeqUsuarioRepository()

const getUsuariosByIdUseCase = new GetUsuariosByIdUseCase(usuarioRepository)
const getUsuariosByIdController = new GetUsuariosByIdController(getUsuariosByIdUseCase)

export { getUsuariosByIdUseCase, getUsuariosByIdController }
