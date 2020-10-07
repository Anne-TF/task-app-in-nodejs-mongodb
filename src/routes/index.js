const express = require('express');
var bodyParser = require('body-parser');

const router = express.Router();


const model = require('../model/task')();

router.get('/', (req, res) => {
  model.find({}, (err, tasks) => {
    if(err) throw err;
    res.render('index', {
      title : 'CRUD',
      tasks : tasks
    })
  })
});

router.post('/add', (req, res) => {
  let newTask = req.body;
  newTask.status = false;

  model.create(newTask, (err, task) => {
    if (err) throw err;
    res.redirect('/');
  })
})

router.get('/turn/:id', (req, res) => {
  let id = req.params.id;
  model.findById(id, (err, task) => {
    if(err) throw err;
    // !task.status es para que retorne el contrario al status actual
    task.status = !task.status;
    task.save()
      .then(() => res.redirect('/'))
  });
});

router.get('/delete/:id', (req, res) => {
  let id = req.params.id;
  model.deleteOne({_id : id}, (err, task) => {
    if(err) throw err;
    res.redirect('/')
  });
});

module.exports = router;
