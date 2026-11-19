/* =========================================================
   Sayan Ghosh: portfolio behaviour
   Theme, departures board, page images, reel, archive,
   counters, marquees, railway line, pointer effects,
   section highlights, glossary pop-ups and copy email.
   ========================================================= */
(function () {
  'use strict';

  var root = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  var darkScheme = window.matchMedia('(prefers-color-scheme: dark)');

  function onMediaChange(query, handler) {
    if (query.addEventListener) { query.addEventListener('change', handler); }
    else if (query.addListener) { query.addListener(handler); }
  }

  function esc(value) {
    return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  /* ---------- 1. Every piece, for the archive (page order) ---------- */
  var CLIPS = 'clips/';
  var STORIES = [
    { outlet: 'toi', outletName: 'The Times of India', title: 'Flaming Greens', url: CLIPS + 'flaming-greens.html', credit: 'With Riyan Ramanath. Words, editing and graphics by Sayan Ghosh.', summary: 'Odisha logged 139,000 forest fire detections (1.39 lakh) between November 2019 and June 2024, more than any other state.', tags: ['Data', 'Society & environment'], featured: true, cue: 'See the full page' },
    { outlet: 'toi', outletName: 'The Times of India', title: 'Exploring Odisha’s Mineral Bounty', url: CLIPS + 'odisha-mineral-bounty.html', credit: 'By Sayan Ghosh', summary: 'Odisha holds 98% of India’s chromite deposits. Its mineral output more than doubled in a decade and its mining revenue rose ninefold.', tags: ['Data', 'Economy'], featured: true, cue: 'See the full page' },
    { outlet: 'toi', outletName: 'The Times of India', title: 'When the Sky Turns Grey', url: CLIPS + 'when-the-sky-turns-grey.html', credit: 'With Minati Singha and Hemanta Pradhan', summary: 'Odisha recorded 2,270 lightning deaths from 2016 to 2022, about 11% of India’s total and second only to Madhya Pradesh.', tags: ['Data', 'Society & environment'], cue: 'See the full page' },
    { outlet: 'toi', outletName: 'The Times of India', title: 'Odisha’s Potato Paradox', url: CLIPS + 'odisha-potato-paradox.html', credit: 'By Sayan Ghosh', summary: 'Odisha planted 172% more land with potatoes, yet yield per hectare fell 12%.', tags: ['Data', 'Economy'], featured: true, cue: 'See the full page' },
    { outlet: 'toi', outletName: 'The Times of India', title: 'Why Biden-Harris Failed Despite This', url: CLIPS + 'biden-harris.html', credit: 'By Sayan Ghosh', summary: 'Strong US headline numbers set against what voters felt in prices and real wages.', tags: ['Data', 'Elections', 'Economy'], cue: 'See the full page' },
    { outlet: 'toi', outletName: 'The Times of India', title: 'Women’s Safety Shield', url: CLIPS + 'womens-safety-shield.html', credit: 'Data and graphics by Sayan Ghosh; story by Debabrata Mohapatra', summary: 'Odisha ranked seventh in India for crimes against women from 2013 to 2022, and its recorded cases rose 19% between 2019 and 2024.', tags: ['Data', 'Society & environment'], cue: 'See the full page' },
    { outlet: 'toi', outletName: 'The Times of India', title: 'Odia Overseas Electors: From 0 to 184 in a Decade', url: CLIPS + 'odia-overseas-electors.html', credit: 'By Sayan Ghosh', summary: 'Registered overseas electors from Odisha rose from none in 2014 to 42 in 2019 and 184 in 2024.', tags: ['Data', 'Elections'], cue: 'See the full page' },
    { outlet: 'toi', outletName: 'The Times of India', title: 'Decoding the Numbers', url: CLIPS + 'odisha-budget-numbers.html', credit: 'Text and visualisation by Sayan Ghosh', summary: 'Five charts on Odisha’s economy for the state budget, from growth by sector to a per capita income gap with India that narrowed to 9%.', tags: ['Data', 'Economy'], cue: 'See the five charts' },
    { outlet: 'toi', outletName: 'The Times of India', title: '3rd Phase Polling: A Quick Look', url: CLIPS + 'third-phase-polling.html', credit: 'By Sayan Ghosh', summary: 'Assets and criminal cases declared by candidates in Odisha’s third phase.', tags: ['Data', 'Elections'], cue: 'See the full page' },
    { outlet: 'toi', outletName: 'The Times of India', title: '4th Phase Polling: A Quick Look', url: CLIPS + 'fourth-phase-polling.html', credit: 'With Riyan Ramanath', summary: 'Odisha’s final phase, read through 66 Lok Sabha and 394 assembly candidates’ declarations.', tags: ['Data', 'Elections'], cue: 'See the full page' },
    { outlet: 'toi', outletName: 'The Times of India', title: '1st Phase Polling: A Quick Check', url: CLIPS + 'first-phase-polling.html', credit: 'With Riyan Ramanath', summary: '19% of Lok Sabha candidates in Odisha’s first phase declared criminal cases.', tags: ['Data', 'Elections'], cue: 'See the full page' },
    { outlet: 'toi', outletName: 'The Times of India', title: 'India sells much more to US than it buys from it', url: CLIPS + 'statoistics-us-trade.html', credit: 'By Sayan Ghosh', summary: 'India’s trade surplus with the US more than doubled in ten years, from $16.6 billion in 2013-14 to $35.3 billion in 2023-24, across the Obama, Trump and Biden years.', tags: ['Data', 'Economy', 'Geopolitics'], cue: 'See the full page' },
    { outlet: 'toi', outletName: 'The Times of India', title: 'IPL’s Boundary Rush In Two Trendlines', url: CLIPS + 'statoistics-ipl.html', credit: 'By Sayan Ghosh', summary: 'A four every 7.5 balls in the 2024 IPL, against every 9 in 2021, and a six every 12.9 balls, against 20.2.', tags: ['Data', 'Sport'], cue: 'See the full page' },
    { outlet: 'toi', outletName: 'The Times of India', title: 'Has Indian Tax System Become More Pro-Poor?', url: CLIPS + 'statoistics-tax.html', credit: 'By Sayan Ghosh', summary: 'Direct taxes reached 57% of India’s tax revenue in 2023-24, the highest share in 14 years.', tags: ['Data', 'Economy'], cue: 'See the full page' },
    { outlet: 'toi', outletName: 'The Times of India', title: 'Will Foreign Tourist Arrival in 2024 Beat 2019 Record?', url: CLIPS + 'statoistics-foreign-tourists.html', credit: 'By Sayan Ghosh', summary: 'Foreign tourist arrivals were climbing back towards their 2019 peak of 10.9 million, and ran 3.7% ahead of 2023 from January to August 2024.', tags: ['Data', 'Economy'], cue: 'See the full page' },
    { outlet: 'forbes', outletName: 'Forbes', title: 'The Next Big Investment Hub For Unicorns—And It’s Not China', url: 'https://www.forbes.com/sites/zengernews/2021/08/30/the-next-big-investment-hub-for-unicornsand-its-not-china/?sh=3346385b63ec', credit: 'By Sayan Ghosh for Zenger News, published on Forbes', summary: 'Why venture investors wary of China turned to India and its 58 unicorns.', tags: ['Economy', 'Geopolitics'], featured: true, cue: 'Read the story' },
    { outlet: 'diplomat', outletName: 'The Diplomat', title: 'COVID-19 Shrank India’s Burgeoning Middle Class', url: 'https://thediplomat.com/2021/08/covid-19-shrank-indias-burgeoning-middle-class/', credit: 'By Sayan Ghosh', summary: 'Pew Research Center estimates show 32 million Indians fell out of the middle class during the pandemic.', tags: ['Data', 'Economy'], cue: 'Read the story' },
    { outlet: 'diplomat', outletName: 'The Diplomat', title: 'Rape and Silence in Kashmir’s Jihad', url: 'https://thediplomat.com/2022/02/rape-and-silence-in-kashmirs-jihad/', credit: 'With Siddharthya Roy and Ojaswin Kathuria', summary: 'Survivors across Jammu and Kashmir describe years of sexual abuse by militants, set beside official crime data.', tags: ['Investigative', 'Geopolitics', 'Society & environment'], featured: true, cue: 'Read the story' },
    { outlet: 'other', outletName: 'InsideOver', lang: 'it', title: 'Stupro legittimo: silenzio colpevole nella Jihad del Kashmir', url: 'https://it.insideover.com/reportage/donne/stupro-legittimo-silenzio-colpevole-nella-jihad-del-kashmir.html', credit: 'With Ojaswin Kathuria and Siddharthya Roy', summary: 'The Italian edition of the Kashmir investigation.', tags: ['Investigative', 'Geopolitics', 'Society & environment'], cue: 'Read the story' },
    { outlet: 'diplomat', outletName: 'The Diplomat', title: 'Tuberculosis: India’s Silent Epidemic', url: 'https://thediplomat.com/2019/04/tuberculosis-indias-silent-epidemic/', credit: 'With Siddharthya Roy', summary: 'India’s tuberculosis burden, the largest of any country.', tags: ['Society & environment'], cue: 'Read the story' },
    { outlet: 'hindu', outletName: 'The Hindu', title: 'How Facebook’s recent data breach affects its users', url: 'https://www.thehindu.com/sci-tech/technology/internet/explainer-how-facebooks-recent-data-breach-affect-its-users/article34324019.ece', credit: 'By Sayan Ghosh', summary: 'What the 2021 leak of Facebook users’ personal details meant for the people whose data was exposed.', tags: ['Explainers', 'Science & tech'], featured: true, cue: 'Read the explainer' },
    { outlet: 'hindu', outletName: 'The Hindu', title: 'What is the D614G mutation in coronavirus?', url: 'https://www.thehindu.com/sci-tech/science/what-is-the-d614g-mutation-in-coronavirus/article32992120.ece', credit: 'By Sayan Ghosh', summary: 'D614G, the change to the coronavirus’s spike protein that became the most common form of the virus worldwide in 2020.', tags: ['Explainers', 'Science & tech'], featured: true, cue: 'Read the explainer' },
    { outlet: 'hindu', outletName: 'The Hindu', title: 'Little protection for sanitation workers during COVID-19 pandemic, finds survey', url: 'https://www.thehindu.com/news/national/little-protection-for-sanitation-workers-during-covid-19-pandemic-finds-survey/article32550790.ece', credit: 'By Sayan Ghosh', summary: 'A survey found that sanitation workers had little protection during the COVID-19 pandemic.', tags: ['Society & environment'], cue: 'Read the story' },
    { outlet: 'hindu', outletName: 'The Hindu', title: 'Jharkhand election 2019: JMM victorious on the back of BJP’s dipping urban vote share', url: 'https://www.thehindu.com/data/data-jharkhand-election-2019-jmm-victorious-on-the-back-of-bjps-dipping-urban-vote-share/article61602865.ece', credit: 'By Sayan Ghosh', summary: 'How falling urban support for the BJP helped the JMM win Jharkhand.', tags: ['Data', 'Elections'], cue: 'Read the story' },
    { outlet: 'hindu', outletName: 'The Hindu', title: 'Where does India stand in the Global Gender Gap Index?', url: 'https://www.thehindu.com/data/data-where-does-india-stand-in-the-global-gender-gap-index/article30494545.ece', credit: 'By Sayan Ghosh', summary: 'India’s place in the World Economic Forum’s Global Gender Gap Index.', tags: ['Explainers', 'Data', 'Society & environment'], cue: 'Read the story' },
    { outlet: 'hindu', outletName: 'The Hindu', title: 'What was the state of terrorism in the world in 2018?', url: 'https://www.thehindu.com/data/what-was-the-state-of-terrorism-in-the-world-in-2018/article30337470.ece', credit: 'By Sayan Ghosh', summary: 'How terrorism around the world changed over the year.', tags: ['Explainers', 'Data', 'Geopolitics'], cue: 'Read the story' },
    { outlet: 'hindu', outletName: 'The Hindu', title: 'News in Numbers: India’s HIV load, Maratha reservation, and more', url: 'https://www.thehindu.com/data/news-in-numbers-indias-hiv-load-maratha-reservation-and-more/article25635965.ece', credit: 'With Sumant Sen', summary: 'Key figures behind the week’s major stories, from public health estimates to state quota legislation.', tags: ['Data', 'Society & environment'], cue: 'Read the story' },
    { outlet: 'hindu', outletName: 'The Hindu', title: 'News in Numbers: Maoists killed in encounter, dengue cases in Delhi and more', url: 'https://www.thehindu.com/data/news-in-numbers-maoists-killed-in-encounter-dengue-cases-in-delhi-and-more/article25599091.ece', credit: 'With Sumant Sen', summary: 'A data round-up tracking internal security operations in Chhattisgarh, dengue cases in Delhi and national news.', tags: ['Data', 'Society & environment'], cue: 'Read the story' },
    { outlet: 'hindu', outletName: 'The Hindu', title: 'News in Numbers: Rajasthan BJP leaders expelled, California fire death toll and more', url: 'https://www.thehindu.com/data/news-in-numbers-rajasthan-bjp-leaders-expelled-california-fire-death-toll-and-more/article25579105.ece', credit: 'With Sumant Sen', summary: 'State election developments, international disaster tolls and domestic indicators explained through numbers.', tags: ['Data', 'Elections'], cue: 'Read the story' },
    { outlet: 'hindu', outletName: 'The Hindu', title: 'News in Numbers: Sabarimala protests, Delhi Metro expansion, and more', url: 'https://www.thehindu.com/data/news-in-numbers-november-19-2018/article25544390.ece', credit: 'With Sumant Sen', summary: 'The numbers behind the Sabarimala demonstrations, the 317-km span of the Delhi Metro network and national developments.', tags: ['Data', 'Society & environment'], cue: 'Read the story' },
    { outlet: 'hindu', outletName: 'The Hindu', title: 'News in Numbers: SEBI fine, Mizoram government election expenses, and more', url: 'https://www.thehindu.com/data/news-in-numbers-sebi-fine-mizoram-government-election-expenses-and-more/article62025496.ece', credit: 'With Sumant Sen', summary: 'Regulatory penalties for fraudulent share trading, state poll expenditure allocations in Mizoram and coal output growth.', tags: ['Data', 'Economy', 'Elections'], cue: 'Read the story' },
    { outlet: 'hindu', outletName: 'The Hindu', title: 'Student protests across university campuses against police action on Jamia students and Citizenship (Amendment) Act', url: 'https://www.thehindu.com/data/student-protests-across-university-campuses-against-police-action-on-jamia-students-and-citizenship-amendment-act/article30349320.ece', credit: 'With Naresh Singaravelu', summary: 'An interactive map tracking demonstrations across Indian university campuses, from JNU in Delhi to Pondicherry University.', tags: ['Data', 'Society & environment'], cue: 'Read the story' },
    { outlet: 'hindu', outletName: 'The Hindu', title: 'Journey into the Twilight Zone: A look at Rod Serling’s timeless sci-fi masterpiece', url: 'https://www.thehindu.com/entertainment/movies/journey-into-the-twilight-zone-a-look-at-rod-serlings-timeless-sci-fi-masterpiece/article31943660.ece', credit: 'By Sayan Ghosh', summary: '“The original creation by Rod Serling has no peers.” On the anthology series Rod Serling created for CBS, first broadcast in 1959.', tags: ['Film & TV'], featured: true, cue: 'Read the story' },
    { outlet: 'hindu', outletName: 'The Hindu', title: 'A new era in documentaries: The advent of the docu-series', url: 'https://www.thehindu.com/entertainment/movies/a-new-era-in-documentaries-the-advent-of-the-docu-series/article35315870.ece', credit: 'By Sayan Ghosh', summary: 'On the docu-series, and the new era it has opened for documentaries.', tags: ['Film & TV'], cue: 'Read the story' },
    { outlet: 'hindu', outletName: 'The Hindu', title: 'The haunting tale of the Friedmans', url: 'https://www.thehindu.com/entertainment/movies/the-haunting-tale-of-the-friedmans/article32611551.ece', credit: 'By Sayan Ghosh', summary: 'On Capturing the Friedmans, Andrew Jarecki’s 2003 documentary about a Long Island family and the criminal case that tore it apart.', tags: ['Film & TV'], cue: 'Read the story' },
    { outlet: 'hindu', outletName: 'The Hindu', title: '‘Pagglait’ movie review: An insightful tale of repression and tragedy, taking pride in its simplicity', url: 'https://www.thehindu.com/entertainment/movies/pagglait-movie-review-an-insightful-tale-of-repression-and-tragedy-taking-pride-in-its-simplicity/article34169701.ece', credit: 'By Sayan Ghosh', summary: 'A review of the Netflix film about a young widow who cannot bring herself to grieve.', tags: ['Film & TV'], cue: 'Read the review' },
    { outlet: 'hindu', outletName: 'The Hindu', title: '‘Ajeeb Daastaans’ review: Netflix anthology fails to break new ground but is an earnest attempt', url: 'https://www.thehindu.com/entertainment/movies/ajeeb-daastaans-review-netflix-anthology-fails-to-break-new-ground-but-is-an-earnest-attempt/article34333340.ece', credit: 'By Sayan Ghosh', summary: 'A review of the Netflix anthology of four short films.', tags: ['Film & TV'], cue: 'Read the review' },
    { outlet: 'hindu', outletName: 'The Hindu', title: '‘Searching for Sheela’ review: A problematic take on Ma Anand Sheela’s complex legacy', url: 'https://www.thehindu.com/entertainment/movies/searching-for-sheela-review-a-problematic-take-on-ma-anand-sheelas-complex-legacy/article34390472.ece', credit: 'By Sayan Ghosh', summary: 'A review of the Netflix documentary on Ma Anand Sheela, once the personal secretary of the guru Rajneesh.', tags: ['Film & TV'], cue: 'Read the review' },
    { outlet: 'hindu', outletName: 'The Hindu', type: 'collection', title: 'More film and television reviews', credit: '', summary: 'Reviews for The Hindu, including Scam 1992, Bombay Begums, Tandav and Jupiter’s Legacy, as listed on Rotten Tomatoes.', tags: ['Film & TV'], links: [
      { label: 'Film reviews on Rotten Tomatoes', url: 'https://www.rottentomatoes.com/critics/sayan-ghosh/movies' },
      { label: 'Television reviews on Rotten Tomatoes', url: 'https://www.rottentomatoes.com/critics/sayan-ghosh/tv' }
    ] },
    { outlet: 'hindu', outletName: 'The Hindu', title: 'Manual scavenger rehabilitation budget drops', url: 'https://www.thehindu.com/news/national/manual-scavenger-rehabilitation-budget-drops/article25709845.ece', credit: 'With Sumant Sen', summary: 'Manual scavenging in numbers: 13,973 manual scavengers identified by December 2018, 11,563 of them in Uttar Pradesh, as sewer deaths went on and the budget for their self-employment schemes fell from ₹448 crore in 2014-15 to ₹5 crore in 2017-18.', tags: ['Data', 'Society & environment'], cue: 'Read the story' },
    { outlet: 'other', outletName: 'The Indian Express', title: 'Osmanabad’s Girish Badole ranks 20 in UPSC exam', url: 'https://indianexpress.com/article/education/osmanabads-girish-badole-ranks-20-in-upsc-exam/', credit: '', summary: 'Girish Badole came 20th in India’s civil services exam.', tags: ['Society & environment'], cue: 'Read the story' },
    { outlet: 'other', outletName: 'The Indian Express', type: 'collection', title: 'Three print clippings', credit: '', summary: 'Stories from the print edition, clipped from the paper’s e-paper.', tags: ['Society & environment'], links: [
      { label: 'Open the first clipping', url: 'http://epaper.indianexpress.com/c/35928878' },
      { label: 'Open the second clipping', url: 'http://epaper.indianexpress.com/c/35928942' },
      { label: 'Open the third clipping', url: 'http://epaper.indianexpress.com/c/35928861' }
    ] },
    { outlet: 'other', outletName: 'Asia Fund Managers', title: 'China luxury market to make a comeback in 2023', url: 'https://asiafundmanagers.com/us/china-luxury-market-to-make-a-comeback-in-2023/', credit: 'For VaR Value Research & Media', summary: 'Why China’s luxury market was expected to recover in 2023, written for professional investors.', tags: ['Economy'], cue: 'Read the story' }
  ];

  var ARCHIVE_TAGS = ['All', 'Investigative', 'Explainers', 'Data', 'Elections', 'Economy', 'Geopolitics', 'Society & environment', 'Science & tech', 'Film & TV', 'Sport'];
  var ARROW = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M7 17L17 7M9 7h8v8"/></svg>';
  var NEW_TAB = '<span class="sr-only"> (opens in a new tab)</span>';

  /* ---------- 2. Light and dark theme ---------- */
  var themeToggle = document.getElementById('theme-toggle');
  function currentTheme() {
    var chosen = root.getAttribute('data-theme');
    if (chosen === 'dark' || chosen === 'light') { return chosen; }
    return darkScheme.matches ? 'dark' : 'light';
  }
  function syncThemeToggle() {
    themeToggle.setAttribute('aria-pressed', currentTheme() === 'dark' ? 'true' : 'false');
  }
  themeToggle.addEventListener('click', function () {
    var next = currentTheme() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('sg-theme', next); } catch (e) {}
    syncThemeToggle();
  });
  onMediaChange(darkScheme, syncThemeToggle);
  if (window.MutationObserver) {
    new MutationObserver(syncThemeToggle).observe(root, { attributes: true, attributeFilter: ['data-theme'] });
  }
  syncThemeToggle();

  /* ---------- 3. The split-flap departures board ---------- */
  var FLAP_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var canAnimate = typeof Element !== 'undefined' && !!Element.prototype.animate;

  function glyph(c) { return c === ' ' ? ' ' : c; }

  function showChar(item, c, animate) {
    if (animate && canAnimate && !reduceMotion.matches) {
      item.leafFace.textContent = glyph(item.value);
      item.leaf.animate(
        [{ opacity: 1, transform: 'rotateX(0deg)' }, { opacity: 1, transform: 'rotateX(-90deg)' }],
        { duration: 70, easing: 'ease-in' }
      );
    }
    item.face.textContent = glyph(c);
    item.value = c;
  }

  function pad(text, width) {
    text = String(text).toUpperCase();
    while (text.length < width) { text += ' '; }
    return width ? text.slice(0, width) : text;
  }

  function buildFlaps(el) {
    var text = pad(el.getAttribute('data-flap') || el.textContent, Number(el.getAttribute('data-width')) || 0);
    el.textContent = '';
    el.setAttribute('aria-hidden', 'true');
    el.flaps = [];
    for (var i = 0; i < text.length; i += 1) {
      var flap = document.createElement('span');
      flap.className = 'flap';
      var face = document.createElement('span');
      var leaf = document.createElement('span');
      leaf.className = 'flap-leaf';
      var leafFace = document.createElement('span');
      leaf.appendChild(leafFace);
      flap.appendChild(face);
      flap.appendChild(leaf);
      el.appendChild(flap);
      var item = { face: face, leaf: leaf, leafFace: leafFace, value: ' ' };
      showChar(item, text.charAt(i), false);
      el.flaps.push(item);
    }
  }

  function spinTo(el, target, opts) {
    opts = opts || {};
    if (!el.flaps) { return; }
    target = pad(target, el.flaps.length);
    el.flaps.forEach(function (item, i) {
      var finalChar = target.charAt(i);
      if (reduceMotion.matches) { showChar(item, finalChar, false); return; }
      if (opts.onlyChanged && item.value === finalChar) { return; }
      var steps = (opts.minSteps || 4) + Math.floor(Math.random() * (opts.extraSteps || 7));
      var token = {};
      item.token = token;
      var n = 0;
      function tick() {
        if (item.token !== token) { return; }
        if (n >= steps) { showChar(item, finalChar, true); return; }
        showChar(item, FLAP_CHARS.charAt(Math.floor(Math.random() * FLAP_CHARS.length)), true);
        n += 1;
        window.setTimeout(tick, opts.speed || 55);
      }
      window.setTimeout(tick, (opts.delay || 0) + i * (opts.stagger || 20));
    });
  }

  var flapEls = Array.prototype.slice.call(document.querySelectorAll('[data-flap]'));
  flapEls.forEach(buildFlaps);

  /* The Cardiff clock: useful for editors in other time zones */
  var clockEl = document.getElementById('board-clock');
  var timeFormat = null;
  try { timeFormat = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }); } catch (e) {}
  function cardiffTime() { return timeFormat ? timeFormat.format(new Date()) : '--:--'; }

  window.setTimeout(function () {
    flapEls.forEach(function (el, row) {
      if (el === clockEl) { return; }
      spinTo(el, el.getAttribute('data-flap'), { delay: 250 + row * 90 });
    });
    if (clockEl) { spinTo(clockEl, cardiffTime(), { delay: 300 }); }
  }, 200);

  if (clockEl) {
    window.setInterval(function () {
      spinTo(clockEl, cardiffTime(), { onlyChanged: true, minSteps: 2, extraSteps: 3 });
    }, 15000);
  }

  /* A row flips again when the pointer passes over it */
  Array.prototype.forEach.call(document.querySelectorAll('.dep'), function (row) {
    row.addEventListener('mouseenter', function () {
      var name = row.querySelector('.flaps--dep');
      if (name) { spinTo(name, name.getAttribute('data-flap'), { minSteps: 2, extraSteps: 3, stagger: 12 }); }
    });
  });

  /* ---------- 4. Newspaper page images: shown where they load ---------- */
  Array.prototype.forEach.call(document.querySelectorAll('.page-img'), function (img) {
    function loaded() {
      if (img.naturalWidth > 0) { img.classList.add('is-loaded'); } else { img.classList.add('is-broken'); }
    }
    function failed() { img.classList.add('is-broken'); }
    if (img.complete && img.getAttribute('src')) { loaded(); }
    else {
      img.addEventListener('load', loaded);
      img.addEventListener('error', failed);
    }
  });

  /* ---------- 5. The sideways reel ---------- */
  var reel = document.getElementById('reel');
  var reelTrack = document.getElementById('reel-track');
  var reelPrev = document.getElementById('reel-prev');
  var reelNext = document.getElementById('reel-next');
  var reelBar = document.getElementById('reel-progress');

  function updateReelUI() {
    var max = reel.scrollWidth - reel.clientWidth;
    var progress = max > 1 ? reel.scrollLeft / max : 1;
    var visible = max > 1 ? reel.clientWidth / reel.scrollWidth : 1;
    if (reelBar) { reelBar.style.setProperty('--p', Math.max(visible, Math.min(1, visible + (1 - visible) * progress)).toFixed(3)); }
    reelPrev.disabled = reel.scrollLeft <= 2;
    reelNext.disabled = reel.scrollLeft >= max - 2;
  }
  function reelStep(direction) {
    var first = reelTrack.querySelector('.clip');
    var gap = parseFloat(getComputedStyle(reelTrack).columnGap) || 16;
    var step = first ? first.getBoundingClientRect().width + gap : reel.clientWidth * 0.8;
    reel.scrollBy({ left: direction * step, behavior: reduceMotion.matches ? 'auto' : 'smooth' });
  }
  if (reel) {
    reelPrev.addEventListener('click', function () { reelStep(-1); });
    reelNext.addEventListener('click', function () { reelStep(1); });
    var reelTicking = false;
    reel.addEventListener('scroll', function () {
      if (reelTicking) { return; }
      reelTicking = true;
      window.requestAnimationFrame(function () { reelTicking = false; updateReelUI(); });
    }, { passive: true });
    window.addEventListener('resize', updateReelUI);
    updateReelUI();
  }

  /* ---------- 6. Archive: search and beat filters ---------- */
  var archiveGrid = document.getElementById('archive-grid');
  var archiveFilters = document.getElementById('archive-filters');
  var archiveSearch = document.getElementById('archive-search');
  var archiveCount = document.getElementById('archive-count');
  var archiveEmpty = document.getElementById('archive-empty');
  var archiveClear = document.getElementById('archive-clear');
  var activeTag = 'All';
  var query = '';

  function normalise(text) {
    var lowered = String(text).toLowerCase();
    return lowered.normalize ? lowered.normalize('NFD').replace(/[̀-ͯ]/g, '') : lowered;
  }
  STORIES.forEach(function (s) {
    s.haystack = normalise([s.title, s.outletName, s.summary, s.credit, s.tags.join(' ')].join(' '));
  });

  function entryHTML(story) {
    var classes = 'card entry' + (story.featured ? ' entry--feature' : '');
    var lang = story.lang ? ' lang="' + esc(story.lang) + '"' : '';
    /* Every story, whether a page in the clips folder or another site, opens in a new tab */
    var target = ' target="_blank" rel="noopener"';
    var top = '<div class="card-top"><span class="outlet outlet--' + story.outlet + '">' + esc(story.outletName) + '</span></div>';
    var tags = '<ul class="entry-tags" aria-label="Topics">' + story.tags.map(function (t) { return '<li class="tag">' + esc(t) + '</li>'; }).join('') + '</ul>';
    if (story.type === 'collection') {
      return '<li class="' + classes + '" data-tilt>' + top +
        '<h3 class="entry-title">' + esc(story.title) + '</h3>' +
        '<p class="entry-summary">' + esc(story.summary) + '</p>' +
        '<ul class="entry-links">' + story.links.map(function (link) {
          return '<li><a class="entry-link" href="' + esc(link.url) + '" target="_blank" rel="noopener" data-cursor="read">' + esc(link.label) + NEW_TAB + ' ' + ARROW + '</a></li>';
        }).join('') + '</ul>' + tags + '</li>';
    }
    return '<li class="' + classes + '" data-tilt data-cursor="read">' + top +
      '<h3 class="entry-title"><a class="stretched" href="' + esc(story.url) + '"' + target + lang + '>' + esc(story.title) + NEW_TAB + '</a></h3>' +
      '<p class="entry-summary">' + esc(story.summary) + '</p>' +
      (story.credit ? '<p class="entry-credit">' + esc(story.credit) + '</p>' : '') +
      tags +
      '<span class="read-cue" aria-hidden="true">' + esc(story.cue) + ' ' + ARROW + '</span></li>';
  }

  function renderArchiveFilters() {
    archiveFilters.innerHTML = ARCHIVE_TAGS.map(function (tag) {
      return '<button class="chip" type="button" data-tag="' + esc(tag) + '" aria-pressed="' + (tag === activeTag) + '">' + esc(tag) + '</button>';
    }).join('');
  }

  function matches(story) {
    if (activeTag !== 'All' && story.tags.indexOf(activeTag) === -1) { return false; }
    if (!query) { return true; }
    return query.split(/\s+/).every(function (word) { return story.haystack.indexOf(word) !== -1; });
  }

  var archiveRendered = false;
  function renderArchive() {
    var list = STORIES.filter(matches);
    archiveGrid.innerHTML = list.map(entryHTML).join('');
    /* After the first render, a new set of pieces is dealt onto the desk */
    if (archiveRendered && root.classList.contains('motion')) { dealIn(archiveGrid.children); }
    archiveRendered = true;
    archiveEmpty.hidden = list.length > 0;
    /* Says what is showing, in words rather than numbers */
    var parts = [];
    if (activeTag !== 'All') { parts.push('tagged ' + activeTag); }
    if (query) { parts.push('matching “' + archiveSearch.value.trim() + '”'); }
    if (!parts.length) { archiveCount.textContent = 'Showing everything'; }
    else if (!list.length) { archiveCount.textContent = 'Nothing ' + parts.join(' and '); }
    else { archiveCount.textContent = 'Showing pieces ' + parts.join(' and '); }
  }

  archiveFilters.addEventListener('click', function (event) {
    var button = event.target.closest('[data-tag]');
    if (!button) { return; }
    activeTag = button.getAttribute('data-tag');
    renderArchiveFilters();
    renderArchive();
    archiveFilters.querySelector('[data-tag="' + activeTag + '"]').focus();
  });

  var searchTimer = null;
  archiveSearch.addEventListener('input', function () {
    window.clearTimeout(searchTimer);
    searchTimer = window.setTimeout(function () {
      query = normalise(archiveSearch.value.trim());
      renderArchive();
    }, 150);
  });

  archiveClear.addEventListener('click', function () {
    archiveSearch.value = '';
    query = '';
    activeTag = 'All';
    renderArchiveFilters();
    renderArchive();
    archiveSearch.focus();
  });

  renderArchiveFilters();
  renderArchive();

  /* ---------- 7. Counters: the journey tiles and the numbers behind the stories ---------- */
  function animateNumber(el, to, decimals, prefix, suffix, duration) {
    var start = null;
    function tick(now) {
      if (start === null) { start = now; }
      var t = Math.min(1, (now - start) / duration);
      var eased = 1 - Math.pow(1 - t, 3);
      el.textContent = prefix + (to * eased).toFixed(decimals) + suffix;
      if (t < 1) { window.requestAnimationFrame(tick); }
    }
    window.requestAnimationFrame(tick);
  }

  if ('IntersectionObserver' in window && !reduceMotion.matches) {
    var statsEl = document.getElementById('stats');
    var statsObserver = new IntersectionObserver(function (entries) {
      if (!entries.some(function (e) { return e.isIntersecting; })) { return; }
      statsObserver.disconnect();
      Array.prototype.forEach.call(statsEl.querySelectorAll('.num'), function (num) {
        animateNumber(num, Number(num.getAttribute('data-count')), 0, '', '', 1400);
      });
    }, { threshold: 0.4 });
    if (statsEl) { statsObserver.observe(statsEl); }

    var bgObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) { return; }
        bgObserver.unobserve(entry.target);
        var el = entry.target;
        animateNumber(el, Number(el.getAttribute('data-count-to')), Number(el.getAttribute('data-decimals')) || 0,
          el.getAttribute('data-prefix') || '', el.getAttribute('data-suffix') || '', 1600);
      });
    }, { threshold: 0.3 });
    Array.prototype.forEach.call(document.querySelectorAll('.bgstat[data-count-to]'), function (el) { bgObserver.observe(el); });
  }

  /* ---------- 8. Marquees drift, and speed up with the scroll ---------- */
  var lastScrollY = window.scrollY;
  var scrollVelocity = 0;
  var lastScrollTime = performance.now();
  window.addEventListener('scroll', function () {
    var now = performance.now();
    var dt = Math.max(16, now - lastScrollTime);
    scrollVelocity = (window.scrollY - lastScrollY) / dt * 1000;
    lastScrollY = window.scrollY;
    lastScrollTime = now;
  }, { passive: true });

  function setupMarquee(el) {
    var track = el.querySelector('.marquee-track');
    var group = track.querySelector('.marquee-group');
    var baseSpeed = Number(el.getAttribute('data-speed')) || 36;
    var direction = Number(el.getAttribute('data-direction')) || -1;
    var groupWidth = 0, offset = 0, running = false, visible = false, last = 0, boost = 0;

    function fill() {
      groupWidth = group.getBoundingClientRect().width;
      if (!groupWidth) { return; }
      var needed = Math.ceil((el.clientWidth * 2) / groupWidth) + 1;
      while (track.children.length < needed) { track.appendChild(group.cloneNode(true)); }
    }
    function frame(now) {
      if (!running) { return; }
      var dt = last ? Math.min(0.064, (now - last) / 1000) : 0.016;
      last = now;
      scrollVelocity *= 0.92;
      boost += (scrollVelocity * 0.45 - boost) * 0.12;
      offset += (baseSpeed + Math.abs(boost)) * dt * (boost < -4 ? -1 : 1);
      if (groupWidth) { offset = ((offset % groupWidth) + groupWidth) % groupWidth; }
      var x = direction < 0 ? -offset : offset - groupWidth;
      track.style.transform = 'translate3d(' + x.toFixed(2) + 'px, 0, 0)';
      window.requestAnimationFrame(frame);
    }
    function start() {
      if (running || reduceMotion.matches || !visible) { return; }
      running = true;
      last = 0;
      window.requestAnimationFrame(frame);
    }
    function stop() { running = false; }

    fill();
    window.addEventListener('resize', fill);
    if (document.fonts && document.fonts.ready) { document.fonts.ready.then(fill); }
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        visible = entries[0].isIntersecting;
        if (visible) { start(); } else { stop(); }
      }).observe(el);
    }
    onMediaChange(reduceMotion, function () {
      if (reduceMotion.matches) { stop(); track.style.transform = ''; } else { start(); }
    });
  }
  Array.prototype.forEach.call(document.querySelectorAll('[data-marquee]'), setupMarquee);

  /* ---------- 9. The railway line fills as you travel down it ---------- */
  var timeline = document.getElementById('timeline');
  var timelineItems = Array.prototype.slice.call(timeline.querySelectorAll('.tl-item'));
  var timelineTicking = false;
  function updateTimeline() {
    timelineTicking = false;
    var rect = timeline.getBoundingClientRect();
    var anchor = window.innerHeight * 0.62;
    var progress = reduceMotion.matches ? 1 : Math.max(0, Math.min(1, (anchor - rect.top) / rect.height));
    timeline.style.setProperty('--progress', progress.toFixed(3));
    timelineItems.forEach(function (item) {
      item.classList.toggle('is-active', item.getBoundingClientRect().top < anchor);
    });
  }
  window.addEventListener('scroll', function () {
    if (timelineTicking) { return; }
    timelineTicking = true;
    window.requestAnimationFrame(updateTimeline);
  }, { passive: true });
  window.addEventListener('resize', updateTimeline);
  updateTimeline();

  /* ---------- 10. Pointer effects: the READ badge and card tilt, mouse only ---------- */
  var cursor = document.getElementById('cursor');
  if (finePointer.matches && !reduceMotion.matches) {
    root.classList.add('has-cursor');
    var targetX = -100, targetY = -100, cursorX = -100, cursorY = -100;
    var cursorRunning = false;
    var tiltCard = null;

    var moveCursor = function () {
      cursorX += (targetX - cursorX) * 0.22;
      cursorY += (targetY - cursorY) * 0.22;
      cursor.style.transform = 'translate3d(' + cursorX.toFixed(1) + 'px,' + cursorY.toFixed(1) + 'px,0)';
      if (Math.abs(targetX - cursorX) > 0.2 || Math.abs(targetY - cursorY) > 0.2) {
        window.requestAnimationFrame(moveCursor);
      } else {
        cursorRunning = false;
      }
    };
    var resetTilt = function (card) {
      card.classList.remove('is-tilting');
      card.style.setProperty('--rx', '0deg');
      card.style.setProperty('--ry', '0deg');
    };

    document.addEventListener('pointermove', function (event) {
      if (event.pointerType !== 'mouse') { return; }
      targetX = event.clientX;
      targetY = event.clientY;
      cursor.classList.remove('is-hidden');
      if (!cursorRunning) { cursorRunning = true; window.requestAnimationFrame(moveCursor); }
      cursor.classList.toggle('is-read', Boolean(event.target.closest('[data-cursor="read"], .dep')));
      var card = event.target.closest('[data-tilt]');
      if (tiltCard && tiltCard !== card) { resetTilt(tiltCard); }
      tiltCard = card;
      if (card) {
        var r = card.getBoundingClientRect();
        var px = (event.clientX - r.left) / r.width;
        var py = (event.clientY - r.top) / r.height;
        card.classList.add('is-tilting');
        card.style.setProperty('--ry', ((px - 0.5) * 7).toFixed(2) + 'deg');
        card.style.setProperty('--rx', ((0.5 - py) * 7).toFixed(2) + 'deg');
        card.style.setProperty('--mx', (px * 100).toFixed(1) + '%');
        card.style.setProperty('--my', (py * 100).toFixed(1) + '%');
      }
    }, { passive: true });

    document.addEventListener('pointerout', function (event) {
      if (!event.relatedTarget) {
        cursor.classList.add('is-hidden');
        if (tiltCard) { resetTilt(tiltCard); tiltCard = null; }
      }
    });
  }

  /* ---------- 11. Highlight the current section in both menus ---------- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('[data-nav]'));
  if ('IntersectionObserver' in window) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) { return; }
        var id = entry.target.id;
        navLinks.forEach(function (link) {
          if (link.getAttribute('data-nav') === id) { link.setAttribute('aria-current', 'location'); }
          else { link.removeAttribute('aria-current'); }
        });
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    ['work', 'archive', 'journey', 'guide', 'contact'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) { sectionObserver.observe(el); }
    });
  }

  /* ---------- 12. Dotted terms open a quick explanation ---------- */
  var pop = document.getElementById('gloss-pop');
  var popTerm = document.getElementById('gloss-pop-term');
  var popDef = document.getElementById('gloss-pop-def');
  var popLive = document.getElementById('gloss-live');
  var openTerm = null;

  function entryFor(link) {
    var id = (link.getAttribute('href') || '').slice(1);
    var entry = id ? document.getElementById(id) : null;
    return entry && entry.classList.contains('gloss-entry') ? entry : null;
  }

  Array.prototype.forEach.call(document.querySelectorAll('a.term'), function (link) {
    if (!entryFor(link)) { return; }
    link.setAttribute('role', 'button');
    link.setAttribute('aria-expanded', 'false');
    link.setAttribute('aria-controls', 'gloss-pop');
  });

  function placePop(link) {
    var r = link.getBoundingClientRect();
    var docWidth = document.documentElement.clientWidth;
    var w = pop.offsetWidth;
    var h = pop.offsetHeight;
    var left = Math.min(Math.max(16, r.left + r.width / 2 - w / 2), docWidth - w - 16);
    var top = r.bottom + 10;
    if (r.bottom + h + 20 > window.innerHeight && r.top - h - 10 > 0) { top = r.top - h - 10; }
    pop.style.left = (left + window.scrollX) + 'px';
    pop.style.top = (top + window.scrollY) + 'px';
  }

  function closePop(returnFocus) {
    if (!openTerm) { return; }
    pop.hidden = true;
    openTerm.setAttribute('aria-expanded', 'false');
    if (returnFocus) { openTerm.focus(); }
    openTerm = null;
    popLive.textContent = '';
  }

  function openPop(link) {
    var entry = entryFor(link);
    if (!entry) { return; }
    if (openTerm) { closePop(false); }
    popTerm.textContent = entry.querySelector('.gloss-term').textContent;
    popDef.textContent = entry.querySelector('.gloss-def').textContent;
    pop.hidden = false;
    placePop(link);
    link.setAttribute('aria-expanded', 'true');
    openTerm = link;
    popLive.textContent = popTerm.textContent + ': ' + popDef.textContent;
  }

  document.addEventListener('click', function (event) {
    var link = event.target.closest('a.term');
    if (link && entryFor(link)) {
      event.preventDefault();
      if (openTerm === link) { closePop(false); } else { openPop(link); }
      return;
    }
    if (openTerm && !event.target.closest('#gloss-pop')) { closePop(false); }
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && openTerm) { closePop(true); }
    if ((event.key === ' ' || event.key === 'Spacebar') && event.target.matches && event.target.matches('a.term[role="button"]')) {
      event.preventDefault();
      event.target.click();
    }
  });
  window.addEventListener('resize', function () { if (openTerm) { placePop(openTerm); } });

  /* ---------- 13. Copy the email address ---------- */
  var copyButton = document.getElementById('copy-email');
  var copyStatus = document.getElementById('copy-status');
  var emailText = document.getElementById('email-text');
  function selectEmail() {
    var range = document.createRange();
    range.selectNodeContents(emailText);
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }
  copyButton.addEventListener('click', function () {
    var address = emailText.textContent.replace(/\s+/g, '');
    function failed() {
      selectEmail();
      copyStatus.textContent = 'Copying didn’t work here, so the address is selected for you to copy.';
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(address).then(function () { copyStatus.textContent = 'Email address copied.'; }, failed);
    } else {
      failed();
    }
  });

  /* ---------- 14. Motion: headlines set, pages print, numbers tick, cards land ----------
     theme.js switches on the .motion class before the page paints, and only when the
     reader hasn't asked for reduced motion. Every hidden starting state in the CSS also
     needs a class added here, so if this script never runs, nothing stays hidden. */
  function dealIn(items) {
    Array.prototype.forEach.call(items, function (el, i) {
      el.classList.add('land');
      el.style.setProperty('--tilt', (i % 2 ? 0.8 : -0.8) + 'deg');
      el.style.setProperty('--d', Math.min(i, 12) * 35 + 'ms');
      el.classList.add('is-in');
    });
  }

  /* Counts a figure up from nothing, keeping its own decimals, commas and units */
  function tickFigure(b) {
    var node = null;
    for (var c = b.firstChild; c; c = c.nextSibling) {
      if (c.nodeType === 3 && /\d/.test(c.nodeValue)) { node = c; break; }
    }
    if (!node) { return; }
    var original = node.nodeValue;
    var m = original.match(/^([^\d]*?)(\d[\d,]*(?:\.\d+)?)([\s\S]*)$/);
    if (!m || /[A-Za-z]/.test(m[1])) { return; }
    var to = parseFloat(m[2].replace(/,/g, ''));
    if (!(to >= 2)) { return; }
    var decimals = (m[2].split('.')[1] || '').length;
    var commas = m[2].indexOf(',') !== -1;
    function format(v) {
      var s = v.toFixed(decimals);
      if (commas) { var parts = s.split('.'); parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ','); s = parts.join('.'); }
      return m[1] + s + m[3];
    }
    var start = null;
    function step(now) {
      if (start === null) { start = now; }
      var t = Math.min(1, (now - start) / 1300);
      node.nodeValue = t < 1 ? format(to * (1 - Math.pow(1 - t, 3))) : original;
      if (t < 1) { window.requestAnimationFrame(step); }
    }
    node.nodeValue = format(0);
    window.requestAnimationFrame(step);
  }

  /* A newspaper page runs through the press once its card is in view and its scan has loaded */
  function pressPages(card) {
    Array.prototype.forEach.call(card.querySelectorAll('.page-shot'), function (shot) {
      var img = shot.querySelector('.page-img');
      if (!img) { return; }
      function go() { if (img.classList.contains('is-loaded')) { shot.classList.add('is-printed'); } }
      if (img.classList.contains('is-loaded') || img.classList.contains('is-broken')) { go(); }
      else { img.addEventListener('load', function () { window.setTimeout(go, 0); }); }
    });
  }

  if (root.classList.contains('motion') && 'IntersectionObserver' in window) {
    /* Publication and section names are set letter by letter */
    Array.prototype.forEach.call(document.querySelectorAll('.outlet-title, .section-title'), function (title) {
      if (title.children.length) { return; }
      var text = title.textContent.replace(/\s+/g, ' ').trim();
      var spoken = document.createElement('span');
      spoken.className = 'sr-only';
      spoken.textContent = text;
      var shown = document.createElement('span');
      shown.className = 'set';
      shown.setAttribute('aria-hidden', 'true');
      var n = 0;
      text.split(' ').forEach(function (word, w) {
        if (w) { shown.appendChild(document.createTextNode(' ')); }
        var wordEl = document.createElement('span');
        wordEl.className = 'set-word';
        Array.from(word).forEach(function (ch) {
          var chEl = document.createElement('span');
          chEl.className = 'set-ch';
          chEl.textContent = ch;
          chEl.style.setProperty('--i', String(Math.min(n, 40)));
          n += 1;
          wordEl.appendChild(chEl);
        });
        shown.appendChild(wordEl);
      });
      title.textContent = '';
      title.appendChild(spoken);
      title.appendChild(shown);
    });

    /* Headings: the rule draws, the name sets, the desk names ink in */
    var headObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) { return; }
        entry.target.classList.add('is-in');
        headObserver.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -10% 0px' });
    Array.prototype.forEach.call(document.querySelectorAll('.outlet-head, .section-head, .desk-head, .reel-bar'), function (head) {
      head.classList.add('reveal');
      headObserver.observe(head);
    });

    /* Cards land like papers dealt onto a desk: the ones that arrive together cascade */
    var landers = Array.prototype.slice.call(document.querySelectorAll(
      'main .card, .stat, .lane:not(.lane--blank), .guide-group, .contact-card'
    ));
    var landObserver = new IntersectionObserver(function (entries) {
      var arriving = entries.filter(function (e) { return e.isIntersecting; }).map(function (e) { return e.target; });
      arriving.sort(function (a, b) { return a.compareDocumentPosition(b) & 4 ? -1 : 1; });
      arriving.forEach(function (el, k) {
        var delay = Math.min(k, 6) * 90;
        el.style.setProperty('--d', delay + 'ms');
        el.classList.add('is-in');
        landObserver.unobserve(el);
        pressPages(el);
        Array.prototype.forEach.call(el.querySelectorAll('.behind-text b'), function (b) {
          window.setTimeout(function () { tickFigure(b); }, delay + 250);
        });
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    landers.forEach(function (el) {
      var place = Array.prototype.indexOf.call(el.parentElement.children, el);
      el.style.setProperty('--tilt', (place % 2 ? 0.9 : -0.9) + 'deg');
      el.classList.add('land');
      landObserver.observe(el);
    });

    /* The big hollow figures drift a little as their cards pass through the window */
    var drifting = [];
    var driftQueued = false;
    function drift() {
      driftQueued = false;
      var vh = window.innerHeight || 1;
      drifting.forEach(function (card) {
        var r = card.getBoundingClientRect();
        var p = (r.top + r.height / 2 - vh / 2) / vh;
        card.style.setProperty('--drift', (Math.max(-1, Math.min(1, p)) * 0.18).toFixed(3));
      });
    }
    function queueDrift() {
      if (!driftQueued) { driftQueued = true; window.requestAnimationFrame(drift); }
    }
    var driftObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var i = drifting.indexOf(e.target);
        if (e.isIntersecting && i === -1) { drifting.push(e.target); }
        if (!e.isIntersecting && i !== -1) { drifting.splice(i, 1); }
      });
      queueDrift();
    });
    Array.prototype.forEach.call(document.querySelectorAll('.card'), function (card) {
      if (card.querySelector(':scope > .card-bg')) { driftObserver.observe(card); }
    });
    window.addEventListener('scroll', queueDrift, { passive: true });
    window.addEventListener('resize', queueDrift);

    /* If the reader turns on reduced motion part-way through, everything settles at once */
    onMediaChange(reduceMotion, function () {
      if (reduceMotion.matches) { root.classList.remove('motion'); }
    });
  }
})();
