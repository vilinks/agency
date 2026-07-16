document.documentElement.classList.add("js");

(() => {
  "use strict";

  const translations = {
    en: {
      "meta.title": "Virgin Agency — the agency works for the model",
      "meta.description": "The model receives 40% of net profit, full account access, a personal team, and a diversified traffic system.",
      "a11y.skip": "Skip to content",
      "nav.menu": "Menu",
      "nav.position": "Position",
      "nav.approach": "Approach",
      "nav.cases": "Results",
      "nav.faq": "FAQ",
      "nav.cta": "Discuss the start",
      "hero.eyebrow": "Boutique creator management · Global",
      "hero.title": "The agency works<br><em>for the model.</em> Not the other way around.",
      "hero.lead": "We build a personal growth system around your style, boundaries, and goals. You keep control, receive <strong>40% of net profit</strong>, and do not live for content.",
      "hero.cta": "Message us on Telegram",
      "hero.secondary": "How it works",
      "hero.meta1": "Full access",
      "hero.meta2": "Personal assistant",
      "hero.meta3": "No templates",
      "hero.artLabel": "The model's net profit",
      "hero.orbit1": "Transparent<br>math",
      "hero.orbit2": "Traffic as<br>an ecosystem",
      "hero.artFooter": "Model-first since day one",
      "position.kicker": "Our position",
      "position.aside": "Partnership instead of dependency",
      "position.title": "The model is not a resource.<br><em>She is the brand.</em>",
      "position.text": "That is why we do not take away access, hide actions, or force an endless “shoot more” race. The team owns strategy, traffic, sales, and routine while the system adapts to you.",
      "position.link": "Compare approaches",
      "principles.oneTitle": "to the model from net profit",
      "principles.oneText": "A clear scheme with no surprises at the end of the month.",
      "principles.twoTitle": "sources for growth",
      "principles.twoText": "We never bet the entire result on one lucky channel.",
      "principles.threeTitle": "support and control",
      "principles.threeText": "Direct contact and a transparent process without disappearing.",
      "approach.kicker": "How we work",
      "approach.aside": "A system instead of chaos",
      "approach.title": "Less routine.<br><em>More result.</em>",
      "approach.intro": "Four layers of one system: positioning, content, distribution, and retention.",
      "approach.oneTitle": "Personal strategy",
      "approach.oneText": "We define your style, boundaries, goals, and strengths. No universal scripts that feel nothing like you.",
      "approach.twoTitle": "Content without burnout",
      "approach.twoText": "You get a clear shooting format and the minimum useful volume. Content works for you instead of taking over your life.",
      "approach.threeTitle": "Multi-channel growth",
      "approach.threeText": "Social, organic, adult platforms, and aggregators work as one ecosystem, not a collection of random tests.",
      "approach.fourTitle": "Sales and retention",
      "approach.fourText": "An experienced team understands subscriber psychology and focuses on LTV, retention, and long-term growth.",
      "growth.kicker": "Growth engine",
      "growth.title": "Not a channel.<br><em>An ecosystem.</em>",
      "growth.text": "If one source changes its algorithm, the system keeps working. We distribute attention, tests, and content across platforms and amplify what performs.",
      "cases.kicker": "Results",
      "cases.aside": "Real dashboards · no renders",
      "cases.title": "Numbers speak<br><em>louder than promises.</em>",
      "cases.text": "Here is part of the real account performance. Open any case to inspect the data in detail.",
      "cases.count": "result screenshots",
      "cases.disclaimer": "Results vary and depend on starting conditions, consistency, and the selected strategy.",
      "cases.cta": "Discuss your potential",
      "cases.item": "Case",
      "cases.caption": "Real account performance",
      "compare.kicker": "The difference",
      "compare.aside": "Why the model keeps control",
      "compare.title": "The market got used to one way.<br><em>We chose another.</em>",
      "compare.marketLabel": "Typical model",
      "compare.market1": "One primary traffic source",
      "compare.market2": "The same content template for everyone",
      "compare.market3": "Minimal transparency and support",
      "compare.market4": "Dependency on the team and access",
      "compare.marketStamp": "MARKET DEFAULT",
      "compare.virgin1": "A diversified traffic ecosystem",
      "compare.virgin2": "Strategy built around style and boundaries",
      "compare.virgin3": "Personal assistant and a clear process",
      "compare.virgin4": "Full access to pages and data",
      "compare.virginStamp": "MODEL FIRST",
      "faq.aside": "The important things, clearly",
      "faq.title": "Questions<br><em>worth asking.</em>",
      "faq.q1": "Do I keep access to my accounts?",
      "faq.a1": "Yes. You keep full access and can always see what is happening with the accounts, content, and traffic.",
      "faq.q2": "How much content do I need to shoot?",
      "faq.a2": "We aim for the minimum effective volume. After getting to know you, the team creates a clear plan for your format, style, and limits.",
      "faq.q3": "How is the model's share calculated?",
      "faq.a3": "The model receives 40% of net profit through a transparent scheme agreed before the start. The expense structure is clarified upfront.",
      "faq.q4": "What happens after the first message?",
      "faq.a4": "We briefly get to know each other, discuss your current position, goals, and boundaries, then show a realistic launch plan without pressure or obligations.",
      "final.kicker": "Your next chapter",
      "final.title": "Do not work for an agency.<br><em>Work with one.</em>",
      "final.text": "Message us. No long forms, spam, or sales theatre — we will simply see whether we are a good fit.",
      "footer.line": "Model-first growth · Transparent · Scalable"
    },
    es: {
      "meta.title": "Virgin Agency — la agencia trabaja para la modelo",
      "meta.description": "La modelo recibe el 40% del beneficio neto, acceso total, un equipo personal y un sistema de tráfico diversificado.",
      "a11y.skip": "Ir al contenido",
      "nav.menu": "Menú",
      "nav.position": "Posición",
      "nav.approach": "Enfoque",
      "nav.cases": "Resultados",
      "nav.faq": "FAQ",
      "nav.cta": "Hablar del inicio",
      "hero.eyebrow": "Boutique creator management · Global",
      "hero.title": "La agencia trabaja<br><em>para la modelo.</em> No al revés.",
      "hero.lead": "Creamos un sistema de crecimiento personal alrededor de tu estilo, límites y objetivos. Mantienes el control, recibes <strong>40% del beneficio neto</strong> y no vives para el contenido.",
      "hero.cta": "Escribir en Telegram",
      "hero.secondary": "Cómo funciona",
      "hero.meta1": "Acceso total",
      "hero.meta2": "Asistente personal",
      "hero.meta3": "Sin plantillas",
      "hero.artLabel": "Beneficio neto de la modelo",
      "hero.orbit1": "Cálculo<br>transparente",
      "hero.orbit2": "Tráfico como<br>ecosistema",
      "hero.artFooter": "Model-first since day one",
      "position.kicker": "Nuestra posición",
      "position.aside": "Colaboración en vez de dependencia",
      "position.title": "La modelo no es un recurso.<br><em>Ella es la marca.</em>",
      "position.text": "Por eso no quitamos accesos, no ocultamos acciones y no imponemos una carrera infinita de «graba más». El equipo se ocupa de estrategia, tráfico, ventas y rutina; el sistema se adapta a ti.",
      "position.link": "Comparar enfoques",
      "principles.oneTitle": "para la modelo del beneficio neto",
      "principles.oneText": "Un esquema claro, sin sorpresas al final de mes.",
      "principles.twoTitle": "fuentes de crecimiento",
      "principles.twoText": "Nunca apostamos todo el resultado a un solo canal.",
      "principles.threeTitle": "soporte y control",
      "principles.threeText": "Contacto directo y proceso transparente, sin desaparecer.",
      "approach.kicker": "Cómo trabajamos",
      "approach.aside": "Sistema en vez de caos",
      "approach.title": "Menos rutina.<br><em>Más resultado.</em>",
      "approach.intro": "Cuatro capas de un sistema: posicionamiento, contenido, distribución y retención.",
      "approach.oneTitle": "Estrategia personal",
      "approach.oneText": "Definimos estilo, límites, objetivos y fortalezas. Sin guiones universales que no se parecen a ti.",
      "approach.twoTitle": "Contenido sin burnout",
      "approach.twoText": "Recibes un formato de grabación claro y el volumen mínimo útil. El contenido trabaja para ti, no ocupa toda tu vida.",
      "approach.threeTitle": "Crecimiento multicanal",
      "approach.threeText": "Social, orgánico, plataformas adult y agregadores funcionan como un ecosistema, no como pruebas aleatorias.",
      "approach.fourTitle": "Ventas y retención",
      "approach.fourText": "Un equipo con experiencia entiende la psicología del suscriptor y se enfoca en LTV, retención y crecimiento a largo plazo.",
      "growth.kicker": "Growth engine",
      "growth.title": "No un canal.<br><em>Un ecosistema.</em>",
      "growth.text": "Si una fuente cambia el algoritmo, el sistema sigue funcionando. Distribuimos atención, tests y contenido entre plataformas y reforzamos lo que da resultado.",
      "cases.kicker": "Resultados",
      "cases.aside": "Paneles reales · sin renders",
      "cases.title": "Los números hablan<br><em>más que las promesas.</em>",
      "cases.text": "Aquí tienes parte del rendimiento real de las cuentas. Abre cualquier caso para ver los datos en detalle.",
      "cases.count": "capturas de resultados",
      "cases.disclaimer": "Los resultados son individuales y dependen del punto de partida, la constancia y la estrategia elegida.",
      "cases.cta": "Hablar de tu potencial",
      "cases.item": "Caso",
      "cases.caption": "Rendimiento de una cuenta real",
      "compare.kicker": "La diferencia",
      "compare.aside": "Por qué la modelo mantiene el control",
      "compare.title": "El mercado se acostumbró a una cosa.<br><em>Nosotros elegimos otra.</em>",
      "compare.marketLabel": "Esquema típico",
      "compare.market1": "Una fuente principal de tráfico",
      "compare.market2": "La misma plantilla para todas",
      "compare.market3": "Poca transparencia y soporte",
      "compare.market4": "Dependencia del equipo y los accesos",
      "compare.marketStamp": "MARKET DEFAULT",
      "compare.virgin1": "Ecosistema de tráfico diversificado",
      "compare.virgin2": "Estrategia según estilo y límites",
      "compare.virgin3": "Asistente personal y proceso claro",
      "compare.virgin4": "Acceso total a páginas y datos",
      "compare.virginStamp": "MODEL FIRST",
      "faq.aside": "Lo importante, sin rodeos",
      "faq.title": "Preguntas<br><em>que vale la pena hacer.</em>",
      "faq.q1": "¿Mantengo el acceso a mis cuentas?",
      "faq.a1": "Sí. Mantienes acceso total y siempre puedes ver qué ocurre con las cuentas, el contenido y el tráfico.",
      "faq.q2": "¿Cuánto contenido debo grabar?",
      "faq.a2": "Buscamos el volumen mínimo efectivo. Después de conocerte, el equipo prepara un plan claro para tu formato, estilo y límites.",
      "faq.q3": "¿Cómo se calcula la parte de la modelo?",
      "faq.a3": "La modelo recibe el 40% del beneficio neto mediante un esquema transparente acordado antes de empezar. La estructura de gastos se aclara de antemano.",
      "faq.q4": "¿Qué pasa después del primer mensaje?",
      "faq.a4": "Nos conocemos brevemente, hablamos de tu punto actual, objetivos y límites, y mostramos un plan de lanzamiento realista, sin presión ni obligaciones.",
      "final.kicker": "Tu próximo capítulo",
      "final.title": "No trabajar para una agencia.<br><em>Trabajar con ella.</em>",
      "final.text": "Escríbenos. Sin formularios largos, spam ni teatro de ventas: simplemente veremos si encajamos.",
      "footer.line": "Model-first growth · Transparent · Scalable"
    },
    ru: {
      "meta.title": "Virgin Agency — агентство работает на модель",
      "meta.description": "Модель получает 40% чистой прибыли, полный доступ к аккаунтам, персональную команду и диверсифицированную систему трафика.",
      "a11y.skip": "Перейти к содержанию",
      "nav.menu": "Меню",
      "nav.position": "Позиция",
      "nav.approach": "Подход",
      "nav.cases": "Результаты",
      "nav.faq": "FAQ",
      "nav.cta": "Обсудить старт",
      "hero.eyebrow": "Boutique creator management · Global",
      "hero.title": "Агентство работает<br><em>на модель.</em> Не наоборот.",
      "hero.lead": "Строим персональную систему роста вокруг твоего стиля, границ и целей. Ты сохраняешь контроль, получаешь <strong>40% чистой прибыли</strong> и не живёшь ради контента.",
      "hero.cta": "Написать в Telegram",
      "hero.secondary": "Как это работает",
      "hero.meta1": "Полный доступ",
      "hero.meta2": "Личный ассистент",
      "hero.meta3": "Без шаблонов",
      "hero.artLabel": "Чистая прибыль модели",
      "hero.orbit1": "Прозрачная<br>математика",
      "hero.orbit2": "Трафик как<br>экосистема",
      "hero.artFooter": "Model-first since day one",
      "position.kicker": "Наша позиция",
      "position.aside": "Партнёрство вместо зависимости",
      "position.title": "Модель — не расходник.<br><em>Она и есть бренд.</em>",
      "position.text": "Поэтому мы не отнимаем доступы, не прячем действия и не заставляем бесконечно «снимать больше». Команда берёт на себя стратегию, трафик, продажи и рутину — а система адаптируется под тебя.",
      "position.link": "Сравнить подходы",
      "principles.oneTitle": "модели от чистой прибыли",
      "principles.oneText": "Понятная схема без «сюрпризов» в конце месяца.",
      "principles.twoTitle": "источников для роста",
      "principles.twoText": "Не ставим весь результат на один удачный канал.",
      "principles.threeTitle": "поддержка и контроль",
      "principles.threeText": "Личный контакт и прозрачный процесс без исчезновений.",
      "approach.kicker": "Как мы работаем",
      "approach.aside": "Система вместо хаоса",
      "approach.title": "Меньше рутины.<br><em>Больше результата.</em>",
      "approach.intro": "Четыре слоя одной системы: позиционирование, контент, дистрибуция и удержание.",
      "approach.oneTitle": "Персональная стратегия",
      "approach.oneText": "Определяем стиль, границы, цели и сильные стороны. Никаких универсальных сценариев, которые не похожи на тебя.",
      "approach.twoTitle": "Контент без выгорания",
      "approach.twoText": "Даём чёткий формат съёмок и минимально необходимый объём. Контент работает на тебя, а не забирает всю жизнь.",
      "approach.threeTitle": "Мультиканальный рост",
      "approach.threeText": "Соцсети, органика, adult-платформы и агрегаторы работают как единая экосистема, а не набор случайных тестов.",
      "approach.fourTitle": "Продажи и удержание",
      "approach.fourText": "Опытная команда понимает психологию подписчиков и фокусируется на LTV, удержании и долгосрочном росте.",
      "growth.kicker": "Growth engine",
      "growth.title": "Не канал.<br><em>Экосистема.</em>",
      "growth.text": "Если один источник меняет алгоритм, система продолжает работать. Мы распределяем внимание, тесты и контент между площадками и усиливаем то, что даёт результат.",
      "cases.kicker": "Результаты",
      "cases.aside": "Реальные кабинеты · без рендера",
      "cases.title": "Цифры говорят<br><em>громче обещаний.</em>",
      "cases.text": "Собрали часть реальной динамики по аккаунтам. Нажми на любой кейс, чтобы рассмотреть данные крупнее.",
      "cases.count": "скриншотов результатов",
      "cases.disclaimer": "Результаты индивидуальны и зависят от стартовых данных, регулярности и выбранной стратегии.",
      "cases.cta": "Обсудить свой потенциал",
      "cases.item": "Кейс",
      "cases.caption": "Результаты реального аккаунта",
      "compare.kicker": "Разница",
      "compare.aside": "Почему модель чувствует контроль",
      "compare.title": "Рынок привык к одному.<br><em>Мы выбрали другое.</em>",
      "compare.marketLabel": "Обычная схема",
      "compare.market1": "Один основной источник трафика",
      "compare.market2": "Шаблонный контент для всех",
      "compare.market3": "Минимум прозрачности и поддержки",
      "compare.market4": "Зависимость от команды и доступов",
      "compare.marketStamp": "MARKET DEFAULT",
      "compare.virgin1": "Диверсифицированная экосистема трафика",
      "compare.virgin2": "Стратегия под стиль и личные границы",
      "compare.virgin3": "Личный ассистент и понятный процесс",
      "compare.virgin4": "Полный доступ к страницам и данным",
      "compare.virginStamp": "MODEL FIRST",
      "faq.aside": "Коротко о главном",
      "faq.title": "Вопросы,<br><em>которые стоит задать.</em>",
      "faq.q1": "У меня останется доступ к аккаунтам?",
      "faq.a1": "Да. Ты сохраняешь полный доступ и можешь в любой момент видеть, что происходит с аккаунтами, контентом и трафиком.",
      "faq.q2": "Сколько контента нужно снимать?",
      "faq.a2": "Мы стремимся к минимально достаточному объёму. После знакомства команда собирает понятный план под твой формат, стиль и ограничения.",
      "faq.q3": "Как считается доля модели?",
      "faq.a3": "Модель получает 40% от чистой прибыли по прозрачной и заранее понятной схеме. Детали и состав расходов фиксируются до старта.",
      "faq.q4": "Что происходит после первого сообщения?",
      "faq.a4": "Коротко знакомимся, обсуждаем текущую точку, цели и границы, затем показываем реалистичный план запуска без давления и обязательств.",
      "final.kicker": "Твоя следующая глава",
      "final.title": "Не работать на агентство.<br><em>Работать вместе с ним.</em>",
      "final.text": "Напиши нам. Без длинных форм, спама и продажного спектакля — просто обсудим, подходим ли мы друг другу.",
      "footer.line": "Model-first growth · Transparent · Scalable"
    }
  };

  const langButtons = [...document.querySelectorAll(".lang-button")];
  const translatableNodes = [...document.querySelectorAll("[data-i18n]")];
  const metaDescription = document.querySelector('meta[name="description"]');
  const gallery = document.getElementById("caseGallery");
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const supportedLanguages = Object.keys(translations);
  const caseLayouts = [
    "is-wide", "", "is-tall", "", "", "is-wide", "", "is-tall",
    "", "", "is-wide", "", "", "is-wide"
  ];

  let activeLanguage = "en";
  let activeCase = 1;
  const observedReveals = new WeakSet();

  function languageFromBrowser() {
    const browserLanguage = (navigator.language || "en").slice(0, 2).toLowerCase();
    return supportedLanguages.includes(browserLanguage) ? browserLanguage : "en";
  }

  function getInitialLanguage() {
    try {
      const saved = localStorage.getItem("virgin-agency-language");
      if (supportedLanguages.includes(saved)) return saved;
    } catch (error) {
      // Storage can be unavailable in privacy modes; browser language still works.
    }
    return languageFromBrowser();
  }

  function setLanguage(language) {
    activeLanguage = supportedLanguages.includes(language) ? language : "en";
    const dictionary = translations[activeLanguage];

    document.documentElement.lang = activeLanguage;
    document.title = dictionary["meta.title"];
    if (metaDescription) metaDescription.content = dictionary["meta.description"];

    translatableNodes.forEach((node) => {
      const key = node.dataset.i18n;
      if (dictionary[key] !== undefined) node.innerHTML = dictionary[key];
    });

    langButtons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.lang === activeLanguage));
    });

    try {
      localStorage.setItem("virgin-agency-language", activeLanguage);
    } catch (error) {
      // The language still changes for the current page view.
    }

    renderGallery();
    if (lightbox.open) updateLightbox(activeCase);
  }

  function caseLabel(index) {
    return `${translations[activeLanguage]["cases.item"]} ${String(index).padStart(2, "0")}`;
  }

  function renderGallery() {
    gallery.innerHTML = "";

    for (let index = 1; index <= 14; index += 1) {
      const article = document.createElement("article");
      article.className = `case-card reveal ${caseLayouts[index - 1]}`.trim();

      const button = document.createElement("button");
      button.type = "button";
      button.className = "case-card-button";
      button.setAttribute("aria-label", `${caseLabel(index)} — ${translations[activeLanguage]["cases.caption"]}`);

      const image = document.createElement("img");
      image.src = `assets/cases/${index}.jpeg`;
      image.alt = `${caseLabel(index)} — ${translations[activeLanguage]["cases.caption"]}`;
      image.loading = index <= 2 ? "eager" : "lazy";
      image.decoding = "async";

      const meta = document.createElement("span");
      meta.className = "case-card-meta";
      meta.innerHTML = `<span>${caseLabel(index)}<br>${translations[activeLanguage]["cases.caption"]}</span><b aria-hidden="true">↗</b>`;

      image.addEventListener("error", () => {
        article.remove();
      });
      button.addEventListener("click", () => openLightbox(index));

      button.append(image, meta);
      article.append(button);
      gallery.append(article);
    }

    observeReveals();
  }

  function updateLightbox(index) {
    activeCase = index < 1 ? 14 : index > 14 ? 1 : index;
    lightboxImage.src = `assets/cases/${activeCase}.jpeg`;
    lightboxImage.alt = `${caseLabel(activeCase)} — ${translations[activeLanguage]["cases.caption"]}`;
    lightboxCaption.textContent = `${caseLabel(activeCase)} / 14 — ${translations[activeLanguage]["cases.caption"]}`;

    const nextIndex = activeCase === 14 ? 1 : activeCase + 1;
    const preload = new Image();
    preload.src = `assets/cases/${nextIndex}.jpeg`;
  }

  function openLightbox(index) {
    updateLightbox(index);
    document.body.classList.add("lightbox-open");
    if (typeof lightbox.showModal === "function") {
      lightbox.showModal();
    } else {
      lightbox.setAttribute("open", "");
    }
  }

  function closeLightbox() {
    document.body.classList.remove("lightbox-open");
    if (typeof lightbox.close === "function") {
      lightbox.close();
    } else {
      lightbox.removeAttribute("open");
    }
  }

  const revealObserver = "IntersectionObserver" in window
    ? new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" })
    : null;

  function observeReveals() {
    document.querySelectorAll(".reveal").forEach((element) => {
      if (observedReveals.has(element)) return;
      observedReveals.add(element);
      if (revealObserver && !prefersReducedMotion) {
        revealObserver.observe(element);
      } else {
        element.classList.add("is-visible");
      }
    });
  }

  function setupCounter() {
    const counter = document.querySelector("[data-count]");
    if (!counter || prefersReducedMotion || !("IntersectionObserver" in window)) return;

    const target = Number(counter.dataset.count);
    counter.textContent = "0";

    const counterObserver = new IntersectionObserver((entries, observer) => {
      if (!entries[0].isIntersecting) return;
      const start = performance.now();
      const duration = 1200;

      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        counter.textContent = String(Math.round(target * eased));
        if (progress < 1) requestAnimationFrame(tick);
      }

      requestAnimationFrame(tick);
      observer.disconnect();
    }, { threshold: 0.55 });

    counterObserver.observe(counter);
  }

  function setupHeaderAndProgress() {
    const header = document.getElementById("siteHeader");
    const progress = document.getElementById("scrollProgress");
    let ticking = false;

    function update() {
      const scrollTop = window.scrollY;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = scrollable > 0 ? scrollTop / scrollable : 0;
      header.classList.toggle("is-scrolled", scrollTop > 24);
      progress.style.transform = `scaleX(${Math.min(Math.max(ratio, 0), 1)})`;
      ticking = false;
    }

    window.addEventListener("scroll", () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    }, { passive: true });

    update();
  }

  function setupMenu() {
    const toggle = document.getElementById("menuToggle");
    const nav = document.getElementById("mainNav");

    function closeMenu() {
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
      document.body.classList.remove("menu-open");
    }

    toggle.addEventListener("click", () => {
      const opening = toggle.getAttribute("aria-expanded") !== "true";
      toggle.setAttribute("aria-expanded", String(opening));
      nav.classList.toggle("is-open", opening);
      document.body.classList.toggle("menu-open", opening);
    });

    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1180) closeMenu();
    });
  }

  function setupPointerEffects() {
    if (prefersReducedMotion || !window.matchMedia("(pointer: fine)").matches) return;

    const root = document.documentElement;
    const heroArt = document.getElementById("heroArt");

    window.addEventListener("pointermove", (event) => {
      document.body.classList.add("has-pointer");
      root.style.setProperty("--mouse-x", `${event.clientX}px`);
      root.style.setProperty("--mouse-y", `${event.clientY}px`);
    }, { passive: true });

    heroArt.addEventListener("pointermove", (event) => {
      const rect = heroArt.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      heroArt.style.setProperty("--rotate-x", `${y * -5}deg`);
      heroArt.style.setProperty("--rotate-y", `${x * 7}deg`);
    });

    heroArt.addEventListener("pointerleave", () => {
      heroArt.style.setProperty("--rotate-x", "0deg");
      heroArt.style.setProperty("--rotate-y", "0deg");
    });

    document.querySelectorAll(".magnetic").forEach((element) => {
      element.addEventListener("pointermove", (event) => {
        const rect = element.getBoundingClientRect();
        const x = (event.clientX - rect.left - rect.width / 2) * 0.08;
        const y = (event.clientY - rect.top - rect.height / 2) * 0.08;
        element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
      element.addEventListener("pointerleave", () => {
        element.style.transform = "";
      });
    });
  }

  function setupFaq() {
    const details = [...document.querySelectorAll(".faq-list details")];
    details.forEach((item) => {
      item.addEventListener("toggle", () => {
        if (!item.open) return;
        details.forEach((other) => {
          if (other !== item) other.removeAttribute("open");
        });
      });
    });
  }

  langButtons.forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });

  document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
  document.getElementById("lightboxPrev").addEventListener("click", () => updateLightbox(activeCase - 1));
  document.getElementById("lightboxNext").addEventListener("click", () => updateLightbox(activeCase + 1));
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  lightbox.addEventListener("close", () => {
    document.body.classList.remove("lightbox-open");
  });

  document.addEventListener("keydown", (event) => {
    if (!lightbox.open) return;
    if (event.key === "ArrowLeft") updateLightbox(activeCase - 1);
    if (event.key === "ArrowRight") updateLightbox(activeCase + 1);
  });

  document.getElementById("year").textContent = String(new Date().getFullYear());

  setupMenu();
  setupHeaderAndProgress();
  setupPointerEffects();
  setupFaq();
  setupCounter();
  setLanguage(getInitialLanguage());
  observeReveals();
})();
