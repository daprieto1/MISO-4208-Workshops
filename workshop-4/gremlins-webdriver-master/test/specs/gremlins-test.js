function loadScript(callback) {
  var s = document.createElement('script');
  s.src = 'https://rawgithub.com/marmelab/gremlins.js/master/gremlins.min.js';
  if (s.addEventListener) {
    s.addEventListener('load', callback, false);
  } else if (s.readyState) {
    s.onreadystatechange = callback;
  }
  document.body.appendChild(s);
}

function unleashGremlins(ttl, callback) {
  function stop() {
    horde.stop();
    callback();
  }
  var clickerGremlin = null;
  var formFiller = null;

  if (window.gremlins) {

    clickerGremlin = window.gremlins.species.clicker().clickTypes(['click']);
    clickerGremlin.canClick(function (element) {
      return element.tagName == "A" || element.tagName == "BUTTON";
    })

    formFiller = window.gremlins.species.formFiller();
    formFiller.canFillElement(function (element) {
      console.log(element.type);
      return element.tagName == "TEXTAREA" ||
        element.type == "text" ||
        element.type == "password" ||
        element.type == "email";
    });

  }
  var horde = window.gremlins.createHorde()
    .gremlin(clickerGremlin)
    .gremlin(formFiller);

  horde.seed(1234);

  horde.after(callback);
  window.onbeforeunload = stop;
  setTimeout(stop, ttl);
  horde.unleash();


}

browser.waitForReadyStateEx = function (state, timeout) {
  return browser.waitUntil(function () {
    return state === browser.execute(function () {
      return document.readyState;
    }).value;
  }, timeout);
};

describe('Monkey testing with gremlins ', function () {

  it('it should not raise any error', function () {
    browser.url('/');
    browser.click('button=Cerrar');

    //browser.waitForReadyStateEx('complete', 3000);

    browser.timeoutsAsyncScript(60000);
    browser.executeAsync(loadScript);

    browser.timeoutsAsyncScript(60000);
    browser.executeAsync(unleashGremlins, 55000);
  });

  afterAll(function () {
    browser.log('browser').value.forEach(function (log) {
      browser.logger.info(log.message.split(' ')[2]);
    });
  });

});