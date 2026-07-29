const interviewExpressions = [
  {
    id: 1,
    category: "开场问候",
    categoryEn: "Greeting",
    icon: "👋",
    description: "面试开始时的问候和自我介绍，给评委留下良好的第一印象",
    expressions: [
      {
        en: "Good morning/afternoon, dear judges.",
        cn: "各位评委早上好/下午好。",
        tip: "鞠躬示意，面带微笑，声音洪亮"
      },
      {
        en: "I'm Candidate No. X. It's my great honor to be here to share my lesson with you.",
        cn: "我是X号考生。很荣幸在这里与各位分享我的课程。",
        tip: "替换X为你的实际考号"
      },
      {
        en: "Today my topic is... May I begin my lesson now?",
        cn: "今天我的课题是……现在我可以开始上课了吗？",
        tip: "说完后稍作停顿，等待评委示意"
      },
      {
        en: "Hello, boys and girls! How are you doing today?",
        cn: "同学们好！你们今天怎么样？",
        tip: "转向模拟学生的方向，语气亲切自然"
      },
      {
        en: "I'm so glad to see you all again. Are you ready for today's English class?",
        cn: "很高兴再次见到大家。准备好今天的英语课了吗？",
        tip: "面带笑容，营造积极的课堂氛围"
      },
      {
        en: "What a lovely day, isn't it? I hope we can have a wonderful time together.",
        cn: "天气真好，不是吗？希望我们能一起度过愉快的时光。",
        tip: "自然过渡到课堂，展现亲和力"
      },
      {
        en: "Before we start, let me check — is everybody here?",
        cn: "开始之前，让我确认一下——大家都到齐了吗？",
        tip: "目光扫视教室，体现课堂管理意识"
      },
      {
        en: "It's so nice to see your smiling faces. I believe we'll have a great lesson today.",
        cn: "看到你们笑脸真好。我相信今天我们会有精彩的一课。",
        tip: "拉近师生距离，营造轻松氛围"
      },
      {
        en: "Class begins! Stand up, please. Good morning, class!",
        cn: "上课！请起立。同学们早上好！",
        tip: "模拟真实的课堂起立问候环节"
      },
      {
        en: "Sit down, please. Now, let's begin our English journey together.",
        cn: "请坐。现在，让我们一起开启英语之旅吧。",
        tip: "用比喻引出课堂内容，显得生动有趣"
      }
    ]
  },
  {
    id: 2,
    category: "热身导入",
    categoryEn: "Warming-up & Lead-in",
    icon: "🎵",
    description: "通过歌曲、图片、视频、情境、游戏等方式导入新课，激发学生兴趣",
    expressions: [
      {
        en: "Let's start with a song! Listen to the music and try to sing along.",
        cn: "让我们从一首歌开始吧！听音乐并试着一起唱。",
        tip: "适合小学学段，调动课堂气氛"
      },
      {
        en: "Do you like singing? Let's sing 'Head, Shoulders, Knees and Toes' together!",
        cn: "你们喜欢唱歌吗？让我们一起唱《头肩膝盖脚趾》吧！",
        tip: "选择与课题相关的歌曲效果更佳"
      },
      {
        en: "Look at this picture. What can you see in it?",
        cn: "看看这张图片。你在里面能看到什么？",
        tip: "展示图片后停顿几秒，给学生观察时间"
      },
      {
        en: "I'm going to show you a short video. Please watch carefully and tell me what it's about.",
        cn: "我要给大家播放一个短视频。请仔细观看并告诉我它是关于什么的。",
        tip: "播放视频时用手指向屏幕方向"
      },
      {
        en: "Now, let's play a guessing game! What's in my bag? Can you guess?",
        cn: "现在，让我们玩一个猜谜游戏！我的包里有什么？你能猜到吗？",
        tip: "用手势配合，增加神秘感"
      },
      {
        en: "Close your eyes, please. Listen! What sound is this?",
        cn: "请闭上眼睛。听！这是什么声音？",
        tip: "用音频创设情境，适合动物/交通工具等话题"
      },
      {
        en: "Let's do a chant together. Clap your hands and follow me!",
        cn: "让我们一起唱chant。拍手跟我来！",
        tip: "节奏感强的chant能快速吸引注意力"
      },
      {
        en: "Look at the title on the screen. What do you think we are going to learn today?",
        cn: "看看屏幕上的标题。你们觉得今天我们要学什么？",
        tip: "引导学生预测课题，培养思维品质"
      },
      {
        en: "I have a riddle for you. Listen carefully and try to guess.",
        cn: "我有个谜语给你们。仔细听，试着猜一猜。",
        tip: "谜语导入适合词汇或话题引入"
      },
      {
        en: "Let's do a quick brainstorm. Tell me any words you know about this topic.",
        cn: "我们来做个快速头脑风暴。告诉我你知道的关于这个话题的任何词。",
        tip: "板书关键词，形成思维导图"
      },
      {
        en: "Before the class, I want you to think about this question: ...",
        cn: "上课之前，我想让大家思考这个问题：……",
        tip: "抛出一个引发思考的问题，自然导入主题"
      },
      {
        en: "Today I brought something special. Can you guess what it is?",
        cn: "今天我带来了一样特别的东西。你能猜猜是什么吗？",
        tip: "实物导入法，适合具体名词教学"
      }
    ]
  },
  {
    id: 3,
    category: "新课呈现",
    categoryEn: "Presentation",
    icon: "📖",
    description: "呈现新词汇、新句型和语法点，矫正发音，帮助学生理解和掌握新知识",
    expressions: [
      {
        en: "Now let's look at the new words. Please read after me.",
        cn: "现在让我们来看新单词。请跟我读。",
        tip: "领读时注意节奏，适当重复"
      },
      {
        en: "Look at this word. How many syllables are there? Let's clap them out.",
        cn: "看这个词。有几个音节？让我们拍手数出来。",
        tip: "用拍手辅助音节教学，直观有效"
      },
      {
        en: "Pay attention to the pronunciation of this sound. Watch my mouth.",
        cn: "注意这个音的发音。看我的嘴型。",
        tip: "放慢速度示范口型，让学生模仿"
      },
      {
        en: "What does this word mean? Look at the picture and guess.",
        cn: "这个词是什么意思？看图片猜一猜。",
        tip: "鼓励学生通过图片线索推断词义"
      },
      {
        en: "Let's spell the word together. A-P-P-L-E, apple!",
        cn: "让我们一起拼写这个词。A-P-P-L-E，apple！",
        tip: "用chant节奏拼写单词，加深记忆"
      },
      {
        en: "This is the sentence pattern we are going to learn today: 'What do you do on weekends?'",
        cn: "这是我们今天要学的句型：'你周末做什么？'",
        tip: "将句型板书或展示在屏幕上"
      },
      {
        en: "Look at the dialogue in the book. Let's listen to the recording first.",
        cn: "看书中的对话。让我们先听一遍录音。",
        tip: "用手势指向书本，培养学生的听力习惯"
      },
      {
        en: "Can you find the new sentence pattern in this dialogue?",
        cn: "你能在这个对话中找到新句型吗？",
        tip: "引导学生在语境中发现语言规律"
      },
      {
        en: "Now I'll read it for you. Listen carefully and pay attention to the intonation.",
        cn: "现在我给大家读一遍。仔细听，注意语调。",
        tip: "示范时注意语音语调的自然地道"
      },
      {
        en: "Who can try to read this word/sentence? Have a try, please.",
        cn: "谁能试着读一读这个词/句子？请试一试。",
        tip: "鼓励学生大胆开口，给与积极反馈"
      },
      {
        en: "Let's compare these two sounds. Can you hear the difference?",
        cn: "让我们比较这两个音。你能听出区别吗？",
        tip: "适用于最小对立体(如ship/sheep)的教学"
      },
      {
        en: "Boys read first, then girls. Let's see who does better!",
        cn: "男生先读，然后女生。看看谁读得更好！",
        tip: "分组竞赛激发参与热情"
      }
    ]
  },
  {
    id: 4,
    category: "练习操练",
    categoryEn: "Practice",
    icon: "🎯",
    description: "通过机械操练、游戏操练等方式巩固新学内容，提高语言熟练度",
    expressions: [
      {
        en: "Let's play 'High and Low Voice'. When I say the word loudly, you say it quietly.",
        cn: "我们来玩'高低音'游戏。我大声说这个词，你们就小声说。",
        tip: "先示范规则，确保学生理解后再开始"
      },
      {
        en: "Now let's play a bomb game. When you see a bomb, don't read the word — just sit down!",
        cn: "现在来玩炸弹游戏。看到炸弹时不要读那个词——直接坐下！",
        tip: "用PPT展示，炸弹图标穿插在单词中"
      },
      {
        en: "Let's do a chain drill. Ask the question, then pass it to the next student.",
        cn: "我们来做个连锁操练。问问题，然后传给下一个同学。",
        tip: "用手势示意传递方向，保证全员参与"
      },
      {
        en: "Practice with your partner. One asks, the other answers. Then switch.",
        cn: "和你的搭档练习。一个问，一个答。然后交换。",
        tip: "明确练习时长，如'You have 2 minutes'"
      },
      {
        en: "Let's read it together. Ready? One, two, three, go!",
        cn: "我们一起读。准备好了吗？一、二、三，开始！",
        tip: "用手势打节拍，保持整齐"
      },
      {
        en: "I say the first part, you finish the sentence. Let's try!",
        cn: "我说前半句，你们来完成句子。试试看！",
        tip: "逐渐减少提示，增加学生自主输出"
      },
      {
        en: "Let's play 'What's Missing'. Close your eyes. Now open them. Which word is gone?",
        cn: "我们来玩'什么不见了'。闭上眼睛。现在睁开。哪个词不见了？",
        tip: "PPT上显示一组词，消失一个让学生辨认"
      },
      {
        en: "Now we'll do a substitution drill. I'll give you a new word, and you make a new sentence.",
        cn: "现在我们做替换练习。我给你一个新词，你造一个新句子。",
        tip: "适用于句型操练，注意替换的多样性"
      },
      {
        en: "Whisper the word to your neighbor. Let's see if it can reach the last person correctly!",
        cn: "悄悄告诉你的同桌这个词。看看传到最后一个同学时还是不是正确的！",
        tip: "传话游戏，检验发音准确度"
      },
      {
        en: "Let's read the words like this — one by one, as fast as we can! Ready, go!",
        cn: "我们这样读单词——一个接一个，越快越好！准备，开始！",
        tip: "快速轮流读词，训练反应速度"
      }
    ]
  },
  {
    id: 5,
    category: "巩固产出",
    categoryEn: "Production",
    icon: "🎭",
    description: "通过角色扮演、小组调查、对话创编等活动，实现语言的综合运用",
    expressions: [
      {
        en: "Now, let's do a role play. Work in groups of four and act out the dialogue.",
        cn: "现在，让我们做角色扮演。四人一组，表演这段对话。",
        tip: "明确角色分配，鼓励加上动作和表情"
      },
      {
        en: "I'll give you 5 minutes to prepare. Then each group will come to the front and perform.",
        cn: "给大家5分钟准备。然后每组到前面来表演。",
        tip: "展示计时手势，培养时间观念"
      },
      {
        en: "Let's do a survey. Walk around the classroom and ask three classmates the question.",
        cn: "我们来做一个小调查。在教室里走动，问三位同学这个问题。",
        tip: "模拟走动场景，用板书展示调查表格"
      },
      {
        en: "Can you make a new dialogue using the words and sentences we learned today?",
        cn: "你能用我们今天学的单词和句子编一段新对话吗？",
        tip: "鼓励创造性输出，不局限于课文内容"
      },
      {
        en: "Imagine you are at a restaurant. What would you say? Make a conversation with your partner.",
        cn: "想象你在餐厅里。你会说什么？和你的搭档编一段对话。",
        tip: "创设真实情境，让语言运用更自然"
      },
      {
        en: "Now let's have a group discussion. Talk about your weekend plans with your group members.",
        cn: "现在我们来小组讨论。和组员聊聊你们的周末计划。",
        tip: "提供关键句型作为支架，降低难度"
      },
      {
        en: "Who wants to share your dialogue with the whole class? Come to the front, please.",
        cn: "谁想和全班分享你们的对话？请到前面来。",
        tip: "举手示意，给予志愿者展示机会"
      },
      {
        en: "Let's make a short play together. I'll be the narrator. Who wants to be...?",
        cn: "让我们一起来演一个小短剧。我来做旁白。谁想当……？",
        tip: "教师参与其中，增强互动性和趣味性"
      },
      {
        en: "Draw a picture about what we learned today and then describe it in English.",
        cn: "画出我们今天学的内容，然后用英语描述它。",
        tip: "跨学科融合，适合低年级学生"
      },
      {
        en: "You did a great job! Now let's listen to this group's performance. Give them a big hand!",
        cn: "你们做得很棒！现在让我们听这组的表演。给他们热烈掌声！",
        tip: "用掌声营造鼓励和支持的课堂文化"
      },
      {
        en: "If you finish early, try to write down your dialogue in your notebook.",
        cn: "如果你提前完成了，试着把你们的对话写在笔记本上。",
        tip: "分层任务，照顾不同水平的学生"
      },
      {
        en: "Remember to use the new sentence pattern in your conversation. I'll walk around and listen.",
        cn: "记得在对话中使用新句型。我会在教室走动听一听。",
        tip: "明确任务要求，体现教师的巡视指导"
      }
    ]
  },
  {
    id: 6,
    category: "总结作业",
    categoryEn: "Summary & Homework",
    icon: "📝",
    description: "总结本课所学内容，布置分层作业，巩固学习效果",
    expressions: [
      {
        en: "Let's summarize what we have learned today. Who can tell me?",
        cn: "让我们总结一下今天学的内容。谁能告诉我？",
        tip: "引导学生自主回顾，培养归纳能力"
      },
      {
        en: "Today we learned some new words. What are they?",
        cn: "今天我们学了一些新单词。它们是什么？",
        tip: "用手指向黑板上的词汇，帮助学生回忆"
      },
      {
        en: "What was the most interesting thing you learned today?",
        cn: "你今天学到的最有趣的东西是什么？",
        tip: "引导学生反思学习过程，关注情感体验"
      },
      {
        en: "Let's read all the new words and sentences together one more time.",
        cn: "让我们把所有的生词和句子再齐读一遍。",
        tip: "课末回顾，强化记忆"
      },
      {
        en: "Now, here comes your homework. Please finish the exercises on page X.",
        cn: "现在布置作业。请完成第X页的练习。",
        tip: "明确页码和题号，避免模糊指令"
      },
      {
        en: "For today's homework, you have two options. You can choose the one you like.",
        cn: "今天的作业有两个选项。你可以选择你喜欢的一个。",
        tip: "分层作业设计，体现因材施教理念"
      },
      {
        en: "Your must-do homework is to copy the new words three times. The optional task is to make a dialogue.",
        cn: "必做作业是把生词抄写三遍。选做任务是编一段对话。",
        tip: "必做+选做模式，兼顾基础巩固和能力提升"
      },
      {
        en: "Don't forget to read the dialogue to your parents when you get home.",
        cn: "回家别忘了把对话读给爸爸妈妈听。",
        tip: "口语作业，让家长参与学习过程"
      },
      {
        en: "You can also search for more information about this topic on the Internet.",
        cn: "你也可以在网上搜索更多关于这个话题的信息。",
        tip: "拓展性作业，培养自主学习能力"
      },
      {
        en: "Remember, practice makes perfect. Keep practicing at home!",
        cn: "记住，熟能生巧。在家也要坚持练习！",
        tip: "用英语谚语激励学生"
      }
    ]
  },
  {
    id: 7,
    category: "课堂互动用语",
    categoryEn: "Classroom Interaction",
    icon: "💬",
    description: "提问、鼓励、评价、过渡等课堂互动用语，贯穿全课各环节",
    expressions: [
      {
        en: "Who can answer this question? Raise your hand, please.",
        cn: "谁能回答这个问题？请举手。",
        tip: "培养举手发言的课堂常规"
      },
      {
        en: "Any volunteers? Don't be shy. Just have a try!",
        cn: "有志愿者吗？别害羞，试一试！",
        tip: "鼓励内向学生参与"
      },
      {
        en: "Good job! / Well done! / Excellent!",
        cn: "做得好！/ 很棒！/ 太出色了！",
        tip: "评价要有层次感，根据表现使用不同等级"
      },
      {
        en: "You did a great job! Give me five!",
        cn: "你做得太棒了！击个掌！",
        tip: "用肢体语言强化正面反馈"
      },
      {
        en: "That's a good try. But let's work on the pronunciation a little more.",
        cn: "很好的尝试。不过我们在发音上再努力一下。",
        tip: "先肯定再纠正，保护学生自信心"
      },
      {
        en: "I like the way you said that. Can you say it again, louder this time?",
        cn: "我喜欢你的表达方式。能再说一遍吗？这次大声一点。",
        tip: "正面反馈+具体改进建议"
      },
      {
        en: "Don't worry. Making mistakes is part of learning.",
        cn: "别担心。犯错是学习的一部分。",
        tip: "营造安全的语言学习环境"
      },
      {
        en: "Now, let's move on to the next part.",
        cn: "现在，让我们进入下一个环节。",
        tip: "环节间的自然过渡语"
      },
      {
        en: "So much for this part. Let's do something more challenging!",
        cn: "这部分就到这里。让我们做点更有挑战性的事吧！",
        tip: "从练习过渡到产出环节时使用"
      },
      {
        en: "Are you clear? / Do you understand?",
        cn: "明白了吗？/ 听懂了吗？",
        tip: "确认学生理解，注意不要过度使用"
      },
      {
        en: "Think about it for a moment. I'll give you 30 seconds.",
        cn: "想一下。给大家30秒。",
        tip: "给思考时间，避免急于叫答"
      },
      {
        en: "Eyes on me, please. Look at the blackboard.",
        cn: "请看我。看黑板。",
        tip: "集中学生注意力时使用"
      }
    ]
  },
  {
    id: 8,
    category: "结束语",
    categoryEn: "Closing",
    icon: "🙏",
    description: "课堂结束告别和面试结束语，给评委留下完整专业的印象",
    expressions: [
      {
        en: "OK, boys and girls, class is over. See you next time!",
        cn: "好了，同学们，下课了。下次见！",
        tip: "自然结束课堂，微笑挥手"
      },
      {
        en: "That's all for today's lesson. You all did a wonderful job!",
        cn: "今天的课就到这里。大家表现都非常棒！",
        tip: "总结性肯定，给课堂画上圆满句号"
      },
      {
        en: "Time flies! I hope you enjoyed today's lesson as much as I did.",
        cn: "时间过得真快！希望你们和我一样享受今天的课。",
        tip: "用感性表达拉近师生距离"
      },
      {
        en: "Stand up, please. Goodbye, class!",
        cn: "请起立。同学们再见！",
        tip: "模拟真实课堂结束仪式"
      },
      {
        en: "That's all for my lesson. Thank you for your listening, dear judges.",
        cn: "以上是我的全部课程。感谢各位评委的聆听。",
        tip: "转向评委，鞠躬致谢"
      },
      {
        en: "This is my teaching plan for this period. Thank you very much.",
        cn: "以上就是我本课时的教学方案。非常感谢。",
        tip: "适用于说课形式的面试"
      },
      {
        en: "That's the end of my fragment teaching. I appreciate your time and attention.",
        cn: "我的片段教学到此结束。感谢各位的时间和关注。",
        tip: "正式而得体的面试结束语"
      },
      {
        en: "Thank you for giving me this opportunity. I'll keep working hard on my teaching skills.",
        cn: "感谢给我这个机会。我会继续努力提升教学技能。",
        tip: "展现谦逊上进的态度"
      },
      {
        en: "May I clean the blackboard, judges?",
        cn: "评委老师，我可以擦黑板吗？",
        tip: "体现细节意识和职业素养"
      },
      {
        en: "That concludes my presentation. If you have any questions, I'd be happy to answer them.",
        cn: "我的展示到此结束。如果有任何问题，我很乐意回答。",
        tip: "为评委提问环节做好准备"
      }
    ]
  }
];

window.interviewExpressions = interviewExpressions;
