// 福建省教师招聘考试·中学英语学科专业知识知识点梳理
// 适用模块：理理工作台·教师考编
// 考试内容涵盖三大方面：
// 1. 中学英语教学内容（语言知识：语音、词汇、语法、语篇、语用；文化知识；语言技能）
// 2. 高等教育对应内容（综合英语、写作基础、翻译技巧、英美概况、英美文学、英语语言学）
// 3. 课程与教学论（课程标准、教学方法、教学设计）

const englishKnowledge = [

// ======================== 一、语法知识 ========================

{
  id: 1,
  module: "语法知识",
  chapter: "时态与语态",
  sections: [
    {
      title: "英语时态体系概览",
      points: [
        {
          term: "时态总览",
          content: "英语有{{highlight}}16种时态{{/highlight}}，由时（time）和体（aspect）组合而成。时分为现在、过去、将来、过去将来四种；体分为一般、进行、完成、完成进行四种。{{highlight}}最常用的时态有：一般现在时、一般过去时、一般将来时、现在进行时、过去进行时、现在完成时、过去完成时、过去将来时{{/highlight}}。每种时态都有其特定的形式和用法场景。掌握时态的关键在于理解'时'决定动作发生的时间参照点，'体'决定动作的进行状态或完成状态。"
        },
        {
          term: "一般现在时",
          content: "表示经常性、习惯性的动作或客观真理。{{highlight}}结构：主语 + 动词原形/第三人称单数{{/highlight}}。常搭配频率副词 always, usually, often, sometimes, never。例：The earth moves around the sun. {{highlight}}第三人称单数变化规则：一般加s，以s,x,ch,sh,o结尾加es，辅音字母+y结尾变y为i加es{{/highlight}}。此外，一般现在时还可表示按规定或时间表即将发生的事（如航班出发），以及在时间/条件状语从句中表将来。"
        },
        {
          term: "一般过去时",
          content: "表示在过去某个特定时间发生、完成的动作或存在的状态。{{highlight}}结构：主语 + 动词过去式{{/highlight}}。常搭配 yesterday, last week, in 2010, ago 等过去时间状语。规则动词过去式变化：一般加ed，以e结尾加d，辅音字母+y结尾变y为i加ed，重读闭音节结尾双写末尾辅音字母加ed。{{highlight}}不规则动词需单独记忆{{/highlight}}，如 go-went, see-saw, take-took 等。一般过去时还可用于虚拟语气，表示对现在或将来的假设。"
        },
        {
          term: "现在完成时与过去完成时",
          content: "{{highlight}}现在完成时{{/highlight}}（have/has + 过去分词）表示过去发生的动作对现在造成的影响或结果，或表示从过去持续到现在的动作或状态。常搭配 already, yet, just, ever, never, since, for 等状语。注意：{{highlight}}现在完成时不能与明确的过去时间状语连用{{/highlight}}。{{highlight}}过去完成时{{/highlight}}（had + 过去分词）表示在过去某个时间或动作之前已经发生或完成的动作，即'过去的过去'。常用于 by the time, before, after, when 等引导的从句中。例：By the time I arrived, the train had left."
        },
        {
          term: "进行时态",
          content: "{{highlight}}现在进行时{{/highlight}}（am/is/are + doing）表示此时此刻正在进行的动作，或现阶段正在进行但此刻不一定在做的动作。{{highlight}}过去进行时{{/highlight}}（was/were + doing）表示过去某时刻正在进行的动作，常与 when, while 引导的时间状语从句搭配使用。{{highlight}}注意：表示状态、感觉、心理活动的动词一般不用进行时{{/highlight}}，如 know, love, want, believe, belong, own 等（静态动词）。进行时还可表将来，如 I'm leaving tomorrow.（现在进行时表按计划即将发生的动作）。"
        }
      ]
    },
    {
      title: "被动语态",
      points: [
        {
          term: "被动语态的构成与用法",
          content: "{{highlight}}被动语态基本结构：be + 过去分词{{/highlight}}，不同时态通过be的变化体现。常见时态的被动语态：一般现在时 am/is/are done，一般过去时 was/were done，一般将来时 will be done，现在完成时 have/has been done，过去完成时 had been done，现在进行时 am/is/are being done，含情态动词 can/must be done。{{highlight}}被动语态使用的场合{{/highlight}}：不知道或不必说出动作的执行者；强调动作的承受者；为了行文方便或礼貌。例：The bridge was built in 1990.（不知道建造者）；The window has been broken.（强调结果）。"
        },
        {
          term: "被动语态的特殊结构",
          content: "1. {{highlight}}带双宾语的被动{{/highlight}}：give sb. sth. → sb. be given sth. 或 sth. be given to sb.，通常将间接宾语（人）变为被动句主语更自然。2. {{highlight}}带复合宾语的被动{{/highlight}}：make sb. do sth. → sb. be made to do sth.（注意主动句中省略的to在被动句中需还原）；see sb. do sth. → sb. be seen to do sth.。3. {{highlight}}短语动词的被动{{/highlight}}：look after → be looked after，注意不可丢掉介词或副词。4. {{highlight}}get + 过去分词{{/highlight}}也可表被动，多用于口语，如 get hurt, get married, get dressed。5. {{highlight}}It is said that...{{/highlight}}等固定被动句型：It is reported/believed/estimated that...（据报道/据信/据估计……）。"
        },
        {
          term: "主动形式表被动意义",
          content: "某些情况下用主动形式表示被动意义：1. {{highlight}}表示感官特征的动词{{/highlight}}：sell, read, wash, wear, cook 等，如 The book sells well.（这本书很畅销）；The cloth washes easily.（这布料好洗）。2. {{highlight}}表示'需要'的动词后接动名词{{/highlight}}：need/want/require doing = need/want/require to be done，如 The room needs cleaning. 3. {{highlight}}不定式作定语或表语时{{/highlight}}，若与主语或宾语有动宾关系且主语/宾语是不定式的逻辑宾语，用主动表被动，如 I have a lot of work to do. 4. be to blame（该受责备），be to let（待出租）等固定用法也用主动表被动。"
        },
        {
          term: "时态的呼应与一致性",
          content: "{{highlight}}时态呼应（Sequence of Tenses）{{/highlight}}指在复合句中，从句的时态要与主句时态保持逻辑上的一致。1. {{highlight}}宾语从句的时态呼应{{/highlight}}：主句是现在时或将来时，从句可根据需要用任何时态；主句是过去时，从句须用过去某种时态（一般过去、过去进行、过去完成、过去将来）。例：He said he had finished his homework. / She told me she would come the next day. 2. {{highlight}}例外情况{{/highlight}}：从句表示客观真理、自然规律或习惯性动作时，即使主句是过去时，从句也用现在时。例：The teacher told us that the earth is round. 3. {{highlight}}直接引语变间接引语{{/highlight}}时需进行时态、人称、时间状语和指示代词的转换。如 now→then, today→that day, tomorrow→the next day, this→that, come→go 等。"
        },
        {
          term: "将来时态的多种表达",
          content: "英语中表示将来的方式有多种：1. {{highlight}}will/shall + 动词原形{{/highlight}}：表将来的一般预测或即时决定。例：I think it will rain tomorrow. 2. {{highlight}}be going to + 动词原形{{/highlight}}：表已计划或打算做的事，或有迹象表明即将发生的事。例：Look at the clouds. It's going to rain. 3. {{highlight}}现在进行时{{/highlight}}：表按计划即将发生的动作，常用于 go, come, leave, arrive, start 等趋向动词。例：I'm leaving for Beijing tomorrow. 4. {{highlight}}一般现在时{{/highlight}}：表按规定或时间表将要发生的事，常用于交通时刻表。例：The train arrives at 5 p.m. 5. {{highlight}}be to + 动词原形{{/highlight}}：表按规定、计划或命令要做的事。例：The President is to visit China next month. 6. {{highlight}}be about to + 动词原形{{/highlight}}：表即将做某事，通常不与具体时间状语连用。例：I was about to leave when the phone rang. 7. {{highlight}}be on the point of doing{{/highlight}}：表正要做某事。"
        }
      ]
    }
  ]
},

{
  id: 2,
  module: "语法知识",
  chapter: "从句",
  sections: [
    {
      title: "名词性从句",
      points: [
        {
          term: "名词性从句概述与引导词",
          content: "名词性从句包括{{highlight}}主语从句、宾语从句、表语从句和同位语从句{{/highlight}}，在句中分别充当主语、宾语、表语和同位语。引导词分三类：1. {{highlight}}连词{{/highlight}}：that（无词义，在名词性从句中不充当成分，引导宾语从句时常可省略，但引导主语从句、表语从句、同位语从句时一般不省略），whether/if（是否，whether 可引导所有名词性从句，if 只能引导宾语从句且不置于句首）。2. {{highlight}}连接代词{{/highlight}}：who, whom, whose, what, which，在从句中充当主语、宾语、表语或定语。3. {{highlight}}连接副词{{/highlight}}：when, where, why, how，在从句中充当状语。"
        },
        {
          term: "that与whether/if的用法区别",
          content: "{{highlight}}that{{/highlight}}在名词性从句中只起连接作用，不充当句子成分，也无词义。引导宾语从句时 that 常可省略；但引导主语从句时 that 不能省略，且常与 it 搭配：It is known to all that the earth is round. {{highlight}}whether与if{{/highlight}}都表示'是否'，但有区别：{{highlight}}whether 可引导所有名词性从句，if 只能引导宾语从句{{/highlight}}；whether 后可接 or not 或 or not，if 一般不直接接 or not；whether 可用于介词后，if 不可；whether 可引导表语从句和同位语从句，if 不可。例：The question whether we should go has not been decided.（同位语从句，不能用if）"
        },
        {
          term: "同位语从句与定语从句的区别",
          content: "{{highlight}}同位语从句{{/highlight}}是对前面名词（如 fact, idea, news, hope, question, suggestion 等）内容的解释和说明，that 在从句中不充当成分，只起连接作用，且不能省略。{{highlight}}定语从句{{/highlight}}是对先行词的修饰和限定，that 在从句中充当主语、宾语或表语，充当宾语时可省略。关键区别：{{highlight}}同位语从句的 that 不充当成分，定语从句的 that 充当成分{{/highlight}}。比较：The news that he won the prize is exciting.（同位语从句，that不充当成分，news就是he won the prize的内容）；The news that he told me is exciting.（定语从句，that作told的宾语，先行词为news）。"
        },
        {
          term: "what与that在名词性从句中的区别",
          content: "{{highlight}}what 在从句中充当成分（主语、宾语、表语），且含有词义'什么'或'所……的'{{/highlight}}；{{highlight}}that 在从句中不充当成分，也无词义{{/highlight}}。例：What he said is true.（what作said的宾语，意为'他所说的话'）；That he said so is true.（that不充当成分，意为'他这样说了这件事是真的'）。{{highlight}}what 常可等同于 the thing(s) that{{/highlight}}，如 What I need is a book. = The thing that I need is a book. 注意 what 引导的名词性从句中 what 既起连接作用又充当成分，这是 what 与 that 的根本区别。"
        }
      ]
    },
    {
      title: "定语从句",
      points: [
        {
          term: "关系代词的用法",
          content: "关系代词在定语从句中既起连接作用，又充当从句的成分（主语、宾语、表语或定语）。{{highlight}}that{{/highlight}}：可指人或物，在从句中作主语或宾语（作宾语可省略），但不能用于非限制性定语从句，也不能直接放在介词后。{{highlight}}which{{/highlight}}：只能指物，在从句中作主语或宾语（作宾语可省略限制性从句中），可用于非限制性定语从句，可放在介词后。{{highlight}}who{{/highlight}}：指人，在从句中作主语（限制性从句中作宾语可用 whom，口语中也可用who，均可省略）。{{highlight}}whom{{/highlight}}：指人，在从句中作宾语。{{highlight}}whose{{/highlight}}：表所属关系，既可指人也可指物，在从句中作定语，如 the boy whose father is a doctor, the house whose roof is red。"
        },
        {
          term: "只能用that的情况",
          content: "在限制性定语从句中，以下情况{{highlight}}只能用 that，不能用 which{{/highlight}}：1. {{highlight}}先行词是 all, everything, anything, nothing, something, much, little, none 等不定代词时{{/highlight}}：All that I can do is wait. 2. {{highlight}}先行词被 the only, the very, the same, the last 等修饰时{{/highlight}}：This is the only book that I have. 3. {{highlight}}先行词被序数词或形容词最高级修饰时{{/highlight}}：This is the best film that I have ever seen. 4. {{highlight}}先行词中既有人又有物时{{/highlight}}：The man and his dog that are walking in the park... 5. {{highlight}}在以 who/which 开头的疑问句中{{/highlight}}，为避免重复用 that：Who is the person that is standing there?"
        },
        {
          term: "关系副词的用法",
          content: "关系副词在定语从句中充当状语，表示时间、地点或原因。{{highlight}}when{{/highlight}}：表时间，先行词是表示时间的名词（time, day, year, moment 等），在从句中作时间状语。例：I will never forget the day when I met you. {{highlight}}where{{/highlight}}：表地点，先行词是表示地点的名词（place, room, city 等），在从句中作地点状语。例：This is the house where I was born. {{highlight}}why{{/highlight}}：表原因，先行词是 reason，在从句中作原因状语。例：This is the reason why he left. {{highlight}}注意：关系副词可用'介词 + which'替换{{/highlight}}，如 when = at/on/in which, where = in/at which, why = for which。判断用关系代词还是关系副词的关键：看引导词在从句中充当什么成分——作主语/宾语用关系代词，作状语用关系副词。"
        },
        {
          term: "限制性与非限制性定语从句",
          content: "{{highlight}}限制性定语从句{{/highlight}}：对先行词进行限定和修饰，不可缺少，否则句意不完整。从句与先行词之间无逗号隔开，可用 that 引导，关系代词作宾语时可省略。{{highlight}}非限制性定语从句{{/highlight}}：对先行词进行补充说明，去掉后句意仍然完整。从句与先行词之间有逗号隔开，{{highlight}}不能用 that 引导{{/highlight}}，关系代词不可省略。非限制性定语从句还可以修饰整个主句，此时关系代词用 which。例：He passed the exam, which made his parents happy.（which 修饰整个主句 He passed the exam）。{{highlight}}which 和 as 都可引导非限制性定语从句修饰整个主句{{/highlight}}，但 as 有'正如'之意，可置于句首，而 which 不可置于句首。"
        },
        {
          term: "as引导的定语从句",
          content: "{{highlight}}as 可作为关系代词引导定语从句{{/highlight}}，主要用于以下两种情况：1. {{highlight}}引导限制性定语从句{{/highlight}}：常用于 the same...as..., such...as..., as...as... 等结构中，as 在从句中充当主语、宾语或表语。例：I have never seen such a clever boy as he is. 2. {{highlight}}引导非限制性定语从句{{/highlight}}：as 代表整个主句的内容，意为'正如……'，{{highlight}}可置于句首、句中或句末{{/highlight}}。常见句型：as is known to all, as we all know, as has been mentioned above, as is expected, as can be seen。{{highlight}}as 与 which 的区别{{/highlight}}：as 引导的非限制性定语从句可置于句首，有'正如'之意，而 which 不可置于句首且无此意；as 从句具有预示性，which 从句是对已述事实的评述。"
        }
      ]
    },
    {
      title: "状语从句",
      points: [
        {
          term: "时间与条件状语从句",
          content: "{{highlight}}时间状语从句{{/highlight}}常用引导词：when, while, as（当……时），before（在……之前），after（在……之后），since（自从），until/till（直到），as soon as, the moment, immediately, hardly...when, no sooner...than（一……就）。{{highlight}}条件状语从句{{/highlight}}常用引导词：if, unless（如果不），as long as（只要），in case（万一），on condition that（条件是），provided that。{{highlight}}重要规则：在时间和条件状语从句中，用一般现在时表将来，一般过去时表过去将来{{/highlight}}，即'主将从现'原则。例：When he comes tomorrow, I will tell him.（不用will come）；If it rains tomorrow, we will stay at home. while 强调'在……期间'，从句动词须为延续性动词，且常用进行时。"
        },
        {
          term: "原因、目的与结果状语从句",
          content: "{{highlight}}原因状语从句{{/highlight}}：because（语气最强，回答 why，可置于句首或句末），as（语气弱，常置于句首，表显而易见的原因），since（'既然'，表已知的理由），now that（既然）。for 是并列连词，不引导从句而连接并列句，表补充说明或推断。{{highlight}}目的状语从句{{/highlight}}：so that（以便），in order that（为了），从句中常含 can, could, may, might, will 等情态动词。{{highlight}}结果状语从句{{/highlight}}：so...that（如此……以至于），such...that。so + 形容词/副词 + that；such + (a/an) + 形容词 + 名词 + that。注意 so 与 such 的搭配区别：so + many/much/few/little + 名词，而 such 不可。"
        },
        {
          term: "让步、方式与地点状语从句",
          content: "{{highlight}}让步状语从句{{/highlight}}：though, although（虽然，不能与but连用，但可与yet/still连用），even if, even though（即使），as（尽管，需倒装：Child as he is, he knows a lot.），while（虽然，常置于句首），whether...or...（无论……还是……），no matter + wh-词 = wh-ever词（no matter what = whatever）。{{highlight}}方式状语从句{{/highlight}}：as（按照，像），(just) as...so...（正如……也……），as if, as though（好像，从句可用虚拟语气表示与事实相反的假设）。{{highlight}}地点状语从句{{/highlight}}：where（在……的地方），wherever（无论哪里）。例：Where there is a will, there is a way.（有志者事竟成）"
        }
      ]
    }
  ]
},

{
  id: 3,
  module: "语法知识",
  chapter: "非谓语动词",
  sections: [
    {
      title: "非谓语动词的构成与功能",
      points: [
        {
          term: "不定式",
          content: "{{highlight}}不定式由 to + 动词原形构成{{/highlight}}（有时可省略to，称为 bare infinitive）。不定式具有名词、形容词和副词功能，在句中可作主语、宾语、表语、定语、状语和补语。{{highlight}}作主语{{/highlight}}：To learn English well is not easy. = It is not easy to learn English well.（常用it作形式主语）。{{highlight}}作宾语{{/highlight}}：decide, hope, want, plan, agree, refuse, promise 等动词后接不定式作宾语。{{highlight}}作定语{{/highlight}}：I have a lot of work to do.（不定式放在被修饰名词后，常表将来）。{{highlight}}作状语{{/highlight}}：表目的（I went there to buy a book.）、表结果（He is too tired to walk.）、表原因（I am glad to see you.）。"
        },
        {
          term: "动名词",
          content: "{{highlight}}动名词由 动词 + ing 构成{{/highlight}}，具有名词性质，在句中可作主语、宾语、表语和定语。{{highlight}}作主语{{/highlight}}：Reading is important for learning. {{highlight}}作宾语{{/highlight}}：enjoy, mind, avoid, finish, practice, suggest, consider, admit, deny, escape 等动词后接动名词作宾语。{{highlight}}介词后接动名词{{/highlight}}：be good at swimming, be interested in reading, look forward to hearing from you（注意 look forward to 中的 to 是介词）。{{highlight}}动名词作主语表一般性、习惯性的行为{{/highlight}}，而不定式作主语常表具体某次行为。动名词有完成式 having done 和被动式 being done。"
        },
        {
          term: "分词",
          content: "分词包括{{highlight}}现在分词（-ing）和过去分词（-ed）{{/highlight}}，具有形容词和副词功能，在句中可作定语、表语、状语和补语。{{highlight}}现在分词表主动和进行{{/highlight}}：the boring lecture（令人无聊的讲座，主动）；the running boy（正在跑的男孩，进行）。{{highlight}}过去分词表被动和完成{{/highlight}}：the bored students（感到无聊的学生，被动感受）；the broken window（被打碎的窗户，被动完成）。{{highlight}}分词作状语{{/highlight}}：Seeing the teacher, the students stood up.（现在分词，表时间，主动）；Seen from the hill, the city looks beautiful.（过去分词，表条件，被动）。分词的独立主格结构：分词有自己的逻辑主语，如 Weather permitting, we will go outing.（weather 为 permitting 的逻辑主语）"
        },
        {
          term: "不定式与动名词作宾语的区别",
          content: "某些动词后接不定式和动名词意义不同：1. {{highlight}}remember to do sth.{{/highlight}}（记得去做某事，未做） vs {{highlight}}remember doing sth.{{/highlight}}（记得做过某事，已做）。2. {{highlight}}forget to do{{/highlight}}（忘记去做） vs {{highlight}}forget doing{{/highlight}}（忘记做过）。3. {{highlight}}stop to do{{/highlight}}（停下来去做另一件事） vs {{highlight}}stop doing{{/highlight}}（停止正在做的事）。4. {{highlight}}try to do{{/highlight}}（努力做） vs {{highlight}}try doing{{/highlight}}（试着做看看效果）。5. {{highlight}}mean to do{{/highlight}}（打算做） vs {{highlight}}mean doing{{/highlight}}（意味着）。6. {{highlight}}regret to do{{/highlight}}（遗憾地要做） vs {{highlight}}regret doing{{/highlight}}（后悔做过）。7. {{highlight}}go on to do{{/highlight}}（接着做另一件事） vs {{highlight}}go on doing{{/highlight}}（继续做同一件事）。"
        },
        {
          term: "非谓语动词作定语的区别",
          content: "1. {{highlight}}不定式作定语{{/highlight}}：表将来，放在被修饰词之后。如 a book to read（要读的书），something to do（要做的事）。若不定式是不及物动词，需加适当的介词：a room to live in。2. {{highlight}}动名词作定语{{/highlight}}：表用途或功能，如 a swimming pool（游泳池），a reading room（阅览室），a sleeping bag（睡袋）。动名词与被修饰词之间无逻辑上的主谓关系。3. {{highlight}}现在分词作定语{{/highlight}}：表主动、进行，与被修饰词有逻辑主谓关系。如 a sleeping baby（正在睡觉的婴儿），the boy standing there（站在那儿的男孩）。4. {{highlight}}过去分词作定语{{/highlight}}：表被动、完成，如 a broken glass（碎了的杯子），fallen leaves（落叶）。"
        },
        {
          term: "独立主格结构",
          content: "{{highlight}}独立主格结构（Absolute/Nominative Absolute Construction）{{/highlight}}由名词或代词加上非谓语动词（分词或不定式）、形容词、副词或介词短语构成，其逻辑主语与句子主语不同，因此称为'独立'。独立主格结构在句中作状语，表示时间、原因、条件、方式或伴随状况。1. {{highlight}}名词/代词 + 现在分词{{/highlight}}（表主动进行）：Weather permitting, we will go outing.（如果天气允许，我们就去郊游）。2. {{highlight}}名词/代词 + 过去分词{{/highlight}}（表被动完成）：His homework finished, he went out to play.（作业做完后，他出去玩了）。3. {{highlight}}名词/代词 + 形容词/副词/介词短语{{/highlight}}：He stood there, his back against the wall. / The meeting over, everyone went home. 4. {{highlight}}with 复合结构{{/highlight}}：with + 宾语 + 宾语补足语（分词/形容词/副词/不定式/介词短语），如 He slept with the window open. / With so much work to do, I can't go out. 独立主格结构与主句之间用逗号隔开，是一种简洁的句子表达方式。"
        }
      ]
    }
  ]
},

{
  id: 4,
  module: "语法知识",
  chapter: "虚拟语气",
  sections: [
    {
      title: "虚拟语气的用法",
      points: [
        {
          term: "if条件句的虚拟语气",
          content: "{{highlight}}与现在事实相反{{/highlight}}：从句用一般过去时（be动词用were），主句用 would/should/could/might + 动词原形。例：If I were you, I would go. {{highlight}}与过去事实相反{{/highlight}}：从句用 had + 过去分词，主句用 would/should/could/might + have + 过去分词。例：If I had known, I would have helped you. {{highlight}}与将来事实相反{{/highlight}}：从句用一般过去时或 were to + 动词原形 或 should + 动词原形，主句用 would/should/could/might + 动词原形。例：If it should rain tomorrow, we would cancel the picnic. {{highlight}}省略if的倒装{{/highlight}}：若从句中有were, had, should，可省略if并将这些词提前，如 Were I you, I would go. = If I were you, I would go."
        },
        {
          term: "wish后的虚拟语气",
          content: "{{highlight}}wish 后的宾语从句用虚拟语气{{/highlight}}，表示不能实现的愿望：1. {{highlight}}对现在的虚拟{{/highlight}}：从句用一般过去时（be用were）。例：I wish I were a bird.（我希望我是一只鸟）。2. {{highlight}}对过去的虚拟{{/highlight}}：从句用 had + 过去分词 或 could/would + have + 过去分词。例：I wish I had studied harder.（我真希望当初更努力学习）。3. {{highlight}}对将来的虚拟{{/highlight}}：从句用 would/could + 动词原形。例：I wish you would come tomorrow.（真希望你明天能来）。{{highlight}}if only 也用同样的虚拟结构{{/highlight}}，意为'要是……就好了'，如 If only I had more time! 此外，as if/as though 引导的方式状语从句在表与事实相反的情况时也用虚拟语气。"
        },
        {
          term: "建议类动词后的虚拟语气",
          content: "{{highlight}}表示建议、命令、要求等动词后的宾语从句用虚拟语气{{/highlight}}，从句谓语用 {{highlight}}(should) + 动词原形{{/highlight}}，should 可省略。常见动词：suggest, advise, propose, recommend（建议）；insist, demand, request, require（要求）；order, command（命令）；desire, urge, prefer（渴望/主张）。例：The doctor suggested that he (should) stop smoking. {{highlight}}相关名词后的同位语从句和表语从句也用虚拟语气{{/highlight}}：suggestion, advice, proposal, demand, request, order, requirement 等名词后的同位语从句或表语从句也用 (should) + 动词原形。例：My suggestion is that he (should) not go alone. / The order that all soldiers (should) wear uniforms must be obeyed. {{highlight}}It is + 过去分词 + that 从句也用虚拟{{/highlight}}：It is suggested/requested/required that he (should) come early."
        },
        {
          term: "would rather与it is time的虚拟",
          content: "{{highlight}}would rather 后的从句用虚拟语气{{/highlight}}：表示现在或将来的事用一般过去时，表示过去的事用过去完成时。例：I would rather you didn't smoke now.（表示现在）；I would rather you had told me earlier.（表示过去）。{{highlight}}It is (high) time that... 后的从句用虚拟语气{{/highlight}}：从句用一般过去时或 should + 动词原形（should不可省略），意为'是时候该做某事了'。例：It is high time that we went home. / It is time that we should go home. {{highlight}}其他虚拟语气句型{{/highlight}}：but for / without（要不是）引导的虚拟：But for your help, I would have failed.（与过去事实相反）；If it were not for...（与现在相反）；If it had not been for...（与过去相反）。"
        },
        {
          term: "lest与in case引导的虚拟",
          content: "{{highlight}}lest, for fear that, in case{{/highlight}} 引导的目的状语从句中可用虚拟语气，谓语用 {{highlight}}should + 动词原形{{/highlight}}，意为'以免、以防'。例：He spoke slowly lest the students should fail to understand him. / Take your umbrella in case it should rain. {{highlight}}as if/as though 引导的方式状语从句{{/highlight}}中，若表示与事实相反的假设，用虚拟语气：对现在的事实相反用一般过去时（be用were），对过去事实相反用过去完成时。例：He talks as if he were the boss.（其实他不是）/ He looks as if he had seen a ghost.（其实他没见到鬼）。但若as if/as though引导的从句可能是真实的，则不用虚拟。{{highlight}}even if/even though{{/highlight}}引导的让步状语从句也可用虚拟语气，规则与if条件句相同。{{highlight}}suggest表'暗示、表明'时不用虚拟{{/highlight}}：His pale face suggests that he is ill.（suggest在此意为'表明'，不用虚拟，用陈述语气）。"
        }
      ]
    }
  ]
},

{
  id: 5,
  module: "语法知识",
  chapter: "主谓一致",
  sections: [
    {
      title: "主谓一致的三原则",
      points: [
        {
          term: "语法一致原则",
          content: "{{highlight}}语法一致{{/highlight}}指主语和谓语在语法形式上保持一致，即单数主语用单数谓语，复数主语用复数谓语。1. {{highlight}}集合名词{{/highlight}}（family, team, class, committee, audience 等）：当整体看待时用单数，当强调各个成员时用复数。例：My family is a large one. / My family are watching TV. 2. {{highlight}}并列主语{{/highlight}}：A and B 作主语，用复数。但由 and 连接的两个名词指同一人/物/概念时用单数，如 The teacher and writer is my friend.（同一人）；Bread and butter is my favorite breakfast.（一种食物）。3. {{highlight}}each/every/no + 单数名词{{/highlight}}并列时用单数：Every boy and every girl has a book."
        },
        {
          term: "意义一致原则",
          content: "{{highlight}}意义一致{{/highlight}}指谓语动词的单复数根据主语的实际意义来决定，而非形式。1. {{highlight}}表示时间、距离、金钱、重量等的复数名词{{/highlight}}作为整体看待时用单数：Ten years is a long time. / Two thousand dollars is enough. 2. {{highlight}}以 -ics 结尾的学科名词{{/highlight}}用单数：Mathematics is difficult for me. / Physics is interesting. 但这些词指具体实践活动时可用复数：His mathematics are weak. 3. {{highlight}}the + 形容词/分词{{/highlight}}表一类人时用复数：The rich are not always happy. / The wounded were taken to hospital. 4. {{highlight}}news, means, works{{/highlight}}等形复意单的词用单数：The news is exciting. / Every means has been tried."
        },
        {
          term: "就近原则",
          content: "{{highlight}}就近原则{{/highlight}}指谓语动词与离它最近的主语在数上保持一致。1. {{highlight}}or, either...or..., neither...nor..., not only...but also..., not...but...{{/highlight}}连接并列主语时用就近原则：Neither he nor I am a teacher. / Not only the students but also the teacher was excited. 2. {{highlight}}here/there 引导的倒装句{{/highlight}}中用就近原则：There is a book and two pens on the desk. / Here comes the bus.（单数）/ Here come the students.（复数）3. {{highlight}}There be 句型{{/highlight}}遵循就近原则：There is a pen and some books on the table.（与最近的a pen一致用is）。4. {{highlight}}as well as, with, along with, together with, besides, including, except{{/highlight}}等连接主语时，谓语与前面的主语一致（不算就近，而是与主要主语一致）：The teacher, as well as the students, was excited."
        },
        {
          term: "特殊主谓一致情况",
          content: "以下是一些常考的特殊主谓一致情况：1. {{highlight}}a number of + 复数名词{{/highlight}}作主语用复数（许多……），{{highlight}}the number of + 复数名词{{/highlight}}作主语用单数（……的数量）。例：A number of students are absent. / The number of students is 50. 2. {{highlight}}plenty of, a lot of, lots of{{/highlight}}等后接可数或不可数名词，谓语与名词一致。3. {{highlight}}分数/百分数 + of + 名词{{/highlight}}，谓语与名词一致。Three-fourths of the surface is covered with water. / 30% of the students are girls. 4. {{highlight}}population{{/highlight}}：指人口总数用单数，指人口中的一部分人用复数。The population of China is large. / One-third of the population are farmers. 5. {{highlight}}police, cattle, people, youth{{/highlight}}等集合名词表复数：The police are looking for the suspect. 6. {{highlight}}one of + 复数名词{{/highlight}}后接单数谓语：One of the boys is my brother. 7. {{highlight}}关系代词作主语{{/highlight}}时，谓语与先行词一致：I, who am your friend, will help you.（I 为先行词，用am）。"
        }
      ]
    }
  ]
},

{
  id: 6,
  module: "语法知识",
  chapter: "倒装与强调",
  sections: [
    {
      title: "倒装句",
      points: [
        {
          term: "完全倒装",
          content: "{{highlight}}完全倒装{{/highlight}}指将整个谓语提到主语之前，结构为'谓语 + 主语'。常用于以下情况：1. {{highlight}}here, there, up, down, in, out, away 等方位/地点副词置于句首{{/highlight}}，且主语是名词时：Here comes the bus. / Out rushed the children.（注意：主语是代词时不倒装，如 Here he comes.）2. {{highlight}}表地点的介词短语置于句首{{/highlight}}，主语是名词时：On the table sat a cat. / Under the tree lies a dog. 3. {{highlight}}表语置于句首{{/highlight}}（表方位、方向的形容词或分词）：Gone are the days when we had nothing to eat. / Present at the meeting were the president and all the teachers. 完全倒装的目的主要是为了描写生动或强调。"
        },
        {
          term: "部分倒装",
          content: "{{highlight}}部分倒装{{/highlight}}指将助动词/情态动词/be动词提到主语之前，实义动词不变，类似一般疑问句语序。常用于：1. {{highlight}}否定词或半否定词置于句首{{/highlight}}：never, hardly, seldom, rarely, little, few, not, no longer, not until 等。例：Never have I seen such a beautiful place. / Not until then did I realize my mistake. 2. {{highlight}}hardly...when..., no sooner...than..., not only...but also... 前半部分置于句首{{/highlight}}：Hardly had I arrived when it began to rain. / Not only does he study hard, but also he helps others. 3. {{highlight}}only + 状语置于句首{{/highlight}}：Only in this way can we solve the problem. / Only when he came home did I tell him. 4. {{highlight}}so/neither/nor 置于句首{{/highlight}}表'也/也不'：He can swim, so can I. / He doesn't like tea, neither do I."
        },
        {
          term: "强调句型",
          content: "{{highlight}}强调句型结构：It is/was + 被强调部分 + that/who + 句子剩余部分{{/highlight}}。可以强调主语、宾语、状语等。例：原句 Tom met Mary in the park yesterday. → It was Tom who/that met Mary in the park yesterday.（强调主语）→ It was Mary that/whom Tom met in the park yesterday.（强调宾语）→ It was in the park that Tom met Mary yesterday.（强调地点状语）→ It was yesterday that Tom met Mary in the park.（强调时间状语）。{{highlight}}判断强调句型的方法：去掉 It is/was...that/who 后，句子结构仍完整{{/highlight}}。注意：强调人时可用 who 或 that，强调物或时间/地点状语时只能用 that。{{highlight}}强调谓语动词用 do/does/did + 动词原形{{/highlight}}：He does like English. / She did come yesterday.（不用强调句型，而是在动词前加 do/dose/did）"
        }
      ]
    }
  ]
},

{
  id: 7,
  module: "语法知识",
  chapter: "情态动词",
  sections: [
    {
      title: "情态动词的含义与用法",
      points: [
        {
          term: "情态动词的基本用法",
          content: "{{highlight}}can/could{{/highlight}}：能力（能，会）；可能性（可能）；请求许可（可以……吗）。{{highlight}}may/might{{/highlight}}：许可（可以）；可能性（也许）；祝愿（May you succeed!）。{{highlight}}must{{/highlight}}：必须；肯定推测（一定）；mustn't 表示禁止（不准）。{{highlight}}should/ought to{{/highlight}}：应该；预期（按理说应该）。{{highlight}}shall{{/highlight}}：用于第一人称征求意见（Shall I...?）；用于第二、三人称表命令、警告、允诺。{{highlight}}will/would{{/highlight}}：意愿；请求（Would you...?）；习惯性动作（will 表现在的习惯，would 表过去的习惯）。{{highlight}}need{{/highlight}}和{{highlight}}dare{{/highlight}}：既可作情态动词（主要用于否定句和疑问句），也可作实义动词。must 的否定回答用 needn't（不必），而不用 mustn't。"
        },
        {
          term: "情态动词表推测",
          content: "情态动词 + have done 表示对过去的推测或评价。1. {{highlight}}must have done{{/highlight}}：一定做了某事（肯定推测）。例：The ground is wet. It must have rained last night. 2. {{highlight}}can't/couldn't have done{{/highlight}}：不可能做了某事（否定推测）。例：He couldn't have done it; he was with me then. 3. {{highlight}}may/might have done{{/highlight}}：可能做了某事（不确定推测）。例：She might have missed the bus. 4. {{highlight}}should/ought to have done{{/highlight}}：本应该做但没做（责备/遗憾）。例：You should have told me earlier.（你本应该早点告诉我）。5. {{highlight}}shouldn't have done{{/highlight}}：本不该做但做了。6. {{highlight}}needn't have done{{/highlight}}：本不必做但做了。例：You needn't have brought so much food. {{highlight}}could have done{{/highlight}}：本可以做但没做（能力上可以但未实现）。"
        },
        {
          term: "情态动词的特殊用法",
          content: "1. {{highlight}}shall 用于第二/三人称表命令、规定、警告{{/highlight}}：You shall not leave.（你不准离开）；The student shall wear uniforms.（学生须穿校服）。2. {{highlight}}should 表惊讶或出乎意料{{/highlight}}，意为'居然'：It is strange that he should say so.（他居然这么说）。3. {{highlight}}would rather + 动词原形{{/highlight}}：宁愿做某事。I would rather stay at home. 4. {{highlight}}may/might as well{{/highlight}}：不妨，倒不如。You may as well tell the truth. 5. {{highlight}}cannot...too...{{/highlight}}：再……也不为过。You cannot be too careful.（你再怎么小心也不为过）。6. {{highlight}}used to + 动词原形{{/highlight}}：过去常常（现已不如此）。I used to get up early. 7. {{highlight}}had better + 动词原形{{/highlight}}：最好做某事。You'd better not go out alone."
        },
        {
          term: "直接引语与间接引语",
          content: "{{highlight}}直接引语（Direct Speech）{{/highlight}}直接引用说话人的原话，用引号括起；{{highlight}}间接引语（Indirect Speech）{{/highlight}}用自己的话转述说话人的内容，不用引号。直接引语变间接引语的转换规则：1. {{highlight}}人称变化{{/highlight}}：根据转述者的视角调整人称。2. {{highlight}}时态变化{{/highlight}}：主句为过去时态时，从句时态向前推移一步（一般现在→一般过去，现在进行→过去进行，现在完成→过去完成，一般过去→过去完成，一般将来→过去将来）。主句为现在时或将来时，从句时态不变。3. {{highlight}}时间状语变化{{/highlight}}：now→then, today→that day, yesterday→the day before, tomorrow→the next day, this week→that week, ago→before。4. {{highlight}}指示代词变化{{/highlight}}：this→that, these→those。5. {{highlight}}地点状语变化{{/highlight}}：here→there。6. {{highlight}}动词变化{{/highlight}}：come→go, bring→take。7. {{highlight}}疑问句变间接引语{{/highlight}}：用 if/whether（一般疑问句）或 wh- 词（特殊疑问句）引导，语序变为陈述语序。8. {{highlight}}祈使句变间接引语{{/highlight}}：用 tell/ask sb. to do sth. 结构。"
        }
      ]
    }
  ]
},

// ======================== 二、词汇知识 ========================

{
  id: 8,
  module: "词汇知识",
  chapter: "语音知识",
  sections: [
    {
      title: "英语语音基础",
      points: [
        {
          term: "音标与国际音标",
          content: "{{highlight}}国际音标（International Phonetic Alphabet, IPA）{{/highlight}}是记录语音的符号系统，英语中常用的是DJ音标系统（由Daniel Jones编写）和KK音标系统（由John S. Kenyon和Thomas A. Knott编写，主要用于美国英语）。英语共有{{highlight}}48个音标{{/highlight}}：20个元音（12个单元音 + 8个双元音）和28个辅音。掌握音标有助于准确发音和查词典自学单词。元音按发音时舌位高低、前后和唇形分类；辅音按发音部位、发音方式和声带振动与否分类。"
        },
        {
          term: "读音规则",
          content: "英语中字母与发音之间有一定规律但也有大量例外。1. {{highlight}}开音节{{/highlight}}：以发音的元音字母结尾（如 he, go）或以'元音字母+辅音字母+不发音的e'结尾（如 make, bike），元音字母读其字母音。2. {{highlight}}闭音节{{/highlight}}：以辅音字母结尾（如 cat, bed, sit），元音字母读短音。3. {{highlight}}r音节{{/highlight}}：元音字母后跟r（如 car, her, bird, for, turn），元音读长音加/r/。4. {{highlight}}re音节{{/highlight}}：元音字母+re（如 care, here, fire, more, pure），多为双元音。5. {{highlight}}字母组合{{/highlight}}：oo, ee, ea, ou, ow, igh, ight 等有固定读音。6. {{highlight}}词尾读音{{/highlight}}：以-ed结尾的动词过去式有三种读音/t/, /d/, /ɪd/，取决于前一个音的清浊；以-s/es结尾的名词复数和动词第三人称单数有/s/, /z/, /ɪz/三种读音。"
        },
        {
          term: "重音与语调",
          content: "{{highlight}}单词重音{{/highlight}}：英语多音节词有主重音和次重音，重音位置影响词义和词性。如 record（名词重音在第一音节 /ˈrekɔːd/，动词重音在第二音节 /rɪˈkɔːd/）；present（名词/形容词 /ˈpreznt/，动词 /prɪˈzent/）。一般规律：双音节名词重音多在前，双音节动词重音多在后；三音节词重音多在第一音节。{{highlight}}句子重音{{/highlight}}：英语句子中实词（名词、动词、形容词、副词）通常重读，虚词（冠词、介词、连词、助动词）通常不重读，但强调时虚词也可重读。{{highlight}}语调{{/highlight}}：1. {{highlight}}降调{{/highlight}}：用于陈述句、特殊疑问句、祈使句和感叹句，表肯定和结束。2. {{highlight}}升调{{/highlight}}：用于一般疑问句和表示礼貌的请求，表不确定或邀请。3. {{highlight}}降升调{{/highlight}}：表保留、犹豫或暗示，言外之意。4. {{highlight}}选择疑问句{{/highlight}}：or 前部分用升调，or 后部分用降调。5. {{highlight}}列举事物{{/highlight}}：前几项用升调，最后一项用降调。"
        }
      ]
    }
  ]
},

{
  id: 9,
  module: "词汇知识",
  chapter: "词根词缀",
  sections: [
    {
      title: "常见前缀",
      points: [
        {
          term: "否定前缀",
          content: "否定前缀用于改变词的肯定/否定意义。{{highlight}}un-{{/highlight}}：happy→unhappy, fair→unfair, important→unimportant。{{highlight}}in-/im-/il-/ir-{{/highlight}}（在字母b,m,p前用im-，在字母l前用il-，在字母r前用ir-）：visible→invisible, possible→impossible, legal→illegal, regular→irregular。{{highlight}}dis-{{/highlight}}：like→dislike, agree→disagree, appear→disappear。{{highlight}}non-{{/highlight}}：stop→nonstop, sense→nonsense。{{highlight}}mis-{{/highlight}}：understand→misunderstand, lead→mislead。{{highlight}}counter-{{/highlight}}：attack→counterattack。注意：否定前缀通常不改变词性，只改变词义。"
        },
        {
          term: "其他前缀",
          content: "1. {{highlight}}表示'再、重新'：re-{{/highlight}}，如 build→rebuild, write→rewrite, consider→reconsider, cycle→recycle。2. {{highlight}}表示'过度、太'：over-{{/highlight}}，如 work→overwork, eat→overeat, weight→overweight。3. {{highlight}}表示'不足、低于'：under-{{/highlight}}，如 estimate→underestimate, develop→underdevelop。4. {{highlight}}表示'前、在前'：pre-{{/highlight}}，如 view→preview, pay→prepay, historical→prehistorical。5. {{highlight}}表示'后、在后'：post-{{/highlight}}，如 war→postwar, graduate→postgraduate。6. {{highlight}}表示'超越'：sur-/super-{{/highlight}}，如 pass→surpass, market→supermarket。7. {{highlight}}表示'自己'：self-{{/highlight}}，如 service→self-service, control→self-control。8. {{highlight}}表示'半'：semi-{{/highlight}}，如 circle→semicircle, final→semifinal。"
        }
      ]
    },
    {
      title: "常见后缀",
      points: [
        {
          term: "名词后缀",
          content: "名词后缀用于将动词或形容词变为名词。1. {{highlight}}-er/-or{{/highlight}}（表人）：teach→teacher, write→writer, act→actor, direct→director, invent→inventor。2. {{highlight}}-tion/-sion{{/highlight}}：educate→education, decide→decision, discuss→discussion。3. {{highlight}}-ment{{/highlight}}：develop→development, achieve→achievement, argue→argument。4. {{highlight}}-ness{{/highlight}}（加在形容词后）：happy→happiness, dark→darkness, ill→illness。5. {{highlight}}-ity{{/highlight}}：able→ability, possible→possibility, responsible→responsibility。6. {{highlight}}-ance/-ence{{/highlight}}：important→importance, different→difference, independent→independence。7. {{highlight}}-al{{/highlight}}：refuse→refusal, arrive→arrival, survive→survival。8. {{highlight}}-ist{{/highlight}}（表人）：art→artist, science→scientist, piano→pianist。9. {{highlight}}-ship{{/highlight}}（表关系或状态）：friend→friendship, relation→relationship, member→membership。"
        },
        {
          term: "形容词与动词后缀",
          content: "{{highlight}}形容词后缀{{/highlight}}：1. -ful（full of）：care→careful, hope→hopeful, use→useful, beauty→beautiful。2. -less（without）：care→careless, hope→hopeless, use→useless, home→homeless。3. -ous：danger→dangerous, fame→famous, nerve→nervous。4. -able/-ible（can be done）：read→readable, comfort→comfortable, believe→believable。5. -al：nature→natural, culture→cultural, nation→national。6. -ive：act→active, create→creative, attract→attractive。7. -y：sun→sunny, wind→windy, health→healthy。8. -en：wood→wooden, gold→golden。{{highlight}}动词后缀{{/highlight}}：1. -ize/-ise（使……化）：modern→modernize, real→realize, special→specialize。2. -en（使变得）：wide→widen, short→shorten, strength→strengthen。3. -fy：simple→simplify, pure→purify, class→classify。4. -ate：active→activate, courage→encourage。"
        },
        {
          term: "常见词根",
          content: "掌握词根有助于猜测生词意义。1. {{highlight}}port{{/highlight}}（carry，搬运）：transport（运输），import（进口），export（出口），portable（便携的）。2. {{highlight}}spect{{/highlight}}（look，看）：inspect（检查），respect（尊重），aspect（方面），prospect（前景）。3. {{highlight}}tract{{/highlight}}（draw，拉）：attract（吸引），distract（分散注意力），extract（提取），contract（合同/收缩）。4. {{highlight}}mit/miss{{/highlight}}（send，送）：submit（提交），admit（承认/准入），permit（允许），dismiss（解散）。5. {{highlight}}duc/duct{{/highlight}}（lead，引导）：conduct（引导/ conduct），introduce（介绍），educate（教育），reduce（减少）。6. {{highlight}}ject{{/highlight}}（throw，扔）：reject（拒绝），inject（注射），project（项目/投射），eject（弹出）。7. {{highlight}}scribe/script{{/highlight}}（write，写）：describe（描述），subscribe（订阅），prescribe（开处方），manuscript（手稿）。"
        }
      ]
    }
  ]
},

{
  id: 10,
  module: "词汇知识",
  chapter: "易混淆词汇辨析",
  sections: [
    {
      title: "常考近义词辨析",
      points: [
        {
          term: "speak/say/tell/talk",
          content: "{{highlight}}speak{{/highlight}}：强调说话的能力或行为本身，后不接that从句，可接语言名。例：He speaks English fluently. / May I speak to Tom? {{highlight}}say{{/highlight}}：强调说话的内容，后接引语或that从句。例：He said that he was tired. / 'Hello,' she said. {{highlight}}tell{{/highlight}}：强调告诉某人某事，接双宾语 tell sb. sth.。例：She told me the news. 常见搭配：tell the truth（说实话），tell a lie（撒谎），tell a story（讲故事），tell sb. to do sth.（让某人做某事）。{{highlight}}talk{{/highlight}}：强调交谈，双方互动。例：They are talking about the weather. 常见搭配：talk to/with sb.（与某人交谈），talk about sth.（谈论某事）。"
        },
        {
          term: "raise/rise/arise/arouse",
          content: "{{highlight}}raise{{/highlight}}：及物动词，'举起、提高、抚养、筹集'，后接宾语，有被动语态。例：raise your hand（举手），raise prices（提价），raise children（抚养孩子），raise money（筹款）。{{highlight}}rise{{/highlight}}：不及物动词，'上升、升起、增加'，后不接宾语，无被动语态（rise-rose-risen）。例：The sun rises in the east. / Prices rose sharply. {{highlight}}arise{{/highlight}}：不及物动词，'出现、产生'（多指问题、困难等抽象事物），较正式。例：A new problem has arisen. / Accidents arise from carelessness. {{highlight}}arouse{{/highlight}}：及物动词，'引起、唤醒、激发'。例：arouse interest（引起兴趣），arouse suspicion（引起怀疑），arouse sb. from sleep（唤醒某人）。"
        },
        {
          term: "affect/effect/influence",
          content: "{{highlight}}affect{{/highlight}}：及物动词，'影响'，直接接宾语。例：The bad weather affected our plan. {{highlight}}effect{{/highlight}}：通常作名词，'效果、影响'。常见搭配：have an effect on（对……有影响），side effect（副作用），in effect（实际上），take effect（生效）。effect 也可作及物动词，意为'使发生、实现'，但较少用，如 effect a change（实现变革）。{{highlight}}influence{{/highlight}}：既可作动词也可作名词，侧重'潜移默化的影响'。作名词搭配：have an influence on/upon；under the influence of（在……的影响下）。例：His teacher had a great influence on his career. {{highlight}}impress{{/highlight}}：'给……留下印象'，impress sb. with sth. / impress sth. on sb.；形容词 impressed/impressive。"
        },
        {
          term: "adapt/adopt/adept",
          content: "{{highlight}}adapt{{/highlight}}：'（使）适应、改编'。adapt to + 名词：适应……；adapt sth. for sth.：把某物改编为……。例：We must adapt to the new environment. / The novel was adapted for a film. {{highlight}}adopt{{/highlight}}：'收养、采纳、采用'。adopt a child（收养孩子），adopt a policy（采纳政策），adopt a method（采用方法）。例：The school adopted a new teaching method. {{highlight}}adept{{/highlight}}：形容词，'熟练的、内行的'。be adept at/in：擅长……。例：She is adept at solving math problems. 这三个词形近但义远，是常考辨析点。"
        },
        {
          term: "其他常考易混淆词组",
          content: "1. {{highlight}}lay/lie{{/highlight}}：lay（放置，及物，lay-laid-laid-laying）；lie（躺，不及物，lie-lay-lain-lying）；lie（说谎，lie-lied-lied-lying）。2. {{highlight}}borrow/lend{{/highlight}}：borrow sth. from sb.（借入）；lend sth. to sb. / lend sb. sth.（借出）。3. {{highlight}}bring/take/fetch/carry{{/highlight}}：bring（带来，朝说话者方向）；take（带走，离开说话者）；fetch（去取来，往返）；carry（携带，不强调方向）。4. {{highlight}}receive/accept{{/highlight}}：receive（收到，客观上的接收）；accept（接受，主观上的接受）。5. {{highlight}}win/beat{{/highlight}}：win + 事物（win a game/prize/war）；beat + 人/队伍（beat the opponent）。6. {{highlight}}alone/lonely{{/highlight}}：alone（独自一人，客观状态）；lonely（孤独的，主观感受）。7. {{highlight}}sensible/sensitive{{/highlight}}：sensible（明智的，合理的）；sensitive（敏感的，灵敏的）。"
        }
      ]
    }
  ]
},

{
  id: 11,
  module: "词汇知识",
  chapter: "固定搭配与短语动词",
  sections: [
    {
      title: "常见短语动词",
      points: [
        {
          term: "动词+介词/副词",
          content: "1. {{highlight}}look 短语{{/highlight}}：look after（照顾），look for（寻找），look forward to（期待），look into（调查），look up（查阅，抬头看），look up to（尊敬），look down upon（轻视），look out（小心），look over（检查），look through（浏览）。2. {{highlight}}get 短语{{/highlight}}：get up（起床），get on/off（上/下车），get over（克服），get along with（与……相处），get rid of（摆脱），get through（通过，接通电话），get away（逃跑），get back（回来，取回）。3. {{highlight}}put 短语{{/highlight}}：put on（穿上，上演），put off（推迟），put up（搭建，张贴），put up with（忍受），put away（放好，储存），put down（写下，放下），put out（熄灭）。4. {{highlight}}take 短语{{/highlight}}：take off（起飞，脱下），take up（从事，占据），take over（接管），take after（长得像），take in（吸收，欺骗），take on（承担），take place（发生）。"
        },
        {
          term: "常考固定搭配",
          content: "1. {{highlight}}make 短语{{/highlight}}：make up（组成，编造，化妆），make up for（弥补），make out（辨认出，理解），make sense（有意义），make sure（确保），make a difference（起作用），make an effort（努力），make up one's mind（下定决心）。2. {{highlight}}turn 短语{{/highlight}}：turn on/off（开/关），turn up（出现，调大），turn down（拒绝，调小），turn out（结果是），turn over（翻转），turn to（求助于），turn into（变成）。3. {{highlight}}break 短语{{/highlight}}：break out（爆发），break down（出故障，崩溃），break up（分手，解散），break in（闯入，插嘴），break through（突破），break away from（脱离）。4. {{highlight}}give 短语{{/highlight}}：give up（放弃），give in（屈服，上交），give away（赠送，泄露），give out（分发，耗尽），give back（归还），give rise to（引起）。"
        },
        {
          term: "介词搭配与易考短语",
          content: "1. {{highlight}}be 动词短语{{/highlight}}：be used to doing（习惯于做），be accustomed to doing（习惯于），be devoted to（致力于），be opposed to（反对），be addicted to（沉迷于），be subject to（受制于），be equal to（等于，胜任），be familiar with/to（熟悉/为……所熟悉），be similar to（与……相似），be sensitive to（对……敏感）。2. {{highlight}}名词搭配{{/highlight}}：have access to（有途径接触），make reference to（参考），pay attention to（注意），attach importance to（重视），in addition to（除……之外还），on the basis of（基于），for the sake of（为了），by means of（通过），in charge of（负责），in favor of（支持）。3. {{highlight}}动词+名词搭配{{/highlight}}：take effect（生效），take measures（采取措施），take advantage of（利用），take into consideration（考虑），make progress（取得进步），make sense of（理解），come to terms with（接受，妥协）。"
        }
      ]
    }
  ]
},

// ======================== 三、英美文学 ========================

{
  id: 12,
  module: "英美文学",
  chapter: "英国文学",
  sections: [
    {
      title: "早期与文艺复兴时期",
      points: [
        {
          term: "古英语与中古英语文学",
          content: "{{highlight}}《贝奥武夫》（Beowulf）{{/highlight}}是英国文学中最古老的长篇史诗，用古英语写成，讲述英雄贝奥武夫与怪物格兰代尔搏斗的故事，属于{{highlight}}盎格鲁-撒克逊时期{{/highlight}}文学。中古英语时期最杰出的作家是{{highlight}}杰弗里·乔叟（Geoffrey Chaucer）{{/highlight}}，被誉为{{highlight}}'英国诗歌之父'{{/highlight}}（Father of English Poetry），其代表作{{highlight}}《坎特伯雷故事集》（The Canterbury Tales）{{/highlight}}用中古英语写成，以框架故事的形式讲述一群朝圣者前往坎特伯雷途中各自讲的故事，生动描绘了14世纪英国社会各阶层的生活图景。乔叟首创了英雄双韵体（heroic couplet），对英国诗歌发展影响深远。"
        },
        {
          term: "英国文艺复兴时期",
          content: "英国文艺复兴始于16世纪，盛于伊丽莎白一世时期。{{highlight}}威廉·莎士比亚（William Shakespeare）{{/highlight}}是英国文艺复兴时期最伟大的剧作家和诗人，共创作了37部戏剧和154首十四行诗（Sonnets）。{{highlight}}四大悲剧{{/highlight}}：《哈姆雷特》（Hamlet）、《奥赛罗》（Othello）、《李尔王》（King Lear）、《麦克白》（Macbeth）。{{highlight}}四大喜剧{{/highlight}}：《威尼斯商人》（The Merchant of Venice）、《仲夏夜之梦》（A Midsummer Night's Dream）、《皆大欢喜》（As You Like It）、《第十二夜》（Twelfth Night）。其他重要作品：历史剧《亨利四世》、传奇剧《暴风雨》（The Tempest）等。莎士比亚对英语语言的贡献巨大，创造了大量英语习语和表达。同期的{{highlight}}培根（Francis Bacon）{{/highlight}}以散文闻名，代表作《论说文集》（Essays）是英国散文史上的里程碑。"
        },
        {
          term: "文艺复兴时期的其他重要作家",
          content: "{{highlight}}埃德蒙·斯宾塞（Edmund Spenser）{{/highlight}}：被誉为'诗人之诗人'（Poets' Poet），代表作{{highlight}}《仙后》（The Faerie Queene）{{/highlight}}，首创了斯宾塞诗节（Spenserian stanza）。{{highlight}}克里斯托弗·马洛（Christopher Marlowe）{{/highlight}}：莎士比亚之前最重要的剧作家，首创无韵诗体（blank verse）在戏剧中的运用，代表作《浮士德博士的悲剧》（Dr. Faustus）。{{highlight}}约翰·弥尔顿（John Milton）{{/highlight}}：17世纪伟大诗人，清教徒革命的支持者，代表作{{highlight}}《失乐园》（Paradise Lost）{{/highlight}}是一部以圣经为题材的史诗，探讨人类堕落的主题，还有《复乐园》（Paradise Regained）和力作《力士参孙》（Samson Agonistes）。{{highlight}}约翰·班扬（John Bunyan）{{/highlight}}：清教徒作家，代表作{{highlight}}《天路历程》（The Pilgrim's Progress）{{/highlight}}是英语文学中最著名的宗教寓言小说。"
        }
      ]
    },
    {
      title: "新古典主义与浪漫主义时期",
      points: [
        {
          term: "英国新古典主义时期",
          content: "新古典主义时期（约1660-1798年）强调理性、秩序和规范。{{highlight}}约翰·德莱顿（John Dryden）{{/highlight}}：英国第一位桂冠诗人（Poet Laureate），新古典主义的先驱。{{highlight}}亚历山大·蒲柏（Alexander Pope）{{/highlight}}：新古典主义诗歌代表，擅长英雄双韵体，代表作《论批评》（An Essay on Criticism）、《夺发记》（The Rape of the Lock）。{{highlight}}丹尼尔·笛福（Daniel Defoe）{{/highlight}}：英国小说之父，代表作{{highlight}}《鲁滨逊漂流记》（Robinson Crusoe）{{/highlight}}，开创了英国现实主义小说的先河。{{highlight}}乔纳森·斯威夫特（Jonathan Swift）{{/highlight}}：讽刺大师，代表作{{highlight}}《格列佛游记》（Gulliver's Travels）{{/highlight}}，以辛辣讽刺著称。{{highlight}}亨利·菲尔丁（Henry Fielding）{{/highlight}}：被誉为'英国小说之父'，代表作《汤姆·琼斯》（Tom Jones），奠定了英国小说的结构基础。"
        },
        {
          term: "英国浪漫主义诗歌",
          content: "英国浪漫主义时期（约1798-1837年）强调个人情感、想象力和自然。{{highlight}}第一代浪漫主义诗人（湖畔派诗人 Lakes Poets）{{/highlight}}：1. {{highlight}}华兹华斯（William Wordsworth）{{/highlight}}：浪漫主义诗歌的先驱，1843年成为桂冠诗人，代表作{{highlight}}《抒情歌谣集》（Lyrical Ballads）{{/highlight}}（与柯勒律治合著，标志着英国浪漫主义的开端），名诗《水仙花》（I Wandered Lonely as a Cloud/Daffodils）、《丁登寺》（Tintern Abbey）。2. {{highlight}}柯勒律治（Samuel Taylor Coleridge）{{/highlight}}：代表作《古舟子咏》（The Rime of the Ancient Mariner）、《忽必烈汗》（Kubla Khan）。3. {{highlight}}骚塞（Robert Southey）{{/highlight}}：桂冠诗人，散文和叙事诗见长。"
        },
        {
          term: "拜伦式英雄与第二代浪漫主义诗人",
          content: "{{highlight}}拜伦（George Gordon Byron）{{/highlight}}：第二代浪漫主义诗人代表，创造了著名的'拜伦式英雄'（Byronic Hero）——孤独、叛逆、高傲的浪漫形象。代表作长篇叙事诗{{highlight}}《唐璜》（Don Juan）{{/highlight}}、《恰尔德·哈罗德游记》（Childe Harold's Pilgrimage）。{{highlight}}雪莱（Percy Bysshe Shelley）{{/highlight}}：被誉为'天才的预言家'，代表作{{highlight}}《西风颂》（Ode to the West Wind）{{/highlight}}（名句：'冬天来了，春天还会远吗？' If Winter comes, can Spring be far behind?）、《致云雀》（To a Skylark）、《解放了的普罗米修斯》（Prometheus Unbound）。{{highlight}}济慈（John Keats）{{/highlight}}：以感官意象之美著称，代表作《夜莺颂》（Ode to a Nightingale）、《希腊古瓮颂》（Ode on a Grecian Urn）（名句：'美即是真，真即是美' Beauty is truth, truth beauty）。"
        },
        {
          term: "浪漫主义时期小说",
          content: "{{highlight}}简·奥斯汀（Jane Austen）{{/highlight}}：英国现实主义小说先驱，以细腻的社会观察和讽刺幽默著称。代表作{{highlight}}《傲慢与偏见》（Pride and Prejudice）{{/highlight}}、《理智与情感》（Sense and Sensibility）、《爱玛》（Emma）、《诺桑觉寺》（Northanger Abbey）。她的小说主要描写乡绅阶层的婚姻和家庭生活。{{highlight}}玛丽·雪莱（Mary Shelley）{{/highlight}}：雪莱之妻，代表作{{highlight}}《弗兰肯斯坦》（Frankenstein）{{/highlight}}，被誉为第一部科幻小说。{{highlight}}沃尔特·司各特（Walter Scott）{{/highlight}}：历史小说创始人，代表作《艾凡赫》（Ivanhoe）、《威弗利》（Waverley），对欧洲历史小说的发展影响深远。"
        }
      ]
    },
    {
      title: "维多利亚时期与现代主义",
      points: [
        {
          term: "维多利亚时期小说（批判现实主义）",
          content: "维多利亚时期（1837-1901年）是英国小说的黄金时代，以批判现实主义为主要特征。{{highlight}}查尔斯·狄更斯（Charles Dickens）{{/highlight}}：最伟大的维多利亚小说家，作品关注社会底层人民的生活，代表作{{highlight}}《雾都孤儿》（Oliver Twist）{{/highlight}}、《大卫·科波菲尔》（David Copperfield）、《双城记》（A Tale of Two Cities）（名句：'这是最好的时代，也是最坏的时代' It was the best of times, it was the worst of times）、《远大前程》（Great Expectations）。{{highlight}}勃朗特姐妹{{/highlight}}：{{highlight}}夏洛蒂·勃朗特（Charlotte Brontë）{{/highlight}}的{{highlight}}《简·爱》（Jane Eyre）{{/highlight}}；{{highlight}}艾米莉·勃朗特（Emily Brontë）{{/highlight}}的{{highlight}}《呼啸山庄》（Wuthering Heights）{{/highlight}}；安妮·勃朗特的《艾格尼丝·格雷》。{{highlight}}乔治·艾略特（George Eliot）{{/highlight}}（Mary Ann Evans笔名）：代表作《米德尔马契》（Middlemarch）、《弗洛斯河上的磨坊》（The Mill on the Floss），以心理描写见长。{{highlight}}托马斯·哈代（Thomas Hardy）{{/highlight}}：代表作《德伯家的苔丝》（Tess of the d'Urbervilles）、《无名的裘德》（Jude the Obscure），作品带有宿命论色彩。"
        },
        {
          term: "20世纪英国文学与现代主义",
          content: "{{highlight}}D.H. 劳伦斯（D.H. Lawrence）{{/highlight}}：代表作{{highlight}}《儿子与情人》（Sons and Lovers）{{/highlight}}、《虹》（The Rainbow）、《恋爱中的女人》（Women in Love），探讨人的本能和心理。{{highlight}}弗吉尼亚·伍尔夫（Virginia Woolf）{{/highlight}}：意识流文学代表人物，代表作《达洛维夫人》（Mrs. Dalloway）、《到灯塔去》（To the Lighthouse），女性主义先驱，散文《一间自己的房间》（A Room of One's Own）提出'女人要写作必须有钱和自己的房间'。{{highlight}}詹姆斯·乔伊斯（James Joyce）{{/highlight}}（爱尔兰作家）：意识流文学大师，代表作{{highlight}}《尤利西斯》（Ulysses）{{/highlight}}、《都柏林人》（Dubliners）、《青年艺术家的画像》（A Portrait of the Artist as a Young Man）。{{highlight}}T.S. 艾略特（T.S. Eliot）{{/highlight}}：现代主义诗歌代表，代表作{{highlight}}《荒原》（The Waste Land）{{/highlight}}，另有《空心人》（The Hollow Men）、《四个四重奏》（Four Quartets）；诗剧《大教堂凶杀案》。{{highlight}}威廉·戈尔丁（William Golding）{{/highlight}}：1983年诺贝尔文学奖得主，代表作《蝇王》（Lord of the Flies）。"
        }
      ]
    }
  ]
},

{
  id: 13,
  module: "英美文学",
  chapter: "美国文学",
  sections: [
    {
      title: "早期与超验主义时期",
      points: [
        {
          term: "美国早期文学",
          content: "{{highlight}}本杰明·富兰克林（Benjamin Franklin）{{/highlight}}：美国启蒙运动代表，代表作{{highlight}}《穷理查年鉴》（Poor Richard's Almanac）{{/highlight}}和《自传》（The Autobiography），体现了美国精神中的自力更生和实用主义。{{highlight}}华盛顿·欧文（Washington Irving）{{/highlight}}：被誉为{{highlight}}'美国文学之父'{{/highlight}}（Father of American Literature），代表作《见闻札记》（The Sketch Book），其中包含名篇{{highlight}}《瑞普·凡·温克尔》（Rip Van Winkle）{{/highlight}}和{{highlight}}《睡谷传说》（The Legend of Sleepy Hollow）{{/highlight}}，是美国第一部获得国际认可的文学作品。{{highlight}}詹姆斯·费尼莫尔·库珀（James Fenimore Cooper）{{/highlight}}：美国小说之父，开创了美国边疆小说和海洋小说，代表作《最后的莫希干人》（The Last of the Mohicans）。"
        },
        {
          term: "美国超验主义",
          content: "{{highlight}}超验主义（Transcendentalism）{{/highlight}}是19世纪30-40年代发生在美国东部的一场思想文化运动，强调个人直觉与自然的和谐，反对理性主义和形式主义宗教。核心人物{{highlight}}拉尔夫·沃尔多·爱默生（Ralph Waldo Emerson）{{/highlight}}：超验主义领袖，代表作{{highlight}}《自然》（Nature）{{/highlight}}（超验主义的宣言书）、《美国学者》（The American Scholar）（被誉为'美国思想界的独立宣言'）、《自立》（Self-Reliance）。{{highlight}}亨利·大卫·梭罗（Henry David Thoreau）{{/highlight}}：超验主义实践者，代表作{{highlight}}《瓦尔登湖》（Walden）{{/highlight}}，记录了他在瓦尔登湖畔独居两年的生活，倡导简朴生活和精神追求；《论公民的不服从》（Civil Disobedience）影响了后世的非暴力抵抗运动。{{highlight}}纳撒尼尔·霍桑（Nathaniel Hawthorne）{{/highlight}}：深受超验主义影响但持批判态度，代表作{{highlight}}《红字》（The Scarlet Letter）{{/highlight}}，探讨罪恶与赎罪的主题，是美国文学史上的经典之作。"
        },
        {
          term: "惠特曼与狄金森",
          content: "{{highlight}}沃尔特·惠特曼（Walt Whitman）{{/highlight}}：美国诗歌之父，开创了自由诗体（free verse），代表作{{highlight}}《草叶集》（Leaves of Grass）{{/highlight}}，其中《自我之歌》（Song of Myself）是最著名长诗，歌颂民主、自由和个人价值，展现了美国精神。惠特曼的诗歌风格自由奔放，突破了传统诗歌格律的限制。{{highlight}}艾米莉·狄金森（Emily Dickinson）{{/highlight}}：与惠特曼并称为19世纪美国最伟大的两位诗人，一生隐居，创作了近1800首诗但生前只发表了几首。她的诗歌以独特的意象、破折号和大写字母为特色，主题涉及死亡、永恒、自然和灵魂。代表作如《因为我不能停步等候死亡》（Because I could not stop for Death）、《我是无名之辈！你是谁？》（I'm Nobody! Who are you?）。惠特曼和狄金森共同奠定了美国现代诗歌的基础。"
        }
      ]
    },
    {
      title: "现实主义与自然主义",
      points: [
        {
          term: "美国现实主义文学",
          content: "美国现实主义时期（约1865-1914年）关注社会现实和日常生活。{{highlight}}马克·吐温（Mark Twain）{{/highlight}}（Samuel Langhorne Clemens的笔名）：美国文学史上的里程碑式人物，威廉·福克纳称他为'美国文学之父'。代表作{{highlight}}《哈克贝利·费恩历险记》（Adventures of Huckleberry Finn）{{/highlight}}（被誉为美国文学的经典之作）、《汤姆·索亚历险记》（The Adventures of Tom Sawyer）。马克·吐温以幽默讽刺的笔调和地方色彩（local color）著称，开创了美国口语化文学风格。{{highlight}}亨利·詹姆斯（Henry James）{{/highlight}}：心理现实主义大师，关注人物内心世界，代表作《贵妇人画像》（The Portrait of a Lady）、《黛西·米勒》（Daisy Miller）、《螺丝在拧紧》（The Turn of the Screw），对'意识流'文学有先驱意义。"
        },
        {
          term: "美国自然主义文学",
          content: "{{highlight}}自然主义（Naturalism）{{/highlight}}是现实主义的极端形式，强调环境和遗传对人的决定作用，人受自然和社会力量的支配。{{highlight}}斯蒂芬·克莱恩（Stephen Crane）{{/highlight}}：代表作《红色英勇勋章》（The Red Badge of Courage），描写美国内战。{{highlight}}杰克·伦敦（Jack London）{{/highlight}}：代表作《野性的呼唤》（The Call of the Wild）、《马丁·伊登》（Martin Eden），作品体现达尔文主义'适者生存'的思想。{{highlight}}西奥多·德莱塞（Theodore Dreiser）{{/highlight}}：美国自然主义文学的代表，代表作{{highlight}}《美国悲剧》（An American Tragedy）{{/highlight}}、《嘉莉妹妹》（Sister Carrie），揭示美国社会的贫富分化和道德困境。{{highlight}}欧·亨利（O. Henry）{{/highlight}}：短篇小说大师，以出人意料的结局（O. Henry ending）著称，代表作《麦琪的礼物》（The Gift of the Magi）、《最后一片叶子》（The Last Leaf）。"
        }
      ]
    },
    {
      title: "现代主义与当代文学",
      points: [
        {
          term: "美国现代主义文学",
          content: "{{highlight}}20世纪初的美国现代主义文学{{/highlight}}迎来了'第二次文艺复兴'（Lost Generation 迷惘的一代）。{{highlight}}弗朗西斯·斯科特·菲茨杰拉德（F. Scott Fitzgerald）{{/highlight}}：'迷惘的一代'代表作家，代表作{{highlight}}《了不起的盖茨比》（The Great Gatsby）{{/highlight}}，描绘了'爵士时代'（Jazz Age）的美国梦破灭，另有《夜色温柔》（Tender Is the Night）。{{highlight}}欧内斯特·海明威（Ernest Hemingway）{{/highlight}}：1954年诺贝尔文学奖得主，以简洁有力的文风和'冰山理论'（Iceberg Theory）著称，代表作{{highlight}}《老人与海》（The Old Man and the Sea）{{/highlight}}、《太阳照常升起》（The Sun Also Rises）、《永别了，武器》（A Farewell to Arms）、《丧钟为谁而鸣》（For Whom the Bell Tolls）。{{highlight}}威廉·福克纳（William Faulkner）{{/highlight}}：1949年诺贝尔文学奖得主，南方文学代表，以意识流手法和约克纳帕塔法县（Yoknapatawpha County）系列小说闻名，代表作《喧哗与骚动》（The Sound and the Fury）、《我弥留之际》（As I Lay Dying）。"
        },
        {
          term: "美国当代文学",
          content: "{{highlight}}约翰·斯坦贝克（John Steinbeck）{{/highlight}}：1962年诺贝尔文学奖得主，代表作《愤怒的葡萄》（The Grapes of Wrath）、《人鼠之间》（Of Mice and Men），关注底层劳动人民。{{highlight}}托妮·莫里森（Toni Morrison）{{/highlight}}：1993年诺贝尔文学奖得主，第一位获此殊荣的非裔美国女性，代表作《宠儿》（Beloved）、《最蓝的眼睛》（The Bluest Eye），探讨种族、性别和身份问题。{{highlight}}海明威与福克纳之后{{/highlight}}的重要作家：{{highlight}}J.D. 塞林格（J.D. Salinger）{{/highlight}}的{{highlight}}《麦田里的守望者》（The Catcher in the Rye）{{/highlight}}，成为青少年叛逆的经典；{{highlight}}哈珀·李（Harper Lee）{{/highlight}}的{{highlight}}《杀死一只知更鸟》（To Kill a Mockingbird）{{/highlight}}，探讨种族正义主题。{{highlight}}尤金·奥尼尔（Eugene O'Neill）{{/highlight}}：美国现代戏剧之父，1936年诺贝尔文学奖得主，代表作《长夜漫漫路迢迢》（Long Day's Journey into Night）、《毛猿》（The Hairy Ape）。"
        }
      ]
    }
  ]
},

// ======================== 四、英美概况 ========================

{
  id: 14,
  module: "英美概况",
  chapter: "英国概况",
  sections: [
    {
      title: "英国地理与政治",
      points: [
        {
          term: "英国地理",
          content: "{{highlight}}英国全称：大不列颠及北爱尔兰联合王国（The United Kingdom of Great Britain and Northern Ireland）{{/highlight}}，由{{highlight}}英格兰（England）、苏格兰（Scotland）、威尔士（Wales）和北爱尔兰（Northern Ireland）{{/highlight}}四个部分组成。英国是一个岛国，位于欧洲大陆西北部，东临北海，南隔英吉利海峡（English Channel）与法国相望，西临大西洋和爱尔兰海。{{highlight}}首都伦敦（London）{{/highlight}}是政治、经济和文化中心。英格兰首府伦敦，苏格兰首府爱丁堡（Edinburgh），威尔士首府卡迪夫（Cardiff），北爱尔兰首府贝尔法斯特（Belfast）。英国最高峰本尼维斯山（Ben Nevis）位于苏格兰。最长的河流塞文河（Severn）和最重要的河流泰晤士河（Thames）均在英格兰。英国气候属温带海洋性气候，温和湿润。"
        },
        {
          term: "英国政治体制",
          content: "英国是{{highlight}}君主立宪制（constitutional monarchy）和议会制（parliamentary system）{{/highlight}}国家。{{highlight}}国家元首是国王或女王（Monarch）{{/highlight}}，现任为查尔斯三世（King Charles III），君主角色主要是象征性的，实行'统而不治'。{{highlight}}立法机构是议会（Parliament）{{/highlight}}，由两院组成：{{highlight}}上议院（House of Lords）{{/highlight}}（贵族院，非选举产生，主要起审查和修改法案的作用）和{{highlight}}下议院（House of Commons）{{/highlight}}（平民院，由选民选举产生，拥有真正的立法权）。{{highlight}}政府首脑是首相（Prime Minister）{{/highlight}}，由下议院多数党领袖担任，首相组阁，内阁对议会负责。英国两大主要政党是{{highlight}}保守党（Conservative Party）{{/highlight}}和{{highlight}}工党（Labour Party）{{/highlight}}。英国没有成文宪法，其宪政基础由一系列法案、普通法和惯例构成。"
        },
        {
          term: "英国历史要点",
          content: "1. {{highlight}}1066年诺曼征服（Norman Conquest）{{/highlight}}：法国诺曼底公爵威廉征服英格兰，确立了封建制度，对英语语言和英国文化产生深远影响。2. {{highlight}}《大宪章》（Magna Carta, 1215年）{{/highlight}}：限制王权，奠定宪政基础。3. {{highlight}}英国内战（1642-1651）{{/highlight}}：查理一世被送上断头台，克伦威尔建立共和，后王政复辟。4. {{highlight}}光荣革命（Glorious Revolution, 1688）{{/highlight}}：确立君主立宪制和议会主权。5. {{highlight}}工业革命（Industrial Revolution）{{/highlight}}：18世纪60年代从英国开始，使英国成为'世界工厂'。6. {{highlight}}维多利亚时代（1837-1901）{{/highlight}}：英国国力鼎盛，'日不落帝国'（Empire on which the sun never sets）。7. {{highlight}}二战后{{/highlight}}：大英帝国解体，殖民地纷纷独立，英国转为英联邦（Commonwealth of Nations）。"
        },
        {
          term: "英国教育与文化",
          content: "{{highlight}}英国教育体系{{/highlight}}：义务教育年龄为5-16岁。小学（Primary School, 5-11岁），中学（Secondary School, 11-16岁），16岁参加{{highlight}}GCSE{{/highlight}}（General Certificate of Secondary Education）考试。之后可选择继续教育，18岁参加{{highlight}}A-Level{{/highlight}}（Advanced Level）考试，是大学入学的主要依据。{{highlight}}英国最著名的大学{{/highlight}}：牛津大学（University of Oxford）和剑桥大学（University of Cambridge），合称'牛剑'（Oxbridge），是英语世界最古老的大学。英国广播公司{{highlight}}BBC（British Broadcasting Corporation）{{/highlight}}是英国国家广播机构。英国国教为{{highlight}}英国国教会（Church of England）{{/highlight}}，由英王担任最高领袖。重要节日：圣诞节（Christmas, 12月25日）、复活节（Easter）、节礼日（Boxing Day, 12月26日）。英国国旗称'Union Jack'。"
        }
      ]
    }
  ]
},

{
  id: 15,
  module: "英美概况",
  chapter: "美国概况",
  sections: [
    {
      title: "美国地理与政治",
      points: [
        {
          term: "美国地理",
          content: "{{highlight}}美利坚合众国（The United States of America）{{/highlight}}由50个州组成，其中48个州位于北美大陆本土，另外两个是阿拉斯加州（Alaska，位于北美西北端）和夏威夷州（Hawaii，位于太平洋中）。首都{{highlight}}华盛顿哥伦比亚特区（Washington, D.C.）{{/highlight}}，以美国第一任总统乔治·华盛顿命名。美国本土东临大西洋，西濒太平洋，北邻加拿大，南接墨西哥。{{highlight}}主要地理分区{{/highlight}}：东海岸、阿巴拉契亚山脉（Appalachian Mountains）、中部大平原（Great Plains）、落基山脉（Rocky Mountains）、西海岸。最长河流密西西比河（Mississippi River），最大河流流域。五大湖（Great Lakes）：苏必利尔湖、休伦湖、密歇根湖、伊利湖、安大略湖，是世界最大的淡水湖群。最大城市纽约（New York City），其他主要城市有洛杉矶、芝加哥、休斯顿等。"
        },
        {
          term: "美国政治体制",
          content: "美国是{{highlight}}联邦制共和政体（federal republic）{{/highlight}}，实行{{highlight}}三权分立（separation of powers）{{/highlight}}和{{highlight}}制约与平衡（checks and balances）{{/highlight}}原则。1. {{highlight}}立法权（Legislative）{{/highlight}}：属于国会（Congress），由两院组成——{{highlight}}参议院（Senate）{{/highlight}}（100席，每州2名，任期6年）和{{highlight}}众议院（House of Representatives）{{/highlight}}（435席，按各州人口比例分配，任期2年）。2. {{highlight}}行政权（Executive）{{/highlight}}：属于总统（President），总统既是国家元首也是政府首脑，任期4年，最多连任两届。总统选举实行选举人团制度（Electoral College）。3. {{highlight}}司法权（Judicial）{{/highlight}}：属于联邦法院系统，{{highlight}}最高法院（Supreme Court）{{/highlight}}是最高司法机构，由9名大法官组成，终身任职。美国两大主要政党是{{highlight}}民主党（Democratic Party）{{/highlight}}和{{highlight}}共和党（Republican Party）{{/highlight}}，驴和象分别是两党的象征。"
        },
        {
          term: "美国历史要点",
          content: "1. {{highlight}}1492年哥伦布发现新大陆{{/highlight}}。2. {{highlight}}1607年{{/highlight}}：英国在北美建立第一个永久定居点詹姆斯敦（Jamestown）。3. {{highlight}}1620年{{/highlight}}：清教徒乘五月花号（Mayflower）到达普利茅斯，签订《五月花号公约》。4. {{highlight}}1776年7月4日{{/highlight}}：《独立宣言》（Declaration of Independence）发表，美国独立日。5. {{highlight}}1783年{{/highlight}}：《巴黎条约》签订，英国承认美国独立。6. {{highlight}}1787年{{/highlight}}：制定《美国宪法》（Constitution），1789年生效。7. {{highlight}}1861-1865年{{/highlight}}：南北战争（Civil War），林肯总统颁布《解放黑人奴隶宣言》（Emancipation Proclamation）。8. {{highlight}}1929年{{/highlight}}：经济大萧条（Great Depression），罗斯福总统推行'新政'（New Deal）。9. {{highlight}}1945年{{/highlight}}：二战结束，美国成为超级大国。10. {{highlight}}1969年{{/highlight}}：阿波罗11号登月。"
        },
        {
          term: "美国教育与文化",
          content: "{{highlight}}美国教育体系{{/highlight}}：义务教育年龄各州不同，一般为6-16岁或6-18岁。小学（Elementary School, K-5/6）、初中（Middle School, 6-8）、高中（High School, 9-12）。高中毕业后可进入大学。美国高等教育分为两年制社区学院（Community College）和四年制大学。著名大学多属私立，如{{highlight}}常春藤联盟（Ivy League）{{/highlight}}：哈佛大学（Harvard）、耶鲁大学（Yale）、普林斯顿大学（Princeton）、哥伦比亚大学（Columbia）、宾夕法尼亚大学（Penn）、布朗大学（Brown）、达特茅斯学院（Dartmouth）、康奈尔大学（Cornell）。{{highlight}}美国文化{{/highlight}}：美国是一个移民国家，被称为'大熔炉'（Melting Pot）或'沙拉碗'（Salad Bowl）。感恩节（Thanksgiving, 11月第四个星期四）和独立日（Independence Day, 7月4日）是最重要的节日。好莱坞（Hollywood）是世界电影工业中心。美国国歌为《星条旗永不落》（The Star-Spangled Banner）。"
        }
      ]
    }
  ]
},

// ======================== 五、英语语言学 ========================

{
  id: 16,
  module: "英语语言学",
  chapter: "语音学与音系学",
  sections: [
    {
      title: "语音学基础",
      points: [
        {
          term: "语音的分类",
          content: "语音学（Phonetics）研究语音的产生、传播和感知。英语语音分为{{highlight}}元音（vowels）和辅音（consonants）{{/highlight}}两大类。{{highlight}}元音{{/highlight}}根据发音时舌面最高点的位置分为：前元音（front vowels: /iː/, /ɪ/, /e/, /æ/）、中元音（central vowels: /ɜː/, /ə/, /ʌ/）、后元音（back vowels: /ɑː/, /ɒ/, /ɔː/, /ʊ/, /uː/）。根据唇形可分圆唇（rounded: /ɒ/, /ɔː/, /ʊ/, /uː/）和非圆唇（unrounded）。根据长度分长元音和短元音。{{highlight}}双元音{{/highlight}}（diphthongs）由两个元音组合而成，如 /eɪ/, /aɪ/, /ɔɪ/, /aʊ/, /əʊ/, /ɪə/, /eə/, /ʊə/。英语共有{{highlight}}20个元音（12个单元音 + 8个双元音）{{/highlight}}和{{highlight}}24个辅音{{/highlight}}。"
        },
        {
          term: "辅音的分类",
          content: "辅音根据{{highlight}}发音方式（manner of articulation）{{/highlight}}分类：爆破音/塞音（stops/plosives: /p/, /b/, /t/, /d/, /k/, /g/）、摩擦音（fricatives: /f/, /v/, /θ/, /ð/, /s/, /z/, /ʃ/, /ʒ/, /h/）、塞擦音（affricates: /tʃ/, /dʒ/）、鼻音（nasals: /m/, /n/, /ŋ/）、边音（lateral: /l/）、近音/滑音（approximants: /r/, /j/, /w/）。根据{{highlight}}发音部位（place of articulation）{{/highlight}}分类：双唇音（bilabial: /p/, /b/, /m/, /w/）、唇齿音（labiodental: /f/, /v/）、齿音（dental: /θ/, /ð/）、齿龈音（alveolar: /t/, /d/, /s/, /z/, /n/, /l/, /r/）、腭龈音（palato-alveolar: /ʃ/, /ʒ/, /tʃ/, /dʒ/）、硬腭音（palatal: /j/）、软腭音（velar: /k/, /g/, /ŋ/, /w/）、声门音（glottal: /h/）。根据{{highlight}}声带振动（voicing）{{/highlight}}分清辅音（voiceless）和浊辅音（voiced）。"
        },
        {
          term: "音系学规则",
          content: "音系学（Phonology）研究语音在特定语言中的组织规律和功能。1. {{highlight}}最小对立对（minimal pair）{{/highlight}}：两个词除了一个音位不同外其余都相同，如 pin /pɪn/ 和 bin /bɪn/，证明 /p/ 和 /b/ 是不同音位。2. {{highlight}}同化（assimilation）{{/highlight}}：一个音受相邻音影响而变得相似。如同化使 input /ˈɪnpʊt/ 中 /n/ 受 /p/ 影响可能发成 /m/。3. {{highlight}}省音（elision）{{/highlight}}：某些音在快速语流中被省略，如 next time 中 /t/ 可能被省略。4. {{highlight}}连读（linking）{{/highlight}}：相邻词之间的音连在一起读，如 an apple 连读为 /ənˈæpl/。5. {{highlight}}重音（stress）{{/highlight}}：英语是重音计时语言（stress-timed language），重读音节比轻读音节更响亮、更长。词重音和句重音都很重要。6. {{highlight}}语调（intonation）{{/highlight}}：降调常用于陈述句和特殊疑问句，升调常用于一般疑问句，降升调表犹豫或不肯定。"
        }
      ]
    }
  ]
},

{
  id: 17,
  module: "英语语言学",
  chapter: "形态学",
  sections: [
    {
      title: "词素与构词法",
      points: [
        {
          term: "词素的概念与分类",
          content: "{{highlight}}词素（morpheme）{{/highlight}}是语言中承载意义的最小单位，是不可再分的语法单位。词素分为两大类：1. {{highlight}}自由词素（free morpheme）{{/highlight}}：可以独立成词的词素，如 dog, cat, run, happy。自由词素又分为{{highlight}}词汇词素（lexical morpheme）{{/highlight}}（名词、动词、形容词等实词）和{{highlight}}功能词素（functional morpheme）{{/highlight}}（介词、连词、冠词等功能词）。2. {{highlight}}粘着词素（bound morpheme）{{/highlight}}：不能独立成词，必须附着在其他词素上。粘着词素分为{{highlight}}词根（root）{{/highlight}}（承载核心意义，如 -ceive in receive）和{{highlight}}词缀（affix）{{/highlight}}。词缀又分为前缀（prefix）、后缀（suffix）和中缀（infix）。{{highlight}}词根和词缀的区别{{/highlight}}：词根承载核心词汇意义，词缀主要承载语法或派生意义。"
        },
        {
          term: "构词法",
          content: "英语主要的构词法有：1. {{highlight}}派生法（Derivation）{{/highlight}}：通过加词缀构成新词。如 un- + happy → unhappy; happiness（happy + -ness）。2. {{highlight}}复合法（Compounding）{{/highlight}}：两个或更多词根组合成一个新词。如 blackboard, toothbrush, greenhouse, self-control。3. {{highlight}}转化法（Conversion）{{/highlight}}：不改变词形，直接将一个词从一种词性转化为另一种词性。如 water（名词→动词：to water plants），empty（形容词→动词：to empty the box）。4. {{highlight}}缩略法（Abbreviation）{{/highlight}}：包括截短词（clipping: advertisement → ad）、首字母缩略词（acronym: NASA, NATO）、字母词（initialism: BBC, VIP）。5. {{highlight}}拼缀法（Blending）{{/highlight}}：两个词各取一部分合成，如 smoke + fog → smog; breakfast + lunch → brunch。6. {{highlight}}逆生法（Back-formation）{{/highlight}}：从已有词逆推产生新词，如 editor → edit; television → televise。"
        },
        {
          term: "词缀的性质与功能",
          content: "词缀根据功能分为两类：1. {{highlight}}屈折词缀（Inflectional Affixes）{{/highlight}}：不改变词性，只表示语法关系。英语中屈折词缀有限，包括：名词复数 -s/-es（books, boxes）、名词所有格 -'s（boy's）、动词第三人称单数 -s（runs）、动词过去式 -ed（walked）、动词过去分词 -ed/-en（walked, broken）、动词现在分词 -ing（running）、形容词比较级 -er（bigger）、形容词最高级 -est（biggest）。2. {{highlight}}派生词缀（Derivational Affixes）{{/highlight}}：改变词性或显著改变词义。如 -ness（happy→happiness, 形容词变名词）、-ful（care→careful, 名词变形容词）、-ize（modern→modernize, 形容词变动词）、un-（happy→unhappy, 加否定义）。{{highlight}}屈折词缀通常在派生词缀之后{{/highlight}}，如 nation-al-iz-ation-s 中 -ation 和 -s 为屈折词缀在最后。"
        }
      ]
    }
  ]
},

{
  id: 18,
  module: "英语语言学",
  chapter: "句法学",
  sections: [
    {
      title: "短语结构规则与树形图",
      points: [
        {
          term: "短语结构规则",
          content: "句法学（Syntax）研究句子的结构和组成规则。{{highlight}}短语结构规则（Phrase Structure Rules）{{/highlight}}描述句子各组成部分之间的组合关系。基本规则：1. {{highlight}}S → NP + VP{{/highlight}}（句子 = 名词短语 + 动词短语）。2. {{highlight}}NP → (Det) + (Adj) + N + (PP){{/highlight}}（名词短语 = （限定词）+（形容词）+ 名词 +（介词短语））。3. {{highlight}}VP → V + (NP) + (PP) + (AdvP){{/highlight}}（动词短语 = 动词 +（名词短语）+（介词短语）+（副词短语））。4. {{highlight}}PP → P + NP{{/highlight}}（介词短语 = 介词 + 名词短语）。这些规则生成句子的基本结构框架。{{highlight}}树形图（tree diagram）{{/highlight}}是短语结构规则的图形化表示，直观展示句子的层级结构。"
        },
        {
          term: "X阶理论",
          content: "{{highlight}}X阶理论（X-bar Theory）{{/highlight}}是生成语法中对短语结构的更精细描述。短语结构分为三个层次：{{highlight}}补足语层（XP）、阶标层（X'）、词头层（X）{{/highlight}}。1. 词头（head）是短语的中心成分，决定短语的类型（如名词是NP的中心词）。2. 指定语（specifier）是XP层次的姐妹，是词头的姐妹的母节点的姐妹，如限定词the是NP的指定语。3. 补足语（complement）是词头的姐妹，是X'层次的组成部分，与词头关系密切，如动词短语的宾语。4. 附加语（adjunct）是X'层次的附加成分，可递归添加，如形容词修饰名词。X阶理论统一了各类短语的结构模式：{{highlight}}XP → (Specifier) + X'；X' → X' + Adjunct 或 X' → X + Complement{{/highlight}}，体现了语言的递归性和层级性。"
        },
        {
          term: "结构歧义与句法分析",
          content: "句法学关注句子的结构，而结构歧义是句法分析的重要内容。1. {{highlight}}结构歧义（Structural Ambiguity）{{/highlight}}：同一串词语因句法分析不同而产生多种意义。经典例：'I saw the man with the telescope.' 可理解为（a）我用望远镜看到了那个男人（with the telescope 作状语修饰saw），或（b）我看到了那个拿着望远镜的男人（with the telescope 作定语修饰the man）。树形图可以清晰展示这两种不同结构。2. {{highlight}}直接成分分析（Immediate Constituent Analysis, IC Analysis）{{/highlight}}：将句子逐层切分为直接成分，直到不可再分的最小单位。如 The old man left. → [The old man] [left] → [The] [old man] [left]。3. {{highlight}}乔姆斯基的转换生成语法（Transformational-Generative Grammar）{{/highlight}}：提出深层结构（deep structure）和表层结构（surface structure）的区分，通过转换规则（transformational rules）从深层结构生成表层结构，解释了语言创造性使用和结构歧义现象。"
        }
      ]
    }
  ]
},

{
  id: 19,
  module: "英语语言学",
  chapter: "语义学",
  sections: [
    {
      title: "意义关系与成分分析",
      points: [
        {
          term: "词汇意义关系",
          content: "语义学（Semantics）研究语言的意义。词汇之间的主要意义关系包括：1. {{highlight}}同义关系（Synonymy）{{/highlight}}：意义相同或相近的词。细分为：完全同义词（几乎无差别）和近义词（意义有细微差别）。如 buy/purchase, big/large。2. {{highlight}}反义关系（Antonymy）{{/highlight}}：意义相反的词。分为：{{highlight}}等级反义词（gradable antonyms）{{/highlight}}，如 hot/cold, big/small，有程度差异，可加very；{{highlight}}互补反义词（complementary antonyms）{{/highlight}}，如 alive/dead, male/female，非此即彼，无中间状态；{{highlight}}关系反义词（relational antonyms）{{/highlight}}，如 husband/wife, buy/sell, parent/child，从不同角度描述同一关系。3. {{highlight}}上下义关系（Hyponymy）{{/highlight}}：一个词的意义包含在另一个词的意义中。如 dog, cat, horse 是 animal 的下义词（hyponyms），animal 是上义词（superordinate）。4. {{highlight}}多义关系（Polysemy）{{/highlight}}：一个词有多个相关意义，如 head（头/首领/顶部）。5. {{highlight}}同形异义（Homonymy）{{/highlight}}：形式相同但意义无关的词，如 bank（银行/河岸）。"
        },
        {
          term: "成分分析与语义特征",
          content: "{{highlight}}成分分析（Componential Analysis）{{/highlight}}是将词义分解为最基本的语义特征（semantic features）的方法。用 + 和 - 表示某词是否具有某特征。如分析 man, woman, boy, girl：man = [+human, +male, +adult]；woman = [+human, -male, +adult]；boy = [+human, +male, -adult]；girl = [+human, -male, -adult]。{{highlight}}语义特征的优点{{/highlight}}：可以解释词汇之间的意义关系，如反义词通常只有一个特征不同（man和woman只有male特征不同）；可以分析词语搭配的合理性。{{highlight}}述谓分析（Predication Analysis）{{/highlight}}：将句子意义分析为述谓结构（predication），包含论元（argument）和谓词（predicate）。如 The boy is running. → 论元：BOY（the boy）；谓词：RUN。述谓分析有单位（unit）、位置（place）之分，如一元谓词（one-place predication）：RUN（BOY）；二元谓词（two-place predication）：LIKE（BOY, DOG）。"
        },
        {
          term: "句子意义与语境",
          content: "语义学不仅研究词汇意义，还研究句子意义。1. {{highlight}}命题（Proposition）{{/highlight}}：句子所表达的基本意义内容，可判断真假。如'雪是白的'表达一个命题。2. {{highlight}}同义句{{/highlight}}：不同句子表达相同命题，如'John killed the dog.'与'The dog was killed by John.'。3. {{highlight}}蕴含（Entailment）{{/highlight}}：一个句子的真值暗含另一个句子的真值。如'John killed the dog.'蕴含'The dog is dead.'。4. {{highlight}}预设（Presupposition）{{/highlight}}：说话者在说出某句话时默认为真的背景假设。如'John stopped smoking.'预设'John used to smoke.'。预设与蕴含的区别：{{highlight}}预设不受否定影响{{/highlight}}，即使否定句'John didn't stop smoking.'仍预设'John used to smoke.'，而蕴含在否定句中不成立。5. {{highlight}}歧义（Ambiguity）{{/highlight}}：包括词汇歧义（bank 银行/河岸）和结构歧义（如 visiting relatives can be boring 中 visiting relatives 可理解为'拜访亲戚'或'来访的亲戚'）。"
        }
      ]
    }
  ]
},

{
  id: 20,
  module: "英语语言学",
  chapter: "语用学",
  sections: [
    {
      title: "言语行为与会话含义",
      points: [
        {
          term: "言语行为理论",
          content: "{{highlight}}言语行为理论（Speech Act Theory）{{/highlight}}由英国哲学家{{highlight}}奥斯汀（J.L. Austin）{{/highlight}}提出，后由{{highlight}}塞尔（John Searle）{{/highlight}}发展完善。核心观点：语言不仅是描述世界的工具，还是'以言行事'的手段。言语行为分为三个层次：1. {{highlight}}言内行为（Locutionary Act）{{/highlight}}：发出语音、组合词语、表达字面意义的的行为。2. {{highlight}}言外行为（Illocutionary Act）{{/highlight}}：说话者在表达字面意义的同时所实施的交际意图或行为，如承诺、命令、请求、警告等，这是言语行为理论的核心。3. {{highlight}}言后行为（Perlocutionary Act）{{/highlight}}：话语对接收者产生的效果或影响。塞尔将言外行为分为五类：{{highlight}}阐述类（representatives/assertives）{{/highlight}}（陈述事实）、{{highlight}}指令类（directives）{{/highlight}}（请求/命令）、{{highlight}}承诺类（commissives）{{/highlight}}（承诺/威胁）、{{highlight}}表达类（expressives）{{/highlight}}（表达情感）、{{highlight}}宣告类（declaratives）{{/highlight}}（改变世界状态，如法官判案）。"
        },
        {
          term: "合作原则与会话含义",
          content: "{{highlight}}美国哲学家格莱斯（H.P. Grice）{{/highlight}}提出{{highlight}}合作原则（Cooperative Principle）{{/highlight}}：在交谈中，参与者通常会遵循'使你贡献的话语符合交谈的公认目的或方向'的原则。合作原则包含四条准则：1. {{highlight}}量的准则（Maxim of Quantity）{{/highlight}}：提供恰好需要的信息，不多不少。2. {{highlight}}质的准则（Maxim of Quality）{{/highlight}}：说真话，不说缺乏证据的话。3. {{highlight}}关系准则（Maxim of Relation）{{/highlight}}：话语要与当前话题相关。4. {{highlight}}方式准则（Maxim of Manner）{{/highlight}}：表达要清晰、简明、有条理，避免歧义。{{highlight}}会话含义（Conversational Implicature）{{/highlight}}：当说话者表面上违反某一准则时，听话者会推导出超越字面意义的隐含意义。例如：A: Can you pass the salt? B: Yes.（B虽然回答了但没递盐，违反了关系准则，含义是B不愿递盐或在暗示什么）。"
        },
        {
          term: "指示语与礼貌原则",
          content: "{{highlight}}指示语（Deixis）{{/highlight}}：语言中依赖语境才能确定所指的词语，是语用学的基本概念。分为：1. {{highlight}}人称指示（person deixis）{{/highlight}}：I, you, he, she 等，所指取决于谁在说话。2. {{highlight}}时间指示（time deixis）{{/highlight}}：now, then, yesterday, tomorrow 等，参照说话时间。3. {{highlight}}地点指示（place/spatial deixis）{{/highlight}}：here, there, this, that 等，参照说话者位置。4. {{highlight}}语篇指示（discourse deixis）{{/highlight}}：指向上文或下文，如 the following, the above。5. {{highlight}}社交指示（social deixis）{{/highlight}}：反映参与者社会关系，如尊称。{{highlight}}礼貌原则（Politeness Principle）{{/highlight}}由{{highlight}}利奇（Geoffrey Leech）{{/highlight}}提出，是对合作原则的补充。包括：得体准则、慷慨准则、赞誉准则、谦逊准则、一致准则、同情准则。布朗和列文森（Brown & Levinson）的{{highlight}}面子理论（Face Theory）{{/highlight}}：面子分为积极面子（被认同的需要）和消极面子（不受干涉的需要），很多言语行为是威胁面子的，需用礼貌策略来减轻。"
        }
      ]
    }
  ]
},

// ======================== 六、翻译技巧 ========================

{
  id: 21,
  module: "翻译技巧",
  chapter: "英译汉技巧",
  sections: [
    {
      title: "翻译基本原则与技巧",
      points: [
        {
          term: "直译与意译",
          content: "{{highlight}}直译（literal translation）{{/highlight}}：在符合译文语言规范的前提下，尽量保持原文的形式和内容，包括句子结构、比喻形象等。适用于原文与译文在结构和表达方式上较接近的情况。{{highlight}}意译（free translation/liberal translation）{{/highlight}}：不拘泥于原文的形式，重在传达原文的思想内容和风格特色。适用于原文的修辞手法、文化典故等在译文中难以对应表达的情况。{{highlight}}翻译的基本原则{{/highlight}}：严复提出的{{highlight}}'信、达、雅'（faithfulness, expressiveness, elegance）{{/highlight}}是最著名的中国翻译标准。'信'指忠实于原文；'达'指译文通顺明白；'雅'指译文有文采。鲁迅主张'信'和'达'并重，提出'宁信而不顺'。傅雷提出'神似'论，钱钟书提出'化境'说。实践中应灵活运用直译与意译，该直译时直译，该意译时意译，两者相辅相成。"
        },
        {
          term: "增译与减译",
          content: "{{highlight}}增译法（Amplification）{{/highlight}}：在译文中增加原文中没有明示但暗含的内容，使译文更通顺、意义更明确。1. 增加语义上需要的词：After the ban, the market went quiet. → 禁令颁布之后，市场变得冷清起来。（增加'颁布'和'起来'）。2. 增加语法上需要的词：英语被动句译成汉语时常增加主语。It is reported that... → 据报道……（增加'据'）。3. 增加文化背景解释词。{{highlight}}减译法（Omission）{{/highlight}}：在译文中删去原文中不必要的词，使译文更简洁、符合译语习惯。1. 省略冠词：英语中的a/the在汉语中通常不译。2. 省略代词：英语中必须有主语，但汉语可省略。He put his hands in his pockets. → 他把手插进口袋。（省略了两个his）。3. 省略连词：英语重形合，汉语重意合，连词常可省略。If you come, I will go. → 你来我就走。（省略了'如果'）。"
        },
        {
          term: "词性转换与语序调整",
          content: "{{highlight}}词性转换法（Conversion）{{/highlight}}：在翻译时改变原文词的词性，以适应译文语言的表达习惯。英译汉中常见的转换：1. {{highlight}}名词转动词{{/highlight}}：His arrival surprised everyone. → 他的到来（他到了）让所有人都很惊讶。2. {{highlight}}介词转动词{{/highlight}}：She is in the room. → 她在房间里。3. {{highlight}}形容词转名词{{/highlight}}：He is too careful. → 他太小心了（过于谨慎）。4. {{highlight}}形容词转动词{{/highlight}}：I am sure that he will come. → 我确信他会来。{{highlight}}语序调整法（Reordering）{{/highlight}}：英语和汉语的语序差异较大，翻译时常需调整。1. 英语定语从句在名词后，汉语定语在名词前。2. 英语状语可前可后，汉语状语多在动词前。3. 英语时间、地点状语常在句末，汉语常在句首。4. 英语重心在前（先主后次），汉语重心在后（先因后果，先假设后结论）。"
        },
        {
          term: "正反与反正翻译法",
          content: "{{highlight}}正反翻译法（Affirmative-Negative Translation）{{/highlight}}：将原文的肯定形式译成否定形式，或将否定形式译成肯定形式，以符合译语表达习惯或更准确传达意义。1. {{highlight}}英语肯定译汉语否定{{/highlight}}：Keep off the grass. → 请勿践踏草坪。 / He was late for the meeting. → 他开会迟到了。（'迟到'含否定意味） 2. {{highlight}}英语否定译汉语肯定{{/highlight}}：He is no less diligent than you. → 他和你一样勤奋。 / The city is anything but beautiful. → 这座城市一点也不美。 / It was not until midnight that he came back. → 直到午夜他才回来。3. {{highlight}}双重否定译肯定{{/highlight}}：There is no one who does not know it. → 无人不知。 / It is not impossible. → 这不是不可能的（是完全可能的）。4. {{highlight}}常见的含否定意义的肯定句{{/highlight}}：fail to（未能）、free from（没有）、beyond（超出/无法）、above（不屑于）、anything but（根本不）、the last（最不可能的）。这些词组虽然形式肯定，但意义否定，翻译时常需转换为否定表达。"
        }
      ]
    }
  ]
},

{
  id: 22,
  module: "翻译技巧",
  chapter: "汉译英技巧",
  sections: [
    {
      title: "汉译英核心技巧",
      points: [
        {
          term: "主语选择与句式转换",
          content: "汉译英时最大的挑战之一是{{highlight}}主语的选择{{/highlight}}，因为汉语常省略主语或使用无主句，而英语句子必须有主语。1. {{highlight}}补充主语{{/highlight}}：汉语无主句译成英语时常需补充主语。'下雨了。' → It is raining.（用形式主语it）。'必须采取措施。' → Measures must be taken. / We must take measures. 2. {{highlight}}主语转换{{/highlight}}：汉语以人为主语，英语常以物为主语。'我突然想到一个好主意。' → A good idea occurred to me. 3. {{highlight}}用被动语态{{/highlight}}：汉语'被'字句较少，但英语被动语态使用频繁。'据说……' → It is said that... / '大家认为……' → It is generally believed that... 4. {{highlight}}汉语意合转英语形合{{/highlight}}：汉语靠语义连接，英语靠语法和连接词连接。翻译时需补充连词、关系代词等。'天冷了，多穿点。' → It is getting cold, so put on more clothes."
        },
        {
          term: "长句拆分与连词处理",
          content: "汉语长句特点是'竹节型'，一个分句接一个分句，较少用连接词；英语长句特点是'树形'，主句为核心，从句和短语为枝叶。{{highlight}}汉译英长句处理{{/highlight}}：1. {{highlight}}拆分法{{/highlight}}：将汉语长句拆成几个英语短句。'他虽然年纪小，但很有志气，将来一定能成才。' → Though he is young, he has great ambition. He will surely become a talented person in the future. 2. {{highlight}}合并法{{/highlight}}：将汉语几个短句合并为一个英语长句，用从句或分词结构连接。'我看见了他。他正在看书。' → I saw him reading a book. 3. {{highlight}}连词的增补{{/highlight}}：汉语少用连词，英语翻译时需增补 and, but, because, although, so that 等连词，体现逻辑关系。4. {{highlight}}文化词汇处理{{/highlight}}：对中国特色词汇可采用音译（如 jiaozi 饺子）、意译（如 Spring Festival 春节）或音译加解释等方式。"
        },
        {
          term: "四字格与习语的翻译",
          content: "{{highlight}}汉语四字格（四字成语）{{/highlight}}的翻译是汉译英的难点之一。翻译策略：1. {{highlight}}直译法{{/highlight}}：保留原文形象和结构，前提是译文读者能理解。如'自相矛盾' → contradict oneself；'纸上谈兵' → armchair strategy。2. {{highlight}}意译法{{/highlight}}：舍弃原文形象，传达意义。如'胸有成竹' → have a well-thought-out plan（不能直译为 have bamboo in chest）；'画蛇添足' → gild the lily / ruin the effect by adding something superfluous。3. {{highlight}}套译法{{/highlight}}：用英语中含义相近的习语替换。如'倾盆大雨' → rain cats and dogs；'火上加油' → add fuel to the fire。4. {{highlight}}省译法{{/highlight}}：汉语中有些修饰性的四字格在英语中显得冗余，可省略不译。翻译习语时要注意文化差异，避免直译造成误解。同时，英语习语汉译时也需注意同样的问题，如 'It rains cats and dogs' 不能直译为'下猫下狗'，应译为'倾盆大雨'。"
        }
      ]
    }
  ]
},

// ======================== 七、课程与教学论 ========================

{
  id: 23,
  module: "课程与教学论",
  chapter: "义务教育英语课程标准（2022版）",
  sections: [
    {
      title: "核心素养与课程目标",
      points: [
        {
          term: "核心素养内涵",
          content: "{{highlight}}《义务教育英语课程标准（2022年版）》{{/highlight}}提出英语课程要培养的学生核心素养包括四个方面：1. {{highlight}}语言能力（Language Ability）{{/highlight}}：通过感知、积累、交流和运用等学习活动，在真实情境中运用英语理解和表达意义的能力。语言能力是核心素养的基础，包括听、说、读、看、写等语言技能。2. {{highlight}}文化意识（Cultural Awareness）{{/highlight}}：对中外文化的理解和对优秀文化的鉴赏，在新情境中表现出的跨文化认知、态度和行为选择。文化意识是核心素养的价值取向。3. {{highlight}}思维品质（Thinking Quality）{{/highlight}}：思维在逻辑性、批判性、创新性等方面所表现的能力和水平。思维品质反映核心素养的心智特征。4. {{highlight}}学习能力（Learning Ability）{{/highlight}}：通过积极运用和主动调适英语学习策略、拓宽英语学习渠道、努力提升英语学习效率的意识、品质和潜能。学习能力是核心素养的发展条件。"
        },
        {
          term: "课程目标与课程内容",
          content: "{{highlight}}课程目标{{/highlight}}：2022版课标以核心素养为统领，构建了分层级的课程目标体系，包括{{highlight}}总目标和学段目标{{/highlight}}。总目标围绕核心素养四个方面设定。学段目标分为三个学段：{{highlight}}3-4年级、5-6年级、7-9年级{{/highlight}}，各学段目标体现循序渐进、螺旋上升的特点。{{highlight}}课程内容{{/highlight}}：2022版课标提出课程内容由六个要素构成：1. {{highlight}}主题{{/highlight}}（Theme）：包括人与自我、人与社会、人与自然三大主题范畴。2. {{highlight}}语篇{{/highlight}}（Discourse）：口头和书面语篇，承载语言知识和文化知识。3. {{highlight}}语言知识{{/highlight}}：语音、词汇、语法、语篇、语用知识。4. {{highlight}}文化知识{{/highlight}}：中外优秀文化。5. {{highlight}}语言技能{{/highlight}}：理解性技能（听、读、看）和表达性技能（说、写）。6. {{highlight}}学习策略{{/highlight}}：元认知策略、认知策略、交际策略、情感策略。六个要素相互关联、有机整合。"
        },
        {
          term: "教学建议与评价方式",
          content: "{{highlight}}教学建议{{/highlight}}：2022版课标强调以下教学理念：1. {{highlight}}坚持育人为本{{/highlight}}：落实立德树人根本任务，将核心素养培养贯穿教学全过程。2. {{highlight}}加强单元教学的整体性{{/highlight}}：以主题为引领，以语篇为依托，整体设计单元教学。3. {{highlight}}深入开展语篇研读{{/highlight}}：教师要对语篇的主题、内容、文体特点、语言特点等进行深入分析。4. {{highlight}}秉持英语学习活动观{{/highlight}}：通过学习理解、应用实践、迁移创新三类层层递进的活动，引导学生在真实情境中学习。5. {{highlight}}引导学生在体验中学习、实践中运用、在迁移中创新{{/highlight}}。6. {{highlight}}推动教—学—评一体化{{/highlight}}：教学目标、学习活动和评价任务要保持一致。{{highlight}}评价建议{{/highlight}}：强调形成性评价与终结性评价相结合，注重过程性评价，倡导多元评价方式，包括自我评价、同伴评价和教师评价。"
        }
      ]
    }
  ]
},

{
  id: 24,
  module: "课程与教学论",
  chapter: "普通高中英语课程标准（2017版2020修订）",
  sections: [
    {
      title: "核心素养与课程结构",
      points: [
        {
          term: "高中英语核心素养",
          content: "{{highlight}}《普通高中英语课程标准（2017年版2020年修订）》{{/highlight}}同样以核心素养为统领，四个维度与义务教育阶段一致但要求更高：1. {{highlight}}语言能力{{/highlight}}：在更复杂情境中综合运用英语的能力，涵盖语言知识（语音、词汇、语法、语篇、语用）和语言技能（听、说、读、看、写）。高中阶段强调'看'（viewing）作为第五项语言技能。2. {{highlight}}文化意识{{/highlight}}：强调跨文化理解与沟通能力，能够比较中外文化异同，坚定文化自信，传播中华优秀文化。3. {{highlight}}思维品质{{/highlight}}：强调逻辑性、批判性和创新性思维，能在英语学习中分析问题、解决问题。4. {{highlight}}学习能力{{/highlight}}：能够独立思考和自主学习，有效选择和运用学习策略，具备终身学习的意识和能力。高中课标的核心素养为英语教学提供了明确方向，要求教学从知识传授转向素养培养。"
        },
        {
          term: "课程结构与六要素整合",
          content: "{{highlight}}高中英语课程结构{{/highlight}}：高中英语课程分为{{highlight}}必修、选择性必修和选修{{/highlight}}三类课程。必修课程为全体学生必须修习的基础课程（英语必修1-3册），选择性必修课程供有升学要求的学生修习（英语选择性必修1-4册），选修课程为学生的个性发展提供选择。{{highlight}}六要素整合{{/highlight}}：高中课标提出英语课程内容以{{highlight}}主题语境{{/highlight}}为引领，以{{highlight}}语篇类型{{/highlight}}为依托，融入{{highlight}}语言知识{{/highlight}}、{{highlight}}文化知识{{/highlight}}、{{highlight}}语言技能{{/highlight}}和{{highlight}}学习策略{{/highlight}}六要素的整合。{{highlight}}主题语境{{/highlight}}包括人与自我、人与社会、人与自然三大主题语境及若干子主题。{{highlight}}语篇类型{{/highlight}}包括记叙文、议论文、说明文、应用文、新闻报道、对话等口头和书面语篇。六要素不是孤立存在的，而是在主题语境下有机融合，通过语篇这一载体来实现整合教学。"
        },
        {
          term: "英语学习活动观与学业质量",
          content: "{{highlight}}英语学习活动观{{/highlight}}是高中课标提出的重要教学理念，指学生在主题意义引领下，通过{{highlight}}学习理解、应用实践、迁移创新{{/highlight}}三类层层递进的语言、文化和思维活动，使学生在语言学习过程中发展核心素养。1. {{highlight}}学习理解类活动{{/highlight}}：包括感知与注意、获取与梳理、概括与整合等，重在理解和获取信息。2. {{highlight}}应用实践类活动{{/highlight}}：包括描述与阐释、分析与判断、内化与运用等，重在运用所学知识。3. {{highlight}}迁移创新类活动{{/highlight}}：包括推理与论证、批判与评价、想象与创造等，重在迁移和创新。{{highlight}}学业质量{{/highlight}}：课标提出学业质量标准，分为不同水平，描述学生在不同阶段应达到的学业成就表现。{{highlight}}教学评价{{/highlight}}强调形成性评价与终结性评价相结合，注重以评促学、以评促教，实现教、学、评的有机统一。"
        }
      ]
    }
  ]
},

{
  id: 25,
  module: "课程与教学论",
  chapter: "英语教学方法",
  sections: [
    {
      title: "主要教学法流派",
      points: [
        {
          term: "语法翻译法与听说法",
          content: "{{highlight}}语法翻译法（Grammar-Translation Method）{{/highlight}}：最古老的外语教学法，以语法教学和翻译练习为核心，注重读写能力，忽视口语交际。优点：系统性强，适合大班教学；缺点：忽视交际能力，学生可能'哑巴英语'。{{highlight}}听说法（Audio-Lingual Method）{{/highlight}}：20世纪40-50年代兴起于美国，基于行为主义心理学和结构主义语言学。核心原则：{{highlight}}听说领先，读写跟上{{/highlight}}；通过反复操练（pattern drill）形成语言习惯；强调模仿和重复；避免错误。教学过程：听→模仿→重复→操练→应用。优点：口语能力强，适合初学者；缺点：机械操练枯燥，忽视意义和创造性，学生可能知其然而不知其所以然。听说法典型练习形式：跟读、替换练习、转换练习、问答练习等。"
        },
        {
          term: "交际法与任务型教学法",
          content: "{{highlight}}交际法（Communicative Language Teaching, CLT）{{/highlight}}：20世纪70年代兴起，以培养交际能力为目标。核心原则：1. 交际能力包括语法能力、社会语言能力、语篇能力和策略能力。2. 教学内容以语义和功能为纲，而非语法结构。3. 强调在真实情境中运用语言。4. 允许学生在意义表达中犯错误，流利度优先于准确度。5. 教师是促进者（facilitator）而非权威。优点：培养实际交际能力，课堂活跃；缺点：对教师要求高，评价困难，可能忽视语法系统性。{{highlight}}任务型教学法（Task-Based Language Teaching, TBLT）{{/highlight}}：交际法的发展，由Prabhu和Willis等人倡导。核心是让学生通过完成真实任务来学习语言。教学三阶段：{{highlight}}前任务（pre-task）→ 任务环（task cycle: 任务→计划→报告）→ 语言聚焦（language focus）{{/highlight}}。优点：以意义为中心，学生参与度高，语言学习与运用结合；缺点：任务设计和评价较难，可能忽视语言形式的系统性。"
        },
        {
          term: "语篇教学法与情境教学法",
          content: "{{highlight}}语篇教学法（Discourse-Based Teaching）{{/highlight}}：以语篇为基本教学单位，强调在完整语境中学习语言。核心特点：1. 不仅要理解语篇的内容，还要分析语篇的结构、文体特征和语言特点。2. 注重语篇的连贯性和衔接性。3. 培养学生的语篇能力，即理解和产出连贯语篇的能力。4. 教学步骤通常包括：语篇导入→整体理解→细节分析→语言学习→语篇运用。语篇教学符合新课标'六要素整合'的理念，是当前英语教学的主流方法。{{highlight}}情境教学法（Situational Language Teaching）{{/highlight}}：在真实或模拟情境中教授语言，使语言形式与使用情境相结合。核心原则：语言学习始于口语；新语言点在情境中引入和练习；词汇选择基于实用性；语法按顺序教授。{{highlight}}全身反应法（Total Physical Response, TPR）{{/highlight}}：由James Asher提出，通过身体动作配合语言指令学习，适合低年级初学者，如'Stand up', 'Open the door'等。"
        }
      ]
    }
  ]
},

{
  id: 26,
  module: "课程与教学论",
  chapter: "教学设计",
  sections: [
    {
      title: "阅读课与听力课教学设计",
      points: [
        {
          term: "阅读课教学设计框架",
          content: "{{highlight}}阅读课教学设计{{/highlight}}通常遵循{{highlight}}读前（Pre-reading）、读中（While-reading）、读后（Post-reading）{{/highlight}}三阶段模式。1. {{highlight}}读前活动{{/highlight}}：激活学生背景知识和相关词汇，激发阅读兴趣，预测文本内容。常用活动：图片预测、头脑风暴、词汇预习、问题导入。2. {{highlight}}读中活动{{/highlight}}：分层阅读，逐步深入理解文本。第一遍略读（skimming）获取主旨大意；第二遍寻读（scanning）获取具体信息；第三遍精读（intensive reading）深入分析文本结构、语言特点和深层含义。可设计信息匹配、填表、判断正误、回答问题等任务。3. {{highlight}}读后活动{{/highlight}}：巩固和拓展所学，迁移创新。常用活动：讨论、角色扮演、复述、写作、批判性思维活动等。{{highlight}}教学设计要点{{/highlight}}：教学目标要基于核心素养四维度；活动设计要体现英语学习活动观；问题设计要层次分明，从信息获取到推理判断再到批判评价；注重培养学生的阅读策略。"
        },
        {
          term: "听力课教学设计框架",
          content: "{{highlight}}听力课教学设计{{/highlight}}遵循{{highlight}}听前（Pre-listening）、听中（While-listening）、听后（Post-listening）{{/highlight}}三阶段模式。1. {{highlight}}听前活动{{/highlight}}：激活背景知识，预习关键词汇，明确听力任务。常用活动：图片预测、词汇联想、问题导入、情境创设。听前要让学生明确听的目的和任务。2. {{highlight}}听中活动{{/highlight}}：分层次设计听力任务。第一遍听主旨大意（gist listening），如选择最佳标题、匹配图片；第二遍听具体信息（listening for details），如填表、判断正误、回答问题；必要时第三遍听进行精细理解。听力任务要适合学生的水平，难度适当。3. {{highlight}}听后活动{{/highlight}}：巩固听力内容，将听与其他技能结合。常用活动：复述听力内容、角色扮演对话、讨论相关话题、基于听力内容的写作。{{highlight}}教学建议{{/highlight}}：选择真实多样的听力材料；培养学生预测、抓关键词、推断等听力策略；关注学生听力过程中的困难和需求；听力材料可根据需要分段播放。"
        }
      ]
    },
    {
      title: "口语课与写作课教学设计",
      points: [
        {
          term: "口语课教学设计",
          content: "{{highlight}}口语课教学设计{{/highlight}}旨在培养学生用英语进行口头表达和交流的能力。教学环节通常包括：1. {{highlight}}导入（Lead-in）{{/highlight}}：通过图片、视频、问题等方式引入话题，激发学生兴趣，激活相关词汇和表达。2. {{highlight}}输入与示范（Input & Modeling）{{/highlight}}：提供语言输入，包括核心词汇、句型、对话范例。教师可通过示范对话、播放录音等方式提供语言支架（scaffolding）。3. {{highlight}}控制性练习（Controlled Practice）{{/highlight}}：学生在教师引导下进行机械性或半控制性练习，如跟读、替换练习、问答练习，巩固目标语言。4. {{highlight}}交际性活动（Communicative Activity）{{/highlight}}：学生运用所学语言在真实或模拟情境中自由表达。常用活动形式：{{highlight}}信息差活动（information gap）{{/highlight}}、角色扮演（role-play）、小组讨论（group discussion）、调查访谈（survey/interview）、辩论（debate）。5. {{highlight}}反馈与评价（Feedback）{{/highlight}}：教师对学生的口语表现进行反馈，注重流利度与准确度的平衡，纠错方式要得当。"
        },
        {
          term: "写作课教学设计",
          content: "{{highlight}}写作课教学设计{{/highlight}}遵循{{highlight}}过程写作法（Process Writing）{{/highlight}}理念，强调写作是一个递归过程。教学环节通常包括：1. {{highlight}}写前准备（Pre-writing）{{/highlight}}：明确写作任务和读者对象；通过头脑风暴、思维导图等方式收集和整理素材；分析范文的结构和语言特点。2. {{highlight}}起草（Drafting）{{/highlight}}：学生根据提纲和素材写出初稿，注重内容表达，暂不纠结语言细节。3. {{highlight}}修改（Revising）{{/highlight}}：关注内容和组织结构的修改，包括同伴互评（peer review）和教师反馈。检查内容是否切题、逻辑是否清晰、论据是否充分。4. {{highlight}}编辑（Editing）{{/highlight}}：关注语言层面的修改，包括语法、拼写、标点、词汇等。5. {{highlight}}发表/分享（Publishing/Sharing）{{/highlight}}：学生展示最终作品，增强写作成就感。{{highlight}}教学建议{{/highlight}}：提供充分的范文分析；搭建写作支架（句型框架、连接词、段落结构等）；注重写作过程而非仅看最终成果；培养自我评价和同伴评价能力。"
        },
        {
          term: "词汇语法课教学设计",
          content: "{{highlight}}词汇课教学设计{{/highlight}}：词汇教学应遵循'呈现→练习→运用'的基本流程。1. 呈现阶段：在语境中呈现新词，通过图片、实物、情境、定义、同义词等方式帮助学生理解词义，注意词形、词音、词义的结合。2. 练习阶段：通过各种活动帮助学生巩固词汇，如配对、分类、填空、造句等。3. 运用阶段：在新的语境中运用词汇，如编对话、写短文等。{{highlight}}词汇教学原则{{/highlight}}：在语境中教词汇；注重词汇的深度知识（搭配、词缀、语用等）；采用多种方法呈现和复习词汇；遵循间隔重复原则。{{highlight}}语法课教学设计{{/highlight}}：常采用{{highlight}}归纳法（Inductive Method）或演绎法（Deductive Method）{{/highlight}}。归纳法：先呈现例句→引导学生观察→发现规律→归纳规则→练习运用。演绎法：先讲解规则→呈现例句→学生练习。教学流程一般包括：呈现（Presentation）→操练（Practice）→产出（Production），即{{highlight}}PPP模式{{/highlight}}。现代语法教学强调在语篇和语境中教授语法，注重'形式-意义-使用'的结合，避免脱离语境的机械操练。"
        }
      ]
    }
  ]
}

];

window.englishKnowledge = englishKnowledge;
