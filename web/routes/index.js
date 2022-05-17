var express = require('express');
var router = express.Router();
const { dac } = require("common");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/sendData', async function(req, res, next) {
  let data=req.body;
  try {
    let resp=await dac.response.insert(data)

    res.json("Datos insertados correctamente");
  } catch (error) {
    res.json(error);
  }
 
  
});

module.exports = router;
