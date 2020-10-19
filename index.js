const express = require('express');
const morgan = require('morgan');


const app = express();

app.set('port', 3000);

app.use(morgan('dev'));

app.listen(app.get('port'), () => {
    console.log(`Server: http://localhost:${app.get('port')}`);
})