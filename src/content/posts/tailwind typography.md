---
title: Tailwind typography
slug: tailwind-typography
description: The @tailwindcss/typography plugin is our attempt to give you what you actually want, without any of the downsides of doing something stupid like disabling our base styles.
category:
  - blog
tags:
  - Tailwind
  - Astro
  - Jamstack
pubDate: 2023-09-08
cover: src/images/tail.png
coverAlt: VisVrs-tailwind-typography
author: YovanEnovore
---
Hasta ahora, intentar estilizar un artículo, documento o publicación de blog con Tailwind ha sido una tarea tediosa que requería un ojo agudo para la tipografía y una gran cantidad de CSS personalizado complejo.

Por defecto, Tailwind elimina todo el estilo predeterminado del navegador de párrafos, encabezados, listas y más. Esto resulta muy útil para construir interfaces de aplicaciones porque pasas menos tiempo deshaciendo los estilos del agente de usuario, pero cuando *realmente estás* tratando de estilizar contenido que proviene de un editor de texto enriquecido en un sistema de gestión de contenido o un archivo de marcado, puede ser sorprendente e intuitivo.

Recibimos muchas quejas al respecto, con personas que nos preguntan regularmente cosas como:

> ¿Por qué Tailwind está eliminando los estilos predeterminados en mis elementos `h1`? ¿Cómo puedo desactivar esto? ¿Qué quieres decir con que también pierdo todos los otros estilos base?

Te entendemos, pero no estamos convencidos de que simplemente desactivar nuestros estilos base sea lo que realmente deseas. No quieres tener que eliminar márgenes molestos cada vez que uses un elemento `p` en una parte de la interfaz de tu panel de control. Y dudamos que realmente quieras que tus publicaciones de blog utilicen los estilos del agente de usuario; quieres que se vean *geniales*, no terribles.

El complemento `@tailwindcss/typography` es nuestro intento de darte lo que *realmente* deseas, sin ninguno de los inconvenientes de hacer algo tonto como desactivar nuestros estilos base.

Agrega una nueva clase `prose` que puedes aplicar a cualquier bloque de contenido HTML básico y convertirlo en un documento hermoso y bien formateado:

```html
<article class="prose">
  <h1>Pan de ajo con queso: lo que la ciencia nos dice</h1>
  <p>
    Durante años, los padres han elogiado los beneficios para la salud de comer pan de ajo con queso a sus
    hijos, con la comida ganando un estatus icónico en nuestra cultura, al punto que los niños a menudo se visten
    como un cálido pan con queso para Halloween.
  </p>
  <p>
    Pero un estudio reciente muestra que el famoso aperitivo podría estar relacionado con una serie de casos de rabia
    que están apareciendo en todo el país.
  </p>
  <!-- ... -->
</article>
```
Para obtener más información sobre cómo utilizar el complemento y las funciones que incluye, [lee la documentación](https://github.com/tailwindcss/typography/blob/master/README.md).

------

## Qué esperar a partir de este punto

Lo que sigue a partir de aquí es simplemente un montón de tonterías absolutas que he escrito para poner a prueba el propio complemento. Incluye cada elemento tipográfico sensato que se me ocurrió, como texto en **negrita**, listas no ordenadas, listas ordenadas, bloques de código, citas en bloque, *e incluso cursiva*.

Es importante cubrir todos estos casos de uso por algunas razones:

1. Queremos que todo se vea bien desde el principio.
2. Realmente, solo la primera razón, ese es el punto principal del complemento.
3. Aquí tienes una tercera razón ficticia, aunque una lista con tres elementos parece más realista que una lista con dos elementos.

Ahora vamos a probar otro estilo de encabezado.

### La tipografía debería ser fácil

Así que aquí tienes un encabezado, con suerte, si hemos hecho nuestro trabajo correctamente, se verá bastante razonable.

Alguien sabio me dijo una vez sobre la tipografía:

> La tipografía es bastante importante si no quieres que tus cosas parezcan basura. Hazlo bien y no será malo.

Probablemente sea importante que las imágenes se vean bien aquí por defecto también:

![img](https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80)Contrariamente a la creencia popular, Lorem Ipsum no es simplemente un texto aleatorio. Tiene sus raíces en una obra de la literatura latina clásica del año 45 a.C., lo que lo convierte en un texto de más de 2000 años de antigüedad.

Ahora voy a mostrarte un ejemplo de una lista no ordenada para asegurarnos de que también se vea bien:

- Así que aquí tienes el primer elemento de esta lista.
- En este ejemplo, mantenemos los elementos cortos.
- Más adelante, usaremos elementos de lista más largos y complejos.

Y eso es el final de esta sección.

## ¿Qué pasa si apilamos encabezados?

### Deberíamos asegurarnos de que también se vea bien.

A veces tienes encabezados directamente debajo de otros. En esos casos, a menudo tienes que deshacer el margen superior del segundo encabezado porque generalmente se ve mejor que los encabezados estén más cerca uno del otro que un párrafo seguido de un encabezado.

### Cuando un encabezado viene después de un párrafo...

Cuando un encabezado viene después de un párrafo, necesitamos un poco más de espacio, como ya mencioné anteriormente. Ahora veamos cómo se vería una lista más compleja.

- **A menudo hago esto donde los elementos de la lista tienen encabezados.**

  Por alguna razón, creo que esto luce bien, lo cual es lamentable porque es bastante molesto conseguir los estilos correctos.

  A menudo tengo dos o tres párrafos en estos elementos de la lista, por lo que la parte difícil es conseguir que el espacio entre los párrafos, el encabezado del elemento de la lista y los elementos de la lista separados tengan sentido. Bastante difícil, honestamente, podrías argumentar sólidamente que simplemente no deberías escribir de esta manera.

- **Dado que esta es una lista, necesito al menos dos elementos.**

  Ya expliqué lo que estoy haciendo en el elemento de la lista anterior, pero una lista no sería una lista si solo tuviera un elemento, y realmente queremos que esto parezca realista. Por eso he añadido este segundo elemento de la lista para que realmente tenga algo que ver al escribir los estilos.

- **No es una mala idea agregar un tercer elemento tampoco.**

  Creo que probablemente hubiera estado bien usar solo dos elementos, pero tres definitivamente no es peor, y dado que aparentemente no tengo problemas para inventar cosas arbitrarias para escribir, podría incluirlo también.

Después de este tipo de lista, suelo tener una declaración o párrafo de cierre, porque parece un poco extraño pasar directamente a un encabezado.

## El código debería verse bien por defecto.

Creo que la mayoría de las personas van a utilizar [highlight.js](https://highlightjs.org/) o [Prism](https://prismjs.com/) o algo así si desean dar estilo a sus bloques de código, pero no estaría mal que se vieran *bien* desde el principio, incluso sin resaltado de sintaxis.

Así es como luce un archivo de configuración `tailwind.config.js` por defecto en el momento de escribir esto:

```js
module.exports = {
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
```

Espero que esto se vea lo suficientemente bien para ti.

### ¿Qué pasa con las listas anidadas?

Las listas anidadas generalmente lucen mal, por eso editores como Medium ni siquiera te permiten hacerlo, pero supongo que, dado que algunos de ustedes lo hacen, debemos llevar la carga de al menos hacer que funcione.

1. Las listas anidadas rara vez son una buena idea.
   - Puede que sientas que estás siendo realmente "organizado" o algo así, pero en realidad estás creando una forma poco atractiva en la pantalla que es difícil de leer.
   - La navegación anidada en las interfaces de usuario también es una mala idea, mantén las cosas lo más planas posible.
   - Anidar montones de carpetas en tu código fuente tampoco es útil.
2. Dado que necesitamos tener más elementos, aquí tienes otro.
   - No estoy seguro de si nos molestaremos en darle estilo a más de dos niveles de profundidad.
   - Dos ya es demasiado, tres está garantizado que es una mala idea.
   - Si anidas cuatro niveles de profundidad, perteneces a prisión.
3. Dos elementos realmente no son una lista, tres están bien.
   - Nuevamente, por favor, no anides listas si quieres que la gente realmente lea tu contenido.
   - Nadie quiere ver esto.
   - Estoy molesto de que incluso tengamos que molestarnos en darle estilo a esto.

Lo más molesto de las listas en Markdown es que los elementos `<li>` no tienen una etiqueta `<p>` secundaria a menos que haya varios párrafos en el elemento de la lista. Eso significa que también tengo que preocuparme por darle estilo a esa molesta situación.

- **Por ejemplo, aquí tienes otra lista anidada.**

  Pero esta vez con un segundo párrafo.

  - Estos elementos de la lista no tendrán etiquetas `<p>`
  - Porque son solo de una línea cada uno.

- **Pero en este segundo elemento de lista de nivel superior, sí lo tendrán.**

  Esto es especialmente molesto debido al espaciado en este párrafo.

  - Como puedes ver aquí, porque he agregado una segunda línea, este elemento de la lista ahora tiene una etiqueta `<p>`.

    Esta es la segunda línea de la que estoy hablando, por cierto.

  - Finalmente, aquí tienes otro elemento de la lista, así que es más parecido a una lista.

- Un elemento de lista de cierre, pero sin lista anidada, porque ¿por qué no?

Y finalmente, una oración para cerrar esta sección.

## Hay otros elementos que necesitamos darle estilo

Casi olvidé mencionar los enlaces, como [este enlace al sitio web de Tailwind CSS](https://tailwindcss.com/). Casi los hicimos azules, pero eso es tan de ayer, así que optamos por un gris oscuro, se siente más audaz.

Incluso incluimos estilos para tablas, échales un vistazo:

| Luchador                | Origen       | Movimiento final    |
| ----------------------- | ------------ | ------------------- |
| Bret "The Hitman" Hart  | Calgary, AB  | Sharpshooter        |
| Stone Cold Steve Austin | Austin, TX   | Stone Cold Stunner  |
| Randy Savage            | Sarasota, FL | Elbow Drop          |
| Vader                   | Boulder, CO  | Vader Bomb          |
| Razor Ramon             | Chuluota, FL | Razor's Edge        |

También necesitamos asegurarnos de que el código en línea se vea bien, como si quisiera hablar sobre elementos `<span>` o contarte la buena noticia sobre `@tailwindcss/typography`.

### A veces incluso uso `code` en encabezados

Aunque probablemente no sea una buena idea y, históricamente, he tenido dificultades para que se vea bien. Sin embargo, este truco de *"envolver los bloques de código entre comillas invertidas"* funciona bastante bien, en realidad.

Otra cosa que he hecho en el pasado es poner una etiqueta `code` dentro de un enlace, como si quisiera hablarte del repositorio [`tailwindcss/docs`](https://github.com/tailwindcss/docs). No me encanta que haya un subrayado debajo de las comillas invertidas, pero definitivamente no vale la pena la locura que requeriría evitarlo.

#### Todavía no hemos usado un `h4`

Pero ahora lo hemos hecho. Por favor, no uses `h5` o `h6` en tu contenido, Medium solo admite dos niveles de encabezado por una razón, animales. Honestamente, consideré usar un pseudo-elemento `before` para gritarte si usas un `h5` o `h6`.

No les damos estilo por defecto en absoluto porque los elementos `h4` ya son tan pequeños que tienen el mismo tamaño que el cuerpo del texto. ¿Qué se supone que debemos hacer con un `h5`, ¿hacerlo *más pequeño* que el cuerpo del texto? No, gracias.

### Todavía necesitamos pensar en encabezados apilados, sin embargo.

#### Asegurémonos de no arruinarlo con elementos `h4`, tampoco.

uf, con suerte hemos dado estilo a los encabezados anteriores a este texto y se ven bastante bien.

Añadamos un párrafo de cierre aquí para que las cosas terminen con un bloque de texto de tamaño decente. No puedo explicar por qué quiero que las cosas terminen así, pero debo suponer que es porque creo que las cosas se verán extrañas o desequilibradas si hay un encabezado demasiado cerca del final del documento.

Lo que he escrito aquí probablemente es lo suficientemente largo, pero agregar esta última oración no puede hacer daño.
