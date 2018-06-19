const express = require('express')
const app = express()

//Settings
app.set('port', process.env.port || 3000);

//Middlewares
app.use(express.json())
//Routes

//Starting
app.listen(app.get('port'), ()=>{
    console.log('listen on' + app.get('port'))
})