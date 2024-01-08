import multer from "multer";

const countryStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './temp')
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname)
    }
})

export const upload = multer({ storage: countryStorage })