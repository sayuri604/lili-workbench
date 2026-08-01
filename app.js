/**
 * 理理工作台 - 应用主逻辑（重构版）
 * 功能：Todo待办 + 教综刷题 + 中英刷题 + 错题本 + 搜索
 */

// ===== 全局状态管理 =====
const App = {
    state: {
        currentPage: 'home',
        pageStack: [],
        pageData: {},

        // Todo 模块
        todoList: null,           // { date, duration, tasks: [...] }
        todoDuration: 180,        // 默认3h（分钟）
        jzReviewHistory: [],      // 教综章节轮换历史

        // 刷题模块
        practiceAnswers: {},      // {questionId: answer}

        // 模拟/刷题作答
        mockQuestions: [],
        mockAnswers: {},
        mockCurrentIndex: 0,
        mockStartTime: null,
        mockSubject: 'jiaozong',  // 当前刷题科目

        // 错题本
        wrongQuestions: [],

        // 搜索
        searchKeyword: '',
        searchResults: [],
    },

    // ===== 本地存储 =====
    storage: {
        load() {
            try {
                const saved = localStorage.getItem('lili-workbench');
                if (saved) {
                    const data = JSON.parse(saved);
                    App.state.todoList = data.todoList || null;
                    App.state.todoDuration = data.todoDuration || 180;
                    App.state.jzReviewHistory = data.jzReviewHistory || [];
                    App.state.wrongQuestions = data.wrongQuestions || [];
                    App.state.practiceAnswers = data.practiceAnswers || {};
                }
                const uname = localStorage.getItem('lili-user-name');
                if (uname) App.state.userName = uname;
            } catch(e) { console.warn('加载存储失败', e); }
        },
        save() {
            try {
                localStorage.setItem('lili-workbench', JSON.stringify({
                    todoList: App.state.todoList,
                    todoDuration: App.state.todoDuration,
                    jzReviewHistory: App.state.jzReviewHistory,
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
            case 'home':          content = Pages.todo(); showNav = false; break;
            case 'jiaozong':      content = Pages.jiaozongHome(); break;
            case 'english':       content = Pages.englishHome(); break;
            case 'wrong':         content = Pages.wrong(); break;
            case 'search':        content = Pages.search(); break;
            case 'jz-practice':   content = Pages.jzPractice(App.state.pageData); break;
            case 'en-practice':   content = Pages.enPractice(App.state.pageData); break;
            case 'knowledge':     content = Pages.knowledge(App.state.pageData.subject); break;
            case 'mock-test':     content = Pages.mockTest(); showNav = false; break;
            case 'mock-result':   content = Pages.mockResult(); showNav = false; break;
            case 'jz-chapters':   content = Pages.jzChapters(); break;
            default:              content = Pages.todo(); showNav = false;
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
                <div class="nav-item ${page === 'jiaozong' ? 'active' : ''}" data-tab="jiaozong">
                    <span class="nav-icon">📖</span>
                    <span class="nav-label">教综</span>
                </div>
                <div class="nav-item ${page === 'english' ? 'active' : ''}" data-tab="english">
                    <span class="nav-icon">🅰️</span>
                    <span class="nav-label">中英</span>
                </div>
                <div class="nav-item ${page === 'wrong' ? 'active' : ''}" data-tab="wrong">
                    <span class="nav-icon">❌</span>
                    <span class="nav-label">错题</span>
                </div>
                <div class="nav-item ${page === 'search' ? 'active' : ''}" data-tab="search">
                    <span class="nav-icon">🔍</span>
                    <span class="nav-label">搜索</span>
                </div>
            `;
            app.appendChild(nav);
        }

        App.bindEvents();
    },

    // ===== 事件绑定 =====
    bindEvents() {
        // 返回按钮
        document.querySelectorAll('.back-btn').forEach(btn => {
            btn.onclick = () => App.back();
        });
        // 底部导航
        document.querySelectorAll('.bottom-nav .nav-item').forEach(item => {
            item.onclick = () => App.switchTab(item.dataset.tab);
        });
        // 页面事件
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

        todayStr() {
            const d = new Date();
            const weeks = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
            return `${d.getFullYear()}年${d.getMonth()+1}月${d.getDate()}日 ${weeks[d.getDay()]}`;
        },

        isSaturday() {
            return new Date().getDay() === 6;
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

        renderHighlight(text) {
            if (!text) return '';
            let html = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
            html = html.replace(/\{\{highlight\}\}/g, '<mark class="highlight">').replace(/\{\{\/highlight\}\}/g, '</mark>');
            return html;
        },

        openDrawer() {
            const drawer = document.getElementById('xhsDrawer');
            const mask = document.getElementById('xhsDrawerMask');
            if (drawer) drawer.classList.add('open');
            if (mask) mask.classList.add('open');
        },

        closeDrawer() {
            const drawer = document.getElementById('xhsDrawer');
            const mask = document.getElementById('xhsDrawerMask');
            if (drawer) drawer.classList.remove('open');
            if (mask) mask.classList.remove('open');
        },

        toggleUserName() {
            App.util.closeDrawer();
            const current = App.state.userName || '理理';
            const name = prompt('设置你的昵称（用于首页显示）', current);
            if (name && name.trim()) {
                App.state.userName = name.trim().substring(0, 8);
                try { localStorage.setItem('lili-user-name', App.state.userName); } catch(e) {}
                App.util.toast('✓ 已保存');
                App.render();
            }
        },

        showToast(msg) { App.util.toast(msg); },
    },
};

// ===== 任务类型池 =====
const TASK_POOL = {
    vocab:        { title: '背单词',          est: 20, icon: '🔤' },
    jzReview:     { title: '教综章节复习',     est: 10, icon: '📖' },
    jzPractice:   { title: '教综刷题',        est: 15, icon: '✏️' },
    enCurriculum: { title: '中英·课标',       est: 5,  icon: '📋' },
    enMcq:        { title: '中英·选择题刷题',  est: 20, icon: '☑️' },
    enFill:       { title: '中英·短填',       est: 15, icon: '📝' },
    enTranslate:  { title: '中英·翻译刷题',    est: 10, icon: '🔄' },
    enGrammar:    { title: '中英·语法复习',    est: 35, icon: '📐' },
    enCase:       { title: '中英·案例分析',    est: 10, icon: '🔍' },
    enEssay:      { title: '中英·背作文',     est: 30, icon: '✍️' },
    enDesign:     { title: '中英·教学设计',    est: 15, icon: '🎯' },
};

// 教综全部章节（22章）
const JZ_CHAPTERS = [
    '教育与教育学','教育与社会发展','教育与个体发展','教育目的',
    '学校教育制度','课程','教师与学生','教学','德育','班级管理与班主任工作',
    '教育科学研究','心理学概述','认知过程','注意','情绪与情感','意志',
    '个性心理','教育心理学','学习动机','知识的学习与技能的形成',
    '学习迁移与学习策略','品德形成与心理健康教育'
];

// ===== 用户操作 =====
App.actions = {
    // ----- Todo 规划 -----
    generateTodo(durationMinutes) {
        const tasks = [];
        let taskId = 1;
        let used = 0;
        const budget = durationMinutes;

        // 必选集：背单词 + 教综复习 + 教综刷题
        const chapter = App.actions.pickReviewChapter();
        tasks.push({ id: `todo-${taskId++}`, type: 'vocab', title: '背单词', estMinutes: 20, done: false, icon: TASK_POOL.vocab.icon });
        used += 20;
        tasks.push({ id: `todo-${taskId++}`, type: 'jzReview', title: `教综复习：${chapter}`, estMinutes: 10, done: false, icon: TASK_POOL.jzReview.icon, chapter });
        used += 10;
        tasks.push({ id: `todo-${taskId++}`, type: 'jzPractice', title: '教综刷题（30题）', estMinutes: 15, done: false, icon: TASK_POOL.jzPractice.icon });
        used += 15;

        // 中英任务优先级队列（按时长从短到长、重要性排序）
        const queue = [
            { type: 'enCurriculum', est: 5 },
            { type: 'enMcq',        est: 20 },
            { type: 'enFill',       est: 15 },
            { type: 'enTranslate',  est: 10 },
            { type: 'enGrammar',    est: 35 },
            { type: 'enCase',       est: 10 },
            { type: 'enEssay',      est: 30 },
            { type: 'enDesign',     est: 15 },
        ];

        // 贪心填充（允许略超预算5min容差）
        for (const item of queue) {
            if (used + item.est <= budget + 5) {
                const pool = TASK_POOL[item.type];
                tasks.push({ id: `todo-${taskId++}`, type: item.type, title: pool.title, estMinutes: item.est, done: false, icon: pool.icon });
                used += item.est;
            }
        }

        // 长时长（≥4h）加第二个教综复习
        if (budget >= 240 && used + 10 <= budget + 5) {
            const ch2 = App.actions.pickReviewChapter();
            tasks.push({ id: `todo-${taskId++}`, type: 'jzReview', title: `教综复习：${ch2}`, estMinutes: 10, done: false, icon: TASK_POOL.jzReview.icon, chapter: ch2 });
            used += 10;
        }

        return {
            date: App.util.today(),
            duration: durationMinutes,
            tasks,
            totalEst: used,
        };
    },

    pickReviewChapter() {
        const recent = (App.state.jzReviewHistory || []).slice(-5);
        const candidates = JZ_CHAPTERS.filter(c => !recent.includes(c));
        const pool = candidates.length > 0 ? candidates : JZ_CHAPTERS;
        const picked = pool[Math.floor(Math.random() * pool.length)];
        if (!App.state.jzReviewHistory) App.state.jzReviewHistory = [];
        App.state.jzReviewHistory.push(picked);
        if (App.state.jzReviewHistory.length > 20) {
            App.state.jzReviewHistory = App.state.jzReviewHistory.slice(-20);
        }
        return picked;
    },

    getTodayTodo() {
        const today = App.util.today();
        if (App.state.todoList && App.state.todoList.date === today) return App.state.todoList;
        const duration = App.state.todoDuration || 180;
        App.state.todoList = App.actions.generateTodo(duration);
        App.storage.save();
        return App.state.todoList;
    },

    setTodoDuration(minutes) {
        App.state.todoDuration = minutes;
        const oldTodo = App.state.todoList;
        App.state.todoList = App.actions.generateTodo(minutes);
        // 保留已完成项的 done 状态（按 type 匹配）
        if (oldTodo && oldTodo.tasks) {
            const doneTypes = new Set(oldTodo.tasks.filter(t => t.done).map(t => t.type));
            App.state.todoList.tasks.forEach(t => {
                if (doneTypes.has(t.type)) t.done = true;
            });
        }
        App.storage.save();
        App.render();
    },

    toggleTodoTask(taskId) {
        const todo = App.state.todoList;
        if (!todo) return;
        const task = todo.tasks.find(t => t.id === taskId);
        if (task) {
            task.done = !task.done;
            App.storage.save();
            App.render();
        }
    },

    // ----- 教综刷题 -----
    getDailyJzQuestions(mode, chapter) {
        const all = window.jiaozongQuestions || [];
        let pool = mode === 'chapter'
            ? all.filter(q => q.chapter === chapter)
            : all.slice();
        // 只取选择题（single/multi/judge）
        pool = pool.filter(q => ['single','multi','judge'].includes(q.type));
        if (pool.length === 0) {
            // 章节无选择题则回退到全量
            pool = all.filter(q => ['single','multi','judge'].includes(q.type));
        }
        const shuffled = App.util.shuffle(pool);
        let questions = [];
        while (questions.length < 30) { questions.push(...shuffled); }
        return questions.slice(0, 30);
    },

    startJzPractice(mode, chapter) {
        const questions = App.actions.getDailyJzQuestions(mode, chapter);
        App.state.mockQuestions = questions;
        App.state.mockAnswers = {};
        App.state.mockCurrentIndex = 0;
        App.state.mockStartTime = Date.now();
        App.state.mockSubject = 'jiaozong';
        App.navigate('mock-test');
    },

    // ----- 中英刷题 -----
    getDailyEnQuestions(mode) {
        const all = window.englishQuestions || [];
        let pool;
        if (mode === 'mcq')           pool = all.filter(q => q.type === 'single');
        else if (mode === 'translate') pool = all.filter(q => q.type === 'translate');
        else if (mode === 'case')     pool = all.filter(q => q.type === 'case' && q.chapter === '案例分析');
        else if (mode === 'design')   pool = all.filter(q => q.type === 'case' && q.chapter === '教学设计');
        else if (mode === 'fill')     pool = all.filter(q => q.type === 'fill');
        else                            pool = all.filter(q => q.type === 'single');

        const count = mode === 'mcq' ? 20 : 1;
        if (pool.length === 0) return [];
        const shuffled = App.util.shuffle(pool);
        let questions = [];
        while (questions.length < count) { questions.push(...shuffled); }
        return questions.slice(0, count);
    },

    startEnPractice(mode) {
        const questions = App.actions.getDailyEnQuestions(mode);
        if (questions.length === 0) {
            App.util.toast('该题型暂无题目');
            return;
        }
        App.state.mockQuestions = questions;
        App.state.mockAnswers = {};
        App.state.mockCurrentIndex = 0;
        App.state.mockStartTime = Date.now();
        App.state.mockSubject = 'english';
        App.navigate('mock-test');
    },

    // ----- 模拟测试作答 -----
    selectMockOption(label, questionId) {
        App.state.mockAnswers[questionId] = label;
        App.render();
    },

    saveMockShort(questionId, value) {
        App.state.mockAnswers[questionId] = value;
    },

    nextMock() {
        App.state.mockCurrentIndex++;
        App.render();
    },

    prevMock() {
        if (App.state.mockCurrentIndex > 0) {
            App.state.mockCurrentIndex--;
            App.render();
        }
    },

    finishMock() {
        const questions = App.state.mockQuestions;
        const answers = App.state.mockAnswers;
        const subject = App.state.mockSubject;

        questions.forEach(q => {
            const ans = answers[q.id];
            if (!ans || ans === '') {
                // 未作答记错题
                if (!App.state.wrongQuestions.find(w => w.questionId === q.id && w.subject === subject && w.time === App.util.today())) {
                    App.state.wrongQuestions.push({
                        subject, questionId: q.id, question: q.question,
                        yourAnswer: '未作答', correctAnswer: q.answer, analysis: q.analysis || '', time: App.util.today(),
                    });
                }
            } else {
                const isCorrect = App.actions.checkAnswer(q, ans);
                if (!isCorrect && !App.state.wrongQuestions.find(w => w.questionId === q.id && w.subject === subject && w.time === App.util.today())) {
                    App.state.wrongQuestions.push({
                        subject, questionId: q.id, question: q.question,
                        yourAnswer: typeof ans === 'string' ? ans : String(ans),
                        correctAnswer: q.answer, analysis: q.analysis || '', time: App.util.today(),
                    });
                }
            }
        });
        App.storage.save();
        App.navigate('mock-result');
    },

    confirmExitMock() {
        if (confirm('确定要退出吗？未交卷的答题记录将丢失。')) {
            App.back();
        }
    },

    reviewMockWrong() {
        App.switchTab('wrong');
    },

    // ----- 答题判分 -----
    checkAnswer(q, answered) {
        if (!answered) return false;
        if (q.type === 'single' || q.type === 'judge') return answered === q.answer;
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
        return true; // 简答/翻译/案例无法自动判分
    },

    getTypeName(type) {
        const names = {
            single: '单选题', multi: '多选题', judge: '判断题',
            fill: '填空题', short: '简答题', translate: '翻译题', case: '案例分析/教学设计',
        };
        return names[type] || type;
    },

    clearWrongQuestions() {
        if (confirm('确定清空所有错题吗？')) {
            App.state.wrongQuestions = [];
            App.storage.save();
            App.render();
        }
    },

    // ----- 知识点展开/收起 -----
    toggleKnowledge(idx) {
        const body = document.getElementById(`body-${idx}`);
        const arrow = document.getElementById(`arrow-${idx}`);
        if (body) body.classList.toggle('open');
        if (arrow) arrow.classList.toggle('open');
    },

    // ----- 搜索 -----
    searchQuestions(keyword) {
        const kw = keyword.trim().toLowerCase();
        if (!kw) { App.state.searchResults = []; App.render(); return; }
        const all = [...(window.jiaozongQuestions || []), ...(window.englishQuestions || [])];
        const results = all.filter(q =>
            (q.question && q.question.toLowerCase().includes(kw)) ||
            (q.chapter && q.chapter.toLowerCase().includes(kw)) ||
            (q.module && q.module.toLowerCase().includes(kw)) ||
            (q.analysis && q.analysis.toLowerCase().includes(kw))
        );
        // 去重
        const seen = new Set();
        App.state.searchResults = results.filter(q => {
            const key = `${q.module}-${q.id}`;
            if (seen.has(key)) return false;
            seen.add(key);
            return true;
        });
        App.state.searchKeyword = keyword;
        App.render();
        // 恢复输入框内容
        setTimeout(() => {
            const input = document.getElementById('searchInput');
            if (input) input.value = keyword;
        }, 0);
    },
};

// ===== 页面模板 =====
const Pages = {
    // ----- 首页：Todo 待办 -----
    todo() {
        const todo = App.actions.getTodayTodo();
        const userName = App.state.userName || '理理';
        const duration = App.state.todoDuration || 180;
        const doneCount = todo.tasks.filter(t => t.done).length;
        const totalCount = todo.tasks.length;
        const progress = totalCount > 0 ? Math.round(doneCount / totalCount * 100) : 0;

        const durationOptions = [60, 120, 180, 240, 300, 360];
        const durationLabels = { 60: '1h', 120: '2h', 180: '3h', 240: '4h', 300: '5h', 360: '6h' };

        return `
        <!-- 左侧抽屉式侧边栏 -->
        <div class="xhs-drawer" id="xhsDrawer">
            <div class="xhs-drawer-header">
                <div class="xhs-avatar">${userName.charAt(0)}</div>
                <div class="xhs-user-name">${userName}</div>
                <div class="xhs-user-bio">学习工作台</div>
                <button class="xhs-drawer-close" onclick="App.util.closeDrawer()">✕</button>
            </div>
            <div class="xhs-drawer-menu">
                <div class="xhs-menu-item active" onclick="App.util.closeDrawer()">
                    <span class="xhs-menu-icon">🏠</span><span class="xhs-menu-text">首页</span>
                </div>
                <div class="xhs-menu-item" onclick="App.util.closeDrawer();App.switchTab('jiaozong')">
                    <span class="xhs-menu-icon">📖</span><span class="xhs-menu-text">教综刷题</span>
                </div>
                <div class="xhs-menu-item" onclick="App.util.closeDrawer();App.switchTab('english')">
                    <span class="xhs-menu-icon">🅰️</span><span class="xhs-menu-text">中英刷题</span>
                </div>
                <div class="xhs-menu-item" onclick="App.util.closeDrawer();App.switchTab('wrong')">
                    <span class="xhs-menu-icon">❌</span><span class="xhs-menu-text">错题复习</span>
                </div>
                <div class="xhs-menu-item" onclick="App.util.closeDrawer();App.switchTab('search')">
                    <span class="xhs-menu-icon">🔍</span><span class="xhs-menu-text">搜索题目</span>
                </div>
                <div class="xhs-menu-item" onclick="App.util.toggleUserName()">
                    <span class="xhs-menu-icon">⚙️</span><span class="xhs-menu-text">设置</span>
                </div>
            </div>
        </div>
        <div class="xhs-drawer-mask" id="xhsDrawerMask" onclick="App.util.closeDrawer()"></div>

        <div class="page xhs-page">
            <div class="xhs-top-bar">
                <button class="xhs-avatar-btn" onclick="App.util.openDrawer()">${userName.charAt(0)}</button>
                <div class="xhs-top-title">
                    <span class="xhs-top-greeting">${App.util.todayStr()}</span>
                </div>
                <button class="xhs-top-icon-btn" onclick="App.switchTab('search')">🔍</button>
            </div>

            <!-- 进度卡 -->
            <div class="todo-progress-card">
                <div class="todo-progress-info">
                    <div class="todo-progress-title">📚 今日学习计划</div>
                    <div class="todo-progress-sub">${doneCount}/${totalCount} 已完成 · 预计 ${todo.totalEst}分钟</div>
                </div>
                <div class="todo-progress-ring">
                    <div class="todo-progress-percent">${progress}%</div>
                </div>
            </div>
            <div class="todo-progress-bar">
                <div class="todo-progress-fill" style="width:${progress}%"></div>
            </div>

            <!-- 时长选择器 -->
            <div class="todo-duration-section">
                <div class="todo-duration-label">⏱ 今日学习时长</div>
                <div class="todo-duration-options">
                    ${durationOptions.map(d => `
                        <button class="todo-duration-btn ${duration === d ? 'active' : ''}" onclick="App.actions.setTodoDuration(${d})">${durationLabels[d]}</button>
                    `).join('')}
                </div>
            </div>

            <!-- 任务列表 -->
            <div class="todo-task-list">
                ${todo.tasks.map((t, i) => `
                    <div class="todo-task-item ${t.done ? 'done' : ''}" onclick="App.actions.toggleTodoTask('${t.id}')">
                        <div class="todo-task-check">${t.done ? '✅' : '⬜'}</div>
                        <div class="todo-task-content">
                            <div class="todo-task-title">${t.icon} ${t.title}</div>
                            <div class="todo-task-meta">预计 ${t.estMinutes} 分钟</div>
                        </div>
                        <div class="todo-task-num">${i + 1}</div>
                    </div>
                `).join('')}
            </div>

            <div class="xhs-footer">
                理理工作台 · 每天进步一点点
            </div>
        </div>
        `;
    },

    // ----- 教综刷题入口 -----
    jiaozongHome() {
        const wrongCount = App.state.wrongQuestions.filter(w => w.subject === 'jiaozong').length;
        const totalQ = (window.jiaozongQuestions || []).filter(q => ['single','multi','judge'].includes(q.type)).length;

        return `
        <div class="page">
            <div class="page-header">
                <div class="page-title">📖 教综刷题</div>
                <div class="page-subtitle">福建考情 · 选择题库 · 每次随机30题</div>
            </div>

            <div class="home-stats mb-16">
                <div class="stat-card">
                    <div class="stat-icon">📊</div>
                    <div class="stat-value">${totalQ}</div>
                    <div class="stat-label">选择题库</div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">❌</div>
                    <div class="stat-value">${wrongCount}</div>
                    <div class="stat-label">错题数</div>
                </div>
            </div>

            <div class="section-title"><span class="emoji">⚡</span> 刷题模式</div>
            <div class="practice-mode-card" onclick="App.navigate('jz-chapters')">
                <div class="practice-mode-icon">📋</div>
                <div class="practice-mode-body">
                    <div class="practice-mode-title">章节刷题</div>
                    <div class="practice-mode-desc">选择章节，专攻薄弱点 · 30题/次</div>
                </div>
                <div class="practice-mode-arrow">›</div>
            </div>
            <div class="practice-mode-card" onclick="App.actions.startJzPractice('mixed')">
                <div class="practice-mode-icon">🔀</div>
                <div class="practice-mode-body">
                    <div class="practice-mode-title">混合刷题</div>
                    <div class="practice-mode-desc">全章节随机抽题 · 30题/次</div>
                </div>
                <div class="practice-mode-arrow">›</div>
            </div>

            <div class="section-title"><span class="emoji">📚</span> 学习工具</div>
            <div class="practice-mode-card" onclick="App.navigate('knowledge', { subject: 'jiaozong' })">
                <div class="practice-mode-icon">📖</div>
                <div class="practice-mode-body">
                    <div class="practice-mode-title">知识点梳理</div>
                    <div class="practice-mode-desc">教育学+心理学 · 22章 · 荧光笔重点</div>
                </div>
                <div class="practice-mode-arrow">›</div>
            </div>
            <div class="practice-mode-card" onclick="App.switchTab('wrong')">
                <div class="practice-mode-icon">❌</div>
                <div class="practice-mode-body">
                    <div class="practice-mode-title">错题本</div>
                    <div class="practice-mode-desc">${wrongCount > 0 ? `${wrongCount}道错题待复习` : '暂无错题'}</div>
                </div>
                <div class="practice-mode-arrow">›</div>
            </div>
        </div>
        `;
    },

    // ----- 教综章节选择 -----
    jzChapters() {
        return `
        <div class="page">
            <div class="back-bar">
                <button class="back-btn">‹</button>
                <span class="back-title">选择章节</span>
            </div>
            <div class="section-title"><span class="emoji">📘</span> 教育学（11章）</div>
            ${JZ_CHAPTERS.slice(0, 11).map(ch => `
                <div class="chapter-item" onclick="App.actions.startJzPractice('chapter', '${ch}')">
                    <span class="chapter-name">${ch}</span>
                    <span class="chapter-arrow">›</span>
                </div>
            `).join('')}
            <div class="section-title"><span class="emoji">🧠</span> 心理学（11章）</div>
            ${JZ_CHAPTERS.slice(11).map(ch => `
                <div class="chapter-item" onclick="App.actions.startJzPractice('chapter', '${ch}')">
                    <span class="chapter-name">${ch}</span>
                    <span class="chapter-arrow">›</span>
                </div>
            `).join('')}
        </div>
        `;
    },

    // ----- 中英刷题入口 -----
    englishHome() {
        const wrongCount = App.state.wrongQuestions.filter(w => w.subject === 'english').length;
        const isSat = App.util.isSaturday();

        return `
        <div class="page">
            <div class="page-header">
                <div class="page-title">🅰️ 中英刷题</div>
                <div class="page-subtitle">中学英语学科 · 选择题20题/次</div>
            </div>

            <div class="home-stats mb-16">
                <div class="stat-card">
                    <div class="stat-icon">📊</div>
                    <div class="stat-value">${(window.englishQuestions || []).filter(q => q.type === 'single').length}</div>
                    <div class="stat-label">选择题库</div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">❌</div>
                    <div class="stat-value">${wrongCount}</div>
                    <div class="stat-label">错题数</div>
                </div>
            </div>

            <div class="section-title"><span class="emoji">⚡</span> 每日刷题</div>
            <div class="practice-mode-card" onclick="App.actions.startEnPractice('mcq')">
                <div class="practice-mode-icon">☑️</div>
                <div class="practice-mode-body">
                    <div class="practice-mode-title">选择题刷题</div>
                    <div class="practice-mode-desc">每天随机20题 · 覆盖语法/词汇/阅读</div>
                </div>
                <div class="practice-mode-arrow">›</div>
            </div>

            ${isSat ? `
            <div class="section-title"><span class="emoji">📌</span> 周六专项</div>
            <div class="practice-mode-card sat-card" onclick="App.actions.startEnPractice('translate')">
                <div class="practice-mode-icon">🔄</div>
                <div class="practice-mode-body">
                    <div class="practice-mode-title">翻译题</div>
                    <div class="practice-mode-desc">每周六 · 1篇翻译练习</div>
                </div>
                <div class="practice-mode-arrow">›</div>
            </div>
            <div class="practice-mode-card sat-card" onclick="App.actions.startEnPractice('case')">
                <div class="practice-mode-icon">🔍</div>
                <div class="practice-mode-body">
                    <div class="practice-mode-title">案例分析</div>
                    <div class="practice-mode-desc">每周六 · 1题案例分析</div>
                </div>
                <div class="practice-mode-arrow">›</div>
            </div>
            <div class="practice-mode-card sat-card" onclick="App.actions.startEnPractice('design')">
                <div class="practice-mode-icon">🎯</div>
                <div class="practice-mode-body">
                    <div class="practice-mode-title">教学设计</div>
                    <div class="practice-mode-desc">每周六 · 1题教学设计</div>
                </div>
                <div class="practice-mode-arrow">›</div>
            </div>
            ` : `
            <div class="sat-notice">
                📅 周六将额外刷新翻译、案例分析、教学设计各1题
            </div>
            `}

            <div class="section-title"><span class="emoji">📚</span> 学习工具</div>
            <div class="practice-mode-card" onclick="App.navigate('knowledge', { subject: 'english' })">
                <div class="practice-mode-icon">📖</div>
                <div class="practice-mode-body">
                    <div class="practice-mode-title">知识点梳理</div>
                    <div class="practice-mode-desc">语法/词汇/文学/语言学/教学论 · 荧光笔重点</div>
                </div>
                <div class="practice-mode-arrow">›</div>
            </div>
            <div class="practice-mode-card" onclick="App.switchTab('wrong')">
                <div class="practice-mode-icon">❌</div>
                <div class="practice-mode-body">
                    <div class="practice-mode-title">错题本</div>
                    <div class="practice-mode-desc">${wrongCount > 0 ? `${wrongCount}道错题待复习` : '暂无错题'}</div>
                </div>
                <div class="practice-mode-arrow">›</div>
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
                                        ${App.util.renderHighlight(p)}
                                    </div>
                                `).join('')}
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
        `;
    },

    // ----- 模拟测试进行中（复用为刷题作答页） -----
    mockTest() {
        const questions = App.state.mockQuestions;
        const idx = App.state.mockCurrentIndex;
        const q = questions[idx];

        if (!q) return '<div class="page"><p>暂无题目</p></div>';

        const total = questions.length;
        const answered = App.state.mockAnswers[q.id];
        const subjectName = App.state.mockSubject === 'jiaozong' ? '教综' : '中英';

        return `
        <div class="page">
            <div class="back-bar">
                <button class="back-btn" onclick="App.actions.confirmExitMock()">‹</button>
                <span class="back-title">${subjectName}刷题 ${idx + 1}/${total}</span>
            </div>

            <div style="background:var(--primary);color:white;border-radius:var(--radius);padding:12px 16px;margin-bottom:16px;display:flex;justify-content:space-between;align-items:center;">
                <span style="font-size:13px;">第 ${idx + 1} 题 / 共 ${total} 题</span>
                <span style="font-size:13px;" id="mockTimer">⏱ 计时中</span>
            </div>

            <div class="question-card">
                <div class="question-meta">
                    <span class="tag">${q.module}</span>
                    ${q.chapter ? `<span class="tag">${q.chapter}</span>` : ''}
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

    // ----- 刷题结果 -----
    mockResult() {
        const questions = App.state.mockQuestions;
        const answers = App.state.mockAnswers;
        const total = questions.length;
        const subject = App.state.mockSubject;
        const subjectName = subject === 'jiaozong' ? '教综' : '中英';

        let correct = 0, wrong = 0, unanswered = 0;
        questions.forEach(q => {
            const ans = answers[q.id];
            if (!ans || ans === '') unanswered++;
            else if (App.actions.checkAnswer(q, ans)) correct++;
            else wrong++;
        });

        // 客观题才有分数，主观题（fill/short/translate/case）只要有作答算"已答"
        const objective = questions.filter(q => ['single','multi','judge'].includes(q.type));
        const score = objective.length > 0 ? Math.round((correct / objective.length) * 100) : 0;
        const hasObjective = objective.length > 0;

        return `
        <div class="page">
            <div class="back-bar">
                <button class="back-btn">‹</button>
                <span class="back-title">刷题结果</span>
            </div>

            <div class="mock-result">
                <div style="font-size:48px;margin-bottom:8px;">${hasObjective ? (score >= 80 ? '🎉' : score >= 60 ? '💪' : '📚') : '✍️'}</div>
                ${hasObjective ? `<div class="mock-score">${score}</div>` : '<div class="mock-score" style="font-size:24px;">已完成</div>'}
                <div class="mock-score-label">${subjectName}刷题 · ${total}题</div>
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
                    const isObj = ['single','multi','judge'].includes(q.type);
                    const isCorrect = isObj && ans && App.actions.checkAnswer(q, ans);
                    const noAnswer = !ans || ans === '';
                    return `
                        <div style="padding:8px 0;border-bottom:1px solid var(--border-light);font-size:12px;display:flex;align-items:center;gap:6px;">
                            <span style="color:${noAnswer ? 'var(--text-tertiary)' : isObj ? (isCorrect ? 'var(--success)' : 'var(--danger)') : 'var(--primary)'};">
                                ${noAnswer ? '⚪' : isObj ? (isCorrect ? '✅' : '❌') : '✍️'}
                            </span>
                            <span style="color:var(--text-secondary);">第${i+1}题</span>
                            <span style="color:var(--text-tertiary);margin-left:4px;">${q.module}</span>
                            ${!noAnswer && isObj && !isCorrect ? `<span style="color:var(--danger);margin-left:auto;">你的:${typeof ans === 'string' ? ans : ans.join('')} | 正确:${q.answer}</span>` : ''}
                        </div>
                    `;
                }).join('')}
            </div>

            <div style="display:flex;gap:8px;margin-top:16px;">
                <button class="btn btn-outline" style="flex:1;padding:12px;" onclick="App.actions.reviewMockWrong()">查看错题</button>
                <button class="btn btn-primary" style="flex:1;padding:12px;" onclick="App.switchTab('${subject === 'jiaozong' ? 'jiaozong' : 'english'}')">返回${subjectName}</button>
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
                    <div class="page-subtitle">记录刷题中的错题</div>
                </div>
                <div class="empty-state">
                    <div class="empty-icon">🎉</div>
                    <div class="empty-text">暂无错题，继续保持！</div>
                </div>
            </div>
            `;
        }

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

    // ----- 搜索页 -----
    search() {
        const keyword = App.state.searchKeyword || '';
        const results = App.state.searchResults || [];

        return `
        <div class="page">
            <div class="page-header">
                <div class="page-title">🔍 搜索题目</div>
                <div class="page-subtitle">输入关键词，搜索教综+中英题库</div>
            </div>

            <div class="search-box">
                <input type="text" class="search-input" placeholder="输入关键词搜题..." id="searchInput" value="${keyword.replace(/"/g, '&quot;')}" autocomplete="off">
                <button class="search-btn" onclick="App.actions.searchQuestions(document.getElementById('searchInput').value)">搜索</button>
            </div>

            <div class="search-results" id="searchResults">
                ${keyword === '' ? `
                    <div class="search-tip">
                        <div class="search-tip-icon">💡</div>
                        <div class="search-tip-text">输入关键词开始搜索</div>
                        <div class="search-tip-desc">支持搜索题干、章节、模块、解析</div>
                    </div>
                ` : results.length === 0 ? `
                    <div class="search-tip">
                        <div class="search-tip-icon">🔍</div>
                        <div class="search-tip-text">未找到相关题目</div>
                        <div class="search-tip-desc">试试其他关键词</div>
                    </div>
                ` : `
                    <div class="search-count">找到 ${results.length} 道相关题目</div>
                    ${results.map(q => `
                        <div class="search-result-card" onclick="App.actions.searchQuestionDetail(${q.id}, '${q.module}')">
                            <div class="search-result-meta">
                                <span class="tag" style="background:${q.module === '教育学' || q.module === '心理学' || q.module === '师德和教育法律法规与政策' ? 'var(--primary-light)' : 'var(--accent-light)'};color:${q.module === '教育学' || q.module === '心理学' || q.module === '师德和教育法律法规与政策' ? 'var(--primary)' : 'var(--accent-dark)'};">
                                    ${q.module === '教育学' || q.module === '心理学' || q.module === '师德和教育法律法规与政策' ? '教综' : '中英'}
                                </span>
                                ${q.chapter ? `<span class="tag tag-gray">${q.chapter}</span>` : ''}
                                <span class="tag tag-gray">${App.actions.getTypeName(q.type)}</span>
                            </div>
                            <div class="search-result-text">${q.question.substring(0, 120)}${q.question.length > 120 ? '...' : ''}</div>
                        </div>
                    `).join('')}
                `}
            </div>
        </div>
        `;
    },
};

// ===== 页面事件绑定 =====
App.events = {
    'mock-test'() {
        if (App.state.mockStartTime) {
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

    'search'() {
        const input = document.getElementById('searchInput');
        if (input) {
            let timer = null;
            input.addEventListener('input', () => {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    App.actions.searchQuestions(input.value);
                }, 300);
            });
            input.focus();
        }
    },
};

// ===== 启动应用 =====
document.addEventListener('DOMContentLoaded', () => {
    App.storage.load();
    App.render();
});
