const { Router } = require('express');
const { check } = require('express-validator');
const { login } = require('../controllers/auth')
    //custom middleware que obtiene los errores
const { validarCampos } = require('../middlewares/validar_campos')

const router = new Router();
router.post('/login', [
    check('correo', 'El correo es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    validarCampos
], login)



module.exports = router;