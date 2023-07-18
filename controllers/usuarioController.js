

const formularioLogin = (req, res) => {
    res.render('auth/login', {
        autenticado: true
    })
};

const usuarioRegistro = (req, res) => {
    res.render('auth/registro')
};

export {
    formularioLogin,
    usuarioRegistro
}