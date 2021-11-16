const path = require('path');
const express = require("express");
const db = require('./app/model/index');
const upload = require('./app/middleware/upload');
const controller = require('./app/controller/uploadCtl');

const app = express();
const port = 3000;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

//Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public/views'));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/assets/upload'));

app.get('/', (req, res) => { 
    res.send('Hello People'); 
});

app.get("/upload", controller.getDocument)

app.post("/upload", upload.documentUpload.single("file"), controller.upload)
  

console.log(__dirname);
global.appRoot = path.resolve(__dirname);



db.connectDb();

app.listen(port, () => {
    console.log('Server is up on port ' + port);
})