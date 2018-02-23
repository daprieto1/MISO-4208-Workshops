# Workshop 4

---

## Rippers ad-hoc con Cypress.io

![](assets/cypress3.gif)

Para generar los comandos aleatorios se reutilizo la función `getRandomInt(0, 4)` para obtener un nñumero de `0` a `3`; dicho número correspondía a un evento en particular.

```js
switch (randomEventId) {
    case 0:
      console.log('-> Link Click Event');
      event = randomLinkClickEvent(monkeysLeft);
      break;
    case 1:
      console.log('-> Type Event');
      event = randomTypeEvent(monkeysLeft);
      break;
    case 2:
      console.log('-> Select Event');
      event = randomSelectEvent(monkeysLeft);
      break;
    case 3:
      console.log('-> Button Click Event');
      event = randomButtonClickEvent(monkeysLeft);
      break;
}
```

* El evento `randomTypeEvent` se limito para escribir únicamente en campos de typo texto, debido a que cualquier otro tipo de entrada estaba generando error al momento de la interación con el elemnto.

* para el evento `randomSelectEvent` se dejo aleatoria la selección de la opción en particular, reutilizando una vez más la función `getRandomInt`.