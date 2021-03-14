const { request, response } = require('express');

const usuariosGet = (req = request, res = response) => {

    const query = req.query;

    res.json({
        msj: 'get API - controlador',
        query
    });
  };


const usuariosPost = (req, res  = response) => {

    const { nombre, edad } = req.body;

    res.json({
        msj: 'post API - Controlador',
        nombre,
        edad
    });
  }


const usuariosPut = (req, res = response) => {

    const id = req.params.id;

    res.json({
        msj: 'put API - Cpntrolador',
        id
    });
  }


const usuariosPatch = (req, res = response) => {
    res.json({
        msj: 'patch API Controlador'
    });
  }

const usuariosDelete = (req, res = response) => {
    res.json({
        msj: 'delete API - Controlador'
    });
  }

  module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
  }