const multer = require("multer");
const path = require('path');


// //Define a filter to only allow file with excel format.
// //Định nghĩa bộ lọc để nhận duy nhất file excel

// const excelFilter = (req, file, cb) => {
//     if (
//         file.mimetype.includes("excel") ||
//         file.mimetype.includes("spreadsheetml")
//     ){
//         cb(null, true);
//     } else {
//         cb("Please upload only excel file.", false);
//     }
//   };

// //configure multer to use Disk Storage engine to sa
// // Cấu hình multer để sử dụng Disk Storage egine để lưu file excel

// const excelStorage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, appRoot + '/public/assets/uploads/');
//     },
//     filename: (req, file, cb) => {
//         console.log(file.originalname);
//         cb(null, file.originalname);
//     },
// });

const videoStorage = multer.diskStorage({
    destination: (req, file, cb) => {
            cb(null, appRoot + '/public/assets/upload/video');
        }, // Destination to store video 
    filename: (req, file, cb) => {
        cb(path.extname(file.originalname));
    }
});

const textbookStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, appRoot + '/public/assets/upload/textbook');
    }, // Destination to store textbook 
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() 
         + path.extname(file.originalname))
    }
});

const videoUpload = multer({
    storage: videoStorage,
    fileFilter(req, file, cb) {
      // upload only mp4 and mkv format
      if (!file.originalname.match(/\.(mp4|MPEG-4|mkv)$/)) { 
         return cb(new Error('Please upload a video'))
      }
      cb(undefined, true)
   }
});


const textbookUpload = multer({
    storage: textbookStorage,
    fileFilter(req, file, cb) {
      // upload only mp4 and mkv format
      if (!file.originalname.match(/\.(pdf|docx|mp4|MPEG-4|mkv)$/)) { 
            return cb(new Error('Please upload document'))
      }
      cb(undefined, true)
    }
});

const documentStorage =  multer.diskStorage({
    destination: (req, file, cb) => {
            cb(null, appRoot + '/public/assets/upload');
        }, // Destination to store video 
    filename: (req, file, cb) => {
        console.log(file.originalname);
        cb(null, file.originalname);
    }
});

const documentUpload = multer({
    storage: documentStorage,
    fileFilter(req, file, cb) {
      // upload only mp4 and mkv format
      if (!file.originalname.match(/\.(pdf|docx|mp4|MPEG-4|mkv|pptx|ppt)$/)) { 
            //return cb(new Error('Please upload a pdf or word'))
            cb("Please upload video, pdf, word, powerpoint or excel.", false);
      }else{
            cb(null, true)
      }
     
    }
});

module.exports = {
    videoUpload : videoUpload,
    textbookUpload : textbookUpload,
    documentUpload: documentUpload,
}