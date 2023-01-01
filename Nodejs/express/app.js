const express = require('express')
const bodyParser = require('body-parser')
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const path = require('path')

const app = express();
app.set('view engine', 'ejs')
//app.set('views', 'views')
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended:true}))

app.use('/admin',adminRoutes.routes);

app.use(shopRoutes)

app.use((req, res, next) => {
   // res.status(404).sendFile(path.join(__dirname,'./','views','404.html'))
    res.status(404).render('404',{pageTitle: 'PageNotFound'})
});




app.listen(3000, function () {
    console.log('server running up and down')
})