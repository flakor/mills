var mongoose = require('mongoose');
var Mining = mongoose.model('Mining');

module.exports = {

      getMinings: function(req, res) {

          Mining.find((err, minings) => {
            if(err) return res.status(500).send({message:`erroor petidiicon findone ${err}`});
            if(!minings) return res.status(404).send({message:'el mining no existe'});
              res.status(200).send(minings)

          })
      },

      getMining: function (req, res) {

        let miningId = req.params.miningId

        Mining.findById(miningId, (err, mining) => {
          if(err) return res.status(500).send({message: `erroor petidiicon findone ${err}`});
          if(!mining) return res.status(404).send({message:'el mining no existe'});
            res.status(200).send({mining})

        })

      },

      postMining: function(req, res) {

        console.log('POST /api/miningz');
        console.log(req.body);

        let mining = new Mining()
        mining.name = req.body.name
        mining.picture = req.body.picture
        mining.price = req.body.price
        mining.category = req.body.category
        mining.description = req.body.description

        mining.save((err, miningStored)=>{
          if (err) res.status(500).send({message: `Error al salvar en BD ${err}`})
            res.status(200).send(miningStored)
        })

      },

      deleteMining: function(req, res) {

        let miningId = req.params.miningId

        Mining.findByIdAndRemove(miningId, (err, mining) => {
          if(err) return res.status(500).send({message: `erroor petidiicon findone ${err}`});
          const response = {
            message: 'el producto ha sido eliminado',
            id: mining._id,
            n: 1
          };
          return  res.status(200).send(response);

          })
        },

      updateMining: function (req, res) {

        let miningId = req.params.miningId
        let update = req.body


        Mining.findByIdAndUpdate(miningId, update, (err, miningUpdated) => {
          if(err) return res.status(500).send({message: `erroor Actualizar petidiicon findone ${err}`});

            res.status(200).send({message: miningUpdated})

        })

      }

  };
