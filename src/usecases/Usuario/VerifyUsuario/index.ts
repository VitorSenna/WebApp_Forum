import { SeqUsuarioRepository } from '../../../infra/sequelize/repositories/SeqUsuarioRepository'
import { VerifyUsuarioUseCase } from './VerifyUsuarioUseCase'

const usuarioRepository = new SeqUsuarioRepository()

const verifyUsuarioUseCase = new VerifyUsuarioUseCase(usuarioRepository)

export { usuarioRepository, verifyUsuarioUseCase }
