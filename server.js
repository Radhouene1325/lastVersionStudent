const express = require('express')
var bodyParser = require('body-parser')
const app = express();
const db = require('./config/database')
const cookieParser = require('cookie-parser');
const multer=require("multer")
const fs = require("fs");
require('dotenv').config()
const cors = require('cors');
const port = process.env.PORT;
// parse application/json 
app.use(bodyParser.json())

// to read body from request
app.use(cookieParser()); //<----- This middleware is needed to read Cookie from request. Without it, we'll get no req.cookie...
app.use(express.json()); //<----- this middleware is needed to read JSON from request. Without it, we'll get req.body == undefined.
app.use(express.urlencoded({ extended: true }));

/***********uploadFile to post */
app.use(cors({

  origin: "http://localhost:3000",
  credentials: true,

}))
app.use(express.static("imageposte"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'imageposte')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname)
  }
});
const fileFilter = (req, file, callback) => {
  //function to control which files are accepted
  if (
    file.mimetype == "image/jpg" ||
    file.mimetype == "image/png"||
    "application/pdf"
  
  ) {
    //mimetype of the file
    callback(null, true);
  } else {
    callback(null, false);
  }
};

const upload=multer({ storage: storage ,fileFilter:fileFilter}).single('image')
 app.post("/imagepost", async (req, res) => {
  console.log(req.file)
  console.log(req.body)

  upload(req, res, (err) => {
      if (err) {
          return res.status(500).json(err)
      }

      return res.status(200).json(req.file)
  })
})
  


/***********end */



//liaison front-back



app.get("/getfile/:image", function (req, res) {
  res.sendFile(__dirname + "/upload/" + req.params.image);
});

app.get("/file/:avatar", function (req, res) {
  res.sendFile(__dirname + "/upload/" + req.params.avatar);
});

app.get('/', (req, res) => { res.send('server is up') })


const annonceRouter = require('./routers/annoncesRouter')
app.use('/annonces', annonceRouter)

const userRouter = require('./routers/userRouter');
app.use('/users', userRouter)

const categorieRouter = require('./routers/categorieRouter');
app.use('/categories', categorieRouter)

const postRouter = require('./routers/postRouter');
app.use('/posts', postRouter)

const commentaireRouter = require('./routers/commentaireRouter.js');
app.use('/commentaires', commentaireRouter)

const adminRouter = require('./routers/adminRouter');
app.use('/admin', adminRouter)

const advertiserRouter = require('./routers/advertiserRouter');
app.use('/advertisers', advertiserRouter)

const serviceProviderRouter = require('./routers/serviceProviderRouter');
app.use('/servicesprovider', serviceProviderRouter)

const notificationRouter = require('./routers/notificationRouter');
app.use('/notifications', notificationRouter)

const feedbackRouter = require('./routers/feedBackRouter');

app.use('/feedback', feedbackRouter)

// express doesn't consider not found 404 as an error so we need to handle 404 explicitly
// handle 404 error

// app.use(function(req,res, next) {
//     let err = new Error();
//        err.status = 404;
//        next(err);
//    });

//    // handle errors
// app.use(function(err, req, res, next) {
//     console.log(err);
//      if(err.status === 404)
//       res.status(404).json({message: " Path Not found"});
//      else 
//        res.status(500).json({message: "Something looks wrong "+err});
//    });

app.get('*', (req, res) => {
  res.json({
    message: 'page not found !'
  })
})

app.listen(port, console.log(`server running at http://localhost:${port}`))