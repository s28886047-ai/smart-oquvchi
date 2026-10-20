/**
 * SMART O'QUVCHI 2.0 — SAVOLLAR BAZASI (12 TA FAN, 120+ SAVOL)
 * Har bir fandan 10 tadan savol (Oson, O'rta, Murakkab darajalarda).
 * Barcha savollar tekshirilgan, to'g'ri kalitlar va to'liq o'zbekcha tushuntirishlarga ega.
 */

'use strict';

// 12 TA MAKTAB FANI METAMA'LUMOTLARI
const SUBJECTS_DATA = [
  {
    id: 'math',
    name: 'Matematika',
    categoryName: 'Algebra & Geometriya',
    icon: 'fa-square-root-variable',
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
    badgeClass: 'badge-math',
    desc: "Tenglamalar, funksiyalar, geometrik shakllar, hosilalar va hisoblash qoidalari."
  },
  {
    id: 'english',
    name: 'Ingliz tili',
    categoryName: 'Foreign Languages',
    icon: 'fa-language',
    color: '#3b82f6',
    gradient: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
    badgeClass: 'badge-english',
    desc: "Grammatika, so'z boyligi, zamonlar, predloglar va gap tuzilishi."
  },
  {
    id: 'uzbek',
    name: 'Ona tili va Adabiyot',
    categoryName: 'Ona tili',
    icon: 'fa-book-open',
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #10b981, #047857)',
    badgeClass: 'badge-uzbek',
    desc: "O'zbek tili grammatikasi, imlo qoidalari, mumtoz adabiyot va badiiy asarlar."
  },
  {
    id: 'it',
    name: 'Informatika va IT',
    categoryName: 'Dasturlash & Texnologiya',
    icon: 'fa-code',
    color: '#06b6d4',
    gradient: 'linear-gradient(135deg, #06b6d4, #0891b2)',
    badgeClass: 'badge-it',
    desc: "Python dasturlash, web texnologiyalar, apparat ta'minoti va algoritmlar."
  },
  {
    id: 'physics',
    name: 'Fizika',
    categoryName: 'Aniq fanlar',
    icon: 'fa-atom',
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
    badgeClass: 'badge-physics',
    desc: "Mexanika, termodinamika, elektr zanjirlari, optika va Nyuton qonunlari."
  },
  {
    id: 'chemistry',
    name: 'Kimyo',
    categoryName: 'Tabiiy fanlar',
    icon: 'fa-flask-vial',
    color: '#ec4899',
    gradient: 'linear-gradient(135deg, #ec4899, #be185d)',
    badgeClass: 'badge-chemistry',
    desc: "Davriy jadval, atom tuzilishi, reaksiyalar, kislota va asoslar, organik kimyo."
  },
  {
    id: 'biology',
    name: 'Biologiya',
    categoryName: 'Tabiat & Hayot',
    icon: 'fa-dna',
    color: '#14b8a6',
    gradient: 'linear-gradient(135deg, #14b8a6, #0f766e)',
    badgeClass: 'badge-biology',
    desc: "Hujayra tuzilishi, inson anatomiyasi, fotosintez, genetika va ekologiya."
  },
  {
    id: 'history',
    name: 'Tarix',
    categoryName: 'Ijtimoiy-gumanitar',
    icon: 'fa-landmark',
    color: '#eab308',
    gradient: 'linear-gradient(135deg, #eab308, #ca8a04)',
    badgeClass: 'badge-history',
    desc: "O'zbekiston tarixi, Amir Temur saltanati, jahon sivilizatsiyalari va jadidlar."
  },
  {
    id: 'geography',
    name: 'Geografiya',
    categoryName: 'Yer va Jamiyat',
    icon: 'fa-earth-americas',
    color: '#0284c7',
    gradient: 'linear-gradient(135deg, #0284c7, #0369a1)',
    badgeClass: 'badge-geography',
    desc: "Qit'alar, okeanlar, atmosfera, tabiiy resurslar va O'zbekiston tabiiy xaritasi."
  },
  {
    id: 'astronomy',
    name: 'Astronomiya',
    categoryName: 'Koinot ilmi',
    icon: 'fa-satellite',
    color: '#a855f7',
    gradient: 'linear-gradient(135deg, #a855f7, #7e22ce)',
    badgeClass: 'badge-astronomy',
    desc: "Quyosh sistemasi, sayyoralar, yulduzlar evolyutsiyasi, galaktikalar va koinot."
  },
  {
    id: 'civics',
    name: 'Huquq va Tarbiya',
    categoryName: 'Huquqshunoslik',
    icon: 'fa-scale-balanced',
    color: '#f97316',
    gradient: 'linear-gradient(135deg, #f97316, #c2410c)',
    badgeClass: 'badge-civics',
    desc: "Konstitutsiya, inson huquqlari, fuqarolik mas'uliyati va huquqiy normalar."
  },
  {
    id: 'russian',
    name: 'Rus tili',
    categoryName: 'Xorijiy tillar',
    icon: 'fa-comments',
    color: '#6366f1',
    gradient: 'linear-gradient(135deg, #6366f1, #4338ca)',
    badgeClass: 'badge-russian',
    desc: "Grammatika, kelishiklar (падежи), fe'l turlari, turg'un iboralar va muloqot."
  }
];

// 120 TA MUKAMMAL SAVOLLAR RO'YXATI
const ALL_QUIZ_QUESTIONS = [
  // =========================================================================
  // 1. MATEMATIKA (10 ta savol)
  // =========================================================================
  {
    id: 'math-1',
    subjectId: 'math',
    subjectName: 'Matematika',
    difficulty: 'easy',
    question: "15 sonining 40% ini hisoblang.",
    options: ["5", "6", "7.5", "8"],
    correctIndex: 1,
    explanation: "Sonning foizini topish formulasi: (Son · Foiz) / 100. (15 · 40) / 100 = 600 / 100 = 6."
  },
  {
    id: 'math-2',
    subjectId: 'math',
    subjectName: 'Matematika',
    difficulty: 'easy',
    question: "Tenglamani yeching: 3x - 7 = 14",
    options: ["x = 5", "x = 7", "x = 6", "x = 8"],
    correctIndex: 1,
    explanation: "3x = 14 + 7 => 3x = 21 => x = 21 / 3 = 7."
  },
  {
    id: 'math-3',
    subjectId: 'math',
    subjectName: 'Matematika',
    difficulty: 'easy',
    question: "To'g'ri burchakli uchburchakning katetlari 3 va 4 ga teng. Gipotenuzasini toping.",
    options: ["5", "6", "7", "√7"],
    correctIndex: 0,
    explanation: "Pifagor teoremasiga ko'ra: c² = a² + b² = 3² + 4² = 9 + 16 = 25. c = √25 = 5."
  },
  {
    id: 'math-4',
    subjectId: 'math',
    subjectName: 'Matematika',
    difficulty: 'medium',
    question: "x² - 7x + 12 = 0 kvadrat tenglamasining ildizlarini toping.",
    options: ["x₁ = 3, x₂ = 4", "x₁ = -3, x₂ = -4", "x₁ = 2, x₂ = 6", "x₁ = -2, x₂ = -6"],
    correctIndex: 0,
    explanation: "Viyet teoremasiga ko'ra: x₁ + x₂ = 7 va x₁ · x₂ = 12. Ko'paytmasi 12, yig'indisi 7 bo'lgan sonlar 3 va 4."
  },
  {
    id: 'math-5',
    subjectId: 'math',
    subjectName: 'Matematika',
    difficulty: 'medium',
    question: "Uchburchakning ichki burchaklari 2:3:4 nisbatda. Eng katta burchakni toping.",
    options: ["60°", "80°", "100°", "40°"],
    correctIndex: 1,
    explanation: "Uchburchak burchaklari yig'indisi 180°. 2x + 3x + 4x = 9x = 180° => x = 20°. Eng katta burchak: 4x = 4 · 20° = 80°."
  },
  {
    id: 'math-6',
    subjectId: 'math',
    subjectName: 'Matematika',
    difficulty: 'medium',
    question: "Arifmetik progressiyada a₁ = 3, d = 4 bo'lsa, 10-hadi (a₁₀) nimaga teng?",
    options: ["36", "39", "40", "43"],
    correctIndex: 1,
    explanation: "n-had formulasi: aₙ = a₁ + (n - 1)d. Shunda a₁₀ = 3 + (10 - 1) · 4 = 3 + 36 = 39."
  },
  {
    id: 'math-7',
    subjectId: 'math',
    subjectName: 'Matematika',
    difficulty: 'medium',
    question: "Doiraning radiusi 2 marta oshirilsa, uning yuzi necha barobar ortadi?",
    options: ["2 marta", "4 marta", "8 marta", "O'zgarmaydi"],
    correctIndex: 1,
    explanation: "Doira yuzi S = π·R². Radius 2R bo'lganda: S_yangi = π·(2R)² = 4πR². Demak, yuz 4 barobar ortadi."
  },
  {
    id: 'math-8',
    subjectId: 'math',
    subjectName: 'Matematika',
    difficulty: 'hard',
    question: "f(x) = 3x² + 5x - 7 funksiyasining hosilasi f'(x) ni toping.",
    options: ["6x + 5", "3x + 5", "6x - 7", "6x² + 5"],
    correctIndex: 0,
    explanation: "Darajali funksiya hosilasi: (xⁿ)' = n·xⁿ⁻¹. (3x²)' = 6x, (5x)' = 5, (-7)' = 0. Natija: 6x + 5."
  },
  {
    id: 'math-9',
    subjectId: 'math',
    subjectName: 'Matematika',
    difficulty: 'hard',
    question: "Hisoblang: log₂(32) + log₃(27)",
    options: ["7", "8", "9", "10"],
    correctIndex: 1,
    explanation: "2⁵ = 32 bo'lgani uchun log₂(32) = 5. 3³ = 27 bo'lgani uchun log₃(27) = 3. 5 + 3 = 8."
  },
  {
    id: 'math-10',
    subjectId: 'math',
    subjectName: 'Matematika',
    difficulty: 'hard',
    question: "Trigonometrik ifodani soddalashtiring: sin²(α) + cos²(α) + tg(45°)",
    options: ["1", "2", "0", "3"],
    correctIndex: 1,
    explanation: "Asosiy trigonometrik ayniyat: sin²(α) + cos²(α) = 1. tg(45°) = 1. Yig'indi: 1 + 1 = 2."
  },

  // =========================================================================
  // 2. INGLIZ TILI (10 ta savol)
  // =========================================================================
  {
    id: 'eng-1',
    subjectId: 'english',
    subjectName: 'Ingliz tili',
    difficulty: 'easy',
    question: "Choose the correct pronoun: 'My sister and ... went to the library.'",
    options: ["me", "I", "mine", "myself"],
    correctIndex: 1,
    explanation: "Ega (Subject) o'rnida kelyapti, shuning uchun bosh kelishikdagi kishilik olmoshi 'I' ishlatiladi ('My sister and I')."
  },
  {
    id: 'eng-2',
    subjectId: 'english',
    subjectName: 'Ingliz tili',
    difficulty: 'easy',
    question: "What is the opposite (antonym) of the word 'GENEROUS'?",
    options: ["Kind", "Stingy", "Brave", "Polite"],
    correctIndex: 1,
    explanation: "'Generous' saxiy degani. Uning teskarisi 'Stingy' (xasis, ziqna) hisoblanadi."
  },
  {
    id: 'eng-3',
    subjectId: 'english',
    subjectName: 'Ingliz tili',
    difficulty: 'easy',
    question: "Which preposition is correct? 'She has always been interested ... art.'",
    options: ["at", "on", "in", "with"],
    correctIndex: 2,
    explanation: "'To be interested in' turg'un birikma bo'lib, doimo 'in' predlogi bilan ishlatiladi."
  },
  {
    id: 'eng-4',
    subjectId: 'english',
    subjectName: 'Ingliz tili',
    difficulty: 'medium',
    question: "Choose the correct sentence in Present Perfect:",
    options: [
      "She has lived here for three years.",
      "She is living here since three years.",
      "She lived here for three years ago.",
      "She has live here three years."
    ],
    correctIndex: 0,
    explanation: "'For' bilan Present Perfect (has + V3) zamoni qo'llanadi. 'She has lived here for three years' to'liq to'g'ri."
  },
  {
    id: 'eng-5',
    subjectId: 'english',
    subjectName: 'Ingliz tili',
    difficulty: 'medium',
    question: "If it rains tomorrow, we ... the football match.",
    options: ["cancel", "will cancel", "would cancel", "had cancelled"],
    correctIndex: 1,
    explanation: "First Conditional: If + Present Simple, will + Verb. Shuning uchun 'will cancel' to'g'ri variant."
  },
  {
    id: 'eng-6',
    subjectId: 'english',
    subjectName: 'Ingliz tili',
    difficulty: 'medium',
    question: "He was so tired that he could ... keep his eyes open.",
    options: ["hardly", "hard", "easily", "nearly"],
    correctIndex: 0,
    explanation: "'Hardly' inkor ma'nosidagi ravish bo'lib, 'arang, zo'rg'a' degan ma'noni beradi."
  },
  {
    id: 'eng-7',
    subjectId: 'english',
    subjectName: 'Ingliz tili',
    difficulty: 'medium',
    question: "Select the correct passive form: 'Leonardo da Vinci painted the Mona Lisa.'",
    options: [
      "The Mona Lisa was painted by Leonardo da Vinci.",
      "The Mona Lisa is painted by Leonardo da Vinci.",
      "The Mona Lisa had painted by Leonardo da Vinci.",
      "The Mona Lisa was paint by Leonardo da Vinci."
    ],
    correctIndex: 0,
    explanation: "Past Simple zamonidagi majhul nisbat (Passive Voice): was/were + V3 (was painted)."
  },
  {
    id: 'eng-8',
    subjectId: 'english',
    subjectName: 'Ingliz tili',
    difficulty: 'hard',
    question: "If I ... rich, I would travel around the whole world in a yacht.",
    options: ["am", "was / were", "had been", "will be"],
    correctIndex: 1,
    explanation: "Second Conditional (norasmiy/istak ma'nosi): If + Past Simple (were/was), would + Verb."
  },
  {
    id: 'eng-9',
    subjectId: 'english',
    subjectName: 'Ingliz tili',
    difficulty: 'hard',
    question: "By this time next year, she ... from university.",
    options: ["will graduate", "will have graduated", "graduates", "is graduating"],
    correctIndex: 1,
    explanation: "'By this time next year' ko'rsatkichi kelasi zamondagi tugallangan harakat — Future Perfect (will have + V3) ni talab qiladi."
  },
  {
    id: 'eng-10',
    subjectId: 'english',
    subjectName: 'Ingliz tili',
    difficulty: 'hard',
    question: "What does the idiom 'Bite the bullet' mean?",
    options: [
      "To eat something dangerous",
      "To face a difficult situation with courage",
      "To attack an enemy unexpectedly",
      "To speak very quietly"
    ],
    correctIndex: 1,
    explanation: "'Bite the bullet' iborasi qiyin yoki noxush vaziyatni mardlik bilan qabul qilib, unga chidashni anglatadi."
  },

  // =========================================================================
  // 3. ONA TILI VA ADABIYOT (10 ta savol)
  // =========================================================================
  {
    id: 'uzb-1',
    subjectId: 'uzbek',
    subjectName: 'Ona tili va Adabiyot',
    difficulty: 'easy',
    question: "O'zbek adabiy tilida nechta unli fonema mavjud?",
    options: ["4 ta", "6 ta", "8 ta", "10 ta"],
    correctIndex: 1,
    explanation: "Hozirgi o'zbek adabiy tilida 6 ta unli fonema (a, o, i, u, o', e) mavjud."
  },
  {
    id: 'uzb-2',
    subjectId: 'uzbek',
    subjectName: 'Ona tili va Adabiyot',
    difficulty: 'easy',
    question: "Qaysi so'zda imloviy jihatdan xatolik mavjud?",
    options: ["Tonggi", "Harakat", "Xushbo'y", "Mashxur"],
    correctIndex: 3,
    explanation: "'Mashhur' so'zi bo'g'iz tovushi 'h' bilan yoziladi ('mashhur'), 'x' bilan yozish xato hisoblanadi."
  },
  {
    id: 'uzb-3',
    subjectId: 'uzbek',
    subjectName: 'Ona tili va Adabiyot',
    difficulty: 'easy',
    question: "'Boshiga ko'tarmoq' iborasi qanday ma'noni ifodalaydi?",
    options: [
      "Juda balandga ko'tarmoq",
      "Kattalarga qarshi gapirmoq",
      "Yuksak darajada e'zozlamoq, izzat qilmoq",
      "Qattiq baqirmoq"
    ],
    correctIndex: 2,
    explanation: "'Boshiga ko'tarmoq' frazeologizmi kimgadir yuksak ehtirom va izzat-ikrom ko'rsatishni bildiradi."
  },
  {
    id: 'uzb-4',
    subjectId: 'uzbek',
    subjectName: 'Ona tili va Adabiyot',
    difficulty: 'medium',
    question: "Alisher Navoiyning turkiy tilda yaratgan besh dostondan iborat asari qanday ataladi?",
    options: ["Xamsa", "Devoni Foniy", "Mahbub ul-qulub", "Majolis un-nafois"],
    correctIndex: 0,
    explanation: "Alisher Navoiy 1483-1485 yillarda birinchi bo'lib turkiy tilda besh doston — 'Xamsa'ni yaratgan."
  },
  {
    id: 'uzb-5',
    subjectId: 'uzbek',
    subjectName: 'Ona tili va Adabiyot',
    difficulty: 'medium',
    question: "Harakat va holatning belgisini, darajasini yoki paytini bildiruvchi so'z turkumi nima?",
    options: ["Sifat", "Ravish", "Olmosh", "Ko'makchi"],
    correctIndex: 1,
    explanation: "Ravish — harakat yoki holatning belgisi, payti, o'rni, sababi va darajasini bildiruvchi mustaqil so'z turkumi."
  },
  {
    id: 'uzb-6',
    subjectId: 'uzbek',
    subjectName: 'Ona tili va Adabiyot',
    difficulty: 'medium',
    question: "Ilk o'zbek milliy romani 'O'tkan kunlar'ning muallifi kim?",
    options: ["Cho'lpon", "Abdulla Qodiriy", "Fitrat", "Oybek"],
    correctIndex: 1,
    explanation: "Abdulla Qodiriy 1922-1925 yillarda yaratilgan 'O'tkan kunlar' asari bilan o'zbek romanchiligiga asos solgan."
  },
  {
    id: 'uzb-7',
    subjectId: 'uzbek',
    subjectName: 'Ona tili va Adabiyot',
    difficulty: 'medium',
    question: "Quyidagi qatorda qaysi so'z tutuq belgisi bilan to'g'ri yozilgan?",
    options: ["A'lo", "In'om", "Mö'jiza", "Hammasi to'g'ri"],
    correctIndex: 3,
    explanation: "A'lo, in'om, mo'jiza so'zlarida tutuq belgisi qoidalarga binoan to'g'ri qo'llanilgan."
  },
  {
    id: 'uzb-8',
    subjectId: 'uzbek',
    subjectName: 'Ona tili va Adabiyot',
    difficulty: 'hard',
    question: "Zahiriddin Muhammad Boburning jahon adabiyotiga kirgan mashhur memuar asari qaysi?",
    options: ["Boburnoma", "Xatti Boburiy", "Mubayyin", "Aruz risolasi"],
    correctIndex: 0,
    explanation: "'Boburnoma' — tarixiy, biografik va geografik ahamiyatga molik bo'lgan bebaho memuar asardir."
  },
  {
    id: 'uzb-9',
    subjectId: 'uzbek',
    subjectName: 'Ona tili va Adabiyot',
    difficulty: 'hard',
    question: "Badiiy san'atlardan: bir-biriga zid tushunchalarning keltirilishi qanday san'at deyiladi?",
    options: ["Tashbeh", "Tazod", "Talmeh", "Istiora"],
    correctIndex: 1,
    explanation: "Tazod (antiteza) san'atida zid, qarama-qarshi ma'noli so'zlar orqali badiiy ifoda kuchaytiriladi (kecha va kunduz, yig'i va kulgu)."
  },
  {
    id: 'uzb-10',
    subjectId: 'uzbek',
    subjectName: 'Ona tili va Adabiyot',
    difficulty: 'hard',
    question: "Qo'shma gap turini aniqlang: 'Quyosh botdi-yu, dalalarga salqin tushdi.'",
    options: [
      "Bog'langan qo'shma gap",
      "Ergashgan qo'shma gap",
      "Bog'lovchisiz qo'shma gap",
      "Murakkab qo'shma gap"
    ],
    correctIndex: 0,
    explanation: "'-yu' zidlovchi/biriktiruvchi bog'lovchi vazifasidagi yuklama orqali bog'langan, teng huquqli qismlardan iborat bog'langan qo'shma gap."
  },

  // =========================================================================
  // 4. INFORMATIKA VA IT (10 ta savol)
  // =========================================================================
  {
    id: 'it-1',
    subjectId: 'it',
    subjectName: 'Informatika va IT',
    difficulty: 'easy',
    question: "1 Gigabayt (GB) xotira hajmi necha Megabaytga (MB) teng?",
    options: ["1000 MB", "1024 MB", "512 MB", "2048 MB"],
    correctIndex: 1,
    explanation: "Ikkilik sanoq tizimiga ko'ra axborot birliklarida 1 GB = 2¹⁰ MB = 1024 MB."
  },
  {
    id: 'it-2',
    subjectId: 'it',
    subjectName: 'Informatika va IT',
    difficulty: 'easy',
    question: "Web sahifaning semantik skeletini tuzishda qaysi til ishlatiladi?",
    options: ["CSS", "HTML", "JavaScript", "SQL"],
    correctIndex: 1,
    explanation: "HTML (HyperText Markup Language) web-sahifalarning strukturaviy asosini shakllantiradi."
  },
  {
    id: 'it-3',
    subjectId: 'it',
    subjectName: 'Informatika va IT',
    difficulty: 'easy',
    question: "Kompyuterning barcha asosiy hisoblash va mantiqiy amallarini nima bajaradi?",
    options: ["RAM", "CPU (Markaziy protsessor)", "SSD", "Kuler"],
    correctIndex: 1,
    explanation: "CPU (Central Processing Unit) kompyuter miyasi bo'lib, hisoblash va boshqaruv amallarini bajaradi."
  },
  {
    id: 'it-4',
    subjectId: 'it',
    subjectName: 'Informatika va IT',
    difficulty: 'medium',
    question: "Python dasturlash tilida ro'yxat (list) qanday qavslar ichida e'lon qilinadi?",
    options: ["[ ] kvadrat", "( ) dumaloq", "{ } figurali", "< > burchakli"],
    correctIndex: 0,
    explanation: "Python tilida ro'yxatlar [ ] kvadrat qavslarda, kortejlar ( ) da, lug'at va to'plamlar { } da yoziladi."
  },
  {
    id: 'it-5',
    subjectId: 'it',
    subjectName: 'Informatika va IT',
    difficulty: 'medium',
    question: "Ikkilik sanoq tizimidagi '1011' soni o'nlik sanoq tizimida nimaga teng?",
    options: ["9", "10", "11", "13"],
    correctIndex: 2,
    explanation: "1·2³ + 0·2² + 1·2¹ + 1·2⁰ = 8 + 0 + 2 + 1 = 11."
  },
  {
    id: 'it-6',
    subjectId: 'it',
    subjectName: 'Informatika va IT',
    difficulty: 'medium',
    question: "Relyatsion ma'lumotlar bazasidan yozuvlarni tanlab olish uchun qaysi SQL buyrug'i ishlatiladi?",
    options: ["INSERT", "UPDATE", "SELECT", "DELETE"],
    correctIndex: 2,
    explanation: "SQL da ma'lumotlarni o'qish va filtrlash uchun 'SELECT' operatori ishlatiladi."
  },
  {
    id: 'it-7',
    subjectId: 'it',
    subjectName: 'Informatika va IT',
    difficulty: 'medium',
    question: "Dasturlashda o'z-o'zini chaqiruvchi funksiya nima deb ataladi?",
    options: ["Iteratsiya", "Rekursiya", "Polimorfizm", "Inkapsulyatsiya"],
    correctIndex: 1,
    explanation: "Rekursiya — funksiyaning o'z tanasi ichida yana o'zini chaqirish mexanizmi."
  },
  {
    id: 'it-8',
    subjectId: 'it',
    subjectName: 'Informatika va IT',
    difficulty: 'hard',
    question: "Quyidagi Python kodining natijasi nima bo'ladi: print(list(range(2, 8, 2)))?",
    options: ["[2, 4, 6]", "[2, 4, 6, 8]", "[2, 3, 4, 5, 6, 7]", "[4, 6, 8]"],
    correctIndex: 0,
    explanation: "range(start, stop, step) da stop (8) kirmaydi, qadam 2. Natija: [2, 4, 6]."
  },
  {
    id: 'it-9',
    subjectId: 'it',
    subjectName: 'Informatika va IT',
    difficulty: 'hard',
    question: "Eng tezkor qidiruv algoritmlaridan biri bo'lgan Binary Search (Ikkilik qidiruv) ning murakkabligi nima?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
    correctIndex: 2,
    explanation: "Ikkilik qidiruv har bir qadamda qidiruv sohasini 2 barobar qisqartiradi, shuning uchun uning vaqt murakkabligi O(log n)."
  },
  {
    id: 'it-10',
    subjectId: 'it',
    subjectName: 'Informatika va IT',
    difficulty: 'hard',
    question: "Internetda ma'lumotlarni shifrlab uzatishni ta'minlaydigan xavfsiz protokol qaysi?",
    options: ["HTTP", "HTTPS (SSL/TLS)", "FTP", "Telnet"],
    correctIndex: 1,
    explanation: "HTTPS protokoli SSL/TLS shifrlash sertifikatlari orqali mijoz va server o'rtasidagi ma'lumotlar xavfsizligini ta'minlaydi."
  },

  // =========================================================================
  // 5. FIZIKA (10 ta savol)
  // =========================================================================
  {
    id: 'phys-1',
    subjectId: 'physics',
    subjectName: 'Fizika',
    difficulty: 'easy',
    question: "Yer yuzasida erkin tushish tezlanishi (g) taxminan qanchaga teng?",
    options: ["5.4 m/s²", "9.8 m/s²", "12.2 m/s²", "3.14 m/s²"],
    correctIndex: 1,
    explanation: "Yer sirtida o'rtacha erkin tushish tezlanishi g ≈ 9.8 m/s² ga teng."
  },
  {
    id: 'phys-2',
    subjectId: 'physics',
    subjectName: 'Fizika',
    difficulty: 'easy',
    question: "Nyutonning birinchi qonuni qanday nomlanadi?",
    options: ["Inersiya qonuni", "Gravitatsiya qonuni", "Ta'sir va aks ta'sir", "Termodinamika qonuni"],
    correctIndex: 0,
    explanation: "Nyutonning 1-qonuni inersiya qonuni bo'lib, unga ko'ra jismga tashqi kuch ta'sir etmasa, u tinch turadi yoki to'g'ri chiziqli tekis harakatini davom ettiradi."
  },
  {
    id: 'phys-3',
    subjectId: 'physics',
    subjectName: 'Fizika',
    difficulty: 'easy',
    question: "Xalqaro birliklar tizimida (SI) kuch birligi nima?",
    options: ["Joul (J)", "Vatt (W)", "Nyuton (N)", "Paskal (Pa)"],
    correctIndex: 2,
    explanation: "SI tizimida kuch birligi buyuk olim Isaak Nyuton sharafiga Nyuton (N) deb qabul qilingan."
  },
  {
    id: 'phys-4',
    subjectId: 'physics',
    subjectName: 'Fizika',
    difficulty: 'medium',
    question: "Zanjir qismi uchun Om qonuni qaysi formulada to'g'ri ifodalangan?",
    options: ["I = U / R", "I = U · R", "R = I / U", "U = I / R"],
    correctIndex: 0,
    explanation: "Om qonuniga ko'ra, tok kuchi (I) kuchlanishga (U) to'g'ri, qarshilikka (R) teskari mutanosib: I = U / R."
  },
  {
    id: 'phys-5',
    subjectId: 'physics',
    subjectName: 'Fizika',
    difficulty: 'medium',
    question: "Suyuqlik yoki gazga botirilgan jismga ta'sir qiluvchi itaruvchi kuch kimning qonuni?",
    options: ["Paskal qonuni", "Arximed qonuni", "Bernulli qonuni", "Guk qonuni"],
    correctIndex: 1,
    explanation: "Arximed qonuniga ko'ra: jism siqib chiqargan suyuqlik og'irligiga teng ko'tarish kuchi hosil bo'ladi (F_A = ρ·g·V)."
  },
  {
    id: 'phys-6',
    subjectId: 'physics',
    subjectName: 'Fizika',
    difficulty: 'medium',
    question: "Kinetik energiyaning hisoblash formulasi qaysi?",
    options: ["E_k = m·g·h", "E_k = (m·v²) / 2", "E_k = F·s", "E_k = m·v"],
    correctIndex: 1,
    explanation: "Harakatdagi jismning kinetik energiyasi uning massasi va tezligi kvadrati ko'paytmasining yarmiga teng: E_k = m·v² / 2."
  },
  {
    id: 'phys-7',
    subjectId: 'physics',
    subjectName: 'Fizika',
    difficulty: 'medium',
    question: "Yorug'likning vakuumdagi tezligi taxminan qanchaga teng?",
    options: ["300 km/s", "300 000 km/s", "150 000 km/s", "1 000 000 km/s"],
    correctIndex: 1,
    explanation: "Yorug'likning vakuumdagi tezligi c ≈ 3·10⁸ m/s yoki 300 000 km/s ga teng fundamental doimiydir."
  },
  {
    id: 'phys-8',
    subjectId: 'physics',
    subjectName: 'Fizika',
    difficulty: 'hard',
    question: "Massasi 2 kg bo'lgan jism 5 m balandlikda turibdi. Uning potensial energiyasini toping (g = 10 m/s²).",
    options: ["50 J", "100 J", "150 J", "200 J"],
    correctIndex: 1,
    explanation: "E_p = m·g·h = 2 kg · 10 m/s² · 5 m = 100 Joul."
  },
  {
    id: 'phys-9',
    subjectId: 'physics',
    subjectName: 'Fizika',
    difficulty: 'hard',
    question: "Termodinamikaning birinchi qonuniga ko'ra tizimga berilgan issiqlik miqdori nimaga sarflanadi?",
    options: [
      "Faqat ichki energiyani oshirishga",
      "Ichki energiyaning o'zgarishi va tashqi kuchlarga qarshi bajarilgan ishga (Q = ΔU + A)",
      "Faqat tashqi bosimni pasaytirishga",
      "Molekulalar sonini ko'paytirishga"
    ],
    correctIndex: 1,
    explanation: "Q = ΔU + A formulasi bo'yicha berilgan issiqlik ichki energiyani o'zgartiradi va ish bajaradi."
  },
  {
    id: 'phys-10',
    subjectId: 'physics',
    subjectName: 'Fizika',
    difficulty: 'hard',
    question: "Foton energiyasi Plank formulasi bo'yicha qanday hisoblanadi?",
    options: ["E = h·ν", "E = m·c²", "E = h / λ²", "E = p·c²"],
    correctIndex: 0,
    explanation: "Maks Plank formulasiga ko'ra foton energiyasi E = h·ν (bunda h — Plank doimiysi, ν — tebranish chastotasi)."
  },

  // =========================================================================
  // 6. KIMYO (10 ta savol)
  // =========================================================================
  {
    id: 'chem-1',
    subjectId: 'chemistry',
    subjectName: 'Kimyo',
    difficulty: 'easy',
    question: "Suvning kimyoviy formulasi qaysi?",
    options: ["CO₂", "H₂O", "NaCl", "O₂"],
    correctIndex: 1,
    explanation: "Suv molekulasi ikkita vodorod va bitta kislorod atomidan tashkil topgan: H₂O."
  },
  {
    id: 'chem-2',
    subjectId: 'chemistry',
    subjectName: 'Kimyo',
    difficulty: 'easy',
    question: "Osh tuzining kimyoviy formulasi va nomi nima?",
    options: ["Natriy xlorid (NaCl)", "Kalsiy karbonat (CaCO₃)", "Kaliy gidroksid (KOH)", "Sulfat kislota (H₂SO₄)"],
    correctIndex: 0,
    explanation: "Osh tuzi natriy va xlor ionlaridan iborat birikma — Natriy xlorid (NaCl)."
  },
  {
    id: 'chem-3',
    subjectId: 'chemistry',
    subjectName: 'Kimyo',
    difficulty: 'easy',
    question: "Havoning eng katta qismini (taxminan 78%) qaysi gaz tashkil qiladi?",
    options: ["Kislorod", "Azot", "Argon", "Karbonat angidrid"],
    correctIndex: 1,
    explanation: "Atmosfera havosining 78.08% qismini Azot (N₂) gazi tashkil qiladi."
  },
  {
    id: 'chem-4',
    subjectId: 'chemistry',
    subjectName: 'Kimyo',
    difficulty: 'medium',
    question: "Davriy jadvalda atom raqami 6 bo'lgan, barcha organik birikmalarning asosi bo'lgan element qaysi?",
    options: ["Vodorod", "Azot", "Uglerod (C)", "Kislorod"],
    correctIndex: 2,
    explanation: "Uglerod (C) atom raqami 6 ga teng bo'lib, hayot va organik moddalarning asosi hisoblanadi."
  },
  {
    id: 'chem-5',
    subjectId: 'chemistry',
    subjectName: 'Kimyo',
    difficulty: 'medium',
    question: "Neytral eritmaning pH qiymati 25°C da nimaga teng?",
    options: ["0", "7", "14", "1"],
    correctIndex: 1,
    explanation: "pH shkalasida 7 neytral muhitni (toza suv), 7 dan kichik kislotali, 7 dan katta ishqoriy muhitni ifodalaydi."
  },
  {
    id: 'chem-6',
    subjectId: 'chemistry',
    subjectName: 'Kimyo',
    difficulty: 'medium',
    question: "Avogadro soni (1 mol moddadagi zarralar soni) qanchaga teng?",
    options: ["6.02 · 10²³", "3.14 · 10²³", "1.6 · 10⁻¹⁹", "9.8 · 10²"],
    correctIndex: 0,
    explanation: "1 mol moddadagi zarralar soni N_A = 6.022 · 10²³ ta molekula yoki atomga teng."
  },
  {
    id: 'chem-7',
    subjectId: 'chemistry',
    subjectName: 'Kimyo',
    difficulty: 'medium',
    question: "Oksidlanish-qaytarilish reaksiyalarida elektron bergan modda nima bo'ladi?",
    options: ["Qaytaruvchi (o'zi oksidlanadi)", "Oksidlovchi (o'zi qaytariladi)", "Katalizator", "Indikator"],
    correctIndex: 0,
    explanation: "Elektron beruvchi modda qaytaruvchi deyiladi va jarayonda uning oksidlanish darajasi ortadi (oksidlanadi)."
  },
  {
    id: 'chem-8',
    subjectId: 'chemistry',
    subjectName: 'Kimyo',
    difficulty: 'hard',
    question: "Eng oddiy to'yingan uglevodorod (alkan) metanning formulasi qanday?",
    options: ["CH₄", "C₂H₆", "C₂H₄", "C₂H₂"],
    correctIndex: 0,
    explanation: "Metan alkanlarning birinchi vakili bo'lib, formulasi CH₄ ga teng."
  },
  {
    id: 'chem-9',
    subjectId: 'chemistry',
    subjectName: 'Kimyo',
    difficulty: 'hard',
    question: "Sulfat kislotaning (H₂SO₄) molekulyar massasini toping (H=1, S=32, O=16).",
    options: ["80 g/mol", "98 g/mol", "100 g/mol", "64 g/mol"],
    correctIndex: 1,
    explanation: "M(H₂SO₄) = (2 · 1) + 32 + (4 · 16) = 2 + 32 + 64 = 98 g/mol."
  },
  {
    id: 'chem-10',
    subjectId: 'chemistry',
    subjectName: 'Kimyo',
    difficulty: 'hard',
    question: "Kimyoviy reaksiyani tezlashtiruvchi, lekin o'zi sarflanmaydigan modda nima deyiladi?",
    options: ["Ingibitor", "Katalizator", "Emulgator", "Reagent"],
    correctIndex: 1,
    explanation: "Katalizatorlar faollanish energiyasini pasaytirib, reaksiyani millionlab marta tezlashtiradi."
  },

  // =========================================================================
  // 7. BIOLOGIYA (10 ta savol)
  // =========================================================================
  {
    id: 'bio-1',
    subjectId: 'biology',
    subjectName: 'Biologiya',
    difficulty: 'easy',
    question: "O'simliklarga yashil rang beruvchi va fotosintezda qatnashuvchi pigment nima?",
    options: ["Xlorofill", "Gemoglobin", "Melanin", "Karotin"],
    correctIndex: 0,
    explanation: "Xlorofill xloroplastlarda joylashgan bo'lib, quyosh nurini yutib fotosintez jarayonini amalga oshiradi."
  },
  {
    id: 'bio-2',
    subjectId: 'biology',
    subjectName: 'Biologiya',
    difficulty: 'easy',
    question: "Inson yuragi necha kamerali tuzilishga ega?",
    options: ["2 kamerali", "3 kamerali", "4 kamerali (2 bo'lmacha, 2 qorincha)", "1 kamerali"],
    correctIndex: 2,
    explanation: "Inson va barcha sutemizuvchilarning yuragi 4 kamerali: o'ng va chap bo'lmacha, o'ng va chap qorincha."
  },
  {
    id: 'bio-3',
    subjectId: 'biology',
    subjectName: 'Biologiya',
    difficulty: 'easy',
    question: "Hujayraning 'energiya stansiyasi' deb qaysi organellaga aytiladi?",
    options: ["Ribosoma", "Mitoxondriya", "Lizosoma", "Golji majmuasi"],
    correctIndex: 1,
    explanation: "Mitoxondriyalarda ATF (adenozintrifosfat) sintezlanadi va hujayrani quvvat bilan ta'minlaydi."
  },
  {
    id: 'bio-4',
    subjectId: 'biology',
    subjectName: 'Biologiya',
    difficulty: 'medium',
    question: "Irsiy axborotni saqlovchi va avloddan-avlodga o'tkazuvchi nuklein kislota qaysi?",
    options: ["DNK", "ATF", "Glyukoza", "Xolesterin"],
    correctIndex: 0,
    explanation: "DNK (Dezoksiribonuklein kislota) tirik organizmlarning barcha irsiy belgilarini kodlaydi."
  },
  {
    id: 'bio-5',
    subjectId: 'biology',
    subjectName: 'Biologiya',
    difficulty: 'medium',
    question: "Odam organizmida qonning qizil tanachalari (eritrotsitlar) qayerda hosil bo'ladi?",
    options: ["Jigarda", "Qizil ilikda (suyak ko'migi)", "Buyrakda", "Yurakda"],
    correctIndex: 1,
    explanation: "Eritrotsitlar va boshqa qon hujayralari suyaklarning qizil iligida uzluksiz ishlab chiqariladi."
  },
  {
    id: 'bio-6',
    subjectId: 'biology',
    subjectName: 'Biologiya',
    difficulty: 'medium',
    question: "Genetika fanining asoschisi kim hisoblanadi?",
    options: ["Charlz Darvin", "Gregor Mendel", "Lui Paster", "Ivan Pavlov"],
    correctIndex: 1,
    explanation: "Avstriyalik olim Gregor Mendel no'xat ustida tajribalar o'tkazib, irsiyat qonuniyatlarini ochgan."
  },
  {
    id: 'bio-7',
    subjectId: 'biology',
    subjectName: 'Biologiya',
    difficulty: 'medium',
    question: "Hujayrada oqsil sintezini qaysi mayda organellalar amalga oshiradi?",
    options: ["Ribosomalar", "Vakuola", "Sentriola", "Yadrocha"],
    correctIndex: 0,
    explanation: "Ribosomalar mRNK dagi axborot asosida aminokislotalardan oqsil molekulalarini sintezlaydi."
  },
  {
    id: 'bio-8',
    subjectId: 'biology',
    subjectName: 'Biologiya',
    difficulty: 'hard',
    question: "Fotosintezning yorug'lik bosqichida suvning parchalanishi nima deb ataladi?",
    options: ["Glikoliz", "Fotoliz", "Transkripsiya", "Gidroliz"],
    correctIndex: 1,
    explanation: "Fotoliz jarayonida suv nurlar ta'sirida parchalanib, erkin kislorod (O₂) ajralib chiqadi."
  },
  {
    id: 'bio-9',
    subjectId: 'biology',
    subjectName: 'Biologiya',
    difficulty: 'hard',
    question: "Odamda jami nechta xromosoma mavjud?",
    options: ["23 ta", "46 ta (23 juft)", "48 ta", "44 ta"],
    correctIndex: 1,
    explanation: "Inson tana hujayralarida 46 ta (23 juft) xromosoma bo'ladi (shundan 2 tasi jinsiy xromosoma)."
  },
  {
    id: 'bio-10',
    subjectId: 'biology',
    subjectName: 'Biologiya',
    difficulty: 'hard',
    question: "Bosh miyaning harakat koordinatsiyasi va muvozanatni boshqaruvchi qismi nima?",
    options: ["Miyacha (Cerebellum)", "Gipotalamus", "Uzunchoq miya", "Ko'prik"],
    correctIndex: 0,
    explanation: "Miyacha harakatlarning aniqligi, gavda muvozanati va mushaklar tonusini boshqaradi."
  },

  // =========================================================================
  // 8. TARIX (10 ta savol)
  // =========================================================================
  {
    id: 'hist-1',
    subjectId: 'history',
    subjectName: 'Tarix',
    difficulty: 'easy',
    question: "O'zbekiston Respublikasi o'z mustaqilligini qachon e'lon qilgan?",
    options: ["1991-yil 1-sentyabr", "1992-yil 8-dekabr", "1990-yil 20-iyun", "1993-yil 1-oktabr"],
    correctIndex: 0,
    explanation: "1991-yil 31-avgustda mustaqillik e'lon qilinib, 1-sentyabr Mustaqillik kuni deb belgilangan."
  },
  {
    id: 'hist-2',
    subjectId: 'history',
    subjectName: 'Tarix',
    difficulty: 'easy',
    question: "Buyuk sarkarda Amir Temur qaysi shaharda tug'ilgan?",
    options: ["Samarqand", "Kesh (Shahrisabz yaqinidagi Xo'ja Ilg'or qishlog'i)", "Buxoro", "Toshkent"],
    correctIndex: 1,
    explanation: "Sohibqiron Amir Temur 1336-yil 9-aprelda Shahrisabz yaqinidagi Xo'ja Ilg'or qishlog'ida tavallud topgan."
  },
  {
    id: 'hist-3',
    subjectId: 'history',
    subjectName: 'Tarix',
    difficulty: 'easy',
    question: "Qadimgi dunyoning yetti mo''jizasidan biri bo'lgan piramidalar qaysi mamlakatda joylashgan?",
    options: ["Gretsiya", "Misr", "Italiya", "Hindiston"],
    correctIndex: 1,
    explanation: "Fiv va Giza piramidalari qadimgi Misr fir'avnlari tomonidan barpo etilgan me'moriy mo''jizadir."
  },
  {
    id: 'hist-4',
    subjectId: 'history',
    subjectName: 'Tarix',
    difficulty: 'medium',
    question: "Amir Temur davlatining poytaxti qaysi shahar bo'lgan?",
    options: ["Buxoro", "Samarqand", "Hirot", "Shahrisabz"],
    correctIndex: 1,
    explanation: "Amir Temur Samarqandni ulkan saltanatining poytaxti qilib belgilagan va dunyoning eng go'zal shahriga aylantirgan."
  },
  {
    id: 'hist-5',
    subjectId: 'history',
    subjectName: 'Tarix',
    difficulty: 'medium',
    question: "Samarqandda ulkan rasadxona qurdirgan va 'Ziji jadidi Ko'ragoniy' yulduzlar jadvalini yaratgan hukmdor olim kim?",
    options: ["Mirzo Ulug'bek", "Al-Farg'oniy", "Beruniy", "Al-Xorazmiy"],
    correctIndex: 0,
    explanation: "Mirzo Ulug'bek 1428-yilda Samarqandda rasadxona qurdirib, 1018 ta yulduzning aniq koordinatasini hisoblagan."
  },
  {
    id: 'hist-6',
    subjectId: 'history',
    subjectName: 'Tarix',
    difficulty: 'medium',
    question: "Sharq va G'arbni bog'lagan qadimgi savdo yo'li qanday nomlangan?",
    options: ["Buyuk Ipak yo'li", "Shoh yo'li", "Lojuvard yo'li", "Choy yo'li"],
    correctIndex: 0,
    explanation: "Buyuk Ipak yo'li Xitoydan O'rta Osiyo orqali O'rtayer dengizigacha cho'zilgan xalqaro savdo arteriyasi bo'lgan."
  },
  {
    id: 'hist-7',
    subjectId: 'history',
    subjectName: 'Tarix',
    difficulty: 'medium',
    question: "XX asr boshida Turkistonda ma'rifatparvarlik va milliy uyg'onish harakati nima deb ataldi?",
    options: ["Jadidchilik", "Sho'ro", "Muvaqqat hukumat", "Qizil askarlar"],
    correctIndex: 0,
    explanation: "Jadidchilik ('yangi usul') harakati Mahmudxo'ja Behbudiy, Munavvarqori, Fitrat kabi ziyolilar yetakchiligida rivojlangan."
  },
  {
    id: 'hist-8',
    subjectId: 'history',
    subjectName: 'Tarix',
    difficulty: 'hard',
    question: "Ikkinchi jahon urushi qaysi yillarda bo'lib o'tgan?",
    options: ["1914–1918", "1939–1945", "1941–1945", "1935–1940"],
    correctIndex: 1,
    explanation: "Ikkinchi jahon urushi 1939-yil 1-sentyabrda boshlanib, 1945-yil 2-sentyabrda yakunlangan."
  },
  {
    id: 'hist-9',
    subjectId: 'history',
    subjectName: 'Tarix',
    difficulty: 'hard',
    question: "Qadimgi So'g'diyona xalqining Aleksandr Makedonskiyga qarshi kurashiga kim boshchilik qilgan?",
    options: ["Spitamen", "Shiroq", "To'maris", "Muqanna"],
    correctIndex: 0,
    explanation: "Spitamen miloddan avvalgi 329–327-yillarda Aleksandr bosqiniga qarshi qahramonona xalq qo'zg'olonini boshqargan."
  },
  {
    id: 'hist-10',
    subjectId: 'history',
    subjectName: 'Tarix',
    difficulty: 'hard',
    question: "Jahon tarixida ilk bor 'Inson va fuqaro huquqlari deklaratsiyasi' qaysi inqilob davrida qabul qilingan?",
    options: [
      "1789-yilgi Buyuk Fransuz inqilobida",
      "1917-yilgi Oktabr to'ntarishida",
      "1688-yilgi Angliya shonli inqilobida",
      "1848-yilgi Yevropa bahorida"
    ],
    correctIndex: 0,
    explanation: "1789-yilda Fransiyada qabul qilingan deklaratsiya zamonaviy inson huquqlarining poydevori hisoblanadi."
  },

  // =========================================================================
  // 9. GEOGRAFIYA (10 ta savol)
  // =========================================================================
  {
    id: 'geo-1',
    subjectId: 'geography',
    subjectName: 'Geografiya',
    difficulty: 'easy',
    question: "Dunyodagi eng katta okean qaysi?",
    options: ["Atlantika okeani", "Tinch okeani", "Hind okeani", "Shimoliy Muz okeani"],
    correctIndex: 1,
    explanation: "Tinch okeani Yer yuzasining uchdan bir qismini egallagan eng katta va eng chuqur okeandir."
  },
  {
    id: 'geo-2',
    subjectId: 'geography',
    subjectName: 'Geografiya',
    difficulty: 'easy',
    question: "Yer yuzidagi eng baland tog' cho'qqisi qaysi?",
    options: ["K2 (Chogori)", "Everest (Jomolungma)", "Monblan", "Elbrus"],
    correctIndex: 1,
    explanation: "Everest (Jomolungma) Himolay tog'larida joylashgan bo'lib, balandligi 8848 metrga teng."
  },
  {
    id: 'geo-3',
    subjectId: 'geography',
    subjectName: 'Geografiya',
    difficulty: 'easy',
    question: "O'zbekistonning poytaxti qaysi shahar?",
    options: ["Samarqand", "Buxoro", "Toshkent", "Namangan"],
    correctIndex: 2,
    explanation: "Toshkent — O'zbekiston Respublikasining poytaxti va Markaziy Osiyoning eng yirik megapolislaridan biri."
  },
  {
    id: 'geo-4',
    subjectId: 'geography',
    subjectName: 'Geografiya',
    difficulty: 'medium',
    question: "O'zbekiston hududida joylashgan eng yirik qumli cho'l qaysi?",
    options: ["Qoraqum", "Qizilqum", "Saxroi Kabir", "Gobi"],
    correctIndex: 1,
    explanation: "Qizilqum cho'li Amudaryo va Sirdaryo oralig'ida joylashgan bo'lib, O'zbekistonning katta qismini egallaydi."
  },
  {
    id: 'geo-5',
    subjectId: 'geography',
    subjectName: 'Geografiya',
    difficulty: 'medium',
    question: "Dunyodagi suv sarfi va havzasi bo'yicha eng sersuv va eng uzun daryolar tizimi qaysi?",
    options: ["Nil", "Amazonka", "Yanszi", "Missisipi"],
    correctIndex: 1,
    explanation: "Amazonka daryosi Janubiy Amerikada oqadi va suv miqdori bo'yicha dunyoda tengsiz birinchi o'rinda turadi."
  },
  {
    id: 'geo-6',
    subjectId: 'geography',
    subjectName: 'Geografiya',
    difficulty: 'medium',
    question: "Yer yuzini shimoliy va janubiy yarim sharlarga ajratuvchi shartli chiziq nima deb ataladi?",
    options: ["Grinvich meridiani", "Ekvator", "Shimoliy qutb doirasi", "Tropik chiziq"],
    correctIndex: 1,
    explanation: "Ekvator — 0° kenglikda joylashgan bo'lib, Yer sharini teng ikkiga ajratuvchi eng uzun parallel (40 075 km)."
  },
  {
    id: 'geo-7',
    subjectId: 'geography',
    subjectName: 'Geografiya',
    difficulty: 'medium',
    question: "O'zbekistonga chegaradosh bo'lgan dengizga chiqish imkoni bo'lmagan davlatlar soni nechta?",
    options: ["3 ta", "4 ta", "5 ta (Qozog'iston, Qirg'iziston, Tojikiston, Turkmaniston, Afg'oniston)", "6 ta"],
    correctIndex: 2,
    explanation: "O'zbekiston 5 ta davlat bilan chegaradosh va dunyoda okeanga chiqish uchun 2 ta davlatdan o'tishi kerak bo'lgan kamyob mamlakat."
  },
  {
    id: 'geo-8',
    subjectId: 'geography',
    subjectName: 'Geografiya',
    difficulty: 'hard',
    question: "Yer atmosferasining eng quyi, ob-havo hodisalari ro'y beradigan qatlami nima?",
    options: ["Stratosfera", "Troposfera", "Mezosfera", "Termosfera"],
    correctIndex: 1,
    explanation: "Troposfera qatlamida bulutlar, yog'inlar, shamollar va havoning 80% massasi jamlangan."
  },
  {
    id: 'geo-9',
    subjectId: 'geography',
    subjectName: 'Geografiya',
    difficulty: 'hard',
    question: "Dunyodagi eng chuqur chuchuk suvli ko'l qaysi?",
    options: ["Kaspiy dengizi", "Baykal ko'li (Rossiya)", "Viktoriya ko'li", "Yuqori ko'l"],
    correctIndex: 1,
    explanation: "Baykal ko'lining eng chuqur nuqtasi 1642 metr bo'lib, dunyo chuchuk suv zaxirasining 20% ini saqlaydi."
  },
  {
    id: 'geo-10',
    subjectId: 'geography',
    subjectName: 'Geografiya',
    difficulty: 'hard',
    question: "Orol dengizining qurishi qaysi asosiy sababga ko'ra yuz berdi?",
    options: [
      "Iqlimning global isishi",
      "Amudaryo va Sirdaryo suvlarining sug'orishga me'yordan ortiq olinishi",
      "Yer osti yoriqlariga suv ketib qolishi",
      "Zilzilalar natijasida"
    ],
    correctIndex: 1,
    explanation: "Paxta va qishloq xo'jaligi maydonlarini sug'orish uchun daryolar suvining haddan ziyod olinishi Orol fojiasini keltirib chiqardi."
  },

  // =========================================================================
  // 10. ASTRONOMIYA (10 ta savol)
  // =========================================================================
  {
    id: 'astro-1',
    subjectId: 'astronomy',
    subjectName: 'Astronomiya',
    difficulty: 'easy',
    question: "Quyosh sistemasida nechta asosiy sayyora mavjud?",
    options: ["7 ta", "8 ta", "9 ta", "10 ta"],
    correctIndex: 1,
    explanation: "2006-yildan buyon 8 ta sayyora tan olinadi: Merkuriy, Venera, Yer, Mars, Yupiter, Saturn, Uran, Neptun (Pluton mitti sayyora deb e'lon qilingan)."
  },
  {
    id: 'astro-2',
    subjectId: 'astronomy',
    subjectName: 'Astronomiya',
    difficulty: 'easy',
    question: "Quyoshga eng yaqin joylashgan sayyora qaysi?",
    options: ["Venera", "Merkuriy", "Mars", "Yer"],
    correctIndex: 1,
    explanation: "Merkuriy Quyoshga eng yaqin va eng kichik sayyora hisoblanadi."
  },
  {
    id: 'astro-3',
    subjectId: 'astronomy',
    subjectName: 'Astronomiya',
    difficulty: 'easy',
    question: "Yerning yagona tabiiy yo'ldoshi nima?",
    options: ["Oy", "Titan", "Fobos", "Ganimed"],
    correctIndex: 0,
    explanation: "Oy — Yerning tabiiy yo'ldoshi bo'lib, Yer atrofini taxminan 27.3 kunda aylanib chiqadi."
  },
  {
    id: 'astro-4',
    subjectId: 'astronomy',
    subjectName: 'Astronomiya',
    difficulty: 'medium',
    question: "Quyosh sistemasidagi eng katta sayyora qaysi?",
    options: ["Saturn", "Yupiter", "Uran", "Neptun"],
    correctIndex: 1,
    explanation: "Yupiter gaz giganti bo'lib, uning massasi barcha boshqa sayyoralar birgalikdagi massasidan 2.5 barobar kattadir."
  },
  {
    id: 'astro-5',
    subjectId: 'astronomy',
    subjectName: 'Astronomiya',
    difficulty: 'medium',
    question: "Bizning Quyosh sistemamiz qaysi galaktika tarkibiga kiradi?",
    options: ["Andromeda", "Somon yo'li (Milky Way)", "Triangulum", "Sombrero"],
    correctIndex: 1,
    explanation: "Bizning yulduz tizimimiz Somon yo'li deb ataluvchi spiralsimon ulkan galaktika tarkibidadir."
  },
  {
    id: 'astro-6',
    subjectId: 'astronomy',
    subjectName: 'Astronomiya',
    difficulty: 'medium',
    question: "Koinotda yorug'likning bir yil davomida bosib o'tadigan masofasi nima deb ataladi?",
    options: ["Astronomik birlik", "Yorug'lik yili", "Parsek", "Kilometr"],
    correctIndex: 1,
    explanation: "Yorug'lik yili — masofa o'lchovi bo'lib, taxminan 9.46 trillion kilometrga teng."
  },
  {
    id: 'astro-7',
    subjectId: 'astronomy',
    subjectName: 'Astronomiya',
    difficulty: 'medium',
    question: "Insoniyat tarixida koinotga chiqqan ilk fazogir kim?",
    options: ["Nil Armstrong", "Yuriy Gagarin", "Aleksey Leonov", "Jon Glenn"],
    correctIndex: 1,
    explanation: "Yuriy Gagarin 1961-yil 12-aprelda 'Vostok-1' kemasida koinotga parvoz qilgan birinchi inson bo'ldi."
  },
  {
    id: 'astro-8',
    subjectId: 'astronomy',
    subjectName: 'Astronomiya',
    difficulty: 'hard',
    question: "Quyosh markazida qanday yadroviy reaksiya hisobiga ulkan energiya ajraladi?",
    options: [
      "Uran yadrosining bo'linishi",
      "Termoyadroviy sintez (Vodorodning Geliyga aylanishi)",
      "Kimyoviy yonish reaksiyasi",
      "Radioaktiv yemirilish"
    ],
    correctIndex: 1,
    explanation: "Quyosh yadrosida yuqori harorat va bosimda 4 ta vodorod atomi birlashib geliy hosil qiladi."
  },
  {
    id: 'astro-9',
    subjectId: 'astronomy',
    subjectName: 'Astronomiya',
    difficulty: 'hard',
    question: "Gravitatsiyasi shu qadar kuchliki, hatto yorug'lik ham undan qochib chiqa olmaydigan fazoviy jism nima?",
    options: ["Neytron yulduz", "Qora tuynuk (Black Hole)", "Oq mitti", "Pulsar"],
    correctIndex: 1,
    explanation: "Qora tuynuk o'zining hodisalar gorizonti ichiga tushgan har qanday modda va yorug'likni tortib oladi."
  },
  {
    id: 'astro-10',
    subjectId: 'astronomy',
    subjectName: 'Astronomiya',
    difficulty: 'hard',
    question: "Sayyoralarning Quyosh atrofida ellips bo'yicha harakatlanishini qaysi qonunlar belgilaydi?",
    options: ["Kepler qonunlari", "Galiley qonunlari", "Xabbl qonuni", "Pifagor teoremalari"],
    correctIndex: 0,
    explanation: "Iogann Kepler sayyoralar harakatining 3 ta fundamental qonunini kashf qilgan."
  },

  // =========================================================================
  // 11. HUQUQ VA TARBIYA (10 ta savol)
  // =========================================================================
  {
    id: 'civ-1',
    subjectId: 'civics',
    subjectName: 'Huquq va Tarbiya',
    difficulty: 'easy',
    question: "O'zbekiston Respublikasining Konstitutsiya kuni qaysi sana?",
    options: ["1-sentyabr", "8-dekabr", "21-mart", "1-oktabr"],
    correctIndex: 1,
    explanation: "1992-yil 8-dekabrda mustaqil O'zbekiston Respublikasining birinchi Konstitutsiyasi qabul qilingan."
  },
  {
    id: 'civ-2',
    subjectId: 'civics',
    subjectName: 'Huquq va Tarbiya',
    difficulty: 'easy',
    question: "Davlatning eng oliy yuridik kuchga ega bo'lgan Asosiy qonuni nima?",
    options: ["Farmon", "Konstitutsiya", "Qaror", "Nizomnoma"],
    correctIndex: 1,
    explanation: "Konstitutsiya barcha qonunlarning asosi bo'lib, boshqa hech bir huquqiy hujjat unga zid kela olmaydi."
  },
  {
    id: 'civ-3',
    subjectId: 'civics',
    subjectName: 'Huquq va Tarbiya',
    difficulty: 'easy',
    question: "O'zbekiston Respublikasida davlat tili qaysi til?",
    options: ["Rus tili", "Ingliz tili", "O'zbek tili", "Qoraqalpoq tili"],
    correctIndex: 2,
    explanation: "Konstitutsiyaga ko'ra O'zbekiston Respublikasining davlat tili o'zbek tilidir."
  },
  {
    id: 'civ-4',
    subjectId: 'civics',
    subjectName: 'Huquq va Tarbiya',
    difficulty: 'medium',
    question: "Davlat hokimiyatining uch bo'g'inga bo'linish prinsipi qaysilar?",
    options: [
      "Qonun chiqaruvchi, ijro etuvchi va sud hokimiyati",
      "Prezident, vazirliklar va hokimliklar",
      "Armiya, militsiya va bojxona",
      "Mahalla, tuman va viloyat"
    ],
    correctIndex: 0,
    explanation: "Demokratik jamiyatda hokimiyat qonun chiqaruvchi (parlament), ijro etuvchi (hukumat) va sud tarmoqlariga bo'linadi."
  },
  {
    id: 'civ-5',
    subjectId: 'civics',
    subjectName: 'Huquq va Tarbiya',
    difficulty: 'medium',
    question: "BMT Bosh Assambleyasi tomonidan 'Inson huquqlari umumjahon deklaratsiyasi' qaysi yilda qabul qilingan?",
    options: ["1945-yil", "1948-yil 10-dekabr", "1991-yil", "1975-yil"],
    correctIndex: 1,
    explanation: "1948-yil 10-dekabrda qabul qilingan deklaratsiya insonning ajralmas huquq va erkinliklarini kafolatlaydi."
  },
  {
    id: 'civ-6',
    subjectId: 'civics',
    subjectName: 'Huquq va Tarbiya',
    difficulty: 'medium',
    question: "O'zbekistonda fuqarolar necha yoshdan boshlab saylovlarda ovoz berish huquqiga ega bo'ladilar?",
    options: ["16 yoshdan", "18 yoshdan", "21 yoshdan", "14 yoshdan"],
    correctIndex: 1,
    explanation: "18 yoshga to'lgan O'zbekiston fuqarolari faol saylov huquqiga (ovoz berishga) ega bo'ladilar."
  },
  {
    id: 'civ-7',
    subjectId: 'civics',
    subjectName: 'Huquq va Tarbiya',
    difficulty: 'medium',
    question: "Bola huquqlari to'g'risidagi xalqaro konvensiyaga ko'ra necha yoshgacha bo'lgan shaxslar bola hisoblanadi?",
    options: ["14 yoshgacha", "16 yoshgacha", "18 yoshga to'lmagan har bir inson", "21 yoshgacha"],
    correctIndex: 2,
    explanation: "Konvensiyaning 1-moddasiga binoan, 18 yoshga to'lmagan har bir inson bola hisoblanadi."
  },
  {
    id: 'civ-8',
    subjectId: 'civics',
    subjectName: 'Huquq va Tarbiya',
    difficulty: 'hard',
    question: "Shaxsning aybi qonunda belgilangan tartibda sudda isbotlanmaguncha u aybsiz hisoblanishi qanday qoida deyiladi?",
    options: [
      "Aybsizlik prezumpsiyasi (Presumption of innocence)",
      "Sud daxlsizligi",
      "Advokatlik siri",
      "Amnitsiya qoidasi"
    ],
    correctIndex: 0,
    explanation: "Aybsizlik prezumpsiyasi inson huquqlarining eng oliy kafolatlaridan biridir."
  },
  {
    id: 'civ-9',
    subjectId: 'civics',
    subjectName: 'Huquq va Tarbiya',
    difficulty: 'hard',
    question: "O'zbekiston Respublikasi Oliy Majlisi qanday ikki palatadan iborat?",
    options: [
      "Qonunchilik palatasi va Senat",
      "Xalq kengashi va Hukumat",
      "Vazirlar Mahkamasi va Oliy sud",
      "Milliy majlis va Adliya vazirligi"
    ],
    correctIndex: 0,
    explanation: "O'zbekiston parlamenti quyi — Qonunchilik palatasi va yuqori — Senatdan iborat parlamentdir."
  },
  {
    id: 'civ-10',
    subjectId: 'civics',
    subjectName: 'Huquq va Tarbiya',
    difficulty: 'hard',
    question: "Mehnat kodeksiga binoan, 16 yoshdan 18 yoshgacha bo'lgan xodimlar uchun haftalik qisqartirilgan ish vaqti necha soatdan oshmasligi kerak?",
    options: ["40 soat", "36 soat", "24 soat", "30 soat"],
    correctIndex: 1,
    explanation: "16–18 yoshdagi yoshlar salomatligi va ta'limini himoya qilish maqsadida haftalik ish vaqti 36 soatdan oshmasligi qat'iy belgilangan."
  },

  // =========================================================================
  // 12. RUS TILI (10 ta savol)
  // =========================================================================
  {
    id: 'rus-1',
    subjectId: 'russian',
    subjectName: 'Rus tili',
    difficulty: 'easy',
    question: "Определите род существительного 'КНИГА':",
    options: ["Мужской род", "Женский род", "Средний род", "Общий род"],
    correctIndex: 1,
    explanation: "Слово 'книга' оканчивается на -а и согласуется с местоимением 'она' — женский род."
  },
  {
    id: 'rus-2',
    subjectId: 'russian',
    subjectName: 'Rus tili',
    difficulty: 'easy',
    question: "Выберите правильное окончание: 'На столе лежит интересн... журнал.'",
    options: ["-ая", "-ый", "-ое", "-ые"],
    correctIndex: 1,
    explanation: "'Журнал' — мужской род, поэтому прилагательное отвечает на вопрос 'какой?' — интересный."
  },
  {
    id: 'rus-3',
    subjectId: 'russian',
    subjectName: 'Rus tili',
    difficulty: 'easy',
    question: "Сколько падежей в русском языке?",
    options: ["4", "5", "6 (И, Р, Д, В, Т, П)", "7"],
    correctIndex: 2,
    explanation: "В русском языке 6 падежей: Именительный, Родительный, Дательный, Винительный, Творительный, Предложный."
  },
  {
    id: 'rus-4',
    subjectId: 'russian',
    subjectName: 'Rus tili',
    difficulty: 'medium',
    question: "Выберите правильный предлог: 'Мы учимся ... десятом классе.'",
    options: ["на", "в", "к", "с"],
    correctIndex: 1,
    explanation: "С классами и помещениями используется предлог 'в' с предложным падежом: 'в десятом классе'."
  },
  {
    id: 'rus-5',
    subjectId: 'russian',
    subjectName: 'Rus tili',
    difficulty: 'medium',
    question: "Какое слово является антонимом к слову 'ВЫСОКИЙ'?",
    options: ["Длинный", "Низкий", "Широкий", "Большой"],
    correctIndex: 1,
    explanation: "Антоним к слову 'высокий' — 'низкий' (baland - past)."
  },
  {
    id: 'rus-6',
    subjectId: 'russian',
    subjectName: 'Rus tili',
    difficulty: 'medium',
    question: "Укажите глагол движения совершенного вида (одновременно, с результатом):",
    options: ["Идти", "Прийти", "Ходить", "Ехать"],
    correctIndex: 1,
    explanation: "'Прийти' отвечает на вопрос 'что сделать?' и обозначает завершенное действие с результатом."
  },
  {
    id: 'rus-7',
    subjectId: 'russian',
    subjectName: 'Rus tili',
    difficulty: 'medium',
    question: "Выберите правильную форму: 'У меня нет нов... учебника.'",
    options: ["-ый", "-ого", "-ому", "-ым"],
    correctIndex: 1,
    explanation: "Родительный падеж (кого? чего?): 'нового учебника'."
  },
  {
    id: 'rus-8',
    subjectId: 'russian',
    subjectName: 'Rus tili',
    difficulty: 'hard',
    question: "Определите спряжение глагола 'СМОТРЕТЬ':",
    options: [
      "I спряжение",
      "II спряжение (глагол-исключение)",
      "Разноспрягаемый",
      "Не имеет спряжения"
    ],
    correctIndex: 1,
    explanation: "'Смотреть' — глагол-исключение на -еть, относящийся ко II спряжению (смотришь, смотрит, смотрят)."
  },
  {
    id: 'rus-9',
    subjectId: 'russian',
    subjectName: 'Rus tili',
    difficulty: 'hard',
    question: "В каком предложении допущена пунктуационная ошибка?",
    options: [
      "Когда наступило утро, мы отправились в путь.",
      "Солнце взошло и птицы запели свои песни.",
      "Он сказал, что обязательно вернётся завтра.",
      "Книга, которую я прочитал, была очень интересной."
    ],
    correctIndex: 1,
    explanation: "Во втором предложении две основы ('солнце взошло' и 'птицы запели'), перед союзом 'и' обязательна запятая."
  },
  {
    id: 'rus-10',
    subjectId: 'russian',
    subjectName: 'Rus tili',
    difficulty: 'hard',
    question: "Что означает фразеологизм 'Бить баклуши'?",
    options: ["Усердно работать", "Бездельничать, тратить время зря", "Играть на барабанах", "Ссориться с друзьями"],
    correctIndex: 1,
    explanation: "'Бить баклуши' означает бездельничать, праздно проводить время (bekorchilik qilmoq)."
  }
];

// YORDAMCHI FUNKSIYALAR
function getQuestionsBySubject(subjectId) {
  return ALL_QUIZ_QUESTIONS.filter(q => q.subjectId === subjectId);
}

function getSubjectById(subjectId) {
  return SUBJECTS_DATA.find(s => s.id === subjectId);
}
