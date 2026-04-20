// ── DATA ──
const movies = [
  { id:1, title:"Cosmos Eterno", year:2024, genre:"sci-fi", rating:"9.1", duration:"2h 12m", desc:"Una misión espacial descubre vida en los confines del universo conocido.", img:"https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&q=80", wide:"https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=700&q=80" },
  { id:2, title:"Sombras del Pasado", year:2023, genre:"drama", rating:"8.8", duration:"1h 58m", desc:"Un detective busca respuestas en una ciudad que guarda oscuros secretos.", img:"https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&q=80", wide:"https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=700&q=80" },
  { id:3, title:"Tormenta Roja", year:2024, genre:"accion", rating:"8.5", duration:"2h 5m", desc:"Un agente infiltrado en el corazón de una red criminal internacional.", img:"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=80", wide:"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=700&q=80" },
  { id:4, title:"El Jardín Secreto", year:2023, genre:"romance", rating:"8.2", duration:"1h 45m", desc:"Dos almas solitarias se encuentran entre flores y secretos olvidados.", img:"https://images.unsplash.com/photo-1490750967868-88df5691cc97?w=400&q=80", wide:"https://images.unsplash.com/photo-1490750967868-88df5691cc97?w=700&q=80" },
  { id:5, title:"Fractura", year:2024, genre:"terror", rating:"8.0", duration:"1h 52m", desc:"Una familia descubre que su nueva casa esconde algo más que recuerdos.", img:"https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&q=80", wide:"https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=700&q=80" },
  { id:6, title:"Código Omega", year:2024, genre:"sci-fi", rating:"8.7", duration:"2h 20m", desc:"Un hacker descubre una conspiración que abarca múltiples realidades.", img:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80", wide:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=700&q=80" },
  { id:7, title:"La Última Danza", year:2023, genre:"drama", rating:"9.0", duration:"2h 1m", desc:"Una bailarina sacrifica todo por alcanzar la perfección en su arte.", img:"https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=400&q=80", wide:"https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=700&q=80" },
  { id:8, title:"Océano Salvaje", year:2024, genre:"documental", rating:"9.3", duration:"1h 38m", desc:"Una inmersión en las profundidades inexploradas del mar más profundo.", img:"https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=400&q=80", wide:"https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=700&q=80" },
  { id:9, title:"Risas Infinitas", year:2024, genre:"comedia", rating:"7.9", duration:"1h 42m", desc:"Un comediante intenta salvar su carrera con el show de su vida.", img:"https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&q=80", wide:"https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=700&q=80" },
  { id:10, title:"Viento Norte", year:2023, genre:"accion", rating:"8.4", duration:"1h 55m", desc:"En las montañas congeladas, un sobreviviente lucha contra lo imposible.", img:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80", wide:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&q=80" },
  { id:11, title:"Amor en Roma", year:2024, genre:"romance", rating:"8.1", duration:"1h 50m", desc:"Entre arte y pasión, dos viajeros encuentran amor eterno en la ciudad eterna.", img:"https://images.unsplash.com/photo-1525874684015-58379d421a52?w=400&q=80", wide:"https://images.unsplash.com/photo-1525874684015-58379d421a52?w=700&q=80" },
  { id:12, title:"Dimensión X", year:2024, genre:"sci-fi", rating:"8.9", duration:"2h 15m", desc:"Portal interdimensional, realidades que colapsan, una sola decisión lo cambia todo.", img:"https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&q=80", wide:"https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=700&q=80" },
];

const featuredMovie = {
  title:"El Último Horizonte", year:2024, genre:"Ciencia Ficción", rating:"9.2", duration:"2h 34m",
  desc:"En un futuro donde la humanidad coloniza mundos distantes, una exploradora descubre que el cosmos oculta un secreto que cambiará la comprensión de la existencia para siempre.",
  img:"https://images.unsplash.com/photo-1534796636912-3b584e6f32e6?w=800&q=80",
  wide:"https://images.unsplash.com/photo-1534796636912-3b584e6f32e6?w=800&q=80"
};

const continueWatching = [
  { ...movies[0], progress: 72 },
  { ...movies[2], progress: 45 },
  { ...movies[6], progress: 88 },
  { ...movies[4], progress: 23 },
];

const categories = [
  { name:"Acción",     emoji:"💥", count:"1,240 títulos", color:"linear-gradient(135deg,#e8536a,#b02040)" },
  { name:"Comedia",    emoji:"😂", count:"980 títulos",   color:"linear-gradient(135deg,#f0b429,#c07010)" },
  { name:"Drama",      emoji:"🎭", count:"2,100 títulos", color:"linear-gradient(135deg,#5b5fcf,#3a3ea0)" },
  { name:"Terror",     emoji:"👻", count:"640 títulos",   color:"linear-gradient(135deg,#2d2d4e,#1a1a30)" },
  { name:"Sci-Fi",     emoji:"🚀", count:"890 títulos",   color:"linear-gradient(135deg,#00b4d8,#0077a8)" },
  { name:"Romance",    emoji:"💕", count:"760 títulos",   color:"linear-gradient(135deg,#ff6b9d,#c73d7a)" },
  { name:"Documental", emoji:"🎬", count:"1,450 títulos", color:"linear-gradient(135deg,#2d6a4f,#1b4332)" },
  { name:"Animación",  emoji:"✨", count:"520 títulos",   color:"linear-gradient(135deg,#7b2d8b,#4a1060)" },
];

// ── CARD FACTORIES ──
function createCard(m) {
  const div = document.createElement('div');
  div.className = 'card';
  div.innerHTML = `
    <img class="card-img" src="${m.img}" alt="${m.title}" loading="lazy">
    <button class="card-play" onclick="event.stopPropagation(); openModal(movies.find(x=>x.id===${m.id})||featuredMovie)">▶</button>
    <div class="card-overlay">
      <div class="card-title">${m.title}</div>
      <div class="card-meta">
        <span class="card-rating">★ ${m.rating}</span>
        <span>${m.year}</span>
        <span>${m.duration}</span>
      </div>
    </div>
    <div class="card-info">
      <div class="card-name">${m.title}</div>
      <div class="card-sub">${m.year} · ${m.genre}</div>
    </div>`;
  div.onclick = () => openModal(m);
  return div;
}

function createWideCard(m) {
  const div = document.createElement('div');
  div.className = 'wide-card';
  div.innerHTML = `
    <img src="${m.wide || m.img}" alt="${m.title}" loading="lazy">
    <div class="card-info">
      <div class="card-name">${m.title}</div>
      <div class="card-sub" style="margin-bottom:8px">${m.duration} · ${Math.floor(m.progress)}% completado</div>
      <div class="progress-bar">
        <div class="progress-fill" style="width:${m.progress}%"></div>
      </div>
    </div>`;
  div.onclick = () => openModal(m);
  return div;
}

// ── POPULATE ROWS ──
function populateRows() {
  // Continuar viendo
  const cRow = document.getElementById('continue-row');
  continueWatching.forEach(m => cRow.appendChild(createWideCard(m)));

  // Tendencias (aleatorio)
  const tRow = document.getElementById('trending-row');
  [...movies].sort(() => Math.random() - 0.5).slice(0, 8).forEach(m => tRow.appendChild(createCard(m)));

  // Nuevos lanzamientos
  const nRow = document.getElementById('new-row');
  movies.filter(m => m.year == 2024).forEach(m => nRow.appendChild(createCard(m)));

  // Mejor calificadas
  const topRow = document.getElementById('top-row');
  [...movies].sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating)).forEach(m => topRow.appendChild(createCard(m)));

  // Categorías
  const catsGrid = document.getElementById('cats-grid');
  categories.forEach(c => {
    const div = document.createElement('div');
    div.className = 'cat-card';
    div.style.background = c.color;
    div.innerHTML = `
      <div class="cat-emoji">${c.emoji}</div>
      <div class="cat-name">${c.name}</div>
      <div class="cat-count">${c.count}</div>`;
    div.onclick = () => showToast(`Explorando ${c.name} ${c.emoji}`);
    catsGrid.appendChild(div);
  });
}

// ── GENRE FILTER ──
function filterGenre(btn, genre) {
  document.querySelectorAll('.genre-chip').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  const tRow = document.getElementById('trending-row');
  tRow.innerHTML = '';
  const filtered = genre === 'all' ? movies : movies.filter(m => m.genre === genre);
  (filtered.length ? filtered : movies).forEach(m => tRow.appendChild(createCard(m)));
  if (!filtered.length) showToast('Sin resultados para ese género');
}

// ── MODAL ──
function openModal(m) {
  document.getElementById('modal-img').src = m.wide || m.img;
  document.getElementById('modal-title').textContent = m.title;
  document.getElementById('modal-meta').innerHTML = `
    <span class="badge">★ ${m.rating}</span>
    <span>${m.year}</span>
    <span>${m.duration}</span>
    <span>${m.genre}</span>`;
  document.getElementById('modal-desc').textContent = m.desc;
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function closeModalOutside(e) {
  if (e.target === document.getElementById('modal-overlay')) closeModal();
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ── TOAST ──
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ── NAV SCROLL ──
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 40);
});

// ── AI RECOMMENDER ──
async function askAI() {
  const prompt = document.getElementById('ai-prompt').value.trim();
  if (!prompt) { showToast('Escribe algo primero 😊'); return; }

  const btn = document.getElementById('ai-btn');
  const btnText = document.getElementById('ai-btn-text');
  const result = document.getElementById('ai-result');

  btn.disabled = true;
  btnText.innerHTML = '<span class="spinner"></span> Pensando...';
  result.classList.remove('visible');

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        system: `Eres el asistente cinematográfico de CineVerse, una plataforma de streaming premium.
Recomienda películas basándote en lo que el usuario describe.
Responde en español con este formato exacto (sin markdown, sin asteriscos):
TÍTULO RECOMENDADO: [título inventado que suene cinematográfico]
GÉNERO: [género]
CALIFICACIÓN: [número del 7.0 al 9.9]
DURACIÓN: [formato: Xh Xm]
SINOPSIS: [2-3 oraciones evocadoras y cinematográficas]
POR QUÉ TE GUSTARÁ: [1-2 oraciones personalizadas basadas en lo que el usuario pidió]
Sé creativo, poético y apasionado por el cine.`,
        messages: [{ role: "user", content: `El usuario busca: "${prompt}"` }]
      })
    });

    const data = await response.json();
    const text = data.content?.[0]?.text || '';

    const titleMatch = text.match(/TÍTULO RECOMENDADO:\s*(.+)/i);
    const rest = text.replace(/TÍTULO RECOMENDADO:\s*.+/i, '').trim();

    document.getElementById('ai-result-title').textContent = titleMatch ? titleMatch[1] : '🎬 Tu recomendación';
    document.getElementById('ai-result-body').innerHTML = rest
      .replace(/GÉNERO:/g,           '<strong style="color:var(--gold)">Género:</strong>')
      .replace(/CALIFICACIÓN:/g,     '<strong style="color:var(--gold)">Calificación:</strong>')
      .replace(/DURACIÓN:/g,         '<strong style="color:var(--gold)">Duración:</strong>')
      .replace(/SINOPSIS:/g,         '<br><strong style="color:var(--gold)">Sinopsis:</strong>')
      .replace(/POR QUÉ TE GUSTARÁ:/g, '<br><strong style="color:var(--indigo-bright)">¿Por qué te gustará?</strong>')
      .replace(/\n/g, ' ');

    result.classList.add('visible');
    showToast('¡Recomendación lista! 🎬');
  } catch (err) {
    document.getElementById('ai-result-title').textContent = '✨ Recomendación';
    document.getElementById('ai-result-body').textContent = 'Parece que hay un problema de conexión. ¡Intenta de nuevo!';
    result.classList.add('visible');
  }

  btn.disabled = false;
  btnText.textContent = '✨ Recomendar';
}

document.getElementById('ai-prompt').addEventListener('keydown', e => {
  if (e.key === 'Enter') askAI();
});

// ── INIT ──
populateRows();
