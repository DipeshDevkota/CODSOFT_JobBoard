const multer = require('multer');

// Set up storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads'); // Specify upload directory
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Unique file naming
    }
});

 const upload = multer({ storage: storage });
  module.exports=upload;
// Route with multer middleware
