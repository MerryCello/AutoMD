const express = require('express')
const fs = require('fs')
const ejs = require('ejs')
const path = require('path')
let app = express()
const Router = express.Router()

app.set('port', process.env.PORT || 5000)
   .set('view engine', 'ejs')
   .set('views', path.join(__dirname, 'views'))
   .use(express.static(path.join(__dirname, 'public')))

Router.get('/', (req, res) => {
    let addNewCar   = fs.readFileSync(app.get('views') + '/pages/addNewCar_popup.ejs', 'utf8')
    let carsTracked = fs.readFileSync(app.get('views') + '/pages/carsTrackedSlide.ejs', 'utf8')
    let gas         = fs.readFileSync(app.get('views') + '/pages/gas_slide-up.ejs', 'utf8')
    let maintenance = fs.readFileSync(app.get('views') + '/pages/maintenance_slide-up.ejs', 'utf8')
    let oil         = fs.readFileSync(app.get('views') + '/pages/oil_slide-up.ejs', 'utf8')
    let signInUp    = fs.readFileSync(app.get('views') + '/pages/signInUp-popup.ejs', 'utf8')
    let homepage    = fs.readFileSync(app.get('views') + '/pages/homepage.ejs', 'utf8')
    let data = {
        addNewCar: addNewCar,
        carsTracked: carsTracked,
        gas: gas,
        maintenance: maintenance,
        oil: oil,
        signInUp: signInUp
    }
    mainpage = ejs.render(homepage, data)

    res.setHeader('Content-Type', 'text/html');
    res.send(mainpage);
})

app.use('/', Router)

app.listen(app.get('port'), () => {
    console.log('Listening on port: ' + app.get('port'))
})