

// =============================================
// PLAYER PROFILES DATA
// =============================================
constplayersData = {
    1: {
        name: 'Yasoob Ali', pos: 'Midfielder', num: '#1', avatar: 'YA',
        goals: 14, assists: 8, matches: 18, rating: 8.3,
        age: 18, nationality: 'Pakistani', height: "5'4\"", joined: 2020,
        bio: 'Club captain and top scorer for the past three seasons. Known for his exceptional leadership, vision, and clinical finishing in crucial moments. A true match-winner.',
        skills: { Dribbling: 88, Passing: 85, Shooting: 90, Pace: 82, Stamina: 87 }
    },
    2: {
        name: 'Abbas Fayyaz', pos: 'Forward', num: '#2', avatar: 'AF',
        goals: 10, assists: 5, matches: 16, rating: 8.1,
        age: 22, nationality: 'Pakistani', height: "5'7\"", joined: 2020,
        bio: 'Explosive forward with incredible pace and finishing ability. Abbas is known for his ability to beat defenders one-on-one and score from difficult angles.',
        skills: { Pace: 83, Shooting: 88, Dribbling: 85, Heading: 80, Stamina: 84 }
    },
    3: {
        name: 'Nadeem Abbas', pos: 'Midfielder', num: '#3', avatar: 'NA',
        goals: 10, assists: 7, matches: 17, rating: 8.5,
        age: 25, nationality: 'Pakistani', height: "5'2\"", joined: 2020,
        bio: 'Creative playmaker and assist king of the team. Nadeem controls the tempo of the game with his excellent passing range and football intelligence.',
        skills: { Passing: 93, Vision: 90, Dribbling: 82, Shooting: 75, Stamina: 85 }
    },
    4: {
        name: 'Danish Ali', pos: 'Forward', num: '#4', avatar: 'SA',
        goals: 17, assists: 9, matches: 19, rating: 8.8,
        age: 21, nationality: 'Pakistani', height: "5'8\"", joined: 2020,
        bio: 'Young and talented forward with a bright future. Danish has shown incredible maturity for his age and is developing into one of Pakistans most exciting football talents.',
        skills: { Pace: 90, Shooting: 82, Dribbling: 88, Agility: 91, Stamina: 86 }
    },
    5: {
        name: 'Muhammad Akmal', pos: 'Forward', num: '#5', avatar: 'MA',
        goals: 8, assists: 4, matches: 19, rating: 8.1,
        age: 21, nationality: 'Pakistani', height: "5'0\"", joined: 2020,
        bio: 'Young and talented forward with a bright future. Danish has shown incredible maturity for his age and is developing into one of Pakistans most exciting football talents.',
        skills: { Pace: 80, Shooting: 85, Dribbling: 70, Agility: 80, Stamina: 80 }
    },
    6: {
        name: 'Muhammad Akmal', pos: 'Defender', num: '#6', avatar: 'MA',
        goals: 3, assists: 4, matches: 19, rating: 8.8,
        age: 21, nationality: 'Pakistani', height: "5'2\"", joined: 2020,
        bio: 'Young and talented forward with a bright future. Danish has shown incredible maturity for his age and is developing into one of Pakistans most exciting football talents.',
        skills: { Pace: 90, Shooting: 95, Dribbling: 85, Agility: 91, Stamina: 96 }
    },
    7: {
        name: 'Shakir Hussain', pos: 'Defender', num: '#7', avatar: 'SH',
        goals: 2, assists: 3, matches: 18, rating: 7.9,
        age: 26, nationality: 'Pakistani', height: "5'3\"", joined: 2020,
        bio: 'Strong and composed center-back who is the defensive anchor of the team. Shakir organizes the backline effectively and is exceptional in aerial duels.',
        skills: { Defending: 90, Heading: 92, Tackling: 88, Strength: 87, Passing: 75 }
    }
};

window.openPlayerModal = function (playerNum) {
    const p = playersData[playerNum];
    if (!p) return;

    document.getElementById('modalAvatar').textContent = p.avatar;
    document.getElementById('modalName').textContent = p.name;
    document.getElementById('modalPos').textContent = p.pos;
    document.getElementById('modalNum').textContent = p.num;
    document.getElementById('mGoals').textContent = p.goals;
    document.getElementById('mAssists').textContent = p.assists;
    document.getElementById('mMatches').textContent = p.matches;
    document.getElementById('mRating').textContent = p.rating;
    document.getElementById('mAge').textContent = p.age + ' yrs';
    document.getElementById('mNat').textContent = p.nationality;
    document.getElementById('mHeight').textContent = p.height;
    document.getElementById('mJoined').textContent = p.joined;
    document.getElementById('mBio').textContent = p.bio;

    // Skill bars
    const skillsHtml = Object.entries(p.skills).map(([skill, val]) => `
            <div class="skill-bar-wrap">
                <div class="skill-bar-label"><span>${skill}</span><span>${val}</span></div>
                <div class="skill-bar"><div class="skill-bar-fill" style="width:${val}%"></div></div>
            </div>
        `).join('');
    document.getElementById('mSkills').innerHTML = skillsHtml;

    document.getElementById('playerModal').classList.add('open');
    document.body.style.overflow = 'hidden';
}

window.closeModal = function (e) {
    if (e.target === document.getElementById('playerModal')) {
        document.getElementById('playerModal').classList.remove('open');
        document.body.style.overflow = '';
    }
}

// Add click handlers to player cards
document.querySelectorAll('.player-card').forEach((card, index) => {
    const nums = [1, 2, 3, 4, 6];
    card.addEventListener('click', () => openPlayerModal(nums[index] || 1));

    // Add "View Profile" button
    const info = card.querySelector('.player-info');
    if (info) {
        const btn = document.createElement('button');
        btn.className = 'view-profile-btn';
        btn.textContent = 'View Profile →';
        btn.onclick = (e) => { e.stopPropagation(); openPlayerModal(nums[index] || 1); };
        info.appendChild(btn);
    }
});


// ========== DARK MODE TOGGLE ==========


// Dark Mode Toggle Function
function initDarkMode() {
    // Check localStorage for saved preference
    const darkMode = localStorage.getItem('darkMode');

    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
    }

    // Create toggle button (agar pehle se nahi hai to)
    if (!document.getElementById('darkModeToggle')) {
        const toggleBtn = document.createElement('button');
        toggleBtn.id = 'darkModeToggle';
        toggleBtn.innerHTML = '🌙';
        toggleBtn.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: #0B5D1E;
            color: white;
            border: none;
            cursor: pointer;
            font-size: 1.2rem;
            z-index: 999;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            transition: all 0.3s ease;
        `;

        toggleBtn.onclick = toggleDarkMode;
        document.body.appendChild(toggleBtn);
    }
}

// Dark Mode CSS Styles (automatically add)
function addDarkModeStyles() {
    const style = document.createElement('style');
    style.textContent = `
        /* Dark Mode Styles */
        body.dark-mode {
            background-color: #0a0f1a;
            color: #e5e7eb;
        }
        
        body.dark-mode .kit-section {
            background: #0a0f1a;
        }
        
        body.dark-mode .kit-card {
            background: #1a1f2e;
        }
        
        body.dark-mode .kit-header h2 {
            color: #D4AF37;
        }
        
        body.dark-mode .kit-header p {
            color: #aaa;
        }
        
        body.dark-mode .kit-card h3 {
            color: #D4AF37;
        }
        
        body.dark-mode .kit-season {
            color: #aaa;
        }
        
        body.dark-mode .kit-image {
            background: #2a2f3e;
        }
        
        /* Agar aapke page mein aur bhi sections hain to unke liye bhi add kar sakte ho */
        body.dark-mode header {
            background: rgba(10, 15, 26, 0.98);
        }
        
        body.dark-mode .nav-link {
            color: #e5e7eb;
        }
        
        body.dark-mode footer {
            background: #05080f;
        }
    `;
    document.head.appendChild(style);
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
    addDarkModeStyles();
    initDarkMode();
});








// Scroll Animation Function
function checkScrollAnimation() {
    // Header Animation
    const kitHeader = document.getElementById('kitHeader');
    const headerPosition = kitHeader.getBoundingClientRect().top;
    const screenPosition = window.innerHeight - 100;

    if (headerPosition < screenPosition) {
        kitHeader.classList.add('animate');
    }

    // Card Animations
    const cards = document.querySelectorAll('.kit-card');
    cards.forEach((card, index) => {
        const cardPosition = card.getBoundingClientRect().top;
        if (cardPosition < screenPosition) {
            card.classList.add('animate');
        }
    });
}

// Run on scroll
window.addEventListener('scroll', checkScrollAnimation);

// Run on load
window.addEventListener('load', checkScrollAnimation);

// Run after 1 second (for any delay)
setTimeout(checkScrollAnimation, 500);


// Add click handlers to player cards
(function () {
    const nums = [1, 2, 3, 4, 6];
    const cards = document.querySelectorAll('.player-card');
    cards.forEach((card, index) => {
        const playerNum = nums[index] || 1;
        card.style.cursor = 'pointer';
        card.addEventListener('click', function () {
            if (window.openPlayerModal) window.openPlayerModal(playerNum);
        });
        // Add View Profile button if not already there
        const info = card.querySelector('.player-info');
        if (info && !info.querySelector('.view-profile-btn')) {
            const btn = document.createElement('button');
            btn.className = 'view-profile-btn';
            btn.textContent = 'View Profile →';
            btn.addEventListener('click', function (e) {
                e.stopPropagation();
                if (window.openPlayerModal) window.openPlayerModal(playerNum);
            });
            info.appendChild(btn);
        }
    });
})();

// ==============================================
// LIVE CHAT
// =============================================
const chatResponses = {
    'fixtures': 'Agla match May 15, 2026 ko Gamba United ke khilaf hai! 📅 3:00 PM · Home Ground.',
    'join': 'Club join karne ke liye hamein call karein: 03554411600 ya email: info@greenfc.com ⚽',
    'sponsor': 'Hum sponsors ka swagat karte hain! Apni details hamein email karein aur hum aapse contact karein ge 🤝',
    'contact': 'Address: Green Football Stadium, Katpanah City\nPhone: 03554411600\nEmail: info@greenfc.com 📞',
    'default': 'Shukriya aapke message ka! Hamari team jald hi aapko reply karegi. Urgent matter ke liye: 03554411600 📱'
};

window.toggleChat = function () {
    const win = document.getElementById('chatWindow');
    if (win) win.classList.toggle('open');
}

window.getTime = function () {
    return new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
}

window.addMsg = function (text, type) {
    const msgs = document.getElementById('chatMessages');
    if (!msgs) return;
    const div = document.createElement('div');
    div.className = 'chat-msg ' + type;
    div.innerHTML = text + '<div class="chat-msg-time">' + getTime() + '</div>';
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
}

window.getBotReply = function (msg) {
    const m = msg.toLowerCase();
    if (m.includes('fixture') || m.includes('match') || m.includes('game') || m.includes('kab')) return chatResponses.fixtures;
    if (m.includes('join') || m.includes('membership') || m.includes('tryout')) return chatResponses.join;
    if (m.includes('sponsor') || m.includes('partner')) return chatResponses.sponsor;
    if (m.includes('contact') || m.includes('phone') || m.includes('address') || m.includes('email')) return chatResponses.contact;
    return chatResponses.default;
}

window.sendChat = function () {
    const input = document.getElementById('chatInput');
    if (!input || !input.value.trim()) return;
    const msg = input.value.trim();
    addMsg(msg, 'user');
    input.value = '';
    setTimeout(() => addMsg(getBotReply(msg), 'bot'), 800);
}

window.quickMsg = function (msg) {
    addMsg(msg, 'user');
    setTimeout(() => addMsg(getBotReply(msg), 'bot'), 600);
}
// ── All functions on window scope ──
const siteHeader = document.querySelector('header');

// Mobile Nav
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        if (icon) { icon.classList.toggle('fa-bars'); icon.classList.toggle('fa-times'); }
    });
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = hamburger.querySelector('i');
            if (icon) { icon.classList.add('fa-bars'); icon.classList.remove('fa-times'); }
            document.querySelectorAll('.nav-link').forEach(i => i.classList.remove('active'));
            link.classList.add('active');
        });
    });
}

// Contact Form
const contactFormEl = document.getElementById('contactForm');
if (contactFormEl) {
    contactFormEl.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Shukriya! Hum jald reply karein ge.');
        this.reset();
    });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const id = this.getAttribute('href');
        if (id === '#') return;
        const el = document.querySelector(id);
        if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    });
});

// Scroll events
let lastST = 0;
window.addEventListener('scroll', () => {
    const cs = window.pageYOffset;
    if (siteHeader) {
        siteHeader.style.transform = cs > lastST && cs > 50 ? 'translateY(-100%)' : 'translateY(0)';
    }
    lastST = cs;
    const btn = document.getElementById('backToTop');
    if (btn) btn.classList.toggle('show', cs > 300);
    document.querySelectorAll('.section').forEach(s => {
        if (s.getBoundingClientRect().top < window.innerHeight * 0.85) s.classList.add('show');
    });
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 150) current = s.id; });
    document.querySelectorAll('.nav-link').forEach(l => {
        l.classList.toggle('active', l.getAttribute('href') === '#' + current);
    });
});

// Player Slider
const playerSlider = document.querySelector('.players-slider');
if (playerSlider) {
    let sliding = false;
    setInterval(() => {
        if (!sliding) {
            playerSlider.scrollLeft += 1;
            if (playerSlider.scrollLeft >= playerSlider.scrollWidth - playerSlider.clientWidth - 10)
                setTimeout(() => { playerSlider.scrollLeft = 0; }, 3000);
        }
    }, 30);
    playerSlider.addEventListener('mouseenter', () => sliding = true);
    playerSlider.addEventListener('mouseleave', () => sliding = false);
}

// Dark Mode
window.toggleDark = function () {
    document.body.classList.toggle('dark-mode');
    const icon = document.getElementById('darkIcon');
    if (!icon) return;
    const on = document.body.classList.contains('dark-mode');
    icon.textContent = on ? '☀️' : '🌙';
    localStorage.setItem('darkMode', on ? 'on' : 'off');
};

// Countdown
function updateCountdown() {
    const diff = new Date('2026-05-15T15:00:00') - new Date();
    if (diff <= 0) return;
    const pad = n => String(Math.floor(n)).padStart(2, '0');
    const el = id => document.getElementById(id);
    if (el('cd-days')) el('cd-days').textContent = pad(diff / 86400000);
    if (el('cd-hours')) el('cd-hours').textContent = pad((diff % 86400000) / 3600000);
    if (el('cd-mins')) el('cd-mins').textContent = pad((diff % 3600000) / 60000);
    if (el('cd-secs')) el('cd-secs').textContent = pad((diff % 60000) / 1000);
}
setInterval(updateCountdown, 1000);
updateCountdown();

// Newsletter
window.subscribeNewsletter = function () {
    const inp = document.querySelector('.newsletter-input');
    if (inp && inp.value.includes('@')) {
        alert('Shukriya! 💚 Aap newsletter ke liye subscribe ho gaye!');
        inp.value = '';
    } else {
        alert('Valid email likhein.');
    }
};

// Cookie
window.acceptCookies = function () {
    localStorage.setItem('cookieConsent', 'accepted');
    const cc = document.getElementById('cookieConsent');
    if (cc) cc.style.transform = 'translateY(100%)';
};
window.declineCookies = function () {
    localStorage.setItem('cookieConsent', 'declined');
    const cc = document.getElementById('cookieConsent');
    if (cc) cc.style.transform = 'translateY(100%)';
};

// ── PLAYER PROFILES ──
const playersData = {
    1: { name: 'Yasoob Ali', pos: 'Stiker', num: '#1', avatar: 'YA', goals: 16, assists: 8, matches: 20, rating: 8.3, age: 18, nat: 'Pakistani', height: "5'4\"", joined: 2020, bio: 'Top scorer. Known for exceptional leadership, vision, and clinical finishing in crucial moments.', skills: { Dribbling: 88, Passing: 85, Shooting: 90, Pace: 82, Stamina: 87 } },

    2: { name: 'Abbas Fayyaz', pos: 'Forward', num: '#2', avatar: 'AF', goals: 10, assists: 5, matches: 19, rating: 8.1, age: 18, nat: 'Pakistani', height: "5'7\"", joined: 2022, bio: 'Explosive forward with incredible pace and finishing. Known for beating defenders one-on-one and scoring from difficult angles.', skills: { Pace: 93, Shooting: 88, Dribbling: 85, Heading: 80, Stamina: 84 } },

    3: { name: 'Nadeem Abbas', pos: 'Midfielder', num: '#3', avatar: 'NA', goals: 6, assists: 11, matches: 17, rating: 8.3, age: 25, nat: 'Pakistani', height: "5'2\"", joined: 2020, bio: 'Creative playmaker and assist king. Controls game tempo with excellent passing range and football intelligence.', skills: { Passing: 93, Vision: 90, Dribbling: 82, Shooting: 75, Stamina: 85 } },

    4: { name: 'Danish Ali', pos: 'Forward', num: '#4', avatar: 'DA', goals: 17, assists: 4, matches: 20, rating: 8.8, age: 18, nat: 'Pakistani', height: "5'8\"", joined: 2020, bio: 'Young talent with bright future. Incredible maturity for his age, developing into one of Pakistan most exciting talents.', skills: { Pace: 90, Shooting: 82, Dribbling: 88, Agility: 91, Stamina: 86 } },

    5: { name: 'Sharafat Ali', pos: 'Midfielder', num: '#5', avatar: 'SA', goals: 8, assists: 4, matches: 19, rating: 8.0, age: 19, nat: 'Pakistani', height: "5'0\"", joined: 2020, bio: 'Young talent with bright future. Incredible maturity for his age, developing into one of Pakistan most exciting talents.', skills: { Pace: 90, Shooting: 82, Dribbling: 88, Agility: 91, Stamina: 86 } },

    6: { name: 'Muhammad Akmal', pos: 'Defender', num: '#6', avatar: 'MA', goals: 3, assists: 4, matches: 19, rating: 8.8, age: 18, nat: 'Pakistani', height: "5'8\"", joined: 2023, bio: 'Young talent with bright future. Incredible maturity for his age, developing into one of Pakistan most exciting talents.', skills: { Defending: 95, Shooting: 92, Dribbling: 78, Agility: 91, Stamina: 90 } },

    7: { name: 'Shakir Hussain', pos: 'Defender', num: '#6', avatar: 'SH', goals: 2, assists: 3, matches: 18, rating: 7.9, age: 18, nat: 'Pakistani', height: "5'5\"", joined: 2020, bio: 'Strong center-back and defensive anchor. Organizes backline effectively, exceptional in aerial duels and tackles.', skills: { Defending: 80, Heading: 92, Tackling: 88, Strength: 87, Passing: 75 } },
};

window.openPlayerModal = function (num) {
    const p = playersData[num];
    if (!p) return;
    const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    set('modalAvatar', p.avatar);
    set('modalName', p.name);
    set('modalPos', p.pos);
    set('modalNum', p.num);
    set('mGoals', p.goals);
    set('mAssists', p.assists);
    set('mMatches', p.matches);
    set('mRating', p.rating);
    set('mAge', p.age + ' yrs');
    set('mNat', p.nat);
    set('mHeight', p.height);
    set('mJoined', p.joined);
    set('mBio', p.bio);

    const skillsEl = document.getElementById('mSkills');
    if (skillsEl) {
        skillsEl.innerHTML = Object.entries(p.skills).map(([s, v]) =>
            '<div class="skill-bar-wrap">' +
            '<div class="skill-bar-label"><span>' + s + '</span><span>' + v + '</span></div>' +
            '<div class="skill-bar"><div class="skill-bar-fill" style="width:' + v + '%"></div></div>' +
            '</div>'
        ).join('');
    }
    const modal = document.getElementById('playerModal');
    if (modal) { modal.classList.add('open'); document.body.style.overflow = 'hidden'; }
};

window.closeModal = window.closePlayerModal = function () {
    const modal = document.getElementById('playerModal');
    if (modal) { modal.classList.remove('open'); document.body.style.overflow = ''; }
};

// Click on player cards
document.addEventListener('DOMContentLoaded', function () {
    const nums = [1, 2, 3, 4, 6];
    document.querySelectorAll('.player-card').forEach((card, i) => {
        const n = nums[i] || 1;
        card.style.cursor = 'pointer';
        card.onclick = function () { window.openPlayerModal(n); };
        const info = card.querySelector('.player-info');
        if (info && !info.querySelector('.view-profile-btn')) {
            const btn = document.createElement('button');
            btn.className = 'view-profile-btn';
            btn.textContent = 'View Profile →';
            btn.onclick = function (e) { e.stopPropagation(); window.openPlayerModal(n); };
            info.appendChild(btn);
        }
    });
});

// ── LIVE CHAT ──
const botReplies = {
    fixture: 'Agla match: May 15, 2026 · Gamba United · 3:00 PM · Home Ground 📅',
    join: 'Join karne ke liye call karein: 03554411600 ya email: info@greenfc.com ⚽',
    sponsor: 'Sponsor details ke liye email karein — hum contact karein ge! 🤝',
    contact: 'Phone: 03554411600 | Email: info@greenfc.com | Stadium: Katpanah City 📞',
    default: 'Shukriya message ka! Urgent ke liye: 03554411600 📱'
};

window.toggleChat = function () {
    const w = document.getElementById('chatWindow');
    if (w) w.classList.toggle('open');
};

window.sendChat = function () {
    const inp = document.getElementById('chatInput');
    if (!inp || !inp.value.trim()) return;
    const msg = inp.value.trim();
    addChatMsg(msg, 'user');
    inp.value = '';
    setTimeout(() => addChatMsg(getBotReply(msg), 'bot'), 700);
};

window.quickMsg = function (msg) {
    addChatMsg(msg, 'user');
    setTimeout(() => addChatMsg(getBotReply(msg), 'bot'), 600);
};

function addChatMsg(text, type) {
    const box = document.getElementById('chatMessages');
    if (!box) return;
    const time = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    const div = document.createElement('div');
    div.className = 'chat-msg ' + type;
    div.innerHTML = text + '<div class="chat-msg-time">' + time + '</div>';
    box.appendChild(div);
    box.scrollTop = box.scrollHeight;
}

function getBotReply(msg) {
    const m = msg.toLowerCase();
    if (m.includes('fixture') || m.includes('match') || m.includes('kab') || m.includes('game')) return botReplies.fixture;
    if (m.includes('join') || m.includes('member') || m.includes('tryout')) return botReplies.join;
    if (m.includes('sponsor') || m.includes('partner')) return botReplies.sponsor;
    if (m.includes('contact') || m.includes('phone') || m.includes('address')) return botReplies.contact;
    return botReplies.default;
}

// Chat enter key
const chatInp = document.getElementById('chatInput');
if (chatInp) chatInp.addEventListener('keypress', e => { if (e.key === 'Enter') window.sendChat(); });

// ── ON LOAD ──
window.addEventListener('load', function () {
    // Splash
    setTimeout(() => {
        const s = document.getElementById('loadingSplash');
        if (s) { s.classList.add('hide'); setTimeout(() => s.remove(), 900); }
    }, 2800);
    // Dark mode
    if (localStorage.getItem('darkMode') === 'on') {
        document.body.classList.add('dark-mode');
        const icon = document.getElementById('darkIcon');
        if (icon) icon.classList.replace('fa-moon', 'fa-sun');
    }
    // Cookie
    if (!localStorage.getItem('cookieConsent')) {
        setTimeout(() => {
            const cc = document.getElementById('cookieConsent');
            if (cc) cc.classList.add('show');
        }, 3500);
    }
});