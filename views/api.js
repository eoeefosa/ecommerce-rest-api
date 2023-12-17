const multer = require("multer");

console.log("hep");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log(file.filename);
    const isvalid = FILE_TYPE_MAP[file.mimetype];
  },
});
    console.log(storage);
const upload = multer({ storage: storage });
console.log(upload);

let alpha = "this is a  string"
let beta = alpha.split(' ').join('-')
console.log(beta)