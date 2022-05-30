import { TypedErrors } from './TypedErrors'

export class DataRequired extends TypedErrors {
  constructor (object: string, local: string = 'Fórum') {
    super(`O(a) ${object} é obrigatório(a) no ${local}`)
    this.name = `${object} is Required`
  }
}
