// SMARTVERSE Main Application Coordinator
// Routing, UI rendering, profile management, search, sound toggle, cosmic background

class App {
    constructor() {
        this.currentTab = 'home';
        this.init();
    }

    init() {
        this.setupBackgroundCanvas();
        this.setupNavigation();
        this.setupSearch();
        this.setupProfileUI();
        this.setupSoundToggle();
        this.renderAllViews();

        // Listen for storage changes
        window.addEventListener('smartverse_data_updated', () => {
            this.updateHeaderStats();
            this.renderAchievements();
            this.renderDailyQuests();
            this.renderProgressStats();
        });

        // Initialize header
        this.updateHeaderStats();
    }

    // Dynamic Cosmic Canvas Background
    setupBackgroundCanvas() {
        const canvas = document.getElementById('cosmic-bg-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const stars = [];
        const numStars = Math.min(90, Math.floor((width * height) / 12000));

        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 1.8 + 0.4,
                alpha: Math.random() * 0.8 + 0.2,
                speed: Math.random() * 0.3 + 0.1,
                color: ['#00f2fe', '#9d4edd', '#4facfe', '#ffffff'][Math.floor(Math.random() * 4)]
            });
        }

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });

        function animate() {
            ctx.clearRect(0, 0, width, height);

            for (const s of stars) {
                s.y -= s.speed;
                if (s.y < 0) {
                    s.y = height;
                    s.x = Math.random() * width;
                }

                ctx.save();
                ctx.globalAlpha = s.alpha;
                ctx.fillStyle = s.color;
                ctx.shadowColor = s.color;
                ctx.shadowBlur = s.radius * 3;
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }

            requestAnimationFrame(animate);
        }
        animate();
    }

    // Tab Navigation
    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link, .bottom-nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const tab = link.dataset.tab;
                if (tab) {
                    this.switchTab(tab);
                }
            });
        });

        // Mobile menu toggle
        const menuBtn = document.getElementById('mobile-menu-btn');
        const navMenu = document.getElementById('main-nav-links');
        if (menuBtn && navMenu) {
            menuBtn.addEventListener('click', () => {
                navMenu.classList.toggle('mobile-open');
                menuBtn.classList.toggle('active');
            });
        }
    }

    switchTab(tabId) {
        this.currentTab = tabId;
        if (window.soundEngine) window.soundEngine.playClick();

        // Close mobile menu if open
        const navMenu = document.getElementById('main-nav-links');
        const menuBtn = document.getElementById('mobile-menu-btn');
        if (navMenu) navMenu.classList.remove('mobile-open');
        if (menuBtn) menuBtn.classList.remove('active');

        // Update active class on nav links
        document.querySelectorAll('.nav-link, .bottom-nav-link').forEach(link => {
            link.classList.toggle('active', link.dataset.tab === tabId);
        });

        // Show corresponding section
        document.querySelectorAll('.tab-section').forEach(sec => {
            sec.classList.toggle('active', sec.id === `section-${tabId}`);
        });

        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Refresh dynamic view contents
        if (tabId === 'subjects') {
            window.quizApp.renderSubjectCards('subjects-grid');
        } else if (tabId === 'achievements') {
            this.renderAchievements();
        } else if (tabId === 'progress') {
            this.renderDailyQuests();
            this.renderProgressStats();
        }
    }

    // Search bar functionality
    setupSearch() {
        const input = document.getElementById('global-search-input');
        const resultsBox = document.getElementById('search-dropdown-results');

        if (!input || !resultsBox) return;

        input.addEventListener('input', (e) => {
            const query = e.target.value.trim().toLowerCase();
            if (!query) {
                resultsBox.style.display = 'none';
                return;
            }

            const subjectMatches = SUBJECTS_DATA.filter(s => 
                s.title.toLowerCase().includes(query) || s.desc.toLowerCase().includes(query)
            );

            const games = [
                { id: 'car', title: 'Cyber Poyga (Mashina)', icon: '🏎️', type: 'game' },
                { id: 'memory', title: 'Kosmik Xotira O\'yini', icon: '🧠', type: 'game' },
                { id: 'math', title: 'Tezkor Matematika', icon: '🧮', type: 'game' },
                { id: 'word', title: 'So\'z Topish Jumboqlari', icon: '📚', type: 'game' }
            ];

            const gameMatches = games.filter(g => g.title.toLowerCase().includes(query));

            if (subjectMatches.length === 0 && gameMatches.length === 0) {
                resultsBox.innerHTML = `<div class="search-item-empty">Hech narsa topilmadi</div>`;
                resultsBox.style.display = 'block';
                return;
            }

            let html = '';
            if (subjectMatches.length > 0) {
                html += `<div class="search-category-title">Maktab Fanlari</div>`;
                subjectMatches.forEach(s => {
                    html += `
                        <div class="search-item" onclick="window.app.selectSearchResult('subject', '${s.id}')">
                            <span class="search-item-icon">${s.icon}</span>
                            <div class="search-item-info">
                                <span class="search-item-name">${s.title}</span>
                                <span class="search-item-sub">${s.questionsCount} ta interaktiv test</span>
                            </div>
                        </div>
                    `;
                });
            }

            if (gameMatches.length > 0) {
                html += `<div class="search-category-title">O'yinlar</div>`;
                gameMatches.forEach(g => {
                    html += `
                        <div class="search-item" onclick="window.app.selectSearchResult('game', '${g.id}')">
                            <span class="search-item-icon">${g.icon}</span>
                            <div class="search-item-info">
                                <span class="search-item-name">${g.title}</span>
                                <span class="search-item-sub">Interaktiv O'yin</span>
                            </div>
                        </div>
                    `;
                });
            }

            resultsBox.innerHTML = html;
            resultsBox.style.display = 'block';
        });

        // Close search on outside click
        document.addEventListener('click', (e) => {
            if (!input.contains(e.target) && !resultsBox.contains(e.target)) {
                resultsBox.style.display = 'none';
            }
        });
    }

    selectSearchResult(type, id) {
        const resultsBox = document.getElementById('search-dropdown-results');
        const input = document.getElementById('global-search-input');
        if (resultsBox) resultsBox.style.display = 'none';
        if (input) input.value = '';

        if (type === 'subject') {
            this.switchTab('subjects');
            setTimeout(() => {
                window.quizApp.startQuiz(id);
            }, 300);
        } else if (type === 'game') {
            this.switchTab('games');
            setTimeout(() => {
                this.openGameModal(id);
            }, 300);
        }
    }

    // Sound Toggle
    setupSoundToggle() {
        const toggleBtn = document.getElementById('sound-toggle-btn');
        if (!toggleBtn) return;

        const updateBtn = (muted) => {
            toggleBtn.innerHTML = muted ? '🔇' : '🔊';
            toggleBtn.setAttribute('title', muted ? 'Ovozni yoqish' : 'Ovozni o\'chirish');
            toggleBtn.classList.toggle('muted', muted);
        };

        updateBtn(window.soundEngine.isMuted());

        toggleBtn.addEventListener('click', () => {
            const muted = window.soundEngine.toggleMute();
            updateBtn(muted);
            if (!muted) {
                window.soundEngine.playCoin();
            }
        });
    }

    // Profile & Header Stats
    setupProfileUI() {
        const profileBtn = document.getElementById('header-profile-badge');
        const modal = document.getElementById('profile-edit-modal');
        const closeBtn = document.getElementById('close-profile-modal-btn');
        const saveBtn = document.getElementById('save-profile-btn');

        if (profileBtn && modal) {
            profileBtn.addEventListener('click', () => {
                this.openProfileModal();
            });
        }

        if (closeBtn && modal) {
            closeBtn.addEventListener('click', () => {
                modal.classList.remove('active');
            });
        }

        if (saveBtn) {
            saveBtn.addEventListener('click', () => {
                const nameInput = document.getElementById('edit-profile-name');
                const selectedAvatar = document.querySelector('.avatar-choice.selected');
                const newName = nameInput ? nameInput.value.trim() : '';
                const newAvatar = selectedAvatar ? selectedAvatar.dataset.avatar : null;

                window.storageManager.updateProfile(newName, newAvatar);
                if (modal) modal.classList.remove('active');
                if (window.soundEngine) window.soundEngine.playCoin();
                this.showNotification("Profil ma'lumotlari muvaffaqiyatli saqlandi! ✨", 'success');
            });
        }

        // Avatar selector clicks
        document.querySelectorAll('.avatar-choice').forEach(choice => {
            choice.addEventListener('click', () => {
                document.querySelectorAll('.avatar-choice').forEach(c => c.classList.remove('selected'));
                choice.classList.add('selected');
                if (window.soundEngine) window.soundEngine.playClick();
            });
        });
    }

    openProfileModal() {
        const modal = document.getElementById('profile-edit-modal');
        const nameInput = document.getElementById('edit-profile-name');
        const p = window.storageManager.data.profile;

        if (nameInput) nameInput.value = p.name;
        document.querySelectorAll('.avatar-choice').forEach(c => {
            c.classList.toggle('selected', c.dataset.avatar === p.avatar);
        });

        if (modal) modal.classList.add('active');
        if (window.soundEngine) window.soundEngine.playClick();
    }

    updateHeaderStats() {
        const p = window.storageManager.data.profile;

        const avatarEl = document.getElementById('header-user-avatar');
        const nameEl = document.getElementById('header-user-name');
        const levelEl = document.getElementById('header-user-level');
        const xpTextEl = document.getElementById('header-xp-text');
        const xpFillEl = document.getElementById('header-xp-fill');
        const coinsEl = document.getElementById('header-coins-val');
        const streakEl = document.getElementById('header-streak-val');

        if (avatarEl) avatarEl.innerText = p.avatar;
        if (nameEl) nameEl.innerText = p.name;
        if (levelEl) levelEl.innerText = `${p.level}-daraja`;
        if (xpTextEl) xpTextEl.innerText = `${p.xp} / ${p.xpNeeded} XP`;
        if (xpFillEl) {
            const pct = Math.min(100, Math.round((p.xp / p.xpNeeded) * 100));
            xpFillEl.style.width = `${pct}%`;
        }
        if (coinsEl) coinsEl.innerText = p.coins;
        if (streakEl) streakEl.innerText = `${p.streak} kun`;
    }

    renderAllViews() {
        window.quizApp.renderSubjectCards('subjects-grid');
        this.renderHomeFeatured();
        this.renderAchievements();
        this.renderDailyQuests();
        this.renderProgressStats();
    }

    renderHomeFeatured() {
        // Quick summary on home hero/dashboard
        const heroName = document.getElementById('home-hero-greeting-name');
        if (heroName) {
            heroName.innerText = window.storageManager.data.profile.name;
        }
    }

    // Achievements Section
    renderAchievements() {
        const container = document.getElementById('achievements-grid');
        if (!container) return;

        const achievements = window.storageManager.data.achievements;
        const total = achievements.length;
        const unlockedCount = achievements.filter(a => a.unlocked).length;

        const summaryEl = document.getElementById('achievements-summary-text');
        if (summaryEl) {
            summaryEl.innerText = `${unlockedCount} / ${total} ta yutuq ochildi (${Math.round((unlockedCount/total)*100)}%)`;
        }

        container.innerHTML = achievements.map(ach => `
            <div class="achievement-card ${ach.unlocked ? 'unlocked' : 'locked'}">
                <div class="ach-icon-wrap">
                    <span class="ach-icon">${ach.icon}</span>
                    ${ach.unlocked ? '<span class="ach-check">✓</span>' : '<span class="ach-lock">🔒</span>'}
                </div>
                <div class="ach-info">
                    <h4 class="ach-title">${ach.title}</h4>
                    <p class="ach-desc">${ach.desc}</p>
                    <div class="ach-reward-badge">
                        <span>⚡ +${ach.xpReward} XP</span>
                        <span>🪙 +25 Tanga</span>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Daily Quests
    renderDailyQuests() {
        const container = document.getElementById('daily-quests-list');
        if (!container) return;

        const quests = window.storageManager.data.dailyQuests.quests;

        container.innerHTML = quests.map(q => {
            const isDone = q.progress >= q.target;
            const pct = Math.min(100, Math.round((q.progress / q.target) * 100));
            return `
                <div class="quest-card ${q.claimed ? 'claimed' : (isDone ? 'ready' : '')}">
                    <div class="quest-icon">${isDone ? (q.claimed ? '✨' : '🎁') : '🎯'}</div>
                    <div class="quest-body">
                        <div class="quest-top">
                            <h4 class="quest-title">${q.text}</h4>
                            <span class="quest-count">${q.progress} / ${q.target}</span>
                        </div>
                        <div class="quest-progress-bar">
                            <div class="fill" style="width: ${pct}%"></div>
                        </div>
                        <div class="quest-reward-row">
                            <span class="reward-tag">⚡ +${q.xp} XP</span>
                            <span class="reward-tag">🪙 +${q.coins} Tanga</span>
                        </div>
                    </div>
                    <div class="quest-action">
                        ${q.claimed ? 
                            '<button class="btn btn-outline" disabled>Olingan ✓</button>' : 
                            (isDone ? 
                                `<button class="btn btn-accent pulse-btn" onclick="window.app.claimQuest('${q.id}')">Mukofotni olish</button>` : 
                                `<button class="btn btn-secondary" onclick="window.app.goToQuestTask('${q.id}')">Bajarish</button>`
                            )
                        }
                    </div>
                </div>
            `;
        }).join('');
    }

    claimQuest(questId) {
        const res = window.storageManager.claimQuest(questId);
        if (res) {
            if (window.soundEngine) window.soundEngine.playLevelUp();
            this.showNotification(`Tabriklaymiz! +${res.xp} XP va +${res.coins} tanga qo'shildi! 🎉`, 'success');
            this.renderDailyQuests();
        }
    }

    goToQuestTask(questId) {
        if (questId === 'daily_quiz') {
            this.switchTab('subjects');
        } else if (questId === 'daily_car') {
            this.switchTab('games');
            setTimeout(() => this.openGameModal('car'), 300);
        } else if (questId === 'daily_memory') {
            this.switchTab('games');
            setTimeout(() => this.openGameModal('memory'), 300);
        } else if (questId === 'daily_math') {
            this.switchTab('games');
            setTimeout(() => this.openGameModal('math'), 300);
        }
    }

    // Progress and Stats
    renderProgressStats() {
        const st = window.storageManager.data;
        const stats = st.stats;

        // Big stat numbers
        const totalTestsEl = document.getElementById('stat-total-tests');
        const correctAnswersEl = document.getElementById('stat-correct-answers');
        const gamesPlayedEl = document.getElementById('stat-games-played');
        const accuracyEl = document.getElementById('stat-accuracy-rate');

        if (totalTestsEl) totalTestsEl.innerText = stats.quizzesCompleted;
        if (correctAnswersEl) correctAnswersEl.innerText = stats.correctAnswers;
        if (gamesPlayedEl) gamesPlayedEl.innerText = stats.gamesPlayed;

        const totalAnswered = stats.correctAnswers + stats.wrongAnswers;
        const accPct = totalAnswered > 0 ? Math.round((stats.correctAnswers / totalAnswered) * 100) : 100;
        if (accuracyEl) accuracyEl.innerText = `${accPct}%`;

        // Weekly activity bars
        const weeklyContainer = document.getElementById('weekly-chart-bars');
        if (weeklyContainer && st.weeklyActivity) {
            const maxXP = Math.max(...st.weeklyActivity.map(w => w.xp), 150);
            weeklyContainer.innerHTML = st.weeklyActivity.map(dayItem => {
                const heightPct = Math.max(12, Math.round((dayItem.xp / maxXP) * 100));
                return `
                    <div class="weekly-bar-col">
                        <span class="bar-val">${dayItem.xp}</span>
                        <div class="bar-track">
                            <div class="bar-fill" style="height: ${heightPct}%"></div>
                        </div>
                        <span class="bar-label">${dayItem.day}</span>
                    </div>
                `;
            }).join('');
        }
    }

    // Game Modals Controller
    openGameModal(gameId) {
        const modal = document.getElementById(`game-modal-${gameId}`);
        if (!modal) return;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        if (gameId === 'car') {
            window.carGame.init();
        }

        if (window.soundEngine) window.soundEngine.playClick();
    }

    closeGameModal(gameId) {
        const modal = document.getElementById(`game-modal-${gameId}`);
        if (!modal) return;

        modal.classList.remove('active');
        document.body.style.overflow = 'auto';

        if (gameId === 'car' && window.carGame) {
            window.carGame.isRunning = false;
        }
        if (gameId === 'math' && window.mathGame) {
            window.mathGame.isRunning = false;
            clearInterval(window.mathGame.timer);
        }
        if (gameId === 'memory' && window.memoryGame) {
            clearInterval(window.memoryGame.timer);
        }

        if (window.soundEngine) window.soundEngine.playClick();
    }

    showNotification(msg, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `app-toast toast-${type}`;
        toast.innerHTML = `
            <span class="toast-icon">${type === 'success' ? '🌟' : 'ℹ️'}</span>
            <span class="toast-message">${msg}</span>
        `;
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('show');
        }, 50);

        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 400);
        }, 3500);
    }
}

// Global notification bridge
window.showAppNotification = (msg, type) => {
    if (window.app) window.app.showNotification(msg, type);
};

window.addEventListener('DOMContentLoaded', () => {
    window.app = new App();
});
