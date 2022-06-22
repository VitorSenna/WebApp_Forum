import { SeqEquipeRepository } from '../../infra/sequelize/repositories/SeqEquipeRepository'
import { SeqUsuarioRepository } from '../../infra/sequelize/repositories/SeqUsuarioRepository'
import { verifyUsuarioUseCase } from '../Usuario/VerifyUsuario'
import { AddUserToEquipeController } from './AddUserToEquipeController'
import { AddUserToEquipeUseCase } from './AddUserToEquipeUseCase'

const usuarioRepository = new SeqUsuarioRepository()
const equipeRepository = new SeqEquipeRepository()

const addUserToEquipeUseCase = new AddUserToEquipeUseCase(usuarioRepository, equipeRepository, verifyUsuarioUseCase)

const addUserToEquipeController = new AddUserToEquipeController(addUserToEquipeUseCase)

export { addUserToEquipeController, addUserToEquipeUseCase }
