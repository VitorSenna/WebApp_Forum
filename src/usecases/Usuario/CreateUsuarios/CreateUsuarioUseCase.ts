/* eslint-disable no-useless-constructor */
import { Usuario } from '../../../entities/Usuario'
import { IUsuarioRepository } from '../../../infra/seqInterfaces/IUsuarioRepository'
import { DataInUse } from '../../../main/errors-type/DataInUse'
import { DataRequired } from '../../../main/errors-type/DataRequired'
import { CreateUsuarioDTO } from './CreateUsuarioDTO'

export class CreateUsuarioUseCase {
  constructor (private usuarioRepository: IUsuarioRepository) {}

  async execute (data: CreateUsuarioDTO): Promise<void> {
    if (!data.email) throw new DataRequired('Email')
    const email = await this.usuarioRepository.findUsuarioByEmail(data.email)
    if (email) throw new DataInUse('Email')

    if (!data.username) throw new DataRequired('UserName')
    const username = await this.usuarioRepository.findUsuarioByUserName(data.username)
    if (username) throw new DataInUse('UserName')

    if (!data.senha) throw new DataRequired('Senha')
    if (!data.nome) throw new DataRequired('Nome')

    const usuario = new Usuario(data)

    await this.usuarioRepository.save(usuario)
  }
}
