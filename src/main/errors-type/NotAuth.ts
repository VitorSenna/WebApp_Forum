import { TypedErrors } from './TypedErrors'

export class NotAuth extends TypedErrors {
  constructor (object: string, local: string = 'Fórum') {
    super(`O(a) ${object} não autorizado no(a) ${local}`)
    this.name = `${object} is not auth`
  }
}
