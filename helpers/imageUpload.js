const multer = require('multer');

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'public/images')
//     },
//     filename: function (req, file, cb) {
//     //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//       cb(null, `${Date.now()}_${file.originalname.replace(/\s+/g," ")}`)
//     }
//   });
//   exports.upload = multer({storage : storage});

const storage = multer.diskStorage({
  destination : function (req, file , cb){

    if(file.mimetype == 'image/jpg'||file.mimetype== 'image/jpeg' || file.mimetype == 'image/png'){
      cb(null,'public/images')
    }
    else{
      cb(null,'public/pdf')
    }
  },
  filename : function(req,file,cb){
    cb(null,`${Date.now()}_${file.originalname.replace(/\s/g," ")}`)
  }
})  ;
exports.upload = multer({storage : storage})