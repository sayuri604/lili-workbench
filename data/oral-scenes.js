/**
 * 理理工作台 - 英语口语场景数据
 * 用于日常英语口语打卡学习模块
 */

const oralScenes = [
  // ==================== 1. 餐厅点餐 ====================
  {
    id: 1,
    title: "餐厅点餐",
    titleEn: "Ordering at a Restaurant",
    icon: "🍽️",
    difficulty: "初级",
    description: "学会在餐厅点餐、询问菜品、结账等实用表达",
    dialogues: [
      {
        speaker: "Waiter",
        speakerCn: "服务员",
        text: "Good evening! How many people are in your party?",
        textCn: "晚上好！请问几位用餐？"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "A table for two, please.",
        textCn: "两位，谢谢。"
      },
      {
        speaker: "Waiter",
        speakerCn: "服务员",
        text: "Right this way. Here's the menu. Can I get you something to drink first?",
        textCn: "这边请。这是菜单。先给您来点喝的吗？"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "I'll have a glass of water for now. What do you recommend from the menu?",
        textCn: "先来杯水。菜单上有什么推荐的？"
      },
      {
        speaker: "Waiter",
        speakerCn: "服务员",
        text: "Our chef's special today is grilled salmon with lemon butter sauce. It's very popular.",
        textCn: "今天的厨师推荐是柠檬黄油酱烤三文鱼，非常受欢迎。"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "That sounds great! I'd like to order the grilled salmon. Does it come with any sides?",
        textCn: "听起来不错！我要一份烤三文鱼。有配菜吗？"
      },
      {
        speaker: "Waiter",
        speakerCn: "服务员",
        text: "Yes, it comes with mashed potatoes and steamed vegetables. Would you like anything else?",
        textCn: "有的，配土豆泥和蒸蔬菜。还需要别的吗？"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "No, that's all for now. Thank you.",
        textCn: "不用了，先这些。谢谢。"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "Excuse me, could I have the check, please?",
        textCn: "你好，麻烦买单。"
      },
      {
        speaker: "Waiter",
        speakerCn: "服务员",
        text: "Of course. Here you go. Cash or card?",
        textCn: "好的，给您。现金还是刷卡？"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "Card, please. And can I get a receipt?",
        textCn: "刷卡。能给我开张发票吗？"
      }
    ],
    keyPhrases: [
      { phrase: "I'd like to order...", translation: "我想要点..." },
      { phrase: "What do you recommend?", translation: "你有什么推荐？" },
      { phrase: "Does it come with any sides?", translation: "有配菜吗？" },
      { phrase: "Could I have the check, please?", translation: "麻烦买单。" },
      { phrase: "I'll have a glass of...", translation: "我来一杯..." },
      { phrase: "That sounds great!", translation: "听起来不错！" },
      { phrase: "Is the tip included?", translation: "含小费吗？" }
    ],
    vocabulary: [
      { word: "menu", phonetic: "/ˈmenjuː/", meaning: "菜单" },
      { word: "recommend", phonetic: "/ˌrekəˈmend/", meaning: "推荐" },
      { word: "chef's special", phonetic: "/ʃefz ˈspeʃl/", meaning: "厨师推荐/今日特供" },
      { word: "grilled", phonetic: "/ɡrɪld/", meaning: "烤的" },
      { word: "sides", phonetic: "/saɪdz/", meaning: "配菜" },
      { word: "check", phonetic: "/tʃek/", meaning: "账单" },
      { word: "receipt", phonetic: "/rɪˈsiːt/", meaning: "收据/发票" }
    ],
    tips: "点餐时用 I'd like... 比 I want... 更礼貌。结账时可以说 Check, please. 或 Can I have the bill? 在美国用 check，在英国用 bill。"
  },

  // ==================== 2. 机场出行 ====================
  {
    id: 2,
    title: "机场出行",
    titleEn: "At the Airport",
    icon: "✈️",
    difficulty: "中级",
    description: "掌握值机、安检、登机、行李托运等机场场景英语",
    dialogues: [
      {
        speaker: "Staff",
        speakerCn: "工作人员",
        text: "Good morning! May I see your passport and ticket, please?",
        textCn: "早上好！请出示您的护照和机票。"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "Here you are. I'd like to check in for flight CA981 to New York.",
        textCn: "给你。我要办理飞往纽约的CA981航班值机。"
      },
      {
        speaker: "Staff",
        speakerCn: "工作人员",
        text: "Do you have any luggage to check in?",
        textCn: "有行李需要托运吗？"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "Yes, one suitcase. And I'll keep this backpack as carry-on.",
        textCn: "有，一个行李箱。这个背包我随身携带。"
      },
      {
        speaker: "Staff",
        speakerCn: "工作人员",
        text: "Would you prefer a window seat or an aisle seat?",
        textCn: "您想要靠窗还是靠过道的座位？"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "A window seat, please. What time does boarding start?",
        textCn: "靠窗的，谢谢。几点开始登机？"
      },
      {
        speaker: "Staff",
        speakerCn: "工作人员",
        text: "Boarding begins at 9:30 at Gate 23. Here's your boarding pass. Have a nice flight!",
        textCn: "9:30在23号登机口开始登机。这是您的登机牌。祝您旅途愉快！"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "Thank you! By the way, where is the security checkpoint?",
        textCn: "谢谢！对了，安检口在哪儿？"
      },
      {
        speaker: "Staff",
        speakerCn: "工作人员",
        text: "It's right after you go through that hallway, on your left.",
        textCn: "穿过那条走廊就是，在左手边。"
      }
    ],
    keyPhrases: [
      { phrase: "I'd like to check in for flight...", translation: "我要办理...航班的值机。" },
      { phrase: "Do you have any luggage to check in?", translation: "有行李需要托运吗？" },
      { phrase: "Window seat or aisle seat?", translation: "靠窗还是靠过道的座位？" },
      { phrase: "What time does boarding start?", translation: "几点开始登机？" },
      { phrase: "Where is the security checkpoint?", translation: "安检口在哪儿？" },
      { phrase: "I'll keep this as carry-on.", translation: "这个我随身携带。" },
      { phrase: "Have a nice flight!", translation: "旅途愉快！" }
    ],
    vocabulary: [
      { word: "boarding pass", phonetic: "/ˈbɔːrdɪŋ pæs/", meaning: "登机牌" },
      { word: "check in", phonetic: "/tʃek ɪn/", meaning: "值机/办理登机" },
      { word: "carry-on", phonetic: "/ˈkæri ɒn/", meaning: "随身行李" },
      { word: "aisle", phonetic: "/aɪl/", meaning: "过道" },
      { word: "gate", phonetic: "/ɡeɪt/", meaning: "登机口" },
      { word: "security checkpoint", phonetic: "/sɪˈkjʊərəti ˈtʃekpɔɪnt/", meaning: "安检口" },
      { word: "luggage", phonetic: "/ˈlʌɡɪdʒ/", meaning: "行李" }
    ],
    tips: "carry-on 指随身带上飞机的行李，checked luggage 指托运的行李。安检时如果被问 Do you have any liquids? 液体超过100ml需要托运。"
  },

  // ==================== 3. 购物逛街 ====================
  {
    id: 3,
    title: "购物逛街",
    titleEn: "Shopping",
    icon: "🛍️",
    difficulty: "初级",
    description: "学会在商场试穿、问价、砍价、退换货等购物表达",
    dialogues: [
      {
        speaker: "Salesperson",
        speakerCn: "店员",
        text: "Hi there! Can I help you find something?",
        textCn: "您好！需要帮您找什么吗？"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "I'm just browsing, thanks. Actually, do you have this jacket in a medium?",
        textCn: "我先随便看看，谢谢。哦对了，这件夹克有中号吗？"
      },
      {
        speaker: "Salesperson",
        speakerCn: "店员",
        text: "Let me check in the back. What color were you looking for?",
        textCn: "我去后面查一下。您想要什么颜色？"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "The navy blue one would be perfect. How much is it?",
        textCn: "深蓝色的就很好。多少钱？"
      },
      {
        speaker: "Salesperson",
        speakerCn: "店员",
        text: "It's $89.99, but we're having a 20% off sale today.",
        textCn: "89.99美元，不过今天打八折。"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "That's a good deal! Can I try it on?",
        textCn: "挺划算的！我能试穿吗？"
      },
      {
        speaker: "Salesperson",
        speakerCn: "店员",
        text: "Of course! The fitting room is right over there.",
        textCn: "当然！试衣间就在那边。"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "It fits perfectly. I'll take it. Do you accept WeChat Pay?",
        textCn: "很合身。我要了。能用微信支付吗？"
      },
      {
        speaker: "Salesperson",
        speakerCn: "店员",
        text: "Yes, we do. Would you like a bag?",
        textCn: "可以的。需要袋子吗？"
      }
    ],
    keyPhrases: [
      { phrase: "I'm just browsing, thanks.", translation: "我先随便看看，谢谢。" },
      { phrase: "Do you have this in a medium?", translation: "这件有中号吗？" },
      { phrase: "Can I try it on?", translation: "我能试穿吗？" },
      { phrase: "How much is it?", translation: "这个多少钱？" },
      { phrase: "That's a good deal!", translation: "挺划算的！" },
      { phrase: "I'll take it.", translation: "我要了。/我买了。" },
      { phrase: "Do you accept...?", translation: "能用...支付吗？" },
      { phrase: "Where is the fitting room?", translation: "试衣间在哪儿？" }
    ],
    vocabulary: [
      { word: "browse", phonetic: "/braʊz/", meaning: "浏览/随便看看" },
      { word: "fitting room", phonetic: "/ˈfɪtɪŋ ruːm/", meaning: "试衣间" },
      { word: "medium", phonetic: "/ˈmiːdiəm/", meaning: "中号" },
      { word: "navy blue", phonetic: "/ˈneɪvi bluː/", meaning: "深蓝色" },
      { word: "sale", phonetic: "/seɪl/", meaning: "促销/打折" },
      { word: "deal", phonetic: "/diːl/", meaning: "交易/划算" },
      { word: "receipt", phonetic: "/rɪˈsiːt/", meaning: "收据" }
    ],
    tips: "逛街时店员问 Can I help you? 如果只是看看可以说 I'm just browsing / looking. 试穿后在英美说 It fits well，而不是 It suits me（那个指风格适合）。"
  },

  // ==================== 4. 问路指路 ====================
  {
    id: 4,
    title: "问路指路",
    titleEn: "Asking for Directions",
    icon: "🗺️",
    difficulty: "初级",
    description: "学会问路、描述方向、理解距离和交通方式",
    dialogues: [
      {
        speaker: "You",
        speakerCn: "你",
        text: "Excuse me, could you tell me how to get to the nearest subway station?",
        textCn: "打扰一下，请问最近的地铁站怎么走？"
      },
      {
        speaker: "Passerby",
        speakerCn: "路人",
        text: "Sure. Go straight down this street for about two blocks, then turn right at the traffic light.",
        textCn: "当然。沿着这条街直走大约两个街区，然后在红绿灯右转。"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "Is it within walking distance?",
        textCn: "步行能到吗？"
      },
      {
        speaker: "Passerby",
        speakerCn: "路人",
        text: "Yes, it's about a 10-minute walk. You can't miss it — there's a big shopping mall next to it.",
        textCn: "能，大约走10分钟。你肯定能找到——旁边有个大商场。"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "Great, thanks! And is there a restroom nearby?",
        textCn: "太好了，谢谢！附近有洗手间吗？"
      },
      {
        speaker: "Passerby",
        speakerCn: "路人",
        text: "There's one inside the mall, on the second floor, next to the food court.",
        textCn: "商场里有一个，在二楼，美食广场旁边。"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "One more thing — do you know which exit I should take for the museum?",
        textCn: "再问一下——去博物馆从哪个出口出？"
      },
      {
        speaker: "Passerby",
        speakerCn: "路人",
        text: "Take Exit B. Once you're out, you'll see the museum right across the street.",
        textCn: "走B出口。一出来就能看到博物馆在马路对面。"
      }
    ],
    keyPhrases: [
      { phrase: "Excuse me, could you tell me how to get to...?", translation: "打扰一下，请问...怎么走？" },
      { phrase: "Go straight down this street.", translation: "沿着这条街直走。" },
      { phrase: "Turn right/left at the traffic light.", translation: "在红绿灯处右转/左转。" },
      { phrase: "Is it within walking distance?", translation: "步行能到吗？" },
      { phrase: "You can't miss it.", translation: "你肯定能找到。" },
      { phrase: "Which exit should I take?", translation: "我从哪个出口出？" },
      { phrase: "It's right across the street.", translation: "就在马路对面。" }
    ],
    vocabulary: [
      { word: "block", phonetic: "/blɒk/", meaning: "街区" },
      { word: "traffic light", phonetic: "/ˈtræfɪk laɪt/", meaning: "红绿灯" },
      { word: "intersection", phonetic: "/ˌɪntəˈsekʃn/", meaning: "十字路口" },
      { word: "subway", phonetic: "/ˈsʌbweɪ/", meaning: "地铁" },
      { word: "exit", phonetic: "/ˈeksɪt/", meaning: "出口" },
      { word: "across the street", phonetic: "/əˈkrɒs ðə striːt/", meaning: "马路对面" },
      { word: "food court", phonetic: "/fuːd kɔːrt/", meaning: "美食广场" }
    ],
    tips: "指路常用方向词：straight（直走）、turn left/right（左转/右转）、at the corner（在拐角处）。在美国问 subway，英国问 underground 或 tube。"
  },

  // ==================== 5. 酒店入住 ====================
  {
    id: 5,
    title: "酒店入住",
    titleEn: "Checking into a Hotel",
    icon: "🏨",
    difficulty: "中级",
    description: "掌握酒店预订、入住登记、询问设施和退房等表达",
    dialogues: [
      {
        speaker: "Receptionist",
        speakerCn: "前台",
        text: "Good afternoon! Welcome to Grand Hotel. Do you have a reservation?",
        textCn: "下午好！欢迎来到格兰大酒店。您有预订吗？"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "Yes, I have a reservation under the name Wang. I booked a double room for three nights.",
        textCn: "有的，用王这个名字预订的。我订了三个晚上的双人间。"
      },
      {
        speaker: "Receptionist",
        speakerCn: "前台",
        text: "Let me look that up. Yes, I have your booking here. Could I see your ID and a credit card for the deposit?",
        textCn: "我查一下。找到了。请出示您的身份证件和信用卡用于押金。"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "Here you go. By the way, is breakfast included?",
        textCn: "给你。对了，含早餐吗？"
      },
      {
        speaker: "Receptionist",
        speakerCn: "前台",
        text: "Yes, breakfast is served from 7:00 to 10:00 in the restaurant on the first floor.",
        textCn: "含的，早餐7点到10点在一楼餐厅供应。"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "Great. What's the Wi-Fi password? And do you have a gym?",
        textCn: "好的。Wi-Fi密码是多少？还有，有健身房吗？"
      },
      {
        speaker: "Receptionist",
        speakerCn: "前台",
        text: "The Wi-Fi password is 'grand2024'. The gym is on the 3rd floor and it's open 24 hours.",
        textCn: "Wi-Fi密码是grand2024。健身房在三楼，24小时开放。"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "Perfect. What time is check-out?",
        textCn: "太好了。退房时间是几点？"
      },
      {
        speaker: "Receptionist",
        speakerCn: "前台",
        text: "Check-out is at 11:00 AM. If you need a late check-out, just let us know. Here's your room key — Room 508.",
        textCn: "退房时间是上午11点。如需延迟退房，告诉我们即可。这是您的房卡——508房间。"
      }
    ],
    keyPhrases: [
      { phrase: "I have a reservation under the name...", translation: "我用...的名字预订了。" },
      { phrase: "Is breakfast included?", translation: "含早餐吗？" },
      { phrase: "What's the Wi-Fi password?", translation: "Wi-Fi密码是多少？" },
      { phrase: "Do you have a gym / pool?", translation: "有健身房/游泳池吗？" },
      { phrase: "What time is check-out?", translation: "退房时间是几点？" },
      { phrase: "Could I get a late check-out?", translation: "能延迟退房吗？" },
      { phrase: "I'd like to check out.", translation: "我要退房。" }
    ],
    vocabulary: [
      { word: "reservation", phonetic: "/ˌrezəˈveɪʃn/", meaning: "预订" },
      { word: "deposit", phonetic: "/dɪˈpɒzɪt/", meaning: "押金" },
      { word: "check-out", phonetic: "/tʃek aʊt/", meaning: "退房" },
      { word: "double room", phonetic: "/ˈdʌbl ruːm/", meaning: "双人间" },
      { word: "late check-out", phonetic: "/leɪt tʃek aʊt/", meaning: "延迟退房" },
      { word: "room service", phonetic: "/ruːm ˈsɜːvɪs/", meaning: "客房服务" },
      { word: "amenities", phonetic: "/əˈmiːnətiz/", meaning: "设施/便利设施" }
    ],
    tips: "入住时说 I have a reservation 或 I'd like to check in. 退房时说 I'd like to check out. 酒店通常用 room key 或 key card（房卡），不是 room card。"
  },

  // ==================== 6. 看医生 ====================
  {
    id: 6,
    title: "看医生",
    titleEn: "Seeing a Doctor",
    icon: "🏥",
    difficulty: "中级",
    description: "学会描述症状、预约挂号、取药和听懂医嘱",
    dialogues: [
      {
        speaker: "Receptionist",
        speakerCn: "前台护士",
        text: "Good morning. Do you have an appointment?",
        textCn: "早上好。您有预约吗？"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "Yes, I have a 10 o'clock appointment with Dr. Smith. My name is Li.",
        textCn: "有的，我和Smith医生约了10点。我姓李。"
      },
      {
        speaker: "Doctor",
        speakerCn: "医生",
        text: "Hello, Mr. Li. What seems to be the problem today?",
        textCn: "李先生你好。今天哪里不舒服？"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "I've had a sore throat and a fever for the past three days. I also have a bad cough.",
        textCn: "我嗓子疼、发烧三天了，还咳得厉害。"
      },
      {
        speaker: "Doctor",
        speakerCn: "医生",
        text: "Let me take your temperature and check your throat. Open your mouth and say 'Ah'.",
        textCn: "我量一下体温，看看喉咙。张嘴说'啊'。"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "Ah... Is it serious?",
        textCn: "啊... 严重吗？"
      },
      {
        speaker: "Doctor",
        speakerCn: "医生",
        text: "It looks like a throat infection. I'll prescribe some antibiotics. Are you allergic to any medications?",
        textCn: "看起来是咽喉感染。我给你开点抗生素。你对什么药物过敏吗？"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "No, I'm not allergic to anything. How often should I take the medicine?",
        textCn: "没有，我什么药都不过敏。药怎么吃？"
      },
      {
        speaker: "Doctor",
        speakerCn: "医生",
        text: "Take one pill three times a day after meals. Drink plenty of water and get some rest. You should feel better in a few days.",
        textCn: "一天三次，一次一片，饭后服用。多喝水，好好休息。几天后应该会好转。"
      }
    ],
    keyPhrases: [
      { phrase: "I have an appointment with Dr....", translation: "我和...医生有预约。" },
      { phrase: "What seems to be the problem?", translation: "哪里不舒服？" },
      { phrase: "I've had a sore throat and a fever.", translation: "我嗓子疼、发烧。" },
      { phrase: "Are you allergic to any medications?", translation: "你对什么药物过敏吗？" },
      { phrase: "How often should I take the medicine?", translation: "药怎么吃/多久吃一次？" },
      { phrase: "Take one pill three times a day after meals.", translation: "一天三次，一次一片，饭后服用。" },
      { phrase: "Is it serious?", translation: "严重吗？" }
    ],
    vocabulary: [
      { word: "symptom", phonetic: "/ˈsɪmptəm/", meaning: "症状" },
      { word: "sore throat", phonetic: "/sɔːr θrəʊt/", meaning: "嗓子疼" },
      { word: "prescription", phonetic: "/prɪˈskrɪpʃn/", meaning: "处方" },
      { word: "antibiotics", phonetic: "/ˌæntibaɪˈɒtɪks/", meaning: "抗生素" },
      { word: "allergic", phonetic: "/əˈlɜːrdʒɪk/", meaning: "过敏的" },
      { word: "pill", phonetic: "/pɪl/", meaning: "药片" },
      { word: "infection", phonetic: "/ɪnˈfekʃn/", meaning: "感染" }
    ],
    tips: "描述症状常用 I have a...（我有...症状）或 My... hurts（我...疼）。感冒症状：runny nose（流鼻涕）、headache（头疼）、cough（咳嗽）。药量：pill/tablet（片）、capsule（胶囊）、dose（剂量）。"
  },

  // ==================== 7. 社交寒暄 ====================
  {
    id: 7,
    title: "社交寒暄",
    titleEn: "Small Talk & Socializing",
    icon: "💬",
    difficulty: "初级",
    description: "学会日常打招呼、自我介绍、闲聊和结束对话",
    dialogues: [
      {
        speaker: "Stranger",
        speakerCn: "陌生人",
        text: "Hi! I don't think we've met. I'm Sarah. I work in the marketing department.",
        textCn: "嗨！我们好像没见过。我是Sarah，在市场部工作。"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "Nice to meet you, Sarah. I'm David. I just joined the design team last week.",
        textCn: "很高兴认识你，Sarah。我是David，上周刚加入设计团队。"
      },
      {
        speaker: "Sarah",
        speakerCn: "Sarah",
        text: "Oh, welcome aboard! How are you settling in so far?",
        textCn: "哦，欢迎加入！到目前为止适应得怎么样？"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "Pretty well, thanks. Everyone's been really friendly and helpful.",
        textCn: "挺好的，谢谢。大家都非常友好、乐于助人。"
      },
      {
        speaker: "Sarah",
        speakerCn: "Sarah",
        text: "That's great to hear! So what do you do for fun outside of work?",
        textCn: "太好了！工作之余你喜欢做什么？"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "I'm really into photography and hiking. How about you?",
        textCn: "我非常喜欢摄影和徒步。你呢？"
      },
      {
        speaker: "Sarah",
        speakerCn: "Sarah",
        text: "I love cooking and trying new restaurants. We should grab lunch sometime!",
        textCn: "我喜欢做饭和探索新餐厅。改天一起吃饭吧！"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "I'd love that! Let me give you my number. It was great chatting with you.",
        textCn: "好啊！我给你我的号码。很高兴和你聊天。"
      }
    ],
    keyPhrases: [
      { phrase: "I don't think we've met. I'm...", translation: "我们好像没见过。我是..." },
      { phrase: "Nice to meet you.", translation: "很高兴认识你。" },
      { phrase: "How are you settling in?", translation: "适应得怎么样？" },
      { phrase: "What do you do for fun?", translation: "你平时喜欢做什么？" },
      { phrase: "I'm really into...", translation: "我非常喜欢..." },
      { phrase: "We should grab lunch sometime!", translation: "改天一起吃个饭吧！" },
      { phrase: "It was great chatting with you.", translation: "很高兴和你聊天。" }
    ],
    vocabulary: [
      { word: "aboard", phonetic: "/əˈbɔːrd/", meaning: "加入（团队/公司）" },
      { word: "settle in", phonetic: "/ˈsetl ɪn/", meaning: "适应/安顿" },
      { word: "helpful", phonetic: "/ˈhelpfl/", meaning: "乐于助人的" },
      { word: "into", phonetic: "/ˈɪntuː/", meaning: "喜欢/对...感兴趣" },
      { word: "grab lunch", phonetic: "/ɡræb lʌntʃ/", meaning: "一起吃午饭" },
      { word: "colleague", phonetic: "/ˈkɒliːɡ/", meaning: "同事" },
      { word: "catch up", phonetic: "/kætʃ ʌp/", meaning: "叙旧/聊聊近况" }
    ],
    tips: "small talk 是指日常寒暄闲聊，英美文化中很常见。安全话题包括天气、爱好、工作、旅行。避免问年龄、收入、婚姻等私人问题。告别时可以说 It was nice meeting you 或 Let's keep in touch。"
  },

  // ==================== 8. 工作面试 ====================
  {
    id: 8,
    title: "工作面试",
    titleEn: "Job Interview",
    icon: "💼",
    difficulty: "高级",
    description: "掌握英文面试常见问题、自我介绍、提问技巧",
    dialogues: [
      {
        speaker: "Interviewer",
        speakerCn: "面试官",
        text: "Good morning. Thank you for coming in today. Could you start by telling me a little about yourself?",
        textCn: "早上好，感谢你来参加面试。先简单介绍一下你自己吧？"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "Of course. I graduated with a degree in Computer Science, and I've been working as a software engineer for the past five years. I specialize in front-end development and have led several major projects.",
        textCn: "好的。我毕业于计算机科学专业，过去五年一直从事软件工程师工作。我专攻前端开发，主导过几个重要项目。"
      },
      {
        speaker: "Interviewer",
        speakerCn: "面试官",
        text: "That's impressive. What would you say is your greatest strength?",
        textCn: "很不错。你认为自己最大的优势是什么？"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "I'd say my problem-solving skills. I enjoy tackling complex challenges and I'm good at breaking down large problems into manageable steps.",
        textCn: "我觉得是解决问题的能力。我喜欢应对复杂的挑战，擅长把大问题分解成可执行的步骤。"
      },
      {
        speaker: "Interviewer",
        speakerCn: "面试官",
        text: "And what about your weaknesses?",
        textCn: "那缺点呢？"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "I sometimes tend to be a perfectionist, but I've been working on balancing quality with efficiency. I've learned to set clear deadlines for myself.",
        textCn: "我有时候有点完美主义，不过一直在努力平衡质量和效率。我已经学会给自己设定明确的时间节点。"
      },
      {
        speaker: "Interviewer",
        speakerCn: "面试官",
        text: "Why do you want to work with us?",
        textCn: "你为什么想加入我们公司？"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "I've been following your company's work for a while. I really admire your innovative culture and I believe my skills would be a great fit for your team.",
        textCn: "我关注贵公司有一段时间了。非常欣赏你们的创新文化，相信我的技能能很好地融入团队。"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "I also have a question — what does a typical day look like in this role?",
        textCn: "我也有个问题——这个岗位的日常工作是什么样的？"
      }
    ],
    keyPhrases: [
      { phrase: "Tell me a little about yourself.", translation: "简单介绍一下你自己。" },
      { phrase: "I specialize in...", translation: "我专攻..." },
      { phrase: "What would you say is your greatest strength?", translation: "你最大的优势是什么？" },
      { phrase: "I enjoy tackling complex challenges.", translation: "我喜欢应对复杂的挑战。" },
      { phrase: "Why do you want to work with us?", translation: "你为什么想加入我们？" },
      { phrase: "I believe my skills would be a great fit.", translation: "相信我的技能很适合。" },
      { phrase: "What does a typical day look like?", translation: "日常工作是什么样的？" }
    ],
    vocabulary: [
      { word: "qualification", phonetic: "/ˌkwɒlɪfɪˈkeɪʃn/", meaning: "资质/学历" },
      { word: "strength", phonetic: "/streŋθ/", meaning: "优势/强项" },
      { word: "weakness", phonetic: "/ˈwiːknəs/", meaning: "缺点/弱项" },
      { word: "specialize", phonetic: "/ˈspeʃəlaɪz/", meaning: "专攻/擅长" },
      { word: "innovative", phonetic: "/ˈɪnəveɪtɪv/", meaning: "创新的" },
      { word: "deadline", phonetic: "/ˈdedlaɪn/", meaning: "截止日期" },
      { word: "fit", phonetic: "/fɪt/", meaning: "适合/匹配" }
    ],
    tips: "面试自我介绍用 present-past-future 结构：现在做什么→过去经历→未来期望。谈缺点时选真实但不致命的，并说明正在改进。面试最后面试官问 Do you have any questions? 一定要准备2-3个问题，显示你对职位有兴趣。"
  },

  // ==================== 9. 电话沟通 ====================
  {
    id: 9,
    title: "电话沟通",
    titleEn: "Phone Conversations",
    icon: "📞",
    difficulty: "中级",
    description: "学会打电话、留言、预约和客服沟通等电话场景",
    dialogues: [
      {
        speaker: "Receptionist",
        speakerCn: "前台",
        text: "Hello, ABC Company. How can I help you?",
        textCn: "你好，ABC公司。有什么可以帮您？"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "Hello, this is Zhang Wei speaking. Could I speak to Mr. Johnson, please?",
        textCn: "你好，我是张伟。请问Johnson先生在吗？"
      },
      {
        speaker: "Receptionist",
        speakerCn: "前台",
        text: "I'm sorry, he's in a meeting right now. Would you like to leave a message?",
        textCn: "抱歉，他正在开会。需要留言吗？"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "Yes, please. Could you ask him to call me back when he's available? My number is 555-0123.",
        textCn: "好的。麻烦让他有空回我电话。我的号码是555-0123。"
      },
      {
        speaker: "Receptionist",
        speakerCn: "前台",
        text: "Sure, I'll make sure he gets the message. Can I have your name again?",
        textCn: "好的，我一定转达。能再说一下您的名字吗？"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "Zhang Wei. Z-H-A-N-G, W-E-I. I'm calling about the project proposal.",
        textCn: "张伟。Z-H-A-N-G, W-E-I。我是关于项目提案打来的。"
      },
      {
        speaker: "Receptionist",
        speakerCn: "前台",
        text: "Got it, Mr. Zhang. I'll let him know. Is there anything else?",
        textCn: "记下了，张先生。我会转告他。还有其他事吗？"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "No, that's all. Thank you for your help. Have a nice day!",
        textCn: "没有了，就这些。谢谢你的帮助。祝你愉快！"
      }
    ],
    keyPhrases: [
      { phrase: "This is ... speaking.", translation: "我是..." },
      { phrase: "Could I speak to..., please?", translation: "请问...在吗？" },
      { phrase: "He's in a meeting right now.", translation: "他正在开会。" },
      { phrase: "Would you like to leave a message?", translation: "需要留言吗？" },
      { phrase: "Could you ask him to call me back?", translation: "能让他回我电话吗？" },
      { phrase: "I'm calling about...", translation: "我打电话是关于..." },
      { phrase: "I'll make sure he gets the message.", translation: "我一定转达。" }
    ],
    vocabulary: [
      { word: "available", phonetic: "/əˈveɪləbl/", meaning: "有空/可联系的" },
      { word: "leave a message", phonetic: "/liːv ə ˈmesɪdʒ/", meaning: "留言" },
      { word: "call back", phonetic: "/kɔːl bæk/", meaning: "回电话" },
      { word: "extension", phonetic: "/ɪkˈstenʃn/", meaning: "分机号" },
      { word: "put through", phonetic: "/pʊt θruː/", meaning: "转接" },
      { word: "hold on", phonetic: "/həʊld ɒn/", meaning: "稍等/别挂" },
      { word: "signal", phonetic: "/ˈsɪɡnəl/", meaning: "信号" }
    ],
    tips: "电话中介绍自己用 This is... 而不是 I am...。让对方稍等说 Hold on a moment 或 Bear with me。信号不好时说 You're breaking up 或 The signal is bad. 结束时说 Thanks for calling 或 Speak soon!"
  },

  // ==================== 10. 天气聊天 ====================
  {
    id: 10,
    title: "天气聊天",
    titleEn: "Talking About Weather",
    icon: "🌤️",
    difficulty: "初级",
    description: "学会描述天气、讨论气候、用天气打开话题",
    dialogues: [
      {
        speaker: "Neighbor",
        speakerCn: "邻居",
        text: "Beautiful day, isn't it?",
        textCn: "天气真好，对吧？"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "It sure is! Not a cloud in the sky. Perfect for a walk in the park.",
        textCn: "确实！万里无云。太适合去公园散步了。"
      },
      {
        speaker: "Neighbor",
        speakerCn: "邻居",
        text: "I know, right? After all that rain last week, this is a nice change.",
        textCn: "是吧？上周下了那么多雨，这天气可算好了。"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "Yeah, it was pouring for days. Did you hear the forecast for tomorrow?",
        textCn: "是啊，下了好几天大雨。你听明天的天气预报了吗？"
      },
      {
        speaker: "Neighbor",
        speakerCn: "邻居",
        text: "They said it's going to be sunny with a high of 28 degrees. Should be lovely.",
        textCn: "说明天晴天，最高28度。应该很不错。"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "That's great. I hope it stays like this for the weekend. We're planning a barbecue.",
        textCn: "太好了。希望周末也这样。我们计划烧烤呢。"
      },
      {
        speaker: "Neighbor",
        speakerCn: "邻居",
        text: "Fingers crossed! The weather can be so unpredictable this time of year.",
        textCn: "但愿如此！这个季节的天气真是说变就变。"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "True. Well, better enjoy it while it lasts!",
        textCn: "确实。趁天气好好好享受吧！"
      }
    ],
    keyPhrases: [
      { phrase: "Beautiful day, isn't it?", translation: "天气真好，对吧？" },
      { phrase: "Not a cloud in the sky.", translation: "万里无云。" },
      { phrase: "It was pouring for days.", translation: "下了好几天大雨。" },
      { phrase: "Did you hear the forecast?", translation: "你听天气预报了吗？" },
      { phrase: "It's going to be sunny with a high of...", translation: "明天晴天，最高..." },
      { phrase: "I hope it stays like this.", translation: "希望一直这样。" },
      { phrase: "The weather can be so unpredictable.", translation: "天气真是说变就变。" },
      { phrase: "Better enjoy it while it lasts!", translation: "趁天气好好好享受吧！" }
    ],
    vocabulary: [
      { word: "forecast", phonetic: "/ˈfɔːrkæst/", meaning: "天气预报" },
      { word: "pouring", phonetic: "/ˈpɔːrɪŋ/", meaning: "倾盆大雨" },
      { word: "unpredictable", phonetic: "/ˌʌnprɪˈdɪktəbl/", meaning: "不可预测的" },
      { word: "drizzle", phonetic: "/ˈdrɪzl/", meaning: "毛毛雨" },
      { word: "breeze", phonetic: "/briːz/", meaning: "微风" },
      { word: "humid", phonetic: "/ˈhjuːmɪd/", meaning: "潮湿的" },
      { word: "celsius", phonetic: "/ˈselsiəs/", meaning: "摄氏度" }
    ],
    tips: "天气是英美文化中最安全的 small talk 话题。用反义疑问句打开话题很自然：Lovely day, isn't it? / Bit cold today, isn't it? 温度用摄氏度说 degrees Celsius，华氏度说 degrees Fahrenheit。"
  },

  // ==================== 11. 交通出行 ====================
  {
    id: 11,
    title: "交通出行",
    titleEn: "Getting Around",
    icon: "🚇",
    difficulty: "初级",
    description: "学会乘坐公交、地铁、出租车、购票和换乘",
    dialogues: [
      {
        speaker: "You",
        speakerCn: "你",
        text: "Excuse me, does this bus go to the city center?",
        textCn: "请问，这趟公交车去市中心吗？"
      },
      {
        speaker: "Driver",
        speakerCn: "司机",
        text: "Yes, it does. The fare is $2.50. Exact change only.",
        textCn: "去的。票价两块五。请自备零钱，不找零。"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "Can I use a travel card instead?",
        textCn: "能用交通卡吗？"
      },
      {
        speaker: "Driver",
        speakerCn: "司机",
        text: "Sure, just tap it on the reader right there.",
        textCn: "可以，在那个刷卡机上刷一下就行。"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "Thanks. Could you let me know when we get to the central station?",
        textCn: "谢谢。到中央车站能提醒我一下吗？"
      },
      {
        speaker: "Driver",
        speakerCn: "司机",
        text: "No problem. It's about six stops from here. I'll call it out.",
        textCn: "没问题。大约六站路。我会报站的。"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "By the way, which line should I transfer to for the museum district?",
        textCn: "对了，去博物馆区要换乘哪条线？"
      },
      {
        speaker: "Driver",
        speakerCn: "司机",
        text: "At the central station, transfer to the blue line and get off at Museum Square. You can't miss it.",
        textCn: "在中央车站换乘蓝线，在博物馆广场下车。很好找。"
      }
    ],
    keyPhrases: [
      { phrase: "Does this bus go to...?", translation: "这趟车去...吗？" },
      { phrase: "The fare is $2.50.", translation: "票价两块五。" },
      { phrase: "Could you let me know when we get to...?", translation: "到...能提醒我一下吗？" },
      { phrase: "Which line should I transfer to?", translation: "要换乘哪条线？" },
      { phrase: "Get off at...", translation: "在...下车。" },
      { phrase: "Is this seat taken?", translation: "这个座位有人吗？" },
      { phrase: "How many stops from here?", translation: "从这里还有几站？" }
    ],
    vocabulary: [
      { word: "fare", phonetic: "/feər/", meaning: "票价/车费" },
      { word: "exact change", phonetic: "/ɪɡˈzækt tʃeɪndʒ/", meaning: "正好的零钱" },
      { word: "transfer", phonetic: "/trænsˈfɜːr/", meaning: "换乘" },
      { word: "stop", phonetic: "/stɒp/", meaning: "车站" },
      { word: "terminal", phonetic: "/ˈtɜːmɪnl/", meaning: "终点站/航站楼" },
      { word: "rush hour", phonetic: "/rʌʃ aʊər/", meaning: "高峰期" },
      { word: "platform", phonetic: "/ˈplætfɔːrm/", meaning: "站台" }
    ],
    tips: "公交上叫司机提醒你下车：Could you let me know when we get to...? 地铁里问换乘：Do I need to transfer? 或 Which line goes to...? 坐出租车可以说 Take me to... 或 I'm going to..."
  },

  // ==================== 12. 聚会活动 ====================
  {
    id: 12,
    title: "聚会活动",
    titleEn: "Parties & Events",
    icon: "🎉",
    difficulty: "中级",
    description: "学会邀请、接受/拒绝邀请、聚会聊天和道别",
    dialogues: [
      {
        speaker: "Friend",
        speakerCn: "朋友",
        text: "Hey! I'm throwing a housewarming party this Saturday. Would you like to come?",
        textCn: "嘿！这周六我办个乔迁派对。你想来吗？"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "That sounds fun! What time does it start? And should I bring anything?",
        textCn: "听起来不错！几点开始？需要带点什么吗？"
      },
      {
        speaker: "Friend",
        speakerCn: "朋友",
        text: "It starts at 7 PM. Just bring yourself! But if you want, a bottle of wine would be great.",
        textCn: "晚上7点开始。人来就行！不过如果你想，带瓶酒也不错。"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "Perfect. Can I bring a plus one? My cousin is visiting from out of town.",
        textCn: "好的。我能带个伴吗？我表妹从外地过来看我。"
      },
      {
        speaker: "Friend",
        speakerCn: "朋友",
        text: "Of course! The more, the merrier. Let me send you the address.",
        textCn: "当然！人越多越热闹。我把地址发你。"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "Thanks for having me. This place looks amazing! I love what you've done with the living room.",
        textCn: "谢谢邀请。这房子太棒了！客厅布置得真好看。"
      },
      {
        speaker: "Friend",
        speakerCn: "朋友",
        text: "Thank you! Make yourself at home. There's food and drinks in the kitchen.",
        textCn: "谢谢！别客气，随便坐。厨房里有吃的喝的。"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "I hate to leave early, but I have an early morning tomorrow. Thanks for a wonderful evening!",
        textCn: "我也不想早走，但明天一大早有事。谢谢，今晚很开心！"
      },
      {
        speaker: "Friend",
        speakerCn: "朋友",
        text: "No worries! Thanks for coming. Drive safe and text me when you get home.",
        textCn: "没事！谢谢你能来。开车小心，到家发个消息。"
      }
    ],
    keyPhrases: [
      { phrase: "I'm throwing a party. Would you like to come?", translation: "我要办个派对。你想来吗？" },
      { phrase: "Should I bring anything?", translation: "需要带点什么吗？" },
      { phrase: "Can I bring a plus one?", translation: "我能带个伴吗？" },
      { phrase: "The more, the merrier.", translation: "人越多越热闹。" },
      { phrase: "Make yourself at home.", translation: "别客气，当自己家。" },
      { phrase: "Thanks for having me.", translation: "谢谢邀请。" },
      { phrase: "I hate to leave early, but...", translation: "我也不想早走，但是..." },
      { phrase: "Thanks for a wonderful evening!", translation: "谢谢，今晚很开心！" }
    ],
    vocabulary: [
      { word: "housewarming", phonetic: "/ˈhaʊswɔːrmɪŋ/", meaning: "乔迁派对" },
      { word: "plus one", phonetic: "/plʌs wʌn/", meaning: "同伴/伴" },
      { word: "throw a party", phonetic: "/θrəʊ ə ˈpɑːrti/", meaning: "办派对" },
      { word: "make yourself at home", phonetic: "/meɪk jɔːˈself æt həʊm/", meaning: "别客气/当自己家" },
      { word: "RSVP", phonetic: "/ˌɑːr es viː ˈpiː/", meaning: "回复是否参加" },
      { word: "potluck", phonetic: "/ˈpɒtlʌk/", meaning: "每人带菜的聚餐" },
      { word: "host", phonetic: "/həʊst/", meaning: "主人/主办" }
    ],
    tips: "被邀请时如果去不了，礼貌地拒绝：I'd love to, but I can't make it. / I have a prior commitment. 带礼物去别人家可以带 wine（酒）、flowers（花）或 dessert（甜点）。临走时说 Thanks for having me 比 Thanks for inviting me 更地道。"
  },

  // ==================== 13. 银行办事 ====================
  {
    id: 13,
    title: "银行办事",
    titleEn: "At the Bank",
    icon: "🏦",
    difficulty: "中级",
    description: "学会开户、存取款、换汇和办理银行卡",
    dialogues: [
      {
        speaker: "Teller",
        speakerCn: "柜员",
        text: "Good morning! How can I help you today?",
        textCn: "早上好！今天有什么可以帮您的？"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "Hi, I'd like to open a savings account. What documents do I need?",
        textCn: "你好，我想开个储蓄账户。需要什么证件？"
      },
      {
        speaker: "Teller",
        speakerCn: "柜员",
        text: "You'll need a valid ID and proof of address. A utility bill or a lease agreement will do.",
        textCn: "需要有效身份证件和地址证明。水电费账单或租房合同都可以。"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "I have my passport and a bank statement from my previous bank. Will that work?",
        textCn: "我有护照和之前银行的账单。这个行吗？"
      },
      {
        speaker: "Teller",
        speakerCn: "柜员",
        text: "That should be fine. Do you also want to apply for a debit card?",
        textCn: "应该可以。还需要办一张借记卡吗？"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "Yes, please. And what's the minimum deposit to open an account?",
        textCn: "好的。开户最低存款是多少？"
      },
      {
        speaker: "Teller",
        speakerCn: "柜员",
        text: "It's $100 for a regular savings account. There's no monthly fee if you maintain a balance of at least $500.",
        textCn: "普通储蓄账户100美元。如果余额保持在500美元以上就没有月费。"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "Got it. I'd also like to deposit this check. How long does it take to clear?",
        textCn: "明白了。我还想存这张支票。多久能到账？"
      }
    ],
    keyPhrases: [
      { phrase: "I'd like to open a savings account.", translation: "我想开个储蓄账户。" },
      { phrase: "What documents do I need?", translation: "需要什么证件？" },
      { phrase: "What's the minimum deposit?", translation: "最低存款是多少？" },
      { phrase: "Is there a monthly fee?", translation: "有月费吗？" },
      { phrase: "How long does it take to clear?", translation: "多久能到账？" },
      { phrase: "I'd like to withdraw some money.", translation: "我想取点钱。" },
      { phrase: "What's the exchange rate?", translation: "汇率是多少？" }
    ],
    vocabulary: [
      { word: "savings account", phonetic: "/ˈseɪvɪŋz əˌkaʊnt/", meaning: "储蓄账户" },
      { word: "debit card", phonetic: "/ˈdebɪt kɑːrd/", meaning: "借记卡" },
      { word: "minimum deposit", phonetic: "/ˈmɪnɪməm dɪˈpɒzɪt/", meaning: "最低存款" },
      { word: "balance", phonetic: "/ˈbæləns/", meaning: "余额" },
      { word: "withdraw", phonetic: "/wɪðˈdrɔː/", meaning: "取款" },
      { word: "exchange rate", phonetic: "/ɪksˈtʃeɪndʒ reɪt/", meaning: "汇率" },
      { word: "clear", phonetic: "/klɪər/", meaning: "（支票）清算/到账" }
    ],
    tips: "银行常用表达：deposit（存款）、withdraw（取款）、transfer（转账）。支票相关的：cash a check（兑现支票）、deposit a check（存支票）。国外银行一般叫 checking account（活期账户）和 savings account（储蓄账户）。"
  },

  // ==================== 14. 租房看房 ====================
  {
    id: 14,
    title: "租房看房",
    titleEn: "Renting an Apartment",
    icon: "🏠",
    difficulty: "中级",
    description: "学会看房、询问租金、签合同和报修",
    dialogues: [
      {
        speaker: "Agent",
        speakerCn: "中介",
        text: "Welcome! Let me show you around. This is the living room — it gets great natural light.",
        textCn: "欢迎！我带您看看。这是客厅——采光非常好。"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "It's lovely! How much is the monthly rent? And are utilities included?",
        textCn: "真不错！月租多少？包含水电吗？"
      },
      {
        speaker: "Agent",
        speakerCn: "中介",
        text: "The rent is $1,500 per month. Water is included, but electricity and internet are separate.",
        textCn: "月租1500美元。水费包含在内，电费和网费另算。"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "I see. Is the apartment furnished? What about the appliances?",
        textCn: "明白了。房子带家具吗？电器呢？"
      },
      {
        speaker: "Agent",
        speakerCn: "中介",
        text: "It comes partially furnished — the sofa, bed, and dining table are included. The kitchen has a fridge, stove, and dishwasher.",
        textCn: "部分家具——沙发、床和餐桌都有。厨房有冰箱、炉灶和洗碗机。"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "That sounds good. How long is the lease? And what's the security deposit?",
        textCn: "听起来不错。租期多久？押金多少？"
      },
      {
        speaker: "Agent",
        speakerCn: "中介",
        text: "It's a one-year lease. The security deposit is one month's rent. Pets are allowed with an additional deposit.",
        textCn: "一年租约。押金是一个月房租。可以养宠物，但需要额外押金。"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "One last thing — who do I contact if something needs to be fixed?",
        textCn: "最后一个问题——东西坏了找谁修？"
      }
    ],
    keyPhrases: [
      { phrase: "Let me show you around.", translation: "我带您看看。" },
      { phrase: "How much is the monthly rent?", translation: "月租多少？" },
      { phrase: "Are utilities included?", translation: "包含水电吗？" },
      { phrase: "Is the apartment furnished?", translation: "房子带家具吗？" },
      { phrase: "How long is the lease?", translation: "租期多久？" },
      { phrase: "What's the security deposit?", translation: "押金多少？" },
      { phrase: "Who do I contact if something needs to be fixed?", translation: "东西坏了找谁修？" }
    ],
    vocabulary: [
      { word: "lease", phonetic: "/liːs/", meaning: "租约/租期" },
      { word: "security deposit", phonetic: "/sɪˈkjʊərəti dɪˈpɒzɪt/", meaning: "押金" },
      { word: "utilities", phonetic: "/juːˈtɪlətiz/", meaning: "水电杂费" },
      { word: "furnished", phonetic: "/ˈfɜːrnɪʃt/", meaning: "带家具的" },
      { word: "landlord", phonetic: "/ˈlændlɔːrd/", meaning: "房东" },
      { word: "tenant", phonetic: "/ˈtenənt/", meaning: "租客" },
      { word: "maintenance", phonetic: "/ˈmeɪntənəns/", meaning: "维修" }
    ],
    tips: "租房常用问句：When can I move in?（什么时候能搬进来？）、Is there parking?（有停车位吗？）、Are pets allowed?（可以养宠物吗？）。签合同前仔细看 lease agreement（租赁合同），注意条款。"
  },

  // ==================== 15. 咖啡闲聊 ====================
  {
    id: 15,
    title: "咖啡闲聊",
    titleEn: "Coffee Chat",
    icon: "☕",
    difficulty: "初级",
    description: "学会在咖啡店点单、闲聊、约朋友喝咖啡",
    dialogues: [
      {
        speaker: "Barista",
        speakerCn: "咖啡师",
        text: "Hi, what can I get for you today?",
        textCn: "你好，今天想喝点什么？"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "I'll have a medium latte, please. Can I get it with oat milk?",
        textCn: "我要一杯中杯拿铁。能换成燕麦奶吗？"
      },
      {
        speaker: "Barista",
        speakerCn: "咖啡师",
        text: "Sure! Hot or iced? And would you like any syrup in that?",
        textCn: "可以！热的还是冰的？要加糖浆吗？"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "Hot, please. And just a little vanilla syrup. No whipped cream.",
        textCn: "热的。加一点香草糖浆就行，不要奶油。"
      },
      {
        speaker: "Barista",
        speakerCn: "咖啡师",
        text: "Got it. That'll be $4.75. Name for the order?",
        textCn: "好的。一共4.75美元。请问怎么称呼？"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "It's Lily. Do you have any pastries to go with the coffee?",
        textCn: "我叫Lily。有配咖啡的点心吗？"
      },
      {
        speaker: "Barista",
        speakerCn: "咖啡师",
        text: "We have fresh croissants and blueberry muffins. They just came out of the oven.",
        textCn: "有新鲜的可颂和蓝莓麦芬，刚出炉的。"
      },
      {
        speaker: "You",
        speakerCn: "你",
        text: "I'll take a croissant. For here, please.",
        textCn: "来个可颂。在这吃。"
      }
    ],
    keyPhrases: [
      { phrase: "I'll have a medium latte, please.", translation: "我要一杯中杯拿铁。" },
      { phrase: "Can I get it with oat milk?", translation: "能换成燕麦奶吗？" },
      { phrase: "Hot or iced?", translation: "热的还是冰的？" },
      { phrase: "No whipped cream.", translation: "不要奶油。" },
      { phrase: "For here or to go?", translation: "在这吃还是带走？" },
      { phrase: "Do you have any pastries?", translation: "有点心吗？" },
      { phrase: "That'll be $4.75.", translation: "一共4.75美元。" }
    ],
    vocabulary: [
      { word: "latte", phonetic: "/ˈlɑːteɪ/", meaning: "拿铁" },
      { word: "oat milk", phonetic: "/əʊt mɪlk/", meaning: "燕麦奶" },
      { word: "whipped cream", phonetic: "/wɪpt kriːm/", meaning: "打发奶油" },
      { word: "croissant", phonetic: "/ˈkwæsɒ̃/", meaning: "可颂/牛角包" },
      { word: "for here", phonetic: "/fɔːr hɪər/", meaning: "堂食" },
      { word: "to go", phonetic: "/tuː ɡəʊ/", meaning: "带走" },
      { word: "syrup", phonetic: "/ˈsɪrəp/", meaning: "糖浆" }
    ],
    tips: "咖啡店点单常用：I'll have a...（我要一个...）。杯型：small/medium/large，星巴克是 tall/grande/venti。定制化表达：extra shot（加浓缩）、light ice（少冰）、half sweet（半糖）。For here（堂食）vs To go（带走）。"
  }
];

// 挂载到 window 对象
window.oralScenes = oralScenes;
