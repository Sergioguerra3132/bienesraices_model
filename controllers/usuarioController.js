

const formularioLogin = (req, res) => {
    res.render('auth/login', {
        autenticado: true
    })
};

const pruebaCochina = (req, res) => {
    res.render('auth/prueba')
};

export {
    formularioLogin,
    pruebaCochina
}