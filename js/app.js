/**
 * AURA RESTAURANT - CORE LOGIC
 * Mobile-First, Fast Scan, Truncated List + Modal Detail View
 */

// ========================================================
// 1. DATOS DE LA CARTA (Fácilmente editable por el restaurante)
// ========================================================
const MENU_DATA = {
  restaurant: {
    name: "AURA",
    tagline: "Cocina de Brasa & Materia Prima",
    phone: "+34 912 345 678",
    whatsapp: "34912345678",
    address: "Calle del Sol 24, Barrio Gourmet",
    hours: "Mar – Dom: 13:00 - 16:30 | 20:00 - 23:30",
    wifi: { ssid: "AURA_GUEST", pass: "fuego2026" }
  },

  // Sliders de Noticias / Promociones del día (Inmediatamente bajo el Header)
  promos: [
    {
      id: "promo-1",
      tag: "PROMO DEL DÍA",
      tagColor: "bg-brand-accent text-white",
      title: "Menú Degustación & Fuego",
      desc: "5 pases seleccionados por el chef con 20% de descuento hoy.",
      badge: "-20% DSCTO",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80",
      dishId: "plato-brasa-1"
    },
    {
      id: "promo-2",
      tag: "NOVEDAD",
      tagColor: "bg-emerald-700 text-white",
      title: "Ostra Gillardeau Nº2 al Josper",
      desc: "Con mantequilla noisette, caviar cítrico y velo ibérico.",
      badge: "Edición Limitada",
      image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=700&q=80",
      dishId: "plato-ent-1"
    },
    {
      id: "promo-3",
      tag: "AFTERWORK",
      tagColor: "bg-amber-700 text-white",
      title: "2x1 en Cócteles de Autor",
      desc: "De 18:30 a 20:30 en terraza o barra de coctelería.",
      badge: "2x1 Cocktails",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=700&q=80",
      dishId: "plato-coctel-1"
    }
  ],

  // Categorías de la Carta (Títulos en grande sin imagen en el listado)
  categories: [
    {
      id: "entrantes",
      name: "ENTRANTES & TAPAS",
      subtitle: "Para abrir boca y compartir al centro",
      items: [
        {
          id: "plato-ent-1",
          name: "Ostra Gillardeau Nº2 a la brasa con velo ibérico",
          desc: "Mantequilla noisette, caviar cítrico, velo de jamón de bellota y aire marino.",
          price: "6,50 € / ud",
          image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
          fullDescription: "Ostra francesa Gillardeau templada suavemente al fuego de sarmiento, fundida con un delicado velo de tocino de bellota 100% ibérico, caviar de lima finger-lime y mantequilla clarificada con toque ahumado.",
          tags: ["Moluscos", "Lácteos", "Del Chef", "Sin Gluten"],
          recommended: true
        },
        {
          id: "plato-ent-2",
          name: "Miso Salmón glaseado con mantequilla tostada y sésamo",
          desc: "Lomo de salmón noruego macerado 24h en miso dulce, cremoso de coliflor y alga nori crocante.",
          price: "21,50 €",
          image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80",
          fullDescription: "Salmón noruego fresco lacado con pasta de miso rojo artesanal y mirin sobre brasas de carbón de marabú. Acompañado de puré sedoso de coliflor tostada y crujiente de sésamo negro.",
          tags: ["Pescado", "Soja", "Sésamo", "Sin Gluten"],
          recommended: true
        },
        {
          id: "plato-ent-3",
          name: "Tartar de Atún Rojo salvaje con yema curada y brioche",
          desc: "Atún de almadraba picado a cuchillo, emulsión de wasabi suave, yema trufada y brioche de mantequilla.",
          price: "19,00 €",
          image: "https://images.unsplash.com/photo-1501595091296-3aa970afb3ff?auto=format&fit=crop&w=800&q=80",
          fullDescription: "Corte noble de atún rojo de almadraba aderezado al momento con chalota francesa, soja añeja y aceite de sésamo virgen. Se corona con yema de huevo de corral curada en ponzu sobre tostada de pan brioche artesano.",
          tags: ["Pescado", "Gluten", "Huevo", "Soja"],
          recommended: false
        },
        {
          id: "plato-ent-4",
          name: "Croquetas melosas de Cecina de León y queso Idiazábal",
          desc: "Bechamel cremosa infusionada con cecina de buey curada y crujiente panko japonés (4 unidades).",
          price: "13,50 €",
          image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
          fullDescription: "Croquetas de masa ultracremosa cocinada a fuego lento durante 4 horas con leche fresca de granja y trozos generosos de cecina de buey IGP. Terminadas con un toque ahumado de queso Idiazábal D.O.",
          tags: ["Gluten", "Lácteos", "Clásico de la casa"],
          recommended: false
        },
        {
          id: "plato-ent-5",
          name: "Burrata Pugliese con tomates confitados y pesto de albahaca",
          desc: "Burrata fresca de 200g, tomates cherry asados al romero, piñones ibéricos y vinagre de Módena 12 años.",
          price: "15,00 €",
          image: "https://images.unsplash.com/photo-1592417817098-8f3d6910985b?auto=format&fit=crop&w=800&q=80",
          fullDescription: "Corazón cremoso de burrata importada semanalmente de Puglia, escoltada por tomates de colgar asados al carbón con aceite de oliva virgen extra arbequina y pesto fresco machacado en mortero.",
          tags: ["Lácteos", "Frutos de cáscara", "Vegetariano"],
          recommended: false
        }
      ]
    },

    {
      id: "brasas",
      name: "BRASA & FUEGO",
      subtitle: "Carnes maduradas y pescados salvajes al sarmiento",
      items: [
        {
          id: "plato-brasa-1",
          name: "Entrecot Angus Madurado 45 días con patatas rústicas",
          desc: "Corte de 450g con infiltración noble, escamas de sal Maldon y piquillos confitados a la leña.",
          price: "28,50 €",
          image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
          fullDescription: "Lomo bajo de ternera Aberdeen Angus seleccionada, madurada en seco (Dry Aged) durante 45 días para concentrar aromas terrosos y mantequilla. Sellada a fuego vivo en parrilla vasca con carbón de encina.",
          tags: ["Sin Gluten", "Especialidad Brasa", "Carne Madurada"],
          recommended: true
        },
        {
          id: "plato-brasa-2",
          name: "Costillar Ibérico glaseado con miel de lavanda y bourbon",
          desc: "Cocinado a baja temperatura durante 18 horas y acabado al carbón con salsa BBQ artesanal.",
          price: "22,00 €",
          image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
          fullDescription: "Costillas de cerdo 100% ibérico que se deshacen solas del hueso. Glaseadas capa a capa con una reducción de miel de lavanda de la Alcarria, toque de bourbon Maker's Mark y humo de manzano.",
          tags: ["Sin Gluten", "Favorito"],
          recommended: true
        },
        {
          id: "plato-brasa-3",
          name: "Pulpo de roca a la brasa con parmentier trufada",
          desc: "Pata de pulpo crujiente por fuera y tierna por dentro, cremoso de patata de montaña y pimentón de la Vera.",
          price: "24,00 €",
          image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
          fullDescription: "Pulpo gallego de costa asado a la parrilla sobre brasas de encina con aceite virgen extra. Servido sobre una parmentier rústica batida con mantequilla francesa y esencia de trufa negra melanosporum.",
          tags: ["Moluscos", "Lácteos", "Sin Gluten"],
          recommended: false
        },
        {
          id: "plato-brasa-4",
          name: "Lomo de Corvina salvaje con bimi salteado y bilbaína cítrica",
          desc: "Pescado de lonja marcado a la piel crujiente con emulsión templada de ajos tiernos, guindilla y lima.",
          price: "23,50 €",
          image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
          fullDescription: "Pieza fresca de corvina salvaje cocinada al punto exacto de jugosidad con un toque de brasa viva. Acompañada de bimi al dente con bilbaína emulsionada al momento.",
          tags: ["Pescado", "Sin Gluten"],
          recommended: false
        }
      ]
    },

    {
      id: "pastas",
      name: "PASTAS & ARROCES",
      subtitle: "Pastas hechas a mano cada mañana y fondos lentos",
      items: [
        {
          id: "plato-pas-1",
          name: "Tagliolini caseros con trufa negra y yema de caserío",
          desc: "Pasta fresca estirada a mano, emulsión de mantequilla de pasto, Parmigiano 36 meses y trufa rallada.",
          price: "19,50 €",
          image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
          fullDescription: "Masa fresca elaborada a diario con sémola de trigo duro y 30 yemas de huevo por kilo de harina. Mantecada en mesa con queso Parmigiano Reggiano DOP curado 36 meses y láminas frescas de trufa de temporada.",
          tags: ["Gluten", "Huevo", "Lácteos", "Vegetariano"],
          recommended: true
        },
        {
          id: "plato-pas-2",
          name: "Arroz meloso de bogavante azul y alioli suave de azafrán",
          desc: "Fondo marino reducido 12 horas con nécoras y pescado de roca, terminado con bogavante fresco (mín 2 pers).",
          price: "26,00 € / pax",
          image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
          fullDescription: "Arroz variedad Bomba cultivado en el Parque Natural de la Albufera. Cocinado en paella de hierro con caldo de roca ultra concentrado y bogavante azul a la brasa despiezado al momento.",
          tags: ["Crustáceos", "Pescado", "Sin Gluten"],
          recommended: false
        },
        {
          id: "plato-pas-3",
          name: "Rigatoni con ragú de ciervo estofado al vino tinto Priorat",
          desc: "Carne de caza deshilachada a fuego pausado con hierbas aromáticas silvestres y lascas de pecorino.",
          price: "17,50 €",
          image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281699?auto=format&fit=crop&w=800&q=80",
          fullDescription: "Un guiso tradicional de cazador reinterpretado con rigatoni de bronce al dente. El ciervo de sierra se confita 10 horas con vino D.O. Priorat, zanahorias baby, laurel y romero fresco.",
          tags: ["Gluten", "Lácteos"],
          recommended: false
        }
      ]
    },

    {
      id: "postres",
      name: "POSTRES DE AUTOR",
      subtitle: "El final dulce sin prisas elaborado por nuestro pastelero",
      items: [
        {
          id: "plato-post-1",
          name: "Tarta de queso fluida con toque ahumado al soplete",
          desc: "Elaborada con mezcla secreta de quesos de pasta blanda, base crujiente de galleta sablée y corazón fundente.",
          price: "7,50 €",
          image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80",
          fullDescription: "Horneada a alta temperatura para lograr un dorado exterior tostado y un interior líquido y tibio de quesos seleccionados. Acompañada de reducción casera de frambuesas de bosque.",
          tags: ["Lácteos", "Huevo", "Gluten", "Imprescindible"],
          recommended: true
        },
        {
          id: "plato-post-2",
          name: "Milhojas invertido de vainilla Bourbon de Madagascar",
          desc: "Hojaldre caramelizado extra crujiente relleno de crema diplomática sedosa y praliné de avellanas tostadas.",
          price: "8,00 €",
          image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80",
          fullDescription: "Finas capas de hojaldre invertido de pura mantequilla AOC montadas al momento para conservar el crujiente absoluto. Aromatizadas con vainas enteras de vainilla Bourbon de Madagascar.",
          tags: ["Gluten", "Lácteos", "Huevo", "Frutos de cáscara"],
          recommended: false
        },
        {
          id: "plato-post-3",
          name: "Sorbete artesanal de mango verde, lima y albahaca fresca",
          desc: "Textura ligera 100% fruta natural, sin lácteos, infusionado con albahaca y gotas de mezcal ahumado.",
          price: "6,00 €",
          image: "https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&w=800&q=80",
          fullDescription: "Refrescante y digestivo para culminar una comida de brasa. Elaborado con mangos madurados en árbol y un sutil perfume de hierbas aromáticas de nuestro huerto.",
          tags: ["Vegano", "Sin Gluten", "Sin Lactosa"],
          recommended: false
        }
      ]
    },

    {
      id: "cocteleria",
      name: "COCTELERÍA & VINOS",
      subtitle: "Mixología clásica, tragos de autor y selección de bodega",
      items: [
        {
          id: "plato-coctel-1",
          name: "Smoked Mezcal Paloma con pomelo rosa asado a la leña",
          desc: "Mezcal artesanal Oaxaqueño, zumo de pomelo a la parrilla, licor de flor de saúco y escarcha de sal de gusano.",
          price: "11,50 €",
          image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80",
          fullDescription: "Un trago ahumado y vibrante que dialoga con los platos de brasa. Los pomelos son caramelizados en la parrilla antes de prensarse en frío para obtener notas ácidas y tostadas únicas.",
          tags: ["Cóctel de Autor", "Ahumado"],
          recommended: true
        },
        {
          id: "plato-coctel-2",
          name: "AURA Negroni añejado en barrica de roble francés",
          desc: "Gin botánico, Campari macerado con cacao amargo y Vermouth rosso reposado durante 60 días.",
          price: "12,00 €",
          image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
          fullDescription: "Nuestra versión envejecida del cóctel italiano por excelencia. La madera de roble aporta redondez aterciopelada y un retrogusto a vainilla tostada inigualable.",
          tags: ["Añejado", "Clásico"],
          recommended: false
        },
        {
          id: "plato-coctel-3",
          name: "Copa de Vino Tinto D.O. Ribera del Duero Crianza",
          desc: "100% Tempranillo, 14 meses en barrica, notas de fruta negra madura, regaliz y taninos sedosos.",
          price: "4,80 € / copa",
          image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
          fullDescription: "Selección de bodega especial para maridar con carnes rojas a la brasa. Botella entera disponible por 24,00 €.",
          tags: ["Sulfitos", "Vino D.O."],
          recommended: false
        }
      ]
    }
  ]
};

// ========================================================
// 2. REFERENCIAS DEL DOM
// ========================================================
const sliderContainer = document.getElementById('sliderContainer');
const sliderDots = document.getElementById('sliderDots');
const categoryChips = document.getElementById('categoryChips');
const menuSectionsContainer = document.getElementById('menuSectionsContainer');
const searchToggleBtn = document.getElementById('searchToggleBtn');
const searchBarContainer = document.getElementById('searchBarContainer');
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const resetSearchBtn = document.getElementById('resetSearchBtn');
const noResultsNotice = document.getElementById('noResultsNotice');

// Modal Elements
const modalBackdrop = document.getElementById('modalBackdrop');
const dishModal = document.getElementById('dishModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalDishImage = document.getElementById('modalDishImage');
const modalDishCategory = document.getElementById('modalDishCategory');
const modalDishTitle = document.getElementById('modalDishTitle');
const modalDishPrice = document.getElementById('modalDishPrice');
const modalDishDesc = document.getElementById('modalDishDesc');
const modalDishTags = document.getElementById('modalDishTags');
const modalShareBtn = document.getElementById('modalShareBtn');

let currentActiveDish = null;

// ========================================================
// 3. RENDERIZADO DEL SLIDER DE NOTICIAS / PROMOS DEL DÍA
// ========================================================
function renderPromos() {
  if (!sliderContainer) return;
  
  sliderContainer.innerHTML = '';
  sliderDots.innerHTML = '';

  MENU_DATA.promos.forEach((promo, idx) => {
    // Tarjeta del Slider
    const card = document.createElement('div');
    card.className = 'promo-card rounded-2xl overflow-hidden border border-brand-border bg-white shadow-sm flex flex-col cursor-pointer';
    card.setAttribute('data-dish-id', promo.dishId);

    card.innerHTML = `
      <div class="relative h-32 w-full bg-brand-surfaceAlt overflow-hidden">
        <img src="${promo.image}" alt="${promo.title}" loading="lazy" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        <div class="absolute top-2.5 left-2.5 flex items-center gap-1.5">
          <span class="text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full ${promo.tagColor}">
            ${promo.tag}
          </span>
          <span class="text-[9px] font-bold uppercase px-2 py-0.5 rounded-full bg-white/90 text-brand-black backdrop-blur-xs">
            ${promo.badge}
          </span>
        </div>
        <h3 class="absolute bottom-2.5 left-3 right-3 text-white font-serif text-lg font-bold leading-tight drop-shadow-sm truncate-1-line">
          ${promo.title}
        </h3>
      </div>
      <div class="p-3 bg-white flex items-center justify-between gap-2">
        <p class="text-xs text-brand-muted truncate-1-line flex-1">
          ${promo.desc}
        </p>
        <span class="text-xs font-bold text-brand-accent flex items-center gap-0.5 shrink-0">
          Ver <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
        </span>
      </div>
    `;

    // Click en promo abre el detalle del plato correspondiente
    card.addEventListener('click', () => {
      openDishById(promo.dishId);
    });

    sliderContainer.appendChild(card);

    // Dots indicadores
    const dot = document.createElement('div');
    dot.className = `w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === 0 ? 'bg-brand-black w-3.5' : 'bg-brand-border'}`;
    sliderDots.appendChild(dot);
  });

  // Listener para sincronizar los dots con el scroll táctil
  sliderContainer.addEventListener('scroll', () => {
    const scrollLeft = sliderContainer.scrollLeft;
    const cardWidth = sliderContainer.querySelector('.promo-card')?.offsetWidth || 280;
    const activeIndex = Math.round(scrollLeft / cardWidth);

    Array.from(sliderDots.children).forEach((dot, idx) => {
      if (idx === activeIndex) {
        dot.className = 'w-3.5 h-1.5 rounded-full bg-brand-black transition-all duration-300';
      } else {
        dot.className = 'w-1.5 h-1.5 rounded-full bg-brand-border transition-all duration-300';
      }
    });
  });
}

// ========================================================
// 4. RENDERIZADO DE CHIPS DE CATEGORÍAS & SCROLL INTERACTIVO
// ========================================================
function renderCategoryChips() {
  if (!categoryChips) return;
  categoryChips.innerHTML = '';

  MENU_DATA.categories.forEach((cat, idx) => {
    const chip = document.createElement('button');
    chip.className = `category-chip px-3.5 py-1.5 rounded-full text-xs font-semibold border border-brand-border text-brand-black hover:border-brand-black/40 ${idx === 0 ? 'active' : 'bg-brand-surfaceAlt/60'}`;
    chip.setAttribute('data-target-category', cat.id);
    chip.textContent = cat.name.split('&')[0].trim(); // Nombre corto para la píldora

    chip.addEventListener('click', () => {
      // Activar visualmente
      document.querySelectorAll('.category-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      // Scroll suave hacia la sección
      const targetSec = document.getElementById(`section-${cat.id}`);
      if (targetSec) {
        const headerOffset = 120; // Espacio para header + barra de categorías
        const elementPosition = targetSec.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });

    categoryChips.appendChild(chip);
  });
}

// ========================================================
// 5. RENDERIZADO DE LA CARTA (Títulos en grande sin imagen)
//    + Filas de platos truncadas estrictamente a 1 línea
// ========================================================
function renderMenuSections(filterKeyword = '') {
  if (!menuSectionsContainer) return;
  menuSectionsContainer.innerHTML = '';

  const cleanKeyword = filterKeyword.trim().toLowerCase();
  let totalDishesFound = 0;

  MENU_DATA.categories.forEach((cat) => {
    // Filtrar platos si hay término de búsqueda
    const filteredDishes = cat.items.filter(dish => {
      if (!cleanKeyword) return true;
      const matchName = dish.name.toLowerCase().includes(cleanKeyword);
      const matchDesc = dish.desc.toLowerCase().includes(cleanKeyword);
      const matchFull = dish.fullDescription.toLowerCase().includes(cleanKeyword);
      const matchTags = dish.tags.some(tag => tag.toLowerCase().includes(cleanKeyword));
      return matchName || matchDesc || matchFull || matchTags;
    });

    if (filteredDishes.length === 0) {
      return; // No renderizar sección vacía durante búsqueda
    }

    totalDishesFound += filteredDishes.length;

    // Contenedor de la sección
    const sectionEl = document.createElement('section');
    sectionEl.id = `section-${cat.id}`;
    sectionEl.className = 'menu-section scroll-mt-28';

    // Cabecera de Categoría:
    // "inmediatamente despues los titulos en grande, sin imagen."
    const headerEl = document.createElement('div');
    headerEl.className = 'border-b border-brand-black/10 pb-2 mb-2 flex items-baseline justify-between';
    headerEl.innerHTML = `
      <div>
        <h2 class="font-serif text-2xl font-bold tracking-tight text-brand-black uppercase">
          ${cat.name}
        </h2>
        ${cat.subtitle ? `<p class="text-[11px] text-brand-muted tracking-wide mt-0.5">${cat.subtitle}</p>` : ''}
      </div>
      <span class="text-[10px] font-bold text-brand-muted font-sans uppercase tracking-wider">
        ${filteredDishes.length} ${filteredDishes.length === 1 ? 'plato' : 'platos'}
      </span>
    `;
    sectionEl.appendChild(headerEl);

    // Lista de platos
    const listEl = document.createElement('div');
    listEl.className = 'divide-y divide-brand-border/60';

    filteredDishes.forEach(dish => {
      const row = document.createElement('div');
      row.className = 'dish-row py-3 px-1.5 rounded-lg';
      row.setAttribute('data-dish-id', dish.id);

      // Estructura requerida:
      // Título en negrita en máx 1 línea truncado en puntos suspensivos
      // y debajo su descripción de máx 1 línea truncada en puntos suspensivos
      row.innerHTML = `
        <div class="flex items-start justify-between gap-3">
          <!-- Bloque de texto con truncado estricto -->
          <div class="min-w-0 flex-1">
            <!-- Título en negrita (máximo 1 línea truncada) -->
            <div class="flex items-center gap-1.5">
              ${dish.recommended ? '<span class="inline-block w-1.5 h-1.5 rounded-full bg-brand-accent flex-shrink-0" title="Recomendado del chef"></span>' : ''}
              <h3 class="font-bold text-sm text-brand-black truncate-1-line">
                ${dish.name}
              </h3>
            </div>
            
            <!-- Descripción debajo (máximo 1 línea truncada) -->
            <p class="text-xs text-brand-muted truncate-1-line mt-0.5">
              ${dish.desc}
            </p>
          </div>

          <!-- Precio a la derecha (destacado e inmutable) -->
          <div class="text-right shrink-0 pl-1 pt-0.5">
            <span class="font-sans font-bold text-xs text-brand-accent whitespace-nowrap">
              ${dish.price}
            </span>
          </div>
        </div>
      `;

      // Tap para abrir el Bottom Sheet Modal con toda la info explayada
      row.addEventListener('click', () => {
        openDishModal(dish, cat.name);
      });

      listEl.appendChild(row);
    });

    sectionEl.appendChild(listEl);
    menuSectionsContainer.appendChild(sectionEl);
  });

  // Manejo de estado vacío si la búsqueda no arroja resultados
  if (cleanKeyword && totalDishesFound === 0) {
    noResultsNotice.classList.remove('hidden');
  } else {
    noResultsNotice.classList.add('hidden');
  }

  // Refrescar iconos de Lucide
  if (window.lucide) {
    lucide.createIcons();
  }
}

// ========================================================
// 6. DETALLE DE PLATO (BOTTOM SHEET / MODAL ESTILO iOS)
// ========================================================
function openDishModal(dish, categoryName = '') {
  currentActiveDish = dish;

  // Poblar datos del modal
  modalDishTitle.textContent = dish.name;
  modalDishPrice.textContent = dish.price;
  modalDishDesc.textContent = dish.fullDescription || dish.desc;
  modalDishCategory.textContent = categoryName || 'ESPECIALIDAD';

  // Precarga suave de la imagen
  modalDishImage.classList.remove('opacity-100');
  modalDishImage.classList.add('opacity-0');
  modalDishImage.src = dish.image;
  modalDishImage.alt = dish.name;
  modalDishImage.onload = () => {
    modalDishImage.classList.remove('opacity-0');
    modalDishImage.classList.add('opacity-100');
  };

  // Etiquetas de alérgenos y atributos
  modalDishTags.innerHTML = '';
  if (dish.tags && dish.tags.length > 0) {
    dish.tags.forEach(tag => {
      const tagSpan = document.createElement('span');
      tagSpan.className = 'text-[11px] font-medium px-2.5 py-1 rounded-md bg-brand-surfaceAlt text-brand-black border border-brand-border/70 flex items-center gap-1';
      
      // Icono sutil según tag
      let icon = 'tag';
      if (tag.toLowerCase().includes('gluten')) icon = 'wheat';
      if (tag.toLowerCase().includes('pescado') || tag.toLowerCase().includes('marino')) icon = 'fish';
      if (tag.toLowerCase().includes('chef') || tag.toLowerCase().includes('especialidad')) icon = 'flame';
      if (tag.toLowerCase().includes('vegano') || tag.toLowerCase().includes('vegetariano')) icon = 'leaf';

      tagSpan.innerHTML = `<i data-lucide="${icon}" class="w-3 h-3 text-brand-muted"></i> ${tag}`;
      modalDishTags.appendChild(tagSpan);
    });
  }

  // Abrir visualmente
  modalBackdrop.classList.add('backdrop-open');
  dishModal.classList.add('modal-open');
  document.body.classList.add('overflow-hidden');

  // Refrescar iconos dentro del modal
  if (window.lucide) {
    lucide.createIcons();
  }
}

function closeDishModal() {
  modalBackdrop.classList.remove('backdrop-open');
  dishModal.classList.remove('modal-open');
  document.body.classList.remove('overflow-hidden');
  currentActiveDish = null;
}

function openDishById(dishId) {
  for (const cat of MENU_DATA.categories) {
    const found = cat.items.find(i => i.id === dishId);
    if (found) {
      openDishModal(found, cat.name);
      return;
    }
  }
}

// ========================================================
// 7. BUSCADOR EN TIEMPO REAL (LUPA EN HEADER)
// ========================================================
function setupSearch() {
  if (!searchToggleBtn || !searchBarContainer || !searchInput) return;

  searchToggleBtn.addEventListener('click', () => {
    const isHidden = searchBarContainer.classList.contains('hidden');
    if (isHidden) {
      searchBarContainer.classList.remove('hidden');
      searchInput.focus();
      searchToggleBtn.classList.add('text-brand-accent');
    } else {
      searchBarContainer.classList.add('hidden');
      searchToggleBtn.classList.remove('text-brand-accent');
      searchInput.value = '';
      clearSearchBtn.classList.add('hidden');
      renderMenuSections();
    }
  });

  searchInput.addEventListener('input', (e) => {
    const value = e.target.value;
    if (value.length > 0) {
      clearSearchBtn.classList.remove('hidden');
    } else {
      clearSearchBtn.classList.add('hidden');
    }
    renderMenuSections(value);
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    clearSearchBtn.classList.add('hidden');
    searchInput.focus();
    renderMenuSections();
  });

  if (resetSearchBtn) {
    resetSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      clearSearchBtn.classList.add('hidden');
      renderMenuSections();
    });
  }
}

// ========================================================
// 8. SCROLLSPY PARA LA BARRA DE CATEGORÍAS FLOTANTE
// ========================================================
function setupScrollSpy() {
  const sections = document.querySelectorAll('.menu-section');
  const chips = document.querySelectorAll('.category-chip');

  if (sections.length === 0 || chips.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id.replace('section-', '');
        chips.forEach(chip => {
          if (chip.getAttribute('data-target-category') === id) {
            chips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            
            // Auto-scroll del contenedor de chips para que el botón activo sea visible
            chip.scrollIntoView({
              behavior: 'smooth',
              inline: 'center',
              block: 'nearest'
            });
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => observer.observe(sec));
}

// ========================================================
// 9. EVENTOS DE CIERRE & INTERACCIÓN DEL MODAL
// ========================================================
function setupModalInteractions() {
  // Cierre por botón X
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeDishModal);
  }

  // Cierre por tap en fondo oscuro
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', closeDishModal);
  }

  // Cierre con tecla Escape
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDishModal();
  });

  // Botón de Compartir Plato (Web Share API o Clipboard fallback)
  if (modalShareBtn) {
    modalShareBtn.addEventListener('click', async () => {
      if (!currentActiveDish) return;

      const shareData = {
        title: `${currentActiveDish.name} | AURA`,
        text: `Descubre este plato en AURA: ${currentActiveDish.name} (${currentActiveDish.price})`,
        url: window.location.href
      };

      if (navigator.share) {
        try {
          await navigator.share(shareData);
        } catch (err) {
          // Usuario canceló compartir, no hacer nada
        }
      } else {
        // Fallback portapapeles
        navigator.clipboard.writeText(`${shareData.title} - ${shareData.text}`);
        const originalText = modalShareBtn.innerHTML;
        modalShareBtn.innerHTML = `<i data-lucide="check" class="w-4 h-4 text-emerald-400"></i> <span>¡Enlace copiado!</span>`;
        if (window.lucide) lucide.createIcons();
        setTimeout(() => {
          modalShareBtn.innerHTML = originalText;
          if (window.lucide) lucide.createIcons();
        }, 2000);
      }
    });
  }

  // Soporte de swipe táctil hacia abajo para cerrar el modal
  let touchStartY = 0;
  let touchMoveY = 0;

  dishModal.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  dishModal.addEventListener('touchmove', (e) => {
    touchMoveY = e.touches[0].clientY;
    const diff = touchMoveY - touchStartY;
    // Si arrastra hacia abajo desde la parte superior del modal
    if (diff > 0 && dishModal.scrollTop <= 0) {
      dishModal.style.transform = `translateY(${diff * 0.7}px)`;
    }
  }, { passive: true });

  dishModal.addEventListener('touchend', () => {
    const diff = touchMoveY - touchStartY;
    dishModal.style.transform = '';
    if (diff > 120 && dishModal.scrollTop <= 0) {
      closeDishModal();
    }
    touchStartY = 0;
    touchMoveY = 0;
  });
}

// ========================================================
// 10. INICIALIZACIÓN DE LA APLICACIÓN
// ========================================================
document.addEventListener('DOMContentLoaded', () => {
  renderPromos();
  renderCategoryChips();
  renderMenuSections();
  setupSearch();
  setupModalInteractions();
  setupScrollSpy();

  // Asegurar iconos renderizados
  if (window.lucide) {
    lucide.createIcons();
  }
});
