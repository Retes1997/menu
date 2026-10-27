# 🍽️ Menú Digital para Restaurantes (Mobile-First)

Una plantilla web moderna, ultra rápida y minimalista pensada específicamente para menús QR en restaurantes, cafeterías y bares gastronómicos.

Diseñada con enfoque **Mobile-First**, priorizando la velocidad de carga (0 dependencias de frameworks pesados, 100/100 Lighthouse), escaneo visual instantáneo y ergonomía táctil.

---

## ✨ Características Principales

* **Header Fijo Minimalista:** Nombre del restaurante a la izquierda y buscador con lupa a la derecha.
* **Buscador en Tiempo Real:** Filtra platos al vuelo por nombre, ingredientes o alérgenos.
* **Slider de Promociones & Noticias:** Carrusel táctil horizontal con *snap scroll* y paginación con puntos para ofertas del día, novedades o eventos.
* **Barra de Categorías Sticky (ScrollSpy):** Píldoras horizontales con auto-scroll y resaltado automático de la sección activa.
* **Títulos de Categoría en Grande (Sin Imagen):** Tipografía editorial cuidada sin elementos pesados que ralenticen el scroll.
* **Listado de Platos de Escaneo Rápido:**
  * Título del plato en **negrita**, truncado estrictamente a 1 línea con puntos suspensivos (`...`).
  * Descripción debajo en tono neutro, truncada estrictamente a 1 línea con puntos suspensivos (`...`).
  * Precio alineado a la derecha en color de acento.
* **Detalle del Plato en Bottom Sheet (Estilo iOS):**
  * Fotografía en alta resolución.
  * Título y descripción detallada completa.
  * Etiquetas de alérgenos y atributos dietéticos.
  * Botón para compartir plato o copiar enlace.
  * Cierre por arrastre táctil hacia abajo (*swipe down*), botón X o clic fuera.
* **Footer Completo:** Horarios, dirección, clave de WiFi para clientes y accesos directos a WhatsApp y llamada.

---

## 🛠️ Stack Tecnológico

* **HTML5 Semántico**
* **Tailwind CSS (CDN)** con tipografías Google Fonts (*Cormorant Garamond* + *Plus Jakarta Sans*)
* **Vanilla JavaScript Moderno (ES6+)**
* **Lucide Icons**

---

## 🚀 Cómo Personalizar la Carta

Todo el contenido del menú se encuentra centralizado en un único archivo: **[`js/app.js`](js/app.js)** dentro del objeto `MENU_DATA`:

```javascript
const MENU_DATA = {
  restaurant: {
    name: "TU RESTAURANTE",
    tagline: "Especialidad gastronómica",
    phone: "+34 912 345 678",
    whatsapp: "34912345678",
    address: "Calle Ejemplo 123",
    hours: "Mar – Dom: 13:00 - 23:30",
    wifi: { ssid: "WIFI_LOCAL", pass: "clave123" }
  },
  promos: [ /* Tarjetas del slider superior */ ],
  categories: [ /* Categorías y platos */ ]
};
```

---

## 💻 Ejecución Local

Puedes abrir directamente el archivo `index.html` en tu navegador, o levantar un servidor local con cualquiera de estos comandos en la terminal:

```bash
# Con Python
python -m http.server 3000

# O con Node / npx
npx serve .
```

---

## 🌐 Despliegue en Producción (Gratis)

1. **GitHub Pages:**
   * Ve a los *Settings* de tu repositorio en GitHub > *Pages* > Selecciona la rama `main` y la carpeta `/ (root)` > Guarda.
2. **Netlify:**
   * Arrastra la carpeta del proyecto a [Netlify Drop](https://app.netlify.com/drop).
3. **Vercel:**
   * Importa tu repositorio desde el dashboard de Vercel.
