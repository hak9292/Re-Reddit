import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import mongoose from "mongoose";
import cors from 'cors';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from './models/User.js';
import Comment from './models/Comment.js';
import 'dotenv/config';




// const secret = 'secret123';
// const path = path();
const app = express();

const PORT = process.env.PORT || 4000;

const secret = process.env.SECRET;

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors({
  origin: ['http://localhost:3000', 'https://re-reddit-app.herokuapp.com/'],
  credentials: true,
}));

function getUserFromToken(token) {
  const userInfo = jwt.verify(token, process.env.SECRET);
  return User.findById(userInfo.id);
}

await mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost:27017/rereddit', {useNewUrlParser:true,useUnifiedTopology:true,});
const db = mongoose.connection;
db.on('error', console.log);

if (process.env.NODE_ENV !== 'production') {
app.get('/', (req, res) => {
    res.send('ok');
  });
}

app.post('/register', (req, res) => {
    const {email,username} = req.body;
    // encrypt password with bcrypt
    const password = bcrypt.hashSync(req.body.password, 10);
    const user = new User({email,username,password});
    user.save().then(user => {
        jwt.sign({id:user._id}, secret, (err, token) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.status(201).cookie('token', token).send();
        }
        });
    }).catch(e => {
        console.log(e);
        res.sendStatus(500);
    });
});


app.get('/user', (req, res) => {
    const token = req.cookies.token;
  
    getUserFromToken(token)
      .then(user => {
        res.json({username:user.username});
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  
  });




app.post('/login', (req, res) => {
  const {username, password} = req.body;
  User.findOne({username}).then(user => {
    if (user && user.username) {
      const passOk = bcrypt.compareSync(password, user.password);
      if (passOk) {
        jwt.sign({id:user._id}, secret, (err, token) => {
          res.cookie('token', token).send();
        });
      } else {
        res.status(422).json('Invalid username or password');
      }
    } else {
      res.status(422).json('Invalid username or password');
    }
  });
});

app.post('/logout', (req, res) => {
  res.cookie('token', '').send();
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static( 'client/build' ));

  app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // relative path
  });

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // relative path
});
}
app.get('/comments', (req, res) => {
  Comment.find()
  .then(comments => {
    res.json(comments);
  });
});

app.get('/comments/:id', (req, res) => {
  Comment.findById(req.params.id)
  .then(comment => {
    res.json(comment);
  });
  // res.json(req);
});
app.listen(PORT, () => {
  console.log(`Server is starting at PORT: ${PORT}`);
});

