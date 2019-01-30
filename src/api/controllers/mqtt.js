var mqtt = require('mqtt');
var options = {
    port: 14309,
    host: 'mqtt://m10.cloudmqtt.com',
    clientId: '9886213',
    username: 'fcpvbnvl',
    password: '18YwFsLTN8A9',
    keepalive: 60,
    reconnectPeriod: 1000,
    protocolId: 'MQTT',
    protocolVersion: 3,
    clean: true,
    encoding: 'utf8'
};
var client = mqtt.connect('mqtt://m10.cloudmqtt.com', options);


module.exports = {

  // getTasks: function(req, res) {
  //
  //     Task.find((err, tasks) => {
  //       if(err) return res.status(500).send({message:`erroor petidiicon findone ${err}`});
  //       if(!tasks) return res.status(404).send({message:'el mining no existe'});
  //         res.status(200).send(tasks)
  //
  //     })
  // },
  // getTask: function (req, res) {
  //
  //   let taskId = req.params.taskId
  //
  //   Mining.findById(taskId, (err, task) => {
  //     if(err) return res.status(500).send({message: `erroor petidiicon findone ${err}`});
  //     if(!task) return res.status(404).send({message:'el mining no existe'});
  //       res.status(200).send({task})
  //
  //   })
  //
  // },
  // postMqtt: function(req, res) {
  getMqtt: function(req, res) {
    console.log('POST /api/mqtt prueba  qlia');
    // console.log(req.body);
    console.log('antes del cliente');

    client.on('connect', function() { // When connected
        console.log('connected');
        // subscribe to a topic
        client.subscribe('topic1/#', function() {
            // when a message arrives, do something with it
            client.on('message', function(topic, message, packet) {
                console.log("Received '" + message + "' on '" + topic + "'");
            });
        });

        // publish a message to a topic
        client.publish('topic1/#', 'my message', function() {
            console.log("Message is published");
            client.end(); // Close the connection when published
        });
    });

  // client.on('error', function(err) {
  //     console.log(err);
  // });


    // let task = new Task()
    // task.title = req.body.title
    // task.isDone = req.body.isDone
    //
    //
    // task.save((err, taskStored)=>{
    //   if (err) res.status(500).send({message: `Error al salvar en BD ${err}`})
    //     res.status(200).send(taskStored)
    // })

  }//,
  // deleteTask: function(req, res) {
  //
  //   let taskId = req.params.taskId
  //
  //   Task.findByIdAndRemove(taskId, (err, task) => {
  //     if(err) return res.status(500).send({message: `erroor petidiicon findone ${err}`});
  //     const response = {
  //       message: 'el producto ha sido eliminado',
  //       id: task._id,
  //       n: 1
  //     };
  //     return  res.status(200).send(response);
  //
  //     })
  //   },
    // updateTask: function (req, res) {
    //
    //   let taskId = req.params.taskId
    //   let update = req.body
    //
    //
    //   Task.findByIdAndUpdate(taskId, update, (err, taskUpdated) => {
    //     if(err) return res.status(500).send({message: `erroor Actualizar petidiicon findone ${err}`});
    //
    //       res.status(200).send({message: taskUpdated})
    //
    //   })
    //
    // }


};
