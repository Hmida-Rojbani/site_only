const express = require('express');
const fs=require('fs');
const router = express.Router();

/* GET home page. */
router.get('/',(req,res)=>{
    var obj = JSON.parse(fs.readFileSync('./json_var_fr/var_index.json', 'utf8'));
    //console.log(obj);
    res.render('index',obj);
});

/* GET home page. */
router.get('/signIn/', function(req, res, next) {
    res.render('signIn', { title: 'Express' });
});
module.exports = router;
