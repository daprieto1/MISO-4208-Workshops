describe('Los estudiantes login incorrecto', function () {

    context('Login', function () {
        beforeEach(function () {
            cy.visit('https://losestudiantes.co')
        })

        it('Visits los estudiantes and fails at login', function () {
            cy.contains('Cerrar').click()
            cy.contains('Ingresar').click()
            cy.get('.cajaLogIn').find('input[name="correo"]').click().type("wrongemail@example.com")
            cy.get('.cajaLogIn').find('input[name="password"]').click().type("1234")
            cy.get('.cajaLogIn').contains('Ingresar').click()
            cy.contains('El correo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo por favor.')
        })

        it('Visit los estudiantes and login successfully', function () {
            cy.contains('Cerrar').click()
            cy.contains('Ingresar').click()
            cy.get('.cajaLogIn').find('input[name="correo"]').click().type("pruebasautomaticas@uniandes.edu.co")
            cy.get('.cajaLogIn').find('input[name="password"]').click().type("123456789")
            cy.get('.cajaLogIn').contains('Ingresar').click()
            cy.get('#cuenta').click()
            cy.contains('Salir')
        })
    })

    context('Teachers', function () {
        beforeEach(function () {
            cy.visit('https://losestudiantes.co')
        })

        it('Should find teacher', function () {
            cy.contains('Cerrar').click()
            cy.get('.buscador').find('input[role="combobox"]').type("Mario Linares", { force: true })
            cy.contains("Mario Linares Vasquez - Ingeniería de Sistemas")
        })

        it('Should visit teacher page', function () {
            cy.contains('Cerrar').click()
            cy.get('.buscador').find('input[role="combobox"]').type("Mario Linares", { force: true })
            cy.contains("Mario Linares Vasquez - Ingeniería de Sistemas").click()
            cy.get('.nombreProfesor').contains("Mario Linares Vasquez")
            cy.get('#departamento').contains("Ingeniería de Sistemas")
            cy.get('#universidad').contains("Universidad de los Andes")
        })
    })

})


