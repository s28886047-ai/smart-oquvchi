// SMARTVERSE Sound Effects Engine (Web Audio API)
// 100% offline, no external assets needed!

class SoundEngine {
    constructor() {
        this.ctx = null;
        this.muted = localStorage.getItem('smartverse_muted') === 'true';
    }

    init() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) {
                this.ctx = new AudioContext();
            }
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    toggleMute() {
        this.muted = !this.muted;
        localStorage.setItem('smartverse_muted', this.muted);
        return this.muted;
    }

    isMuted() {
        return this.muted;
    }

    playTone(freq, type = 'sine', duration = 0.15, gainVal = 0.15, decay = true) {
        if (this.muted) return;
        try {
            this.init();
            if (!this.ctx) return;

            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = type;
            osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

            gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
            if (decay) {
                gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
            }

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start();
            osc.stop(this.ctx.currentTime + duration);
        } catch (e) {
            console.warn('Audio play error', e);
        }
    }

    playClick() {
        this.playTone(600, 'triangle', 0.05, 0.1);
    }

    playCorrect() {
        if (this.muted) return;
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
            setTimeout(() => {
                this.playTone(freq, 'sine', 0.18, 0.12);
            }, i * 70);
        });
    }

    playWrong() {
        if (this.muted) return;
        this.init();
        if (!this.ctx) return;
        this.playTone(220, 'sawtooth', 0.2, 0.15);
        setTimeout(() => {
            this.playTone(180, 'sawtooth', 0.3, 0.15);
        }, 120);
    }

    playCoin() {
        if (this.muted) return;
        this.playTone(987.77, 'sine', 0.1, 0.15);
        setTimeout(() => {
            this.playTone(1318.51, 'sine', 0.25, 0.15);
        }, 80);
    }

    playLevelUp() {
        if (this.muted) return;
        const notes = [440, 554.37, 659.25, 880, 1108.73, 1318.51];
        notes.forEach((freq, idx) => {
            setTimeout(() => {
                this.playTone(freq, 'triangle', 0.25, 0.18);
            }, idx * 90);
        });
    }

    playWin() {
        if (this.muted) return;
        const melody = [523, 659, 784, 1046, 784, 1046];
        melody.forEach((note, i) => {
            setTimeout(() => {
                this.playTone(note, 'sine', 0.2, 0.15);
            }, i * 110);
        });
    }

    playGameOver() {
        if (this.muted) return;
        const notes = [400, 350, 300, 250, 200];
        notes.forEach((freq, idx) => {
            setTimeout(() => {
                this.playTone(freq, 'sawtooth', 0.22, 0.12);
            }, idx * 130);
        });
    }

    playCarEngine() {
        if (this.muted) return;
        this.playTone(140, 'triangle', 0.08, 0.05);
    }

    playCarSteer() {
        if (this.muted) return;
        this.playTone(320, 'sine', 0.05, 0.05);
    }
}

window.soundEngine = new SoundEngine();
