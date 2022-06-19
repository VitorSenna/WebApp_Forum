/* eslint-disable no-unused-vars */
import { Usuario } from '../entities/Usuario'

declare global {
    namespace Express{
        interface Request{
            idUser: number
        }
    }
}
