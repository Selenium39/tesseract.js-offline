const { createWorker } = require('tesseract.js')
const path = require('path')

const worker = createWorker({
  langPath: path.join(__dirname, '.', 'lang-data'),
  logger: m => console.log(m)
});

(async () => {
  await worker.load()
  await worker.loadLanguage('jpn')
  await worker.initialize('jpn')
  const { data: { text } } = await worker.recognize(path.join(__dirname, '.', 'images', 'japanese.jpg'))
  console.log(text)
  await worker.terminate()
})()
