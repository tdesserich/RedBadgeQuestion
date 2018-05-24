require('dotenv').config()
require('./models')
const express = require('express');
const app = express();
app.use(require('body-parser').json());
app.set('view engine', 'ejs');
const StoreInventoryService = require('./services/storeInventoryService');
const sis = new StoreInventoryService();

require('./routes')(app);

app.listen(3000, () => {
    console.log('process is started on port 3000')
})

app.get('/', function(req, res) {
    sis.findAllProducts({}).then(data => {
        res.render('index', {
           products: data
       });

    }); 
    }   
);
