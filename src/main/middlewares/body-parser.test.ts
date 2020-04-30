import request from 'supertest'
import app from '../config/app'

describe('Body Parse Middleware', () => {
  test('Should parser body as json', async () => {
    app.post('/test_body_parse', (request, response) => {
      response.send(request.body)
    })
    await request(app)
      .post('/test_body_parse')
      .send({ name: 'Magno' })
      .expect({ name: 'Magno' })
  })
})
