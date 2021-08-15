/* https://nodejs.org/dist/latest-v14.x/docs/api/fs.html */
const fs = require('fs'); // fs - File System
const path = require('path');

// создание папки
fs.mkdir(path.join(__dirname, 'notes'), (error) => {
  if (error) throw new error;

  console.log('Папка была создана.')
})

// создание файла
fs.writeFile(
  path.join(__dirname, 'notes', 'my_new_file.txt'),
  'Hello world',
  (error) => {
    if (error) throw new error;
    console.log('Файл был создан.')

    // добавляем в файл новые данные
    fs.appendFile(
      path.join(__dirname, 'notes', 'my_new_file.txt'),
      'Новый контент который мы добавляем уже к существующему.',
      (error) => {
        if (error) throw new error;
        console.log('Файл был изменен.')

        fs.readFile(
          path.join(__dirname, 'notes', 'my_new_file.txt'),
          'utf-8',
          (error, data) => {
            if (error) throw new error;
            console.log(data) // Hello World Новый контент который мы добавляем уже к существующему.
          }
        )

      }
    )
  }
)

// чтение файла.
fs.readFile(
  path.join(__dirname, 'notes', 'my_new_file.txt'),
  (error, data) => {
    if (error) throw new error;
    console.log(data) // <Buffer 48 65 6c>
    console.log(Buffer.from(data).toString()) // Hello World
  }
)

fs.readFile(
  path.join(__dirname, 'notes', 'my_new_file.txt'),
  'utf-8',
  (error, data) => {
    if (error) throw new error;
    console.log(data) // Hello World
  }
)

// переименовать файл.
fs.rename(
  path.join(__dirname, 'notes', 'my_new_file.txt'),
  path.join(__dirname, 'notes', 'my_rename_file.txt'),
  error => {
    if (error) throw new error;
    console.log('Файл переименован.')
  }
)