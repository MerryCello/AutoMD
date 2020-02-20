const express = require('express')
const ejs = require('ejs')
const path = require('path')
let app = express()
const Router = express.Router()

app.set('port', process.env.PORT || 5000)
   .set('view engine', 'ejs')
   .set('views', path.join(__dirname, 'views'))
   .use(express.static(path.join(__dirname, 'public')))

Router.get('/', (req, res) => {
    res.render(app.get('views') + '/pages/homepage.ejs')
})

app.use('/', Router)

app.listen(app.get('port'), () => {
    console.log('Listening on port: ' + app.get('port'))
})