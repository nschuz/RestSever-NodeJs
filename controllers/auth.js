const { response } = require('express');
const Usuario = require('../models/usuario')


const login = async(req, res = response) => {

    const { correo, password } = req.body;
    try {

        //Verificr si el email existe el
        const usuario = await Usuario.findOne({ correo });

        if (!usuario) {
            return res.status(400).json({
                msg: "Usuario / Password no son corretos"
            })
        }

        //Si el usuario esta activo para


        //Verificar constraseña 


        //Generar el JWT



        res.json({
            msg: 'Login OK'
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: `Hable con el administrador`
        })
    }

}

module.exports = {
    login
}