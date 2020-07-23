const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/shopping', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected !')
    
})