module.exports = { // adapted from: https://git.io/vodU0
    'Los estudiantes login falied': function (browser) {
        browser
            .url('https://losestudiantes.co/')
            .click('.botonCerrar')
            .waitForElementVisible('.botonIngresar', 4000)
            .click('.botonIngresar')

            .setValue('.cajaLogIn input[name="correo"]', 'wrongemail@example.com')
            .setValue('.cajaLogIn input[name="password"]', '1234')
            .click('.cajaLogIn .logInButton')

            .waitForElementVisible('.aviso.alert.alert-danger', 4000)
            .assert.containsText('.aviso.alert.alert-danger', 'El correo y la contraseña que ingresaste no figuran')
            .end();
    },

    'Los estudiantes search teacher': function (browser) {
        browser
            .url('https://losestudiantes.co/')
            .click('.botonCerrar')

            .waitForElementVisible('input[role="combobox"', 4000)
            .setValue('input[role="combobox"', 'Mario Linares')

            .waitForElementVisible('.Select-option-group-label', 4000)            
            .assert.containsText('.Select-option-group-label', 'Profesores')
            .waitForElementVisible('.Select-option', 4000)
            .assert.containsText('.Select-option', 'Mario Linares Vasquez - Ingeniería De Sistemas')
            .end();
    },

    'Los estudiantes visit teacher page': function (browser) {
        browser
            .url('https://losestudiantes.co/')
            .click('.botonCerrar')

            .waitForElementVisible('input[role="combobox"', 4000)
            .setValue('input[role="combobox"', 'Mario Linares')

            .waitForElementVisible('.Select-option-group-label', 4000)            
            .assert.containsText('.Select-option-group-label', 'Profesores')
            .waitForElementVisible('.Select-option', 4000)
            .assert.containsText('.Select-option', 'Mario Linares Vasquez - Ingeniería De Sistemas')
            .click('.Select-option')

            .waitForElementVisible('.nombreProfesor', 4000)                      
            .assert.containsText('.nombreProfesor', 'Mario Linares Vasquez')  

            .waitForElementVisible('#departamento', 4000)                      
            .assert.containsText('#departamento', 'Ingeniería de Sistemas')  

            .waitForElementVisible('#universidad', 4000)                      
            .assert.containsText('#universidad', 'Universidad de los Andes')  

            .end();
    }
};