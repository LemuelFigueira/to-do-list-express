const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var password = 'Qh10fz7O3CAkq0vQ';
var dbname = 'to-do-list';
var MONGO_URL = `mongodb+srv://lemuel:${password}@lemueldev.tlqp1.gcp.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect('mongodb://localhost/todo-list', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conectado ao MongoDB')
}).catch(err => {
    console.log(err)
})