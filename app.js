/**
 * 理理工作台 - 应用主逻辑
 * 功能模块：英语口语（打卡+情景对话+AI练习）、教师考编（教综+中英）
 */

// ===== 全局状态管理 =====
const App = {
    state: {
        currentPage: 'home',
        pageStack: [],       // 页面栈，用于返回
        pageData: {},        // 页面参数

        // 口语模块
        checkinDays: [],     // 打卡日期记录 ['2024-01-15', ...]
        currentScene: null,

        // 考编模块
        examTab: 'jiaozong', // jiaozong | english
        practiceFilter: 'all',
        currentQuestionIndex: 0,
        practiceAnswers: {}, // {questionId: selectedOption}

        // 模拟测试
        mockConfig: {
            subject: 'jiaozong',
            count: 10,
        },
        mockQuestions: [],
        mockAnswers: {},
        mockCurrentIndex: 0,
        mockStartTime: null,

        // 错题本
        wrongQuestions: [],  // [{subject, questionId, question, yourAnswer, correctAnswer, analysis, time}]
    },

    // ===== 本地存储 =====
    storage: {
        load() {
            try {
                const saved = localStorage.getItem('lili-workbench');
                if (saved) {
                    const data = JSON.parse(saved);
                    App.state.checkinDays = data.checkinDays || [];
                    App.state.wrongQuestions = data.wrongQuestions || [];
                    App.state.practiceAnswers = data.practiceAnswers || {};
                }
            } catch(e) { console.warn('加载存储失败', e); }
        },
        save() {
            try {
                localStorage.setItem('lili-workbench', JSON.stringify({
                    checkinDays: App.state.checkinDays,
                    wrongQuestions: App.state.wrongQuestions,
                    practiceAnswers: App.state.practiceAnswers,
                }));
            } catch(e) { console.warn('保存存储失败', e); }
        }
    },

    // ===== 页面导航 =====
    navigate(page, data = {}) {
        App.state.pageStack.push({ page: App.state.currentPage, data: App.state.pageData });
        App.state.currentPage = page;
        App.state.pageData = data;
        App.render();
        window.scrollTo(0, 0);
    },

    back() {
        if (App.state.pageStack.length > 0) {
            const prev = App.state.pageStack.pop();
            App.state.currentPage = prev.page;
            App.state.pageData = prev.data;
            App.render();
            window.scrollTo(0, 0);
        }
    },

    switchTab(page) {
        App.state.currentPage = page;
        App.state.pageStack = [];
        App.state.pageData = {};
        App.render();
        window.scrollTo(0, 0);
    },

    // ===== 渲染入口 =====
    render() {
        const app = document.getElementById('app');
        const page = App.state.currentPage;

        let content = '';
        let showNav = true;

        switch(page) {
            case 'home':      content = Pages.home(); break;
            case 'oral':      content = Pages.oral(); break;
            case 'oral-scene': content = Pages.oralScene(App.state.pageData.sceneId); break;
            case 'ai-chat':   content = Pages.aiChat(App.state.pageData.sceneId); showNav = false; break;
            case 'exam':      content = Pages.exam(); break;
            case 'knowledge': content = Pages.knowledge(App.state.pageData.subject); break;
            case 'practice':  content = Pages.practice(App.state.pageData.subject); break;
            case 'mock':      content = Pages.mock(App.state.pageData.subject); break;
            case 'mock-test': content = Pages.mockTest(); showNav = false; break;
            case 'mock-result': content = Pages.mockResult(); showNav = false; break;
            case 'wrong':     content = Pages.wrong(); break;
            case 'kitchen':   content = Pages.kitchen(); break;
            case 'recipe':    content = Pages.recipe(App.state.pageData.recipeId); break;
            case 'interview': content = Pages.interview(); break;
            case 'interview-detail': content = Pages.interviewDetail(App.state.pageData.scriptId); break;
            default:          content = Pages.home();
        }

        app.innerHTML = content;

        // 底部导航
        if (showNav) {
            const nav = document.createElement('div');
            nav.className = 'bottom-nav';
            nav.innerHTML = `
                <div class="nav-item ${page === 'home' ? 'active' : ''}" data-tab="home">
                    <span class="nav-icon">🏠</span>
                    <span class="nav-label">首页</span>
                </div>
                <div class="nav-item ${page === 'oral' ? 'active' : ''}" data-tab="oral">
                    <span class="nav-icon">🗣️</span>
                    <span class="nav-label">口语</span>
                </div>
                <div class="nav-item ${page === 'exam' ? 'active' : ''}" data-tab="exam">
                    <span class="nav-icon">📚</span>
                    <span class="nav-label">考编</span>
                </div>
                <div class="nav-item ${page === 'kitchen' ? 'active' : ''}" data-tab="kitchen">
                    <span class="nav-icon">🍳</span>
                    <span class="nav-label">小厨娘</span>
                </div>
                <div class="nav-item ${page === 'interview' ? 'active' : ''}" data-tab="interview">
                    <span class="nav-icon">🎤</span>
                    <span class="nav-label">面试</span>
                </div>
            `;
            app.appendChild(nav);
        }

        App.bindEvents();
    },

    // ===== 事件绑定 =====
    bindEvents() {
        // 底部导航
        document.querySelectorAll('.nav-item[data-tab]').forEach(el => {
            el.addEventListener('click', () => App.switchTab(el.dataset.tab));
        });

        // 返回按钮
        document.querySelectorAll('.back-btn').forEach(el => {
            el.addEventListener('click', () => App.back());
        });

        // 页面特定事件
        const page = App.state.currentPage;
        if (App.events[page]) App.events[page]();
    },

    events: {},

    // ===== 工具函数 =====
    util: {
        today() {
            const d = new Date();
            return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
        },

        formatDate(date) {
            return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
        },

        getStreak() {
            const days = App.state.checkinDays;
            if (days.length === 0) return 0;
            let streak = 0;
            let date = new Date();
            // 如果今天没打卡，从昨天开始算
            if (!days.includes(App.util.today())) {
                date.setDate(date.getDate() - 1);
            }
            while (true) {
                const dateStr = App.util.formatDate(date);
                if (days.includes(dateStr)) {
                    streak++;
                    date.setDate(date.getDate() - 1);
                } else {
                    break;
                }
            }
            return streak;
        },

        toast(msg) {
            let toast = document.querySelector('.toast');
            if (!toast) {
                toast = document.createElement('div');
                toast.className = 'toast';
                document.body.appendChild(toast);
            }
            toast.textContent = msg;
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 2000);
        },

        shuffle(arr) {
            const a = [...arr];
            for (let i = a.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }
            return a;
        },

        speak(text) {
            if ('speechSynthesis' in window) {
                window.speechSynthesis.cancel();
                const utter = new SpeechSynthesisUtterance(text);
                utter.lang = 'en-US';
                utter.rate = 0.9;
                window.speechSynthesis.speak(utter);
            } else {
                App.util.toast('浏览器不支持语音播放');
            }
        },

        // 渲染荧光笔高亮
        renderHighlight(text) {
            if (!text) return '';
            // 转义HTML
            let html = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
            // 替换 {{highlight}}内容{{/highlight}} 为 <mark>内容</mark>
            html = html.replace(/\{\{highlight\}\}/g, '<mark class="highlight">').replace(/\{\{\/highlight\}\}/g, '</mark>');
            return html;
        },
    },
};

// ===== 页面模板 =====
const Pages = {
    // ----- 首页 -----
    home() {
        const streak = App.util.getStreak();
        const totalCheckin = App.state.checkinDays.length;
        const todayChecked = App.state.checkinDays.includes(App.util.today());
        const wrongCount = App.state.wrongQuestions.length;

        return `
        <div class="page">
            <div class="home-hero">
                <h1>👋 理理工作台</h1>
                <p>英语口语 × 教师考编 | 每天进步一点点</p>
            </div>

            <div class="home-stats">
                <div class="stat-card">
                    <div class="stat-icon">🔥</div>
                    <div class="stat-value">${streak}</div>
                    <div class="stat-label">连续打卡</div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">📅</div>
                    <div class="stat-value">${totalCheckin}</div>
                    <div class="stat-label">累计打卡</div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">📝</div>
                    <div class="stat-value">${wrongCount}</div>
                    <div class="stat-label">待复习错题</div>
                </div>
            </div>

            ${todayChecked ? '' : `
            <div class="checkin-section">
                <div class="checkin-header">
                    <span class="checkin-title">📋 今日打卡</span>
                </div>
                <button class="checkin-btn" onclick="App.actions.checkin()">立即打卡</button>
            </div>
            `}

            <div class="section-title"><span class="emoji">📖</span> 学习入口</div>
            <div class="feature-grid">
                <div class="feature-card oral" onclick="App.switchTab('oral')">
                    <div class="feature-icon">🗣️</div>
                    <div class="feature-name">英语口语</div>
                    <div class="feature-desc">情景对话 · AI练习 · 每日打卡</div>
                </div>
                <div class="feature-card exam" onclick="App.switchTab('exam')">
                    <div class="feature-icon">📚</div>
                    <div class="feature-name">教师考编</div>
                    <div class="feature-desc">教综 · 中英 · 真题 · 模拟</div>
                </div>
                <div class="feature-card" onclick="App.switchTab('interview')" style="border-top:3px solid #9B59B6;">
                    <div class="feature-icon">🎤</div>
                    <div class="feature-name">面试口语</div>
                    <div class="feature-desc">片段教学 · 课堂用语 · 背诵</div>
                </div>
                <div class="feature-card" onclick="App.switchTab('kitchen')" style="border-top:3px solid #E67E22;">
                    <div class="feature-icon">🍳</div>
                    <div class="feature-name">小厨娘</div>
                    <div class="feature-desc">食材选菜 · 家常菜谱 · 小白友好</div>
                </div>
            </div>

            <div class="section-title"><span class="emoji">⚡</span> 快捷操作</div>
            <div class="card" onclick="App.navigate('ai-chat')" style="cursor:pointer;display:flex;align-items:center;gap:12px;">
                <div style="font-size:28px;">🤖</div>
                <div style="flex:1;">
                    <div style="font-weight:600;font-size:14px;">AI 英语对话</div>
                    <div style="font-size:12px;color:var(--text-secondary);">选择场景，和AI练习口语</div>
                </div>
                <div style="color:var(--text-tertiary);">›</div>
            </div>
            <div class="card" onclick="App.switchTab('wrong')" style="cursor:pointer;display:flex;align-items:center;gap:12px;">
                <div style="font-size:28px;">❌</div>
                <div style="flex:1;">
                    <div style="font-weight:600;font-size:14px;">错题复习</div>
                    <div style="font-size:12px;color:var(--text-secondary);">${wrongCount > 0 ? `有${wrongCount}道错题待复习` : '暂无错题'}</div>
                </div>
                <div style="color:var(--text-tertiary);">›</div>
            </div>

            <div style="text-align:center;margin-top:24px;font-size:11px;color:var(--text-tertiary);">
                理理工作台 · 专为福建教师考编打造
            </div>
        </div>
        `;
    },

    // ----- 口语列表页 -----
    oral() {
        const scenes = window.oralScenes || [];
        const streak = App.util.getStreak();
        const todayChecked = App.state.checkinDays.includes(App.util.today());

        return `
        <div class="page">
            <div class="page-header">
                <div class="page-title">🗣️ 英语口语</div>
                <div class="page-subtitle">日常交流场景 · 每日打卡 · AI对话练习</div>
            </div>

            <div class="checkin-section">
                <div class="checkin-header">
                    <span class="checkin-title">📋 每日打卡</span>
                    ${streak > 0 ? `<span class="checkin-streak">🔥 连续${streak}天</span>` : ''}
                </div>
                ${Pages.renderCalendar()}
                ${todayChecked
                    ? '<button class="checkin-btn done">✓ 今日已打卡</button>'
                    : '<button class="checkin-btn" onclick="App.actions.checkin()">立即打卡</button>'
                }
            </div>

            <div class="card" onclick="App.navigate('ai-chat')" style="cursor:pointer;display:flex;align-items:center;gap:12px;background:linear-gradient(135deg,#4A90D9,#5BA3E8);color:white;">
                <div style="font-size:28px;">🤖</div>
                <div style="flex:1;">
                    <div style="font-weight:600;font-size:14px;">AI 对话练习</div>
                    <div style="font-size:12px;opacity:0.9;">选择场景，和AI进行英语口语交互</div>
                </div>
                <div style="font-size:18px;">›</div>
            </div>

            <div class="section-title mt-16"><span class="emoji">📖</span> 情景对话</div>
            <div class="scene-list">
                ${scenes.map(s => `
                    <div class="scene-card" onclick="App.navigate('oral-scene', {sceneId: ${s.id}})">
                        <div class="scene-icon">${s.icon}</div>
                        <div class="scene-info">
                            <div class="scene-name">${s.title}</div>
                            <div class="scene-name-en">${s.titleEn}</div>
                            <div class="scene-desc">${s.description}</div>
                            <div class="scene-meta">
                                <span class="tag ${s.difficulty === '初级' ? 'tag-easy' : s.difficulty === '中级' ? 'tag-medium' : 'tag-hard'}">${s.difficulty}</span>
                                <span class="tag" style="background:var(--bg);color:var(--text-secondary);">${s.dialogues.length}轮对话</span>
                            </div>
                        </div>
                        <div class="scene-arrow">›</div>
                    </div>
                `).join('')}
            </div>
        </div>
        `;
    },

    // 打卡日历渲染
    renderCalendar() {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth();
        const today = now.getDate();
        const todayStr = App.util.today();

        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        const dayLabels = ['日','一','二','三','四','五','六'];
        let html = '<div class="calendar-grid">';
        dayLabels.forEach(l => html += `<div class="calendar-day-label">${l}</div>`);

        for (let i = 0; i < firstDay; i++) {
            html += '<div class="calendar-cell empty"></div>';
        }

        for (let d = 1; d <= daysInMonth; d++) {
            const dateStr = `${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
            const checked = App.state.checkinDays.includes(dateStr);
            const isToday = d === today;
            html += `<div class="calendar-cell ${checked ? 'checked' : ''} ${isToday ? 'today' : ''}">${d}</div>`;
        }

        html += '</div>';
        return html;
    },

    // ----- 口语场景详情 -----
    oralScene(sceneId) {
        const scene = (window.oralScenes || []).find(s => s.id === sceneId);
        if (!scene) return '<div class="page"><p>场景不存在</p></div>';

        return `
        <div class="page">
            <div class="back-bar">
                <button class="back-btn">‹</button>
                <span class="back-title">情景对话</span>
            </div>

            <div class="scene-detail-header">
                <div class="big-icon">${scene.icon}</div>
                <h2>${scene.title}</h2>
                <div class="en-title">${scene.titleEn}</div>
                <div class="desc">${scene.description}</div>
                <div style="margin-top:8px;">
                    <span class="tag ${scene.difficulty === '初级' ? 'tag-easy' : scene.difficulty === '中级' ? 'tag-medium' : 'tag-hard'}">${scene.difficulty}</span>
                </div>
            </div>

            <div style="margin-bottom:12px;">
                <button class="checkin-btn" onclick="App.navigate('ai-chat', {sceneId: ${scene.id}})" style="background:linear-gradient(135deg,#F5A623,#FF8C42);">
                    🤖 用这个场景练习AI对话
                </button>
            </div>

            <div class="dialogue-section">
                <div class="section-title"><span class="emoji">💬</span> 对话示范</div>
                ${scene.dialogues.map(d => `
                    <div class="dialogue-item">
                        <div class="dialogue-avatar ${d.speaker === 'You' || d.speakerCn === '你' ? 'me' : 'other'}">
                            ${d.speaker === 'You' || d.speakerCn === '你' ? '我' : (d.speakerCn?.[0] || d.speaker?.[0] || '?')}
                        </div>
                        <div class="dialogue-bubble">
                            <div class="dialogue-speaker">${d.speakerCn || d.speaker}</div>
                            <div class="dialogue-text dialogue-text-en">${d.text}</div>
                            <div class="dialogue-text-cn">${d.textCn}</div>
                            <div class="dialogue-play" onclick="App.util.speak('${d.text.replace(/'/g, "\\'")}')">
                                🔊 朗读
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>

            <div class="phrases-section">
                <div class="section-title"><span class="emoji">📌</span> 核心句型</div>
                ${scene.keyPhrases.map(p => `
                    <div class="phrase-item">
                        <div class="phrase-en">${p.phrase}</div>
                        <div class="phrase-cn">${p.translation}</div>
                    </div>
                `).join('')}
            </div>

            <div class="vocab-section">
                <div class="section-title"><span class="emoji">📝</span> 核心词汇</div>
                ${scene.vocabulary.map(v => `
                    <div class="vocab-item">
                        <span class="vocab-word">${v.word}</span>
                        <span class="vocab-phonetic">${v.phonetic}</span>
                        <span class="vocab-meaning">${v.meaning}</span>
                    </div>
                `).join('')}
            </div>

            ${scene.tips ? `
            <div class="tips-box">
                <span class="tips-label">💡 学习小贴士</span>
                ${scene.tips}
            </div>
            ` : ''}
        </div>
        `;
    },

    // ----- AI对话练习 -----
    aiChat(sceneId) {
        const scene = sceneId ? (window.oralScenes || []).find(s => s.id === sceneId) : null;
        const scenes = window.oralScenes || [];

        return `
        <div class="page">
            <div class="back-bar">
                <button class="back-btn">‹</button>
                <span class="back-title">AI 英语对话</span>
            </div>

            <div class="ai-topic-selector">
                <div class="ai-topic-chip ${!sceneId ? 'active' : ''}" onclick="App.actions.switchAiTopic(null)">自由对话</div>
                ${scenes.map(s => `
                    <div class="ai-topic-chip ${sceneId === s.id ? 'active' : ''}" onclick="App.actions.switchAiTopic(${s.id})">
                        ${s.icon} ${s.title}
                    </div>
                `).join('')}
            </div>

            <div class="ai-chat-container">
                <div class="ai-chat-messages" id="chatMessages">
                    ${App.aiChat.renderMessages()}
                </div>
                <div class="ai-chat-input-area">
                    <input type="text" class="ai-chat-input" id="chatInput"
                        placeholder="用英语输入..." autocomplete="off"
                        onkeypress="if(event.key==='Enter')App.actions.sendChatMessage()">
                    <button type="button" class="ai-chat-send" onclick="App.actions.sendChatMessage()">➤</button>
                </div>
            </div>
        </div>
        `;
    },

    // ----- 考编首页 -----
    exam() {
        const tab = App.state.examTab;
        const wrongCount = App.state.wrongQuestions.filter(w => w.subject === tab).length;

        return `
        <div class="page">
            <div class="page-header">
                <div class="page-title">📚 教师考编</div>
                <div class="page-subtitle">福建地区 · 教综 + 中英学科</div>
            </div>

            <div class="exam-tabs">
                <div class="exam-tab ${tab === 'jiaozong' ? 'active' : ''}" onclick="App.actions.switchExamTab('jiaozong')">
                    📖 教育综合知识
                </div>
                <div class="exam-tab ${tab === 'english' ? 'active' : ''}" onclick="App.actions.switchExamTab('english')">
                    🅰️ 中学英语
                </div>
            </div>

            ${tab === 'jiaozong' ? `
            <div class="card" style="background:var(--primary-light);">
                <div style="font-size:13px;color:var(--primary-dark);line-height:1.8;">
                    <strong>📊 考试结构</strong><br>
                    • 师德和教育法律法规约 15%<br>
                    • 教育学约 35%<br>
                    • 心理学约 40%<br>
                    <span style="color:var(--text-secondary);font-size:12px;">闭卷笔试 · 120分钟 · 150分</span>
                </div>
            </div>
            ` : `
            <div class="card" style="background:var(--accent-light);">
                <div style="font-size:13px;color:var(--accent-dark);line-height:1.8;">
                    <strong>📊 考试结构</strong><br>
                    • 学科专业基础主干知识约 60%<br>
                    • 课程与教学论约 40%<br>
                    <span style="color:var(--text-secondary);font-size:12px;">闭卷笔试 · 120分钟 · 150分 · 教综占40%+学科占60%</span>
                </div>
            </div>
            `}

            <div class="exam-function-grid">
                <div class="exam-function-card" onclick="App.navigate('knowledge', {subject: '${tab}'})">
                    <div class="icon">📋</div>
                    <div class="name">知识点梳理</div>
                    <div class="desc">系统复习核心考点</div>
                </div>
                <div class="exam-function-card" onclick="App.navigate('practice', {subject: '${tab}'})">
                    <div class="icon">✏️</div>
                    <div class="name">章节练习</div>
                    <div class="desc">按模块刷题</div>
                </div>
                <div class="exam-function-card" onclick="App.navigate('mock', {subject: '${tab}'})">
                    <div class="icon">⏱️</div>
                    <div class="name">模拟测试</div>
                    <div class="desc">计时模拟考试</div>
                </div>
                <div class="exam-function-card" onclick="App.switchTab('wrong')">
                    <div class="icon">❌</div>
                    <div class="name">错题本</div>
                    <div class="desc">${wrongCount > 0 ? `${wrongCount}道错题` : '暂无错题'}</div>
                </div>
            </div>

            <div class="section-title"><span class="emoji">📈</span> 学习数据</div>
            <div class="home-stats">
                <div class="stat-card">
                    <div class="stat-icon">📝</div>
                    <div class="stat-value">${App.actions.getAnsweredCount(tab)}</div>
                    <div class="stat-label">已练习</div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">✅</div>
                    <div class="stat-value">${App.actions.getCorrectCount(tab)}</div>
                    <div class="stat-label">答对</div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">❌</div>
                    <div class="stat-value">${wrongCount}</div>
                    <div class="stat-label">错题</div>
                </div>
            </div>
        </div>
        `;
    },

    // ----- 知识点梳理 -----
    knowledge(subject) {
        const isJiaozong = subject === 'jiaozong';
        const title = isJiaozong ? '教育综合知识' : '中学英语学科';

        let modules;
        if (isJiaozong) {
            modules = (window.knowledgePoints || []).filter(k => k.module === '教育学' || k.module === '心理学');
        } else {
            modules = window.englishKnowledge || [];
        }

        const totalPoints = modules.reduce((s, m) => s + m.sections.reduce((ss, sec) => ss + sec.points.length, 0), 0);

        return `
        <div class="page">
            <div class="back-bar">
                <button class="back-btn">‹</button>
                <span class="back-title">${title}知识点</span>
            </div>

            <div class="card" style="background:linear-gradient(135deg,${isJiaozong ? '#4A90D9,#5BA3E8' : '#F5A623,#FF8C42'});color:white;">
                <div style="font-size:13px;line-height:1.8;">
                    <strong>📚 ${title}</strong><br>
                    共 ${modules.length} 章 · ${totalPoints} 个知识点<br>
                    <span style="opacity:0.8;font-size:12px;">黄色高亮为重点内容，点击章节展开学习</span>
                </div>
            </div>

            <div class="section-title"><span class="emoji">📋</span> 知识体系</div>
            ${modules.map((m, idx) => `
                <div class="knowledge-module">
                    <div class="knowledge-module-header" onclick="App.actions.toggleKnowledge(${idx})">
                        <div class="knowledge-module-title">
                            ${isJiaozong ? (m.module === '教育学' ? '📘 ' : '🧠 ') : '📚 '}
                            ${m.chapter || m.module}
                        </div>
                        <span class="knowledge-module-arrow" id="arrow-${idx}">›</span>
                    </div>
                    <div class="knowledge-module-body" id="body-${idx}">
                        ${m.sections.map(s => `
                            <div class="knowledge-section">
                                <div class="knowledge-section-title">${s.title}</div>
                                ${s.points.map(p => `
                                    <div class="knowledge-point">
                                        <div class="knowledge-point-term">${p.term}</div>
                                        <div class="knowledge-point-content">${App.util.renderHighlight(p.content)}</div>
                                    </div>
                                `).join('')}
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('')}

            <div style="text-align:center;margin-top:16px;font-size:11px;color:var(--text-tertiary);">
                点击章节标题展开/收起知识点 · 高亮内容为考试重点
            </div>
        </div>
        `;
    },

    // ----- 章节练习 -----
    practice(subject) {
        const isJiaozong = subject === 'jiaozong';
        const questions = isJiaozong ? (window.jiaozongQuestions || []) : (window.englishQuestions || []);
        const filter = App.state.practiceFilter;

        // 获取模块列表
        const modules = [...new Set(questions.map(q => q.module))];

        // 过滤题目
        let filtered = filter === 'all' ? questions : questions.filter(q => q.module === filter);

        const idx = App.state.currentQuestionIndex % filtered.length;
        const q = filtered[idx];

        if (!q) return '<div class="page"><p>暂无题目</p></div>';

        const answered = App.state.practiceAnswers[q.id];
        const showAnswer = answered !== undefined;

        return `
        <div class="page">
            <div class="back-bar">
                <button class="back-btn">‹</button>
                <span class="back-title">${isJiaozong ? '教综' : '中英'}练习</span>
            </div>

            <div class="practice-filter">
                <div class="filter-chip ${filter === 'all' ? 'active' : ''}" onclick="App.actions.setPracticeFilter('all')">全部</div>
                ${modules.map(m => `
                    <div class="filter-chip ${filter === m ? 'active' : ''}" onclick="App.actions.setPracticeFilter('${m}')">${m}</div>
                `).join('')}
            </div>

            <div class="question-card">
                <div class="question-meta">
                    <span class="tag">${q.module}</span>
                    <span class="tag">${q.chapter || ''}</span>
                    <span class="tag">${q.difficulty}</span>
                    <span class="tag">${App.actions.getTypeName(q.type)}</span>
                </div>
                <div class="question-text">${q.question}</div>

                ${q.type === 'single' || q.type === 'multi' ? Pages.renderOptions(q, showAnswer, answered) : ''}
                ${q.type === 'judge' ? Pages.renderJudgeOptions(q, showAnswer, answered) : ''}
                ${q.type === 'fill' ? Pages.renderFillInput(q, showAnswer, answered) : ''}
                ${q.type === 'short' || q.type === 'translate' || q.type === 'case' ? Pages.renderShortAnswer(q, showAnswer, answered) : ''}

                ${showAnswer ? Pages.renderAnswer(q, answered) : ''}
            </div>

            <div class="question-nav">
                <button class="btn btn-outline" onclick="App.actions.prevQuestion(${filtered.length})" ${idx === 0 ? 'disabled' : ''}>上一题</button>
                <span class="question-progress">第 ${idx + 1} / ${filtered.length} 题</span>
                <button class="btn btn-primary" onclick="App.actions.nextQuestion(${filtered.length})">下一题 ›</button>
            </div>
        </div>
        `;
    },

    renderOptions(q, showAnswer, answered) {
        return `
        <div class="question-options">
            ${q.options.map((opt, i) => {
                const label = opt.charAt(0);
                const text = opt.substring(2).trim();
                let cls = 'option-item';
                if (showAnswer) {
                    const correctAns = q.answer;
                    if (correctAns.includes(label)) {
                        cls += ' correct';
                    } else if (answered === label || (Array.isArray(answered) && answered.includes(label))) {
                        cls += ' wrong';
                    }
                }
                return `
                    <div class="${cls}" onclick="App.actions.selectOption('${label}', ${q.id}, '${q.type}')">
                        <span class="option-label">${label}.</span>
                        <span class="option-text">${text}</span>
                    </div>
                `;
            }).join('')}
        </div>
        `;
    },

    renderJudgeOptions(q, showAnswer, answered) {
        const opts = [
            { label: 'A', text: '正确' },
            { label: 'B', text: '错误' }
        ];
        return `
        <div class="question-options">
            ${opts.map(opt => {
                let cls = 'option-item';
                if (showAnswer) {
                    if (q.answer === opt.label) {
                        cls += ' correct';
                    } else if (answered === opt.label) {
                        cls += ' wrong';
                    }
                }
                return `
                    <div class="${cls}" onclick="App.actions.selectOption('${opt.label}', ${q.id}, '${q.type}')">
                        <span class="option-label">${opt.label}.</span>
                        <span class="option-text">${opt.text}</span>
                    </div>
                `;
            }).join('')}
        </div>
        `;
    },

    renderFillInput(q, showAnswer, answered) {
        if (showAnswer) {
            return `
            <div style="padding:10px;background:var(--bg);border-radius:var(--radius-sm);font-size:13px;">
                你的答案：${answered || '（未作答）'}
            </div>
            `;
        }
        return `
        <input type="text" class="fill-answer-input" id="fillInput-${q.id}" placeholder="请输入答案..." autocomplete="off">
        <button class="btn btn-primary" onclick="App.actions.submitFill(${q.id})">提交答案</button>
        `;
    },

    renderShortAnswer(q, showAnswer, answered) {
        if (showAnswer) {
            return `
            <div style="padding:10px;background:var(--bg);border-radius:var(--radius-sm);font-size:13px;margin-bottom:8px;">
                <strong>你的作答：</strong><br>${answered || '（未作答）'}
            </div>
            `;
        }
        return `
        <textarea class="short-answer-textarea" id="shortInput-${q.id}" placeholder="请输入你的答案..."></textarea>
        <button class="btn btn-primary" onclick="App.actions.submitShort(${q.id})">提交查看参考答案</button>
        `;
    },

    renderAnswer(q, answered) {
        const isCorrect = App.actions.checkAnswer(q, answered);
        App.actions.recordResult(q, answered, isCorrect);

        return `
        <div class="question-answer show ${isCorrect ? 'correct-answer' : ''}" style="${isCorrect ? '' : 'background:var(--danger-light);color:var(--danger);'}">
            <div class="answer-label">${isCorrect ? '✅ 回答正确！' : '❌ 回答错误'}</div>
            <div>正确答案：<strong>${q.answer}</strong></div>
            <div class="analysis">📖 ${q.analysis || '暂无解析'}</div>
        </div>
        `;
    },

    // ----- 模拟测试配置 -----
    mock(subject) {
        const isJiaozong = subject === 'jiaozong';
        App.state.mockConfig.subject = subject;

        return `
        <div class="page">
            <div class="back-bar">
                <button class="back-btn">‹</button>
                <span class="back-title">模拟测试</span>
            </div>

            <div class="mock-config">
                <h3>⚙️ 测试设置</h3>

                <div class="mock-config-item">
                    <div class="mock-config-label">选择科目</div>
                    <div class="mock-config-options">
                        <div class="mock-option ${subject === 'jiaozong' ? 'active' : ''}" onclick="App.actions.setMockSubject('jiaozong')">教育综合知识</div>
                        <div class="mock-option ${subject === 'english' ? 'active' : ''}" onclick="App.actions.setMockSubject('english')">中学英语</div>
                    </div>
                </div>

                <div class="mock-config-item">
                    <div class="mock-config-label">题目数量</div>
                    <div class="mock-config-options">
                        <div class="mock-option ${App.state.mockConfig.count === 5 ? 'active' : ''}" onclick="App.actions.setMockCount(5)">5题（快速）</div>
                        <div class="mock-option ${App.state.mockConfig.count === 10 ? 'active' : ''}" onclick="App.actions.setMockCount(10)">10题（标准）</div>
                        <div class="mock-option ${App.state.mockConfig.count === 20 ? 'active' : ''}" onclick="App.actions.setMockCount(20)">20题（强化）</div>
                    </div>
                </div>

                <div class="mock-config-item">
                    <div class="mock-config-label">题型说明</div>
                    <div style="font-size:12px;color:var(--text-secondary);line-height:1.8;padding:8px;background:var(--bg);border-radius:var(--radius-sm);">
                        ${isJiaozong
                            ? '包含单选题、多选题、判断题、填空题、简答题。随机抽题，覆盖师德法规、教育学、心理学三大模块。'
                            : '包含单选题、填空题、简答题、翻译题、案例分析题。随机抽题，覆盖语法、词汇、阅读、翻译、文学、语言学、教学论等模块。'
                        }
                    </div>
                </div>

                <button class="mock-start-btn" onclick="App.actions.startMock()">开始测试</button>
            </div>

            <div class="card">
                <div style="font-size:13px;font-weight:600;margin-bottom:8px;">📋 测试说明</div>
                <div style="font-size:12px;color:var(--text-secondary);line-height:1.8;">
                    • 模拟测试采用随机抽题方式<br>
                    • 测试结束后自动评分并记录错题<br>
                    • 建议在不受打扰的环境中进行<br>
                    • 客观题即时判分，主观题对照参考答案自评
                </div>
            </div>
        </div>
        `;
    },

    // ----- 模拟测试进行中 -----
    mockTest() {
        const questions = App.state.mockQuestions;
        const idx = App.state.mockCurrentIndex;
        const q = questions[idx];

        if (!q) return '<div class="page"><p>测试结束</p></div>';

        const total = questions.length;
        const answered = App.state.mockAnswers[q.id];

        return `
        <div class="page">
            <div class="back-bar">
                <button class="back-btn" onclick="App.actions.confirmExitMock()">‹</button>
                <span class="back-title">模拟测试 ${idx + 1}/${total}</span>
            </div>

            <div style="background:var(--primary);color:white;border-radius:var(--radius);padding:12px 16px;margin-bottom:16px;display:flex;justify-content:space-between;align-items:center;">
                <span style="font-size:13px;">第 ${idx + 1} 题 / 共 ${total} 题</span>
                <span style="font-size:13px;" id="mockTimer">⏱ 计时中</span>
            </div>

            <div class="question-card">
                <div class="question-meta">
                    <span class="tag">${q.module}</span>
                    <span class="tag">${q.difficulty}</span>
                    <span class="tag">${App.actions.getTypeName(q.type)}</span>
                </div>
                <div class="question-text">${q.question}</div>

                ${q.type === 'single' || q.type === 'multi' ? `
                    <div class="question-options">
                        ${q.options.map(opt => {
                            const label = opt.charAt(0);
                            const text = opt.substring(2).trim();
                            const selected = answered === label || (Array.isArray(answered) && answered.includes(label));
                            return `
                                <div class="option-item ${selected ? 'selected' : ''}" onclick="App.actions.selectMockOption('${label}', ${q.id})">
                                    <span class="option-label">${label}.</span>
                                    <span class="option-text">${text}</span>
                                </div>
                            `;
                        }).join('')}
                    </div>
                ` : ''}

                ${q.type === 'judge' ? `
                    <div class="question-options">
                        ${[{label:'A',text:'正确'},{label:'B',text:'错误'}].map(opt => {
                            const selected = answered === opt.label;
                            return `
                                <div class="option-item ${selected ? 'selected' : ''}" onclick="App.actions.selectMockOption('${opt.label}', ${q.id})">
                                    <span class="option-label">${opt.label}.</span>
                                    <span class="option-text">${opt.text}</span>
                                </div>
                            `;
                        }).join('')}
                    </div>
                ` : ''}

                ${(q.type === 'fill' || q.type === 'short' || q.type === 'translate' || q.type === 'case') ? `
                    <textarea class="short-answer-textarea" id="mockShort-${q.id}" placeholder="请输入你的答案..." onchange="App.actions.saveMockShort(${q.id}, this.value)">${answered || ''}</textarea>
                ` : ''}
            </div>

            <div class="question-nav">
                <button class="btn btn-outline" onclick="App.actions.prevMock()" ${idx === 0 ? 'disabled' : ''}>上一题</button>
                <span class="question-progress">${Object.keys(App.state.mockAnswers).length} / ${total} 已作答</span>
                ${idx === total - 1
                    ? `<button class="btn btn-primary" onclick="App.actions.finishMock()">交卷</button>`
                    : `<button class="btn btn-primary" onclick="App.actions.nextMock()">下一题 ›</button>`
                }
            </div>
        </div>
        `;
    },

    // ----- 模拟测试结果 -----
    mockResult() {
        const questions = App.state.mockQuestions;
        const answers = App.state.mockAnswers;
        const total = questions.length;

        let correct = 0;
        let wrong = 0;
        let unanswered = 0;
        let newWrongQuestions = [];

        questions.forEach(q => {
            const ans = answers[q.id];
            if (!ans || ans === '') {
                unanswered++;
                newWrongQuestions.push({
                    subject: App.state.mockConfig.subject,
                    questionId: q.id,
                    question: q.question,
                    yourAnswer: '未作答',
                    correctAnswer: q.answer,
                    analysis: q.analysis,
                    time: App.util.today(),
                });
            } else {
                const isCorrect = App.actions.checkAnswer(q, ans);
                if (isCorrect) {
                    correct++;
                } else {
                    wrong++;
                    newWrongQuestions.push({
                        subject: App.state.mockConfig.subject,
                        questionId: q.id,
                        question: q.question,
                        yourAnswer: typeof ans === 'string' ? ans : ans.join(','),
                        correctAnswer: q.answer,
                        analysis: q.analysis,
                        time: App.util.today(),
                    });
                }
            }
        });

        // 保存新错题
        newWrongQuestions.forEach(wq => {
            if (!App.state.wrongQuestions.find(w => w.questionId === wq.questionId && w.subject === wq.subject && w.time === wq.time)) {
                App.state.wrongQuestions.push(wq);
            }
        });
        App.storage.save();

        const score = Math.round((correct / total) * 100);
        const subject = App.state.mockConfig.subject === 'jiaozong' ? '教育综合知识' : '中学英语';

        return `
        <div class="page">
            <div class="mock-result">
                <div style="font-size:48px;margin-bottom:8px;">${score >= 80 ? '🎉' : score >= 60 ? '💪' : '📚'}</div>
                <div class="mock-score">${score}</div>
                <div class="mock-score-label">${subject} · 模拟测试成绩</div>
            </div>

            <div class="mock-stats">
                <div class="mock-stat-item">
                    <div class="num" style="color:var(--success);">${correct}</div>
                    <div class="label">答对</div>
                </div>
                <div class="mock-stat-item">
                    <div class="num" style="color:var(--danger);">${wrong}</div>
                    <div class="label">答错</div>
                </div>
                <div class="mock-stat-item">
                    <div class="num" style="color:var(--text-tertiary);">${unanswered}</div>
                    <div class="label">未答</div>
                </div>
                <div class="mock-stat-item">
                    <div class="num" style="color:var(--primary);">${total}</div>
                    <div class="label">总题数</div>
                </div>
            </div>

            <div class="card">
                <div style="font-size:13px;font-weight:600;margin-bottom:8px;">📝 答题详情</div>
                ${questions.map((q, i) => {
                    const ans = answers[q.id];
                    const isCorrect = ans && App.actions.checkAnswer(q, ans);
                    const noAnswer = !ans || ans === '';
                    return `
                        <div style="padding:8px 0;border-bottom:1px solid var(--border-light);font-size:12px;">
                            <span style="color:${noAnswer ? 'var(--text-tertiary)' : isCorrect ? 'var(--success)' : 'var(--danger)'};">
                                ${noAnswer ? '⚪' : isCorrect ? '✅' : '❌'}
                            </span>
                            <span style="color:var(--text-secondary);">第${i+1}题</span>
                            <span style="color:var(--text-tertiary);margin-left:4px;">${q.module}</span>
                        </div>
                    `;
                }).join('')}
            </div>

            <div style="display:flex;gap:8px;margin-top:16px;">
                <button class="btn btn-outline" style="flex:1;padding:12px;" onclick="App.actions.reviewMockWrong()">查看错题</button>
                <button class="btn btn-primary" style="flex:1;padding:12px;" onclick="App.switchTab('exam')">返回考编</button>
            </div>
        </div>
        `;
    },

    // ----- 错题本 -----
    wrong() {
        const wrongs = App.state.wrongQuestions;

        if (wrongs.length === 0) {
            return `
            <div class="page">
                <div class="page-header">
                    <div class="page-title">❌ 错题本</div>
                    <div class="page-subtitle">记录练习和模拟中的错题</div>
                </div>
                <div class="empty-state">
                    <div class="empty-icon">🎉</div>
                    <div class="empty-text">暂无错题，继续保持！</div>
                </div>
            </div>
            `;
        }

        // 按科目分组统计
        const jiaozongWrongs = wrongs.filter(w => w.subject === 'jiaozong');
        const englishWrongs = wrongs.filter(w => w.subject === 'english');

        return `
        <div class="page">
            <div class="page-header">
                <div class="page-title">❌ 错题本</div>
                <div class="page-subtitle">共 ${wrongs.length} 道错题</div>
            </div>

            <div class="home-stats mb-16">
                <div class="stat-card">
                    <div class="stat-icon">📖</div>
                    <div class="stat-value">${jiaozongWrongs.length}</div>
                    <div class="stat-label">教综错题</div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">🅰️</div>
                    <div class="stat-value">${englishWrongs.length}</div>
                    <div class="stat-label">中英错题</div>
                </div>
            </div>

            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
                <div class="section-title" style="margin-bottom:0;"><span class="emoji">📋</span> 错题列表</div>
                <button class="btn btn-outline" onclick="App.actions.clearWrongQuestions()" style="font-size:12px;">清空全部</button>
            </div>

            ${wrongs.slice().reverse().map(w => `
                <div class="wrong-question-card">
                    <div class="wrong-question-meta">
                        <span class="tag" style="background:${w.subject === 'jiaozong' ? 'var(--primary-light)' : 'var(--accent-light)'};color:${w.subject === 'jiaozong' ? 'var(--primary)' : 'var(--accent-dark)'};">
                            ${w.subject === 'jiaozong' ? '教综' : '中英'}
                        </span>
                        <span style="font-size:11px;color:var(--text-tertiary);">${w.time}</span>
                    </div>
                    <div class="wrong-question-text">${w.question}</div>
                    <div class="wrong-question-answer">
                        你的答案：<span style="color:var(--danger);">${w.yourAnswer}</span><br>
                        <span class="correct">正确答案：${w.correctAnswer}</span><br>
                        ${w.analysis ? `<span style="color:var(--text-secondary);">📖 ${w.analysis}</span>` : ''}
                    </div>
                </div>
            `).join('')}
        </div>
        `;
    },

    // ----- 小厨娘 -----
    kitchen() {
        const recipes = window.recipes || [];
        const allIngredients = [...new Set(recipes.flatMap(r => r.ingredients))].sort();

        // 获取已选食材
        const selected = App.state.kitchenSelected || [];

        // 过滤菜谱：选中食材越多匹配越好，至少匹配1种
        let filtered;
        if (selected.length === 0) {
            filtered = recipes;
        } else {
            filtered = recipes.filter(r => r.ingredients.some(ing => selected.includes(ing)));
        }

        return `
        <div class="page">
            <div class="page-header">
                <div class="page-title">🍳 小厨娘</div>
                <div class="page-subtitle">选食材，出菜谱 · 小白也能做大菜</div>
            </div>

            <div class="card" style="background:linear-gradient(135deg,#E67E22,#F39C12);color:white;">
                <div style="font-size:13px;line-height:1.8;">
                    <strong>🥘 怎么用？</strong><br>
                    点击下方食材，系统会筛选出你能做的菜。选得越多，推荐越精准！
                </div>
            </div>

            <div class="section-title"><span class="emoji">🥬</span> 选择食材</div>
            <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:16px;">
                ${allIngredients.map(ing => `
                    <div class="ingredient-chip ${selected.includes(ing) ? 'selected' : ''}"
                         onclick="App.actions.toggleIngredient('${ing}')">
                        ${selected.includes(ing) ? '✓ ' : ''}${ing}
                    </div>
                `).join('')}
            </div>

            ${selected.length > 0 ? `
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
                <span style="font-size:13px;color:var(--text-secondary);">已选 ${selected.length} 种食材，找到 ${filtered.length} 道菜</span>
                <button class="btn btn-outline" style="font-size:12px;padding:4px 10px;" onclick="App.actions.clearIngredients()">清空</button>
            </div>
            ` : ''}

            <div class="section-title"><span class="emoji">🍽️</span> 菜谱推荐 ${selected.length > 0 ? `(${filtered.length})` : `(${recipes.length})`}</div>
            ${filtered.length === 0 ? `
                <div class="empty-state">
                    <div class="empty-icon">🤔</div>
                    <div class="empty-text">没有找到匹配的菜谱，试试选其他食材吧</div>
                </div>
            ` : filtered.map(r => `
                <div class="recipe-card" onclick="App.navigate('recipe', {recipeId: ${r.id}})">
                    <div class="recipe-card-header">
                        <div class="recipe-name">${r.name}</div>
                        <span class="tag ${r.difficulty === '简单' ? 'tag-easy' : 'tag-medium'}">${r.difficulty}</span>
                    </div>
                    <div class="recipe-meta">
                        <span>⏱ ${r.time}</span>
                        <span>🥘 ${r.ingredients.join('、')}</span>
                    </div>
                </div>
            `).join('')}
        </div>
        `;
    },

    // ----- 菜谱详情 -----
    recipe(recipeId) {
        const recipe = (window.recipes || []).find(r => r.id === recipeId);
        if (!recipe) return '<div class="page"><p>菜谱不存在</p></div>';

        return `
        <div class="page">
            <div class="back-bar">
                <button class="back-btn">‹</button>
                <span class="back-title">${recipe.name}</span>
            </div>

            <div class="recipe-detail-header">
                <h2>${recipe.name}</h2>
                <div class="recipe-detail-meta">
                    <span class="tag ${recipe.difficulty === '简单' ? 'tag-easy' : 'tag-medium'}">${recipe.difficulty}</span>
                    <span>⏱ ${recipe.time}</span>
                </div>
            </div>

            <div class="recipe-section">
                <div class="section-title"><span class="emoji">🥬</span> 主料</div>
                <div style="display:flex;flex-wrap:wrap;gap:6px;">
                    ${recipe.ingredients.map(ing => `<span class="ingredient-tag">${ing}</span>`).join('')}
                </div>
            </div>

            <div class="recipe-section">
                <div class="section-title"><span class="emoji">🧂</span> 调料</div>
                <div style="display:flex;flex-wrap:wrap;gap:6px;">
                    ${recipe.seasonings.map(s => `<span class="seasoning-tag">${s}</span>`).join('')}
                </div>
            </div>

            <div class="recipe-section">
                <div class="section-title"><span class="emoji">📝</span> 制作步骤</div>
                <div class="recipe-steps">
                    ${recipe.steps.map((step, i) => `
                        <div class="recipe-step">
                            <div class="step-num">${i + 1}</div>
                            <div class="step-text">${step}</div>
                        </div>
                    `).join('')}
                </div>
            </div>

            ${recipe.tips ? `
            <div class="tips-box">
                <span class="tips-label">💡 小贴士</span>
                ${recipe.tips}
            </div>
            ` : ''}
        </div>
        `;
    },

    // ----- 面试口语 -----
    interview() {
        const scripts = window.interviewScripts || [];

        // 按课型分组
        const typeGroups = {};
        scripts.forEach(s => {
            if (!typeGroups[s.lessonType]) typeGroups[s.lessonType] = [];
            typeGroups[s.lessonType].push(s);
        });

        return `
        <div class="page">
            <div class="page-header">
                <div class="page-title">🎤 面试口语</div>
                <div class="page-subtitle">福建教招面试 · 英语片段教学完整逐字稿</div>
            </div>

            <div class="card" style="background:linear-gradient(135deg,#9B59B6,#8E44AD);color:white;">
                <div style="font-size:13px;line-height:1.8;">
                    <strong>📋 片段教学逐字稿</strong><br>
                    共 ${scripts.length} 篇完整试讲稿，覆盖词汇、阅读、语法、听说、写作、语音等课型。每篇均可直接背诵，点击查看全文。
                </div>
            </div>

            <div class="section-title"><span class="emoji">📝</span> 试讲逐字稿</div>
            <p style="font-size:12px;color:var(--text-secondary);margin-bottom:12px;">按课型分类，点击进入查看完整逐字稿</p>

            ${Object.entries(typeGroups).map(([type, items]) => `
                <div class="interview-type-header">${type}</div>
                ${items.map(s => `
                    <div class="script-card" onclick="App.navigate('interview-detail', {scriptId: ${s.id}})">
                        <div class="script-card-top">
                            <span class="script-type-badge">${s.lessonType}</span>
                            <span class="tag ${s.difficulty === '初级' ? 'tag-easy' : s.difficulty === '中级' ? 'tag-medium' : 'tag-hard'}">${s.difficulty}</span>
                        </div>
                        <div class="script-card-title">${s.icon} ${s.titleCn}</div>
                        <div class="script-card-title-en">${s.title}</div>
                        <div class="script-card-desc">${s.description}</div>
                        <div class="script-card-meta">
                            <span>⏱ ${s.duration}</span>
                            <span>📖 ${s.script.length} 个环节</span>
                            <span>🏷️ ${s.keywords.slice(0,2).join(' · ')}</span>
                        </div>
                    </div>
                `).join('')}
            `).join('')}

            <div class="section-title mt-16"><span class="emoji">💡</span> 面试小贴士</div>
            <div class="card">
                <div style="font-size:13px;line-height:1.8;color:var(--text-secondary);">
                    <strong>1. 全英文授课</strong>：片段教学要求全英文，避免使用中文。<br>
                    <strong>2. 模拟互动</strong>：虽然面对评委，要假装有学生，设计提问和互动。<br>
                    <strong>3. 环节完整</strong>：导入→新授→练习→巩固→总结，缺一不可。<br>
                    <strong>4. 板书设计</strong>：边讲边写板书，结构清晰。<br>
                    <strong>5. 时间控制</strong>：10-15分钟，每个环节合理分配时间。<br>
                    <strong>6. 自信表达</strong>：语速适中，发音清晰，面带微笑。
                </div>
            </div>
        </div>
        `;
    },

    // ----- 面试逐字稿详情 -----
    interviewDetail(scriptId) {
        const script = (window.interviewScripts || []).find(s => s.id === scriptId);
        if (!script) return '<div class="page"><p>逐字稿不存在</p></div>';

        return `
        <div class="page">
            <div class="back-bar">
                <button class="back-btn">‹</button>
                <span class="back-title">${script.lessonType}</span>
            </div>

            <div class="script-detail-header">
                <div class="script-type-badge-large">${script.lessonType}</div>
                <h2>${script.icon} ${script.titleCn}</h2>
                <div class="script-title-en">${script.title}</div>
                <div class="script-detail-meta">
                    <span class="tag ${script.difficulty === '初级' ? 'tag-easy' : script.difficulty === '中级' ? 'tag-medium' : 'tag-hard'}">${script.difficulty}</span>
                    <span>⏱ ${script.duration}</span>
                </div>
                <div class="script-detail-desc">${script.description}</div>
                <div class="script-keywords">
                    ${script.keywords.map(k => `<span class="script-keyword">#${k}</span>`).join('')}
                </div>
            </div>

            <div style="margin-bottom:12px;">
                <button class="checkin-btn" onclick="App.actions.speakScript(${script.id})" style="background:linear-gradient(135deg,#9B59B6,#8E44AD);">
                    🔊 朗读全文
                </button>
            </div>

            <div class="section-title"><span class="emoji">📝</span> 完整逐字稿</div>
            ${script.script.map((part, i) => `
                <div class="script-stage-card">
                    <div class="script-stage-header">
                        <span class="script-stage-num">${i + 1}</span>
                        <div>
                            <div class="script-stage-name">${part.stageCn}</div>
                            <div class="script-stage-en">${part.stage}</div>
                        </div>
                        <button class="script-stage-play" onclick="App.util.speak(${JSON.stringify(part.text).replace(/'/g, "&#39;")})">🔊</button>
                    </div>
                    <div class="script-stage-text">${part.text.replace(/\n/g, '<br>')}</div>
                </div>
            `).join('')}

            ${script.tips ? `
            <div class="tips-box">
                <span class="tips-label">💡 使用建议</span>
                ${script.tips}
            </div>
            ` : ''}

            <div style="text-align:center;margin-top:16px;font-size:11px;color:var(--text-tertiary);">
                可点击每个环节的 🔊 单独朗读 · 也可点击顶部朗读全文
            </div>
        </div>
        `;
    },
};

// ===== AI 对话系统 =====
App.aiChat = {
    messages: [],  // {role: 'bot'|'user', text, translation}

    init(sceneId) {
        App.aiChat.messages = [];
        const scene = sceneId ? (window.oralScenes || []).find(s => s.id === sceneId) : null;

        if (scene) {
            // 场景对话模式
            App.aiChat.messages.push({
                role: 'bot',
                text: `Hi! Let's practice English conversation about "${scene.titleEn}". I'll play the role of ${scene.dialogues[0]?.speakerCn || 'the other person'}, and you respond. Ready?`,
                translation: `你好！让我们来练习"${scene.title}"的英语对话。我来扮演${scene.dialogues[0]?.speakerCn || '对方'}，你来回应。准备好了吗？`
            });
        } else {
            // 自由对话模式
            App.aiChat.messages.push({
                role: 'bot',
                text: "Hello! I'm your English speaking practice partner. You can talk to me about anything - daily life, work, travel, or whatever you like. What would you like to talk about today?",
                translation: "你好！我是你的英语口语练习伙伴。你可以和我聊任何话题——日常生活、工作、旅行，任何你感兴趣的。今天想聊些什么？"
            });
        }
    },

    renderMessages() {
        return App.aiChat.messages.map(m => `
            <div class="ai-message ${m.role === 'user' ? 'user' : 'bot'}">
                <div class="ai-avatar">${m.role === 'user' ? '🧑' : '🤖'}</div>
                <div class="ai-bubble">
                    ${m.text}
                    ${m.translation ? `<div class="ai-bubble-translation">${m.translation}</div>` : ''}
                </div>
            </div>
        `).join('');
    },

    // 生成AI回复（基于规则和场景的智能对话）
    generateResponse(userText, sceneId) {
        const text = userText.toLowerCase().trim();
        const scene = sceneId ? (window.oralScenes || []).find(s => s.id === sceneId) : null;

        // 通用回复模式
        const greetings = ['hello','hi','hey','good morning','good afternoon','good evening','howdy'];
        const howAreYou = ['how are you','how are u','how do you do','how is it going','how are things'];
        const byes = ['bye','goodbye','see you','see ya','farewell','gtg','got to go'];
        const thanks = ['thank','thanks','thx','appreciate'];
        const yesWords = ['yes','yeah','yep','sure','ok','okay','of course','definitely'];
        const noWords = ['no','nope','nah','not really','i do not think so'];

        // 检查匹配
        if (greetings.some(g => text.includes(g))) {
            return {
                text: "Hi there! Great to see you practicing English! What would you like to talk about?",
                translation: "嗨！很高兴看到你在练习英语！想聊些什么呢？"
            };
        }

        if (howAreYou.some(p => text.includes(p))) {
            return {
                text: "I'm doing great, thank you for asking! I'm always excited to help you practice English. How about you? How is your day going?",
                translation: "我很好，谢谢关心！我总是很乐意帮你练习英语。你呢？今天过得怎么样？"
            };
        }

        if (byes.some(b => text.includes(b))) {
            return {
                text: "Goodbye! You did a wonderful job today. Keep practicing and you'll get even better. See you next time!",
                translation: "再见！你今天表现得很棒。继续练习，你会越来越好的。下次见！"
            };
        }

        if (thanks.some(t => text.includes(t))) {
            return {
                text: "You're very welcome! That's what I'm here for. Is there anything else you'd like to practice?",
                translation: "不客气！这是我应该做的。还有什么想练习的吗？"
            };
        }

        // 场景特定回复
        if (scene) {
            return App.aiChat.sceneResponse(text, scene, userText);
        }

        // 自由对话 - 基于关键词的智能回复
        if (text.includes('my name is') || text.includes("i'm ") || text.includes('i am ')) {
            return {
                text: "Nice to meet you! That's a lovely name. Tell me more about yourself - what do you do or what are you interested in?",
                translation: "很高兴认识你！这个名字真好听。多告诉我一些关于你的事吧——你做什么工作或者有什么兴趣爱好？"
            };
        }

        if (text.includes('work') || text.includes('job') || text.includes('career')) {
            return {
                text: "That sounds interesting! Work can be both challenging and rewarding. What do you enjoy most about your work? Or what challenges do you face?",
                translation: "听起来很有趣！工作既有挑战也有回报。你最喜欢你工作的哪一点？或者你面临什么挑战？"
            };
        }

        if (text.includes('study') || text.includes('learn') || text.includes('school') || text.includes('exam')) {
            return {
                text: "That's wonderful that you're studying! Learning is a lifelong journey. What subject are you studying? Is there anything you find particularly difficult or interesting?",
                translation: "你在学习真是太好了！学习是一生的旅程。你在学什么科目？有什么你觉得特别难或特别有趣的吗？"
            };
        }

        if (text.includes('food') || text.includes('eat') || text.includes('hungry') || text.includes('restaurant')) {
            return {
                text: "I love talking about food! What's your favorite dish? Have you tried any new restaurants lately? I enjoy hearing about different cuisines.",
                translation: "我喜欢聊美食！你最喜欢吃什么菜？最近有没有去新餐厅？我很喜欢听不同的美食故事。"
            };
        }

        if (text.includes('travel') || text.includes('trip') || text.includes('vacation') || text.includes('holiday')) {
            return {
                text: "Travel is such a wonderful topic! I love hearing about different places. Where have you been recently, or where would you like to go? What's your dream destination?",
                translation: "旅行是个很棒的话题！我喜欢听不同的地方。你最近去过哪里，或者想去哪里？你的梦想目的地是哪里？"
            };
        }

        if (text.includes('weather') || text.includes('rain') || text.includes('sunny') || text.includes('cold') || text.includes('hot')) {
            return {
                text: "The weather certainly affects our mood and plans! What's the weather like where you are? Do you prefer sunny days or rainy days?",
                translation: "天气确实会影响我们的心情和计划！你那边天气怎么样？你喜欢晴天还是雨天？"
            };
        }

        if (text.includes('hobby') || text.includes('hobbies') || text.includes('like to do') || text.includes('enjoy')) {
            return {
                text: "That sounds like a great hobby! Having interests outside of work is so important for a balanced life. How long have you been doing that? What got you started?",
                translation: "听起来是个很棒的爱好！工作之外有兴趣对平衡生活很重要。你做这个多久了？是什么让你开始的？"
            };
        }

        if (text.includes('family') || text.includes('friend') || text.includes('parent') || text.includes('mother') || text.includes('father')) {
            return {
                text: "Family and friends are so important in our lives. They shape who we are. Tell me more about them - what do you enjoy doing together?",
                translation: "家人和朋友在我们的生活中很重要。他们塑造了我们。多告诉我一些关于他们的事吧——你们在一起喜欢做什么？"
            };
        }

        if (yesWords.some(y => text.includes(y))) {
            return {
                text: "Great! I'm glad to hear that. Can you tell me more about it? I'd love to hear the details.",
                translation: "太好了！很高兴听到这个。能多告诉我一些吗？我想听听细节。"
            };
        }

        if (noWords.some(n => text.includes(n))) {
            return {
                text: "That's okay! Everyone has different preferences. What would you prefer instead? I'd love to know more about what you like.",
                translation: "没关系！每个人都有不同的偏好。那你更喜欢什么呢？我想多了解你喜欢的东西。"
            };
        }

        if (text.includes('?')) {
            return {
                text: "That's a great question! Let me think... Well, I think it depends on the situation. What's your take on this? I'd love to hear your perspective.",
                translation: "这是个好问题！让我想想...嗯，我觉得这取决于具体情况。你怎么看？我很想听听你的观点。"
            };
        }

        if (text.includes('help') || text.includes('how do') || text.includes('how can') || text.includes('what should')) {
            return {
                text: "I'd be happy to help! Could you give me a bit more context so I can give you a better answer? What specifically are you wondering about?",
                translation: "我很乐意帮忙！你能多给我一些背景信息吗，这样我能更好地回答你。你具体想知道什么？"
            };
        }

        // 默认回复 - 鼓励继续对话
        const defaults = [
            {
                text: "I see! That's interesting. Could you tell me more about that? I'd love to hear more details.",
                translation: "我明白了！很有趣。能多告诉我一些吗？我想听更多细节。"
            },
            {
                text: "Thanks for sharing! It sounds like you have a lot to say about this. What else is on your mind?",
                translation: "谢谢分享！听起来你对此有很多想法。你还在想什么？"
            },
            {
                text: "That's a good point! I understand what you mean. How did that make you feel? Or what happened next?",
                translation: "说得有道理！我明白你的意思。那让你感觉如何？或者接下来发生了什么？"
            },
            {
                text: "Interesting! I like how you expressed that. Can you give me an example? I'd love to hear more.",
                translation: "有意思！我喜欢你的表达方式。能举个例子吗？我想听更多。"
            },
            {
                text: "I hear you! That makes sense. What do you think about it? How would you describe your experience?",
                translation: "我听到了！这很合理。你怎么看？你会怎么描述你的经历？"
            }
        ];

        return defaults[Math.floor(Math.random() * defaults.length)];
    },

    // 场景特定回复
    sceneResponse(text, scene, originalText) {
        // 根据场景ID给出特定回复
        const responses = {
            1: { // 餐厅点餐
                options: [
                    { text: "Great choice! Would you like something to drink with that? We have fresh juice, soda, and also a great selection of wine.", translation: "很好的选择！您想配点什么喝的吗？我们有新鲜果汁、汽水，还有很好的葡萄酒。" },
                    { text: "Excellent! I'll get that started for you right away. Would you like any appetizers to start with?", translation: "好的！我马上为您准备。您想先来点开胃菜吗？" },
                    { text: "Sure! Our chef's special today is grilled salmon with seasonal vegetables. Would you like to try that?", translation: "好的！我们主厨今日特餐是烤三文鱼配时令蔬菜。您想试试吗？" },
                ]
            },
            2: { // 机场出行
                options: [
                    { text: "Certainly! May I see your passport and ticket, please? Let me check you in for your flight.", translation: "当然可以！请出示您的护照和机票。我来为您办理登机手续。" },
                    { text: "Your gate is B12. Boarding will start about 45 minutes before departure. Would you like an aisle or window seat?", translation: "您的登机口是B12。起飞前45分钟开始登机。您想要靠走道还是靠窗的座位？" },
                    { text: "I understand travel can be stressful. Don't worry, everything will be fine. Do you have any liquids in your bag?", translation: "我理解旅行可能会有压力。别担心，一切都会顺利的。您包里有液体物品吗？" },
                ]
            },
            3: { // 购物
                options: [
                    { text: "Of course! What size are you looking for? We have this in small, medium, and large. Would you like to try it on?", translation: "当然！您要什么尺码的？这件有小号、中号和大号。您想试穿一下吗？" },
                    { text: "That's a popular item! It's currently 20% off. Would you like me to show you some similar styles as well?", translation: "这是热门商品！现在打八折。您想让我也给您看一些类似的款式吗？" },
                    { text: "Great taste! This is one of our bestsellers. Do you have a particular color preference?", translation: "品味很好！这是我们的畅销款之一。您有偏好的颜色吗？" },
                ]
            },
            4: { // 问路
                options: [
                    { text: "Sure, I can help with that! Go straight down this road for about two blocks, then turn left. You'll see it on your right.", translation: "当然，我可以帮忙！沿着这条路直走大约两个街区，然后左转。你会看到它在你的右边。" },
                    { text: "It's about a 10-minute walk from here. Do you want me to draw you a quick map, or would you prefer to take a bus?", translation: "从这里走路大约10分钟。你想让我画个简单的地图，还是坐公交去？" },
                    { text: "No problem! Actually, it's quite close. Just go past the traffic lights and take the second right. You can't miss it!", translation: "没问题！其实很近。走过红绿灯后在第二个路口右转。你不会错过的！" },
                ]
            },
            5: { // 酒店
                options: [
                    { text: "Welcome to our hotel! Do you have a reservation with us? May I have your name, please?", translation: "欢迎光临我们酒店！请问您有预订吗？可以告诉我您的姓名吗？" },
                    { text: "Certainly! Your room is on the 5th floor, room 512. Breakfast is served from 7 to 10 in the restaurant downstairs. Here's your key card.", translation: "好的！您的房间在5楼，512房。早餐7点到10点在楼下餐厅供应。这是您的房卡。" },
                    { text: "Of course! Check-out time is at noon. Is there anything else you need? We offer room service 24 hours a day.", translation: "当然！退房时间是中午12点。您还需要其他什么吗？我们提供24小时客房服务。" },
                ]
            },
            6: { // 看医生
                options: [
                    { text: "I understand. Can you describe the symptoms? How long have you been feeling this way?", translation: "我明白了。能描述一下症状吗？您这样感觉多久了？" },
                    { text: "Don't worry, we'll figure this out. Does it hurt when I press here? Let me take your temperature first.", translation: "别担心，我们会弄清楚的。我按这里疼吗？让我先给您量个体温。" },
                    { text: "I see. It sounds like a common cold. I'll prescribe some medicine. Make sure to get plenty of rest and drink lots of water.", translation: "我明白了。听起来像是普通感冒。我给您开些药。一定要多休息，多喝水。" },
                ]
            },
            7: { // 社交寒暄
                options: [
                    { text: "It's so nice to catch up with you! What have you been up to lately? It feels like ages since we last talked.", translation: "能和你聊天真好！你最近在忙什么？感觉好久没聊了。" },
                    { text: "That sounds wonderful! I'm really happy for you. By the way, have you tried that new cafe downtown? We should go together sometime!", translation: "听起来太好了！真为你高兴。对了，你试过市中心那家新咖啡店吗？我们应该找时间一起去！" },
                    { text: "Haha, that's hilarious! You always know how to make me laugh. So, any plans for the weekend?", translation: "哈哈，太好笑了！你总是能让我笑。那周末有什么计划吗？" },
                ]
            },
            8: { // 工作面试
                options: [
                    { text: "Thank you for coming in today. Could you start by telling me a bit about yourself and your background?", translation: "感谢您今天来参加面试。能先简单介绍一下您自己和您的背景吗？" },
                    { text: "That's impressive! What would you say is your greatest strength? Can you give me an example?", translation: "令人印象深刻！您认为自己最大的优点是什么？能举个例子吗？" },
                    { text: "I appreciate your honest answer. Where do you see yourself in five years? What are your career goals?", translation: "感谢您诚实的回答。您觉得自己五年后会在哪里？您的职业目标是什么？" },
                ]
            },
            9: { // 电话
                options: [
                    { text: "Hello, this is John speaking. How may I help you today?", translation: "您好，我是John。请问有什么可以帮您的？" },
                    { text: "I'm sorry, but he's currently in a meeting. Can I take a message for you? He'll call you back as soon as he's available.", translation: "抱歉，他现在正在开会。需要我帮您留言吗？他一有空就会给您回电话。" },
                    { text: "Sure, let me transfer you to the right department. Please hold on for just a moment.", translation: "好的，我帮您转接到正确的部门。请稍等片刻。" },
                ]
            },
            10: { // 天气
                options: [
                    { text: "Yeah, the weather has been quite unpredictable lately! I heard it might rain later this afternoon. Did you bring an umbrella?", translation: "是啊，最近天气真是难以预测！听说今天下午晚些时候可能会下雨。你带伞了吗？" },
                    { text: "I know, right? It's been so sunny and warm. Perfect weather for a walk in the park! Do you enjoy outdoor activities?", translation: "是吧？一直阳光明媚又温暖。去公园散步的完美天气！你喜欢户外活动吗？" },
                    { text: "Absolutely! I love this kind of weather. Not too hot, not too cold. What's your favorite season?", translation: "完全同意！我喜欢这种天气。不冷不热的。你最喜欢什么季节？" },
                ]
            },
            11: { // 交通
                options: [
                    { text: "The next bus should be here in about 5 minutes. Are you going downtown? You can also take the subway - it might be faster.", translation: "下一班公交大约5分钟后到。你要去市中心吗？你也可以坐地铁——可能会更快。" },
                    { text: "Sure, I can help! Take bus number 7 and get off at the third stop. It should take about 15 minutes.", translation: "当然，我可以帮忙！坐7路公交，在第三站下车。大约需要15分钟。" },
                    { text: "Traffic can be pretty heavy at this time of day. If you're in a hurry, I'd recommend taking the train instead.", translation: "这个时间段交通可能比较拥堵。如果你赶时间，我建议坐火车。" },
                ]
            },
            12: { // 聚会
                options: [
                    { text: "Thanks for coming! Make yourself at home. Can I get you something to drink? We have soda, juice, and some snacks over there.", translation: "谢谢你的到来！当自己家一样。要我给你拿点喝的吗？那边有汽水、果汁和一些零食。" },
                    { text: "I'm so glad you could make it! Have you met everyone yet? Let me introduce you to some of the other guests.", translation: "真高兴你能来！你见过所有人了吗？让我给你介绍一些其他客人。" },
                    { text: "The food is almost ready! We've got pizza, salad, and a chocolate cake for dessert. Are you hungry?", translation: "食物快好了！我们有披萨、沙拉，还有巧克力蛋糕当甜点。你饿了吗？" },
                ]
            },
        };

        const sceneResponses = responses[scene.id];
        if (sceneResponses) {
            return sceneResponses.options[Math.floor(Math.random() * sceneResponses.options.length)];
        }

        // 默认场景回复
        return {
            text: "That's great! Keep going, you're doing well. Can you tell me more about that?",
            translation: "很好！继续，你做得不错。能多告诉我一些吗？"
        };
    },
};

// ===== 用户操作 =====
App.actions = {
    // 打卡
    checkin() {
        const today = App.util.today();
        if (!App.state.checkinDays.includes(today)) {
            App.state.checkinDays.push(today);
            App.storage.save();
            App.util.toast('🎉 打卡成功！继续保持！');
            App.render();
        } else {
            App.util.toast('今日已打卡');
        }
    },

    // 切换AI话题
    switchAiTopic(sceneId) {
        App.aiChat.init(sceneId);
        App.state.pageData.sceneId = sceneId;
        App.render();
    },

    // 发送聊天消息
    sendChatMessage() {
        const input = document.getElementById('chatInput');
        const text = input.value.trim();
        if (!text) return;

        // 添加用户消息
        App.aiChat.messages.push({ role: 'user', text: text });
        input.value = '';

        // 渲染用户消息
        const messagesEl = document.getElementById('chatMessages');
        messagesEl.insertAdjacentHTML('beforeend', `
            <div class="ai-message user">
                <div class="ai-avatar">🧑</div>
                <div class="ai-bubble">${App.actions.escapeHtml(text)}</div>
            </div>
        `);

        messagesEl.scrollTop = messagesEl.scrollHeight;

        // 模拟AI思考延迟
        const sendBtn = document.querySelector('.ai-chat-send');
        sendBtn.disabled = true;

        setTimeout(() => {
            const response = App.aiChat.generateResponse(text, App.state.pageData.sceneId);
            App.aiChat.messages.push({
                role: 'bot',
                text: response.text,
                translation: response.translation
            });

            messagesEl.insertAdjacentHTML('beforeend', `
                <div class="ai-message bot">
                    <div class="ai-avatar">🤖</div>
                    <div class="ai-bubble">
                        ${response.text}
                        <div class="ai-bubble-translation">${response.translation}</div>
                    </div>
                </div>
            `);

            messagesEl.scrollTop = messagesEl.scrollHeight;
            sendBtn.disabled = false;

            // 自动朗读AI回复
            App.util.speak(response.text);
        }, 800 + Math.random() * 700);
    },

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    },

    // 切换考编Tab
    switchExamTab(tab) {
        App.state.examTab = tab;
        App.render();
    },

    // 知识点展开/收起
    toggleKnowledge(idx) {
        const body = document.getElementById(`body-${idx}`);
        const arrow = document.getElementById(`arrow-${idx}`);
        if (body.classList.contains('open')) {
            body.classList.remove('open');
            arrow.classList.remove('open');
        } else {
            body.classList.add('open');
            arrow.classList.add('open');
        }
    },

    // 练习筛选
    setPracticeFilter(filter) {
        App.state.practiceFilter = filter;
        App.state.currentQuestionIndex = 0;
        App.render();
    },

    // 选项选择
    selectOption(label, questionId, type) {
        const questions = App.state.examTab === 'jiaozong'
            ? (window.jiaozongQuestions || [])
            : (window.englishQuestions || []);
        const q = questions.find(qq => qq.id === questionId);
        if (!q) return;

        // 检查是否已经答过
        if (App.state.practiceAnswers[questionId] !== undefined) return;

        App.state.practiceAnswers[questionId] = label;
        App.storage.save();
        App.render();
    },

    // 填空题提交
    submitFill(questionId) {
        const input = document.getElementById(`fillInput-${questionId}`);
        const answer = input.value.trim();
        if (!answer) {
            App.util.toast('请输入答案');
            return;
        }
        App.state.practiceAnswers[questionId] = answer;
        App.storage.save();
        App.render();
    },

    // 简答题提交
    submitShort(questionId) {
        const textarea = document.getElementById(`shortInput-${questionId}`);
        const answer = textarea.value.trim();
        if (!answer) {
            App.util.toast('请输入答案');
            return;
        }
        App.state.practiceAnswers[questionId] = answer;
        App.storage.save();
        App.render();
    },

    // 下一题/上一题
    nextQuestion(total) {
        App.state.currentQuestionIndex = (App.state.currentQuestionIndex + 1) % total;
        App.render();
    },

    prevQuestion(total) {
        App.state.currentQuestionIndex = (App.state.currentQuestionIndex - 1 + total) % total;
        App.render();
    },

    // 检查答案是否正确
    checkAnswer(q, answered) {
        if (!answered) return false;

        if (q.type === 'single' || q.type === 'judge') {
            return answered === q.answer;
        }

        if (q.type === 'multi') {
            const correct = q.answer.split('').sort().join('');
            const user = (Array.isArray(answered) ? answered : [answered]).sort().join('');
            return correct === user;
        }

        if (q.type === 'fill') {
            const correct = q.answer.toLowerCase().trim();
            const user = String(answered).toLowerCase().trim();
            return correct === user || correct.includes(user) || user.includes(correct);
        }

        // 简答题等无法自动判分，只要有作答就算对
        return true;
    },

    // 记录答题结果（错题记录）
    recordResult(q, answered, isCorrect) {
        if (isCorrect) return;
        // 检查是否已记录
        const exists = App.state.wrongQuestions.find(w =>
            w.questionId === q.id &&
            w.subject === App.state.examTab &&
            w.time === App.util.today()
        );
        if (exists) return;

        App.state.wrongQuestions.push({
            subject: App.state.examTab,
            questionId: q.id,
            question: q.question,
            yourAnswer: typeof answered === 'string' ? answered : String(answered),
            correctAnswer: q.answer,
            analysis: q.analysis || '',
            time: App.util.today(),
        });
        App.storage.save();
    },

    // 获取已答题数
    getAnsweredCount(subject) {
        const questions = subject === 'jiaozong'
            ? (window.jiaozongQuestions || [])
            : (window.englishQuestions || []);
        return questions.filter(q => App.state.practiceAnswers[q.id] !== undefined).length;
    },

    // 获取答对题数
    getCorrectCount(subject) {
        const questions = subject === 'jiaozong'
            ? (window.jiaozongQuestions || [])
            : (window.englishQuestions || []);
        return questions.filter(q => {
            const ans = App.state.practiceAnswers[q.id];
            return ans !== undefined && App.actions.checkAnswer(q, ans);
        }).length;
    },

    // 获取题型名称
    getTypeName(type) {
        const names = {
            single: '单选题',
            multi: '多选题',
            judge: '判断题',
            fill: '填空题',
            short: '简答题',
            translate: '翻译题',
            case: '案例分析',
        };
        return names[type] || type;
    },

    // 模拟测试设置
    setMockSubject(subject) {
        App.state.mockConfig.subject = subject;
        App.render();
    },

    setMockCount(count) {
        App.state.mockConfig.count = count;
        App.render();
    },

    // 开始模拟测试
    startMock() {
        const subject = App.state.mockConfig.subject;
        const count = App.state.mockConfig.count;
        const allQuestions = subject === 'jiaozong'
            ? (window.jiaozongQuestions || [])
            : (window.englishQuestions || []);

        // 随机抽题
        const shuffled = App.util.shuffle(allQuestions);
        App.state.mockQuestions = shuffled.slice(0, Math.min(count, shuffled.length));
        App.state.mockAnswers = {};
        App.state.mockCurrentIndex = 0;
        App.state.mockStartTime = Date.now();

        App.navigate('mock-test');
    },

    // 模拟测试选项选择
    selectMockOption(label, questionId) {
        App.state.mockAnswers[questionId] = label;
        App.render();
    },

    // 保存模拟测试主观题
    saveMockShort(questionId, value) {
        App.state.mockAnswers[questionId] = value;
    },

    // 模拟测试翻页
    nextMock() {
        App.state.mockCurrentIndex++;
        App.render();
    },

    prevMock() {
        App.state.mockCurrentIndex--;
        App.render();
    },

    // 交卷
    finishMock() {
        if (Object.keys(App.state.mockAnswers).length < App.state.mockQuestions.length) {
            if (!confirm(`还有 ${App.state.mockQuestions.length - Object.keys(App.state.mockAnswers).length} 题未作答，确定交卷吗？`)) {
                return;
            }
        }
        App.state.currentPage = 'mock-result';
        App.render();
        window.scrollTo(0, 0);
    },

    // 退出模拟测试
    confirmExitMock() {
        if (confirm('确定要退出测试吗？已作答的记录将不会保存。')) {
            App.back();
        }
    },

    // 查看模拟测试错题
    reviewMockWrong() {
        App.switchTab('wrong');
    },

    // 清空错题本
    clearWrongQuestions() {
        if (confirm('确定要清空所有错题吗？此操作不可撤销。')) {
            App.state.wrongQuestions = [];
            App.storage.save();
            App.render();
            App.util.toast('已清空错题本');
        }
    },

    // 小厨娘：切换食材选择
    toggleIngredient(ing) {
        if (!App.state.kitchenSelected) App.state.kitchenSelected = [];
        const idx = App.state.kitchenSelected.indexOf(ing);
        if (idx >= 0) {
            App.state.kitchenSelected.splice(idx, 1);
        } else {
            App.state.kitchenSelected.push(ing);
        }
        App.render();
    },

    // 小厨娘：清空食材选择
    clearIngredients() {
        App.state.kitchenSelected = [];
        App.render();
    },

    // 面试：朗读完整逐字稿
    speakScript(scriptId) {
        const script = (window.interviewScripts || []).find(s => s.id === scriptId);
        if (!script) return;
        const fullText = script.script.map(p => p.text).join(' ');
        App.util.speak(fullText);
        App.util.toast('🔊 开始朗读，请跟读练习');
    },
};

// ===== 页面事件绑定 =====
App.events = {
    'ai-chat'() {
        // 初始化AI对话
        const sceneId = App.state.pageData.sceneId;
        if (App.aiChat.messages.length === 0) {
            App.aiChat.init(sceneId);
            App.render();
        }
        // 自动聚焦输入框
        setTimeout(() => {
            const input = document.getElementById('chatInput');
            if (input) input.focus();
        }, 300);
    },

    'mock-test'() {
        // 计时器
        if (App.state.mockStartTime) {
            const timerEl = document.getElementById('mockTimer');
            const updateTimer = () => {
                if (!document.getElementById('mockTimer')) return;
                const elapsed = Math.floor((Date.now() - App.state.mockStartTime) / 1000);
                const min = Math.floor(elapsed / 60);
                const sec = elapsed % 60;
                const timerEl = document.getElementById('mockTimer');
                if (timerEl) {
                    timerEl.textContent = `⏱ ${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
                    setTimeout(updateTimer, 1000);
                }
            };
            updateTimer();
        }
    },
};

// ===== 启动应用 =====
document.addEventListener('DOMContentLoaded', () => {
    App.storage.load();
    App.render();
});
