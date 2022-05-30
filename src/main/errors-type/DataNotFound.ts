import { TypedErrors } from './TypedErrors'

export class DataNotFound extends TypedErrors {
  constructor (object: string, local: string = 'Fórum') {
    super(`O(a) ${object} não foi encontrado no ${local}`)
    this.name = `${object} Not Found`
  }
}
