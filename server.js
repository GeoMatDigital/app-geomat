const express = require('express')

const app = express()
const port = process.env.PORT || 5000
const router = express.Router()

app.use(express.static(`${__dirname}/www`))

app.set('views', `${__dirname}/www`)

router.get('/*', (req, res, next) => {
  res.sendFile(`${__dirname}/www/index.html`)
})

app.use('/', router)

app.listen(port)
console.log('Ionic app running on port', port)
