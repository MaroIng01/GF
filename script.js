const story = [
  {
    id: 'screen-1',
    triggerFlash: false,
    en: { title: "The Distance", text: "For five years, we were a constellation connected only by screens. We existed in the quiet space between messages and calls. We were together, yet worlds apart. I knew your voice, but I had yet to learn the reality of your presence." },
    es: { title: "La Distancia", text: "Durante cinco años, fuimos una constelación conectada solo por pantallas. Existíamos en el espacio silencioso entre mensajes y llamadas. Estábamos juntos, pero a mundos de distancia. Conocía tu voz, pero aún tenía que aprender la realidad de tu presencia." }
  },
  {
    id: 'screen-2',
    triggerFlash: true, // TRANSITION POINT: FLASH ON 'AUG 2025'
    en: { title: "August 2025. Tangier.", text: "The moment the digital signal became flesh and bone. I remember the shock of seeing you—not as a pixelated image, but as a living, breathing force. Your eyes, your smile... I was paralyzed. In that crowded room, I fell for you all over again, deeper than before." },
    es: { title: "Agosto 2025. Tánger.", text: "El momento en que la señal digital se convirtió en carne y hueso. Recuerdo la conmoción de verte, no como una imagen pixelada, sino como una fuerza viva y respirante. Tus ojos, tu sonrisa... me quedé paralizado. En esa habitación llena de gente, me enamoré de ti de nuevo, más profundamente que antes." }
  },
  {
    id: 'screen-3',
    en: { title: "The Silence", text: "We were surrounded by family, bound by the rules of the house. We couldn't touch, we couldn't speak freely. But in the silence, my eyes were screaming what my voice couldn't say. I knew then that you were the one." },
    es: { title: "El Silencio", text: "Estábamos rodeados de familia, atados por las reglas de la casa. No podíamos tocarnos, no podíamos hablar libremente. Pero en el silencio, mis ojos gritaban lo que mi voz no podía decir. Supe entonces que eras tú." }
  },
  {
    id: 'screen-4',
    en: { title: "September 2025. Marrakech.", text: "The heat of the city matched the chaos in my mind. I remember sneaking into your room at night, escaping the family drama outside. My heart was racing, pounding against my chest from the stress and the adrenaline of being alone with you." },
    es: { title: "Septiembre 2025. Marrakech.", text: "El calor de la ciudad igualaba al caos en mi mente. Recuerdo escabullirme en tu habitación por la noche, escapando del drama familiar. Mi corazón latía con fuerza, golpeando mi pecho por el estrés y la adrenalina de estar a solas contigo." }
  },
  {
    id: 'screen-5',
    en: { title: "My Home", text: "You didn't ask questions. You just reached out and placed your hand on my beating heart. You told me to calm down. I laid my head on your lap, and as your hands massaged away the stress, the world stopped. In that dark room, I didn't just find peace. I found my Home." },
    es: { title: "Mi Hogar", text: "No hiciste preguntas. Simplemente extendiste la mano y la colocaste sobre mi corazón latiente. Me dijiste que me calmara. Apoyé mi cabeza en tu regazo, y mientras tus manos masajeaban el estrés, el mundo se detuvo. En esa habitación oscura, no solo encontré paz. Encontré mi Hogar." }
  },
  {
    id: 'screen-6',
    en: { title: "The Conflict", text: "But I know I have jeopardized that home recently. I am still an engineer trying to navigate an ocean of emotions. When you say 'don't talk to me,' my logical brain obeys. It freezes. It stays silent. I am slowly learning that your words are a test, and my silence is the wrong answer." },
    es: { title: "El Conflicto", text: "Pero sé que he puesto en peligro ese hogar recientemente. Todavía soy un ingeniero tratando de navegar un océano de emociones. Cuando dices 'no me hables', mi cerebro lógico obedece. Se congela. Se queda en silencio. Estoy aprendiendo lentamente que tus palabras son una prueba, y mi silencio es la respuesta equivocada." }
  },
  {
    id: 'screen-7',
    en: { title: "The Regret", text: "I have slept when I should have fought to stay awake. I have turned away when I should have reached out. I know these mistakes hurt you. I know they make you feel alone. And I hate myself for that." },
    es: { title: "El Arrepentimiento", text: "He dormido cuando debería haber luchado para mantenerme despierto. Me he alejado cuando debería haber extendido la mano. Sé que estos errores te duelen. Sé que te hacen sentir sola. Y me odio a mí mismo por eso." }
  },
  {
    id: 'screen-8',
    en: { title: "The Learning", text: "But please understand: I am not indifferent. I am just uncalibrated. I am learning that 'go away' often means 'hold me tighter.' I am learning to read the code of your heart, not just your words." },
    es: { title: "El Aprendizaje", text: "Pero por favor entiende: no soy indiferente. Solo estoy descalibrado. Estoy aprendiendo que 'vete' a menudo significa 'abrázame más fuerte'. Estoy aprendiendo a leer el código de tu corazón, no solo tus palabras." }
  },
  {
    id: 'screen-9',
    en: { title: "The Commitment", text: "You are the peace I run to. You are the only person who can calm my racing heart. You are the best thing that has ever happened to this flawed engineer." },
    es: { title: "El Compromiso", text: "Eres la paz a la que corro. Eres la única persona que puede calmar mi corazón acelerado. Eres lo mejor que le ha pasado a este ingeniero imperfecto." }
  },
  {
    id: 'screen-10',
    en: { title: "The Truth", text: "I am committed to becoming the man who deserves you. I love you, Norhan. Beyond logic. Beyond distance. Beyond time." },
    es: { title: "La Verdad", text: "Estoy comprometido a convertirme en el hombre que te mereces. Te amo, Norhan. Más allá de la lógica. Más allá de la distancia. Más allá del tiempo." }
  }
];

// List of available images for the Floating Memory sequence
const memoryImages = [
  "IMG-20230520-WA0026.jpg", "IMG-20250916-WA0017.jpg", "Locket_1762095428213_91.jpg",
  "Screenshot_2025-09-15-01-36-15-996_com.whatsapp.jpg", "WhatsApp Image 2025-09-20 à 20.46.35_38ca1ea4.jpg",
  "WhatsApp Image 2025-09-20 à 21.02.26_00e8c27a.jpg", "WhatsApp Image 2025-09-20 à 21.47.12_de7f65b8.jpg",
  "us1.jpg", "WhatsApp Image 2025-12-31 at 04.09.24.jpeg"
];

let currentLang = 'en';
let currentStep = -1; // -1 for start
let isAnimating = false; // Add animation lock

// --- Three.js Logic ---
let scene, camera, renderer, particles;
function initThreeJS() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  const geometry = new THREE.BufferGeometry();
  const count = 2000;
  const posArray = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 15;
  }
  geometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
  const material = new THREE.PointsMaterial({
    size: 0.02, color: 0xffffff, transparent: true, opacity: 0.8,
  });
  particles = new THREE.Points(geometry, material);
  scene.add(particles);
  camera.position.z = 3;
  animate();
}

function animate() {
  requestAnimationFrame(animate);
  if (particles) {
    particles.rotation.y += 0.001;
  }
  renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
  if (camera && renderer) {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
});

function triggerFlash() {
  const overlay = document.createElement('div');
  overlay.id = 'flash-overlay';
  document.body.appendChild(overlay);
  void overlay.offsetWidth;
  overlay.classList.add('flash-active');

  setTimeout(() => {
    document.body.classList.add('light-mode');
    // Add Our Story Title
    const title = document.createElement('div');
    title.className = 'our-story-title';
    title.innerText = currentLang === 'en' ? 'OUR STORY' : 'NUESTRA HISTORIA';
    title.style.position = 'fixed';
    title.style.top = '50%';
    title.style.left = '50%';
    title.style.transform = 'translate(-50%, -50%)';
    title.style.zIndex = '3000';
    document.body.appendChild(title);

    setTimeout(() => {
      title.style.transition = 'opacity 1s';
      title.style.opacity = '0';
      setTimeout(() => title.remove(), 1000);
    }, 2500);

    if (particles) {
      particles.material.color.setHex(0x444444);
      particles.rotation.y += 5;
    }
  }, 100);
}

// --- App Logic ---

function setLanguage(lang) {
  currentLang = lang;
  const langLayer = document.getElementById('language-layer');
  langLayer.classList.add('hidden');
  setTimeout(() => {
    langLayer.style.display = 'none';
    initThreeJS();
    // Start Story
    nextStep();
  }, 1000);
  toggleMusic();
}

function renderScreen(index) {
  const app = document.getElementById('app');
  const data = story[index];
  const textData = data[currentLang];

  // Create new screen container
  const section = document.createElement('section');

  // Conditionally apply animation class
  if (data.triggerFlash && !document.body.classList.contains('light-mode')) {
    section.className = 'step'; // No animation yet
    section.style.opacity = '0'; // Force hidden
    section.style.pointerEvents = 'none';
  } else {
    section.className = 'step dream-entry'; // Normal animation
  }

  section.style.cursor = 'pointer';
  section.onclick = () => nextStep(); // Click anywhere to next

  const h1 = document.createElement('h1');
  h1.className = 'hero-text';
  h1.innerText = textData.title;

  const p = document.createElement('p');
  p.className = 'subtitle';
  p.innerText = textData.text;

  // Remove individual delays so the whole block enters 'dreamily'
  h1.style.animation = 'none';
  h1.style.opacity = '1';
  p.style.animation = 'none';
  p.style.opacity = '1';

  section.appendChild(h1);
  section.appendChild(p);

  // Check Trigger
  if (data.triggerFlash && !document.body.classList.contains('light-mode')) {
    triggerFlash();

    // Reveal content after "OUR STORY" sequence (approx 3.5s)
    setTimeout(() => {
      section.classList.add('dream-entry');
      section.style.opacity = '1';
      section.style.pointerEvents = 'auto';
    }, 3500);
  }

  app.innerHTML = '';
  app.appendChild(section);
}

function nextStep() {
  if (isAnimating) return; // Prevent double clicks

  const app = document.getElementById('app');
  const currentSection = app.querySelector('.step');

  if (currentSection && currentStep >= 0) {
    // Exit Animation
    isAnimating = true;
    currentSection.classList.remove('dream-entry');
    currentSection.classList.add('dream-exit');

    setTimeout(() => {
      currentStep++;
      if (currentStep < story.length) {
        renderScreen(currentStep);
      } else {
        // Determine Ending
        startFloatingMemories();
      }
      isAnimating = false;
    }, 1200);
  } else {
    // First Load
    currentStep++;
    if (currentStep < story.length) {
      renderScreen(currentStep);
    }
  }
}

function startFloatingMemories() {
  const app = document.getElementById('app');
  app.innerHTML = ''; // Clear last screen

  // 1. Create Floating Container
  const memContainer = document.createElement('div');
  memContainer.className = 'memory-container';
  document.body.appendChild(memContainer);

  // 2. Spawn Images
  memoryImages.forEach((src, i) => {
    const img = document.createElement('img');
    img.src = 'assets/' + src;
    img.className = 'floating-img';

    // Randomize
    const left = Math.random() * 80 + 10; // 10% to 90% width
    const delay = Math.random() * 5; // 0 to 5s delay
    const duration = 12 + Math.random() * 10; // 12-22s float
    const width = 150 + Math.random() * 200; // 150-350px width

    img.style.left = left + '%';
    img.style.animationDelay = delay + 's';
    img.style.animationDuration = duration + 's';
    img.style.width = width + 'px';

    memContainer.appendChild(img);
  });

  // 3. Show Final Text
  const textContainer = document.createElement('div');
  textContainer.className = 'final-text-container';

  const h1 = document.createElement('h1');
  h1.className = 'final-text';
  h1.innerText = "TEKHSEGCHEM A 9OND3A INU ❤️";

  textContainer.appendChild(h1);
  document.body.appendChild(textContainer);
}

function toggleMusic() {
  const audio = document.getElementById('bg-music');
  if (audio.paused) {
    audio.play().catch(e => console.log("Audio play blocked"));
  } else {
    audio.pause();
  }
}
