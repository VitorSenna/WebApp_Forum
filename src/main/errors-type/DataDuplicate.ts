import { TypedErrors } from './TypedErrors'

export class DataDuplicate extends TypedErrors {
  constructor (object: string, local: string = 'Fórum') {
    super('Você já faz parte dessa equipe!')
    // this.name = `${object} In Use`
  }
}
