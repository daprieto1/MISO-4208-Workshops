# Workshop 6 - Visual Regression Testing utilizando Resemble JS

## Aplicación paleta de colores

**Repositorio de Git:** [Github](https://github.com/daprieto1/MISO-4208-randomColors)

**Página desplegada:** [GitPages](https://daprieto1.github.io/MISO-4208-randomColors/)

## Pruebas con Cypress

**¿Ve usted algún problema con los screenshots tomados por Cypress al intentar hacer Visual Regression Testing?**

Los screenshots que genera `Cypress` cuando se ejecuta Headful y Headless incluyen no solamente el área del browser, sino que también incluyen el área de logs de Cypress, lo cual puede generar pequeñas diferencias en una prueba de regresión visual, debido a que los resultados de mñultiples pruebas no son exactamente iguales para la interfaz gráfica de cypress, como los tiempos de ejecución, la hora, los logs etc.

La siguiente imagen es el resultado de comparar dos screenshots que fueron tomados con cypress en modo Headful, tales screenshots se capturaron con una diferencia de algunos milisegundos, podemos evidenciar la gran diferencia que produce la interfaz gráfica de cypress.

![](assets/cypress1.png)
