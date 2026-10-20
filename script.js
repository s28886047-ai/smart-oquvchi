/**
 * SMART O'QUVCHI 2.0 — ASOSIY JAVASCRIPT KODI
 * Zamonaviy, to'liq ishlaydigan O'zbek tilidagi ta'lim platformasi.
 * Mualliflik: Vanilla JavaScript, LocalStorage, Web Audio API, Canvas FX
 */

'use strict';

/* ==========================================================================
   1. QUIZ DATABASE (SAVOLLAR BAZASI) — KAMIDA 6 TA MAVZU HAR BIR FANGA
   Har bir savol to'liq o'zbek tilidagi tushuntirish va to'g'ri javob bilan ta'minlangan.
   ========================================================================== */
const QUIZ_DATABASE = [
  {
    id: 'math-algebra-1',
    category: 'math',
    subjectName: 'Matematika',
    title: 'Algebra: Kvadrat tenglamalar va funksiyalar',
    difficulty: "O'rta",
    estimatedMinutes: 6,
    description: "Kvadrat tenglamalar, Viyet teoremasi, ildizlar va funksiyalar bo'yicha mustahkamlovchi test.",
    questions: [
      {
        question: "x² - 7x + 12 = 0 kvadrat tenglamasining ildizlarini toping.",
        options: ["x₁ = 3, x₂ = 4", "x₁ = -3, x₂ = -4", "x₁ = 2, x₂ = 6", "x₁ = -2, x₂ = -6"],
        correctIndex: 0,
        explanation: "Viyet teoremasiga ko'ra: x₁ + x₂ = 7 va x₁ · x₂ = 12. Ko'paytmasi 12, yig'indisi 7 bo'lgan sonlar 3 va 4 hisoblanadi (3 + 4 = 7; 3 · 4 = 12)."
      },
      {
        question: "Uchburchakning ichki burchaklari 2:3:4 nisbatda. Eng katta burchakni toping.",
        options: ["60°", "80°", "100°", "40°"],
        correctIndex: 1,
        explanation: "Uchburchak ichki burchaklari yig'indisi 180° ga teng. 2x + 3x + 4x = 9x = 180° bo'lsa, x = 20°. Eng katta burchak: 4x = 4 · 20° = 80°."
      },
      {
        question: "15 sonining 40% ini hisoblang.",
        options: ["5", "6", "7.5", "8"],
        correctIndex: 1,
        explanation: "Sonning foizini topish uchun sonni foizga ko'paytirib, 100 ga bo'lamiz: (15 · 40) / 100 = 600 / 100 = 6."
      },
      {
        question: "Arifmetik progressiyada a₁ = 3, d = 4 bo'lsa, 10-hadi (a₁₀) nimaga teng?",
        options: ["36", "39", "40", "43"],
        correctIndex: 1,
        explanation: "n-had formulasi: aₙ = a₁ + (n - 1)d. Demak, a₁₀ = 3 + (10 - 1) · 4 = 3 + 9 · 4 = 3 + 36 = 39."
      },
      {
        question: "Doiraning radiusi 2 marta oshirilsa, uning yuzi necha marta ortadi?",
        options: ["2 marta", "4 marta", "8 marta", "O'zgarmaydi"],
        correctIndex: 1,
        explanation: "Doira yuzi formulasi: S = π·R². Radius R o'rniga 2R qo'yilsa: S_yangi = π·(2R)² = 4πR², ya'ni yuz 4 barobar ortadi."
      },
      {
        question: "f(x) = 3x² + 5x - 7 funksiyasining hosilasini f'(x) toping.",
        options: ["6x + 5", "3x + 5", "6x - 7", "6x² + 5"],
        correctIndex: 0,
        explanation: "Darajali funksiya hosilasi: (xⁿ)' = n·xⁿ⁻¹. Shunda (3x²)' = 6x, (5x)' = 5, o'zgarmas sonning hosilasi (-7)' = 0. Natija: 6x + 5."
      }
    ]
  },
  {
    id: 'english-grammar-1',
    category: 'english',
    subjectName: 'Ingliz tili',
    title: 'General English: Grammar & Vocabulary',
    difficulty: "O'rta",
    estimatedMinutes: 5,
    description: "Ingliz tili zamonlari, modal fe'llar, predloglar va lug'at boyligi bo'yicha amaliy savollar.",
    questions: [
      {
        question: "Choose the correct sentence in Present Perfect:",
        options: [
          "She has lived here for three years.",
          "She is living here since three years.",
          "She lived here for three years ago.",
          "She has live here three years."
        ],
        correctIndex: 0,
        explanation: "Davomiylik va 'for' ko'rsatkichi bilan Present Perfect (has + V3) zamoni qo'llaniladi. 'She has lived here for three years' grammatik jihatdan to'liq to'g'ri."
      },
      {
        question: "What is the opposite (antonym) of the word 'GENEROUS'?",
        options: ["Kind", "Stingy", "Brave", "Polite"],
        correctIndex: 1,
        explanation: "'Generous' saxiy degani. Uning teskarisi 'Stingy' (xasis, ziqna) hisoblanadi. Kind — mehribon, Brave — dovyurak, Polite — xushmuomala."
      },
      {
        question: "If it rains tomorrow, we ... our school football match.",
        options: ["cancel", "will cancel", "would cancel", "had cancelled"],
        correctIndex: 1,
        explanation: "First Conditional (Haqiqiy shart mayli): If + Present Simple, Future Simple (will + Verb). Shuning uchun 'will cancel' to'g'ri."
      },
      {
        question: "He was so tired that he could ... keep his eyes open.",
        options: ["hardly", "hard", "easily", "nearly"],
        correctIndex: 0,
        explanation: "'Hardly' inkor ma'nosidagi ravish bo'lib, 'arang, zo'rg'a' degan ma'noni beradi. 'Could hardly keep' — ko'zlarini arang ochiq tutib turardi."
      },
      {
        question: "Which preposition is correct? 'She has always been interested ... astronomy.'",
        options: ["at", "on", "in", "with"],
        correctIndex: 2,
        explanation: "'To be interested in' turg'un ibora bo'lib, har doim 'in' predlogi bilan birga qo'llaniladi."
      },
      {
        question: "Select the correct passive form: 'Leonardo da Vinci painted the Mona Lisa.'",
        options: [
          "The Mona Lisa was painted by Leonardo da Vinci.",
          "The Mona Lisa is painted by Leonardo da Vinci.",
          "The Mona Lisa had painted by Leonardo da Vinci.",
          "The Mona Lisa has been painted Leonardo da Vinci."
        ],
        correctIndex: 0,
        explanation: "Past Simple zamonidagi majhul nisbat (Passive Voice): was/were + V3 shaklida yasaladi. Shuning uchun 'was painted' to'g'ri variant."
      }
    ]
  },
  {
    id: 'uzbek-literature-1',
    category: 'uzbek',
    subjectName: 'Ona tili',
    title: 'Ona tili va Adabiyot: Mumtoz meros va grammatika',
    difficulty: "Oson-O'rta",
    estimatedMinutes: 5,
    description: "Alisher Navoiy ijodi, ilk o'zbek romanlari, imlo qoidalari va so'z turkumlari bo'yicha savollar.",
    questions: [
      {
        question: "Alisher Navoiyning turkiy tilda yaratgan mashhur besh doston to'plami qanday nomlanadi?",
        options: ["Xamsa", "Devoni Foniy", "Mahbub ul-qulub", "Majolis un-nafois"],
        correctIndex: 0,
        explanation: "Alisher Navoiy 1483-1485 yillarda birinchi bo'lib turkiy tilda besh doston — 'Xamsa' ('Hayrat ul-abror', 'Farhod va Shirin', 'Layli va Majnun', 'Sab'ai sayyor', 'Saddi Iskandariy')ni yaratgan."
      },
      {
        question: "Qaysi so'zda imloviy jihatdan xatolik mavjud?",
        options: ["Tonggi", "Harakat", "Xushbo'y", "Mashxur"],
        correctIndex: 3,
        explanation: "'Mashhur' so'zi bo'g'iz tovushi 'h' bilan yoziladi ('mashhur'), 'x' bilan yozish imlo qoidalariga ko'ra qo'pol xato hisoblanadi."
      },
      {
        question: "'Boshiga ko'tarmoq' frazeologik iborasi qanday ma'noni ifodalaydi?",
        options: [
          "Juda balandga ko'tarib qo'ymoq",
          "Kattalarga qarshi gapirmoq",
          "Yuksak darajada e'zozlamoq, izzat qilmoq",
          "Qattiq baqirib gapirmoq"
        ],
        correctIndex: 2,
        explanation: "'Boshiga ko'tarmoq' xalqimizda kimgadir yuksak ehtirom, chuqur izzat-ikrom va mehr ko'rsatish ma'nosida ishlatiladi."
      },
      {
        question: "O'zbek adabiy tilida nechta undosh fonema mavjud?",
        options: ["23 ta", "24 ta", "25 ta", "26 ta"],
        correctIndex: 2,
        explanation: "Hozirgi o'zbek adabiy tilida 6 ta unli tovush va 25 ta undosh fonema mavjud bo'lib, ular nutqimizning fonetik boyligini tashkil etadi."
      },
      {
        question: "Ilk o'zbek milliy romani 'O'tkan kunlar'ning muallifi kim?",
        options: ["Cho'lpon", "Abdulla Qodiriy", "Fitrat", "G'afur G'ulom"],
        correctIndex: 1,
        explanation: "Buyuk adib Abdulla Qodiriy 1922-1925 yillarda yozilgan 'O'tkan kunlar' romani bilan o'zbek romanchilik maktabiga asos solgan."
      },
      {
        question: "Harakat va holatning belgisini, paytini yoki o'rnini bildiruvchi so'z turkumi nima?",
        options: ["Sifat", "Ravish", "Olmosh", "Ko'makchi"],
        correctIndex: 1,
        explanation: "Ravish — harakat yoki holatning belgisini, darajasini, paytini, sababini va o'rnini bildiruvchi mustaqil so'z turkumidir (masalan: tez yugurdi, ertaga keladi)."
      }
    ]
  },
  {
    id: 'it-programming-1',
    category: 'it',
    subjectName: 'Informatika',
    title: 'Informatika va Dasturlash: Asosiy tushunchalar',
    difficulty: "O'rta",
    estimatedMinutes: 6,
    description: "Axborot o'lchov birliklari, Python tili, web texnologiyalari va kompyuter arxitekturasi.",
    questions: [
      {
        question: "Python dasturlash tilida ro'yxat (list) qaysi qavslar yordamida e'lon qilinadi?",
        options: ["Kvadrat qavslar [ ]", "Dumaloq qavslar ( )", "Figurali qavslar { }", "Burchakli qavslar < >"],
        correctIndex: 0,
        explanation: "Python tilida ro'yxatlar kvadrat [ ] qavslar orqali tuziladi. Dumaloq ( ) qavslar kortejlar (tuple), figurali { } qavslar esa lug'at (dict) yoki to'plamlar (set) uchun xizmat qiladi."
      },
      {
        question: "1 Gigabayt (GB) xotira hajmi necha Megabaytga (MB) teng?",
        options: ["1000 MB", "1024 MB", "512 MB", "2048 MB"],
        correctIndex: 1,
        explanation: "Axborot ikkilik tizimga asoslanganligi sababli, 1 GB = 2¹⁰ MB = 1024 Megabaytga teng bo'ladi."
      },
      {
        question: "Web sahifaning semantik skeleti va strukturasi qaysi til vositasida yaratiladi?",
        options: ["CSS", "HTML", "JavaScript", "PHP"],
        correctIndex: 1,
        explanation: "HTML (HyperText Markup Language) web-sahifalarning tayanch skeletini hosil qiladi. CSS dizayn beradi, JavaScript esa dinamik interaktivlikni ta'minlaydi."
      },
      {
        question: "Kompyuterning barcha arifmetik va mantiqiy hisob-kitoblarini bajaruvchi asosiy mantiqiy mikrosxemasi nima?",
        options: ["RAM (Tezkor xotira)", "CPU (Markaziy protsessor)", "SSD (Qattiq disk)", "GPU (Videokarta)"],
        correctIndex: 1,
        explanation: "CPU (Central Processing Unit) kompyuterning bosh miyasi bo'lib, operatsion tizim va dasturlarning barcha hisob-kitob amallarini bevosita boshqaradi."
      },
      {
        question: "Relyatsion ma'lumotlar bazasidan ma'lumotlarni qidirish va ekranga chiqarish uchun qaysi SQL buyrug'i ishlatiladi?",
        options: ["UPDATE", "INSERT", "SELECT", "DELETE"],
        correctIndex: 2,
        explanation: "SQL da ma'lumotlar jadvallaridan yozuvlarni tanlab olish uchun 'SELECT' buyrug'i qo'llaniladi (masalan: SELECT * FROM oquvchilar;)."
      },
      {
        question: "Ikkilik sanoq tizimidagi '1011' soni o'nlik sanoq tizimida nimaga teng?",
        options: ["9", "10", "11", "13"],
        correctIndex: 2,
        explanation: "Ikkilikdan o'nlikka o'tish: (1 · 2³) + (0 · 2²) + (1 · 2¹) + (1 · 2⁰) = 8 + 0 + 2 + 1 = 11 ga teng."
      }
    ]
  }
];

/* ==========================================================================
   2. INITIAL DEFAULT SEED DATA
   Platforma birinchi marta ochilganda jonli va to'liq ko'rinishi uchun.
   ========================================================================== */
const DEFAULT_TIMETABLE = {
  monday: [
    { slot: 1, time: "08:30 - 09:15", subject: "Matematika", room: "302-xona", teacher: "Karimov A.R." },
    { slot: 2, time: "09:25 - 10:10", subject: "Ingliz tili", room: "205-xona", teacher: "Smith Emily" },
    { slot: 3, time: "10:20 - 11:05", subject: "Ona tili", room: "104-xona", teacher: "Ahmedova N.S." },
    { slot: 4, time: "11:25 - 12:10", subject: "Informatika", room: "Kompyuter zali", teacher: "Sobirov O.M." },
    { slot: 5, time: "12:20 - 13:05", subject: "Fizika", room: "401-laboratoriya", teacher: "Usmonov B.T." },
    { slot: 6, time: "13:15 - 14:00", subject: "Tarix", room: "210-xona", teacher: "Yoqubov D.K." }
  ],
  tuesday: [
    { slot: 1, time: "08:30 - 09:15", subject: "Kimyo", room: "Kimyo zali", teacher: "Rahimova G.A." },
    { slot: 2, time: "09:25 - 10:10", subject: "Matematika", room: "302-xona", teacher: "Karimov A.R." },
    { slot: 3, time: "10:20 - 11:05", subject: "Adabiyot", room: "104-xona", teacher: "Ahmedova N.S." },
    { slot: 4, time: "11:25 - 12:10", subject: "Biologiya", room: "112-xona", teacher: "Qosimova M.B." },
    { slot: 5, time: "12:20 - 13:05", subject: "Ingliz tili", room: "205-xona", teacher: "Smith Emily" },
    { slot: 6, time: "13:15 - 14:00", subject: "Jismoniy tarbiya", room: "Sport zal", teacher: "Aliyev R.Sh." }
  ],
  wednesday: [
    { slot: 1, time: "08:30 - 09:15", subject: "Geometriya", room: "302-xona", teacher: "Karimov A.R." },
    { slot: 2, time: "09:25 - 10:10", subject: "Informatika", room: "Kompyuter zali", teacher: "Sobirov O.M." },
    { slot: 3, time: "10:20 - 11:05", subject: "Ona tili", room: "104-xona", teacher: "Ahmedova N.S." },
    { slot: 4, time: "11:25 - 12:10", subject: "Fizika", room: "401-xona", teacher: "Usmonov B.T." },
    { slot: 5, time: "12:20 - 13:05", subject: "Geografiya", room: "308-xona", teacher: "Vohidov S." },
    { slot: 6, time: "13:15 - 14:00", subject: "Fransuz tili", room: "207-xona", teacher: "Nazarova L." }
  ],
  thursday: [
    { slot: 1, time: "08:30 - 09:15", subject: "Algebra", room: "302-xona", teacher: "Karimov A.R." },
    { slot: 2, time: "09:25 - 10:10", subject: "Ingliz tili", room: "205-xona", teacher: "Smith Emily" },
    { slot: 3, time: "10:20 - 11:05", subject: "Tarix", room: "210-xona", teacher: "Yoqubov D.K." },
    { slot: 4, time: "11:25 - 12:10", subject: "Kimyo", room: "Kimyo zali", teacher: "Rahimova G.A." },
    { slot: 5, time: "12:20 - 13:05", subject: "Adabiyot", room: "104-xona", teacher: "Ahmedova N.S." },
    { slot: 6, time: "13:15 - 14:00", subject: "Tarbiya", room: "101-xona", teacher: "Xolmatov U." }
  ],
  friday: [
    { slot: 1, time: "08:30 - 09:15", subject: "Matematika", room: "302-xona", teacher: "Karimov A.R." },
    { slot: 2, time: "09:25 - 10:10", subject: "Informatika", room: "Kompyuter zali", teacher: "Sobirov O.M." },
    { slot: 3, time: "10:20 - 11:05", subject: "Biologiya", room: "112-xona", teacher: "Qosimova M.B." },
    { slot: 4, time: "11:25 - 12:10", subject: "Ingliz tili", room: "205-xona", teacher: "Smith Emily" },
    { slot: 5, time: "12:20 - 13:05", subject: "Fizika", room: "401-xona", teacher: "Usmonov B.T." },
    { slot: 6, time: "13:15 - 14:00", subject: "Chaqiruvga qadar tayyorgarlik", room: "Harbiy xona", teacher: "Mayor Zokirov" }
  ],
  saturday: [
    { slot: 1, time: "08:30 - 09:15", subject: "Astronomiya", room: "Rasadxona", teacher: "Usmonov B.T." },
    { slot: 2, time: "09:25 - 10:10", subject: "Jahonaviy iqtisod", room: "305-xona", teacher: "Ergashev T." },
    { slot: 3, time: "10:20 - 11:05", subject: "To'garak mashg'uloti", room: "Media markaz", teacher: "Sobirov O.M." },
    { slot: 4, time: "11:25 - 12:10", subject: "Mustaqil mutolaa", room: "Kutubxona", teacher: "Kutubxonachi" },
    { slot: 5, time: "12:20 - 13:05", subject: "Sinf soati", room: "302-xona", teacher: "Sinf rahbari" },
    { slot: 6, time: "13:15 - 14:00", subject: "Bo'sh vaqt", room: "-", teacher: "-" }
  ]
};

const DEFAULT_TASKS = [
  {
    id: 'task-1',
    title: "Matematikadan 145-betdagi 12, 14 va 18-murakkab tenglamalarni yechish",
    subject: "Matematika",
    dueDate: getRelativeDateString(1),
    priority: "urgent",
    notes: "Daftarga chiroyli tartibda yozish, grafiklarini chizish lozim.",
    completed: false,
    createdAt: Date.now() - 3600000 * 5
  },
  {
    id: 'task-2',
    title: "Ingliz tilidan Unit 6 lug'atidagi yangi 25 ta so'zni yod olish",
    subject: "Ingliz tili",
    dueDate: getRelativeDateString(2),
    priority: "important",
    notes: "Har bir yangi so'zga 1 tadan gap tuzish.",
    completed: false,
    createdAt: Date.now() - 3600000 * 20
  },
  {
    id: 'task-3',
    title: "Ona tilidan 'Navoiy g'azallari' mavzusida 1 varaqli insho yozish",
    subject: "Ona tili",
    dueDate: getRelativeDateString(3),
    priority: "normal",
    notes: "Badiiy san'at vositalariga urg'u berilsin.",
    completed: true,
    createdAt: Date.now() - 3600000 * 48
  }
];

const DEFAULT_GOALS = [
  { id: 'g-1', text: "Matematikadan kamida bitta viktorinani 80%+ natija bilan yechish", completed: true },
  { id: 'g-2', text: "Ingliz tili lug'atini 20 daqiqa qayta takrorlash", completed: false },
  { id: 'g-3', text: "Fokus taymerida kamida 2 sessiya (50 daqiqa) dars qilish", completed: false }
];

/* ==========================================================================
   3. WEB AUDIO API SYNTHESIZER (INTERAKTIV OVOZ MOTOR)
   Hech qanday tashqi fayllar talab etilmaydi! Brauzer ichki sintezi.
   ========================================================================== */
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.noiseNode = null;
    this.gainNode = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  isSoundEnabled() {
    return AppState.settings.soundEnabled;
  }

  // Yengil tugma bosish tovushi
  playClick() {
    if (!this.isSoundEnabled()) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    } catch (e) {
      // Audio xatolarini sokinlik bilan o'tkazib yuborish
    }
  }

  // To'g'ri javob / Muvaffaqiyat akkordi
  playSuccess() {
    if (!this.isSoundEnabled()) return;
    try {
      this.init();
      if (!this.ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.06);
        gain.gain.setValueAtTime(0.12, this.ctx.currentTime + idx * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.06 + 0.35);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(this.ctx.currentTime + idx * 0.06);
        osc.stop(this.ctx.currentTime + idx * 0.06 + 0.35);
      });
    } catch (e) {}
  }

  // Noto'g'ri javob tovushi
  playWrong() {
    if (!this.isSoundEnabled()) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(110, this.ctx.currentTime + 0.22);
      gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.22);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.22);
    } catch (e) {}
  }

  // Taymer yakunlanganda qong'iroq
  playTimerBell() {
    if (!this.isSoundEnabled()) return;
    try {
      this.init();
      if (!this.ctx) return;
      const tones = [587.33, 880, 1174.66]; // D5, A5, D6
      tones.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.12);
        gain.gain.setValueAtTime(0.18, this.ctx.currentTime + idx * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.12 + 1.2);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(this.ctx.currentTime + idx * 0.12);
        osc.stop(this.ctx.currentTime + idx * 0.12 + 1.2);
      });
    } catch (e) {}
  }

  // Sekundomer sekin urishi (ticking)
  playTick() {
    if (!this.isSoundEnabled()) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1200, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.02, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.02);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.02);
    } catch (e) {}
  }

  // Fokuslovchi sokin fon g'ovuri (Pink/Brown noise)
  toggleAmbient(enable) {
    if (!this.isSoundEnabled() || !enable) {
      if (this.noiseNode) {
        try { this.noiseNode.stop(); } catch (e) {}
        this.noiseNode = null;
      }
      return;
    }
    try {
      this.init();
      if (!this.ctx) return;
      if (this.noiseNode) return; // Allaqachon ishlab turibdi

      const bufferSize = this.ctx.sampleRate * 2;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        data[i] = (lastOut + (0.02 * white)) / 1.02;
        lastOut = data[i];
        data[i] *= 1.8;
      }

      this.noiseNode = this.ctx.createBufferSource();
      this.noiseNode.buffer = buffer;
      this.noiseNode.loop = true;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, this.ctx.currentTime);

      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.setValueAtTime(0.05, this.ctx.currentTime);

      this.noiseNode.connect(filter);
      filter.connect(this.gainNode);
      this.gainNode.connect(this.ctx.destination);
      this.noiseNode.start();
    } catch (e) {}
  }
}

const AudioSFX = new SoundEngine();

/* ==========================================================================
   4. CENTRAL APPLICATION STATE (LOCALSTORAGE SYNCHRONIZER)
   ========================================================================== */
const STORAGE_KEYS = {
  PROFILE: 'smart_user_profile_v2',
  TASKS: 'smart_tasks_v2',
  TIMETABLE: 'smart_timetable_v2',
  QUIZ_HISTORY: 'smart_quiz_history_v2',
  TIMER_STATS: 'smart_timer_stats_v2',
  GOALS: 'smart_goals_v2',
  SETTINGS: 'smart_settings_v2',
  NOTIFICATIONS: 'smart_notifications_v2'
};

const AppState = {
  profile: {
    name: 'Azizbek Olimov',
    grade: '10-sinf',
    school: "23-sonli ixtisoslashtirilgan maktab",
    streakDays: 1,
    lastActiveDate: new Date().toDateString()
  },
  tasks: [],
  timetable: {},
  quizHistory: [],
  timerStats: {
    totalFocusMinutes: 0,
    completedSessions: 0,
    todaySessions: 0,
    lastDate: new Date().toDateString()
  },
  goals: [],
  settings: {
    soundEnabled: true,
    glowEnabled: true,
    particlesEnabled: true
  },
  notifications: [],

  // Dastlabki yuklash
  load() {
    try {
      const p = localStorage.getItem(STORAGE_KEYS.PROFILE);
      if (p) this.profile = { ...this.profile, ...JSON.parse(p) };

      const t = localStorage.getItem(STORAGE_KEYS.TASKS);
      this.tasks = t ? JSON.parse(t) : DEFAULT_TASKS;

      const tt = localStorage.getItem(STORAGE_KEYS.TIMETABLE);
      this.timetable = tt ? JSON.parse(tt) : JSON.parse(JSON.stringify(DEFAULT_TIMETABLE));

      const q = localStorage.getItem(STORAGE_KEYS.QUIZ_HISTORY);
      this.quizHistory = q ? JSON.parse(q) : [];

      const ts = localStorage.getItem(STORAGE_KEYS.TIMER_STATS);
      if (ts) {
        this.timerStats = JSON.parse(ts);
        // Kun o'zgargan bo'lsa, bugungi sessiyalarni yangilash
        if (this.timerStats.lastDate !== new Date().toDateString()) {
          this.timerStats.todaySessions = 0;
          this.timerStats.lastDate = new Date().toDateString();
        }
      }

      const g = localStorage.getItem(STORAGE_KEYS.GOALS);
      this.goals = g ? JSON.parse(g) : DEFAULT_GOALS;

      const s = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      if (s) this.settings = { ...this.settings, ...JSON.parse(s) };

      const n = localStorage.getItem(STORAGE_KEYS.NOTIFICATIONS);
      this.notifications = n ? JSON.parse(n) : [
        { id: 'n-1', text: "SMART O'QUVCHI 2.0 ga xush kelibsiz! Platforma muvaffaqiyatli ishga tushdi.", time: "Hozirgina" }
      ];

      this.saveAll();
    } catch (err) {
      console.error("LocalStorage o'qishda xatolik:", err);
    }
  },

  save(key) {
    try {
      switch (key) {
        case 'profile':
          localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(this.profile));
          break;
        case 'tasks':
          localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(this.tasks));
          break;
        case 'timetable':
          localStorage.setItem(STORAGE_KEYS.TIMETABLE, JSON.stringify(this.timetable));
          break;
        case 'quizHistory':
          localStorage.setItem(STORAGE_KEYS.QUIZ_HISTORY, JSON.stringify(this.quizHistory));
          break;
        case 'timerStats':
          localStorage.setItem(STORAGE_KEYS.TIMER_STATS, JSON.stringify(this.timerStats));
          break;
        case 'goals':
          localStorage.setItem(STORAGE_KEYS.GOALS, JSON.stringify(this.goals));
          break;
        case 'settings':
          localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(this.settings));
          break;
        case 'notifications':
          localStorage.setItem(STORAGE_KEYS.NOTIFICATIONS, JSON.stringify(this.notifications));
          break;
      }
    } catch (err) {
      console.error("LocalStorage saqlashda xatolik:", err);
    }
  },

  saveAll() {
    this.save('profile');
    this.save('tasks');
    this.save('timetable');
    this.save('quizHistory');
    this.save('timerStats');
    this.save('goals');
    this.save('settings');
    this.save('notifications');
  },

  // Haqiqiy statistik ko'rsatkichlarni hisoblash (FOYDALANUVCHINING ANIQ HARAKATLARIDAN)
  getCalculatedStats() {
    // 1. Viktorinalardan olingan haqiqiy XP
    const quizXP = this.quizHistory.reduce((sum, item) => sum + (item.earnedXP || 0), 0);
    // 2. Bajarilgan vazifalardan olingan XP (har biri uchun +15 XP)
    const completedTasksCount = this.tasks.filter(t => t.completed).length;
    const taskXP = completedTasksCount * 15;
    // 3. Bajarilgan kunlik maqsadlardan XP (har biri uchun +10 XP)
    const completedGoalsCount = this.goals.filter(g => g.completed).length;
    const goalXP = completedGoalsCount * 10;
    // 4. Fokus vaqtidan olingan XP (har 25 daqiqa uchun +15 XP)
    const timerXP = Math.floor(this.timerStats.totalFocusMinutes / 25) * 15;

    const totalXP = quizXP + taskXP + goalXP + timerXP;

    // Viktorinalar o'rtacha aniqligi
    const totalQuizzes = this.quizHistory.length;
    let avgQuizPct = 0;
    let highestQuizPct = 0;
    if (totalQuizzes > 0) {
      const sumPct = this.quizHistory.reduce((acc, q) => {
        if (q.percentage > highestQuizPct) highestQuizPct = q.percentage;
        return acc + q.percentage;
      }, 0);
      avgQuizPct = Math.round(sumPct / totalQuizzes);
    }

    // Vazifalar foizi
    const totalTasks = this.tasks.length;
    const taskPct = totalTasks > 0 ? Math.round((completedTasksCount / totalTasks) * 100) : 0;

    // Foydalanuvchi unvoni (XP ga qarab dinamik)
    let rankTitle = "Boshlang'ich bilimdon";
    if (totalXP >= 800) rankTitle = "Intellektual afsona 👑";
    else if (totalXP >= 500) rankTitle = "Akademik yetakchi 🌟";
    else if (totalXP >= 250) rankTitle = "Katta a'lochi 🚀";
    else if (totalXP >= 100) rankTitle = "Izlanuvchi o'quvchi ⚡";

    return {
      totalXP,
      totalQuizzes,
      avgQuizPct,
      highestQuizPct,
      completedTasksCount,
      totalTasks,
      taskPct,
      focusMinutes: this.timerStats.totalFocusMinutes,
      focusSessions: this.timerStats.completedSessions,
      rankTitle
    };
  },

  addNotification(text) {
    const notif = {
      id: 'notif-' + Date.now(),
      text,
      time: new Date().toLocaleTimeString('uz-UZ', { hour: '2-digit', minute: '2-digit' })
    };
    this.notifications.unshift(notif);
    if (this.notifications.length > 20) this.notifications.pop();
    this.save('notifications');
    renderNotifications();
  }
};

/* ==========================================================================
   5. AMBIENT CANVAS BACKGROUND PARTICLES
   ========================================================================== */
class ParticleBackground {
  constructor() {
    this.canvas = document.getElementById('ambient-canvas');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.numParticles = 45;
    this.resize();
    this.init();
    this.animate();

    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  init() {
    this.particles = [];
    for (let i = 0; i < this.numParticles; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        color: i % 2 === 0 ? 'rgba(139, 92, 246, 0.45)' : 'rgba(59, 130, 246, 0.45)'
      });
    }
  }

  animate() {
    if (!AppState.settings.particlesEnabled) {
      this.ctx.clearRect(0, 0, this.width, this.height);
      requestAnimationFrame(() => this.animate());
      return;
    }

    this.ctx.clearRect(0, 0, this.width, this.height);

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = this.width;
      if (p.x > this.width) p.x = 0;
      if (p.y < 0) p.y = this.height;
      if (p.y > this.height) p.y = 0;

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = p.color;
      this.ctx.fill();

      // Zarrachalarni o'zaro tutashtiruvchi nozik neon chiziqlar
      for (let j = i + 1; j < this.particles.length; j++) {
        const p2 = this.particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          this.ctx.beginPath();
          this.ctx.strokeStyle = `rgba(139, 92, 246, ${0.15 * (1 - dist / 110)})`;
          this.ctx.lineWidth = 0.75;
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.stroke();
        }
      }
    }

    requestAnimationFrame(() => this.animate());
  }
}

/* ==========================================================================
   6. TOAST NOTIFICATION UTILITY
   ========================================================================== */
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  let iconClass = 'fa-info-circle';
  if (type === 'success') iconClass = 'fa-circle-check';
  if (type === 'warning') iconClass = 'fa-triangle-exclamation';
  if (type === 'danger') iconClass = 'fa-circle-xmark';

  toast.innerHTML = `
    <i class="fa-solid ${iconClass} toast-icon"></i>
    <span class="toast-text">${escapeHtml(message)}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(40px)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/* ==========================================================================
   7. NAVIGATION & VIEW SWITCHING
   ========================================================================== */
function switchView(viewName) {
  AudioSFX.playClick();
  const navLinks = document.querySelectorAll('.nav-link');
  const viewPanels = document.querySelectorAll('.view-panel');

  navLinks.forEach(link => {
    if (link.dataset.view === viewName) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  viewPanels.forEach(panel => {
    if (panel.id === `view-${viewName}`) {
      panel.classList.add('active');
    } else {
      panel.classList.remove('active');
    }
  });

  // Topbar sarlavhasini yangilash
  const titleElem = document.getElementById('current-view-title');
  if (titleElem) {
    const titles = {
      dashboard: "Bosh sahifa",
      quizzes: "Viktorinalar va Testlar",
      homework: "Uy vazifalari menejeri",
      timetable: "Haftalik Dars Jadvali",
      timer: "Fokus taymeri (Pomodoro)",
      analytics: "Natijalar va Tahlil",
      settings: "Sozlamalar"
    };
    titleElem.textContent = titles[viewName] || "Bosh sahifa";
  }

  // Mobil menyuni avtomatik yopish
  const sidebar = document.getElementById('sidebar');
  if (sidebar && sidebar.classList.contains('mobile-open')) {
    sidebar.classList.remove('mobile-open');
  }

  // Sahifa o'zgarganda tegishli bloklarni qayta render qilish
  if (viewName === 'dashboard') renderDashboard();
  if (viewName === 'quizzes') renderQuizzesList();
  if (viewName === 'homework') renderHomework();
  if (viewName === 'timetable') renderTimetableDay(currentTimetableDay);
  if (viewName === 'analytics') renderAnalytics();
}

/* ==========================================================================
   8. DASHBOARD RENDERING & DYNAMIC METRICS
   ========================================================================== */
function renderDashboard() {
  const stats = AppState.getCalculatedStats();

  // Foydalanuvchi ma'lumotlari
  const greetingName = document.getElementById('dash-greeting-name');
  if (greetingName) greetingName.textContent = AppState.profile.name.split(' ')[0] || 'O\'quvchi';

  const timeGreeting = document.getElementById('greeting-time-text');
  if (timeGreeting) {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 11) timeGreeting.textContent = "Xayrli tong! 🌅";
    else if (hour >= 11 && hour < 18) timeGreeting.textContent = "Xayrli kun! ☀️";
    else if (hour >= 18 && hour < 23) timeGreeting.textContent = "Xayrli kech! 🌇";
    else timeGreeting.textContent = "Tungi intizom! 🌙";
  }

  // KPI kartalari (HAQIQIY HISOB-KITOB!)
  const totalXpElem = document.getElementById('kpi-total-xp');
  if (totalXpElem) totalXpElem.textContent = stats.totalXP.toLocaleString();

  const headerXpElem = document.getElementById('header-xp');
  if (headerXpElem) headerXpElem.textContent = `${stats.totalXP} XP`;

  const sidebarXpElem = document.getElementById('sidebar-xp');
  if (sidebarXpElem) sidebarXpElem.textContent = `${stats.totalXP} XP`;

  const tasksRatioElem = document.getElementById('kpi-tasks-ratio');
  if (tasksRatioElem) tasksRatioElem.textContent = `${stats.completedTasksCount} / ${stats.totalTasks}`;

  const tasksPctElem = document.getElementById('kpi-tasks-pct');
  if (tasksPctElem) tasksPctElem.innerHTML = `<i class="fa-solid fa-circle-notch"></i> ${stats.taskPct}% bajarildi`;

  const quizAvgElem = document.getElementById('kpi-quiz-avg');
  if (quizAvgElem) quizAvgElem.textContent = `${stats.avgQuizPct}%`;

  const quizCountElem = document.getElementById('kpi-quiz-count');
  if (quizCountElem) quizCountElem.innerHTML = `<i class="fa-solid fa-clipboard-check"></i> ${stats.totalQuizzes} ta test yechildi`;

  const focusTimeElem = document.getElementById('kpi-focus-time');
  if (focusTimeElem) focusTimeElem.textContent = `${stats.focusMinutes} daq`;

  const timerSessionsElem = document.getElementById('kpi-timer-sessions');
  if (timerSessionsElem) timerSessionsElem.innerHTML = `<i class="fa-solid fa-fire"></i> ${stats.focusSessions} sessiya`;

  const levelTitleElem = document.getElementById('dash-level-title');
  if (levelTitleElem) levelTitleElem.textContent = stats.rankTitle;

  const todayFocusElem = document.getElementById('dash-today-focus-stat');
  if (todayFocusElem) todayFocusElem.textContent = `${AppState.timerStats.todaySessions * 25} daqiqa bugun`;

  // Kunlik maqsadlar widgeti
  renderDailyGoalsWidget();

  // Bugungi dars jadvali qisqartmasi
  renderTodayTimetablePreview();

  // Yaqinlashib kelayotgan uy vazifalari
  renderUpcomingTasksPreview();

  // So'nggi test natijalari
  renderRecentQuizzesPreview();
}

// Kunlik maqsadlar widgeti
function renderDailyGoalsWidget() {
  const list = document.getElementById('dashboard-goals-list');
  const bar = document.getElementById('goals-progress-bar');
  const pill = document.getElementById('goals-progress-pill');
  if (!list) return;

  list.innerHTML = '';
  const total = AppState.goals.length;
  const completed = AppState.goals.filter(g => g.completed).length;
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0;

  if (bar) bar.style.width = `${pct}%`;
  if (pill) pill.textContent = `${pct}% bajarildi (${completed}/${total})`;

  if (total === 0) {
    list.innerHTML = `<li class="text-subtle" style="font-size:0.85rem; padding:10px;">Hozircha maqsadlar yo'q. Quyida yangi maqsad qo'shing!</li>`;
    return;
  }

  AppState.goals.forEach(goal => {
    const li = document.createElement('li');
    li.className = `goal-item ${goal.completed ? 'completed' : ''}`;
    li.innerHTML = `
      <div class="goal-left">
        <input type="checkbox" class="goal-checkbox" ${goal.completed ? 'checked' : ''} data-id="${goal.id}">
        <span class="goal-text">${escapeHtml(goal.text)}</span>
      </div>
      <button class="goal-delete-btn" data-id="${goal.id}" title="O'chirish">
        <i class="fa-solid fa-xmark"></i>
      </button>
    `;
    list.appendChild(li);
  });
}

// Bugungi darslar prevyusi
function renderTodayTimetablePreview() {
  const container = document.getElementById('dash-today-timetable');
  const dayNameLabel = document.getElementById('dash-today-name');
  if (!container) return;

  const daysMap = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const dayNamesUz = {
    monday: 'Dushanba',
    tuesday: 'Seshanba',
    wednesday: 'Chorshanba',
    thursday: 'Payshanba',
    friday: 'Juma',
    saturday: 'Shanba',
    sunday: 'Yakshanba'
  };

  const todayIndex = new Date().getDay();
  let dayKey = daysMap[todayIndex];
  if (dayKey === 'sunday') dayKey = 'monday'; // Yakshanba kuni dushanba darslarini ko'rsatish

  if (dayNameLabel) dayNameLabel.textContent = dayNamesUz[dayKey];

  const lessons = AppState.timetable[dayKey] || [];
  container.innerHTML = '';

  const activeLessons = lessons.filter(l => l.subject && l.subject !== '-');
  if (activeLessons.length === 0) {
    container.innerHTML = `<div class="empty-state" style="padding:15px;"><p>Bugun darslar belgilanmagan.</p></div>`;
    return;
  }

  activeLessons.slice(0, 4).forEach(lesson => {
    const div = document.createElement('div');
    div.className = 'today-lesson-pill';
    div.innerHTML = `
      <div class="lesson-left-meta">
        <span class="lesson-number-circle">${lesson.slot}</span>
        <div>
          <span class="lesson-title-preview">${escapeHtml(lesson.subject)}</span>
          <div style="font-size:0.7rem; color:var(--text-subtle);">${lesson.time}</div>
        </div>
      </div>
      <span class="lesson-room-tag"><i class="fa-solid fa-location-dot"></i> ${escapeHtml(lesson.room || 'Xona')}</span>
    `;
    container.appendChild(div);
  });
}

// Yaqinlashib kelayotgan uy vazifalari
function renderUpcomingTasksPreview() {
  const container = document.getElementById('dash-upcoming-tasks');
  if (!container) return;
  container.innerHTML = '';

  const pendingTasks = AppState.tasks.filter(t => !t.completed).slice(0, 3);
  if (pendingTasks.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:18px; color:var(--emerald);">
        <i class="fa-solid fa-circle-check" style="font-size:1.6rem; margin-bottom:6px;"></i>
        <p style="font-size:0.85rem;">Barcha vazifalar a'lo darajada bajarilgan! 🎉</p>
      </div>
    `;
    return;
  }

  pendingTasks.forEach(task => {
    const div = document.createElement('div');
    div.className = 'dash-task-item';
    const isUrgent = task.priority === 'urgent';
    div.innerHTML = `
      <div class="dash-task-left">
        <span class="dash-task-title">${escapeHtml(task.title)}</span>
        <span class="dash-task-sub">
          <strong class="text-accent">${escapeHtml(task.subject)}</strong> • Muddat: ${task.dueDate}
        </span>
      </div>
      <span class="priority-tag ${isUrgent ? 'priority-urgent' : 'priority-important'}">
        ${isUrgent ? '🔥 Shoshilinch' : '⭐ Muhim'}
      </span>
    `;
    container.appendChild(div);
  });
}

// So'nggi viktorina natijalari prevyusi
function renderRecentQuizzesPreview() {
  const container = document.getElementById('dash-recent-quizzes');
  if (!container) return;
  container.innerHTML = '';

  if (AppState.quizHistory.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:18px; color:var(--text-muted);">
        <p style="font-size:0.85rem;">Hali hech qanday viktorina yechilmagan. O'zingizni sinab ko'ring!</p>
      </div>
    `;
    return;
  }

  AppState.quizHistory.slice(0, 3).forEach(item => {
    const div = document.createElement('div');
    div.className = 'dash-quiz-row';

    let badgeClass = 'badge-excellent';
    if (item.percentage < 60) badgeClass = 'badge-fair';
    else if (item.percentage < 85) badgeClass = 'badge-good';

    div.innerHTML = `
      <div>
        <strong style="font-size:0.88rem; color:#fff; display:block;">${escapeHtml(item.title)}</strong>
        <small style="color:var(--text-subtle);">${escapeHtml(item.subject)} • ${item.date}</small>
      </div>
      <span class="quiz-score-badge ${badgeClass}">${item.percentage}% (+${item.earnedXP} XP)</span>
    `;
    container.appendChild(div);
  });
}

/* ==========================================================================
   9. QUIZZES SECTION (FILTER, CARDS & STATS)
   ========================================================================== */
let activeCategoryFilter = 'all';
let currentSearchQuery = '';

function renderQuizzesList() {
  const container = document.getElementById('quizzes-container');
  if (!container) return;

  const totalSolvedElem = document.getElementById('quiz-stat-total-solved');
  const highScoreElem = document.getElementById('quiz-stat-high-score');
  const stats = AppState.getCalculatedStats();

  if (totalSolvedElem) totalSolvedElem.textContent = stats.totalQuizzes;
  if (highScoreElem) highScoreElem.textContent = `${stats.highestQuizPct}%`;

  const filtered = QUIZ_DATABASE.filter(quiz => {
    const matchesCategory = activeCategoryFilter === 'all' || quiz.category === activeCategoryFilter;
    const matchesQuery = quiz.title.toLowerCase().includes(currentSearchQuery.toLowerCase()) ||
                         quiz.subjectName.toLowerCase().includes(currentSearchQuery.toLowerCase()) ||
                         quiz.description.toLowerCase().includes(currentSearchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  container.innerHTML = '';

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state glass-card" style="grid-column: 1 / -1;">
        <i class="fa-solid fa-magnifying-glass"></i>
        <h4>Hech qanday viktorina topilmadi</h4>
        <p>Iltimos, boshqa qidiruv so'zini kiriting yoki boshqa fanni tanlang.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(quiz => {
    // Ushbu test bo'yicha eng yaxshi natijani qidirish
    const pastAttempts = AppState.quizHistory.filter(h => h.quizId === quiz.id);
    let bestScoreText = "Hali yechilmagan";
    if (pastAttempts.length > 0) {
      const best = Math.max(...pastAttempts.map(p => p.percentage));
      bestScoreText = `Eng yuqori: ${best}%`;
    }

    const card = document.createElement('div');
    card.className = 'quiz-card glass-card';

    let badgeClass = 'badge-math';
    if (quiz.category === 'english') badgeClass = 'badge-english';
    if (quiz.category === 'uzbek') badgeClass = 'badge-uzbek';
    if (quiz.category === 'it') badgeClass = 'badge-it';

    card.innerHTML = `
      <div class="quiz-card-top">
        <span class="subject-badge ${badgeClass}">${escapeHtml(quiz.subjectName)}</span>
        <span class="difficulty-tag"><i class="fa-solid fa-chart-simple"></i> ${quiz.difficulty}</span>
      </div>

      <div class="quiz-card-content">
        <h3>${escapeHtml(quiz.title)}</h3>
        <p>${escapeHtml(quiz.description)}</p>
      </div>

      <div class="quiz-meta-row">
        <span><i class="fa-solid fa-list-ol"></i> ${quiz.questions.length} ta savol</span>
        <span><i class="fa-solid fa-clock"></i> ~${quiz.estimatedMinutes} daqiqa</span>
        <span><i class="fa-solid fa-award"></i> +${quiz.questions.length * 20} XP gacha</span>
      </div>

      <div class="quiz-card-footer">
        <span class="quiz-best-score">${bestScoreText}</span>
        <button class="btn btn-primary btn-sm start-quiz-btn" data-quiz-id="${quiz.id}">
          <i class="fa-solid fa-play"></i> Boshlash
        </button>
      </div>
    `;

    container.appendChild(card);
  });
}

/* ==========================================================================
   10. ACTIVE QUIZ ENGINE & RESULTS MODAL
   ========================================================================== */
let activeQuiz = null;
let currentQuestionIndex = 0;
let userAnswers = []; // Har bir savolga tanlangan index
let quizTimerSeconds = 0;
let quizTimerInterval = null;

function startQuiz(quizId) {
  AudioSFX.playClick();
  const quiz = QUIZ_DATABASE.find(q => q.id === quizId);
  if (!quiz) return;

  activeQuiz = quiz;
  currentQuestionIndex = 0;
  userAnswers = new Array(quiz.questions.length).fill(null);
  quizTimerSeconds = 0;

  // Modallarni ochish
  const modal = document.getElementById('quiz-player-modal');
  if (modal) modal.classList.remove('hidden');

  // Taymerni yurgizish
  clearInterval(quizTimerInterval);
  quizTimerInterval = setInterval(() => {
    quizTimerSeconds++;
    const mins = String(Math.floor(quizTimerSeconds / 60)).padStart(2, '0');
    const secs = String(quizTimerSeconds % 60).padStart(2, '0');
    const timerElem = document.getElementById('player-timer-text');
    if (timerElem) timerElem.textContent = `${mins}:${secs}`;
  }, 1000);

  // Savolni render qilish
  renderActiveQuestion();
}

function renderActiveQuestion() {
  if (!activeQuiz) return;
  const q = activeQuiz.questions[currentQuestionIndex];
  const total = activeQuiz.questions.length;

  // Sarlavhalar va belgilar
  const subjectBadge = document.getElementById('player-subject-badge');
  const quizTitle = document.getElementById('player-quiz-title');
  const qCounter = document.getElementById('player-question-counter');
  const progressFill = document.getElementById('player-progress-fill');
  const questionText = document.getElementById('player-question-text');
  const optionsContainer = document.getElementById('player-options-container');
  const nextBtn = document.getElementById('player-next-btn');
  const validationHint = document.getElementById('player-validation-hint');

  if (subjectBadge) subjectBadge.textContent = activeQuiz.subjectName;
  if (quizTitle) quizTitle.textContent = activeQuiz.title;
  if (qCounter) qCounter.textContent = `Savol: ${currentQuestionIndex + 1} / ${total}`;

  const pct = Math.round(((currentQuestionIndex + 1) / total) * 100);
  if (progressFill) progressFill.style.width = `${pct}%`;

  if (questionText) questionText.textContent = q.question;

  // Variantlarni chiqarish
  if (optionsContainer) {
    optionsContainer.innerHTML = '';
    const optionKeys = ['A', 'B', 'C', 'D'];
    q.options.forEach((optText, optIdx) => {
      const btn = document.createElement('button');
      btn.className = `option-btn ${userAnswers[currentQuestionIndex] === optIdx ? 'selected' : ''}`;
      btn.dataset.index = optIdx;
      btn.innerHTML = `
        <span class="option-key">${optionKeys[optIdx]}</span>
        <span class="option-text">${escapeHtml(optText)}</span>
      `;
      btn.addEventListener('click', () => {
        AudioSFX.playClick();
        userAnswers[currentQuestionIndex] = optIdx;
        // Barcha variantlardan faollikni olib tashlab, bosilganiga berish
        optionsContainer.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        // Tugmani faollashtirish
        if (nextBtn) nextBtn.disabled = false;
        if (validationHint) validationHint.style.opacity = '0';
      });
      optionsContainer.appendChild(btn);
    });
  }

  // Keyingi savol yoki yakunlash tugmasi holati
  if (nextBtn) {
    nextBtn.disabled = userAnswers[currentQuestionIndex] === null;
    if (currentQuestionIndex === total - 1) {
      nextBtn.innerHTML = `Testni Yakunlash <i class="fa-solid fa-flag-checkered"></i>`;
    } else {
      nextBtn.innerHTML = `Keyingi savol <i class="fa-solid fa-arrow-right"></i>`;
    }
  }

  if (validationHint) {
    validationHint.style.opacity = userAnswers[currentQuestionIndex] === null ? '0.8' : '0';
  }
}

function handleNextQuestion() {
  if (userAnswers[currentQuestionIndex] === null) {
    showToast("Iltimos, avval javob variantlaridan birini tanlang!", "warning");
    AudioSFX.playWrong();
    return;
  }

  AudioSFX.playClick();

  if (currentQuestionIndex < activeQuiz.questions.length - 1) {
    currentQuestionIndex++;
    renderActiveQuestion();
  } else {
    // Viktorina yakunlandi! Natijalarni hisoblash
    finishQuiz();
  }
}

function exitQuizModal() {
  if (confirm("Haqiqatan ham testdan chiqmoqchimisiz? Hozirgi urinish saqlanmaydi.")) {
    clearInterval(quizTimerInterval);
    const modal = document.getElementById('quiz-player-modal');
    if (modal) modal.classList.add('hidden');
    activeQuiz = null;
  }
}

function finishQuiz() {
  clearInterval(quizTimerInterval);

  // Ballarni hisoblash (Faqat yakunlangandan so'ng hisoblanadi!)
  let correctCount = 0;
  activeQuiz.questions.forEach((q, idx) => {
    if (userAnswers[idx] === q.correctIndex) {
      correctCount++;
    }
  });

  const totalQuestions = activeQuiz.questions.length;
  const percentage = Math.round((correctCount / totalQuestions) * 100);
  const earnedXP = correctCount * 20;

  // Natijani tarixga saqlash
  const record = {
    id: 'attempt-' + Date.now(),
    quizId: activeQuiz.id,
    title: activeQuiz.title,
    subject: activeQuiz.subjectName,
    score: correctCount,
    total: totalQuestions,
    percentage,
    earnedXP,
    date: new Date().toLocaleDateString('uz-UZ'),
    userAnswers: [...userAnswers]
  };

  AppState.quizHistory.unshift(record);
  AppState.save('quizHistory');
  AppState.addNotification(`'${activeQuiz.title}' viktorinasi yakunlandi: ${percentage}% natija (+${earnedXP} XP)!`);

  // Audio va Konfetti effekti
  if (percentage >= 60) {
    AudioSFX.playSuccess();
    triggerConfetti();
  } else {
    AudioSFX.playWrong();
  }

  // O'yinchi modalini yopib, natijalar ekranini ochish
  document.getElementById('quiz-player-modal').classList.add('hidden');
  renderQuizResultsModal(activeQuiz, record);
}

// Konfetti otish funksiyasi
function triggerConfetti() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
}

// Natijalar va chuqur tushuntirishlar ekrani
function renderQuizResultsModal(quiz, record) {
  const modal = document.getElementById('quiz-results-modal');
  if (!modal) return;

  const headline = document.getElementById('results-headline');
  const submessage = document.getElementById('results-submessage');
  const pctElem = document.getElementById('results-percentage');
  const fractionElem = document.getElementById('results-fraction');
  const xpElem = document.getElementById('results-earned-xp');
  const explanationsList = document.getElementById('results-explanations-list');

  if (headline) {
    if (record.percentage === 100) headline.textContent = "Ajoyib! Mukammal Natija! 🏆";
    else if (record.percentage >= 80) headline.textContent = "Yuksak Natija! Barakalla! 🌟";
    else if (record.percentage >= 60) headline.textContent = "Yaxshi, lekin yana o'rganish kerak! 💡";
    else headline.textContent = "Mashg'ulotni takrorlash tavsiya etiladi! 📚";
  }

  if (submessage) {
    submessage.textContent = `${quiz.subjectName} fani bo'yicha test natijangiz muvaffaqiyatli saqlandi.`;
  }

  if (pctElem) pctElem.textContent = `${record.percentage}%`;
  if (fractionElem) fractionElem.textContent = `${record.score} / ${record.total} to'g'ri topildi`;
  if (xpElem) xpElem.textContent = `+${record.earnedXP} XP`;

  // Savollar tahlili va to'liq tushuntirishlar
  if (explanationsList) {
    explanationsList.innerHTML = '';

    quiz.questions.forEach((q, idx) => {
      const chosen = record.userAnswers[idx];
      const isCorrect = chosen === q.correctIndex;
      const card = document.createElement('div');
      card.className = `explanation-card ${isCorrect ? 'is-correct' : 'is-incorrect'}`;

      const chosenText = chosen !== null ? q.options[chosen] : "Belgilanmagan";
      const correctText = q.options[q.correctIndex];

      card.innerHTML = `
        <div class="exp-header">
          <span class="exp-q-text">${idx + 1}. ${escapeHtml(q.question)}</span>
          <span class="exp-badge ${isCorrect ? 'correct' : 'incorrect'}">
            ${isCorrect ? '✓ To\'g\'ri (+20 XP)' : '✗ Noto\'g\'ri (0 XP)'}
          </span>
        </div>

        <div class="exp-answers-row">
          <span class="user-chosen-ans">Sizning javobingiz: <strong>${escapeHtml(chosenText)}</strong></span>
          ${!isCorrect ? `<span class="correct-ans">To'g'ri javob: <strong>${escapeHtml(correctText)}</strong></span>` : ''}
        </div>

        <div class="exp-text-box">
          <strong><i class="fa-solid fa-lightbulb"></i> Tushuntirish:</strong> ${escapeHtml(q.explanation)}
        </div>
      `;

      explanationsList.appendChild(card);
    });
  }

  modal.classList.remove('hidden');

  // Qayta topshirish tugmasi
  const retakeBtn = document.getElementById('btn-retake-quiz');
  if (retakeBtn) {
    retakeBtn.onclick = () => {
      modal.classList.add('hidden');
      startQuiz(quiz.id);
    };
  }

  // Yopish va Bosh sahifaga qaytish
  const closeBtn = document.getElementById('btn-close-results');
  if (closeBtn) {
    closeBtn.onclick = () => {
      modal.classList.add('hidden');
      switchView('dashboard');
    };
  }
}

/* ==========================================================================
   11. HOMEWORK MANAGER (UY VAZIFALARI)
   ========================================================================== */
let taskFilterStatus = 'all';
let taskFilterSubject = 'all';
let taskSortBy = 'date-asc';

function renderHomework() {
  const container = document.getElementById('tasks-list-container');
  if (!container) return;

  // Filter hisoblagichlari
  const total = AppState.tasks.length;
  const pending = AppState.tasks.filter(t => !t.completed).length;
  const completed = AppState.tasks.filter(t => t.completed).length;

  const allCnt = document.getElementById('task-filter-all-cnt');
  const pendingCnt = document.getElementById('task-filter-pending-cnt');
  const completedCnt = document.getElementById('task-filter-completed-cnt');
  const sidebarBadge = document.getElementById('pending-tasks-badge');

  if (allCnt) allCnt.textContent = total;
  if (pendingCnt) pendingCnt.textContent = pending;
  if (completedCnt) completedCnt.textContent = completed;
  if (sidebarBadge) sidebarBadge.textContent = pending;

  // Filtrlash
  let list = AppState.tasks.filter(task => {
    if (taskFilterStatus === 'pending' && task.completed) return false;
    if (taskFilterStatus === 'completed' && !task.completed) return false;
    if (taskFilterSubject !== 'all' && task.subject !== taskFilterSubject) return false;
    return true;
  });

  // Saralash
  list.sort((a, b) => {
    if (taskSortBy === 'date-asc') return new Date(a.dueDate) - new Date(b.dueDate);
    if (taskSortBy === 'date-desc') return new Date(b.dueDate) - new Date(a.dueDate);
    if (taskSortBy === 'priority') {
      const pMap = { urgent: 3, important: 2, normal: 1 };
      return (pMap[b.priority] || 1) - (pMap[a.priority] || 1);
    }
    if (taskSortBy === 'created') return b.createdAt - a.createdAt;
    return 0;
  });

  container.innerHTML = '';

  if (list.length === 0) {
    container.innerHTML = `
      <div class="empty-state glass-card">
        <i class="fa-solid fa-clipboard-check"></i>
        <h4>Ushbu bo'limda vazifalar mavjud emas</h4>
        <p>Yangi vazifa qo'shish orqali kuningizni rejalashtiring va barchasiga o'z vaqtida ulguring!</p>
      </div>
    `;
    return;
  }

  list.forEach(task => {
    const card = document.createElement('div');
    card.className = `task-card glass-card ${task.completed ? 'completed' : ''}`;

    let priorityBadge = '<span class="priority-tag priority-normal">Oddiy</span>';
    if (task.priority === 'urgent') priorityBadge = '<span class="priority-tag priority-urgent">🔥 Shoshilinch</span>';
    if (task.priority === 'important') priorityBadge = '<span class="priority-tag priority-important">⭐ Muhim</span>';

    card.innerHTML = `
      <div class="task-left-section">
        <div class="task-checkbox-custom" data-id="${task.id}" title="${task.completed ? 'Bajarilmagan deb belgilash' : 'Bajarildi deb belgilash'}"></div>
        <div class="task-details">
          <span class="task-main-title">${escapeHtml(task.title)}</span>
          <div class="task-sub-info">
            <span class="text-accent"><strong><i class="fa-solid fa-book"></i> ${escapeHtml(task.subject)}</strong></span>
            <span><i class="fa-regular fa-calendar"></i> Topshirish: ${task.dueDate}</span>
            ${priorityBadge}
            ${task.notes ? `<span><i class="fa-regular fa-comment-dots"></i> ${escapeHtml(task.notes)}</span>` : ''}
          </div>
        </div>
      </div>

      <div class="task-actions">
        <button class="task-del-btn" data-id="${task.id}" title="Vazifani o'chirish">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `;

    container.appendChild(card);
  });
}

function handleAddTask(e) {
  e.preventDefault();
  const titleInput = document.getElementById('task-title');
  const subjectInput = document.getElementById('task-subject');
  const dateInput = document.getElementById('task-due-date');
  const priorityInput = document.getElementById('task-priority');
  const notesInput = document.getElementById('task-notes');

  const title = titleInput.value.trim();
  const subject = subjectInput.value;
  const dueDate = dateInput.value;
  const priority = priorityInput.value;
  const notes = notesInput ? notesInput.value.trim() : '';

  if (!title) {
    showToast("Iltimos, vazifa mazmunini kiriting!", "warning");
    return;
  }
  if (!subject) {
    showToast("Iltimos, fanni tanlang!", "warning");
    return;
  }
  if (!dueDate) {
    showToast("Iltimos, topshirish muddatini belgilang!", "warning");
    return;
  }

  const newTask = {
    id: 'task-' + Date.now(),
    title,
    subject,
    dueDate,
    priority,
    notes,
    completed: false,
    createdAt: Date.now()
  };

  AppState.tasks.unshift(newTask);
  AppState.save('tasks');
  AppState.addNotification(`Yangi vazifa qo'shildi: ${title}`);

  titleInput.value = '';
  notesInput.value = '';

  AudioSFX.playSuccess();
  showToast("Vazifa muvaffaqiyatli saqlandi!", "success");
  renderHomework();
  renderDashboard();
}

function toggleTaskStatus(taskId) {
  const task = AppState.tasks.find(t => t.id === taskId);
  if (!task) return;

  task.completed = !task.completed;
  AppState.save('tasks');

  if (task.completed) {
    AudioSFX.playSuccess();
    showToast("Vazifa bajarildi! +15 XP berildi 🎉", "success");
    AppState.addNotification(`Vazifa bajarildi: ${task.title}`);
  } else {
    AudioSFX.playClick();
    showToast("Vazifa faol holatga qaytarildi.", "info");
  }

  renderHomework();
  renderDashboard();
}

function deleteTask(taskId) {
  if (confirm("Ushbu vazifani o'chirmoqchimisiz?")) {
    AppState.tasks = AppState.tasks.filter(t => t.id !== taskId);
    AppState.save('tasks');
    AudioSFX.playClick();
    showToast("Vazifa o'chirildi.", "info");
    renderHomework();
    renderDashboard();
  }
}

/* ==========================================================================
   12. TIMETABLE SECTION (DARS JADVALI)
   ========================================================================== */
let currentTimetableDay = 'monday';

function renderTimetableDay(dayKey) {
  currentTimetableDay = dayKey;
  const tabs = document.querySelectorAll('.day-tab-btn');
  tabs.forEach(t => {
    if (t.dataset.day === dayKey) t.classList.add('active');
    else t.classList.remove('active');
  });

  const dayTitles = {
    monday: 'Dushanba kungi darslar',
    tuesday: 'Seshanba kungi darslar',
    wednesday: 'Chorshanba kungi darslar',
    thursday: 'Payshanba kungi darslar',
    friday: 'Juma kungi darslar',
    saturday: 'Shanba kungi darslar'
  };

  const dayTitleElem = document.getElementById('current-timetable-day-title');
  if (dayTitleElem) dayTitleElem.textContent = dayTitles[dayKey] || 'Dars jadvali';

  // "Bugun" nishonini tekshirish
  const daysArray = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const todayKey = daysArray[new Date().getDay()];
  const todayIndicator = document.getElementById('is-today-indicator');
  if (todayIndicator) {
    if (todayKey === dayKey) todayIndicator.classList.add('show');
    else todayIndicator.classList.remove('show');
  }

  // Darslar ro'yxatini chiqarish
  const container = document.getElementById('lessons-schedule-list');
  if (!container) return;

  const lessons = AppState.timetable[dayKey] || [];
  container.innerHTML = '';

  const defaultSlots = [
    { slot: 1, time: "08:30 - 09:15" },
    { slot: 2, time: "09:25 - 10:10" },
    { slot: 3, time: "10:20 - 11:05" },
    { slot: 4, time: "11:25 - 12:10" },
    { slot: 5, time: "12:20 - 13:05" },
    { slot: 6, time: "13:15 - 14:00" }
  ];

  defaultSlots.forEach((slotInfo, idx) => {
    const existing = lessons.find(l => l.slot === slotInfo.slot) || {
      slot: slotInfo.slot,
      time: slotInfo.time,
      subject: '',
      room: '',
      teacher: ''
    };

    const hasLesson = existing.subject && existing.subject.trim() !== '' && existing.subject !== '-';
    const card = document.createElement('div');
    card.className = `lesson-slot-card ${hasLesson ? '' : 'empty-slot'}`;

    card.innerHTML = `
      <div class="slot-card-top">
        <span class="slot-order">${existing.slot}-dars</span>
        <span class="slot-time-badge"><i class="fa-regular fa-clock"></i> ${existing.time}</span>
      </div>

      <div class="slot-content">
        <h4>${hasLesson ? escapeHtml(existing.subject) : '<span style="color:var(--text-subtle);">Bo\'sh soat</span>'}</h4>
        <div class="slot-meta-items">
          <span><i class="fa-solid fa-location-dot"></i> ${hasLesson && existing.room ? escapeHtml(existing.room) : 'Xona belgilanmagan'}</span>
          <span><i class="fa-solid fa-user-tie"></i> ${hasLesson && existing.teacher ? escapeHtml(existing.teacher) : 'O\'qituvchi belgilanmagan'}</span>
        </div>
      </div>

      <div class="slot-card-bottom">
        <button class="btn btn-sm ${hasLesson ? 'btn-secondary' : 'btn-glass'} edit-lesson-btn" data-slot="${existing.slot}" data-day="${dayKey}">
          <i class="fa-solid fa-pen"></i> ${hasLesson ? 'Tahrirlash' : 'Dars kiritish'}
        </button>
      </div>
    `;

    container.appendChild(card);
  });

  // Har bir kun badge laridagi darslar sonini yangilash
  updateTimetableBadges();
}

function updateTimetableBadges() {
  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  days.forEach(d => {
    const badge = document.getElementById(`badge-${d}`);
    if (badge) {
      const lessons = AppState.timetable[d] || [];
      const count = lessons.filter(l => l.subject && l.subject.trim() !== '' && l.subject !== '-').length;
      badge.textContent = `${count} dars`;
    }
  });
}

function openLessonModal(dayKey, slotNumber) {
  AudioSFX.playClick();
  const modal = document.getElementById('lesson-modal');
  if (!modal) return;

  const lessons = AppState.timetable[dayKey] || [];
  const lesson = lessons.find(l => l.slot === slotNumber) || {
    slot: slotNumber,
    time: "08:30 - 09:15",
    subject: '',
    room: '',
    teacher: ''
  };

  document.getElementById('lesson-day-key').value = dayKey;
  document.getElementById('lesson-slot-index').value = slotNumber;
  document.getElementById('lesson-slot-time').value = `${slotNumber}-dars (${lesson.time || 'Vaqt'})`;
  document.getElementById('lesson-subject-input').value = lesson.subject || '';
  document.getElementById('lesson-room-input').value = lesson.room || '';
  document.getElementById('lesson-teacher-input').value = lesson.teacher || '';

  modal.classList.remove('hidden');
}

function saveLessonForm(e) {
  e.preventDefault();
  const dayKey = document.getElementById('lesson-day-key').value;
  const slotNumber = parseInt(document.getElementById('lesson-slot-index').value);
  const subject = document.getElementById('lesson-subject-input').value.trim();
  const room = document.getElementById('lesson-room-input').value.trim();
  const teacher = document.getElementById('lesson-teacher-input').value.trim();

  if (!subject) {
    showToast("Fan nomini kiritish majburiy!", "warning");
    return;
  }

  if (!AppState.timetable[dayKey]) AppState.timetable[dayKey] = [];

  const existingIdx = AppState.timetable[dayKey].findIndex(l => l.slot === slotNumber);
  const defaultTimes = ["08:30 - 09:15", "09:25 - 10:10", "10:20 - 11:05", "11:25 - 12:10", "12:20 - 13:05", "13:15 - 14:00"];

  const updatedObj = {
    slot: slotNumber,
    time: defaultTimes[slotNumber - 1] || "08:30 - 09:15",
    subject,
    room,
    teacher
  };

  if (existingIdx >= 0) {
    AppState.timetable[dayKey][existingIdx] = updatedObj;
  } else {
    AppState.timetable[dayKey].push(updatedObj);
  }

  AppState.timetable[dayKey].sort((a, b) => a.slot - b.slot);
  AppState.save('timetable');
  AppState.addNotification(`Dars jadvali yangilandi: ${subject} (${slotNumber}-dars)`);

  AudioSFX.playSuccess();
  showToast("Dars muvaffaqiyatli saqlandi!", "success");

  document.getElementById('lesson-modal').classList.add('hidden');
  renderTimetableDay(dayKey);
  renderDashboard();
}

function clearLessonSlot() {
  const dayKey = document.getElementById('lesson-day-key').value;
  const slotNumber = parseInt(document.getElementById('lesson-slot-index').value);

  if (AppState.timetable[dayKey]) {
    AppState.timetable[dayKey] = AppState.timetable[dayKey].filter(l => l.slot !== slotNumber);
    AppState.save('timetable');
    showToast("Dars soati bo'shatildi.", "info");
    document.getElementById('lesson-modal').classList.add('hidden');
    renderTimetableDay(dayKey);
    renderDashboard();
  }
}

/* ==========================================================================
   13. POMODORO STUDY TIMER (FOKUS TAYMERI)
   ========================================================================== */
const TIMER_DURATIONS = {
  'pomodoro': 25 * 60,
  'short-break': 5 * 60,
  'long-break': 15 * 60,
  'custom': 30 * 60
};

let currentTimerMode = 'pomodoro';
let timerTotalSeconds = 25 * 60;
let timerRemainingSeconds = 25 * 60;
let timerRunning = false;
let timerInterval = null;
let tickingSoundActive = false;

function initTimer() {
  updateTimerDisplay();
}

function setTimerMode(mode) {
  AudioSFX.playClick();
  currentTimerMode = mode;

  const modeBtns = document.querySelectorAll('.timer-mode-btn');
  modeBtns.forEach(btn => {
    if (btn.dataset.mode === mode) btn.classList.add('active');
    else btn.classList.remove('active');
  });

  const customInputs = document.getElementById('custom-timer-inputs');
  if (customInputs) {
    if (mode === 'custom') customInputs.classList.remove('hidden');
    else customInputs.classList.add('hidden');
  }

  const modeLabels = {
    'pomodoro': 'FOKUS VAQTI',
    'short-break': 'QISQA TANAFFUS',
    'long-break': 'KATTA TANAFFUS',
    'custom': 'MAXSUS FOKUS'
  };

  const modeLabelElem = document.getElementById('timer-mode-label');
  if (modeLabelElem) modeLabelElem.textContent = modeLabels[mode];

  pauseTimer();

  if (mode === 'custom') {
    const mins = parseInt(document.getElementById('custom-minutes-input').value) || 30;
    timerTotalSeconds = mins * 60;
  } else {
    timerTotalSeconds = TIMER_DURATIONS[mode];
  }

  timerRemainingSeconds = timerTotalSeconds;
  updateTimerDisplay();
}

function startTimer() {
  if (timerRunning) return;
  timerRunning = true;
  AudioSFX.playClick();

  const playBtn = document.getElementById('timer-start-pause-btn');
  const playIcon = document.getElementById('timer-play-icon');
  const playText = document.getElementById('timer-play-text');
  const statusHint = document.getElementById('timer-status-hint');

  if (playIcon) playIcon.className = 'fa-solid fa-pause';
  if (playText) playText.textContent = 'Pauza';
  if (statusHint) statusHint.textContent = 'Fokus vaqti ketmoqda. Chalg\'imang!';

  // Fon ovozi
  const synthAmbientCheck = document.getElementById('timer-ambient-synth');
  if (synthAmbientCheck && synthAmbientCheck.checked) {
    AudioSFX.toggleAmbient(true);
  }

  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (timerRemainingSeconds > 0) {
      timerRemainingSeconds--;
      updateTimerDisplay();

      // Sekundomer ovozi (agar yoqilgan bo'lsa)
      if (tickingSoundActive) {
        AudioSFX.playTick();
      }
    } else {
      // Taymer yakunlandi!
      handleTimerComplete();
    }
  }, 1000);
}

function pauseTimer() {
  timerRunning = false;
  clearInterval(timerInterval);

  const playIcon = document.getElementById('timer-play-icon');
  const playText = document.getElementById('timer-play-text');
  const statusHint = document.getElementById('timer-status-hint');

  if (playIcon) playIcon.className = 'fa-solid fa-play';
  if (playText) playText.textContent = 'Boshlash';
  if (statusHint) statusHint.textContent = 'Taymer to\'xtatildi.';

  AudioSFX.toggleAmbient(false);
}

function resetTimer() {
  AudioSFX.playClick();
  pauseTimer();
  timerRemainingSeconds = timerTotalSeconds;
  updateTimerDisplay();
  const statusHint = document.getElementById('timer-status-hint');
  if (statusHint) statusHint.textContent = 'Tayyormisiz? Boshlashni bosing!';
}

function skipTimer() {
  AudioSFX.playClick();
  if (confirm("Ushbu sessiyani yakunlamasdan o'tkazib yubormoqchimisiz?")) {
    resetTimer();
  }
}

function updateTimerDisplay() {
  const digitsElem = document.getElementById('timer-digits');
  const progressRing = document.getElementById('timer-progress-ring');

  const mins = Math.floor(timerRemainingSeconds / 60);
  const secs = timerRemainingSeconds % 60;
  const timeFormatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

  if (digitsElem) digitsElem.textContent = timeFormatted;

  // Brauzer tab nomida vaqtni ko'rsatish
  if (timerRunning) {
    document.title = `(${timeFormatted}) SMART O'QUVCHI 2.0`;
  } else {
    document.title = "SMART O'QUVCHI 2.0 — Zamonaviy Ta'lim Platformasi";
  }

  // SVG aylanasi progressi
  if (progressRing) {
    const circumference = 2 * Math.PI * 130; // 816.81
    const progress = (timerTotalSeconds - timerRemainingSeconds) / timerTotalSeconds;
    const offset = circumference * (1 - progress);
    progressRing.style.strokeDashoffset = offset;
  }

  renderTimerStats();
}

function handleTimerComplete() {
  pauseTimer();
  AudioSFX.playTimerBell();
  triggerConfetti();

  const isFocusMode = currentTimerMode === 'pomodoro' || currentTimerMode === 'custom';
  if (isFocusMode) {
    const minsEarned = Math.round(timerTotalSeconds / 60);
    AppState.timerStats.totalFocusMinutes += minsEarned;
    AppState.timerStats.completedSessions += 1;
    AppState.timerStats.todaySessions += 1;
    AppState.save('timerStats');

    showToast(`Tabriklaymiz! ${minsEarned} daqiqalik fokus sessiyasi yakunlandi. Dam oling!`, 'success');
    AppState.addNotification(`Fokus sessiyasi muvaffaqiyatli tugadi: +${minsEarned} daqiqa o'qish vaqti.`);
  } else {
    showToast("Tanaffus vaqti tugadi. Yangi fokus sessiyasiga tayyormisiz?", 'info');
  }

  renderTimerStats();
  renderDashboard();
}

function renderTimerStats() {
  const sessElem = document.getElementById('timer-stat-sessions');
  const minsElem = document.getElementById('timer-stat-total-mins');
  const targetPctElem = document.getElementById('timer-target-pct');
  const targetBar = document.getElementById('timer-target-bar');

  if (sessElem) sessElem.textContent = AppState.timerStats.todaySessions;
  if (minsElem) minsElem.textContent = `${AppState.timerStats.totalFocusMinutes} daq`;

  // Kunlik me'yor (4 sessiya)
  const todaySess = AppState.timerStats.todaySessions;
  const targetPct = Math.min(100, Math.round((todaySess / 4) * 100));
  if (targetPctElem) targetPctElem.textContent = `${targetPct}%`;
  if (targetBar) targetBar.style.width = `${targetPct}%`;
}

/* ==========================================================================
   14. ANALYTICS & ACHIEVEMENTS SECTION (TAHLIL VA YUTUQLAR)
   ========================================================================== */
function renderAnalytics() {
  const stats = AppState.getCalculatedStats();

  const rankElem = document.getElementById('analytics-rank-title');
  if (rankElem) rankElem.textContent = stats.rankTitle;

  // Fanlar kesimida o'zlashtirish foizlari
  renderSubjectMasteryBars();

  // Yutuqlar (Nishonlar)
  renderAchievements();

  // Viktorinalar tarixi jadvali
  renderQuizHistoryTable();
}

function renderSubjectMasteryBars() {
  const container = document.getElementById('subject-mastery-container');
  if (!container) return;
  container.innerHTML = '';

  const subjects = [
    { key: 'math', name: 'Matematika', icon: 'fa-square-root-variable', color: 'var(--primary)' },
    { key: 'english', name: 'Ingliz tili', icon: 'fa-language', color: 'var(--secondary)' },
    { key: 'uzbek', name: 'Ona tili va adabiyot', icon: 'fa-book', color: 'var(--emerald)' },
    { key: 'it', name: 'Informatika va IT', icon: 'fa-code', color: 'var(--accent-cyan)' }
  ];

  subjects.forEach(sub => {
    // Ushbu fan bo'yicha yechilgan testlar
    const attempts = AppState.quizHistory.filter(h => {
      const q = QUIZ_DATABASE.find(item => item.id === h.quizId);
      return q && q.category === sub.key;
    });

    let avg = 0;
    if (attempts.length > 0) {
      const sum = attempts.reduce((acc, curr) => acc + curr.percentage, 0);
      avg = Math.round(sum / attempts.length);
    }

    const div = document.createElement('div');
    div.className = 'subject-bar-item';
    div.innerHTML = `
      <div class="sb-header">
        <span class="sb-title"><i class="fa-solid ${sub.icon}"></i> ${sub.name}</span>
        <span class="sb-score">${avg}% (${attempts.length} ta test)</span>
      </div>
      <div class="goal-progress-track">
        <div class="goal-progress-fill" style="width: ${avg}%; background: ${sub.color};"></div>
      </div>
    `;
    container.appendChild(div);
  });
}

function renderAchievements() {
  const container = document.getElementById('achievements-container');
  const counterElem = document.getElementById('unlocked-badges-count');
  if (!container) return;

  const stats = AppState.getCalculatedStats();

  const achievementsList = [
    {
      id: 'first-quiz',
      title: 'Birinchi Qadam',
      desc: "Kamida bitta viktorinani to'liq topshiring.",
      icon: 'fa-play',
      unlocked: stats.totalQuizzes >= 1
    },
    {
      id: 'perfect-score',
      title: 'Bilimdon Usta',
      desc: "Har qanday testdan 100% natija qayd eting.",
      icon: 'fa-star',
      unlocked: stats.highestQuizPct === 100
    },
    {
      id: 'task-master',
      title: 'Tartibli O\'quvchi',
      desc: "5 ta uy vazifasini muvaffaqiyatli yakunlang.",
      icon: 'fa-check-double',
      unlocked: stats.completedTasksCount >= 5
    },
    {
      id: 'focus-pro',
      title: 'Fokus Giganti',
      desc: "Fokus taymerida jami 50+ daqiqa dars qiling.",
      icon: 'fa-hourglass-half',
      unlocked: stats.focusMinutes >= 50
    },
    {
      id: 'all-subjects',
      title: 'Har Tomonlama A\'lochi',
      desc: "Barcha 4 ta fandan kamida 1 martadan test topshiring.",
      icon: 'fa-graduation-cap',
      unlocked: checkAllSubjectsAttempted()
    },
    {
      id: 'xp-legend',
      title: 'XP Afsonasi',
      desc: "Platformada 300 tadan ortiq XP to'plang.",
      icon: 'fa-crown',
      unlocked: stats.totalXP >= 300
    }
  ];

  const unlockedCount = achievementsList.filter(a => a.unlocked).length;
  if (counterElem) counterElem.textContent = `${unlockedCount} / ${achievementsList.length} ochildi`;

  container.innerHTML = '';
  achievementsList.forEach(ach => {
    const div = document.createElement('div');
    div.className = `badge-card ${ach.unlocked ? 'unlocked' : 'locked'}`;
    div.innerHTML = `
      <div class="badge-icon-box">
        <i class="fa-solid ${ach.icon}"></i>
      </div>
      <div class="badge-info">
        <h5>${ach.title} ${ach.unlocked ? '✓' : '🔒'}</h5>
        <p>${ach.desc}</p>
      </div>
    `;
    container.appendChild(div);
  });
}

function checkAllSubjectsAttempted() {
  const categories = new Set();
  AppState.quizHistory.forEach(h => {
    const q = QUIZ_DATABASE.find(item => item.id === h.quizId);
    if (q) categories.add(q.category);
  });
  return categories.size >= 4;
}

function renderQuizHistoryTable() {
  const tbody = document.getElementById('quiz-history-tbody');
  if (!tbody) return;
  tbody.innerHTML = '';

  if (AppState.quizHistory.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:20px; color:var(--text-subtle);">Hozircha testlar tarixi mavjud emas.</td></tr>`;
    return;
  }

  AppState.quizHistory.forEach(item => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${item.date}</td>
      <td><span class="text-accent"><strong>${escapeHtml(item.subject)}</strong></span></td>
      <td>${escapeHtml(item.title)}</td>
      <td>${item.score} / ${item.total}</td>
      <td><strong style="color:var(--emerald);">${item.percentage}%</strong></td>
      <td>+${item.earnedXP} XP</td>
    `;
    tbody.appendChild(tr);
  });
}

/* ==========================================================================
   15. NOTIFICATIONS RENDERING
   ========================================================================== */
function renderNotifications() {
  const list = document.getElementById('notifications-list');
  const dot = document.getElementById('header-notif-dot');
  if (!list) return;

  list.innerHTML = '';

  if (AppState.notifications.length === 0) {
    if (dot) dot.style.display = 'none';
    list.innerHTML = `<li class="notification-item"><span class="notif-text">Yangi bildirishnomalar yo'q.</span></li>`;
    return;
  }

  if (dot) dot.style.display = 'block';

  AppState.notifications.forEach(n => {
    const li = document.createElement('li');
    li.className = 'notification-item';
    li.innerHTML = `
      <span class="notif-text">${escapeHtml(n.text)}</span>
      <span class="notif-time">${n.time}</span>
    `;
    list.appendChild(li);
  });
}

/* ==========================================================================
   16. SETTINGS & PROFILE MANAGEMENT
   ========================================================================== */
function initSettingsUI() {
  const nameInput = document.getElementById('settings-name-input');
  const gradeInput = document.getElementById('settings-grade-input');
  const schoolInput = document.getElementById('settings-school-input');
  const soundSwitch = document.getElementById('settings-sound-switch');
  const glowSwitch = document.getElementById('settings-glow-switch');
  const particlesSwitch = document.getElementById('settings-particles-switch');

  if (nameInput) nameInput.value = AppState.profile.name;
  if (gradeInput) gradeInput.value = AppState.profile.grade;
  if (schoolInput) schoolInput.value = AppState.profile.school;

  if (soundSwitch) soundSwitch.checked = AppState.settings.soundEnabled;
  if (glowSwitch) glowSwitch.checked = AppState.settings.glowEnabled;
  if (particlesSwitch) particlesSwitch.checked = AppState.settings.particlesEnabled;

  // Sound tugmasi matni
  updateSoundStatusLabel();
}

function updateSoundStatusLabel() {
  const soundText = document.getElementById('sound-status-text');
  const soundIcon = document.getElementById('sound-icon');
  const headerSoundBtn = document.getElementById('header-sound-btn');
  const isEnabled = AppState.settings.soundEnabled;

  if (soundText) soundText.textContent = isEnabled ? "Ovoz: Yoqilgan" : "Ovoz: O'chirilgan";
  if (soundIcon) soundIcon.className = isEnabled ? "fa-solid fa-volume-high" : "fa-solid fa-volume-xmark";
  if (headerSoundBtn) {
    headerSoundBtn.innerHTML = `<i class="fa-solid ${isEnabled ? 'fa-volume-high' : 'fa-volume-xmark'}"></i>`;
  }
}

function toggleGlobalSound() {
  AppState.settings.soundEnabled = !AppState.settings.soundEnabled;
  AppState.save('settings');
  updateSoundStatusLabel();

  const settingsSwitch = document.getElementById('settings-sound-switch');
  if (settingsSwitch) settingsSwitch.checked = AppState.settings.soundEnabled;

  if (AppState.settings.soundEnabled) {
    AudioSFX.playClick();
    showToast("Ovoz effektlari yoqildi.", "info");
  } else {
    showToast("Ovoz effektlari o'chirildi.", "info");
  }
}

/* ==========================================================================
   17. UTILITY HELPERS
   ========================================================================== */
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function getRelativeDateString(daysOffset = 0) {
  const d = new Date();
  d.setDate(d.getDate() + daysOffset);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function formatCurrentDate() {
  const elem = document.getElementById('current-date-display');
  if (!elem) return;
  const days = ['Yakshanba', 'Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba'];
  const months = ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentyabr', 'Oktabr', 'Noyabr', 'Dekabr'];

  const now = new Date();
  const dayName = days[now.getDay()];
  const monthName = months[now.getMonth()];
  elem.textContent = `${dayName}, ${now.getDate()}-${monthName}, ${now.getFullYear()}`;
}

/* ==========================================================================
   18. APPLICATION INITIALIZATION & EVENT LISTENERS
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Ma'lumotlarni yuklash
  AppState.load();

  // 2. Orqa fon zarrachalarini ishga tushirish
  new ParticleBackground();

  // 3. Sana va UI elementlarini yangilash
  formatCurrentDate();
  initSettingsUI();
  updateSoundStatusLabel();

  // 4. Boshlang'ich ko'rinish
  renderDashboard();
  renderQuizzesList();
  renderHomework();
  renderTimetableDay(currentTimetableDay);
  renderTimerStats();
  initTimer();
  renderNotifications();

  // Top profile ma'lumotlari
  const headerUserName = document.getElementById('header-user-name');
  const sidebarUserName = document.getElementById('sidebar-user-name');
  const sidebarUserGrade = document.getElementById('sidebar-user-grade');
  if (headerUserName) headerUserName.textContent = AppState.profile.name.split(' ')[0];
  if (sidebarUserName) sidebarUserName.textContent = AppState.profile.name;
  if (sidebarUserGrade) sidebarUserGrade.textContent = `${AppState.profile.grade} • A'lochi`;

  // --- EVENT LISTENERS ---

  // Navigatsiya menyusi
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const view = link.dataset.view;
      if (view) switchView(view);
    });
  });

  // Mobil menyu
  const mobileToggle = document.getElementById('mobile-sidebar-toggle');
  const mobileClose = document.getElementById('mobile-sidebar-close');
  const sidebar = document.getElementById('sidebar');

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      AudioSFX.playClick();
      sidebar.classList.add('mobile-open');
    });
  }
  if (mobileClose) {
    mobileClose.addEventListener('click', () => {
      AudioSFX.playClick();
      sidebar.classList.remove('mobile-open');
    });
  }

  // Ovoz tugmalari
  const toggleSoundBtn = document.getElementById('toggle-sound-btn');
  const headerSoundBtn = document.getElementById('header-sound-btn');
  if (toggleSoundBtn) toggleSoundBtn.addEventListener('click', toggleGlobalSound);
  if (headerSoundBtn) headerSoundBtn.addEventListener('click', toggleGlobalSound);

  // Bildirishnomalar darchasi
  const notifBtn = document.getElementById('notification-btn');
  const notifDropdown = document.getElementById('notifications-dropdown');
  const clearNotifsBtn = document.getElementById('clear-notifications');

  if (notifBtn && notifDropdown) {
    notifBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      notifDropdown.classList.toggle('show');
    });
    document.addEventListener('click', (e) => {
      if (!notifDropdown.contains(e.target) && e.target !== notifBtn) {
        notifDropdown.classList.remove('show');
      }
    });
  }

  if (clearNotifsBtn) {
    clearNotifsBtn.addEventListener('click', () => {
      AppState.notifications = [];
      AppState.save('notifications');
      renderNotifications();
      showToast("Bildirishnomalar tozalandi.", "info");
    });
  }

  // Profil tugmasi sozlamalarga o'tishi
  const profileChip = document.getElementById('profile-chip-btn');
  if (profileChip) {
    profileChip.addEventListener('click', () => switchView('settings'));
  }

  // Dashboard Tezkor tugmalari
  const btnQuickQuiz = document.getElementById('btn-quick-quiz');
  const btnQuickTask = document.getElementById('btn-quick-task');
  const btnQuickTimer = document.getElementById('btn-quick-timer');

  if (btnQuickQuiz) btnQuickQuiz.addEventListener('click', () => switchView('quizzes'));
  if (btnQuickTask) btnQuickTask.addEventListener('click', () => switchView('homework'));
  if (btnQuickTimer) btnQuickTimer.addEventListener('click', () => switchView('timer'));

  const linkToTimetable = document.getElementById('link-to-timetable');
  const linkToHomework = document.getElementById('link-to-homework');
  const linkToQuizzes = document.getElementById('link-to-quizzes');

  if (linkToTimetable) linkToTimetable.addEventListener('click', () => switchView('timetable'));
  if (linkToHomework) linkToHomework.addEventListener('click', () => switchView('homework'));
  if (linkToQuizzes) linkToQuizzes.addEventListener('click', () => switchView('quizzes'));

  // Kunlik maqsad qo'shish formasi
  const addGoalForm = document.getElementById('add-goal-form');
  if (addGoalForm) {
    addGoalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('goal-input-text');
      const text = input.value.trim();
      if (!text) return;

      AppState.goals.push({
        id: 'g-' + Date.now(),
        text,
        completed: false
      });
      AppState.save('goals');
      input.value = '';
      AudioSFX.playSuccess();
      showToast("Yangi maqsad qo'shildi!", "success");
      renderDailyGoalsWidget();
      renderDashboard();
    });
  }

  // Kunlik maqsadlarni boshqarish (delegatsiya)
  const goalsList = document.getElementById('dashboard-goals-list');
  if (goalsList) {
    goalsList.addEventListener('click', (e) => {
      const checkbox = e.target.closest('.goal-checkbox');
      const deleteBtn = e.target.closest('.goal-delete-btn');

      if (checkbox) {
        const id = checkbox.dataset.id;
        const goal = AppState.goals.find(g => g.id === id);
        if (goal) {
          goal.completed = checkbox.checked;
          AppState.save('goals');
          if (goal.completed) {
            AudioSFX.playSuccess();
            showToast("Maqsad bajarildi! +10 XP", "success");
          } else {
            AudioSFX.playClick();
          }
          renderDailyGoalsWidget();
          renderDashboard();
        }
      }

      if (deleteBtn) {
        const id = deleteBtn.dataset.id;
        AppState.goals = AppState.goals.filter(g => g.id !== id);
        AppState.save('goals');
        AudioSFX.playClick();
        renderDailyGoalsWidget();
        renderDashboard();
      }
    });
  }

  // Viktorinalar filter va qidiruv
  const quizSearchInput = document.getElementById('quiz-search-input');
  if (quizSearchInput) {
    quizSearchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value;
      renderQuizzesList();
    });
  }

  const categoryTabs = document.getElementById('quiz-category-tabs');
  if (categoryTabs) {
    categoryTabs.addEventListener('click', (e) => {
      const btn = e.target.closest('.tab-btn');
      if (btn) {
        AudioSFX.playClick();
        categoryTabs.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeCategoryFilter = btn.dataset.category;
        renderQuizzesList();
      }
    });
  }

  // Viktorinani boshlash tugmalari (delegatsiya)
  const quizzesContainer = document.getElementById('quizzes-container');
  if (quizzesContainer) {
    quizzesContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.start-quiz-btn');
      if (btn) {
        const quizId = btn.dataset.quizId;
        startQuiz(quizId);
      }
    });
  }

  // Viktorina player boshqaruvi
  const playerNextBtn = document.getElementById('player-next-btn');
  const playerExitBtn = document.getElementById('player-exit-btn');
  if (playerNextBtn) playerNextBtn.addEventListener('click', handleNextQuestion);
  if (playerExitBtn) playerExitBtn.addEventListener('click', exitQuizModal);

  // Uy vazifalari formasi va filtrlari
  const newTaskForm = document.getElementById('new-task-form');
  if (newTaskForm) newTaskForm.addEventListener('submit', handleAddTask);

  const statusFilters = document.getElementById('task-status-filters');
  if (statusFilters) {
    statusFilters.addEventListener('click', (e) => {
      const pill = e.target.closest('.filter-pill');
      if (pill) {
        AudioSFX.playClick();
        statusFilters.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        taskFilterStatus = pill.dataset.filter;
        renderHomework();
      }
    });
  }

  const taskSubjectFilter = document.getElementById('task-subject-filter');
  if (taskSubjectFilter) {
    taskSubjectFilter.addEventListener('change', (e) => {
      taskFilterSubject = e.target.value;
      renderHomework();
    });
  }

  const taskSortSelect = document.getElementById('task-sort-by');
  if (taskSortSelect) {
    taskSortSelect.addEventListener('change', (e) => {
      taskSortBy = e.target.value;
      renderHomework();
    });
  }

  // Uy vazifalarini bajarish/o'chirish (delegatsiya)
  const tasksContainer = document.getElementById('tasks-list-container');
  if (tasksContainer) {
    tasksContainer.addEventListener('click', (e) => {
      const checkBtn = e.target.closest('.task-checkbox-custom');
      const delBtn = e.target.closest('.task-del-btn');

      if (checkBtn) {
        toggleTaskStatus(checkBtn.dataset.id);
      }
      if (delBtn) {
        deleteTask(delBtn.dataset.id);
      }
    });
  }

  const openAddTaskModalBtn = document.getElementById('open-add-task-modal-btn');
  if (openAddTaskModalBtn) {
    openAddTaskModalBtn.addEventListener('click', () => {
      const titleInput = document.getElementById('task-title');
      if (titleInput) {
        titleInput.scrollIntoView({ behavior: 'smooth' });
        titleInput.focus();
      }
    });
  }

  // Dars jadvali kun tablari
  const timetableDayTabs = document.getElementById('timetable-day-tabs');
  if (timetableDayTabs) {
    timetableDayTabs.addEventListener('click', (e) => {
      const btn = e.target.closest('.day-tab-btn');
      if (btn) {
        AudioSFX.playClick();
        renderTimetableDay(btn.dataset.day);
      }
    });
  }

  // Dars slotini tahrirlash (delegatsiya)
  const lessonsScheduleList = document.getElementById('lessons-schedule-list');
  if (lessonsScheduleList) {
    lessonsScheduleList.addEventListener('click', (e) => {
      const btn = e.target.closest('.edit-lesson-btn');
      if (btn) {
        const slot = parseInt(btn.dataset.slot);
        const day = btn.dataset.day;
        openLessonModal(day, slot);
      }
    });
  }

  // Yangi dars soati qo'shish tugmasi
  const btnAddLessonSlot = document.getElementById('btn-add-lesson-slot');
  if (btnAddLessonSlot) {
    btnAddLessonSlot.addEventListener('click', () => {
      const lessons = AppState.timetable[currentTimetableDay] || [];
      const nextSlot = lessons.length < 6 ? lessons.length + 1 : 1;
      openLessonModal(currentTimetableDay, nextSlot);
    });
  }

  // Namuna jadval yuklash
  const btnLoadSample = document.getElementById('btn-load-sample-timetable');
  if (btnLoadSample) {
    btnLoadSample.addEventListener('click', () => {
      if (confirm("Haqiqatan ham barcha kunlarga namuna dars jadvalini yuklamoqchimisiz?")) {
        AppState.timetable = JSON.parse(JSON.stringify(DEFAULT_TIMETABLE));
        AppState.save('timetable');
        AudioSFX.playSuccess();
        showToast("Namuna dars jadvali to'liq yuklandi!", "success");
        renderTimetableDay(currentTimetableDay);
        renderDashboard();
      }
    });
  }

  // Dars jadvalini tozalash
  const btnResetTimetable = document.getElementById('btn-reset-timetable');
  if (btnResetTimetable) {
    btnResetTimetable.addEventListener('click', () => {
      if (confirm("Haqiqatan ham joriy kun jadvalini tozalamoqchimisiz?")) {
        AppState.timetable[currentTimetableDay] = [];
        AppState.save('timetable');
        AudioSFX.playClick();
        showToast("Joriy kun jadvali tozalandi.", "info");
        renderTimetableDay(currentTimetableDay);
        renderDashboard();
      }
    });
  }

  // Dars tahrirlash modali
  const lessonForm = document.getElementById('lesson-form');
  const lessonModalClose = document.getElementById('lesson-modal-close');
  const btnClearLessonSlot = document.getElementById('btn-clear-lesson-slot');

  if (lessonForm) lessonForm.addEventListener('submit', saveLessonForm);
  if (lessonModalClose) {
    lessonModalClose.addEventListener('click', () => {
      document.getElementById('lesson-modal').classList.add('hidden');
    });
  }
  if (btnClearLessonSlot) btnClearLessonSlot.addEventListener('click', clearLessonSlot);

  // Fokus Taymeri Rejimlari
  const timerModesBar = document.getElementById('timer-modes-bar');
  if (timerModesBar) {
    timerModesBar.addEventListener('click', (e) => {
      const btn = e.target.closest('.timer-mode-btn');
      if (btn) setTimerMode(btn.dataset.mode);
    });
  }

  const applyCustomTimerBtn = document.getElementById('apply-custom-timer-btn');
  if (applyCustomTimerBtn) {
    applyCustomTimerBtn.addEventListener('click', () => {
      setTimerMode('custom');
      showToast("Maxsus vaqt o'rnatildi.", "info");
    });
  }

  // Taymer asosiy boshqaruvlari
  const timerStartBtn = document.getElementById('timer-start-pause-btn');
  const timerResetBtn = document.getElementById('timer-reset-btn');
  const timerSkipBtn = document.getElementById('timer-skip-btn');

  if (timerStartBtn) {
    timerStartBtn.addEventListener('click', () => {
      if (timerRunning) pauseTimer();
      else startTimer();
    });
  }
  if (timerResetBtn) timerResetBtn.addEventListener('click', resetTimer);
  if (timerSkipBtn) timerSkipBtn.addEventListener('click', skipTimer);

  // Taymer qo'shimcha tovush sozlamalari
  const timerSoundTicking = document.getElementById('timer-sound-ticking');
  const timerAmbientSynth = document.getElementById('timer-ambient-synth');

  if (timerSoundTicking) {
    timerSoundTicking.addEventListener('change', (e) => {
      tickingSoundActive = e.target.checked;
    });
  }

  if (timerAmbientSynth) {
    timerAmbientSynth.addEventListener('change', (e) => {
      if (timerRunning) {
        AudioSFX.toggleAmbient(e.target.checked);
      }
    });
  }

  // Tahlil bo'limi: Tarixni tozalash
  const btnClearQuizHistory = document.getElementById('btn-clear-quiz-history');
  if (btnClearQuizHistory) {
    btnClearQuizHistory.addEventListener('click', () => {
      if (confirm("Haqiqatan ham barcha testlar tarixini tozalamoqchimisiz?")) {
        AppState.quizHistory = [];
        AppState.save('quizHistory');
        AudioSFX.playClick();
        showToast("Testlar tarixi tozalandi.", "info");
        renderAnalytics();
        renderDashboard();
      }
    });
  }

  // Sozlamalar: Profil formasini saqlash
  const settingsProfileForm = document.getElementById('settings-profile-form');
  if (settingsProfileForm) {
    settingsProfileForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('settings-name-input').value.trim();
      const grade = document.getElementById('settings-grade-input').value.trim();
      const school = document.getElementById('settings-school-input').value.trim();

      AppState.profile.name = name;
      AppState.profile.grade = grade;
      AppState.profile.school = school;
      AppState.save('profile');

      if (headerUserName) headerUserName.textContent = name.split(' ')[0];
      if (sidebarUserName) sidebarUserName.textContent = name;
      if (sidebarUserGrade) sidebarUserGrade.textContent = `${grade} • A'lochi`;

      AudioSFX.playSuccess();
      showToast("Profil ma'lumotlari muvaffaqiyatli yangilandi!", "success");
      renderDashboard();
    });
  }

  // Sozlamalar: Effektlar switchlari
  const settingsSoundSwitch = document.getElementById('settings-sound-switch');
  const settingsGlowSwitch = document.getElementById('settings-glow-switch');
  const settingsParticlesSwitch = document.getElementById('settings-particles-switch');

  if (settingsSoundSwitch) {
    settingsSoundSwitch.addEventListener('change', (e) => {
      AppState.settings.soundEnabled = e.target.checked;
      AppState.save('settings');
      updateSoundStatusLabel();
      showToast(`Ovoz effektlari ${e.target.checked ? 'yoqildi' : 'o\'chirildi'}.`, "info");
    });
  }

  if (settingsGlowSwitch) {
    settingsGlowSwitch.addEventListener('change', (e) => {
      AppState.settings.glowEnabled = e.target.checked;
      AppState.save('settings');
      document.body.style.filter = e.target.checked ? 'none' : 'contrast(1.05)';
      showToast(`Neon porlash effekti ${e.target.checked ? 'yoqildi' : 'o\'chirildi'}.`, "info");
    });
  }

  if (settingsParticlesSwitch) {
    settingsParticlesSwitch.addEventListener('change', (e) => {
      AppState.settings.particlesEnabled = e.target.checked;
      AppState.save('settings');
      showToast(`Zarrachalar harakati ${e.target.checked ? 'yoqildi' : 'to\'xtatildi'}.`, "info");
    });
  }

  // Sozlamalar: Ma'lumotlarni eksport qilish (JSON nusxa)
  const btnExportData = document.getElementById('btn-export-data');
  if (btnExportData) {
    btnExportData.addEventListener('click', () => {
      const dump = JSON.stringify(AppState, null, 2);
      navigator.clipboard.writeText(dump).then(() => {
        AudioSFX.playSuccess();
        showToast("Barcha platforma ma'lumotlari xotiraga nusxalandi (Clipboard)!", "success");
      }).catch(() => {
        alert("Eksport qilingan ma'lumotlar:\n" + dump);
      });
    });
  }

  // Sozlamalar: Namunaviy ma'lumotlarni tiklash
  const btnReloadDemo = document.getElementById('btn-reload-demo');
  if (btnReloadDemo) {
    btnReloadDemo.addEventListener('click', () => {
      if (confirm("Namuna ma'lumotlarni qayta tiklashni xohlaysizmi?")) {
        AppState.tasks = JSON.parse(JSON.stringify(DEFAULT_TASKS));
        AppState.timetable = JSON.parse(JSON.stringify(DEFAULT_TIMETABLE));
        AppState.goals = JSON.parse(JSON.stringify(DEFAULT_GOALS));
        AppState.saveAll();
        AudioSFX.playSuccess();
        showToast("Boshlang'ich namunaviy ma'lumotlar qayta tiklandi!", "success");
        renderDashboard();
        renderHomework();
        renderTimetableDay(currentTimetableDay);
      }
    });
  }

  // Sozlamalar: Barcha ma'lumotlarni tozalash (Wipe)
  const btnWipeAllData = document.getElementById('btn-wipe-all-data');
  if (btnWipeAllData) {
    btnWipeAllData.addEventListener('click', () => {
      if (confirm("DIQQAT: Barcha vazifalar, test natijalari va dars jadvali butunlay o'chiriladi. Rozimisiz?")) {
        localStorage.clear();
        AudioSFX.playClick();
        alert("Barcha ma'lumotlar tozalandi. Sahifa qayta yuklanadi.");
        window.location.reload();
      }
    });
  }

  console.log("SMART O'QUVCHI 2.0 muvaffaqiyatli ishga tushirildi!");
});
