var mongoose = require('mongoose');
var Mining = mongoose.model('Mining');

module.exports = {

  getTasks: function(req, res) {

      Task.find((err, tasks) => {
        if(err) return res.status(500).send({message:`erroor petidiicon findone ${err}`});
        if(!tasks) return res.status(404).send({message:'el mining no existe'});
          res.status(200).send(tasks)

      })
  },
  getTask: function (req, res) {

    let taskId = req.params.taskId

    Mining.findById(taskId, (err, task) => {
      if(err) return res.status(500).send({message: `erroor petidiicon findone ${err}`});
      if(!task) return res.status(404).send({message:'el mining no existe'});
        res.status(200).send({task})

    })

  },
  postTask: function(req, res) {

    console.log('POST /api/task');
    console.log(req.body);

    let task = new Task()
    task.title = req.body.title
    task.isDone = req.body.isDone


    task.save((err, taskStored)=>{
      if (err) res.status(500).send({message: `Error al salvar en BD ${err}`})
        res.status(200).send(taskStored)
    })

  },
  deleteTask: function(req, res) {

    let taskId = req.params.taskId

    Task.findByIdAndRemove(taskId, (err, task) => {
      if(err) return res.status(500).send({message: `erroor petidiicon findone ${err}`});
      const response = {
        message: 'el producto ha sido eliminado',
        id: task._id,
        n: 1
      };
      return  res.status(200).send(response);

      })
    },
    updateTask: function (req, res) {

      let taskId = req.params.taskId
      let update = req.body


      Task.findByIdAndUpdate(taskId, update, (err, taskUpdated) => {
        if(err) return res.status(500).send({message: `erroor Actualizar petidiicon findone ${err}`});

          res.status(200).send({message: taskUpdated})

      })

    }


};
