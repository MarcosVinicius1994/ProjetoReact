const express = require('express');

const routes = express.Router();

routes.get('/',(req, res)=>{

    // return  res.send(`Olá ${req.query.name}`);
    return  res.json({message:`Olá  ${req.query.name}`});
});

routes.post('/devs',(req, res)=>{

    console.log(req.body);
    return  res.json({ok: true});
});

module.exports = routes;    