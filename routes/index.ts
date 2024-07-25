import Router from 'express'
const router = Router()

// *** Test ***
router.get('/', (request, response) => {
  response.send({
    message: 'Node.js and Express REST API'
  })
})
router.get('/a', (request, response) => {
  response.send({
    message: 'вот вам A'
  })
})
router.post('/mail', (request, response) => {
  response.send({
    mail: request.body?.mail,
    message: 'Ваша почта успешно взломана'
  })
})
router.post('/file', (request, response) => {
  console.log('/file')  
  console.log(request.params)  
  console.log(request.body)  
  console.log(request.query)  
  response.send({
    mail: request.body?.mail,
    message: 'Ваша почта успешно взломана'
  })
})

export default router
