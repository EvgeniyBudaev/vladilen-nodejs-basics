// os - Operation System дает понять на какой ОС мы работаем
const os = require('os')

// Платформа
console.log(os.platform()) // win32

// Архитектура
console.log(os.arch()) // x64

// Информация
console.log(os.cpus()) // model, speed, times, ...

// Свободная память
console.log(os.freemem()) // 37583007744

// Всего памяти
console.log(os.totalmem()) // 68491456512

// Корневая директория на компьютере
console.log(os.homedir()) // C:\Users\1

// Сколько система работает
console.log(os.uptime()) // результат 819375 в ms