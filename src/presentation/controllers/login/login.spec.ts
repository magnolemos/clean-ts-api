import { LoginController } from './login'
import { HttpRequest } from '../../protocols'
import { badRequest } from '../../helpers/httpHelper'
import { MissingParamError } from '../../errors'

describe('Login Controller', () => {
  test('Should return 400 if no email is providade', async () => {
    const sut = new LoginController()
    const httpRequest: HttpRequest = {
      body: {
        password: 'any_password'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(badRequest(new MissingParamError('email')))
  })

  test('Should return 400 if no password is providade', async () => {
    const sut = new LoginController()
    const httpRequest: HttpRequest = {
      body: {
        email: 'any_email@mail.com'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(badRequest(new MissingParamError('password')))
  })
})
