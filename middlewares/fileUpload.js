const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, res, callback){
        callback(null, "uploads") // penyimpanan file gambar
    },
    filename: function(req, file, callback){
        callback(null, Date.now() + "-" + file.originalname) // rename file image
    }
})

const upload = multer({storage})

module.exports = upload