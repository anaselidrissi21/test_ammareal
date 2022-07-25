const dotenv = require('dotenv');
dotenv.config();
const express = require('express');


const router = require('./api/router');

const app = express();
const port = process.env.PORT || 3000;
app.use(express.urlencoded({extended : true}));

app.use(router);

app.listen(port, () => {
    console.log(`ready on port http://localhost:${port}`)
})
