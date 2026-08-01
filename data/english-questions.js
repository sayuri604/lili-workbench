// 福建省教师招聘考试——中学英语学科专业知识题库
// 考试内容涵盖三大方面：
// 1. 中学英语教学内容（语言知识、文化知识、语言技能）
// 2. 高等教育对应于中学英语教学内容（综合英语、写作、翻译、英美概况、英美文学、语言学）
// 3. 中学英语课程与教学论（课程标准、教学知识与能力）
// 试卷结构：专业基础主干知识约60%，课程与教学论约40%

const englishQuestions = [
  // ========== 语法知识（12题）==========
  {
    id: 1,
    type: "single",
    module: "语法知识",
    chapter: "主谓一致",
    difficulty: "中等",
    question: "Choose the correct answer: Neither the teacher nor the students _____ aware of the change in schedule.",
    options: ["A. was", "B. were", "C. is", "D. be"],
    answer: "B",
    analysis: "主谓一致中，either...or..., neither...nor..., not only...but also...等结构遵循就近原则，谓语动词与靠近的主语一致。students是复数，故用were。"
  },
  {
    id: 2,
    type: "single",
    module: "语法知识",
    chapter: "虚拟语气",
    difficulty: "中等",
    question: "Choose the correct answer: If I _____ you, I would not miss this opportunity.",
    options: ["A. am", "B. was", "C. were", "D. had been"],
    answer: "C",
    analysis: "与现在事实相反的虚拟条件句，if从句谓语用一般过去时，be动词一律用were。主句用would/should/could/might + 动词原形。"
  },
  {
    id: 3,
    type: "single",
    module: "语法知识",
    chapter: "非谓语动词",
    difficulty: "中等",
    question: "Choose the correct answer: _____ from the top of the hill, the whole city looks magnificent.",
    options: ["A. Seeing", "B. Seen", "C. To see", "D. Having seen"],
    answer: "B",
    analysis: "分词作状语，其逻辑主语是句子主语the city。城市是被看的，表被动，用过去分词seen。See的逻辑主语是city，city与see之间为被动关系，故用过去分词。"
  },
  {
    id: 4,
    type: "single",
    module: "语法知识",
    chapter: "时态",
    difficulty: "中等",
    question: "Choose the correct answer: By the end of last year, she _____ in this school for twenty years.",
    options: ["A. has taught", "B. taught", "C. had taught", "D. would teach"],
    answer: "C",
    analysis: "by the end of last year为过去时间状语，表示在过去某时间之前已完成的动作，需用过去完成时had done。"
  },
  {
    id: 5,
    type: "single",
    module: "语法知识",
    chapter: "定语从句",
    difficulty: "中等",
    question: "Choose the correct answer: The reason _____ he gave for his absence was _____ he was ill.",
    options: ["A. why; that", "B. that; why", "C. why; because", "D. which; that"],
    answer: "A",
    analysis: "第一空，先行词reason后接定语从句，关系词在从句中作gave的宾语（gave sth.），可用why（=for which）作关系副词；第二空，表语从句解释reason的内容，用that引导，不可用because。注意：the reason why... is that...为固定句型。"
  },
  {
    id: 6,
    type: "single",
    module: "语法知识",
    chapter: "倒装",
    difficulty: "较难",
    question: "Choose the correct answer: Not until the early years of the 19th century _____ what heat is.",
    options: ["A. man did know", "B. did man know", "C. man knew", "D. did man knew"],
    answer: "B",
    analysis: "not until置于句首，主句需部分倒装，即把助动词did提到主语man之前，动词用原形know。结构：Not until + 时间状语 + did + 主语 + 动词原形。"
  },
  {
    id: 7,
    type: "single",
    module: "语法知识",
    chapter: "名词性从句",
    difficulty: "中等",
    question: "Choose the correct answer: _____ leaves the room last ought to turn off the lights.",
    options: ["A. Anyone", "B. The person", "C. Whoever", "D. Who"],
    answer: "C",
    analysis: "此处需要一个既能作主语从句引导词又含\"无论谁\"之意的词。whoever = anyone who，既引导名词性从句作主语，又含\"任何……的人\"之意。who只引导疑问，语义不符。"
  },
  {
    id: 8,
    type: "single",
    module: "语法知识",
    chapter: "强调结构",
    difficulty: "中等",
    question: "Choose the correct answer: It was not until she took off her dark glasses _____ I realized she was a famous film star.",
    options: ["A. that", "B. when", "C. then", "D. which"],
    answer: "A",
    analysis: "此题为强调句型It is/was...that...的变体，强调not until引导的时间状语从句。强调句结构：It is/was + 被强调部分 + that/who + 句子其余部分。被强调的是not until...部分，用that。"
  },
  {
    id: 9,
    type: "single",
    module: "语法知识",
    chapter: "语态",
    difficulty: "中等",
    question: "Choose the correct answer: The new library _____ next month is said to be the largest in our city.",
    options: ["A. to complete", "B. to be completed", "C. completing", "D. completed"],
    answer: "B",
    analysis: "此处不定式作后置定语修饰library，next month表将来，library与complete之间为被动关系，故用不定式的被动式to be completed。"
  },
  {
    id: 10,
    type: "single",
    module: "语法知识",
    chapter: "虚拟语气",
    difficulty: "较难",
    question: "Choose the correct answer: The doctor suggested that he _____ in bed for another two days.",
    options: ["A. stay", "B. stayed", "C. would stay", "D. had stayed"],
    answer: "A",
    analysis: "suggest, demand, insist, require, order, propose等动词后的宾语从句用虚拟语气，结构为(should) + 动词原形，should可省略。故选stay。"
  },
  {
    id: 11,
    type: "single",
    module: "语法知识",
    chapter: "状语从句",
    difficulty: "中等",
    question: "Choose the correct answer: _____ you have tried, you will understand how hard the work is.",
    options: ["A. Unless", "B. Once", "C. Until", "D. Though"],
    answer: "B",
    analysis: "once此处为连词，意为\"一旦\"，引导条件状语从句。句意为\"一旦你试过，你就会明白这份工作有多难\"。unless=if not，until直到，though虽然，语义不符。"
  },
  {
    id: 12,
    type: "single",
    module: "语法知识",
    chapter: "情态动词",
    difficulty: "中等",
    question: "Choose the correct answer: You _____ have seen the film last night, for you were in the library then.",
    options: ["A. can't", "B. mustn't", "C. needn't", "D. shouldn't"],
    answer: "A",
    analysis: "can't have done表示对过去事情的否定推测，意为\"不可能做过某事\"。mustn't表禁止，needn't have done表不必做却做了，shouldn't have done表本不该做却做了。"
  },

  // ========== 词汇知识（8题）==========
  {
    id: 13,
    type: "single",
    module: "词汇知识",
    chapter: "近义词辨析",
    difficulty: "中等",
    question: "Choose the correct answer: The teacher tried to _____ the students' interest in reading by introducing various genres of books.",
    options: ["A. arise", "B. arouse", "C. raise", "D. rise"],
    answer: "B",
    analysis: "arouse意为\"激发、引起\"，arouse interest为固定搭配，意为\"激发兴趣\"。arise不及物动词，意为\"出现、产生\"；raise及物动词，意为\"举起、提高\"；rise不及物动词，意为\"上升\"。"
  },
  {
    id: 14,
    type: "single",
    module: "词汇知识",
    chapter: "固定搭配",
    difficulty: "中等",
    question: "Choose the correct answer: The new curriculum puts great _____ on developing students' core competencies.",
    options: ["A. emphasis", "B. importance", "C. stress", "D. pressure"],
    answer: "A",
    analysis: "put emphasis on为固定搭配，意为\"强调、重视\"。importance通常与of搭配，stress与on搭配时多用lay stress on，pressure不与put搭配表此意。"
  },
  {
    id: 15,
    type: "single",
    module: "词汇知识",
    chapter: "词形变化",
    difficulty: "中等",
    question: "Choose the correct answer: The _____ of modern technology has greatly changed the way we learn English.",
    options: ["A. apply", "B. application", "C. applicable", "D. applicant"],
    answer: "B",
    analysis: "空格前有定冠词the，空格后有of，此处需要名词作主语。application为名词\"应用\"，apply为动词，applicable为形容词\"可适用的\"，applicant为名词\"申请人\"。"
  },
  {
    id: 16,
    type: "single",
    module: "词汇知识",
    chapter: "近义词辨析",
    difficulty: "中等",
    question: "Choose the correct answer: She has a _____ for languages and can speak five fluently.",
    options: ["A. gift", "B. present", "C. talent", "D. ability"],
    answer: "A",
    analysis: "have a gift for为固定搭配，意为\"有……的天赋\"，语气较强。talent也有天赋之意，但搭配为have a talent for；present意为\"礼物\"；ability指能力，不如gift强调天生的才能。"
  },
  {
    id: 17,
    type: "single",
    module: "词汇知识",
    chapter: "固定搭配",
    difficulty: "中等",
    question: "Choose the correct answer: The teacher's explanation was so _____ that even the weakest student could understand it.",
    options: ["A. confused", "B. confusing", "C. clear", "D. clarified"],
    answer: "C",
    analysis: "so...that句型中需用形容词修饰explanation。clear意为\"清楚的、易懂的\"，符合语境。confused和confusing含义不合语境（令人困惑），clarified为动词过去式/形容词，不搭配。"
  },
  {
    id: 18,
    type: "single",
    module: "词汇知识",
    chapter: "词形变化",
    difficulty: "中等",
    question: "Choose the correct answer: The students showed great _____ in the group discussion, which _____ the teacher deeply.",
    options: ["A. enthusiasm; impressed", "B. enthusiastic; impressed", "C. enthusiasm; impression", "D. enthusiastic; impression"],
    answer: "A",
    analysis: "第一空需名词作showed的宾语，enthusiasm为名词\"热情\"；第二空需谓语动词，impressed为动词过去式\"给……留下深刻印象\"。enthusiastic为形容词，impression为名词。"
  },
  {
    id: 19,
    type: "single",
    module: "词汇知识",
    chapter: "近义词辨析",
    difficulty: "较难",
    question: "Choose the correct answer: The school has _____ a series of measures to improve students' oral English.",
    options: ["A. adapted", "B. adopted", "C. adjusted", "D. admitted"],
    answer: "B",
    analysis: "adopt意为\"采纳、采取\"，adopt measures为固定搭配\"采取措施\"。adapt意为\"改编、适应\"，adjust意为\"调整\"，admit意为\"承认、准许进入\"。"
  },
  {
    id: 20,
    type: "single",
    module: "词汇知识",
    chapter: "固定搭配",
    difficulty: "中等",
    question: "Choose the correct answer: It is essential that students develop a good _____ of reading strategies.",
    options: ["A. command", "B. control", "C. master", "D. grasp"],
    answer: "A",
    analysis: "have a good command of为固定搭配，意为\"精通、很好地掌握\"。master为动词\"掌握\"，不与a good...of搭配；grasp作名词时指\"理解、抓住\"，搭配不当；control不用于此语境。"
  },

  // ========== 阅读理解（5题）==========
  {
    id: 21,
    type: "single",
    module: "阅读理解",
    chapter: "教育类短文",
    difficulty: "中等",
    question: "Read the following passage and answer the question:\n\nReading is a fundamental skill that underpins all learning. Research has shown that students who read extensively tend to have larger vocabularies, better writing skills, and greater general knowledge. Moreover, reading for pleasure is strongly linked to academic achievement. However, in the digital age, many students spend more time on social media than with books, which has led to a decline in reading habits. Teachers play a crucial role in fostering a love of reading by introducing students to a wide range of texts and creating an environment where reading is valued.\n\nAccording to the passage, what is one of the main causes of the decline in reading habits?",
    options: ["A. The lack of available books", "B. The digital age and social media", "C. Poor teaching methods", "D. The difficulty of reading materials"],
    answer: "B",
    analysis: "文章第三句提到\"in the digital age, many students spend more time on social media than with books, which has led to a decline in reading habits\"，明确指出数字时代和社交媒体是阅读习惯下降的主要原因。"
  },
  {
    id: 22,
    type: "single",
    module: "阅读理解",
    chapter: "教育类短文",
    difficulty: "中等",
    question: "Read the following passage and answer the question:\n\nReading is a fundamental skill that underpins all learning. Research has shown that students who read extensively tend to have larger vocabularies, better writing skills, and greater general knowledge. Moreover, reading for pleasure is strongly linked to academic achievement. However, in the digital age, many students spend more time on social media than with books, which has led to a decline in reading habits. Teachers play a crucial role in fostering a love of reading by introducing students to a wide range of texts and creating an environment where reading is valued.\n\nWhat is the main idea of the passage?",
    options: ["A. Social media is harmful to students", "B. Teachers should ban social media", "C. Reading is important and teachers should foster students' reading habits", "D. Students who read more get better grades"],
    answer: "C",
    analysis: "文章首句点明阅读的重要性，末句指出教师在培养阅读习惯中的关键作用，C项概括了文章主旨。A、B、D项都只涉及部分内容或过度推断。"
  },
  {
    id: 23,
    type: "single",
    module: "阅读理解",
    chapter: "语言学习类短文",
    difficulty: "中等",
    question: "Read the following passage and answer the question:\n\nCommunicative Language Teaching (CLT) emphasizes the communicative competence as the goal of language learning. In CLT classrooms, the focus shifts from grammatical accuracy to fluency and meaningful interaction. Teachers are no longer the sole source of knowledge but facilitators who create authentic communicative situations. Pair work and group work are frequently used to encourage negotiation of meaning. Critics argue that CLT may neglect grammatical accuracy, but proponents believe that accuracy develops naturally through meaningful communication.\n\nWhat does CLT primarily emphasize?",
    options: ["A. Grammatical accuracy", "B. Vocabulary memorization", "C. Communicative competence and fluency", "D. Translation skills"],
    answer: "C",
    analysis: "文章首句即指出CLT强调交际能力(communicative competence)作为语言学习的目标，第二句进一步说明焦点从语法准确性转向流利度和有意义的交流。C项最准确。"
  },
  {
    id: 24,
    type: "single",
    module: "阅读理解",
    chapter: "语言学习类短文",
    difficulty: "中等",
    question: "Read the following passage and answer the question:\n\nCommunicative Language Teaching (CLT) emphasizes the communicative competence as the goal of language learning. In CLT classrooms, the focus shifts from grammatical accuracy to fluency and meaningful interaction. Teachers are no longer the sole source of knowledge but facilitators who create authentic communicative situations. Pair work and group work are frequently used to encourage negotiation of meaning. Critics argue that CLT may neglect grammatical accuracy, but proponents believe that accuracy develops naturally through meaningful communication.\n\nAccording to the passage, what role do teachers play in CLT classrooms?",
    options: ["A. The sole source of knowledge", "B. Facilitators who create authentic communicative situations", "C. Strict grammar correctors", "D. Silent observers"],
    answer: "B",
    analysis: "文章第四句指出\"Teachers are no longer the sole source of knowledge but facilitators who create authentic communicative situations\"，教师不再是唯一的知识来源，而是创造真实交际情境的促进者。"
  },
  {
    id: 25,
    type: "single",
    module: "阅读理解",
    chapter: "语言学习类短文",
    difficulty: "较难",
    question: "Read the following passage and answer the question:\n\nCommunicative Language Teaching (CLT) emphasizes the communicative competence as the goal of language learning. In CLT classrooms, the focus shifts from grammatical accuracy to fluency and meaningful interaction. Teachers are no longer the sole source of knowledge but facilitators who create authentic communicative situations. Pair work and group work are frequently used to encourage negotiation of meaning. Critics argue that CLT may neglect grammatical accuracy, but proponents believe that accuracy develops naturally through meaningful communication.\n\nHow do proponents of CLT respond to the criticism that CLT neglects grammatical accuracy?",
    options: ["A. They agree that grammar should be taught separately", "B. They believe accuracy develops naturally through meaningful communication", "C. They suggest combining CLT with traditional grammar teaching", "D. They argue that accuracy is not important"],
    answer: "B",
    analysis: "文章末句指出proponents believe that accuracy develops naturally through meaningful communication，支持者认为语法准确性通过有意义的交际自然形成。"
  },

  // ========== 翻译题（5题）==========
  {
    id: 26,
    type: "translate",
    module: "翻译",
    chapter: "英译汉",
    difficulty: "中等",
    question: "Translate the following English sentence into Chinese:\n\nA good teacher is not someone who teaches students what to think, but someone who teaches students how to think.",
    options: null,
    answer: "一位好老师不是教学生思考什么的人，而是教学生如何思考的人。",
    analysis: "本题考查not...but...（不是……而是……）句型的翻译，以及how to think（如何思考）的表达。注意what to think（思考什么）与how to think（如何思考）的对比关系。"
  },
  {
    id: 27,
    type: "translate",
    module: "翻译",
    chapter: "汉译英",
    difficulty: "中等",
    question: "Translate the following Chinese sentence into English:\n\n教师不仅要传授知识，还要培养学生的批判性思维能力。",
    options: null,
    answer: "Teachers should not only impart knowledge but also cultivate students' critical thinking skills.",
    analysis: "本题考查not only...but also...（不仅……而且……）的翻译。\"传授知识\"译为impart knowledge，\"培养\"译为cultivate/develop/foster，\"批判性思维能力\"译为critical thinking skills。"
  },
  {
    id: 28,
    type: "translate",
    module: "翻译",
    chapter: "英译汉",
    difficulty: "中等",
    question: "Translate the following English sentence into Chinese:\n\nThe implementation of the new English curriculum standards requires teachers to transform their roles from knowledge transmitters to learning facilitators.",
    options: null,
    answer: "新课标的实施要求教师将自身角色从知识传授者转变为学习促进者。",
    analysis: "implementation（实施），English curriculum standards（英语课程标准），transform roles（转变角色），knowledge transmitters（知识传授者），learning facilitators（学习促进者）。注意from...to...的翻译。"
  },
  {
    id: 29,
    type: "translate",
    module: "翻译",
    chapter: "汉译英",
    difficulty: "较难",
    question: "Translate the following Chinese sentence into English:\n\n英语教学应以学生为中心，注重培养学生的综合语言运用能力。",
    options: null,
    answer: "English teaching should be student-centered and focus on developing students' comprehensive language use ability.",
    analysis: "\"以学生为中心\"译为student-centered，\"注重\"译为focus on / lay emphasis on，\"综合语言运用能力\"译为comprehensive language use ability或overall language competence。"
  },
  {
    id: 30,
    type: "translate",
    module: "翻译",
    chapter: "英译汉",
    difficulty: "中等",
    question: "Translate the following English sentence into Chinese:\n\nThe ultimate goal of English education is not merely to help students pass examinations, but to enable them to use English as a tool for communication and lifelong learning.",
    options: null,
    answer: "英语教育的最终目标不仅仅是帮助学生通过考试，而是使他们能够将英语作为交际和终身学习的工具。",
    analysis: "ultimate goal（最终目标），not merely...but...（不仅……而且/而是……），enable sb. to do sth.（使某人能够做某事），lifelong learning（终身学习）。注意as a tool for的翻译。"
  },

  // ========== 英美文学（5题）==========
  {
    id: 31,
    type: "single",
    module: "英美文学",
    chapter: "英国文学",
    difficulty: "中等",
    question: "Which of the following works is NOT written by William Shakespeare?",
    options: ["A. Hamlet", "B. Romeo and Juliet", "C. Paradise Lost", "D. The Merchant of Venice"],
    answer: "C",
    analysis: "Paradise Lost（《失乐园》）是约翰·弥尔顿（John Milton）的史诗作品，而非莎士比亚所作。Hamlet、Romeo and Juliet、The Merchant of Venice均为莎士比亚的代表作。"
  },
  {
    id: 32,
    type: "single",
    module: "英美文学",
    chapter: "英国文学",
    difficulty: "中等",
    question: "Who is widely regarded as the Father of English Poetry and is best known for The Canterbury Tales?",
    options: ["A. William Langland", "B. Geoffrey Chaucer", "C. Thomas Malory", "D. Edmund Spenser"],
    answer: "B",
    analysis: "杰弗里·乔叟（Geoffrey Chaucer，约1343-1400）被誉为\"英国诗歌之父\"，其代表作《坎特伯雷故事集》（The Canterbury Tales）是英国文学史上的经典之作，开创了英国文学的现实主义传统。"
  },
  {
    id: 33,
    type: "single",
    module: "英美文学",
    chapter: "美国文学",
    difficulty: "中等",
    question: "Which of the following writers is a representative of American Romanticism and wrote The Scarlet Letter?",
    options: ["A. Mark Twain", "B. Ernest Hemingway", "C. Nathaniel Hawthorne", "D. F. Scott Fitzgerald"],
    answer: "C",
    analysis: "纳撒尼尔·霍桑（Nathaniel Hawthorne）是美国浪漫主义文学的代表作家，代表作《红字》（The Scarlet Letter）是美国文学经典。Mark Twain是现实主义代表，Hemingway是迷惘的一代代表，Fitzgerald是爵士时代代表。"
  },
  {
    id: 34,
    type: "single",
    module: "英美文学",
    chapter: "美国文学",
    difficulty: "中等",
    question: "Which literary movement is Ernest Hemingway most closely associated with, and what is his famous writing style?",
    options: ["A. Romanticism; ornate style", "B. Modernism; iceberg theory", "C. Realism; stream of consciousness", "D. Naturalism; deterministic view"],
    answer: "B",
    analysis: "海明威与现代主义文学密切相关，他提出了著名的\"冰山理论\"（Iceberg Theory/冰山原则），即文字表面的故事只是冰山一角，八分之七的内涵隐藏在文字之下。其文风简洁有力。"
  },
  {
    id: 35,
    type: "single",
    module: "英美文学",
    chapter: "英国文学",
    difficulty: "较难",
    question: "Which of the following is Jane Austen's novel that begins with the famous line: \"It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.\"?",
    options: ["A. Sense and Sensibility", "B. Pride and Prejudice", "C. Emma", "D. Mansfield Park"],
    answer: "B",
    analysis: "此句出自简·奥斯汀的《傲慢与偏见》（Pride and Prejudice）开篇第一句，是英国文学史上最著名的开头之一，以反讽的语气点出了婚姻与财富的社会主题。"
  },

  // ========== 英美概况（4题）==========
  {
    id: 36,
    type: "single",
    module: "英美概况",
    chapter: "英国概况",
    difficulty: "中等",
    question: "Which of the following about the United Kingdom is correct?",
    options: ["A. The UK is made up of England, Scotland, Wales and Northern Ireland", "B. The UK consists of England, Scotland, Wales and the Republic of Ireland", "C. The UK includes England, Scotland, Wales and Ireland", "D. The UK is composed of Great Britain and the Republic of Ireland"],
    answer: "A",
    analysis: "英国（The United Kingdom of Great Britain and Northern Ireland）由英格兰、苏格兰、威尔士和北爱尔兰四部分组成。爱尔兰共和国（the Republic of Ireland）是独立国家，不属于英国。"
  },
  {
    id: 37,
    type: "single",
    module: "英美概况",
    chapter: "美国概况",
    difficulty: "中等",
    question: "How many states are there in the United States of America?",
    options: ["A. 48", "B. 49", "C. 50", "D. 51"],
    answer: "C",
    analysis: "美国共有50个州，其中48个本土州、阿拉斯加州和夏威夷州。华盛顿哥伦比亚特区（Washington, D.C.）是首都所在地，不是一个州。1959年夏威夷成为美国第50个州。"
  },
  {
    id: 38,
    type: "single",
    module: "英美概况",
    chapter: "英国概况",
    difficulty: "中等",
    question: "The British Parliament consists of the Sovereign (the Monarch), the House of Lords, and _____.",
    options: ["A. the House of Commons", "B. the House of Representatives", "C. the Senate", "D. the Congress"],
    answer: "A",
    analysis: "英国议会由三部分组成：君主（the Sovereign/Monarch）、上议院（the House of Lords）和下议院（the House of Commons）。House of Representatives、Senate和Congress是美国国会用语。"
  },
  {
    id: 39,
    type: "single",
    module: "英美概况",
    chapter: "美国概况",
    difficulty: "中等",
    question: "Which of the following American holidays is celebrated on the fourth Thursday of November?",
    options: ["A. Independence Day", "B. Thanksgiving Day", "C. Christmas Day", "D. Halloween"],
    answer: "B",
    analysis: "感恩节（Thanksgiving Day）在每年11月的第四个星期四，是美国传统节日，源于早期移民感谢印第安人帮助和丰收。Independence Day为7月4日，Christmas为12月25日，Halloween为10月31日。"
  },

  // ========== 英语语言学（4题）==========
  {
    id: 40,
    type: "single",
    module: "英语语言学",
    chapter: "语音学",
    difficulty: "中等",
    question: "Which of the following is a voiced bilabial stop consonant in English?",
    options: ["A. /p/", "B. /b/", "C. /t/", "D. /d/"],
    answer: "B",
    analysis: "/b/是双唇音（bilabial）、塞音（stop/plosive）、浊辅音（voiced）。/p/是双唇塞音但清音（voiceless）。/t/是齿龈塞音清音，/d/是齿龈塞音浊音。双唇音需上下唇接触发声。"
  },
  {
    id: 41,
    type: "single",
    module: "英语语言学",
    chapter: "形态学",
    difficulty: "中等",
    question: "In the word \"unbelievable\", which of the following correctly identifies its morphological structure?",
    options: ["A. un- + believe + -able", "B. un- + believ + -able", "C. unbelieve + -able", "D. un- + believe + able"],
    answer: "A",
    analysis: "unbelievable由三个语素构成：前缀un-（否定前缀\"不\"）+ 词根believe（信）+ 后缀-able（形容词后缀\"可……的\"）。注意able是后缀形式-able，而非独立的形容词able。"
  },
  {
    id: 42,
    type: "single",
    module: "英语语言学",
    chapter: "句法学",
    difficulty: "中等",
    question: "In X-bar theory, the structure of a noun phrase \"the student's book\" can be analyzed as having the specifier _____ and the head _____.",
    options: ["A. the student's; book", "B. the; student's book", "C. the student; 's book", "D. book; the student's"],
    answer: "A",
    analysis: "在X阶理论中，the student's book是名词短语（NP），the student's是限定词短语（DP），作 specifier（标定语），book是核心词（head/head noun），构成N-bar（N'）的中心。"
  },
  {
    id: 43,
    type: "single",
    module: "英语语言学",
    chapter: "语用学",
    difficulty: "中等",
    question: "According to Grice's Cooperative Principle, the maxim of _____ requires that what is said be relevant to the ongoing conversation.",
    options: ["A. Quality", "B. Quantity", "C. Relation", "D. Manner"],
    answer: "C",
    analysis: "格莱斯合作原则包括四条准则：质量准则（Maxim of Quality，说真话）、数量准则（Maxim of Quantity，信息量适当）、关系准则（Maxim of Relation，所说内容与当前对话相关）、方式准则（Maxim of Manner，表达清楚有序）。"
  },

  // ========== 课程标准与教学论（7题）==========
  {
    id: 44,
    type: "single",
    module: "课程标准与教学论",
    chapter: "义务教育英语课程标准",
    difficulty: "中等",
    question: "According to the Compulsory Education English Curriculum Standards (2022 Edition), English courses should focus on cultivating students' _____.",
    options: ["A. test-taking skills", "B. core competencies", "C. vocabulary size", "D. grammar rules"],
    answer: "B",
    analysis: "2022版义务教育英语课程标准强调以核心素养为导向。英语学科核心素养包括语言能力、文化意识、思维品质和学习能力四个维度。课程目标从综合语言运用能力转向核心素养。"
  },
  {
    id: 45,
    type: "single",
    module: "课程标准与教学论",
    chapter: "高中英语课程标准",
    difficulty: "中等",
    question: "The General Senior High School English Curriculum Standards (2017 Edition, 2020 Revision) proposes six components of English subject competencies. Which of the following is NOT one of them?",
    options: ["A. Language ability", "B. Cultural awareness", "C. Thinking quality", "D. Translation ability"],
    answer: "D",
    analysis: "高中英语课程标准（2017版2020修订）提出英语学科核心素养四维度：语言能力、文化意识、思维品质和学习能力。翻译能力不属于核心素养维度，而是语言能力下的具体技能。"
  },
  {
    id: 46,
    type: "single",
    module: "课程标准与教学论",
    chapter: "教学方法",
    difficulty: "中等",
    question: "Which of the following teaching methods emphasizes the use of the target language in real-life communication and was developed as a reaction against grammar-translation method?",
    options: ["A. Grammar-Translation Method", "B. Audio-Lingual Method", "C. Communicative Language Teaching", "D. Total Physical Response"],
    answer: "C",
    analysis: "交际语言教学法（CLT）强调在真实交际中使用目标语，是作为对语法翻译法的反思和替代而发展起来的。CLT以培养交际能力为目标，注重意义交流和流利度。"
  },
  {
    id: 47,
    type: "single",
    module: "课程标准与教学论",
    chapter: "教学方法",
    difficulty: "中等",
    question: "In the PPP model of language teaching, what do the three P's stand for?",
    options: ["A. Practice, Production, Presentation", "B. Presentation, Practice, Production", "C. Preview, Practice, Perform", "D. Prepare, Present, Produce"],
    answer: "B",
    analysis: "PPP教学模式指Presentation（呈现新语言）、Practice（操练）、Production（产出运用）。教师先呈现新知识，学生在控制下操练，最后自由运用新语言完成交际任务。这是语法教学常用模式。"
  },
  {
    id: 48,
    type: "single",
    module: "课程标准与教学论",
    chapter: "教学设计",
    difficulty: "中等",
    question: "In lesson planning, which of the following is the most appropriate order of the three instructional objectives?",
    options: ["A. Knowledge objective → Ability objective → Affective objective", "B. Ability objective → Knowledge objective → Affective objective", "C. Affective objective → Knowledge objective → Ability objective", "D. They should be designed simultaneously without a fixed order"],
    answer: "A",
    analysis: "教学目标设计通常遵循从知识到能力到情感的递进层次：知识目标→能力目标→情感态度目标，体现从认知到实践到情感的发展逻辑，符合布鲁姆教育目标分类学由低到高的层次。"
  },
  {
    id: 49,
    type: "single",
    module: "课程标准与教学论",
    chapter: "义务教育英语课程标准",
    difficulty: "中等",
    question: "According to the Compulsory Education English Curriculum Standards (2022 Edition), which of the following is NOT one of the four dimensions of English subject core competencies?",
    options: ["A. Language ability", "B. Cultural awareness", "C. Thinking quality", "D. Listening ability"],
    answer: "D",
    analysis: "2022版义务教育课标将英语学科核心素养定为四维度：语言能力、文化意识、思维品质、学习能力。听力是语言能力下的具体技能之一，不单独作为核心素养维度。"
  },
  {
    id: 50,
    type: "single",
    module: "课程标准与教学论",
    chapter: "教学评价",
    difficulty: "中等",
    question: "Which of the following best describes the formative assessment in English teaching?",
    options: ["A. It focuses on the final exam results", "B. It is conducted only at the end of a term", "C. It provides ongoing feedback during the learning process to improve teaching and learning", "D. It is used to rank students according to their scores"],
    answer: "C",
    analysis: "形成性评价（Formative Assessment）是在学习过程中持续进行的评价，旨在提供及时反馈、改进教学与学习，强调过程性。与终结性评价（Summative Assessment，如期中、期末考试）不同，不以排名或最终成绩为目的。"
  },

  // ========== 填空题（5题）==========
  {
    id: 51,
    type: "fill",
    module: "语法知识",
    chapter: "时态",
    difficulty: "中等",
    question: "Fill in the blank with the correct form of the verb in brackets:\n\nBy the time you get home tomorrow, I _____ (finish) all the work.",
    options: null,
    answer: "will have finished",
    analysis: "by the time引导的时间状语从句中用一般现在时表将来（get），主句表示将来某时间前已完成的动作，需用将来完成时will have done。"
  },
  {
    id: 52,
    type: "fill",
    module: "词汇知识",
    chapter: "固定搭配",
    difficulty: "中等",
    question: "Fill in the blank with an appropriate word:\n\nThe teacher's encouragement gave the students confidence and _____ them to work harder.",
    options: null,
    answer: "inspired / motivated / encouraged",
    analysis: "此处需动词，意为\"激励、鼓舞\"。可用inspired、motivated或encouraged。give sb. confidence and inspire/motivate sb. to do sth.为常见搭配。"
  },
  {
    id: 53,
    type: "fill",
    module: "课程标准与教学论",
    chapter: "义务教育英语课程标准",
    difficulty: "中等",
    question: "Fill in the blank:\n\nAccording to the Compulsory Education English Curriculum Standards (2022 Edition), the total course objectives include four dimensions of core competencies: language ability, cultural awareness, _____, and learning ability.",
    options: null,
    answer: "thinking quality",
    analysis: "2022版义务教育英语课程标准提出英语学科核心素养四维度：语言能力、文化意识、思维品质和学习能力。Thinking quality（思维品质）是其中之一。"
  },
  {
    id: 54,
    type: "fill",
    module: "英语语言学",
    chapter: "语音学",
    difficulty: "中等",
    question: "Fill in the blank:\n\nIn English phonetics, the two consonants /p/ and /b/ differ in _____, with /p/ being voiceless and /b/ being voiced.",
    options: null,
    answer: "voicing",
    analysis: "/p/和/b/都是双唇塞音（bilabial stop），它们的区别在于发音时声带是否振动：/p/是清音，/b/是浊音。这种区别称为voicing（清浊对立）。"
  },
  {
    id: 55,
    type: "fill",
    module: "英美文学",
    chapter: "英国文学",
    difficulty: "中等",
    question: "Fill in the blank:\n\nCharlotte Brontë is best known for her novel _____, which tells the story of an orphan girl who becomes a governess and falls in love with Mr. Rochester.",
    options: null,
    answer: "Jane Eyre",
    analysis: "夏洛蒂·勃朗特（Charlotte Brontë）的代表作是《简·爱》（Jane Eyre），讲述了孤儿简·爱成长为家庭教师并与罗切斯特先生相爱的故事，是英国文学经典之作。"
  },

  // ========== 简答题（5题）==========
  {
    id: 56,
    type: "short",
    module: "课程标准与教学论",
    chapter: "义务教育英语课程标准",
    difficulty: "中等",
    question: "Briefly describe the four dimensions of English subject core competencies as proposed in the Compulsory Education English Curriculum Standards (2022 Edition).",
    options: null,
    answer: "英语学科核心素养包括四个维度：1）语言能力：在特定情境中通过听、说、读、看、写等方式理解和表达意义的能力；2）文化意识：对中外文化的理解和对优秀文化的认同，包括跨文化认知、态度和行为选择；3）思维品质：思维在逻辑性、批判性、创新性等方面所表现的能力和水平；4）学习能力：主动拓宽学习渠道、积极运用和调适学习策略的能力。",
    analysis: "此题考查2022版义务教育课标核心素养四维度的内涵，需准确记忆每个维度的名称和基本含义。2022版新增\"看（viewing）\"为语言技能。"
  },
  {
    id: 57,
    type: "short",
    module: "课程标准与教学论",
    chapter: "教学方法",
    difficulty: "中等",
    question: "Briefly explain the difference between formative assessment and summative assessment in English language teaching.",
    options: null,
    answer: "形成性评价与终结性评价的区别：1）目的不同：形成性评价关注学习过程，旨在提供及时反馈、调整教学策略、促进学习；终结性评价关注学习结果，旨在评定学业成绩；2）时间不同：形成性评价在学习过程中持续进行，终结性评价通常在学习阶段结束时进行（如期末考试）；3）方式不同：形成性评价多样（课堂观察、学习档案袋、口头反馈等），终结性评价多为笔试或标准化测试；4）作用不同：形成性评价重在诊断和改进，终结性评价重在鉴定和选拔。",
    analysis: "此题考查教学评价的基本概念。新课标倡导以形成性评价为主，注重评价的诊断、激励和发展功能，强调\"以评促学、以评促教\"。"
  },
  {
    id: 58,
    type: "short",
    module: "语法知识",
    chapter: "虚拟语气",
    difficulty: "中等",
    question: "Briefly explain the three types of subjunctive mood in conditional sentences (conditional unreal sentences) and give one example for each.",
    options: null,
    answer: "条件虚拟语气三种类型：1）与现在事实相反：if从句用一般过去时（be动词用were），主句用would/should/could/might + 动词原形。例：If I were you, I would accept the offer. 2）与过去事实相反：if从句用过去完成时（had done），主句用would/should/could/might + have done。例：If he had studied harder, he would have passed the exam. 3）与将来事实相反：if从句用一般过去时、were to或should + 动词原形，主句用would/should/could/might + 动词原形。例：If it were to rain tomorrow, we would cancel the trip.",
    analysis: "此题考查虚拟语气条件句的三大类型，需准确记忆从句和主句的谓语动词形式，并给出正确例句。"
  },
  {
    id: 59,
    type: "short",
    module: "英语语言学",
    chapter: "语用学",
    difficulty: "中等",
    question: "Briefly explain Grice's Cooperative Principle and its four maxims.",
    options: null,
    answer: "格莱斯合作原则（Cooperative Principle）由哲学家格莱斯提出，指交际双方应遵循\"合作\"的基本原则，使对话顺利进行。包含四条准则：1）质量准则（Maxim of Quality）：不说自己认为不真实或缺乏证据的话；2）数量准则（Maxim of Quantity）：提供的信息量适当，不多不少；3）关系准则（Maxim of Relation）：所说内容与当前对话相关；4）方式准则（Maxim of Manner）：表达简明有序，避免歧义和晦涩。违反准则可产生\"会话含义\"（conversational implicature）。",
    analysis: "此题考查语用学核心理论——合作原则及其四准则，需准确说明每条准则的内容，可提及违反准则产生会话含义的机制。"
  },
  {
    id: 60,
    type: "short",
    module: "课程标准与教学论",
    chapter: "高中英语课程标准",
    difficulty: "中等",
    question: "Briefly describe the six key components (elements) of English subject competencies in the General Senior High School English Curriculum Standards (2017 Edition, 2020 Revision).",
    options: null,
    answer: "高中英语学科核心素养的六要素（六维整合课程内容）：1）主题语境（Theme/Context）：涵盖人与自我、人与社会、人与自然三大主题语境；2）语篇类型：包括记叙文、说明文、议论文、应用文等连续性文本和非连续性文本；3）语言知识：语音、词汇、语法、语篇、语用知识；4）文化知识：中外文化知识及优秀文化传承；5）语言技能：听、说、读、看、写等理解性与表达性技能；6）学习策略：认知策略、调控策略、交际策略、资源策略等。六要素整合指向核心素养发展。",
    analysis: "此题考查高中课标（2017版2020修订）的六要素整合课程内容，需准确记忆六大要素名称。注意2020修订版将\"听、说、读、写\"扩展为\"听、说、读、看、写\"。"
  },

  // ========== 案例分析题（5题）==========
  {
    id: 61,
    type: "case",
    module: "课程标准与教学论",
    chapter: "案例分析",
    difficulty: "较难",
    question: "Read the following teaching case and answer the questions:\n\nA teacher was teaching a reading lesson on environmental protection. The teacher first showed a video about pollution, then asked students to read the text quickly and answer three questions. Next, the teacher explained all the new words and grammar points in the text in detail. Finally, the teacher asked students to translate the text sentence by sentence into Chinese. The students finished the exercises and the class ended.\n\nQuestions:\n(1) What teaching approach does this lesson mainly reflect? (2) What are the problems with this lesson design? (3) How would you improve this lesson?",
    options: null,
    answer: "(1) 该课主要体现了传统的语法翻译法（Grammar-Translation Method）和以教师为中心的教学模式，过度关注语言知识讲解和翻译练习，忽视了对文本意义的理解和学生综合语言运用能力的培养。\n(2) 问题：①教学目标单一，仅关注词汇和语法知识，未体现核心素养四维度目标；②阅读前活动有效（视频导入），但阅读过程中缺乏分层阅读设计（如略读、寻读、细读等），直接进入知识讲解；③教师讲解过多，学生被动接受，缺乏师生互动和生生互动；④翻译练习过于机械，缺乏有意义的语言产出活动，如讨论、角色扮演、写作等；⑤未关注学生思维品质培养和文化意识提升。\n(3) 改进建议：①明确核心素养四维教学目标（语言能力、文化意识、思维品质、学习能力）；②设计pre-reading（激活背景知识、预测内容）、while-reading（分层阅读：skimming获取主旨、scanning查找细节、close reading分析语篇结构）和post-reading（讨论环保行动、写倡议书、小组展示）三阶段阅读活动；③减少教师讲解时间，增加学生自主探究和合作学习；④设计迁移创新类活动，如\"设计一份环保方案\"等，促使学生用英语解决真实问题；⑤融入文化意识培养，引导学生比较中外环保理念。",
    analysis: "案例分析题需从教学理念、教学目标、教学过程、教学方法、教学评价等方面系统分析。本案例反映了传统英语教学中重知识轻能力、重讲解轻实践的问题，改进应紧扣新课标核心素养理念。"
  },
  {
    id: 62,
    type: "case",
    module: "课程标准与教学论",
    chapter: "案例分析",
    difficulty: "较难",
    question: "Read the following teaching case and answer the questions:\n\nA teacher designed a speaking lesson with the topic \"My Favorite Festival\". The teacher provided a dialogue model and asked students to practice in pairs. However, when students were asked to talk about their own favorite festival, most students could only read from the textbook and were unable to express their own ideas freely.\n\nQuestions:\n(1) Analyze the possible reasons for the students' inability to speak freely. (2) What suggestions would you give to improve the teaching design?",
    options: null,
    answer: "(1) 原因分析：①输入不充分：教师仅提供对话模型，未提供足够的话题语言支撑（如节日相关词汇、句型、文化背景）；②缺乏语言脚手架：未设置梯度任务，学生从模仿直接到自由产出，跨度太大；③话题可能与学生生活经验有距离：部分学生对节日文化了解不足，缺乏表达内容；④课堂氛围不够安全：学生怕出错，缺乏表达自信；⑤未设计信息差活动，学生缺乏真实交际动机。\n(2) 改进建议：①丰富语言输入：在口语活动前，通过图片、视频、阅读材料等多模态资源激活学生关于节日的背景知识和语言储备；②搭建语言脚手架：提供节日话题相关的词汇库、句型库、功能用语库，逐步从控制性操练到半控制性再到自由表达；③设计梯度任务：先模仿对话→再改编对话→最后自由表达，循序渐进；④创设真实交际情境：设计信息差活动，如\"调查同学最喜欢的节日并汇报\"，让学生有真实交际需求；⑤营造安全氛围：鼓励表达、宽容错误、采用同伴互评，降低焦虑；⑥融入文化意识：引导学生了解中外节日文化差异，丰富表达内容。",
    analysis: "口语教学案例分析需关注输入与输出的关系、语言支撑的搭建、任务设计的梯度性和真实性。根据\"输入假说\"和\"输出假说\"理论分析教学问题。"
  },
  {
    id: 63,
    type: "case",
    module: "课程标准与教学论",
    chapter: "案例分析",
    difficulty: "较难",
    question: "Read the following teaching case and answer the questions:\n\nIn a vocabulary lesson, a teacher presented 20 new words at the beginning of the class, then asked students to copy each word five times and memorize them. After that, the teacher gave a dictation. Most students scored low on the dictation.\n\nQuestions:\n(1) What problems exist in this vocabulary teaching approach? (2) Based on modern vocabulary teaching principles, how would you redesign this lesson?",
    options: null,
    answer: "(1) 问题分析：①一次性呈现20个生词数量过多，超出学生短时记忆容量，不符合认知负荷理论；②教学方式单一：抄写和死记硬背脱离语境，学生无法在真实交际中使用词汇；③缺乏词汇学习策略指导：未教学生利用构词法、上下文猜测、联想等方法记忆单词；④评价方式单一：仅用听写检测拼写，未考查词汇的理解和运用能力；⑤忽视词汇的多维属性：词汇教学应涵盖音、形、义、用四个维度，此处仅关注形和义。\n(2) 重新设计建议：①分批呈现：将20个生词分为3-4组，结合阅读语篇分次呈现，降低认知负荷；②在语境中学习：将词汇融入阅读文本，引导学生在语境中猜测词义，再讲解确认；③运用多种词汇教学策略：利用图片、实物、动作等直观手段；利用构词法（前缀、后缀、合成）分析词形；利用语义场、词汇网建立词汇关联；④设计多层次操练活动：从认读→配对→填空→造句→自由运用，由控制到开放；⑤多元化评价：采用词汇运用任务（如编对话、写短文）代替单一听写，考查音、形、义、用多维度掌握情况；⑥渗透学习策略：引导学生使用词典、构词法、记忆策略等，培养自主学习词汇的能力。",
    analysis: "词汇教学应遵循\"音形义用\"四位一体原则，在语境中教学，注重学习策略培养。案例中机械抄写和听写是传统教学的典型问题。"
  },
  {
    id: 64,
    type: "case",
    module: "课程标准与教学论",
    chapter: "案例分析",
    difficulty: "较难",
    question: "Read the following teaching case and answer the questions:\n\nA teacher designed a writing lesson on the topic \"A Letter to My Future Self\". The teacher first showed a sample letter, then asked students to write their own letters independently within 20 minutes. After collecting all the letters, the teacher marked them at home and returned them the next day with brief comments like \"Good!\" or \"Try harder.\"\n\nQuestions: (1) What are the main issues in the writing instruction process? (2) How would you improve the writing teaching design based on the Process Writing Approach?",
    options: null,
    answer: "(1) 主要问题：①写作前缺乏充分的写前指导：仅展示范文，未激活背景知识、头脑风暴、搭建语言支架；②写作过程中缺乏指导和反馈：学生独立写作20分钟，教师未在过程中给予帮助；③评价方式单一且反馈滞后：仅教师批改，学生第二天才收到笼统评语，无法及时修改；④未利用同伴互评和自评，评价主体单一；⑤忽视写作过程的阶段性和迭代性，将写作视为一次性产出。\n(2) 基于过程写作法（Process Writing Approach）的改进：①Pre-writing（写前阶段）：激活背景知识，头脑风暴未来设想，提供语言支架（句型库、词汇库），分析范文结构和语言特点；②Drafting（起草阶段）：学生根据框架和语言支撑写初稿，教师巡回指导；③Revising（修改阶段）：学生交换初稿，同伴互评（提供修改建议：内容、结构、语言），根据反馈修改；④Editing（编辑阶段）：关注语言准确性（拼写、语法、标点），可使用检查清单（checklist）；⑤Publishing（发表阶段）：将修改后的终稿在班级展示栏展示或装订成册，增强成就感和读者意识；⑥评价方式多元：过程性评价与终结性评价结合，自评、互评、师评结合，关注写作过程各阶段的表现。",
    analysis: "过程写作法强调写作是一个循环反复的过程，包括写前、起草、修改、编辑、发表五个阶段。案例中教师将写作简化为\"写→收→批→发\"，忽视写作过程的指导。"
  },
  {
    id: 65,
    type: "case",
    module: "课程标准与教学论",
    chapter: "教学设计",
    difficulty: "较难",
    question: "Design a 45-minute reading lesson plan for the following text. The text is about a Chinese student's experience of studying abroad and the cultural differences she encountered. The target students are Senior Grade 1 students.\n\nRequirements: (1) Write the teaching objectives based on the core competencies. (2) Design the main teaching procedures (pre-reading, while-reading, post-reading). (3) Briefly explain the design rationale.",
    options: null,
    answer: "教学设计：\n\n一、教学目标（基于核心素养四维度）：\n1. 语言能力目标：能够运用略读策略获取文章主旨，运用寻读策略查找文化差异的具体表现；能用英语简要复述文章内容，就文化差异话题表达个人观点。\n2. 文化意识目标：了解中外文化差异（如课堂互动方式、社交礼仪、饮食文化等），增强跨文化理解和包容意识，坚定文化自信。\n3. 思维品质目标：分析文化差异产生的原因，评价文中人物应对文化差异的方式，提出自己面对文化差异时的策略。\n4. 学习能力目标：运用预测、略读、寻读等阅读策略，自主建构知识导图梳理文章信息。\n\n二、教学过程：\nStep 1 Pre-reading (8 min): \n① 激活背景：展示留学图片，提问\"What would you do if you studied abroad?\"激活学生已有知识；② 预测内容：根据标题和插图预测文章内容；③ 词汇预热：呈现关键词（culture shock, adapt, custom等）。\nStep 2 While-reading (20 min):\n① Fast reading (skimming): 快速阅读，获取文章主旨（main idea）和结构；② Detailed reading (scanning): 细读各段，完成信息表格（文化差异的方面、具体表现、学生感受）；③ Critical thinking: 小组讨论\"Why did the student experience culture shock? How did she deal with it?\"\nStep 3 Post-reading (12 min):\n① 复述：学生根据信息表格复述文章内容；② 迁移创新：小组讨论\"If you were to study abroad, how would you deal with cultural differences?\"并完成mini-presentation；③ 文化对比：对比中外文化差异，讨论如何增强文化自信和跨文化交际能力。\nStep 4 Summary & Homework (5 min):\n总结本课所学；作业：写一篇短文\"My Plan for Studying Abroad\"，运用本课所学金句和文化知识。\n\n三、设计理据：\n① 依据新课标核心素养理念，教学目标涵盖四维度；② 依据PWP（Pre-reading, While-reading, Post-reading）阅读教学模式，分阶段设计活动；③ 阅读策略由浅入深（skimming→scanning→critical thinking），体现思维层次递进；④ Post-reading设计迁移创新活动，促使学生将所学知识迁移到新情境，培养高阶思维和跨文化交际能力；⑤ 采用任务型教学和合作学习，以学生为主体，教师为促进者。",
    analysis: "教学设计题需体现新课标理念，目标涵盖核心素养四维度，过程采用PWP模式，活动设计体现层次性和递进性，读写结合，注重思维品质和文化意识培养。"
  },
  // ========== 补充教学设计题（覆盖阅读/听说/写作/语法课型） ==========
  {
    id: 66,
    type: "case",
    module: "课程标准与教学论",
    chapter: "教学设计",
    difficulty: "较难",
    question: "Design a 45-minute listening and speaking lesson plan for Junior Grade 2 students. The topic is \"Shopping\". The listening material is a dialogue between a customer and a shop assistant in a clothes store.\n\nRequirements: (1) Write the teaching objectives based on the core competencies. (2) Design the main teaching procedures (pre-listening, while-listening, post-listening). (3) Briefly explain the design rationale.",
    options: null,
    answer: "教学设计：\n\n一、教学目标（基于核心素养四维度）：\n1. 语言能力目标：能够听懂购物对话并获取关键信息（商品、价格、尺码、颜色）；能运用\"Can I help you? / How much is it? / I'll take it.\"等功能句进行购物交际。\n2. 文化意识目标：了解中西方购物文化的异同（如讨价还价习惯、礼貌用语）。\n3. 思维品质目标：能根据对话信息推理判断，分析购物场景中的交际策略。\n4. 学习能力目标：能运用预测、抓取关键词等听力策略提高听力效率。\n\n二、教学过程：\nStep 1 Pre-listening (8 min):\n① 情境导入：播放商场购物短视频，提问\"What can you see? Where are they?\"激活背景知识；② 词汇铺垫：呈现关键词（size, color, price, discount, try on）；③ 预测内容：根据图片预测对话内容。\nStep 2 While-listening (20 min):\n① Extensive listening: 听第一遍，回答\"What does the customer want to buy?\"获取主旨；② Intensive listening: 听第二遍，完成表格（Item, Color, Size, Price）；③ 听第三遍，关注功能句\"Can I help you? / How much is it? / Can I try it on?\"并跟读模仿语音语调。\nStep 3 Post-listening (12 min):\n① 角色扮演：两人一组，模拟购物场景对话（提供语言支架和图片提示）；② 拓展任务：创设新场景（如买鞋、买文具），小组创编新对话并展示；③ 评价：生生互评（流利度、语言准确性、交际得体性）。\nStep 4 Summary & Homework (5 min):\n总结购物功能句；作业：录制一段购物对话视频。\n\n三、设计理据：\n① 采用PWP听力教学模式，由泛听到精听，层次递进；② 听说结合，以听促说，输入输出并重；③ 任务型教学，角色扮演和创编对话激发学生兴趣，培养交际能力；④ 提供语言支架降低难度，体现i+1理论。",
    analysis: "听说课设计应遵循输入（听）→输出（说）的认知规律，采用PWP模式，听说结合，以听促说，注重交际策略培养。"
  },
  {
    id: 67,
    type: "case",
    module: "课程标准与教学论",
    chapter: "教学设计",
    difficulty: "较难",
    question: "Design a 45-minute writing lesson plan for Senior Grade 1 students. The topic is \"An Introduction to My Hometown\". Students will write a descriptive composition of 120-150 words.\n\nRequirements: (1) Write the teaching objectives based on the core competencies. (2) Design the main teaching procedures based on the Process Writing Approach. (3) Briefly explain the design rationale.",
    options: null,
    answer: "教学设计：\n\n一、教学目标（基于核心素养四维度）：\n1. 语言能力目标：能运用方位词、描写性形容词和There be句型描述家乡的地理位置和特色；能写一篇120-150词的家乡介绍短文，结构清晰。\n2. 文化意识目标：增强对家乡文化的认同感和自豪感，能用英语传播家乡文化。\n3. 思维品质目标：能梳理家乡的特色要素（地理、文化、美食、人情），有逻辑地组织文章结构。\n4. 学习能力目标：能运用过程写作法的五阶段完成写作任务，能进行自评和互评。\n\n二、教学过程（过程写作法）：\nStep 1 Pre-writing (10 min):\n① 头脑风暴：\"What makes your hometown special?\"学生列出家乡特色关键词（location, food, culture, people, scenery）；② 范文分析：阅读范文，分析结构（总—分—总）和语言特色；③ 搭建支架：提供句型库（It is located in... / It is famous for... / The people there are...）；④ 列提纲：学生列写作提纲。\nStep 2 Drafting (10 min):\n学生根据提纲和语言支架独立写初稿，教师巡回指导，重点关注结构和内容。\nStep 3 Revising (10 min):\n① 同伴互评：交换初稿，使用评价量表（内容是否完整、结构是否清晰、语言是否准确）给出建议；② 根据反馈修改初稿。\nStep 4 Editing (8 min):\n关注语言准确性（拼写、语法、标点），使用检查清单自检。\nStep 5 Publishing & Sharing (5 min):\n展示优秀作品，学生朗读自己的家乡介绍，班级评选\"最美家乡\"。\nStep 6 Homework：\n完善终稿，配上家乡图片，制作成电子小报。\n\n三、设计理据：\n① 采用过程写作法五阶段（写前-起草-修改-编辑-发表），体现写作的过程性；② 评价方式多元（自评、互评、师评），关注写作过程；③ 提供语言支架和评价量表，降低写作难度；④ 写作主题贴近学生生活，激发表达欲望，培养文化意识。",
    analysis: "写作课设计应采用过程写作法，强调写作的循环反复过程，提供充分的语言支架和评价支持，注重思维逻辑和文化意识的培养。"
  },
  {
    id: 68,
    type: "case",
    module: "课程标准与教学论",
    chapter: "教学设计",
    difficulty: "较难",
    question: "Design a 45-minute grammar lesson plan for Junior Grade 3 students. The grammar focus is the Present Perfect Tense (have/has done). \n\nRequirements: (1) Write the teaching objectives based on the core competencies. (2) Design the main teaching procedures (presentation, practice, production). (3) Briefly explain the design rationale.",
    options: null,
    answer: "教学设计：\n\n一、教学目标（基于核心素养四维度）：\n1. 语言能力目标：能理解现在完成时的含义（过去发生对现在有影响）和结构（have/has + 过去分词）；能正确运用现在完成时描述已完成的经历和动作。\n2. 文化意识目标：通过交流个人经历，增进同学间的了解。\n3. 思维品质目标：能辨析现在完成时与一般过去时的区别，培养分析和归纳能力。\n4. 学习能力目标：能在真实语境中自主归纳语法规则，运用语法知识解决交际任务。\n\n二、教学过程（PPP模式）：\nStep 1 Presentation (12 min):\n① 情境创设：展示人物经历图片\"I have been to Beijing. / She has eaten sushi.\"；② 观察归纳：引导学生观察例句，归纳现在完成时的结构（have/has + V-ed）和含义；③ 对比辨析：对比\"I went to Beijing last year.\"与\"I have been to Beijing.\"，理解两时态差异；④ 教师精讲：过去分词的构成规则（规则/不规则）。\nStep 2 Practice (15 min):\n① 机械练习：将动词变为过去分词（write→written, go→gone...）；② 句型转换：将一般过去时改写为现在完成时；③ 控制性交际：用现在完成时完成句子\"I have _____, but I haven't _____.\"\nStep 3 Production (13 min):\n① Find someone who...活动：学生手持表格\"Find someone who has been to Shanghai / has read Harry Potter / has eaten frog...\"，用\"Have you ever...?\"采访同学；② 汇报：\"Li Ming has been to Shanghai, but he hasn't read Harry Potter.\"；③ 拓展：小组分享\"My Unforgettable Experience\"，运用现在完成时。\nStep 4 Summary & Homework (5 min):\n总结现在完成时的结构和用法；作业：写一段\"Things I have done this year\"，至少用5个现在完成时句子。\n\n三、设计理据：\n① 采用PPP（Presentation-Practice-Production）语法教学模式，由认知到运用；② 语法教学采用归纳法，学生在真实语境中观察归纳规则；③ 练习设计由机械到交际，层次递进；④ Production环节设计信息差活动，激发交际需求，体现语法为交际服务的理念。",
    analysis: "语法课设计应采用PPP模式，注重形式-意义-使用的统一，练习由控制到自由，在真实语境中培养语法运用能力。"
  },
  {
    id: 69,
    type: "case",
    module: "课程标准与教学论",
    chapter: "教学设计",
    difficulty: "较难",
    question: "Design a 45-minute reading lesson plan for Senior Grade 2 students. The text is an argumentative essay about whether teenagers should be allowed to use smartphones at school. \n\nRequirements: (1) Write the teaching objectives based on the core competencies. (2) Design the main teaching procedures (pre-reading, while-reading, post-reading). (3) Briefly explain the design rationale.",
    options: null,
    answer: "教学设计：\n\n一、教学目标（基于核心素养四维度）：\n1. 语言能力目标：能理解议论文的论点、论据和结论结构；能运用\"I think... / In my opinion... / However... / Therefore...\"等表达观点和论证。\n2. 文化意识目标：了解校园手机使用的不同文化态度，形成理性的科技使用观。\n3. 思维品质目标：能批判性分析正反两方面论据，形成自己独立的判断，培养批判性思维。\n4. 学习能力目标：能运用略读、寻读、思维导图等策略梳理议论文结构。\n\n二、教学过程：\nStep 1 Pre-reading (8 min):\n① 情境导入：展示校园手机使用图片，提问\"Should students use smartphones at school? Why or why not?\"激活背景；② 表态站队：学生就话题表态（赞成/反对），激发阅读期待；③ 预测：根据标题预测作者观点。\nStep 2 While-reading (20 min):\n① Skimming: 快速阅读，判断作者观点（赞成/反对/中立）；② Scanning: 细读，完成论证结构图（论点—论据1—论据2—论据3—结论）；③ Critical reading: 分析论据的充分性和逻辑性，标记最有说服力的论据；④ 语言聚焦：圈画论证性连接词（however, furthermore, in addition, therefore）。\nStep 3 Post-reading (12 min):\n① 辩论活动：正反两方就\"Should smartphones be allowed at school?\"展开辩论，运用文章论据和自己的观点；② 写作迁移：写一篇120词短文\"My Opinion on Using Smartphones at School\"，运用所学问证结构和连接词；③ 分享评价：学生展示短文，生生互评（论点是否清晰、论据是否充分、连接词使用是否恰当）。\nStep 4 Summary & Homework (5 min):\n总结议论文结构和论证语言；作业：完善短文，调查他国校园手机政策。\n\n三、设计理据：\n① 依据PWP阅读模式，由整体到细节到批判，层次递进；② 话题贴近学生生活，激发表达和思辨欲望；③ Post-reading设计辩论和写作迁移，培养批判性思维和表达能力，读写结合；④ 关注议论文语篇特征（论证结构、连接词），体现语篇类型教学理念。",
    analysis: "议论文阅读课设计应关注语篇结构和论证逻辑，Post-reading环节设计辩论和写作迁移，培养批判性思维和高阶思维能力。"
  }
];

window.englishQuestions = englishQuestions;
