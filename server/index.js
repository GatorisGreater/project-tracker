//import 'babel-polyfill';
const  express = require('express');
//const HOST = process.env.HOST;
const PORT = process.env.PORT || 8080;
const mongoose = require('mongoose');
const {Project} = require('./models');
var bodyParser = require('body-parser');
const DATABASE_URL = process.env.DATABASE_URL ||
                     global.DATABASE_URL ||
                     'mongodb://localhost/project-tracker';

console.log(`Server running in ${process.env.NODE_ENV} mode`);

const app = express();
var jsonParser = bodyParser.json()

app.use(express.static(process.env.CLIENT_PATH));

mongoose.Promise = global.Promise;

app.get('/project-tracker', (req, res) => {

  Project
      .find()
      .exec()
      .then(projects => {
        res.json(projects);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({error: 'something went wrong'});
      })
});

app.put('/project-tracker/:id', jsonParser, (req, res) => {
  let update = {};
  let updateableFields = ['user', 'story', 'tools', 'status', 'improvements'];
  updateableFields.forEach(field => {
    if (field in req.body) {
      update[field] = req.body[field];
    }
  });
  Project
  .findByIdAndUpdate(req.params.id, {$set: update}, {new: true})
  .exec()
  .then(updatedProject => res.status(201).json(updatedProject))
  .catch(err => res.status(500).json({message: 'your update request was unsuccessful'}));
});

app.post('/project-tracker', jsonParser, function(req, res) {
    console.log(req.body);
    console.error(req.body);
     Project
      .create({
      name: req.body.project,
      user: req.body.user,
      story: req.body.story,
      tools: req.body.tools,
      status: req.body.status,
      improvements: req.body.improvements
      }, 
      function(err, item) {
        if (err) {
          console.log(err);
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        res.status(201).json(item);
      });
});

let server;
function runServer() {
  return new Promise((resolve, reject) => {
    mongoose.connect(DATABASE_URL, err => {
      if (err) {
        return reject(err);
      }
      server = app.listen(PORT, () => {
        console.log(`Your app is listening on port ${PORT}`);
        resolve();
      })
      .on('error', err => {
        mongoose.disconnect();
        reject(err);
      });
    });
  });
}

function closeServer() {
  return mongoose.disconnect().then(() => {
     return new Promise((resolve, reject) => {
       console.log('Closing server');
       server.close(err => {
           if (err) {
               return reject(err);
           }
           resolve();
       });
     });
  });
}

if (require.main === module) {
    runServer();
}
