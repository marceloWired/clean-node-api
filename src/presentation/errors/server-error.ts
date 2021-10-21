export class ServerError extends Error {
  constructor () {
    super('Internal server error. Try again in few moments')
    this.name = 'ServerError'
  }
}
