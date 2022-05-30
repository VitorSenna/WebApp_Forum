import { Usuario } from '../../entities/Usuario'

export interface IUsuarioRepository{
    save(data: Usuario): Promise<boolean>

    findUsuarioByEmail(email: string): Promise<Usuario>
    findUsuarioByUserName(username: string): Promise<Usuario>
    findAll(): Promise<Usuario[]>
    findById(id: number): Promise<Usuario>
}
