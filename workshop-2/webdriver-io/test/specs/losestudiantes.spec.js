var assert = require('assert');
describe('los estudiantes login', function () {

    it('should visit los estudiantes and failed at log in', function () {
        browser.url('https://losestudiantes.co');
        browser.url('https://losestudiantes.co');
        browser.waitForVisible('button=Ingresar', 5000);
        browser.scroll('button=Ingresar');
        browser.click('button=Ingresar');

        var cajaLogIn = browser.element('.cajaLogIn');
        var mailInput = cajaLogIn.element('input[name="correo"]');

        browser.scroll('input[name="correo"]');
        mailInput.click();
        mailInput.keys('wrongemail@example.com');

        var passwordInput = cajaLogIn.element('input[name="password"]');

        passwordInput.click();
        passwordInput.keys('1234');

        cajaLogIn.element('button=Ingresar').click()
        browser.waitForVisible('.aviso.alert.alert-danger', 5000);

        var alertText = browser.element('.aviso.alert.alert-danger').getText();
        expect(alertText).toBe('Upss! El correo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo por favor.');
    });

    it('should visit los estuadiantes and sucess at log in', function () {
        browser.url('https://losestudiantes.co');
        browser.url('https://losestudiantes.co');
        browser.waitForVisible('button=Ingresar', 5000);
        browser.scroll('button=Ingresar');
        browser.click('button=Ingresar');

        var cajaLogIn = browser.element('.cajaLogIn');
        var mailInput = cajaLogIn.element('input[name="correo"]');

        mailInput.click();
        mailInput.keys('pruebasautomaticas@uniandes.edu.co');

        var passwordInput = cajaLogIn.element('input[name="password"]');

        passwordInput.click();
        passwordInput.keys('123456789');

        cajaLogIn.element('button=Ingresar').click()
        browser.waitForVisible('#cuenta', 5000);
        browser.element('#cuenta').click()

        expect(browser.getText('//*[@id="__next"]/div/div/div[1]/nav/div/div[2]/ul/li[2]/div/ul/li/a')).toBe('Salir');

        browser.element('//*[@id="__next"]/div/div/div[1]/nav/div/div[2]/ul/li[2]/div/ul/li/a').click();
    });
});

describe('los estudiantes sign up', function () {

    it('sign up fail', function () {
        browser.url('https://losestudiantes.co');
        browser.url('https://losestudiantes.co');
        browser.waitForVisible('button=Ingresar', 5000);
        browser.scroll('button=Ingresar');
        browser.click('button=Ingresar');

        var cajaSignUp = browser.element('.cajaSignUp');
        var nameInput = cajaSignUp.element('input[name="nombre"]');
        var lastNameInput = cajaSignUp.element('input[name="apellido"]');
        var mailInput = cajaSignUp.element('input[name="correo"]');
        var passwordInput = cajaSignUp.element('input[name="password"]');

        nameInput.click()
        nameInput.keys('Pruebas');

        lastNameInput.click()
        lastNameInput.keys('Automaticas');

        mailInput.click()
        mailInput.keys('pruebasautomaticas@uniandes.edu.co');

        passwordInput.click()
        passwordInput.keys('123456789Aa!');

        browser.element('/html/body/div[3]/div[2]/div/div/div/div/div/div[1]/div/form/fieldset[4]/div/select').selectByValue('universidad-de-los-andes');
        browser.element('/html/body/div[3]/div[2]/div/div/div/div/div/div[1]/div/form/div/fieldset/div/select').selectByValue('22');

        cajaSignUp.element('input[name="acepta"]').click();
        cajaSignUp.element('.logInButton').click();

        browser.waitForVisible('//*[@id="__next"]/div/div/div[1]/div/div/div[2]/h2', 5000);
        expect(browser.getText('//*[@id="__next"]/div/div/div[1]/div/div/div[2]/h2')).toBe('Ocurrió un error activando tu cuenta');
    });

})