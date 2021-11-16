const db = require("../model/index");
const path = require('path');
const Document = db.document;


const upload = async (req, res) => {

    let documentPath = '../assets/upload/' + req.file.filename;
    const document = await Document.create({
        lecturerId : 1,
        title: req.file.filename,
        type: path.extname(req.file.filename),
        path: documentPath,
    });
    res.redirect('/upload');
}

const getDocument = async (req, res) =>{
    let documents = await Document.findAll({where: {
      lecturerId: 1
    }});
    if(documents){
      for(let i =0; i< documents.length; i++){
        console.log('---------------------')
        console.log(documents[i].dataValues);
      }
      res.render('upload', {documents : documents});
    }else{
      res.render('upload')
    }
   
}

module.exports = {
  getDocument: getDocument, 
  upload: upload
};