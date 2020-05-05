import { Controller, HttpRequest, HttpResponse } from '../../protocols'
import { badRequest } from '../../helpers/httpHelper'
import { MissingParamError } from '../../errors'
import { EmailValidator } from '../signup/signup.protocols'

export class LoginController implements Controller {
  private readonly emailValidator: EmailValidator

  constructor (emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }

  async handle (httpResquet: HttpRequest): Promise<HttpResponse> {
    if (!httpResquet.body.email) {
      return await new Promise(resolve => resolve(badRequest(new MissingParamError('email'))))
    }
    if (!httpResquet.body.password) {
      return await new Promise(resolve => resolve(badRequest(new MissingParamError('password'))))
    }
    this.emailValidator.isValid(httpResquet.body.email)
  }
}
