# Mi primera PWA - Weather App

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

---

# Paris Stations PWA

## Sin cambios

![](/assets/taller1/rtpa-lighthouse3.png)

La aplicación inicialmente no cumple con `7` de los `11` criterios que `Google Lighthhouse` define para una Aplicación Web Progresiva, tales criterios son:

* No registra un service worker
* No responde 200 a las peticiones HTTP cuando esta offline
* No redirige el trafico HTTP a HTTPS
* No se le permitirá a el usuario instalar el App
* La barra de direcciones no es compatible con los colores de la marca
* No hay configurada una vista por defecto de splash.
* La carga de la página no es suficientemente rápida en 3G.

## Funcionalidad 1: Primer reload

Una vez identificado el primer reload, la aplicación se inicializa con los datos provenientes de `Indexed DB` en caso de que el navegador lo soporte, de lo contrario se sigue trabajando con el `localStorage`.

```
// Index DB
db.transaction("timetables").objectStore("timetables").getAll().onsuccess = function (event) {
    console.log(event.target.result);
    app.initStorage(event.target.result);
};
```

```
// localStorage
app.initStorage(localStorage.selectedTimetables);
```

Como ahora los datos pueden tener 2 formatos dependiendo de la fuente de origen, en el primer reload es necesario cambiar la condición de vacio para utilizar los datos de la estación por defecto.

```
app.selectedTimetables = typeof app.selectedTimetables == 'string' ? 
    JSON.parse(app.selectedTimetables) : 
    selectedTimetables;

if (app.selectedTimetables && app.selectedTimetables.length > 0) {
````

## Funcionalidad 2: Añadir estación

Cuando una estación es añadida, automáticamente queda guardada en `Indexed DB` o en el `LocalStorage` dependiendo del doporte del browser. A continuación se muestran las 12 estaciones guardadas en `Indexed DB`, vale la pena notar que la información básica de todas las estaciones, es decir, (key, label) tan solo ocupa 19.5 KB.

![](/assets/taller1/indexdb1.png)

![](/assets/taller1/indexdb2.png)

## Funcionalidad 3: ServiceWorker

Primero se realizo un ServiceWorker similar al del tutorial de Google, para afianzar mejor los conocimientos. Finalmente se uso la librería de node `sw-precache` para generar un archivo automático que es capaz de identificar los archivos estáticos por medio de un código hash y de esa manera optimizar el uso del cache, pues el browser solo va a pedir al servidor los archivos cuando estos hayan sufrido algún cambio.

Para lograrlo se hizo uso de `gulp`, ya que por medio de una tarea de generación es posible obtener el archivo.

```
gulp generate-service-worker
```

El archivo generado es `sw.js`.

## Funcionalidad 4: Datos en cache

Se implemento el uso de `Indexed DB` por encima de `localStorage` pero sin perder soporte.

Fue necesario implementar 2 acciones particulares. `geatAll()`, para obtener todos los registros y `put()` para guardarlos.

```
db.transaction("timetables").objectStore("timetables").getAll()
```

```
timetableObjectStore.put(timetable);
```

Sin embargo el listener `fetch` que se encarga de la interceptación de las peticiones REST al API de las estaciones de PARIS, también fue movido a este archivo por razones experimentales. Sin embargo puede quedar completamente aislado en el viejo service worker sin interferir en el funcionamiento.

En la siguiente imagen podemos ver que todas las peticiones a las estaciones ahora se mantienen en cache. No se puede seguir la guía de Google de forma ciega porque la respuesta del API es diferente.

![](/assets/taller1/cache1.png)

![](/assets/taller1/indexdb2.png)

## Funcionalidad 5: Integración nativa



## Funcionalidad 6: Despliegue en firebase

https://schedules-app-a85c0.firebaseapp.com/

![](/assets/taller1/firebase.png)

Mi hipótesis del ejercicio anterior, donde aseguraba que el Trier de firebase podría estar causando algún problema sobre la verificación que `Google Lighthouse` estaba arrojando sobre la velocidad bajo conexiones 3G queda desvirtuada al comprobar que esta aplicación en particular no tubo problemas con ese ítem.

![](/assets/taller1/rtpa-lighthouse4.png)

## Resultados

![](/assets/taller1/rtpa-lighthouse1.png)

![](/assets/taller1/rtpa-lighthouse2.png)

Al final del ejercicio, se logró que `Google Lighthouse` calificará la aplicación con un 100% en todos los ítems que según esa herramienta componen a una Progressive Web Application.

Para lograrlo es necesario que la evaluación sea ejecutada directamente sobre `firebase` ya que ese ambiente proporciona un certificado SSL por defecto sobre el dominio y de tal manera se cumple ese requisito.

