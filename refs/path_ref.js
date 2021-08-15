/* https://nodejs.org/dist/latest-v14.x/docs/api/path.html */
const path = require('path')

console.log(__filename) // absolute path
console.log(path.basename(__filename)) // path_ref.js
console.log(path.dirname(__filename)) // C:\evgeniybudaev\CODE\NODE_JS\Vladilen\vladilen-nodejs-basics\refs
console.log(path.extname(__filename)) // .js
console.log(path.parse(__filename)) // object { root, dir, base, ext, name }
console.log(path.join(__dirname, 'test', 'second.html')) // C:\evgeniybudaev\CODE\NODE_JS\Vladilen\vladilen-nodejs-basics\refs\test\second.html
console.log(path.resolve(__dirname, './test', '/second.html')) // C:\second.html
