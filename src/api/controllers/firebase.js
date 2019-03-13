const firebase = require('firebase-admin');
const config = require('../../config');


firebase.initializeApp({
  credential: firebase.credential.cert(config),
  databaseURL: 'https://'+config.project_id+'.firebaseio.com'
});

// firebase.database().ref('casa').on('connected', function() {
//   // console.log('Mongoose connected to ' + dbURI);
//   console.log('fiebase connected to ');
// });

// firebaseRef.child('.info/connected').on('value', function(connectedSnap) {
//   if (connectedSnap.val() === true) {
//     /* we're connected! */
//     console.log('fiebase connected to: '+config.project_id);
//   } else {
//     /* we're disconnected! */
//   }
// });




module.exports = {



  postElement: function(req, res) {

    // console.log("req.mensaje");
    // console.log(req.body.mensaje);
     
      let ref = firebase.database().ref('casa');
      let messagesRef = ref.child('messages');

      let messageRef = messagesRef.push();
      let messageKey = messageRef.key;
      let payload = {};
      let message = {
        text: req.body.mensaje
        // text: 'hey guy pablo pablo'
      };
      // for (var i = 0; i < 10; i++) {
      //   console.log(messagesRef.push().key);
      // }
      // console.log(messageRef.key);

      //
      // messageRef.set({
      //     name: 'Jardin cactus 123456',
      //     admin: true,
      //     count: 2,
      //     text: "este es un texto qlio fasdf actualizado"
      // })
      payload['userMessages/' + messageKey] = message;
      payload['logs/' + messageKey] = message;

      // ref.set(
      // {  baloney: true}
      // );
      ref.update(payload);

      //
      // let logs;
      // ref.child('logs').on('value', function(snap){
      //   logs = snap.val();
      //   console.log(logs);
      // });

      let logRef = ref.child('logs');

      logRef.orderByKey().limitToLast(1).on('child_added', function(snap){
          console.log('added', snap.val());
      });

      logRef.on('child_removed', function(snap){
          console.log('removed', snap.val());
      });

      logRef.on('child_changed', function(snap){
          console.log('changed', snap.val());
      });

      res.status(200).send({info:'firebase actualizado', message})
  }
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
  // postTask: function(req, res) {
  //
  //   console.log('POST /api/task');
  //   console.log(req.body);
  //
  //   let task = new Task()
  //   task.title = req.body.title
  //   task.isDone = req.body.isDone
  //
  //
  //   task.save((err, taskStored)=>{
  //     if (err) res.status(500).send({message: `Error al salvar en BD ${err}`})
  //       res.status(200).send(taskStored)
  //   })
  //
  // },
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
  //   updateTask: function (req, res) {
  //
  //     let taskId = req.params.taskId
  //     let update = req.body
  //
  //
  //     Task.findByIdAndUpdate(taskId, update, (err, taskUpdated) => {
  //       if(err) return res.status(500).send({message: `erroor Actualizar petidiicon findone ${err}`});
  //
  //         res.status(200).send({message: taskUpdated})
  //
  //     })
  //
  //   }


};
