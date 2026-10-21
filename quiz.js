// SMARTVERSE Quiz Engine & Subject Questions
// Interactive, educational, responsive test system

const SUBJECTS_DATA = [
    {
        id: 'matematika',
        title: 'Matematika',
        icon: '📐',
        desc: "Hisoblash, mantiq, geometriya va qiziqarli tenglamalar olami",
        color: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)',
        questionsCount: 6,
        questions: [
            {
                q: "Agar 7 × 8 = 56 bo'lsa, 560 ÷ 70 nechiga teng?",
                options: ["8", "7", "80", "10"],
                answer: 0,
                hint: "Nollarni qisqartirib ko'ring: 56 ÷ 7 = 8",
                explanation: "560 ÷ 70 = 8. Chunki ikkala sondan ham bittadan nolni qisqartirsak, 56 ÷ 7 = 8 bo'ladi."
            },
            {
                q: "To'g'ri to'rtburchakning eni 4 sm, bo'yi 9 sm. Uning yuzi qancha?",
                options: ["26 sm²", "36 sm²", "13 sm²", "40 sm²"],
                answer: 1,
                hint: "Yuzasi: S = a × b",
                explanation: "To'rtburchak yuzi tomonlar ko'paytmasiga teng: 4 × 9 = 36 sm²."
            },
            {
                q: "Ketma-ketlikdagi keyingi sonni toping: 2, 4, 8, 16, ...",
                options: ["24", "30", "32", "64"],
                answer: 2,
                hint: "Har bir son oldingisidan 2 barobar katta",
                explanation: "Har bir son 2 ga ko'payib bormoqda: 16 × 2 = 32."
            },
            {
                q: "Uchburchakning ichki burchaklari yig'indisi har doim nechchi gradusga teng?",
                options: ["90°", "180°", "270°", "360°"],
                answer: 1,
                hint: "Yassi geometriya qoidasi",
                explanation: "Har qanday uchburchakning ichki burchaklari yig'indisi doimo 180° ga teng."
            },
            {
                q: "Daraxtda 15 ta qush bor edi. 4 tasi uchib ketdi, yana 7 tasi kelib qo'ndi. Daraxtda nechta qush bo'ldi?",
                options: ["18 ta", "22 ta", "16 ta", "15 ta"],
                answer: 0,
                hint: "15 - 4 + 7 amalini bajaring",
                explanation: "15 - 4 = 11, so'ngra 11 + 7 = 18 ta qush bo'ladi."
            },
            {
                q: "100 ning 25 foizi (25%) nechiga teng?",
                options: ["50", "20", "25", "75"],
                answer: 2,
                hint: "100 ning to'rtdan bir qismi",
                explanation: "100 ning 25% i aynan 25 soniga teng."
            }
        ]
    },
    {
        id: 'onatili',
        title: 'Ona tili va Adabiyot',
        icon: '📖',
        desc: "Grammatika, boy so'z boyligi, maqollar va adabiy durdonalar",
        color: 'linear-gradient(135deg, #4E65FF 0%, #92EFFD 100%)',
        questionsCount: 6,
        questions: [
            {
                q: "Qaysi qatordagi so'zlar juftligi o'zaro ma'nodosh (sinonim) hisoblanadi?",
                options: ["Katta - kichik", "Go'zal - chiroyli", "Kun - tun", "Aqlli - nodon"],
                answer: 1,
                hint: "Bir xil ma'noni bildiruvchi so'zlarni qidiring",
                explanation: "'Go'zal' va 'chiroyli' so'zlari ma'nodosh (sinonim) hisoblanadi."
            },
            {
                q: "'Alisher Navoiy' nechanchi yilda tavallud topgan?",
                options: ["1336-yil", "1441-yil", "1483-yil", "1501-yil"],
                answer: 1,
                hint: "15-asr o'rtalari, Hirot",
                explanation: "G'azal mulkining sultoni Alisher Navoiy 1441-yil 9-fevralda Hirot shahrida tug'ilgan."
            },
            {
                q: "Quyidagi so'zlardan qaysi biri imlo jihatidan to'g'ri yozilgan?",
                options: ["Tashakkur", "Tashakur", "Tashakkir", "Tashukur"],
                answer: 0,
                hint: "Ikkita 'k' harfi bilan",
                explanation: "'Tashakkur' so'zida ikkita 'k' harfi yozilishi to'g'ri orfografik me'yordir."
            },
            {
                q: "'Oltin olma, ... ol' maqolining davomini toping.",
                options: ["Kumush ol", "Duo ol", "Bilim ol", "Yordam ol"],
                answer: 1,
                hint: "Kattalardan olinadigan ezgu tilak",
                explanation: "Xalq maqoli: 'Oltin olma, duo ol; duo oltin emasmi?'"
            },
            {
                q: "O'zbek tilida nechta unli tovush bor?",
                options: ["5 ta", "6 ta", "10 ta", "23 ta"],
                answer: 1,
                hint: "A, O, I, U, O', E",
                explanation: "Hozirgi o'zbek adabiy tilida 6 ta unli fonema (tovush) mavjud: a, o, i, u, o', e."
            },
            {
                q: "Ot, sifat, son, olmosh qanday so'z turkumlariga kiradi?",
                options: ["Yordamchi so'z turkumlari", "Mustaqil so'z turkumlari", "Undov so'zlar", "Kirish so'zlar"],
                answer: 1,
                hint: "Leksik va grammatik mustaqil ma'noga ega",
                explanation: "Lug'aviy ma'noga ega bo'lib, gap bo'lagi vazifasida keladigan so'zlar mustaqil so'z turkumlari deyiladi."
            }
        ]
    },
    {
        id: 'english',
        title: 'Ingliz tili (English)',
        icon: '🌍',
        desc: "Lug'at boyligi, zamonlar va xalqaro muloqot sirlari",
        color: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
        questionsCount: 6,
        questions: [
            {
                q: "Choose the correct translation: 'Men kitob o'qiyapman'",
                options: ["I read a book", "I am reading a book", "I will read a book", "I had a book"],
                answer: 1,
                hint: "Present Continuous zamoni (am/is/are + verb-ing)",
                explanation: "Hozir sodir bo'layotgan ish-harakati uchun 'I am reading a book' ishlatiladi."
            },
            {
                q: "What is the opposite of 'brave' (qo'rqmas / jasur)?",
                options: ["Strong", "Smart", "Cowardly", "Kind"],
                answer: 2,
                hint: "Qo'rqoq so'zi",
                explanation: "'Brave' - jasur, uning antonimi 'Cowardly' - qo'rqoq deganidir."
            },
            {
                q: "Choose the correct past form of the verb 'GO':",
                options: ["Goed", "Gone", "Went", "Going"],
                answer: 2,
                hint: "Noto'g'ri fe'llar ro'yxatini eslang",
                explanation: "'Go' fe'lining o'tgan zamon (Past Simple) shakli 'went' bo'ladi."
            },
            {
                q: "'An apple a day keeps the ... away'. Complete the famous proverb:",
                options: ["Teacher", "Doctor", "Friend", "Cold"],
                answer: 1,
                hint: "Salomatlik bilan bog'liq mutaxassis",
                explanation: "Ingliz maqoli: 'An apple a day keeps the doctor away' (Kunda bir olma yesangiz, shifokorga hojat qolmaydi)."
            },
            {
                q: "Which word is a fruit?",
                options: ["Carrot", "Potato", "Strawberry", "Onion"],
                answer: 2,
                hint: "Qulupnay",
                explanation: "'Strawberry' (qulupnay) meva/rezavor, qolganlari esa sabzavotlar."
            },
            {
                q: "Fill in the blank: 'She ... to school every day.'",
                options: ["go", "goes", "going", "gone"],
                answer: 1,
                hint: "He / She / It uchun fe'lga -s yoki -es qo'shiladi",
                explanation: "Present Simple'da 3-shaxs birlik uchun (She) fe'l 'goes' shaklini oladi."
            }
        ]
    },
    {
        id: 'biologiya',
        title: 'Tabiat & Biologiya',
        icon: '🌿',
        desc: "Tirik tabiat, inson tanasi, hayvonot olami va koinot sirlari",
        color: 'linear-gradient(135deg, #00b09b 0%, #96c93d 100%)',
        questionsCount: 6,
        questions: [
            {
                q: "O'simliklar fotosintez jarayonida qanday gazni yutib, qaysi gazni chiqaradi?",
                options: [
                    "Kislorod yutib, karbonat angidrid chiqaradi",
                    "Karbonat angidrid yutib, kislorod chiqaradi",
                    "Azot yutib, vodorod chiqaradi",
                    "Faqat kislorod yutadi"
                ],
                answer: 1,
                hint: "Daraxtlar havoni tozalaydi",
                explanation: "O'simliklar yorug'likda karbonat angidrid (CO2) yutib, biz nafas oladigan kislorod (O2) ajratadi."
            },
            {
                q: "Quyosh sistemasidagi eng katta sayyora qaysi?",
                options: ["Mars", "Saturn", "Yupiter", "Venera"],
                answer: 2,
                hint: "Ulg'aygan gaz giganti",
                explanation: "Yupiter — Quyosh tizimidagi barcha sayyoralarning eng kattasi va eng massivisidir."
            },
            {
                q: "Inson yuragi bir kecha-kunduzda o'rtacha necha marta uradi?",
                options: ["1 000 marta", "10 000 marta", "100 000 marta", "1 000 000 marta"],
                answer: 2,
                hint: "Daqiqasiga taxminan 70 marta uradi",
                explanation: "Bir daqiqada 70 marta ursa, 24 soatda taxminan 100,000 martadan ortiq qisqaradi."
            },
            {
                q: "Qaysi jonzot eng tez yuguruvchi quruqlik hayvoni hisoblanadi?",
                options: ["Sher", "Gepard", "Bo'ri", "Kiyik"],
                answer: 1,
                hint: "Tezligi 110-120 km/soat ga yetadi",
                explanation: "Gepard (Cheetah) soatiga 110-120 km tezlik bilan yugurib, yer yuzidagi eng tez yirtqichdir."
            },
            {
                q: "Suv qaysi haroratda qaynaydi (normal atmosfera bosimida)?",
                options: ["50°C", "80°C", "100°C", "120°C"],
                answer: 2,
                hint: "Qaynash nuqtasi",
                explanation: "Oddiy atmosfera bosimida toza suv 100°C haroratda qaynaydi."
            },
            {
                q: "Qushlarning uchishiga yordam beruvchi eng asosiy anatomik moslashuv nima?",
                options: ["Og'ir suyaklar", "Kovak (ichi bo'shliq) yengil suyaklar", "Katta quloqlar", "To'rtta oyoq"],
                answer: 1,
                hint: "Yengil vazn zarur",
                explanation: "Qushlarning suyaklari ichi pishiq va g'ovak bo'lib, ularning og'irligini ancha yengillashtiradi."
            }
        ]
    },
    {
        id: 'tarix',
        title: 'Tarix va Mantiq',
        icon: '🏛️',
        desc: "Buyuk sarkardalar, tarixiy sanalar va o'tkir mantiqiy masalalar",
        color: 'linear-gradient(135deg, #f857a6 0%, #ff5858 100%)',
        questionsCount: 6,
        questions: [
            {
                q: "Buyuk sarkarda Amir Temur nechanchi yilda tavallud topgan?",
                options: ["1336-yil 9-aprel", "1441-yil 9-fevral", "1370-yil 1-may", "1221-yil 15-mart"],
                answer: 0,
                hint: "Kesh (Shahrisabz) yaqinidagi Xo'ja Ilg'or qishlog'i",
                explanation: "Sohibqiron Amir Temur 1336-yil 9-aprelda Shahrisabz yaqinidagi Xo'ja Ilg'or qishlog'ida tug'ilgan."
            },
            {
                q: "Tibbiyot ilmining sultoni deb e'tirof etilgan buyuk alloma kim?",
                options: ["Al-Xorazmiy", "Abu Rayhon Beruniy", "Abu Ali ibn Sino", "Mirzo Ulug'bek"],
                answer: 2,
                hint: "'Tib qonunlari' asari muallifi (Avitsenna)",
                explanation: "Abu Ali ibn Sino (Avitsenna) butun jahonda tibbiyot fanining asoschilaridan biri hisoblanadi."
            },
            {
                q: "Mantiqiy savol: Qaysi narsa qanchalik ko'p olinsa, shunchalik kattalashadi?",
                options: ["Tosh", "O'ra (chuqur)", "Kitob", "Suv idishi"],
                answer: 1,
                hint: "Yerdan tuproq qazib olinganda nima bo'ladi?",
                explanation: "Chuqurdan qancha ko'p tuproq olinsa, chuqurning o'zi shuncha kattalashib boraveradi."
            },
            {
                q: "Qadimgi dunyoning yetti mo'jizasidan biri bo'lgan Piramidalar qaysi mamlakatda joylashgan?",
                options: ["Gresiya", "Misr", "Rim", "Hindiston"],
                answer: 1,
                hint: "Nil daryosi bo'yida",
                explanation: "Misr ehromlari (piramidalari) Qohira yaqinidagi Giza platosida joylashgan."
            },
            {
                q: "Algebra faniga asos solgan alloma kim?",
                options: ["Al-Farg'oniy", "Al-Xorazmiy", "Ibn Sino", "Zamaxshariy"],
                answer: 1,
                hint: "'Al-Jabr' asari va algoritm atamasi",
                explanation: "Muhammad ibn Muso al-Xorazmiy algebra fanining asoschisi hisoblanadi."
            },
            {
                q: "Mantiqiy jumboq: Bir poyezd sharqdan g'arbga 100 km/soat tezlikda ketmoqda. Shamol esa g'arbdan sharqqa esmoqda. Elektr poyezdining tutuni qaysi tomonga ketadi?",
                options: ["Sharqqa", "G'arbga", "Yuqoriga", "Elektr poyezdining tutuni bo'lmaydi"],
                answer: 3,
                hint: "Poyezd turiga e'tibor bering!",
                explanation: "Savolda 'elektr poyezdi' deyilgan, elektr poyezdida esa umuman tutun chiqmaydi!"
            }
        ]
    },
    {
        id: 'it',
        title: 'IT & Dasturlash',
        icon: '💻',
        desc: "Kiber xavfsizlik, veb texnologiyalar va kelajak algoritmlari",
        color: 'linear-gradient(135deg, #8A2387 0%, #E94057 50%, #F27121 100%)',
        questionsCount: 6,
        questions: [
            {
                q: "Veb-sahifaning ko'rinishi va dizayni (ranglar, shriftlar) qaysi texnologiya bilan boshqariladi?",
                options: ["HTML", "CSS", "Python", "SQL"],
                answer: 1,
                hint: "Cascading Style Sheets",
                explanation: "CSS (Cascading Style Sheets) veb-sahifaning uslubi, ranglari va ko'rinishini belgilaydi."
            },
            {
                q: "1 Kilobayt (KB) necha Baytga teng?",
                options: ["100 Bayt", "512 Bayt", "1000 Bayt", "1024 Bayt"],
                answer: 3,
                hint: "2 ning 10-darajasi (2^10)",
                explanation: "Informatikada 1 KB = 1024 Bayt (ikkilik sanoq tizimida 2^10)."
            },
            {
                q: "Quyidagilardan qaysi biri dasturlash tili emas?",
                options: ["Python", "JavaScript", "C++", "Google Chrome"],
                answer: 3,
                hint: "Internetda saytlarni ko'rish uchun mo'ljallangan brauzer",
                explanation: "Google Chrome — bu veb-brauzer, qolgan uchtasi esa mashhur dasturlash tillari."
            },
            {
                q: "Kuchli va xavfsiz parol qanday bo'lishi kerak?",
                options: [
                    "Faqat 12345678",
                    "O'z ismi va tug'ilgan yili",
                    "Katta-kichik harflar, raqamlar va belgilar aralashmasi",
                    "Qisqa bitta so'z"
                ],
                answer: 2,
                hint: "Kiberxavfsizlik qoidasi",
                explanation: "Xavfsiz parol kamida 8-12 belgidan iborat, katta va kichik harflar, raqamlar va maxsus belgilarni o'z ichiga olishi kerak."
            },
            {
                q: "Brauzerda sahifani yangilash (refresh) uchun klaviaturadagi qaysi tugma bosiladi?",
                options: ["F1", "F5", "Esc", "Tab"],
                answer: 1,
                hint: "Yuqori qatordagi funksional tugma",
                explanation: "F5 tugmasi (yoki Ctrl + R) barcha zamonaviy brauzerlarda sahifani qayta yuklaydi."
            },
            {
                q: "Sun'iy intellekt (AI) qisqartmasi ingliz tilida nimani bildiradi?",
                options: ["Automated Internet", "Artificial Intelligence", "Advanced Interface", "Active Informer"],
                answer: 1,
                hint: "Artificial ...",
                explanation: "AI — 'Artificial Intelligence', ya'ni Sun'iy Intellekt deganidir."
            }
        ]
    }
];

class QuizApp {
    constructor() {
        this.currentSubject = null;
        this.currentQuestionIdx = 0;
        this.score = 0;
        this.userAnswers = [];
        this.timer = null;
        this.timeLeft = 20;
        this.isAnswered = false;
    }

    renderSubjectCards(containerId, filterText = '') {
        const container = document.getElementById(containerId);
        if (!container) return;

        const filtered = SUBJECTS_DATA.filter(s => 
            s.title.toLowerCase().includes(filterText.toLowerCase()) || 
            s.desc.toLowerCase().includes(filterText.toLowerCase())
        );

        if (filtered.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <span class="empty-icon">🔍</span>
                    <h3>Hech qanday fan topilmadi</h3>
                    <p>"${filterText}" so'rovi bo'yicha ma'lumot yo'q. Boshqa qidiruv so'zini sinab ko'ring.</p>
                </div>
            `;
            return;
        }

        const storageData = window.storageManager.data;

        container.innerHTML = filtered.map(sub => {
            const prog = storageData.subjectProgress[sub.id] || { testsCount: 0, bestScore: 0 };
            return `
                <div class="subject-card card-glow" data-subject="${sub.id}">
                    <div class="subject-card-header" style="background: ${sub.color}">
                        <span class="subject-icon">${sub.icon}</span>
                        <div class="subject-badge">${sub.questionsCount} ta savol</div>
                    </div>
                    <div class="subject-card-body">
                        <h3 class="subject-title">${sub.title}</h3>
                        <p class="subject-desc">${sub.desc}</p>
                        <div class="subject-stats-row">
                            <span>Topshirilgan: <b>${prog.testsCount}</b> marta</span>
                            <span>Eng yaxshi: <b>${prog.bestScore}%</b></span>
                        </div>
                        <div class="card-progress-bar">
                            <div class="fill" style="width: ${prog.bestScore}%"></div>
                        </div>
                        <button class="btn btn-primary start-quiz-btn" onclick="window.quizApp.startQuiz('${sub.id}')">
                            <span class="btn-icon">⚡</span> Testni boshlash
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    }

    startQuiz(subjectId) {
        const sub = SUBJECTS_DATA.find(s => s.id === subjectId);
        if (!sub) return;

        this.currentSubject = sub;
        this.currentQuestionIdx = 0;
        this.score = 0;
        this.userAnswers = [];
        this.isAnswered = false;

        const modal = document.getElementById('quiz-modal');
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        if (window.soundEngine) window.soundEngine.playClick();
        this.loadQuestion();
    }

    loadQuestion() {
        this.isAnswered = false;
        clearInterval(this.timer);
        this.timeLeft = 20;

        const qData = this.currentSubject.questions[this.currentQuestionIdx];
        const total = this.currentSubject.questions.length;

        // UI elements
        const titleEl = document.getElementById('quiz-modal-title');
        const countEl = document.getElementById('quiz-question-counter');
        const progressEl = document.getElementById('quiz-progress-bar-fill');
        const timerEl = document.getElementById('quiz-timer-text');
        const questionTextEl = document.getElementById('quiz-question-text');
        const optionsContainer = document.getElementById('quiz-options-container');
        const feedbackContainer = document.getElementById('quiz-feedback');
        const nextBtn = document.getElementById('quiz-next-btn');

        if (titleEl) titleEl.innerHTML = `${this.currentSubject.icon} ${this.currentSubject.title}`;
        if (countEl) countEl.innerText = `${this.currentQuestionIdx + 1} / ${total}`;
        if (progressEl) progressEl.style.width = `${((this.currentQuestionIdx + 1) / total) * 100}%`;
        if (timerEl) {
            timerEl.innerText = `${this.timeLeft}s`;
            timerEl.parentElement.classList.remove('danger');
        }
        if (questionTextEl) questionTextEl.innerText = qData.q;
        if (feedbackContainer) feedbackContainer.innerHTML = '';
        if (nextBtn) {
            nextBtn.disabled = true;
            nextBtn.innerText = (this.currentQuestionIdx + 1 === total) ? "Natijani ko'rish 🏁" : "Keyingisi ➡️";
        }

        // Render options
        if (optionsContainer) {
            const letters = ['A', 'B', 'C', 'D'];
            optionsContainer.innerHTML = qData.options.map((opt, idx) => `
                <button class="quiz-option-btn" data-index="${idx}" onclick="window.quizApp.selectAnswer(${idx})">
                    <span class="opt-letter">${letters[idx]}</span>
                    <span class="opt-text">${opt}</span>
                </button>
            `).join('');
        }

        // Start countdown timer
        this.timer = setInterval(() => {
            this.timeLeft--;
            if (timerEl) {
                timerEl.innerText = `${this.timeLeft}s`;
                if (this.timeLeft <= 5) {
                    timerEl.parentElement.classList.add('danger');
                }
            }
            if (this.timeLeft <= 0) {
                clearInterval(this.timer);
                if (!this.isAnswered) {
                    this.selectAnswer(-1); // Timed out
                }
            }
        }, 1000);
    }

    selectAnswer(chosenIdx) {
        if (this.isAnswered) return;
        this.isAnswered = true;
        clearInterval(this.timer);

        const qData = this.currentSubject.questions[this.currentQuestionIdx];
        const isCorrect = (chosenIdx === qData.answer);

        if (isCorrect) {
            this.score++;
            if (window.soundEngine) window.soundEngine.playCorrect();
        } else {
            if (window.soundEngine) window.soundEngine.playWrong();
        }

        this.userAnswers.push({
            question: qData.q,
            options: qData.options,
            chosen: chosenIdx,
            correct: qData.answer,
            isCorrect: isCorrect,
            explanation: qData.explanation
        });

        // Highlight buttons
        const buttons = document.querySelectorAll('.quiz-option-btn');
        buttons.forEach((btn, idx) => {
            btn.disabled = true;
            if (idx === qData.answer) {
                btn.classList.add('correct');
            }
            if (idx === chosenIdx && !isCorrect) {
                btn.classList.add('wrong');
            }
        });

        // Show instant explanation feedback
        const feedbackContainer = document.getElementById('quiz-feedback');
        if (feedbackContainer) {
            feedbackContainer.innerHTML = `
                <div class="feedback-card ${isCorrect ? 'fb-correct' : 'fb-wrong'}">
                    <div class="fb-header">
                        <span class="fb-icon">${isCorrect ? '✅ To\'g\'ri javob!' : '❌ Noto\'g\'ri javob!'}</span>
                    </div>
                    <p class="fb-expl"><b>Tushuntirish:</b> ${qData.explanation}</p>
                </div>
            `;
        }

        const nextBtn = document.getElementById('quiz-next-btn');
        if (nextBtn) {
            nextBtn.disabled = false;
        }
    }

    nextQuestion() {
        if (window.soundEngine) window.soundEngine.playClick();
        this.currentQuestionIdx++;
        if (this.currentQuestionIdx < this.currentSubject.questions.length) {
            this.loadQuestion();
        } else {
            this.showResults();
        }
    }

    showResults() {
        clearInterval(this.timer);
        const total = this.currentSubject.questions.length;
        const result = window.storageManager.recordQuizResult(this.currentSubject.id, this.score, total);

        if (result.percentage >= 60) {
            if (window.soundEngine) window.soundEngine.playWin();
        } else {
            if (window.soundEngine) window.soundEngine.playGameOver();
        }

        const quizBody = document.getElementById('quiz-modal-content');
        if (!quizBody) return;

        let gradeBadge = "Zo'r natija! 🌟";
        let gradeColor = "#00f260";
        if (result.percentage < 50) {
            gradeBadge = "Yana biroz mashq qiling! 💪";
            gradeColor = "#ff416c";
        } else if (result.percentage < 80) {
            gradeBadge = "Yaxshi natija! 👍";
            gradeColor = "#ffb300";
        }

        quizBody.innerHTML = `
            <div class="quiz-results-view">
                <div class="result-header-card">
                    <div class="result-badge" style="background: ${gradeColor}22; color: ${gradeColor}; border: 1px solid ${gradeColor}">
                        ${gradeBadge}
                    </div>
                    <h2 class="result-title">${this.currentSubject.title} bo'yicha test yakunlandi!</h2>
                    
                    <div class="score-circle-container">
                        <div class="score-circle">
                            <span class="score-num">${this.score}/${total}</span>
                            <span class="score-percent">${result.percentage}%</span>
                        </div>
                    </div>

                    <div class="rewards-banner">
                        <div class="reward-pill"><span class="icon">⚡</span> +${result.earnedXP} XP</div>
                        <div class="reward-pill"><span class="icon">🪙</span> +${result.earnedCoins} Tanga</div>
                    </div>
                </div>

                <div class="review-section">
                    <h3 class="review-title">Savollar tahlili va to'g'ri javoblar</h3>
                    <div class="review-list">
                        ${this.userAnswers.map((item, idx) => `
                            <div class="review-item ${item.isCorrect ? 'rev-correct' : 'rev-wrong'}">
                                <div class="rev-q-num">
                                    <span>${idx + 1}-savol</span>
                                    <span class="rev-status">${item.isCorrect ? '✅ To\'g\'ri' : '❌ Noto\'g\'ri'}</span>
                                </div>
                                <p class="rev-question">${item.question}</p>
                                <div class="rev-answers-grid">
                                    <div class="rev-answer-box your-answer ${item.isCorrect ? 'is-good' : 'is-bad'}">
                                        <small>Sizning javobingiz:</small>
                                        <p>${item.chosen >= 0 ? item.options[item.chosen] : 'Vaqt tugadi (Javob berilmadi)'}</p>
                                    </div>
                                    <div class="rev-answer-box right-answer">
                                        <small>To'g'ri javob:</small>
                                        <p>${item.options[item.correct]}</p>
                                    </div>
                                </div>
                                <p class="rev-explanation">💡 <b>Izoh:</b> ${item.explanation}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="modal-actions-footer">
                    <button class="btn btn-secondary" onclick="window.quizApp.restartCurrentSubject()">
                        🔄 Qayta topshirish
                    </button>
                    <button class="btn btn-primary" onclick="window.quizApp.closeQuizModal()">
                        ✅ Boshqa fanlarni tanlash
                    </button>
                </div>
            </div>
        `;
    }

    restartCurrentSubject() {
        if (!this.currentSubject) return;
        this.restoreModalStructure();
        this.startQuiz(this.currentSubject.id);
    }

    closeQuizModal() {
        clearInterval(this.timer);
        const modal = document.getElementById('quiz-modal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        this.restoreModalStructure();
        this.renderSubjectCards('subjects-grid');
    }

    restoreModalStructure() {
        const modalContainer = document.getElementById('quiz-modal-inner');
        if (!modalContainer) return;

        modalContainer.innerHTML = `
            <div class="modal-header">
                <div class="modal-title-wrap">
                    <h3 id="quiz-modal-title">Fan nomi</h3>
                    <div class="modal-subtitle">Bilimingizni sinab ko'ring</div>
                </div>
                <div class="modal-hud-stats">
                    <div class="hud-pill timer-pill" id="quiz-timer-pill">
                        ⏱️ <span id="quiz-timer-text">20s</span>
                    </div>
                    <div class="hud-pill counter-pill">
                        🎯 <span id="quiz-question-counter">1 / 6</span>
                    </div>
                </div>
                <button class="modal-close-btn" onclick="window.quizApp.closeQuizModal()">✕</button>
            </div>
            
            <div class="quiz-progress-track">
                <div class="quiz-progress-bar-fill" id="quiz-progress-bar-fill" style="width: 15%"></div>
            </div>

            <div class="modal-body" id="quiz-modal-content">
                <div class="question-container">
                    <h2 class="question-text" id="quiz-question-text">Savol yuklanmoqda...</h2>
                </div>
                
                <div class="quiz-options-grid" id="quiz-options-container">
                    <!-- Dynamic Options -->
                </div>

                <div id="quiz-feedback" class="quiz-feedback-wrap"></div>
            </div>

            <div class="modal-footer" id="quiz-modal-footer">
                <button class="btn btn-secondary" onclick="window.quizApp.closeQuizModal()">
                    Chiqish
                </button>
                <button class="btn btn-primary" id="quiz-next-btn" onclick="window.quizApp.nextQuestion()" disabled>
                    Keyingisi ➡️
                </button>
            </div>
        `;
    }
}

window.quizApp = new QuizApp();
