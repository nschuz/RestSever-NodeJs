
const {response} = require('express');


const usuariosGet = (req , res)=>{
  //express parasea los parmas
    const {q ,nombre='No name' , key}= req.query;
res.json({
    ok: true,
    msg: 'Get API-Controlador',
    q,
    nombre,
    key
})
}

const usuariosPut = (req , res)=>{
    //el id es  el nnombre que dimos  en las rutas :id
    const id =req.params.id;
    res.json({
        ok: true,
        msg: 'Put API-Controlador',
        id
    })
 }

const usuariosPost = (req , res)=>{
    const {nombre , edad} = req.body;
    res.json({
        ok: true,
        msg: 'Post API-Controlador',
        nombre ,
        edad
    })
}

const usuariosDelete = (req , res)=>{
    res.json({
        ok: true,
        msg: 'Delete API-Controlador'
    })
    }

module.exports={
    usuariosGet,
    usuariosPut,
    usuariosDelete,
    usuariosPost
}