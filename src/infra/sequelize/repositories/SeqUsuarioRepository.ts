import { Usuario } from '../../../entities/Usuario'
import { IUsuarioRepository } from '../../seqInterfaces/IUsuarioRepository'
import { UsuarioModel } from '../models/Usuario-model'

export class SeqUsuarioRepository implements IUsuarioRepository {
  async save (usuario: Usuario): Promise<boolean> {
    const data = await UsuarioModel.create({
      dataCadastro: usuario.dataCadastro,
      email: usuario.email,
      nome: usuario.nome,
      senha: usuario.senha,
      sobrenome: usuario.sobrenome,
      username: usuario.sobrenome
    })

    return !!data
  }

  async findUsuarioByEmail (email: string): Promise<Usuario> {
    const usuarioModel = await UsuarioModel.findOne({
      where: {
        email
      }
    })
    if (!usuarioModel) return null

    const usuario = new Usuario(usuarioModel)

    return usuario
  }

  async findUsuarioByUserName (username: string): Promise<Usuario> {
    const usuarioModel = await UsuarioModel.findOne({
      where: {
        username
      }
    })

    if (!usuarioModel) return null

    const usuario = new Usuario(usuarioModel)

    return usuario
  }

  async findAll (): Promise<Usuario[]> {
    const usuariosModel = UsuarioModel.findAll()

    const usuarios = (await usuariosModel).map(usuarioModel => {
      const usuario = new Usuario(usuarioModel)

      return usuario
    })

    return usuarios
  }

  async findById (id: number): Promise<Usuario> {
    const usuarioModel = await UsuarioModel.findOne({
      where: {
        id
      }
    })

    if (!usuarioModel) return null

    const usuario = new Usuario(usuarioModel)

    return usuario
  }
}
