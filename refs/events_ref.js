// позволяет добавлять events имитеры к приложению
// EventEmitter - прослушивать определенные события в асинхронном режиме
const EventEmitter = require('events');

class Logger extends EventEmitter {
  log(message) {
    this.emit('message', `${message} ${Date.now()}`)
  }
}

const logger = new Logger()
// указываем какое событие мы хотим слушать
logger.on('message', data => {
  console.log(data)
})

logger.log('Hello')