import { Controller, HttpRequest, HttpResponse } from '../../protocols'
import { badRequest, serverError, unauthorized, ok } from '../../helpers/httpHelper'
import { MissingParamError, InvalidParamError } from '../../errors'
import { EmailValidator, Authentication } from './login.protocols'

export class LoginController implements Controller {
  private readonly emailValidator: EmailValidator
  private readonly authentication: Authentication

  constructor (emailValidator: EmailValidator, authentication: Authentication) {
    this.emailValidator = emailValidator
    this.authentication = authentication
  }

  async handle (httpResquet: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredFields = ['email', 'password']
      for (const field of requiredFields) {
        if (!httpResquet.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }
      const { email, password } = httpResquet.body
      const isValid = this.emailValidator.isValid(email)
      if (!isValid) {
        return badRequest(new InvalidParamError('email'))
      }
      const accessToken = await this.authentication.auth(email, password)
      if (!accessToken) {
        return unauthorized()
      }
      return ok({ accessToken })
    } catch (error) {
      return serverError(error)
    }
  }
}
