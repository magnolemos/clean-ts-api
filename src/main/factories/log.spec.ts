import { LogControllerDecorator } from '../decorators/log'
import { Controller, HttpRequest, HttpResponse } from '../../presentation/protocols'

describe('LogControllerDecorator', () => {
  test('Should call controller handle', async () => {
    class ControllerStub implements Controller {
      async handle (httpResquet: HttpRequest): Promise<HttpResponse> {
        const httpResponse: HttpResponse = {
          statusCode: 200,
          body: {
            name: 'Magno'
          }
        }
        return await new Promise(resolve => resolve(httpResponse))
      }
    }

    const controllerStub = new ControllerStub()
    const handleSpy = jest.spyOn(controllerStub, 'handle')
    const sut = new LogControllerDecorator(controllerStub)
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    await sut.handle(httpRequest)
    expect(handleSpy).toBeCalledWith(httpRequest)
  })
})
