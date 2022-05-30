import { TypedErrors } from './TypedErrors'

export class DataInUse extends TypedErrors {
  constructor (object: string, local: string = 'Fórum') {
    super(`O(a) ${object} já está cadastrado(a) no ${local}`)
    this.name = `${object} In Use`
  }
}
