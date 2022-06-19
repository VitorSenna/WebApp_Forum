/* eslint-disable no-useless-constructor */
import { IUsuarioRepository } from '../../infra/seqInterfaces/IUsuarioRepository'
import { DataNotFound } from '../../main/errors-type/DataNotFound'
import { UseCase } from '../../main/protocols/usecase'
import bcrypt from 'bcryptjs'
import { NotAuth } from '../../main/errors-type/NotAuth'
import jwt from 'jsonwebtoken'

export class AuthUseCase implements UseCase {
  constructor (private usuarioRepository: IUsuarioRepository) {}

  async execute (data: {email: string, senha: string}): Promise<string> {
    const user = await this.usuarioRepository.findUsuarioByEmail(data.email)
    if (!user) throw new DataNotFound('Email')

    const isValidPassword = await bcrypt.compare(data.senha, user.senha)

    if (!isValidPassword) throw new NotAuth('Usuário')

    const token = jwt.sign({ id: user.id }, 'token', { expiresIn: '14d' })

    return token
  }
}
