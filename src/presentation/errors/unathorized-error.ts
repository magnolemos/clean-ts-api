export class UnathorizedError extends Error {
  constructor () {
    super('Internal server error')
    this.name = 'UnathorizedError'
  }
}
