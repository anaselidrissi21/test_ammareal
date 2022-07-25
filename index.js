const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const router = require('./api/router');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname, + '/front'))

const multer = require('multer');
const bodyParser = multer();

// on utlise .none() pour dire qu'on attends pas de fichier, uniquement des inputs "classiques" !
app.use( bodyParser.none() );
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use(cors({
    origin: "*"
}));

app.use(router);

app.listen(port, () => {
    console.log(`ready on port http://localhost:${port}`)
})
