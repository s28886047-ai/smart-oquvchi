// SMARTVERSE State and Storage Manager
// Handles user progress, XP, levels, coins, achievements, and daily quests in localStorage

class StorageManager {
    constructor() {
        this.STORAGE_KEY = 'smartverse_user_data_v1';
        this.data = this.loadData();
        this.initDailyQuests();
    }

    getDefaultData() {
        return {
            profile: {
                name: "Yosh Bilimdon",
                avatar: "🚀",
                title: "Kosmik Sayohatchi",
                level: 1,
                xp: 0,
                xpNeeded: 100,
                coins: 50,
                streak: 1,
                lastActiveDate: new Date().toISOString().split('T')[0]
            },
            stats: {
                quizzesCompleted: 0,
                correctAnswers: 0,
                wrongAnswers: 0,
                gamesPlayed: 0,
                totalStars: 50
            },
            gameHighScores: {
                car: 0,
                memory: { bestMoves: null, bestTime: null },
                math: 0,
                word: 0
            },
            achievements: [
                { id: 'first_step', title: "Birinchi Qadam", desc: "Birinchi test yoki o'yinni yakunlang", icon: "🌱", unlocked: false, xpReward: 50 },
                { id: 'math_genius', title: "Matematika Dahosi", desc: "Matematika o'yinida 100 balldan oshiring", icon: "🧮", unlocked: false, xpReward: 100 },
                { id: 'speed_racer', title: "Tezkor Poygachi", desc: "Poygada 200 ball to'plang", icon: "🏎️", unlocked: false, xpReward: 100 },
                { id: 'iron_memory', title: "Temir Xotira", desc: "Xotira o'yinida barcha juftliklarni toping", icon: "🧠", unlocked: false, xpReward: 100 },
                { id: 'word_master', title: "So'z Ustasi", desc: "So'z topish o'yinida 5 ta so'z yeching", icon: "📚", unlocked: false, xpReward: 100 },
                { id: 'quiz_master', title: "100% Bilim", desc: "Har qanday testdan 100% natija oling", icon: "🎓", unlocked: false, xpReward: 120 },
                { id: 'coin_collector', title: "Tanga Yig'uvchi", desc: "Hisobingizda 150 tanga to'plang", icon: "🪙", unlocked: false, xpReward: 80 },
                { id: 'level_5', title: "Yulduzli O'quvchi", desc: "5-darajaga yetib boring", icon: "⭐", unlocked: false, xpReward: 150 }
            ],
            dailyQuests: {
                date: new Date().toISOString().split('T')[0],
                quests: [
                    { id: 'daily_quiz', text: "Maktab fanidan 1 ta test yechish", target: 1, progress: 0, xp: 40, coins: 15, claimed: false },
                    { id: 'daily_car', text: "Mashina o'yinida 100 ball to'plash", target: 100, progress: 0, xp: 50, coins: 20, claimed: false },
                    { id: 'daily_memory', text: "Xotira o'yinida 1 marta g'olib bo'lish", target: 1, progress: 0, xp: 40, coins: 15, claimed: false },
                    { id: 'daily_math', text: "Matematika o'yinida 50 ball olish", target: 50, progress: 0, xp: 45, coins: 15, claimed: false }
                ]
            },
            weeklyActivity: [
                { day: "Dush", xp: 40 },
                { day: "Sesh", xp: 75 },
                { day: "Chor", xp: 120 },
                { day: "Pay", xp: 90 },
                { day: "Jum", xp: 150 },
                { day: "Shan", xp: 80 },
                { day: "Yak", xp: 110 }
            ],
            subjectProgress: {
                matematika: { testsCount: 0, bestScore: 0 },
                onatili: { testsCount: 0, bestScore: 0 },
                english: { testsCount: 0, bestScore: 0 },
                biologiya: { testsCount: 0, bestScore: 0 },
                tarix: { testsCount: 0, bestScore: 0 },
                it: { testsCount: 0, bestScore: 0 }
            }
        };
    }

    loadData() {
        try {
            const raw = localStorage.getItem(this.STORAGE_KEY);
            if (!raw) return this.getDefaultData();
            const parsed = JSON.parse(raw);
            const defaults = this.getDefaultData();
            // Merge defaults to preserve new properties
            return {
                ...defaults,
                ...parsed,
                profile: { ...defaults.profile, ...parsed.profile },
                stats: { ...defaults.stats, ...parsed.stats },
                gameHighScores: { ...defaults.gameHighScores, ...parsed.gameHighScores },
                subjectProgress: { ...defaults.subjectProgress, ...parsed.subjectProgress }
            };
        } catch (e) {
            console.error('Failed to parse localStorage data', e);
            return this.getDefaultData();
        }
    }

    save() {
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.data));
            window.dispatchEvent(new CustomEvent('smartverse_data_updated', { detail: this.data }));
        } catch (e) {
            console.error('Storage save error', e);
        }
    }

    initDailyQuests() {
        const today = new Date().toISOString().split('T')[0];
        if (!this.data.dailyQuests || this.data.dailyQuests.date !== today) {
            this.data.dailyQuests = {
                date: today,
                quests: [
                    { id: 'daily_quiz', text: "Maktab fanidan 1 ta test yechish", target: 1, progress: 0, xp: 40, coins: 15, claimed: false },
                    { id: 'daily_car', text: "Mashina o'yinida 100 ball to'plash", target: 100, progress: 0, xp: 50, coins: 20, claimed: false },
                    { id: 'daily_memory', text: "Xotira o'yinida 1 marta g'olib bo'lish", target: 1, progress: 0, xp: 40, coins: 15, claimed: false },
                    { id: 'daily_math', text: "Matematika o'yinida 50 ball olish", target: 50, progress: 0, xp: 45, coins: 15, claimed: false }
                ]
            };
            this.checkStreak(today);
            this.save();
        }
    }

    checkStreak(today) {
        const last = this.data.profile.lastActiveDate;
        if (!last) {
            this.data.profile.lastActiveDate = today;
            return;
        }
        const lastDate = new Date(last);
        const currDate = new Date(today);
        const diffDays = Math.round((currDate - lastDate) / (1000 * 60 * 60 * 24));
        if (diffDays === 1) {
            this.data.profile.streak += 1;
        } else if (diffDays > 1) {
            this.data.profile.streak = 1;
        }
        this.data.profile.lastActiveDate = today;
    }

    addXP(amount) {
        let p = this.data.profile;
        p.xp += amount;
        let leveledUp = false;

        while (p.xp >= p.xpNeeded) {
            p.xp -= p.xpNeeded;
            p.level += 1;
            p.xpNeeded = Math.round(p.xpNeeded * 1.35);
            p.coins += 25; // Bonus coins on level up
            leveledUp = true;
            if (p.level >= 5) {
                this.unlockAchievement('level_5');
            }
        }

        // Add to weekly activity
        const dayIdx = (new Date().getDay() + 6) % 7; // Mon=0, Sun=6
        if (this.data.weeklyActivity && this.data.weeklyActivity[dayIdx]) {
            this.data.weeklyActivity[dayIdx].xp += amount;
        }

        this.save();
        return { leveledUp, newLevel: p.level };
    }

    addCoins(amount) {
        this.data.profile.coins += amount;
        this.data.stats.totalStars += amount;
        if (this.data.profile.coins >= 150) {
            this.unlockAchievement('coin_collector');
        }
        this.save();
    }

    updateDailyQuest(questId, amount = 1, isSet = false) {
        const quest = this.data.dailyQuests.quests.find(q => q.id === questId);
        if (quest && !quest.claimed) {
            if (isSet) {
                quest.progress = Math.max(quest.progress, amount);
            } else {
                quest.progress += amount;
            }
            if (quest.progress > quest.target) quest.progress = quest.target;
            this.save();
        }
    }

    claimQuest(questId) {
        const quest = this.data.dailyQuests.quests.find(q => q.id === questId);
        if (quest && quest.progress >= quest.target && !quest.claimed) {
            quest.claimed = true;
            this.addXP(quest.xp);
            this.addCoins(quest.coins);
            this.save();
            return { xp: quest.xp, coins: quest.coins };
        }
        return null;
    }

    unlockAchievement(achId) {
        const ach = this.data.achievements.find(a => a.id === achId);
        if (ach && !ach.unlocked) {
            ach.unlocked = true;
            this.addXP(ach.xpReward);
            this.addCoins(25);
            this.save();
            if (window.showAppNotification) {
                window.showAppNotification(`🎉 Yutuq ochildi: ${ach.title}! +${ach.xpReward} XP`, 'success');
            }
            if (window.soundEngine) {
                window.soundEngine.playLevelUp();
            }
            return ach;
        }
        return null;
    }

    recordQuizResult(subjectKey, score, total) {
        this.data.stats.quizzesCompleted += 1;
        this.data.stats.correctAnswers += score;
        this.data.stats.wrongAnswers += (total - score);

        const percentage = Math.round((score / total) * 100);
        if (percentage === 100) {
            this.unlockAchievement('quiz_master');
        }
        this.unlockAchievement('first_step');

        if (!this.data.subjectProgress[subjectKey]) {
            this.data.subjectProgress[subjectKey] = { testsCount: 0, bestScore: 0 };
        }
        const sp = this.data.subjectProgress[subjectKey];
        sp.testsCount += 1;
        if (percentage > sp.bestScore) sp.bestScore = percentage;

        this.updateDailyQuest('daily_quiz', 1);
        const earnedXP = score * 15 + 10;
        const earnedCoins = Math.floor(score * 4) + 5;
        this.addXP(earnedXP);
        this.addCoins(earnedCoins);
        this.save();

        return { earnedXP, earnedCoins, percentage };
    }

    updateProfile(name, avatar) {
        if (name && name.trim()) this.data.profile.name = name.trim();
        if (avatar) this.data.profile.avatar = avatar;
        this.save();
    }
}

window.storageManager = new StorageManager();
