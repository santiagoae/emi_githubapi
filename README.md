# Descripción del proyecto

Este proyecto hace uso de la api de Github para el desarrollo de una aplicación de perfiles de usuarios. La intensión es dar a conocer las diferentes funcionalidades de Angular como lo son los standalone components, guards, services, signal, rxjs para el manejo de estados con servicios compartidos, el uso de animaciones con animate-css, la creación de directivas, el uso de asyncronia y de observables, el uso de amchart5 para las gráficas, el manejo de formularios reactivos y otros conceptos como el lazy loading, el uso de SOLID, clean code, dry, arquitectura limpia por contenedores o screaming architecture entre otras cosas.

Si deseas ver el proyecto funcionando puedes visitar este link [Grupo-emi-santiago-avendaño-escobar](https://grupoemisantiagoavendanioescobar.netlify.app)

## Acceso Rápido

- [Solución preguntas](#Solución-preguntas)

## Stack

- Angular 18
- Typescript
- Tailwindcss
- Amcharts5
- Rxjs
- Animate.css
- Font Awesome Icons
- Cdn
- Git
- Github

## Como iniciar

- clona el repositorio con `git clone https://github.com/santiagoae/emi_githubapi.git`
- entra al directorio del proyecto con `cd emi_githubapi`
- instala las dependencias con `npm install`
- ejecuta el proyecto con `npm run start`

## Documentación Usada

- [Angular](https://angular.dev/)
- [Git-Api](https://docs.github.com/en/rest)
- [Amcharts](https://www.amcharts.com/docs/v5/)
- [Animate.css](https://animate.style/)
- [Font Awesome](https://fontawesome.com/)
- [Cdn](https://cdnjs.com/libraries/font-awesome)
- [Tailwind](https://tailwindcss.com/)
- [Flowbite](https://flowbite.com/)
- [Gpt](https://chatgpt.com/)

## Solución preguntas

Aqui se encuentran las soluciones a las preguntas de Frontend Angular.

### Javascript

<details name="accordion-javascript" style="white-space: pre-line;">
<summary>¿Explique el funcionamiento de los temporizadores en JavaScript y las desventajas de usarlos, si las hay?</summary>
el setTimeout() permite ejecutar una función callback cada cierto tiempo la cual podemos definir en milisegundos y el setInterval() es algo similar, solo que en vez de ejecutarse una vez, se crea un intervalo de tiempo que se ejecuta hasta que nosotros le indiquemos. Creo que la desventaja mas clara que veo es en el setInterval ya que puede llegar a consumir mas recursos de nuestra maquina de no ser bien manejando, en el caso de angular en cuanto se destruya el componente podriamos limpiar los intervalos anteriormente almacenados en una variable para capturar su id

</details>
<details name="accordion-javascript" style="white-space: pre-line;">
<summary>¿Qué es el operador ===?</summary>
este operador nos permite comparar tanto el tipo de la variable como el valor de la misma

</details>
<details name="accordion-javascript" style="white-space: pre-line;">
<summary>¿Cómo se puede cambiar el estilo/clase de un elemento?</summary>
si es un elemento como tal ,directamente nombrandolo en el archivo css o scss, ejemplo h1{color: white} o ya si se desea anexarle una clase tendria que asociarle al atributo class ejemplo en el archivo css o scss .elementTextColor{ color:white  }  y en el elemento h1 class=”elementTextColor”.

</details>
<details name="accordion-javascript" style="white-space: pre-line;">
<summary>¿Cuál sería el resultado de 3+2+''7''?</summary>
57 ya que en js se concatena la suma de los dos primero numeros con el string del final

</details>
<details name="accordion-javascript" style="white-space: pre-line;">
<summary>¿Explique el método pop() en JavaScript?</summary>
el metodo pop() lo que hace es que nos saca el ultimo elemento de un array y nos deja manipularlo, además    de borrarlo del array seleccionado claramente.

</details>

### Html

<details name="accordion-html" style="white-space: pre-line;">
<summary>¿Cómo se inserta un comentario en HTML?</summary>
< !-- comentario – >.

</details>
<details name="accordion-html" style="white-space: pre-line;">
<summary>¿Cómo se crean enlaces a secciones dentro de la misma página?</summary>
con el anchor de html, usando su atributo href y poniendo ids a cada seccion.

</details>
<details name="accordion-html" style="white-space: pre-line;">
<summary>¿Qué son las hojas de estilo?</summary>
son archivos que nos permiten personalizar el html a nuestra preferencia.

</details>

### Css y Sass

<details name="accordion-css" style="white-space: pre-line;">
<summary>¿Por qué usar import al principio del archivo?</summary>
porque vas anexar estilos que vienen de otro archivo css o sass

</details>
<details name="accordion-css" style="white-space: pre-line;">
<summary>¿Cómo puedes integrar CSS a un sitio web?</summary>
si es solo html con la etiqueta style en el header o si es algun framework como angular, podemos usar tailwind, bootstrap, angular-material o sass o scss o css, hay varias opciones.

</details>

### Typescript

<details name="accordion-ts" style="white-space: pre-line;">
<summary>¿Qué principios de programación orientada a objetos admite?</summary>
 herencia con el uso de clases alternas para generar utilidades globales, polimorfismo que seria como en otros lenguajes como java o php se trabajan las interfaces “abstractas”, abstraccion y encapsulamiento para el manejo de la privacidad dentro de la clase.

</details>
<details name="accordion-ts" style="white-space: pre-line;">
<summary>¿Qué son getters y setters en TypeScript?</summary>
son funciones para guardar y devolver valores privados dentro de la clase o si se implementa para propiedades o funciones publicas tambien podria ser.

</details>
<details name="accordion-ts" style="white-space: pre-line;">
<summary>¿Se puede usar TypeScript en el desarrollo del servidor? De ser así, ¿cómo?</summary>
si se puede, en las ultimas versiones de nodejs implementaron ts y sabemos que nodejs se puede usar con express o nestjs para creacion de apis y manejo del back en servidores.

</details>
<details name="accordion-ts" style="white-space: pre-line;">
<summary>¿Cuáles son las diferencias entre la interfaz y las palabras clave de tipo en TypeScript?</summary>
la interfaz puede extenderse y el tipo no, para el tipo hay que generar una cadena de tipos en caso de querer varios tipos dentro de una variable.

</details>

### Angular

<details name="accordion-angular" style="white-space: pre-line;">
<summary>Menciona algunas características de Angular</summary>
 es un framework orientado a la web, que usa typescript, en el podemos manejar formularios reactivos, manejo de estados con subjects o ngrx, routing con seguridad usando guards, tenemos interceptors y servicios http y en la sultimas versiones, podemos mejorar el rendimiento con el uso de signals que nos ayudan a manejar el renderizado en vivo de los cambios a nuestras variables con mas facilidad.

</details>
<details name="accordion-angular" style="white-space: pre-line;">
<summary>¿Cuál es la diferencia entre constructor y ngOnInit?</summary>
 el constructor es lo primero que se ejecuta por encima del onInit.

</details>
<details name="accordion-angular" style="white-space: pre-line;">
<summary>¿Cuál es el propósito de la directiva *ngIf?</summary>
 si un valor existe dejar ver el html o elemento que se quiera.

</details>
<details name="accordion-angular" style="white-space: pre-line;">
<summary>¿Qué es el enlace de datos?</summary>
 es cuando obtenemos un valor  y al mismo tiempo recibimos un evento, se usa mucho con el ngModel en inputs de los cuales queremos saber el valor rapidamente para hacer algo en especifico, se conoce como la caja de bananas [()]

</details>
<details name="accordion-angular" style="white-space: pre-line;">
<summary>¿Cómo defines y utilizas componentes en Angular?</summary>
con el @Component le decimos a angular que esto es un componente y se hace uso de el, importandolo en donde queramos mostrarlo y usando su selector, que por defecto empieza con app-nombre del componente.

</details>
<details name="accordion-angular" style="white-space: pre-line;">
<summary>¿Qué es el @Input y @Output en Angular y cómo se usan?</summary>
  son nuestra herramienta para comunicar componentes padres con hijos y en las versiones actuales de angular tenemos los inputs,outputs y model signals que vienen muy bien para el manejo y actualizacion rapida de la informacion entre ellos.

</details>
<details name="accordion-angular" style="white-space: pre-line;">
<summary>¿Puedes explicar el concepto de inyección de dependencias en Angular?</summary>
la inyeccion de dependecia en angular se suele usar mucho con los servicios que nos conectan con las APIs, esto lo que nos permite es hacer uso de sus funciones de manera independiente que se encuentran en estos servicios y  en caso de que un servicio falle, nuestra aplicacion pueda tener acceso a otra informacion mientras se le da solucion a ese servicio puntual a menos de que genere un error que corte la aplicacion.

</details>
<details name="accordion-angular" style="white-space: pre-line;">
<summary>¿Qué es un lazy loading y cuándo lo usarías?</summary>
 el lazyloading se usa en el enrutamiento para la carga de los componentes solo cuando estos sean llamados por sus rutas, en los archivos de routes podemos definir en cada path, si queremos cargar de forma perezosa otro archivo con rutas o un componente. Existe el loadchildren y el loadComponent.

</details>
