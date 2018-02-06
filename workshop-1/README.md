#
Mi primera PWA - Weather App

---
## Firebase

https://weather-e7f6f.firebaseapp.com/

## Comienza con una primera carga rápida

![](/assets/taller1/lighthouse1.png)En este momento la calificación de PWA esta en 45 porque:

* No registra un service worker
* No responde 200 a las peticiones HTTP cuando esta offline
* No redirige el trafico HTTP a HTTPS
* No se le permitirá a el usuario instalar el App
* La barra de direcciones no es compatible con los colores de la marca
* No hay configurada una vista por defecto de splash.

## Usa service workers para almacenar en caché por adelantado el shell de la app

![](/assets/taller1/lighthouse2.png)

En este momento la calificación de PWA esta en 64 porque:

* No redirige el trafico HTTP a HTTPS
* No se le permitirá a el usuario instalar el App
* La barra de direcciones no es compatible con los colores de la marca
* No hay configurada una vista por defecto de splash.

## Usa service workers para almacenar en caché los datos de pronóstico climático

![](/assets/taller1/lighthouse3.png)

Aunque se esta usando cache para mejorar el rendimiento de la consulta de los datos climáticos usando una estrategia primero-cache-después-red, no se hizo ninguna mejora adicional en las métricas que lighthouse tiene en cuenta para calificar una aplicación respecto a su desempeño como PWA.

## Soporta la integración nativa e Impleméntala en un host seguro

![](/assets/taller1/lighthouse4.png)

En este momento la calificación de PWA esta en 73 porque:

* La carga de la página no es suficientemente rápida en 3G
* La barra de direcciones no es compatible con los colores de la marca
* No hay configurada una vista por defecto de splash.

Curiosamente al alojar la PWA en el hosting de firebase, su rendimiento en red decayó, lo cual puede estar relacionado al trier de servicio que estamos recibiendo por parte de firebase ya que es gratuito, sin embargo el error mostrado es `navigationStart was not found in the trace`.

Por otro lado las pruebas de performance no pudieron ser ejecutadas, ninguna de ellas y la justificación del error es `navigationStart was not found in the trace`.

Como el error es compartido, entre las pruebas de Performance y las de PWA, me hace pensar que un inconveniente con el certificado SSL esta causando que algunas de las pruebas de lighthouse no se ejecuten de forma correcta sobre el ambiente de firebase.

