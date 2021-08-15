function consoleToJSON() {
  const c = {}

  for (let i = 2; i < process.argv.length; i++) {
    const arg = process.argv[i].split('=')
    c[arg[0]] = arg[1] ? arg[1] : true
  }

  return c
}

console.log(consoleToJSON()) // { message: 'hello', spec: true }


/*
  [
    'C:\\Program Files\\nodejs\\node.exe',
    'C:\\evgeniybudaev\\CODE\\NODE_JS\\Vladilen\\vladilen-nodejs-basics\\refs\\console'
  ]
*/
console.log(process.argv) // node console.js

/*
  [
    'C:\\Program Files\\nodejs\\node.exe',
    'C:\\evgeniybudaev\\CODE\\NODE_JS\\Vladilen\\vladilen-nodejs-basics\\refs\\console',
    'test'
  ]
*/
console.log(process.argv) // node console.js test

/*
  [
    'C:\\Program Files\\nodejs\\node.exe',
    'C:\\evgeniybudaev\\CODE\\NODE_JS\\Vladilen\\vladilen-nodejs-basics\\refs\\console.js',
    'message=hello',
    'spec'
  ]
*/
console.log(process.argv) // node console.js message=hello spec
