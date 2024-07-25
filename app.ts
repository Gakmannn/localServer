import express from 'express'
import router from '@/routes'
import pkg from 'body-parser'
import cors from 'cors'
import multer from 'multer'
const { json, urlencoded } = pkg
const port = 3002
const app = express()

// Указываем, куда сохранять файлы
const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'static/img');
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname)
  }
})
// Создаём конфигурацию multer
const upload = multer({ storage: storageConfig })
app.use(upload.any())

// Use Node.js body parsing middleware
app.use(json({ limit: '50mb' }))
app.use(urlencoded({
  extended: true
}))

app.use(cors())

app.use(express.static('public'))
app.use(router)
// Описываем функцию, которая будет обрабатывать POST запросы на адрес '/data'
app.post('/data', (req, res) => {
  console.log(req.body)
  console.log(req.files)
  res.send({ ok: 'server' })
})
// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

process.on("SIGINT", () => {
  // console.log('Отключение от bd прошло успешно')
  process.exit();
});