const allGrammarData = {
    "1-2": [
        // 1. be动词
        { type: 'lesson', title: '重点词汇：be动词 (is, am, are)', content: '<p style="text-align: left; margin-bottom: 15px;"><b>be动词</b>有三种形式：<br><br><b style="color: var(--primary-color);">am</b>: 跟 I 连用。<br><b style="color: var(--secondary-color);">is</b>: 一般和第三人称它(it)、男他(he)、女她(she)或 this 连用。<br><b style="color: #10b981;">are</b>: 一般和复数、你(you)连用。</p>' },
        { type: 'mcq', module: '词汇辨析', question: 'This ___ my handbag.', hint: '这是我的手提包。', options: ['am', 'is', 'are'], answer: 'is' },
        { type: 'mcq', module: '词汇辨析', question: 'I ___ a teacher.', hint: '我是一名老师。', options: ['am', 'is', 'are'], answer: 'am' },
        { type: 'mcq', module: '词汇辨析', question: 'You ___ my friend.', hint: '你是我的朋友。', options: ['am', 'is', 'are'], answer: 'are' },

        // 2. this vs that
        { type: 'lesson', title: '重点词汇：this 与 that', content: '<p style="text-align: left; margin-bottom: 15px;"><b style="color: var(--primary-color);">this</b>: 表示“这个”，通常指离我们<b style="color: var(--error-color);">很近</b>的人或事物。<br><br><b style="color: var(--secondary-color);">that</b>: 表示“那个”，通常指离我们<b style="color: var(--error-color);">较远</b>的人或事物。</p>' },
        { type: 'mcq', module: '词汇辨析', question: 'Is ___ your handbag?', hint: '这是你的手提包吗？', options: ['this', 'that'], answer: 'this' },
        { type: 'mcq', module: '词汇辨析', question: '___ is an orange.', hint: '这是一个橘子。', options: ['This', 'That'], answer: 'This' },
        { type: 'mcq', module: '词汇辨析', question: '___ is an apple.', hint: '那是一个苹果。', options: ['This', 'That'], answer: 'That' },

        // 3. 合成词
        { type: 'lesson', title: '重点词汇：有趣的合成词', content: '<p style="text-align: left; margin-bottom: 15px;">英语里有很多由两个单词组合成的新单词，叫做<b>合成词</b>。<br><br>• <b style="color: var(--primary-color);">handbag (手提包)</b> = hand(手) + bag(包)<br>• <b style="color: var(--secondary-color);">bedroom (卧室)</b> = bed(床) + room(房间)<br>• <b style="color: #10b981;">bookcase (书架)</b> = book(书) + case(盒子/柜)</p>' },
        { type: 'mcq', module: '单词拼图', question: 'bed + room = ___', hint: '床 + 房间 = 卧室', options: ['bedroom', 'bathroom'], answer: 'bedroom' },
        { type: 'mcq', module: '单词拼图', question: 'book + case = ___', hint: '书 + 柜 = 书架', options: ['bookbag', 'bookcase'], answer: 'bookcase' },
        { type: 'mcq', module: '单词拼图', question: 'hand + bag = ___', hint: '手 + 包 = 手提包', options: ['handbag', 'baghand'], answer: 'handbag' },

        // 4. pardon
        { type: 'lesson', title: '重点词汇：礼貌用语 Pardon', content: '<p style="text-align: left; margin-bottom: 15px;"><b style="color: var(--primary-color);">Pardon</b>: 是一种礼貌的用法，表示“再说一次”。<br><br>当有人和你说话，你没有听清楚时，就可以说：<br><b>Pardon?</b> (你能再说一次吗？)</p>' },
        { type: 'mcq', module: '情景交际', question: '有人和你说话你没听清楚，你能再说一次吗？你可以用：', hint: '请再说一次', options: ['Pardon', 'Sorry'], answer: 'Pardon' },
        { type: 'mcq', module: '情景交际', question: '- Excuse me, is this your bag?<br>- ___?', hint: '这个时候你没有听清楚，你问他：', options: ['Excuse me', 'Pardon'], answer: 'Pardon' },
        { type: 'mcq', module: '情景交际', question: '- Is this your watch?<br>- ___?<br>- Is this your watch?', hint: '你没听清，请他再说一次。', options: ['Pardon', 'Sorry'], answer: 'Pardon' },

        // 5. 人称代词
        { type: 'lesson', title: '语法重点：人称代词（主格 vs 宾格）', content: '<p style="text-align: left; margin-bottom: 15px;"><b style="color: var(--primary-color);">主格</b>: 做主语，是动作的发起者（如 I, he, she, it, they）。<br><b style="color: var(--secondary-color);">宾格</b>: 做宾语，是动作的接受者（如 me, him, her, it, them）。<br><br><b>例子：</b> <u style="color:var(--primary-color)">I</u> love <u style="color:var(--secondary-color)">him</u>. (我爱他)</p>' },
        { type: 'mcq', module: '代词消消乐', question: 'Mary is my best friend. I like ___.', hint: '玛丽是我最好的朋友。我喜欢她。', options: ['she', 'her'], answer: 'her' },
        { type: 'mcq', module: '代词消消乐', question: '___ is my best friend.', hint: '她是我最好的朋友。', options: ['She', 'Her'], answer: 'She' },
        { type: 'mcq', module: '代词消消乐', question: '___ is a pretty girl.', hint: '她是一个漂亮的女孩儿。', options: ['She', 'Her'], answer: 'She' },
        { type: 'mcq', module: '代词消消乐', question: 'I love ___.', hint: '我爱他。', options: ['he', 'him'], answer: 'him' },

        // 6. Excuse me vs Sorry
        { type: 'lesson', title: '语法重点：Excuse me vs Sorry', content: '<p style="text-align: left; margin-bottom: 15px;"><b style="color: var(--primary-color);">Excuse me</b>: 用在打扰别人、询问信息之前，表示“对不起，打扰一下”。<br><b style="color: var(--secondary-color);">Sorry</b>: 用在已经做了错事，或者表示某种过失，表达歉意。</p>' },
        { type: 'mcq', module: '情景小侦探', question: 'I lost your pencil.', hint: '我把你的铅笔弄丢了。', options: ['Excuse me', 'Sorry'], answer: 'Sorry' },
        { type: 'mcq', module: '情景小侦探', question: '_______, is this your coat?', hint: '在句子的开头询问，这是你的外套吗？', options: ['Excuse me', 'Sorry'], answer: 'Excuse me' },
        { type: 'mcq', module: '情景小侦探', question: '_______, is this your pen?', hint: '这是你的钢笔吗？', options: ['Excuse me', 'Sorry'], answer: 'Excuse me' },
        { type: 'mcq', module: '情景小侦探', question: '_______, are you jack?', hint: '打扰一下，你是杰克吗？', options: ['Excuse me', 'Sorry'], answer: 'Excuse me' },
        { type: 'mcq', module: '情景小侦探', question: 'I am so _______.', hint: '我非常抱歉。', options: ['excuse me', 'sorry'], answer: 'sorry' },
        { type: 'mcq', module: '情景小侦探', question: '_______, May I have a cup of tea?', hint: '我能来一杯茶吗？', options: ['Excuse me', 'Sorry'], answer: 'Excuse me' },
        { type: 'mcq', module: '情景小侦探', question: '_______, is that a bank?', hint: '对不起，那是一家银行吗？', options: ['Excuse me', 'Sorry'], answer: 'Excuse me' },

        // 7. 陈述句变疑问句
        { type: 'lesson', title: '语法重点：陈述句变疑问句', content: '<p style="text-align: left; margin-bottom: 15px;">把陈述句变成一般疑问句，分两步走魔法：<br><br>1. 将 <b style="color: var(--primary-color);">be 动词 (is, am, are)</b> 提到句首。<br>2. 将 <b style="color: var(--secondary-color);">主语 (如 this, that, it)</b> 往后放。<br><br>例：This is a handbag. ➡️ Is this a handbag?</p>' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装成疑问句：', hint: 'This is a handbag.', words: ['is', 'this', 'a', 'handbag', '?'], answer: 'is this a handbag ?' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装成疑问句：', hint: 'This is a bird.', words: ['this', 'is', '?', 'a', 'bird'], answer: 'is this a bird ?' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装成疑问句：', hint: 'This is his key.', words: ['his', 'is', 'key', 'this', '?'], answer: 'is this his key ?' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装成疑问句：', hint: 'This is a wallet.', words: ['is', 'this', 'a', 'wallet', '?'], answer: 'is this a wallet ?' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装成疑问句：', hint: 'This is your dress.', words: ['this', 'is', 'your', 'dress', '?'], answer: 'is this your dress ?' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装成疑问句：', hint: 'It is a watch.', words: ['it', 'is', 'a', 'watch', '?'], answer: 'is it a watch ?' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装成疑问句：', hint: 'This is a book.', words: ['is', 'this', 'a', 'book', '?'], answer: 'is this a book ?' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装成疑问句：', hint: 'This is your cup.', words: ['is', 'this', 'your', 'cup', '?'], answer: 'is this your cup ?' }
    ],
    "3": [
        // 1. 物主代词
        { type: 'lesson', title: '重点词汇：形容词性物主代词', content: '<p style="text-align: left; margin-bottom: 15px;">用于修饰限定这是谁的东西：<br><br><b style="color: var(--primary-color);">my</b> (我的)<br><b style="color: var(--secondary-color);">your</b> (你的)<br><b style="color: #10b981;">his</b> (他的) / <b style="color: #10b981;">her</b> (她的) / <b style="color: #10b981;">its</b> (它的)<br><b style="color: var(--error-color);">their</b> (他们的)</p>' },
        { type: 'mcq', module: '词汇辨析', question: '___ jacket', hint: '你的夹克', options: ['your', 'you'], answer: 'your' },
        { type: 'mcq', module: '词汇辨析', question: '___ house', hint: '他的房子', options: ['his', 'he'], answer: 'his' },
        { type: 'mcq', module: '词汇辨析', question: '___ car', hint: '他们的车', options: ['their', 'they'], answer: 'their' },
        
        // 2. please
        { type: 'lesson', title: '重点词汇：please', content: '<p style="text-align: left; margin-bottom: 15px;"><b style="color: var(--primary-color);">please</b>: “请”，是一个很礼貌的用语，经常用在句子的末尾，用一个逗号把它隔开。</p>' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '请给我两杯咖啡', words: ['two', 'coffees', ',', 'please'], answer: 'two coffees , please' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '给我五张学生票', words: ['five', 'students', 'tickets', ',', 'please'], answer: 'five students tickets , please' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '请把我的外套给我。', words: ['my', 'coat', ',', 'please'], answer: 'my coat , please' },
        
        // 3. sir / madam
        { type: 'lesson', title: '重点词汇：sir 与 madam', content: '<p style="text-align: left; margin-bottom: 15px;"><b style="color: var(--primary-color);">sir</b>: 先生。用于不认识的男士、比你年长的男士或上级。<br><br><b style="color: var(--secondary-color);">madam</b>: 女士。对应的女性尊称。</p>' },
        { type: 'mcq', module: '情景交际', question: 'Is this your umbrella, ___?', hint: '先生，这是您的伞吗？', options: ['sir', 'madam'], answer: 'sir' },
        { type: 'mcq', module: '情景交际', question: 'Here is your dress, ___.', hint: '女士，这是您的裙子。', options: ['madam', 'sir'], answer: 'madam' },
        { type: 'mcq', module: '情景交际', question: 'Good morning, ___.', hint: '长官早上好。', options: ['sir', 'madam'], answer: 'sir' },
        
        // 4. number
        { type: 'lesson', title: '重点词汇：number', content: '<p style="text-align: left; margin-bottom: 15px;"><b style="color: var(--primary-color);">number</b>: 表示号码、数字的意思。可以缩写成大写字母 N 跟着小写 o 再加上一个小点儿：<b style="color: var(--secondary-color);">No.</b></p>' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '十路公交车', words: ['bus', 'number', 'ten'], answer: 'bus number ten' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '七路公交车', words: ['bus', 'number', 'seven'], answer: 'bus number seven' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '五路公交车', words: ['bus', 'number', 'five'], answer: 'bus number five' },

        // 5. here is
        { type: 'lesson', title: '句型：Here is...', content: '<p style="text-align: left; margin-bottom: 15px;"><b style="color: var(--primary-color);">Here is...</b>: 这是什么什么东西。一般情况下是给别人东西的时候会说这句话。</p>' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '这是我的票据', words: ['here', 'is', 'my', 'ticket'], answer: 'here is my ticket' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '这是一件外套', words: ['here', 'is', 'a', 'coat'], answer: 'here is a coat' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '这是我的外套', words: ['here', 'is', 'my', 'coat'], answer: 'here is my coat' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '这是一个杯子', words: ['here', 'is', 'a', 'cup'], answer: 'here is a cup' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '这是我的杯子', words: ['here', 'is', 'my', 'cup'], answer: 'here is my cup' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '这是一块手表', words: ['here', 'is', 'a', 'watch'], answer: 'here is a watch' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '这是你的手表', words: ['here', 'is', 'your', 'watch'], answer: 'here is your watch' },
        { type: 'mcq', module: '情景交际', question: '___ your change.', hint: '你的零钱', options: ['Here is', 'This is'], answer: 'Here is' },

        // 6. 否定句
        { type: 'lesson', title: '句型：be 动词的否定句', content: '<p style="text-align: left; margin-bottom: 15px;">当含有 be 动词的句子变成否定句时，只要在 be 动词的后面加上 <b style="color: var(--error-color);">not</b> 表示不是。<br><br>常见缩写：<br>is not ➡️ <b style="color: var(--primary-color);">isn\'t</b><br>are not ➡️ <b style="color: var(--primary-color);">aren\'t</b></p>' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '这不是我的雨伞。', words: ['this', 'is', 'not', 'my', 'umbrella'], answer: 'this is not my umbrella' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '这不是我的钢笔。', words: ['this', 'is', 'not', 'my', 'pen'], answer: 'this is not my pen' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我不是学生。', words: ['I', 'am', 'not', 'a', 'student'], answer: 'I am not a student' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '她不是我的学生。', words: ['she', 'is', 'not', 'my', 'student'], answer: 'she is not my student' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '他们不是学生。', words: ['they', 'are', 'not', 'students'], answer: 'they are not students' },

        // 7. 一般疑问句与回答
        { type: 'lesson', title: '句型：一般疑问句及其回答', content: '<p style="text-align: left; margin-bottom: 15px;">答案是 yes 或者 no 的句子就叫一般疑问句。<br><br>肯定回答：<b style="color: var(--success-color);">Yes, it is.</b><br>否定回答：<b style="color: var(--error-color);">No, it isn\'t.</b><br>（注意：习惯上用 it 代替 this 来回答）</p>' },
        { type: 'mcq', module: '情景交际', question: '- Is this your dress?<br>- ___.', hint: '是的，是我的裙子。', options: ['Yes, it is', 'Yes, this is'], answer: 'Yes, it is' },
        { type: 'mcq', module: '情景交际', question: '- Is this his jacket?<br>- ___.', hint: '不，不是的。', options: ['No, it isn\'t', 'No, this isn\'t'], answer: 'No, it isn\'t' },
        { type: 'mcq', module: '情景交际', question: '- Is this your hat?<br>- ___.', hint: '是的，它是的。', options: ['Yes, it is', 'Yes, it isn\'t'], answer: 'Yes, it is' },
        { type: 'mcq', module: '情景交际', question: '- Is this your bag?<br>- ___.', hint: '不，不是的。', options: ['No, it isn\'t', 'Yes, it is'], answer: 'No, it isn\'t' },
        { type: 'mcq', module: '情景交际', question: 'Is this ___ pencil case?', hint: '这是他的铅笔盒吗？', options: ['his', 'he'], answer: 'his' },
        { type: 'mcq', module: '情景交际', question: '- Is this her eraser?<br>- ___.', hint: '这是她的橡皮擦吗？是的。', options: ['Yes, it is', 'No, it isn\'t'], answer: 'Yes, it is' },

        // 8. 表示感谢
        { type: 'lesson', title: '拓展：多种感谢的表达', content: '<p style="text-align: left; margin-bottom: 15px;">除了 Thank you very much，还可以用：<br><br>• <b style="color: var(--primary-color);">Thanks.</b> (谢啦，很随意)<br>• <b style="color: var(--secondary-color);">Thanks a lot.</b> (非常感谢)<br>• <b style="color: #10b981;">Many thanks.</b> (多谢)<br>• <b style="color: #f59e0b;">It\'s very nice of you.</b> (你真是一个好人，你真好)</p>' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '你真是一个好人。', words: ['it\'s', 'very', 'nice', 'of', 'you'], answer: 'it\'s very nice of you' },
        { type: 'mcq', module: '情景交际', question: '- Here is your bag.<br>- ___.', hint: '非常感谢。', options: ['Thanks a lot', 'Sorry'], answer: 'Thanks a lot' },
        { type: 'mcq', module: '情景交际', question: '- This is your coat.<br>- ___.', hint: '谢啦。', options: ['Thanks', 'Excuse me'], answer: 'Thanks' }
    ],
    "5": [
        // 1. 早上、下午、晚上的表达
        { type: 'lesson', title: '重点词汇：时间段与问候', content: '<p style="text-align: left; margin-bottom: 15px;">在不同的时间段，我们有不同的词汇和问候语：<br><br><b style="color: var(--primary-color);">morning</b>: 早上 / in the morning / Good morning.<br><b style="color: var(--secondary-color);">afternoon</b>: 下午 / in the afternoon / Good afternoon.<br><b style="color: #10b981;">evening</b>: 晚上 / in the evening / Good evening.</p>' },
        { type: 'mcq', module: '情景交际', question: '早上打招呼，我们可以用哪句话呢？', hint: '早上好。', options: ['good night', 'good morning', 'good afternoon'], answer: 'good morning' },
        { type: 'mcq', module: '情景交际', question: '下午打招呼，我们可以用哪句话呢？', hint: '下午好。', options: ['good afternoon', 'good evening'], answer: 'good afternoon' },
        { type: 'mcq', module: '情景交际', question: '晚上打招呼，我们可以用哪句话呢？', hint: '晚上好。', options: ['good evening', 'good morning'], answer: 'good evening' },

        // 2. 尊称的区分
        { type: 'lesson', title: '重点词汇：尊称的区分', content: '<p style="text-align: left; margin-bottom: 15px;"><b style="color: var(--primary-color);">Mr</b>: 先生（后面跟姓或名连用）。<br><b style="color: var(--secondary-color);">sir</b>: 先生（单独使用，不跟其他词连用）。<br><b style="color: #10b981;">Mrs</b>: 夫人（称呼已婚女性）。<br><b style="color: #f59e0b;">Miss</b>: 小姐（称呼未婚女性）。<br><b style="color: #8b5cf6;">Ms</b>: 女士（任意女子的姓名前都可以加的尊称，无论婚否）。</p>' },
        { type: 'mcq', module: '词汇辨析', question: '称呼一位已婚的女性：', hint: '夫人', options: ['Mrs', 'Mr', 'Miss'], answer: 'Mrs' },
        { type: 'mcq', module: '词汇辨析', question: '称呼一位年轻的未婚女孩：', hint: '小姐', options: ['Miss', 'Mrs', 'Ms'], answer: 'Miss' },
        { type: 'mcq', module: '词汇辨析', question: '不知对方是否结婚，可以称呼：', hint: '女士', options: ['Ms', 'Miss', 'Mrs'], answer: 'Ms' },
        
        // 3. 国家与国人
        { type: 'lesson', title: '重点词汇：国家与国人', content: '<p style="text-align: left; margin-bottom: 15px;">国家和对应的人有紧密的联系：<br><br>• <b>中国</b> China ➡️ <b>中国人</b> Chinese<br>• <b>日本</b> Japan ➡️ <b>日本人</b> Japanese<br>• <b>法国</b> France ➡️ <b>法国人</b> French<br>• <b>德国</b> Germany ➡️ <b>德国人</b> German<br>• <b>韩国</b> Korea ➡️ <b>韩国人</b> Korean</p>' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '他是一个韩国人。', words: ['he', 'is', 'Korean'], answer: 'he is Korean' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '他是法国人。', words: ['she', 'is', 'French'], answer: 'she is French' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '他是日本人。', words: ['he', 'is', 'Japanese'], answer: 'he is Japanese' },

        // 4. new vs old
        { type: 'lesson', title: '重点词汇：new 与 old', content: '<p style="text-align: left; margin-bottom: 15px;"><b style="color: var(--primary-color);">new</b>: 新的，崭新的。<br><b style="color: var(--secondary-color);">old</b>: 旧的。</p>' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '这是一支新笔。', words: ['this', 'is', 'a', 'new', 'pen'], answer: 'this is a new pen' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '这是一条旧裙子。', words: ['this', 'is', 'an', 'old', 'dress'], answer: 'this is an old dress' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '那是旧的吗？', words: ['is', 'that', 'old', '?'], answer: 'is that old ?' },

        // 5. 课堂称呼
        { type: 'lesson', title: '重点词汇：课堂称呼', content: '<p style="text-align: left; margin-bottom: 15px;">在课堂里，我们会用到这些称呼：<br><br>• <b style="color: var(--primary-color);">student</b>: 学生<br>• <b style="color: var(--secondary-color);">classmate</b>: 同学<br>• <b style="color: #10b981;">teacher</b>: 老师</p>' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我就是一名学生。', words: ['I', 'am', 'a', 'student'], answer: 'I am a student' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '她是我的老师。', words: ['she', 'is', 'my', 'teacher'], answer: 'she is my teacher' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '他是我的同学。', words: ['he', 'is', 'my', 'classmate'], answer: 'he is my classmate' },

        // 6. 主系表结构
        { type: 'lesson', title: '语法重点：主系表结构', content: '<p style="text-align: left; margin-bottom: 15px;">“谁是什么”的结构叫<b style="color: var(--primary-color);">主系表结构</b>：<br><br>• <b>主语</b>: 谁（如 Sophie, this, he, it）<br>• <b>系动词</b>: be动词（is, am, are）<br>• <b>表语</b>: 身份、状态、性质（如 a new student, a cat, German）<br><br>例：Sophie(主语) is(系动词) a new student(表语)。</p>' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '索菲亚是一位新学生。', words: ['Sophie', 'is', 'a', 'new', 'student'], answer: 'Sophie is a new student' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '这是一只猫。', words: ['this', 'is', 'a', 'cat'], answer: 'this is a cat' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '他是德国人。', words: ['he', 'is', 'German'], answer: 'he is German' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '这是一把伞。', words: ['this', 'is', 'an', 'umbrella'], answer: 'this is an umbrella' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '它是一只鸟。', words: ['it', 'is', 'a', 'bird'], answer: 'it is a bird' },

        // 7. 打招呼
        { type: 'lesson', title: '日常交际：见面打招呼', content: '<p style="text-align: left; margin-bottom: 15px;"><b style="color: var(--primary-color);">Nice to meet you.</b>: 很高兴见到你（用于<b>初次</b>和别人打招呼）。回答是：Nice to meet you, too.<br><br><b style="color: var(--secondary-color);">Nice to see you.</b>: 很高兴看见你（用于第二次及以后的见面，更常用）。</p>' },
        { type: 'mcq', module: '情景交际', question: 'Nice to meet you.', hint: '很高兴认识你。', options: ['Nice to see you', 'Nice to meet you too'], answer: 'Nice to meet you too' },
        { type: 'mcq', module: '情景交际', question: '- Nice to meet you.<br>- ___.', hint: '我也很高兴见到你。', options: ['Nice to meet you too', 'See you'], answer: 'Nice to meet you too' },
        { type: 'mcq', module: '情景交际', question: '老朋友之间见面打招呼，可以说：', hint: '很高兴看见你。', options: ['Nice to see you', 'Nice to meet you'], answer: 'Nice to see you' },

        // 8. 也的用法
        { type: 'lesson', title: '语法重点：“也”的三种表达', content: '<p style="text-align: left; margin-bottom: 15px;">英语中表达“也”有三种常见的词：<br><br>1. <b style="color: var(--primary-color);">too</b>: 用在<b>肯定句/陈述句</b>的结尾。<br>2. <b style="color: var(--secondary-color);">also</b>: 用在<b>肯定句/陈述句</b>的中间。<br>3. <b style="color: #10b981;">either</b>: 用在<b>否定句</b>的结尾。</p>' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我也喜欢香蕉。', words: ['I', 'like', 'bananas', 'too'], answer: 'I like bananas too' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '她也是中国人。', words: ['she', 'is', 'Chinese', 'too'], answer: 'she is Chinese too' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '他也来自中国。', words: ['he', 'is', 'also', 'from', 'China'], answer: 'he is also from China' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '他也不喜欢苹果。', words: ['he', 'does', 'not', 'like', 'apples', 'either'], answer: 'he does not like apples either' },
        { type: 'mcq', module: '词汇辨析', question: 'I like oranges, I like oranges ___.', hint: '我也喜欢橙子。', options: ['too', 'either', 'also'], answer: 'too' }
    ],
    "7": [
        // 1. name 与中外姓名差异
        { type: 'lesson', title: '重点词汇：name (名字)', content: '<p style="text-align: left; margin-bottom: 15px;"><b style="color: var(--primary-color);">name</b>: 名字。<br><br>• 外国人：<b style="color: var(--secondary-color);">名字在前，姓氏在后</b>。<br>例如 Tom Jones，Tom 是名字，Jones 是姓。<br>• 中国人：<b style="color: #10b981;">姓氏在前，名字在后</b>。</p>' },
        { type: 'mcq', module: '词汇辨析', question: 'What is your ___?', hint: '你的名字是什么？', options: ['name', 'nationality'], answer: 'name' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我的名字是罗伯特。', words: ['my', 'name', 'is', 'Robert'], answer: 'my name is Robert' },
        { type: 'mcq', module: '常识问答', question: '外国人的姓名顺序通常是：', hint: '名字在前', options: ['名字在前，姓氏在后', '姓氏在前，名字在后'], answer: '名字在前，姓氏在后' },
        
        // 2. nationality 与国家
        { type: 'lesson', title: '重点词汇：nationality (国籍)', content: '<p style="text-align: left; margin-bottom: 15px;"><b style="color: var(--primary-color);">nationality</b>: 国籍。<br><br>国家与国人的对应：<br>• <b>西班牙</b> Spain ➡️ <b>西班牙人</b> Spanish<br>• <b>印度</b> India ➡️ <b>印度人</b> Indian<br>• <b>意大利</b> Italy ➡️ <b>意大利人</b> Italian</p>' },
        { type: 'mcq', module: '词汇辨析', question: 'What is your ___?', hint: '你的国籍是什么？', options: ['nationality', 'name'], answer: 'nationality' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '他是印度人。', words: ['he', 'is', 'Indian'], answer: 'he is Indian' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '你是意大利人吗？', words: ['are', 'you', 'Italian', '?'], answer: 'are you Italian ?' },

        // 3. 职业词汇
        { type: 'lesson', title: '重点词汇：operator 与 engineer', content: '<p style="text-align: left; margin-bottom: 15px;"><b style="color: var(--primary-color);">operator</b>: 操作员。例如 keyboard operator (电脑录入员)。<br><b style="color: var(--secondary-color);">engineer</b>: 工程师。来源于 engine (发动机)。</p>' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我是一名工程师。', words: ['I', 'am', 'an', 'engineer'], answer: 'I am an engineer' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '她是一名工程师。', words: ['she', 'is', 'an', 'engineer'], answer: 'she is an engineer' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '他是一名电脑录入员。', words: ['he', 'is', 'a', 'keyboard', 'operator'], answer: 'he is a keyboard operator' },

        // 4. 一般疑问句 be 动词搭配
        { type: 'lesson', title: '语法重点：一般疑问句 (be 动词搭配)', content: '<p style="text-align: left; margin-bottom: 15px;">不同的主语需要搭配不同的 be 动词：<br><br>• 主语是 <b style="color: var(--primary-color);">you</b>：用 <b>are</b> (Are you...?)<br>• 主语是 <b style="color: var(--secondary-color);">he / she / it</b>：用 <b>is</b> (Is he...?)<br>• 主语是 <b style="color: #10b981;">I</b>：用 <b>am</b> (I am...)</p>' },
        { type: 'mcq', module: '词汇辨析', question: '___ you American?', hint: '你是美国人吗？', options: ['Are', 'Is'], answer: 'Are' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '他是法国人吗？', words: ['is', 'he', 'French'], answer: 'is he French' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '是的，他是。', words: ['yes', ',', 'he', 'is'], answer: 'yes , he is' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '你是韩国人吗？', words: ['are', 'you', 'Korean', '?'], answer: 'are you Korean ?' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '不，我不是。', words: ['no', ',', "I'm", 'not'], answer: "no , I'm not" },
        { type: 'mcq', module: '词汇辨析', question: '- Is he Indian?<br>- No, he ___.', hint: '他是一个印度人吗？不，他不是。', options: ["isn't", "aren't"], answer: "isn't" },

        // 5. 询问名字
        { type: 'lesson', title: '日常交际：询问名字', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">What's your name?</b> (你的名字是什么？)<br><br>回答：<br>• My name is ...<br>• I am ...</p>" },
        { type: 'mcq', module: '情景小侦探', question: '如果对方的回答是 "My name is Tom."，那么对应的问题应该是：', hint: '我的名字是Tom。', options: ["What's your job?", "What's your name?"], answer: "What's your name?" },
        { type: 'mcq', module: '情景小侦探', question: '- ___?<br>- I am Sophie.', hint: '你的名字是什么？', options: ["What's your name", "What's your job"], answer: "What's your name" },
        { type: 'mcq', module: '情景小侦探', question: "- What's your name?<br>- ___ Robert.", hint: '我是罗伯特。', options: ['I am', 'This is'], answer: 'I am' },

        // 6. 询问国籍
        { type: 'lesson', title: '日常交际：询问国籍', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">What nationality are you?</b> (你是什么国籍？)<br><br>其他问法：<br>• Where are you from?<br>• Where do you come from?<br><br>回答：<br>• I am + 国籍 (I'm Korean)<br>• I am from + 国家 (I'm from China)<br>• I come from + 国家 (I come from China)</p>" },
        { type: 'mcq', module: '情景小侦探', question: '如果对方的回答是 "I am Japanese."，那么对应的问题应该是：', hint: '我是日本人。', options: ["What nationality are you?", "Where are you from?"], answer: "What nationality are you?" },
        { type: 'mcq', module: '情景小侦探', question: '如果对方的回答是 "I am Chinese."，那么对应的问题应该是：', hint: '我是中国人。', options: ["What nationality are you?", "What's your name?"], answer: "What nationality are you?" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我来自中国。', words: ['I', 'am', 'from', 'China'], answer: 'I am from China' },

        // 7. 询问工作
        { type: 'lesson', title: '日常交际：询问工作', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">What's your job?</b> (你的工作是什么？)<br><br>回答：<br>• I am a / an + 职业 (I'm a teacher)</p>" },
        { type: 'mcq', module: '情景小侦探', question: '如果对方的回答是 "I am a worker."，那么对应的问题应该是：', hint: '我是一个工人。', options: ["What's your job?", "What's your name?"], answer: "What's your job?" },
        { type: 'mcq', module: '情景小侦探', question: '如果对方的回答是 "I am a teacher."，那么对应的问题应该是：', hint: '我是一名老师。', options: ["What's your job?", "What nationality are you?"], answer: "What's your job?" },
        { type: 'mcq', module: '情景交际', question: '- ___?<br>- I am an engineer.', hint: '你的工作是什么？', options: ["What's your job", "What's your name"], answer: "What's your job" }
    ],
    "9": [
        // 1. well vs fine
        { type: 'lesson', title: '重点词汇：well 与 fine 的区别', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">well</b>: 侧重于人的<b>身体健康状况</b>。<br>（I'm very well. 身体很好 / I'm not well. 身体不舒服）<br><br><b style=\"color: var(--secondary-color);\">fine</b>: 用来形容<b>天气好</b>，或者人的<b>整体精神状态好</b>。<br>（The weather is fine. / Mary is fine.）</p>" },
        { type: 'mcq', module: '词汇辨析', question: 'The weather is ___, we can go out.', hint: '天气很好，我们可以出去了。', options: ['fine', 'well'], answer: 'fine' },
        { type: 'mcq', module: '词汇辨析', question: 'My mother is not ___ today she has a fever.', hint: '她发烧了，身体不舒服。', options: ['well', 'fine'], answer: 'well' },
        { type: 'mcq', module: '词汇辨析', question: "Today is a ___ day, it's sunny.", hint: '今天天气很好，出大太阳了。', options: ['fine', 'well'], answer: 'fine' },

        // 2. 看的三种表达
        { type: 'lesson', title: '重点词汇：see / watch / look', content: "<p style=\"text-align: left; margin-bottom: 15px;\">这三个词都和“看”有关，但用法不同：<br><br>1. <b style=\"color: var(--primary-color);\">see</b>: 强调“看见”的结果。也可以表示“理解，明白” (I see)。<br>2. <b style=\"color: var(--secondary-color);\">watch</b>: 观赏、观看。常用于看比赛、看电视/电影。<br>3. <b style=\"color: #10b981;\">look</b>: 强调“看”的动作。（Look, that is your bag.）</p>" },
        { type: 'mcq', module: '词汇辨析', question: 'I can ___ some children.', hint: '我能看见一些孩子。', options: ['see', 'watch', 'look'], answer: 'see' },
        { type: 'mcq', module: '词汇辨析', question: '___, this is my bag.', hint: '看！这是我的包。', options: ['Look', 'See', 'Watch'], answer: 'Look' },
        { type: 'mcq', module: '词汇辨析', question: 'I want to ___ television.', hint: '我想看电视。', options: ['watch', 'see', 'look'], answer: 'watch' },

        // 3. see 相关的搭配
        { type: 'lesson', title: '日常交际：see 的常用搭配', content: "<p style=\"text-align: left; margin-bottom: 15px;\">• <b style=\"color: var(--primary-color);\">See you.</b> (再见)<br>• <b style=\"color: var(--secondary-color);\">See you later.</b> (一会儿见)<br>• <b style=\"color: #10b981;\">See you around.</b> (后会有期)<br>• <b style=\"color: #f59e0b;\">Nice to see you.</b> (认识的朋友之间，见到你很高兴。初次见面通常用 Nice to meet you)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '见到你很高兴。（老朋友之间）', words: ['Nice', 'to', 'see', 'you'], answer: 'Nice to see you' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '一会儿见。', words: ['see', 'you', 'later'], answer: 'see you later' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '明天见。', words: ['see', 'you', 'tomorrow'], answer: 'see you tomorrow' },

        // 4. how 引导的特殊疑问句
        { type: 'lesson', title: '语法重点：How 引导的问候', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">How are you?</b> (你过得怎么样？)<br>类似的表达还有：How are you doing? / How is everything? / How's it going?<br><br>回答：<br>I'm fine. / Very well. / Not bad (还不错) / Great (非常好) / Couldn't be better (不能再好了) / So far so good (到目前为止都还行)</p>" },
        { type: 'mcq', module: '情景交际', question: '___ is Jenny?<br>- She is very well.', hint: '珍妮过得怎么样？', options: ['How', 'What', 'Where'], answer: 'How' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '托尼过得好吗？', words: ['how', 'is', 'Tony', '?'], answer: 'how is Tony ?' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '海伦过得怎么样呢？', words: ['how', 'is', 'Helen', '?'], answer: 'how is Helen ?' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '这个书包怎么样啊？', words: ['how', 'is', 'this', 'bag', '?'], answer: 'how is this bag ?' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '天气怎么样？', words: ['how', 'is', 'the', 'weather', '?'], answer: 'how is the weather ?' },

        // 5. 形容词作表语
        { type: 'lesson', title: '语法重点：形容词作表语', content: "<p style=\"text-align: left; margin-bottom: 15px;\">在主系表结构中，除了名词（如 a student），<b style=\"color: var(--primary-color);\">形容词</b>也可以作表语，用来形容主语的性质或状态。<br><br>例句：<br>• He is <b style=\"color: var(--secondary-color);\">fine</b>. (他很好)<br>• She is <b style=\"color: var(--secondary-color);\">pretty</b>. (她很漂亮)<br>• My father is <b style=\"color: var(--secondary-color);\">tall</b>. (我爸爸个子高)<br>• That cat is <b style=\"color: var(--secondary-color);\">lovely</b>. (那只猫很可爱)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '她很漂亮', words: ['she', 'is', 'pretty'], answer: 'she is pretty' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '那只猫很可爱。', words: ['that', 'cat', 'is', 'lovely'], answer: 'that cat is lovely' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我的老师很高。', words: ['my', 'teacher', 'is', 'tall'], answer: 'my teacher is tall' },

        // 6. 道别的表达
        { type: 'lesson', title: '日常交际：道别的多种说法', content: "<p style=\"text-align: left; margin-bottom: 15px;\">除了 Goodbye，道别时还可以说：<br><br>• <b style=\"color: var(--primary-color);\">See you.</b> (再见)<br>• <b style=\"color: var(--secondary-color);\">See you tomorrow.</b> (明天见)<br>• <b style=\"color: #10b981;\">See you later.</b> (晚点见)<br>• <b style=\"color: #f59e0b;\">See you next time.</b> (下次见)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '明天见。', words: ['see', 'you', 'tomorrow'], answer: 'see you tomorrow' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '下次见。', words: ['see', 'you', 'next', 'time'], answer: 'see you next time' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '再见。', words: ['see', 'you'], answer: 'see you' }
    ],
    "11": [
        // 1. 服装词汇
        { type: 'lesson', title: '重点词汇：服装', content: "<p style=\"text-align: left; margin-bottom: 15px;\">我们每天穿的衣服用英语怎么说呢？<br><br>• <b style=\"color: var(--primary-color);\">shirt</b>: 男士衬衫 (Here is my shirt.)<br>• <b style=\"color: var(--secondary-color);\">blouse</b>: 女士衬衫（带花边或收腰）<br>• <b style=\"color: #10b981;\">T-shirt</b>: T恤衫<br>• <b style=\"color: #f59e0b;\">jeans</b>: 牛仔裤（因为裤子有两条腿，所以一定要加 s 复数哦！）<br>• <b style=\"color: #8b5cf6;\">jacket</b>: 夹克衫</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '这是我的衬衫。', words: ['this', 'is', 'my', 'shirt'], answer: 'this is my shirt' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '这些是我的牛仔裤。', words: ['these', 'are', 'my', 'jeans'], answer: 'these are my jeans' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '那是她的衬衫。', words: ['that', 'is', 'her', 'blouse'], answer: 'that is her blouse' },

        // 2. 颜色与心情
        { type: 'lesson', title: '重点词汇：颜色与心情', content: "<p style=\"text-align: left; margin-bottom: 15px;\">除了描述颜色，颜色还可以代表心情：<br><br><b style=\"color: var(--primary-color);\">blue</b> 蓝色，也可以表示<b style=\"color: var(--secondary-color);\">“忧郁的”</b>。<br>例句：I feel blue when it rains. (下雨时我感到很忧郁。)<br><br><b>拓展颜色：</b><br>• red(红), yellow(黄), green(绿), gray(灰)<br>• <b style=\"color: #10b981;\">light</b> (浅) / <b style=\"color: #f59e0b;\">dark</b> (深)<br>• light blue (浅蓝色) / dark blue (深蓝色)</p>" },
        { type: 'mcq', module: '词汇辨析', question: 'I feel ___ when it rains.', hint: '下雨的时候我觉得很忧郁。', options: ['blue', 'red', 'light'], answer: 'blue' },
        { type: 'mcq', module: '词汇辨析', question: 'My shirt is ___.', hint: '我的衬衫是浅蓝色的。', options: ['light blue', 'dark blue'], answer: 'light blue' },
        { type: 'mcq', module: '词汇辨析', question: 'This is a ___ bag.', hint: '这是一个深色的包。', options: ['dark', 'light'], answer: 'dark' },

        // 3. perhaps vs maybe
        { type: 'lesson', title: '重点词汇：perhaps (也许)', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">perhaps</b>: 大概，或许。一般放在句首，表示猜测或建议。<br>（Perhaps it is my shirt. 也许是我的衬衫。）<br><br><b style=\"color: var(--secondary-color);\">maybe</b> 也有相同的意思，区别在于：<br>maybe 多用于<b>美式口语</b>，而 perhaps 多用于<b>英式口语</b>。</p>" },
        { type: 'mcq', module: '词汇辨析', question: '___ it is my shirt.', hint: '也许是我的衬衫。', options: ['Perhaps', 'Who', 'What'], answer: 'Perhaps' },
        { type: 'mcq', module: '常识问答', question: 'perhaps 常常用于：', hint: '英式口语', options: ['英式口语', '美式口语'], answer: '英式口语' },
        { type: 'mcq', module: '常识问答', question: 'maybe 常常用于：', hint: '美式口语', options: ['美式口语', '英式口语'], answer: '美式口语' },

        // 4. catch
        { type: 'lesson', title: '重点词汇：catch', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">catch</b> 可以表示两种动作：<br><br>1. <b>抓住</b>：catch the thief (抓住小偷)<br>2. <b>赶上 (交通工具)</b>：catch the early bus (赶早班车) / catch the flight (赶航班)</p>" },
        { type: 'mcq', module: '词汇辨析', question: '___ the thief!', hint: '抓住那个小偷！', options: ['Catch', 'Watch', 'Look'], answer: 'Catch' },
        { type: 'mcq', module: '词汇辨析', question: 'I need to ___ the early bus.', hint: '我需要赶上早班车。', options: ['catch', 'see'], answer: 'catch' },
        { type: 'mcq', module: '词汇辨析', question: '___!', hint: '抓住它！', options: ['Catch', 'Watch'], answer: 'Catch' },

        // 5. Whose 引导的特殊疑问句
        { type: 'lesson', title: '语法重点：Whose 引导的疑问句', content: "<p style=\"text-align: left; margin-bottom: 15px;\">怎么询问“这是谁的东西？”<br><br><b style=\"color: var(--primary-color);\">Whose + 名词 + is this/that?</b><br>• Whose bag is this? (这是谁的书包？)<br>• Whose pen is that? (那是谁的钢笔？)<br><br>⚠️ <b>注意区分</b>：<br>• <b style=\"color: var(--secondary-color);\">whose</b> = 谁的 (后面跟名词)<br>• <b style=\"color: var(--error-color);\">who's</b> = who is 的缩写，意思是“谁是” (Who's he? 他是谁？)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '这是谁的书包？', words: ['whose', 'bag', 'is', 'this', '?'], answer: 'whose bag is this ?' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '那是谁的钢笔？', words: ['whose', 'pen', 'is', 'that', '?'], answer: 'whose pen is that ?' },
        { type: 'mcq', module: '词汇辨析', question: '___ your brother?', hint: '谁是你的哥哥？', options: ["Who's", "Whose"], answer: "Who's" },
        { type: 'mcq', module: '词汇辨析', question: '___ bag is that?', hint: '那是谁的包？', options: ["Whose", "Who's"], answer: "Whose" },
        { type: 'mcq', module: '情景小侦探', question: '___ computer is this?', hint: '这是谁的电脑？', options: ["Whose", "Who's"], answer: "Whose" },

        // 6. 名词所有格
        { type: 'lesson', title: '语法重点：名词所有格 (\\\'s)', content: "<p style=\"text-align: left; margin-bottom: 15px;\">表示“某人的”东西，我们要用到<b style=\"color: var(--primary-color);\">名词所有格</b>：<br><br>1. <b>单数名词加 's</b> (有生命的人/物)：<br>Jack's toy (杰克的玩具) / my sister's car (我姐姐的车)<br><br>2. <b>以 s 结尾的复数名词只加 '</b> (避免重复)：<br>the students' books (学生们的书) / Teachers' Day (教师节)<br><br>3. <b>无生命的事物用 of</b>：<br>windows of the house (房子的窗户) / writer of the novel (小说的作者) <b>⚠️ 注意中文语序相反</b></p>" },
        { type: 'mcq', module: '情景小侦探', question: "It's ___ cap.", hint: '这是我爸爸的棒球帽。', options: ["my father's", "my father"], answer: "my father's" },
        { type: 'mcq', module: '情景小侦探', question: 'Those are ___ pencils.', hint: '那些是他的铅笔。', options: ['his', 'he'], answer: 'his' },
        { type: 'mcq', module: '情景小侦探', question: '- Whose car is it?<br>- It\'s ___.', hint: '这是我哥哥的车。', options: ["my brother's", "my brother"], answer: "my brother's" },

        // 7. 祈使句
        { type: 'lesson', title: '语法重点：祈使句', content: "<p style=\"text-align: left; margin-bottom: 15px;\">当你要表达要求、请求、命令或劝告时，可以使用<b style=\"color: var(--primary-color);\">祈使句</b>。<br><br>特点：<b>省略主语，直接用动词原形开头！</b><br><br>例句：<br>• Catch! (抓住它！)<br>• Open the book. (打开书。)<br>• Close your eyes. (闭上你的眼睛。)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '请打开书。', words: ['open', 'the', 'book'], answer: 'open the book' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '闭上你的眼睛。', words: ['close', 'your', 'eyes'], answer: 'close your eyes' },
        { type: 'mcq', module: '语法侦探', question: '下面哪一句是祈使句？', hint: '站起来', options: ["Stand up", "He stands up"], answer: "Stand up" }
    ],
    "39": [
        // 1. in front of
        { type: 'lesson', title: '方位表达：in front of', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">front</b>: 前面（名词）。<br>• Stand at the front of the line. (站到队伍前面去。)<br><br><b style=\"color: var(--secondary-color);\">in front of</b>: 在……的前面。<br>• There is a bus stop in front of the house. (房子前面有一个公交车站。)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '房子前面有一个公交车站。', words: ['there', 'is', 'a', 'bus', 'stop', 'in', 'front', 'of', 'the', 'house'], answer: 'there is a bus stop in front of the house' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '站到队伍前面去。', words: ['stand', 'at', 'the', 'front', 'of', 'the', 'line'], answer: 'stand at the front of the line' },
        { type: 'mcq', module: '介词侦探', question: 'There is a bus stop ___ the house.', hint: '房子前面有一个公交车站。', options: ['in front of', 'behind'], answer: 'in front of' },

        // 2. careful 与 careless
        { type: 'lesson', title: '词缀魔法：careful 与 careless', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">careful</b>: 小心。(-ful 后缀表示“充满”)<br>• Be careful with the knife. (小心那把刀。)<br><br><b style=\"color: var(--secondary-color);\">careless</b>: 粗心。(-less 后缀表示“缺少”)<br>• He is a careless boy. (他是个粗心的男孩。)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '小心那把刀。', words: ['be', 'careful', 'with', 'the', 'knife'], answer: 'be careful with the knife' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '他是个粗心的男孩。', words: ['he', 'is', 'a', 'careless', 'boy'], answer: 'he is a careless boy' },
        { type: 'mcq', module: '词法大爆炸', question: 'care 的反义词（粗心的）是：', hint: '粗心的', options: ['careless', 'careful'], answer: 'careless' },
        { type: 'lesson', title: '拓展：-ful 后缀', content: "<p style=\"text-align: left; margin-bottom: 15px;\">把 <b style=\"color: var(--primary-color);\">-ful</b> 加在名词后面，可以变成形容词，表示“有……的”：<br><br>• <b style=\"color: var(--secondary-color);\">colorful</b>: 多彩的 (color 颜色)<br>• <b style=\"color: var(--secondary-color);\">useful</b>: 有用的 (use 用处)<br>• <b style=\"color: var(--secondary-color);\">meaningful</b>: 有意义的 (meaning 意义)</p>" },
        { type: 'mcq', module: '词汇魔法', question: 'color 变成形容词（多彩的）是：', hint: '多彩的', options: ['colorful', 'colorless'], answer: 'colorful' },
        { type: 'mcq', module: '词汇魔法', question: 'use 变成形容词（有用的）是：', hint: '有用的', options: ['useful', 'useless'], answer: 'useful' },
        { type: 'mcq', module: '词汇魔法', question: 'meaning 变成形容词（有意义的）是：', hint: '有意义的', options: ['meaningful', 'meaningless'], answer: 'meaningful' },

        // 3. drop 的多重含义
        { type: 'lesson', title: '一词多义：drop', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">drop</b> 有很多种用法：<br><br>1. <b>掉下 / 弄掉</b>：不要把花瓶给弄掉了。<br>2. <b>扔 / 投 (主动)</b>：Don't drop litter everywhere. (不要到处乱扔垃圾。)<br>3. <b>一滴 (名词)</b>：water drop (水滴) / rain drop (雨滴)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '不要到处乱扔垃圾。', words: ["don't", 'drop', 'litter', 'everywhere'], answer: "don't drop litter everywhere" },
        { type: 'mcq', module: '词义辨析', question: 'Don\'t drop litter everywhere. 这句话中 drop 的意思是：', hint: '扔', options: ['扔', '一滴'], answer: '扔' },
        { type: 'mcq', module: '词义辨析', question: 'rain drop 这句话中 drop 的意思是：', hint: '一滴', options: ['一滴', '掉下'], answer: '一滴' },

        // 4. 花类词汇
        { type: 'lesson', title: '重点词汇：flower 与各种花', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">flower</b>: 花。<br>• These flowers are colorful. (这些花五彩斑斓。)<br><br><b>常见花卉：</b><br>• <b style=\"color: var(--secondary-color);\">rose</b>: 玫瑰<br>• <b style=\"color: var(--secondary-color);\">lily</b>: 百合<br>• <b style=\"color: var(--secondary-color);\">sunflower</b>: 向日葵 (sun + flower)<br>• <b style=\"color: var(--secondary-color);\">jasmine</b>: 茉莉</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '这些花五彩斑斓。', words: ['these', 'flowers', 'are', 'colorful'], answer: 'these flowers are colorful' },
        { type: 'mcq', module: '常识连线', question: 'rose 的意思是：', hint: '玫瑰', options: ['玫瑰', '百合'], answer: '玫瑰' },
        { type: 'mcq', module: '常识连线', question: 'sunflower 的意思是：', hint: '向日葵', options: ['向日葵', '玫瑰'], answer: '向日葵' },

        // 5. do with 
        { type: 'lesson', title: '重点短语：do with', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">do with</b> 是非常实用的短语，有三种意思：<br><br>1. <b>处理</b>：What should I do with the mail? (你打算怎么处理这封信件？)<br>2. <b>忍受</b>：I cannot do with him. (我再也无法忍受他了。)<br>3. <b>需要</b>：I could do with a cup of tea. (我现在需要一杯茶。)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我们该怎么处理这只猫呢？', words: ['what', 'shall', 'we', 'do', 'with', 'this', 'cat', '?'], answer: 'what shall we do with this cat ?' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我现在需要一杯茶。', words: ['I', 'could', 'do', 'with', 'a', 'cup', 'of', 'tea'], answer: 'I could do with a cup of tea' },
        { type: 'mcq', module: '词义辨析', question: 'I cannot do with him. 这句话中 do with 的意思是：', hint: '忍受', options: ['忍受', '处理'], answer: '忍受' },

        // 6. put on
        { type: 'lesson', title: '短语辨析：put 的用法', content: "<p style=\"text-align: left; margin-bottom: 15px;\">1. <b style=\"color: var(--primary-color);\">put ... on ...</b>: 把某物放到……上面。<br>• put the pencil on the desk (把铅笔放到桌子上)<br>• put the box on the floor (把箱子放到地上)<br><br>2. <b style=\"color: var(--secondary-color);\">put on</b>: 穿上（衣服）。<br>• put on your coat / put your coat on (穿上你的大衣)<br>• put it on (把它穿上)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '把铅笔放到桌子上。', words: ['put', 'the', 'pencil', 'on', 'the', 'desk'], answer: 'put the pencil on the desk' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '穿上你的大衣。', words: ['put', 'on', 'your', 'coat'], answer: 'put on your coat' },
        { type: 'mcq', module: '词汇辨析', question: 'It is cold outside. Please ___ your coat.', hint: '外面很冷。请穿上你的大衣。', options: ['put on', 'put'], answer: 'put on' },

        // 7. 祈使句的否定
        { type: 'lesson', title: '语法重点：祈使句的否定形式', content: "<p style=\"text-align: left; margin-bottom: 15px;\">之前学过祈使句（没有主语，动词原形开头）。如果想表达<b>禁止、不要做某事</b>，只需在最前面加上 <b style=\"color: var(--primary-color);\">Don't</b>！<br><br>• touch my bag ➡️ <b style=\"color: var(--error-color);\">Don't</b> touch my bag. (不要碰我的包。)<br>• be careless ➡️ <b style=\"color: var(--error-color);\">Don't</b> be careless. (不要粗心。)<br><br>⚠️ <i>提示：Don't 里的 do 是助动词，用来帮助构成否定。</i></p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '不要打开窗户。', words: ["don't", 'open', 'the', 'window'], answer: "don't open the window" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '不要闭上眼睛。', words: ["don't", 'close', 'your', 'eyes'], answer: "don't close your eyes" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '不要把它放在桌子上。', words: ["don't", 'put', 'it', 'on', 'the', 'table'], answer: "don't put it on the table" },

        // 8. that 指代与 there we are
        { type: 'lesson', title: '日常口语：that 与 There we are', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">that 指代整件事：</b><br>• I'm going to put it on this table. - <b>Don't do that.</b><br>（此处的 that 指代“把它放到桌子上”这一整件事。）<br><br><b style=\"color: var(--secondary-color);\">There we are：</b><br>无法逐字翻译，有两层口语含义：<br>1. <b>我们做到啦！</b> (There we are. We finished the work.)<br>2. <b>我们到地儿啦！</b> (There we are. It's just eight o'clock.)</p>" },
        { type: 'mcq', module: '情景小侦探', question: "- Let's start the meeting.<br>- ___", hint: '我们到啦（我们可以开始开会啦）。', options: ["There we are", "Don't do that"], answer: "There we are" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '不要那样做。', words: ["don't", 'do', 'that'], answer: "don't do that" },
        { type: 'mcq', module: '情景小侦探', question: "- We finished the work.<br>- ___!", hint: '我们做到啦！', options: ['There we are', 'Don\'t do that'], answer: 'There we are' }
    ],
    "35": [
        // 1. photograph vs photographer
        { type: 'lesson', title: '重点词汇：照片与摄影师', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">photograph</b>: 照片 (重音在第一个音节)。同义词：photo。<br>• Her photograph is very beautiful.<br><br><b style=\"color: var(--secondary-color);\">photographer</b>: 摄影师 (重音在第二个音节)。<br>• 加上 -er 后缀表示做这个动作的人。</p>" },
        { type: 'mcq', module: '词汇辨析', question: 'Her ___ is very beautiful.', hint: '她的照片很漂亮。', options: ['photograph', 'photographer'], answer: 'photograph' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '她的照片很漂亮。', words: ['her', 'photograph', 'is', 'very', 'beautiful'], answer: 'her photograph is very beautiful' },
        { type: 'mcq', module: '词汇辨析', question: 'He is a good ___.', hint: '他是一个好摄影师。', options: ['photographer', 'photograph'], answer: 'photographer' },

        // 2. on 表示靠近
        { type: 'lesson', title: '方位表达：on 的特殊用法', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">on</b> 除了表示“在上面”，还可以表示<b style=\"color: var(--secondary-color);\">靠近某地/在……旁边</b>：<br><br>• The village is on the river. (村庄在河边。⚠️ 不是建在水面上哦！)<br>• on the road (马路旁边)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '村庄在河边。', words: ['the', 'village', 'is', 'on', 'the', 'river'], answer: 'the village is on the river' },
        { type: 'mcq', module: '介词侦探', question: 'The village is ___ the river.', hint: '村庄在河边。', options: ['on', 'in'], answer: 'on' },
        { type: 'mcq', module: '介词侦探', question: 'He is walking ___ the road.', hint: '他正在马路旁边走。', options: ['on', 'over'], answer: 'on' },

        // 3. between 空间与时间
        { type: 'lesson', title: '方位表达：between', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">between</b>: 在……之间（通常与 <b style=\"color: var(--secondary-color);\">and</b> 连用）。<br><br><b>1. 空间：</b><br>• Tom is standing between Mary and me.<br><b>2. 时间：</b><br>• I'll call you between lunch and three o'clock.<br>• Our class is between two and three.</p>" },
        { type: 'mcq', module: '词汇辨析', question: 'The computer is ___ the chair and bed.', hint: '电脑在椅子和床中间。', options: ['between', 'on', 'near'], answer: 'between' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '汤姆站在玛丽和我之间。', words: ['Tom', 'is', 'standing', 'between', 'Mary', 'and', 'me'], answer: 'Tom is standing between Mary and me' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我们的课在两点到三点之间。', words: ['our', 'class', 'is', 'between', 'two', 'and', 'three'], answer: 'our class is between two and three' },

        // 4. hill vs mountain
        { type: 'lesson', title: '词汇辨析：各种山', content: "<p style=\"text-align: left; margin-bottom: 15px;\">• <b style=\"color: var(--primary-color);\">hill</b>: 小山丘 (There was a river under the hill.)<br>• <b style=\"color: var(--secondary-color);\">mountain</b>: 大山 (There is a mountain near the village.)<br>• <b style=\"color: #10b981;\">Mount</b> (简写 Mt.): 用于命名大山 (Mount Tai 泰山)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '小山丘下曾有一条河。', words: ['there', 'was', 'a', 'river', 'under', 'the', 'hill'], answer: 'there was a river under the hill' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '村庄附近有一座大山。', words: ['there', 'is', 'a', 'mountain', 'near', 'the', 'village'], answer: 'there is a mountain near the village' },
        { type: 'mcq', module: '常识问答', question: '泰山的英文缩写正确的是：', hint: '泰山', options: ['Mt. Tai', 'Hill Tai'], answer: 'Mt. Tai' },

        // 5. bank 的一词多义
        { type: 'lesson', title: '一词多义：bank', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">bank</b> 有两种完全不同的含义：<br><br>1. <b>河岸</b>：There are some people on the bank.<br>2. <b>银行</b>：My mother works in a bank.</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '河岸上有一些人。', words: ['there', 'are', 'some', 'people', 'on', 'the', 'bank'], answer: 'there are some people on the bank' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我的妈妈在银行工作。', words: ['my', 'mother', 'works', 'in', 'a', 'bank'], answer: 'my mother works in a bank' },
        { type: 'mcq', module: '词汇侦探', question: 'My mother works in a ___.', hint: '我的妈妈在银行工作。', options: ['bank', 'building'], answer: 'bank' },

        // 6. building 与城市设施
        { type: 'lesson', title: '重点词汇：城市建筑', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">building</b>: 建筑物，大楼。<br><br><b>常见城市建筑：</b><br>• bank (银行) / library (图书馆) / hospital (医院)<br>• bookstore (书店) / supermarket (超市)<br>• cinema / movie theater (电影院)</p>" },
        { type: 'mcq', module: '常识连线', question: 'library 的意思是：', hint: '图书馆', options: ['图书馆', '书店'], answer: '图书馆' },
        { type: 'mcq', module: '常识连线', question: 'hospital 的意思是：', hint: '医院', options: ['医院', '超市'], answer: '医院' },
        { type: 'mcq', module: '常识连线', question: 'supermarket 的意思是：', hint: '超市', options: ['超市', '银行'], answer: '超市' },

        // 7. another 与照片的区别
        { type: 'lesson', title: '辨析：照片的归属', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">another</b>: 另一个 / 又一个 (Here is another photograph...)<br><br><b>⚠️ 注意区分以下两个表达：</b><br>• <b style=\"color: var(--secondary-color);\">a photograph of my father</b>：照片里拍的是我父亲。<br>• <b style=\"color: var(--error-color);\">my father's photograph</b>：我父亲拥有的照片（里面拍的不一定是他自己）。</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '这儿有另一张照片。', words: ['here', 'is', 'another', 'photograph'], answer: 'here is another photograph' },
        { type: 'mcq', module: '词义辨析', question: '“照片里拍的是我父亲” 应该翻译为：', hint: '照片里拍的是我父亲。', options: ['a photograph of my father', "my father's photograph"], answer: 'a photograph of my father' },
        { type: 'mcq', module: '词汇侦探', question: 'Here is ___ photograph.', hint: '这儿有另一张照片。', options: ['another', 'other'], answer: 'another' },

        // 8. 人称代词的顺序
        { type: 'lesson', title: '语法重点：人称代词的并列顺序', content: "<p style=\"text-align: left; margin-bottom: 15px;\">在英语中，如果“我”和其他人一起作主语，<b style=\"color: var(--error-color);\">“我 (I)” 必须放在最后！</b><br>（这和中文刚好相反）<br><br>• <b style=\"color: var(--primary-color);\">Mary and I</b> are classmates. (我和玛丽是同学。)<br>• <b style=\"color: var(--secondary-color);\">You and I</b> are friends. (我和你是朋友。)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我和玛丽是同学。', words: ['Mary', 'and', 'I', 'are', 'classmates'], answer: 'Mary and I are classmates' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我和你是朋友。', words: ['you', 'and', 'I', 'are', 'friends'], answer: 'you and I are friends' },
        { type: 'mcq', module: '语法侦探', question: '___ are friends.', hint: '我和你是朋友。', options: ['You and I', 'I and you'], answer: 'You and I' },

        // 9. along 的用法
        { type: 'lesson', title: '重点词汇：along', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">along</b> 作为介词，意思是<b style=\"color: var(--secondary-color);\">“沿着，顺着”</b>。<br>• My wife and I are walking along the banks of the river.<br>• We're running along the beach.<br><br>作为副词，表示<b>“一起”</b>：<br>• I'm glad you come along. (很高兴你跟我一起来。)</p>" },
        { type: 'mcq', module: '词汇辨析', question: 'She walks ___ the beach.', hint: '她沿着海滩散步。', options: ['along', 'in', 'on'], answer: 'along' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我和我妻子正沿着河岸散步。', words: ['my', 'wife', 'and', 'I', 'are', 'walking', 'along', 'the', 'banks', 'of', 'the', 'river'], answer: 'my wife and I are walking along the banks of the river' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '很高兴你跟我一起来。', words: ["I'm", 'glad', 'you', 'come', 'along'], answer: "I'm glad you come along" },

        // 10. where 引导的疑问句
        { type: 'lesson', title: '语法重点：特殊疑问词大盘点', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b>Where (在哪里)</b>：Where is the river?<br><br><b>复习一下其他疑问词：</b><br>• <b>what</b> (什么) / <b>which</b> (哪个)<br>• <b>who</b> (谁) / <b>whose</b> (谁的)<br>• <b>how</b> (怎么样)</p>" },
        { type: 'mcq', module: '情景小侦探', question: '- ___ is Jenny?<br>- She is in the classroom.', hint: '珍妮在哪里？', options: ['Where', 'How', 'Who'], answer: 'Where' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '学校在哪里？', words: ['where', 'is', 'the', 'school', '?'], answer: 'where is the school ?' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '这是谁的书？', words: ['whose', 'book', 'is', 'this', '?'], answer: 'whose book is this ?' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '你的弟弟是谁？', words: ['who', 'is', 'your', 'brother', '?'], answer: 'who is your brother ?' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '你的爸爸怎么样了？', words: ['how', 'is', 'your', 'father', '?'], answer: 'how is your father ?' }
    ],
    "37": [
        // 1. work 与 hard 的多重用法
        { type: 'lesson', title: '一词多义：work 与 hard', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">work</b>:<br>• 动词：I must work hard. (工作/干活)<br>• 名词：Many people are out of work. (失业)<br>• 拓展：homework (家庭作业)<br><br><b style=\"color: var(--secondary-color);\">hard</b>:<br>• 副词 (努力地)：She studies English hard.<br>• 形容词 (坚硬的)：The stone is very hard. (反义词：soft 柔软的)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '她努力地学习英语。', words: ['she', 'studies', 'English', 'hard'], answer: 'she studies English hard' },
        { type: 'mcq', module: '词汇侦探', question: 'The stone is very ___.', hint: '石头非常坚硬。', options: ['hard', 'soft'], answer: 'hard' },
        { type: 'mcq', module: '词义辨析', question: 'Many people are out of ___.', hint: '许多人失业了。', options: ['work', 'job'], answer: 'work' },

        // 2. make 的搭配
        { type: 'lesson', title: '重点动词：make (创造/制作)', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">make</b> 含有“把原本没有的东西创造出来”的意思：<br><br>• make a model plane (制作飞机模型)<br>• make the bed (整理床铺)<br>• make dinner (做晚饭)<br>• make friends (交朋友)<br>• make a snowman (堆雪人)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '制作飞机模型', words: ['make', 'a', 'model', 'plane'], answer: 'make a model plane' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '整理床铺', words: ['make', 'the', 'bed'], answer: 'make the bed' },
        { type: 'mcq', module: '词汇搭档', question: 'We can ___ a snowman in winter.', hint: '我们在冬天可以堆雪人。', options: ['make', 'do'], answer: 'make' },

        // 3. 常见工具类词汇
        { type: 'lesson', title: '生活词汇：常见工具', content: "<p style=\"text-align: left; margin-bottom: 15px;\">我们做手工或干活时，经常用到的工具有：<br><br>• <b style=\"color: var(--primary-color);\">hammer</b>: 锤子 (I need a hammer.)<br>• <b style=\"color: var(--secondary-color);\">ax</b>: 斧子<br>• <b style=\"color: #10b981;\">nail</b>: 钉子<br>• <b style=\"color: #f59e0b;\">saw</b>: 锯子<br>• <b style=\"color: #ef4444;\">shovel</b>: 铁铲</p>" },
        { type: 'mcq', module: '常识问答', question: 'hammer 的中文意思是：', hint: '锤子', options: ['锤子', '锯子'], answer: '锤子' },
        { type: 'mcq', module: '常识问答', question: 'saw 的中文意思是：', hint: '锯子', options: ['锯子', '斧子'], answer: '锯子' },
        { type: 'mcq', module: '常识问答', question: 'I need a ___.', hint: '我需要一把锤子。', options: ['hammer', 'shovel'], answer: 'hammer' },

        // 4. paint 与 draw
        { type: 'lesson', title: '动词辨析：paint 与 draw', content: "<p style=\"text-align: left; margin-bottom: 15px;\">这两个词都是“画/涂”，但侧重点不同：<br><br>1. <b style=\"color: var(--primary-color);\">paint</b>：侧重于<b>用水彩颜料上色、涂漆</b>。<br>（paint the wall green 把墙涂成绿色 / paint this picture blue）<br><br>2. <b style=\"color: var(--secondary-color);\">draw</b>：侧重于<b>画轮廓、素描写生</b>。<br>（she draws a horse 她画了一匹马）</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '把墙涂成绿色。', words: ['paint', 'the', 'wall', 'green'], answer: 'paint the wall green' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '她画了一匹马。', words: ['she', 'draws', 'a', 'horse'], answer: 'she draws a horse' },
        { type: 'mcq', module: '词汇侦探', question: 'I will ___ this picture blue.', hint: '我将把这幅画涂成蓝色。', options: ['paint', 'draw'], answer: 'paint' },

        // 5. 进行时 vs 将来时
        { type: 'lesson', title: '时态大比拼：正在进行 vs 一般将来', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">现在进行时 (be doing)</b>：表示动作正在发生。<br>• What are you doing? ➡️ I am doing my homework. (我正在写呢！)<br><br><b style=\"color: var(--secondary-color);\">一般将来时 (be going to do)</b>：表示打算去做某事。<br>• What are you going to do? ➡️ I am going to do my homework. (我打算马上就去写！)</p>" },
        { type: 'mcq', module: '语法侦探', question: '- What are you doing?<br>- I ___ a movie.', hint: '我正在看电影。', options: ['am watching', 'am going to watch'], answer: 'am watching' },
        { type: 'mcq', module: '语法侦探', question: '- What is he going to do?<br>- He ___ a bike.', hint: '他打算去骑自行车。', options: ['is going to ride', 'is riding'], answer: 'is going to ride' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我打算马上就去写我的作业！', words: ['I', 'am', 'going', 'to', 'do', 'my', 'homework'], answer: 'I am going to do my homework' },

        // 6. there be 句型的将来时
        { type: 'lesson', title: '重点句型：将会有... (There is going to be)', content: "<p style=\"text-align: left; margin-bottom: 15px;\">怎么用英语表达“明天将有一场会议”？<br><br>超级地道的句型：<b style=\"color: var(--primary-color);\">There is going to be ...</b><br>• There is going to be a meeting tomorrow.<br>• There is going to be a party next Sunday. (下周日会有一场派对。)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '明天将有一场会议。', words: ['there', 'is', 'going', 'to', 'be', 'a', 'meeting', 'tomorrow'], answer: 'there is going to be a meeting tomorrow' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '下周日会有一场派对。', words: ['there', 'is', 'going', 'to', 'be', 'a', 'party', 'next', 'Sunday'], answer: 'there is going to be a party next Sunday' },
        { type: 'mcq', module: '语法侦探', question: 'There ___ a meeting tomorrow.', hint: '明天将有一场会议。', options: ['is going to be', 'is going to have'], answer: 'is going to be' },

        // 7. 宾语补足语
        { type: 'lesson', title: '宾语补足语', content: "<p style=\"text-align: left; margin-bottom: 15px;\">有时光有主谓宾还不够，还需要用<b style=\"color: var(--primary-color);\">宾语补足语</b>来补充说明宾语的状态：<br><br>• I'm going to paint <b>it</b> <b style=\"color: var(--secondary-color);\">pink</b>. (把它涂成粉色)<br>• Reading makes <b>me</b> <b style=\"color: var(--secondary-color);\">happy</b>. (阅读让我开心)<br>• We call <b>him</b> <b style=\"color: var(--secondary-color);\">老李</b>. (我们叫他老李)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '把它涂成粉色。', words: ['paint', 'it', 'pink'], answer: 'paint it pink' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '阅读让我开心。', words: ['reading', 'makes', 'me', 'happy'], answer: 'reading makes me happy' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '他把门涂成了蓝色。', words: ['he', 'paints', 'the', 'door', 'blue'], answer: 'he paints the door blue' },

        // 8. for 的用法
        { type: 'lesson', title: '介词 for：给某人的', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">for</b> 经常用来表示“给某人准备的”：<br><br>• It's for my daughter Susan.<br>• That's for you. / Here is a letter for you.<br>• <b>Is it for me?</b> (这是给我的吗？)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '那是给你的。', words: ["that's", 'for', 'you'], answer: "that's for you" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '这是给我的吗？', words: ['is', 'it', 'for', 'me', '?'], answer: 'is it for me ?' },
        { type: 'mcq', module: '介词侦探', question: 'Here is a letter ___ you.', hint: '这是一封给你的信。', options: ['for', 'to'], answer: 'for' }
    ],
    "33": [
        // 1. 天气词汇 (名词变形容词)
        { type: 'lesson', title: '词法大爆炸：天气名词变形容词', content: "<p style=\"text-align: left; margin-bottom: 15px;\">表示天气的名词，在后面加上 <b style=\"color: var(--primary-color);\">y</b>，就能变成形容词啦：<br><br>• cloud(云) ➡️ <b style=\"color: var(--secondary-color);\">cloudy</b> (多云的)<br>• wind(风) ➡️ <b style=\"color: var(--secondary-color);\">windy</b> (刮风的)<br>• rain(雨) ➡️ <b style=\"color: var(--secondary-color);\">rainy</b> (下雨的)<br>• fog(雾) ➡️ <b style=\"color: var(--secondary-color);\">foggy</b> (多雾的)<br>• sun(太阳) ➡️ <b style=\"color: var(--secondary-color);\">sunny</b> (晴朗的) <i>(⚠️双写 n)</i></p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '今天是一个多云的天气。', words: ['it', 'is', 'a', 'cloudy', 'day'], answer: 'it is a cloudy day' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '今天是一个下雨天。', words: ['it', 'is', 'a', 'rainy', 'day'], answer: 'it is a rainy day' },
        { type: 'mcq', module: '单词魔法', question: 'wind 变成形容词（刮风的）是：', hint: '刮风的', options: ['windy', 'winddy'], answer: 'windy' },

        // 2. 独一无二的 The
        { type: 'lesson', title: '冠词用法：独一无二的事物', content: "<p style=\"text-align: left; margin-bottom: 15px;\">世界上独一无二的事物，前面一定要加上定冠词 <b style=\"color: var(--primary-color);\">the</b>：<br><br>• <b style=\"color: var(--secondary-color);\">the</b> sun is shining (太阳正在照耀)<br>• <b style=\"color: var(--secondary-color);\">the</b> moon is round tonight (今晚月亮很圆)</p>" },
        { type: 'mcq', module: '语法侦探', question: '___ sun is shining.', hint: '太阳正在照耀。', options: ['The', 'A'], answer: 'The' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '今晚月亮很圆。', words: ['the', 'moon', 'is', 'round', 'tonight'], answer: 'the moon is round tonight' },
        { type: 'mcq', module: '语法侦探', question: '___ moon is round tonight.', hint: '今晚月亮很圆。', options: ['The', 'A'], answer: 'The' },

        // 3. on vs over
        { type: 'lesson', title: '介词辨析：on 与 over', content: "<p style=\"text-align: left; margin-bottom: 15px;\">这两个词都表示“在...上面”，区别在于<b style=\"color: var(--primary-color);\">有没有接触</b>：<br><br>1. <b style=\"color: var(--secondary-color);\">on</b> (在表面上，<b>有接触</b>)：<br>• A cat is sitting on a box. (猫坐在盒子上)<br><br>2. <b style=\"color: var(--secondary-color);\">over</b> (跨越在上方，<b>无接触</b>)：<br>• The aeroplane is flying over the river. (飞机飞过河面)</p>" },
        { type: 'mcq', module: '词汇辨析', question: 'There is a picture ___ the wall.', hint: '墙上有一幅画。', options: ['on', 'over'], answer: 'on' },
        { type: 'mcq', module: '词汇辨析', question: 'The bridge is ___ the river.', hint: '河面上有一座桥。', options: ['over', 'on'], answer: 'over' },
        { type: 'mcq', module: '词汇辨析', question: 'There is a book ___ the desk.', hint: '桌子上有一本书。', options: ['on', 'over'], answer: 'on' },

        // 4. over 的引申义
        { type: 'lesson', title: '一词多义：over 的其他含义', content: "<p style=\"text-align: left; margin-bottom: 15px;\">除了表示“在上方”，<b style=\"color: var(--primary-color);\">over</b> 还可以表示：<br><br>1. <b>结束</b>：The class is over. (下课啦) / The meeting is over.<br>2. <b>超过</b>：There are over two thousand students in our school. (超过两千名学生)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '下课啦。', words: ['the', 'class', 'is', 'over'], answer: 'the class is over' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '会议结束了。', words: ['the', 'meeting', 'is', 'over'], answer: 'the meeting is over' },
        { type: 'mcq', module: '词汇侦探', question: 'There are ___ two thousand students in our school.', hint: '我们学校有超过两千名学生。', options: ['over', 'on'], answer: 'over' },

        // 5. with 的多重用法
        { type: 'lesson', title: '重点介词：with (伴随与支持)', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">with</b> 的核心意思是“和某人在一起”：<br>• Mr Jones is with his family.<br>• I want to stay with you.<br><br><b>💡 引申义（同意 / 支持）：</b><br>• Are you with me? (你同意我的观点吗？)<br>• I'm with you. (我支持你！)</p>" },
        { type: 'mcq', module: '情景小侦探', question: '- Where are you?<br>- I am ___ my friend.', hint: '我和我的朋友在一起。', options: ['with', 'and', 'at'], answer: 'with' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我想和你待在一起。', words: ['I', 'want', 'to', 'stay', 'with', 'you'], answer: 'I want to stay with you' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '琼斯先生和他的家人在一起。', words: ['Mr', 'Jones', 'is', 'with', 'his', 'family'], answer: 'Mr Jones is with his family' },

        // 6. 现在进行时的复数主语
        { type: 'lesson', title: '语法进阶：现在进行时的复数形式', content: "<p style=\"text-align: left; margin-bottom: 15px;\">我们在上节课学了 He/She is doing...<br>如果主语是复数 (We, You, They, 或是复数名词)，be动词要变成 <b style=\"color: var(--primary-color);\">are</b>：<br><br>• <b style=\"color: var(--secondary-color);\">They are</b> walking over the bridge.<br>• <b style=\"color: var(--secondary-color);\">The dogs are</b> running on the grass.<br>• <b style=\"color: var(--secondary-color);\">We are</b> eating.</p>" },
        { type: 'mcq', module: '语法侦探', question: 'They ___ kites now.', hint: '他们现在正在放风筝。', options: ['are flying', 'flying', 'is flying'], answer: 'are flying' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '他们正走过桥。', words: ['they', 'are', 'walking', 'over', 'the', 'bridge'], answer: 'they are walking over the bridge' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我们在吃饭。', words: ['we', 'are', 'eating'], answer: 'we are eating' }
    ],
    "31": [
        // 1. run 的搭配
        { type: 'lesson', title: '短语辨析：run 的常见搭配', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">run</b> (跑) 可以和不同的介词组成有趣的短语：<br><br>1. <b style=\"color: var(--secondary-color);\">run after</b> (追逐/追赶)：<br>• The cat is running after a mouse. (猫在追老鼠。)<br><br>2. <b style=\"color: var(--secondary-color);\">run across</b> (穿过草坪 / <b>偶然遇到</b>)：<br>• I run across her in the library. (我在图书馆偶然遇见了她。)</p>" },
        { type: 'mcq', module: '词汇辨析', question: 'The cat is ___ a mouse.', hint: '猫在追赶老鼠。', options: ['running after', 'running across'], answer: 'running after' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '猫在追老鼠。', words: ['the', 'cat', 'is', 'running', 'after', 'a', 'mouse'], answer: 'the cat is running after a mouse' },
        { type: 'mcq', module: '情景小侦探', question: 'I ___ her in the library.', hint: '我在图书馆偶然遇见了她。', options: ['run across', 'run after'], answer: 'run across' },

        // 2. after 的用法
        { type: 'lesson', title: '重点介词：after', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">after</b> 可以表示空间或时间上的“在……之后”：<br><br>1. <b>空间（在...后面）</b>：<br>• He calls after me. (他在我的身后喊我。)<br><br>2. <b>时间（在...之后）</b>：<br>• We'll leave after lunch. (我们午餐后离开。)<br>• after school (放学后) / after class (下课后)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '他在我的身后喊我。', words: ['he', 'calls', 'after', 'me'], answer: 'he calls after me' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我们午餐后离开。', words: ["we'll", 'leave', 'after', 'lunch'], answer: "we'll leave after lunch" },
        { type: 'mcq', module: '介词侦探', question: 'We usually play football ___ class.', hint: '我们通常在下课后踢足球。', options: ['after', 'in'], answer: 'after' },

        // 3. where 引导的疑问句
        { type: 'lesson', title: '语法重点：Where 问位置', content: "<p style=\"text-align: left; margin-bottom: 15px;\">想要问某人或某物在哪里，就用 <b style=\"color: var(--primary-color);\">Where</b>：<br><br>句型：<b style=\"color: var(--secondary-color);\">Where + is/are + 主语?</b><br>• Where is Jane? ➡️ She is at home.<br>• Where are you? ➡️ I'm in the study. (我在书房)</p>" },
        { type: 'mcq', module: '情景小侦探', question: '___ is your mother?<br>- She is in the kitchen.', hint: '你妈妈在哪里？', options: ['Where', 'What', 'Who'], answer: 'Where' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '约翰在哪儿？', words: ['where', 'is', 'John', '?'], answer: 'where is John ?' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '他在卧室里。', words: ['he', 'is', 'in', 'the', 'bedroom'], answer: 'he is in the bedroom' },

        // 4. 一般现在时 vs 现在进行时
        { type: 'lesson', title: '时态大比拼：一般现在 vs 现在进行', content: "<p style=\"text-align: left; margin-bottom: 15px;\">1. <b style=\"color: var(--primary-color);\">一般现在时</b>：表示经常性、习惯性的动作。<br>• She sits under the tree. (她经常/习惯坐在树下)<br><br>2. <b style=\"color: var(--secondary-color);\">现在进行时</b>：表示此时此刻<b>正在发生</b>的动作。<br>• She is sitting under the tree. (她此刻正坐在树下)</p>" },
        { type: 'mcq', module: '时态侦探', question: 'She ___ under the tree.', hint: '她经常坐在树下。', options: ['sits', 'is sitting'], answer: 'sits' },
        { type: 'mcq', module: '时态侦探', question: 'Look! She ___ under the tree.', hint: '看！她此刻正坐在树下。', options: ['is sitting', 'sits'], answer: 'is sitting' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '她正坐在树下。', words: ['she', 'is', 'sitting', 'under', 'the', 'tree'], answer: 'she is sitting under the tree' },

        // 5. 现在分词变化规则
        { type: 'lesson', title: '语法规则：动词加 ing 的三大法则', content: "<p style=\"text-align: left; margin-bottom: 15px;\">把动词变成现在分词 (ing) 有以下三种规则：<br><br>1. <b>直接加 ing</b>：work ➡️ working, read ➡️ reading<br>2. <b>不发音的 e 结尾，去 e 加 ing</b>：write ➡️ writing, make ➡️ making<br>3. <b>重读闭音节结尾，双写最后一个字母加 ing</b>：sit ➡️ sitting, run ➡️ running</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '这个男人正穿着一件蓝色的衬衫。', words: ['this', 'man', 'is', 'wearing', 'a', 'blue', 'shirt'], answer: 'this man is wearing a blue shirt' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '汤姆正在拍照片。', words: ['Tom', 'is', 'taking', 'photos'], answer: 'Tom is taking photos' },
        { type: 'mcq', module: '单词变身', question: 'sit 的现在分词是：', hint: '坐 (正在)', options: ['sitting', 'siting'], answer: 'sitting' },

        // 6. 现在进行时特殊疑问句
        { type: 'lesson', title: '语法重点：提问“正在做的事”', content: "<p style=\"text-align: left; margin-bottom: 15px;\">询问某人正在做什么，句型是：<br><b style=\"color: var(--primary-color);\">What + be动词 + 主语 + doing?</b><br><br>• What is Sam doing? (山姆在做什么？)<br>• What are you doing? (你在做什么？)</p>" },
        { type: 'mcq', module: '语法侦探', question: '- What is Jim doing?<br>- He ___.', hint: '吉姆正在做什么？他正在做饭。', options: ['is cooking', 'cooks'], answer: 'is cooking' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '山姆在做什么？', words: ['what', 'is', 'Sam', 'doing', '?'], answer: 'what is Sam doing ?' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '你在做什么？', words: ['what', 'are', 'you', 'doing', '?'], answer: 'what are you doing ?' },

        // 7. What about 句型
        { type: 'lesson', title: '日常交际：What about...?', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">What about ... ?</b> (那么……呢？)<br>这是一个省略句式，常用来顺着上文顺便问一句，可以和 <b style=\"color: var(--secondary-color);\">How about</b> 互换。<br><br>例句：<br>• What about the dog? (那么狗在做什么呢？)<br>• What about my father? / How about your teacher?</p>" },
        { type: 'mcq', module: '情景小侦探', question: "___ your cat?<br>- It's playing with the ball.", hint: '那么你的猫呢？', options: ['What about', 'Where is'], answer: 'What about' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '那么狗在做什么呢？', words: ['what', 'about', 'the', 'dog', '?'], answer: 'what about the dog ?' },
        { type: 'mcq', module: '情景小侦探', question: '___ my father?', hint: '那么我爸爸呢？', options: ['What about', 'Where'], answer: 'What about' }
    ],
    "29": [
        // 1. shut/close/open
        { type: 'lesson', title: '动词辨析：关与开', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">shut</b> / <b style=\"color: var(--primary-color);\">close</b> (关):<br>• shut the bedroom door (关上卧室门)<br>• close your eyes / close the book / close the window<br><br><b style=\"color: var(--secondary-color);\">open</b> (开):<br>• open the window / open your book</p>" },
        { type: 'mcq', module: '词汇辨析', question: 'Please ___ the bedroom door.', hint: '请关上卧室门。', options: ['shut', 'open'], answer: 'shut' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '闭上你的眼睛。', words: ['close', 'your', 'eyes'], answer: 'close your eyes' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '打开你的书。', words: ['open', 'your', 'book'], answer: 'open your book' },

        // 2. 前缀 un-
        { type: 'lesson', title: '词根词缀：un- 否定大魔法', content: "<p style=\"text-align: left; margin-bottom: 15px;\">在单词前面加上 <b style=\"color: var(--error-color);\">un-</b>，意思就会变成相反的“不……”：<br><br>• tidy (整齐的) ➡️ <b style=\"color: var(--error-color);\">untidy</b> (乱的, 不整齐的)<br>• happy (高兴的) ➡️ <b style=\"color: var(--error-color);\">unhappy</b> (不高兴的)<br>• able (能够的) ➡️ <b style=\"color: var(--error-color);\">unable</b> (不能够的)</p>" },
        { type: 'mcq', module: '单词魔法', question: 'tidy 变成相反的意思是：', hint: '不整齐的', options: ['untidy', 'notidy'], answer: 'untidy' },
        { type: 'mcq', module: '单词魔法', question: 'happy 变成相反的意思是：', hint: '不高兴的', options: ['unhappy', 'dishappy'], answer: 'unhappy' },
        { type: 'mcq', module: '单词魔法', question: 'able 变成相反的意思是：', hint: '不能够的', options: ['unable', 'disable'], answer: 'unable' },

        // 3. 家务短语与 air
        { type: 'lesson', title: '生活词汇：家务小能手', content: "<p style=\"text-align: left; margin-bottom: 15px;\">• <b style=\"color: var(--primary-color);\">make the bed</b>: 整理床铺<br>• <b style=\"color: var(--primary-color);\">sweep the floor</b>: 扫地<br>• <b style=\"color: var(--primary-color);\">dust the dressing table</b>: 掸掉梳妆台的灰尘<br>• <b style=\"color: var(--secondary-color);\">air the room</b>: 给房间通风 (这里 air 是动词)<br>• <b style=\"color: var(--secondary-color);\">water the flowers</b>: 浇花 (这里 water 也是动词)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '整理床铺', words: ['make', 'the', 'bed'], answer: 'make the bed' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '给房间通风', words: ['air', 'the', 'room'], answer: 'air the room' },
        { type: 'mcq', module: '词汇辨析', question: 'I need to ___ the flowers.', hint: '我需要浇花。', options: ['water', 'air'], answer: 'water' },

        // 4. clothes
        { type: 'lesson', title: '重点词汇：clothes', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">clothes</b> 是衣服的总称，<b style=\"color: var(--error-color);\">它只有复数形式！</b><br>• I don't have enough clothes.<br><br><b>常见衣服 (单数)</b>: shirt(衬衫), coat(外套), sweater(毛衣).<br><b>带两条腿的衣服 (必须加 s)</b>: shorts(短裤), trousers(长裤), jeans(牛仔裤).</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我没有足够的衣服。', words: ['I', "don't", 'have', 'enough', 'clothes'], answer: "I don't have enough clothes" },
        { type: 'mcq', module: '词法侦探', question: 'These ___ are very nice.', hint: '这些牛仔裤很好看。', options: ['jeans', 'jean'], answer: 'jeans' },
        { type: 'mcq', module: '词法侦探', question: 'I have a new ___.', hint: '我有一件新衬衫。', options: ['shirt', 'shirts'], answer: 'shirt' },

        // 5. put on vs take off
        { type: 'lesson', title: '短语大比拼：穿上与脱下', content: "<p style=\"text-align: left; margin-bottom: 15px;\">跟穿衣打扮相关的重点短语：<br><br>• <b style=\"color: var(--primary-color);\">put on</b> (穿上/戴上)：put on your coat / put on your hat<br>• <b style=\"color: var(--error-color);\">take off</b> (脱下/摘下)：take off the caps</p>" },
        { type: 'mcq', module: '词汇辨析', question: "- It's cold today.<br>- I need to ___ my sweater.", hint: '今天好冷。我需要穿上我的毛衣。', options: ['put on', 'take off'], answer: 'put on' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '穿上你的外套。', words: ['put', 'on', 'your', 'coat'], answer: 'put on your coat' },
        { type: 'mcq', module: '词汇辨析', question: 'Please ___ the caps.', hint: '请摘下帽子。', options: ['take off', 'put on'], answer: 'take off' },

        // 6. 祈使句
        { type: 'lesson', title: '语法重点：祈使句', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">祈使句</b>用于命令、请求、建议。<br>特点：<b style=\"color: var(--error-color);\">省略主语 you，直接以动词原形开头。</b><br><br>• <b>Come in.</b> (进来。)<br>• <b>Open your book.</b> (打开你的书。)<br>• <b>Stand up.</b> (起立。)</p>" },
        { type: 'mcq', module: '语法侦探', question: "___ It's so dirty.", hint: '扫扫地吧，太脏啦。', options: ['Sweep the floor', 'Sweeping the floor'], answer: 'Sweep the floor' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '进来。', words: ['come', 'in'], answer: 'come in' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '起立。', words: ['stand', 'up'], answer: 'stand up' },

        // 7. must 情态动词
        { type: 'lesson', title: '情态动词：must (必须/一定)', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">must</b> 是情态动词，后面永远加<b style=\"color: var(--error-color);\">动词原形</b>，它不随主语变化！<br><br><b>1. 表示“必须”(命令)：</b><br>• You must do your homework.<br><b>2. 表示“推测”(一定)：</b><br>• He must be in the bedroom. (他一定在卧室里。)</p>" },
        { type: 'mcq', module: '语法侦探', question: 'You ___ keep your room tidy.', hint: '你必须保持房间整洁。', options: ['must', 'must to', 'are'], answer: 'must' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '你必须做作业。', words: ['you', 'must', 'do', 'your', 'homework'], answer: 'you must do your homework' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '他一定在卧室里。', words: ['he', 'must', 'be', 'in', 'the', 'bedroom'], answer: 'he must be in the bedroom' }
    ],
    "27": [
        // 1. near 及方位
        { type: 'lesson', title: '方位介词：near 与其它小伙伴', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">near</b> 表示“靠近/在附近”，既可指空间，也可指时间：<br>• my school is near the bank. (空间)<br>• it is near eight o'clock. (快要八点了)<br><br><b>其它方位介词：</b><br>• <b>in front of</b> (在...前面) / <b>behind</b> (在...后面)<br>• <b>next to</b> (在...旁边)</p>" },
        { type: 'mcq', module: '词汇辨析', question: 'Her birthday is ___ Christmas.', hint: '她的生日在圣诞节附近。', options: ['near', 'on', 'in'], answer: 'near' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我的学校在银行附近。', words: ['my', 'school', 'is', 'near', 'the', 'bank'], answer: 'my school is near the bank' },
        { type: 'mcq', module: '语法侦探', question: "It is ___ eight o'clock.", hint: '快要八点了。', options: ['near', 'in'], answer: 'near' },

        // 2. armchair, chair, sofa
        { type: 'lesson', title: '词汇辨析：各种“椅子”', content: "<p style=\"text-align: left; margin-bottom: 15px;\">• <b style=\"color: var(--primary-color);\">chair</b>: 普通椅子（无扶手）。<br>• <b style=\"color: var(--secondary-color);\">armchair</b>: 扶手椅（带手臂 arm 搁置的地方）。<br>• <b style=\"color: #f59e0b;\">sofa</b>: 沙发（很宽敞，能坐很多人）。</p>" },
        { type: 'mcq', module: '常识问答', question: '带手臂(arm)搁置的地方的椅子是：', hint: '扶手椅', options: ['armchair', 'chair'], answer: 'armchair' },
        { type: 'mcq', module: '常识问答', question: '很宽敞，能坐很多人的椅子通常是：', hint: '沙发', options: ['sofa', 'chair'], answer: 'sofa' },
        { type: 'mcq', module: '常识问答', question: '无扶手的普通椅子是：', hint: '普通椅子', options: ['chair', 'armchair'], answer: 'chair' },

        // 3. picture 与 wall
        { type: 'lesson', title: '重点词汇：照片与墙', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">picture</b>:<br>• 图画：a picture on the wall<br>• 照片：take a picture (拍照)<br><br><b style=\"color: var(--secondary-color);\">wall</b> (墙):<br>• <b>on</b> the wall (挂在墙表面，如画作)<br>• <b>in</b> the wall (在墙体里面，如窗户)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '墙上的一幅画', words: ['a', 'picture', 'on', 'the', 'wall'], answer: 'a picture on the wall' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '拍照', words: ['take', 'a', 'picture'], answer: 'take a picture' },
        { type: 'mcq', module: '介词辨析', question: 'A window is ___ the wall.', hint: '窗户在墙体里面。', options: ['in', 'on'], answer: 'in' },

        // 4. there are 句型
        { type: 'lesson', title: '重点句型：There are (复数)', content: "<p style=\"text-align: left; margin-bottom: 15px;\">表示某地有多个事物，要用 <b style=\"color: var(--primary-color);\">There are + 名词复数</b>：<br><br>• There are some apples in the basket.<br>• There are many pictures in the room.<br><br><i>💡 <b style=\"color: var(--secondary-color);\">some</b> (一些) 既能修饰可数名词复数，也能修饰不可数名词。</i></p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '房间里有许多图画。', words: ['there', 'are', 'many', 'pictures', 'in', 'the', 'room'], answer: 'there are many pictures in the room' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '篮子里有一些苹果。', words: ['there', 'are', 'some', 'apples', 'in', 'the', 'basket'], answer: 'there are some apples in the basket' },
        { type: 'mcq', module: '语法侦探', question: 'There ___ some apples in the basket.', hint: '篮子里有一些苹果。', options: ['are', 'is'], answer: 'are' },

        // 5. 名词变复数
        { type: 'lesson', title: '语法大放送：名词变复数规则', content: "<p style=\"text-align: left; margin-bottom: 15px;\">1. 一般直接加 <b style=\"color: var(--primary-color);\">s</b> (caps)。<br>2. <b style=\"color: var(--secondary-color);\">x, s, sh, ch</b> 结尾加 <b>es</b> (buses, classes)。<br>3. <b style=\"color: #f59e0b;\">f, fe</b> 结尾，把 f/fe 变成 <b>v</b> 再加 <b>es</b> (knives, leaves)。<br>4. 辅音字母+<b>y</b> 结尾，变 y 为 <b>i</b> 再加 <b>es</b> (city ➡️ cities)。<br>5. 不规则变化：man ➡️ men, policeman ➡️ policemen。</p>" },
        { type: 'mcq', module: '单词变身', question: 'bus 的复数形式是：', hint: '公共汽车（复数）', options: ['buses', 'buss'], answer: 'buses' },
        { type: 'mcq', module: '单词变身', question: 'leaf 的复数形式是：', hint: '树叶（复数）', options: ['leaves', 'leafs'], answer: 'leaves' },
        { type: 'mcq', module: '单词变身', question: 'city 的复数形式是：', hint: '城市（复数）', options: ['cities', 'citys'], answer: 'cities' },

        // 6. there are vs they are
        { type: 'lesson', title: '句型辨析：there are 与 they are', content: "<p style=\"text-align: left; margin-bottom: 15px;\">这两个长得很像，但意思完全不同哦：<br><br>1. <b style=\"color: var(--primary-color);\">There are</b>：表示<b>“有...”</b> (强调事物的存在)。<br>• <i>There are some pencils on the desk. (桌上有些铅笔)</i><br><br>2. <b style=\"color: var(--secondary-color);\">They are</b>：表示<b>“它们是...”</b> (代指上文提到的复数事物)。<br>• <i>They are red flowers. (它们是红色的花)</i></p>" },
        { type: 'mcq', module: '语法侦探', question: '___ some boys on the playground.', hint: '操场上有一些男孩。', options: ['There are', 'They are'], answer: 'There are' },
        { type: 'mcq', module: '语法侦探', question: '___ some vegetables in the kitchen.', hint: '厨房里有一些蔬菜。', options: ['There are', 'There is'], answer: 'There are' },
        { type: 'mcq', module: '语法侦探', question: '___ red flowers.', hint: '它们是红色的花。', options: ['They are', 'There are'], answer: 'They are' }
    ],
    "25": [
        // 1. 家居词汇
        { type: 'lesson', title: '家居词汇大盘点', content: "<p style=\"text-align: left; margin-bottom: 15px;\">• <b style=\"color: var(--primary-color);\">kitchen</b>: 厨房<br>• <b style=\"color: var(--primary-color);\">bedroom</b>: 卧室 (有 bed 的房间)<br>• <b style=\"color: var(--secondary-color);\">bathroom</b>: 浴室/洗手间<br>• <b style=\"color: var(--secondary-color);\">living room</b>: 客厅<br>• <b style=\"color: #f59e0b;\">study</b>: 书房 (和学习 study 是同一个词哦)</p>" },
        { type: 'mcq', module: '词汇辨析', question: 'I sleep in the ___.', hint: '我睡在卧室。', options: ['bedroom', 'kitchen'], answer: 'bedroom' },
        { type: 'mcq', module: '词汇辨析', question: 'He is cooking in the ___.', hint: '他在厨房做饭。', options: ['kitchen', 'bathroom'], answer: 'kitchen' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '在客厅里', words: ['in', 'the', 'living', 'room'], answer: 'in the living room' },

        // 2. electric 与家电
        { type: 'lesson', title: '重点词汇：电器与厨具', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">electric</b> 意思是“电动的/带电的”：<br>• electric cooker (电灶) / electric fan (电风扇)<br><br><b>常见家电</b>：refrigerator(冰箱), television(电视), washing machine(洗衣机)。<br><b>常见厨具</b>：pan(平底锅), bowl(碗), plate(盘子), chopsticks(筷子 ⚠️必须加s)。</p>" },
        { type: 'mcq', module: '词汇辨析', question: 'I put the milk in the ___.', hint: '我把牛奶放在冰箱里。', options: ['refrigerator', 'television'], answer: 'refrigerator' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '电风扇', words: ['electric', 'fan'], answer: 'electric fan' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '两个平底锅', words: ['two', 'pans'], answer: 'two pans' },

        // 3. empty vs full
        { type: 'lesson', title: '反义词对对碰：空与满', content: "<p style=\"text-align: left; margin-bottom: 15px;\">• <b style=\"color: var(--primary-color);\">empty</b> (空的)：the bottle is empty.<br><br>• <b style=\"color: var(--secondary-color);\">full</b> (满的)：her basket is full.<br><i>💡 I'm full. 也可以用来表示“我吃饱了”。</i></p>" },
        { type: 'mcq', module: '词汇辨析', question: 'The bottle is ___.', hint: '瓶子是空的。', options: ['empty', 'full'], answer: 'empty' },
        { type: 'mcq', module: '词汇辨析', question: 'Her basket is ___.', hint: '她的篮子是满的。', options: ['full', 'empty'], answer: 'full' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我吃饱了。', words: ["I'm", 'full'], answer: "I'm full" },

        // 4. in/on/under
        { type: 'lesson', title: '方位介词：in, on, under', content: "<p style=\"text-align: left; margin-bottom: 15px;\">• <b style=\"color: var(--primary-color);\">in</b> (在...里面)：in the box / in the bedroom<br>• <b style=\"color: var(--secondary-color);\">on</b> (在...上面，接触表面)：on the shelf<br>• <b style=\"color: #f59e0b;\">under</b> (在...下面)：under the bed</p>" },
        { type: 'mcq', module: '词汇辨析', question: 'There is a table ___ the kitchen.', hint: '厨房里有一张桌子。', options: ['in', 'on', 'under'], answer: 'in' },
        { type: 'mcq', module: '词汇辨析', question: 'The bag is ___ the desk.', hint: '包在桌子下面。', options: ['under', 'on'], answer: 'under' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '在盒子里', words: ['in', 'the', 'box'], answer: 'in the box' },

        // 5. There be (不可数名词)
        { type: 'lesson', title: '句型进阶：There is + 不可数名词', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">There is</b> 除了接单数名词，也可以接<b style=\"color: var(--error-color);\">不可数名词</b> (水、肉、牛奶等)！<br><br>• There is <b>some milk</b> in the bottle.<br>• There is <b>some food</b> in the refrigerator.<br><i>⚠️ 不可数名词通常用 some, a piece of, a pair of 等量词修饰。</i></p>" },
        { type: 'mcq', module: '语法侦探', question: '___ some bread on the plate.', hint: '盘子里有一些面包。', options: ['There is', 'There are'], answer: 'There is' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '冰箱里有一些食物。', words: ['there', 'is', 'some', 'food', 'in', 'the', 'refrigerator'], answer: 'there is some food in the refrigerator' },
        { type: 'mcq', module: '语法侦探', question: 'There is some ___ in the bottle.', hint: '瓶子里有一些牛奶。', options: ['milk', 'milks'], answer: 'milk' },

        // 6. on the left / right
        { type: 'lesson', title: '方位表达：左右与中间', content: "<p style=\"text-align: left; margin-bottom: 15px;\">• <b style=\"color: var(--primary-color);\">on the left</b> (在左边)<br>• <b style=\"color: var(--secondary-color);\">on the right</b> (在右边)<br>• <b style=\"color: #f59e0b;\">in the middle of ...</b> (在...中间)：in the middle of the room.<br><br><i>💡 引申用法：I'm in the middle of something. (我正忙着呢。)</i></p>" },
        { type: 'mcq', module: '情景小侦探', question: "- Where is the TV?<br>- It's ___ of the room.", hint: '它在房间的右边。', options: ['on the right', 'in the middle'], answer: 'on the right' },
        { type: 'mcq', module: '情景小侦探', question: 'It is on the ___.', hint: '它在左边。', options: ['left', 'right'], answer: 'left' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '在房间的中间', words: ['in', 'the', 'middle', 'of', 'the', 'room'], answer: 'in the middle of the room' }
    ],
    "23": [
        // 1. glass 辨析
        { type: 'lesson', title: '一词多义：glass', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">glass</b> 的意思由它是否可数决定：<br><br>1. <b style=\"color: var(--secondary-color);\">玻璃杯 (可数)</b>：Give me some glasses.<br>2. <b style=\"color: var(--secondary-color);\">眼镜 (可数复数)</b>：glasses。常搭配 a pair of glasses (一副眼镜)。<br>3. <b style=\"color: #f59e0b;\">玻璃 (不可数材料)</b>：Glass is easy to break.</p>" },
        { type: 'mcq', module: '词汇辨析', question: 'Give me some ___.', hint: '给我一些玻璃杯。', options: ['glasses', 'glass'], answer: 'glasses' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '一副眼镜', words: ['a', 'pair', 'of', 'glasses'], answer: 'a pair of glasses' },
        { type: 'mcq', module: '词汇辨析', question: '___ is easy to break.', hint: '玻璃很容易碎。', options: ['Glass', 'Glasses'], answer: 'Glass' },

        // 2. 常见不可数名词
        { type: 'lesson', title: '语法大盘点：常见不可数名词', content: "<p style=\"text-align: left; margin-bottom: 15px;\">英语中，有些名词是无法用数字一个一个数出来的：<br><br>• <b>液体</b>：water (水), juice (果汁)<br>• <b>肉类</b>：chicken (鸡肉), beef (牛肉), pork (猪肉)<br>• <b>材料</b>：wood (木头), glass (玻璃)<br>• <b>零散食物</b>：rice (米饭), chocolate (巧克力)</p>" },
        { type: 'mcq', module: '词汇辨析', question: 'I want some ___.', hint: '我想要一些水。', options: ['water', 'waters'], answer: 'water' },
        { type: 'mcq', module: '词汇辨析', question: 'There is some ___ on the plate.', hint: '盘子里有一些鸡肉。', options: ['chicken', 'chickens'], answer: 'chicken' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '一些木头', words: ['some', 'wood'], answer: 'some wood' },

        // 3. in vs on
        { type: 'lesson', title: '介词辨析：in 与 on 的空间/时间对决', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b>📍 空间上：</b><br>• <b>on the sofa</b> (物品放在沙发表面)<br>• <b>in the sofa</b> (人深深陷进去坐在沙发里)<br><br><b>⏰ 时间上：</b><br>• <b style=\"color: var(--primary-color);\">in + 一段时间</b> (月份/季节/早中晚)：in June, in summer, in the morning.<br>• <b style=\"color: var(--secondary-color);\">on + 具体某一天</b>：on Sunday morning, on Monday.</p>" },
        { type: 'mcq', module: '词汇辨析', question: 'My lamp is ___ the desk.', hint: '我的台灯在桌子上。', options: ['on', 'in', 'under'], answer: 'on' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '在六月', words: ['in', 'June'], answer: 'in June' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '在星期天早上', words: ['on', 'Sunday', 'morning'], answer: 'on Sunday morning' },

        // 4. shelf复数
        { type: 'lesson', title: '名词复数：f/fe 结尾的魔法', content: "<p style=\"text-align: left; margin-bottom: 15px;\">以 <b>f</b> 或 <b>fe</b> 结尾的名词变复数，需要<b style=\"color: var(--error-color);\">把 f/fe 变成 v，再加 es</b>：<br><br>• shel<b>f</b> ➡️ shel<b>ves</b> (架子)<br>• li<b>fe</b> ➡️ li<b>ves</b> (生命)<br>• lea<b>f</b> ➡️ lea<b>ves</b> (树叶)<br>• kni<b>fe</b> ➡️ kni<b>ves</b> (刀)</p>" },
        { type: 'mcq', module: '单词拼写', question: 'one shelf ➡️ two ___', hint: '两个架子', options: ['shelves', 'shelfs'], answer: 'shelves' },
        { type: 'mcq', module: '单词拼写', question: 'one leaf ➡️ many ___', hint: '许多树叶', options: ['leaves', 'leafs'], answer: 'leaves' },
        { type: 'mcq', module: '单词拼写', question: 'one knife ➡️ two ___', hint: '两把刀', options: ['knives', 'knifes'], answer: 'knives' },

        // 5. 双宾语结构
        { type: 'lesson', title: '语法进阶：give 的双宾语结构', content: "<p style=\"text-align: left; margin-bottom: 15px;\">像 give, buy, bring 这样的动词，后面可以接<b style=\"color: var(--error-color);\">两个宾语</b> (一个人，一个物)：<br>句型：<b style=\"color: var(--primary-color);\">动词 + 间接宾语(人) + 直接宾语(物)</b><br><br>• Give <b>me</b>(人) <b>some glasses</b>(物).<br>• I will buy <b>you</b> <b>a new dress</b>.<br>• Jack brings <b>me</b> <b>cakes</b>.</p>" },
        { type: 'mcq', module: '语法侦探', question: 'I can give ___.', hint: '我能给你一顶帽子。', options: ['you a cap', 'a cap you'], answer: 'you a cap' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '给你一些玻璃杯。', words: ['give', 'you', 'some', 'glasses'], answer: 'give you some glasses' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '杰克给我蛋糕。', words: ['Jack', 'brings', 'me', 'cakes'], answer: 'Jack brings me cakes' },

        // 6. 不定代词 ones
        { type: 'lesson', title: '代词魔法：ones', content: "<p style=\"text-align: left; margin-bottom: 15px;\">上节课我们学了 <b>one</b> 指代单数。如果是<b style=\"color: var(--error-color);\">复数</b>，就要用 <b style=\"color: var(--primary-color);\">ones</b> 啦！<br><br>• Which glasses? ➡️ The <b style=\"color: var(--secondary-color);\">ones</b> on the shelf.<br>• Which brushes? ➡️ The <b style=\"color: var(--secondary-color);\">ones</b> in my bag.<br><i>(ones 完美代替了前面提过的复数名词，避免啰嗦)</i></p>" },
        { type: 'mcq', module: '语法侦探', question: "- Which pencils?<br>- The ___ in my pencil box.", hint: '我铅笔盒里的那些（铅笔）。', options: ['ones', 'one'], answer: 'ones' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '架子上的那些', words: ['the', 'ones', 'on', 'the', 'shelf'], answer: 'the ones on the shelf' },
        { type: 'mcq', module: '语法侦探', question: "- Which brushes?<br>- The ___ in my bag.", hint: '我包里的那些。', options: ['ones', 'one'], answer: 'ones' }
    ],
    "21": [
        // 1. give 句型
        { type: 'lesson', title: '动词句型：give (给)', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">give</b> (给) 有两种常用的表达方式：<br><br>1. <b style=\"color: var(--secondary-color);\">give + 人 + 物</b>：Give me some water.<br>2. <b style=\"color: var(--secondary-color);\">give + 物 + to + 人</b>：Give that pen to me.</p>" },
        { type: 'mcq', module: '语法侦探', question: 'Give ___ some water.', hint: '给我一些水。', options: ['me', 'I'], answer: 'me' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '把那支钢笔给我。', words: ['give', 'that', 'pen', 'to', 'me'], answer: 'give that pen to me' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '给我一本书。', words: ['give', 'me', 'a', 'book'], answer: 'give me a book' },

        // 2. one不定代词
        { type: 'lesson', title: '代词魔法：one', content: "<p style=\"text-align: left; margin-bottom: 15px;\">当不想重复刚刚说过的<b>单数名词</b>时，我们可以用 <b style=\"color: var(--primary-color);\">one</b> 来代替它！<br><br>• <i>I lost my book, I will buy a new <b>one</b>.</i><br>• 指代物品：The red <b>one</b> or the pink <b>one</b>.<br>• 指代人：The <b>one</b> in red is my dad. (穿红色衣服的那个人)</p>" },
        { type: 'mcq', module: '语法侦探', question: "- Which dress is Betty's?<br>- The blue ___.", hint: '蓝色那件。', options: ['one', 'ones'], answer: 'one' },
        { type: 'mcq', module: '情景小侦探', question: 'I will buy a new ___.', hint: '我会买一本新的。', options: ['one', 'book'], answer: 'one' },
        { type: 'mcq', module: '情景小侦探', question: 'The red ___ or the pink ___?', hint: '红色的那个还是粉色的那个？', options: ['one', 'ones'], answer: 'one' },

        // 3. 数字表达
        { type: 'lesson', title: '数字大派对：11 到 100', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b>💡 找规律：</b><br>• <b style=\"color: var(--primary-color);\">13~19 (十几)</b>：通常以 <b>-teen</b> 结尾 (thirteen, fourteen, fifteen)。<br>• <b style=\"color: var(--secondary-color);\">20~90 (整十)</b>：通常以 <b>-ty</b> 结尾 (twenty, thirty, forty, fifty)。<br><br><b>💡 非整十的两位数：</b><br>• 十位数 + 个位数：<b style=\"color: #f59e0b;\">52</b> ➡️ fifty-two，<b style=\"color: #f59e0b;\">98</b> ➡️ ninety-eight。</p>" },
        { type: 'mcq', module: '词汇辨析', question: '13 的英文是：', hint: '13', options: ['thirteen', 'thirty'], answer: 'thirteen' },
        { type: 'mcq', module: '词汇辨析', question: '50 的英文是：', hint: '50', options: ['fifty', 'fifteen'], answer: 'fifty' },
        { type: 'mcq', module: '词汇辨析', question: '21 的英文是：', hint: '21', options: ['twenty-one', 'twelve'], answer: 'twenty-one' },

        // 4. which疑问句
        { type: 'lesson', title: '疑问词辨析：Which 哪一个？', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">Which</b> 用于询问“哪一个”，<b style=\"color: var(--error-color);\">它通常有一个明确的选择范围。</b><br><br>• Which book? (哪本书？)<br>• Which is your hat? The red one or the pink one? (红的还是粉的？)<br><br><i>对比：<b>What</b> 没有明确范围。What color is your cap? (随便什么颜色都可以)</i></p>" },
        { type: 'mcq', module: '情景小侦探', question: '- ___ is your shirt?<br>- The blue one.', hint: '哪一件是你的衬衫？', options: ['Which', 'What', 'Who'], answer: 'Which' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '哪本书？', words: ['which', 'book', '?'], answer: 'which book ?' },
        { type: 'mcq', module: '语法侦探', question: '___ is your hat?', hint: '哪一顶是你的帽子？', options: ['Which', 'What'], answer: 'Which' },

        // 5. here you are vs here it is
        { type: 'lesson', title: '口语交际：给你', content: "<p style=\"text-align: left; margin-bottom: 15px;\">在英语中，递给别人东西时<b>千万不要说 give you！</b><br><br>• <b style=\"color: var(--primary-color);\">Here you are.</b> (强调“递给你这个人”)<br>• <b style=\"color: var(--secondary-color);\">Here it is.</b> (强调“这东西在这儿呢”)</p>" },
        { type: 'mcq', module: '情景小侦探', question: '- Please give me some water.<br>- ___.', hint: '（递水）给你。', options: ['Here you are', 'Catch it', 'Here it is'], answer: 'Here you are' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '在这儿呢。', words: ['here', 'it', 'is'], answer: 'here it is' },
        { type: 'mcq', module: '情景小侦探', question: '- Where is the book?<br>- ___.', hint: '它在这儿呢。', options: ['Here it is', 'Here you are'], answer: 'Here it is' }
    ],
    "19": [
        // 1. matter
        { type: 'lesson', title: '重点词汇：matter (事情)', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">matter</b> 可以作名词，也可以作动词：<br><br>• <b>What's the matter?</b> (发生什么事了？/怎么了？)<br>• <b>This matter is their concern.</b> (这件事由他们负责。)<br>• <b>It matters a lot.</b> (这很重要。 - 动词，表示要紧的/有关系的)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '发生什么事了？', words: ["what's", 'the', 'matter', '?'], answer: "what's the matter ?" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '这件事由他们负责。', words: ['this', 'matter', 'is', 'their', 'concern'], answer: 'this matter is their concern' },
        { type: 'mcq', module: '词汇辨析', question: 'It ___ a lot.', hint: '这很重要。', options: ['matters', 'matter'], answer: 'matters' },

        // 2. children / child
        { type: 'lesson', title: '词汇辨析：孩子们 (单复数)', content: "<p style=\"text-align: left; margin-bottom: 15px;\">• <b style=\"color: var(--primary-color);\">children</b> (复数，孩子们)：They are my children.<br>• <b style=\"color: var(--secondary-color);\">child</b> (单数，孩子)：She is a lovely child.<br><br><i>💡 注意读音变化：复数 children 的 i 发短音，单数 child 的 i 发长音。</i></p>" },
        { type: 'mcq', module: '词汇辨析', question: 'They are my ___.', hint: '他们是我的孩子们。', options: ['children', 'childs', 'child'], answer: 'children' },
        { type: 'mcq', module: '词汇辨析', question: 'She is a lovely ___.', hint: '她是一个可爱的孩子。', options: ['child', 'children'], answer: 'child' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '他们是我的孩子们。', words: ['they', 'are', 'my', 'children'], answer: 'they are my children' },

        // 3. tired vs tiring
        { type: 'lesson', title: '词汇辨析：tired 与 tiring', content: "<p style=\"text-align: left; margin-bottom: 15px;\">• <b style=\"color: var(--primary-color);\">tired</b> (感到累的)：通常用来<b style=\"color: var(--error-color);\">形容人</b>的感觉。<br>  I'm so tired. (我好累呀。)<br><br>• <b style=\"color: var(--secondary-color);\">tiring</b> (令人疲惫的)：通常用来<b style=\"color: var(--error-color);\">形容事物</b>。<br>  Today is a tiring day. (今天真是让人疲惫的一天。)</p>" },
        { type: 'mcq', module: '词汇辨析', question: "I'm so ___.", hint: '我好累呀。', options: ['tired', 'tiring'], answer: 'tired' },
        { type: 'mcq', module: '词汇辨析', question: 'Today is a ___ day.', hint: '今天真是让人疲惫的一天。', options: ['tiring', 'tired'], answer: 'tiring' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我好累呀。', words: ["I'm", 'so', 'tired'], answer: "I'm so tired" },

        // 4. thirsty vs hungry
        { type: 'lesson', title: '生活词汇：又饿又渴', content: "<p style=\"text-align: left; margin-bottom: 15px;\">• <b style=\"color: var(--primary-color);\">thirsty</b> (渴的)：We are thirsty.<br>• <b style=\"color: var(--secondary-color);\">hungry</b> (饿的)：They're very hungry.<br><br><i>💡 I'm hungry and thirsty. (我又饿又渴。)</i></p>" },
        { type: 'mcq', module: '词汇辨析', question: 'We are ___.', hint: '我们渴了。', options: ['thirsty', 'hungry'], answer: 'thirsty' },
        { type: 'mcq', module: '词汇辨析', question: "They're very ___.", hint: '他们很饿。', options: ['hungry', 'thirsty'], answer: 'hungry' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我又饿又渴。', words: ["I'm", 'hungry', 'and', 'thirsty'], answer: "I'm hungry and thirsty" },

        // 5. right
        { type: 'lesson', title: '一词多义：right', content: "<p style=\"text-align: left; margin-bottom: 15px;\">1. <b>变好了/没问题</b>：Are you all right? (你还好吗？)<br>2. <b>正确的</b>：You are right. (你是对的。)<br>3. <b>右边的</b>：My right hand. (我的右手。)</p>" },
        { type: 'mcq', module: '情景小侦探', question: 'Are you all ___?', hint: '你还好吗？', options: ['right', 'left'], answer: 'right' },
        { type: 'mcq', module: '词汇辨析', question: 'You are ___.', hint: '你是对的。', options: ['right', 'wrong'], answer: 'right' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我的右手。', words: ['my', 'right', 'hand'], answer: 'my right hand' },

        // 6. 关心他人
        { type: 'lesson', title: '日常交际：关心他人怎么了', content: "<p style=\"text-align: left; margin-bottom: 15px;\">看到别人不舒服或遇到麻烦，可以用这些温柔的句子来关心他们：<br><br>• <b style=\"color: var(--primary-color);\">What's the matter (with you)?</b><br>• <b style=\"color: var(--secondary-color);\">What's wrong?</b><br>• <b style=\"color: #f59e0b;\">What's the trouble?</b><br>• <b style=\"color: #10b981;\">What happened?</b></p>" },
        { type: 'mcq', module: '情景小侦探', question: "- ___<br>- I'm tired and thirsty.", hint: '你怎么了？', options: ["What's the matter?", 'What is your name?'], answer: "What's the matter?" },
        { type: 'mcq', module: '情景小侦探', question: '- ___ with you?', hint: '你怎么了？', options: ["What's the matter", 'What'], answer: "What's the matter" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '怎么了？（发生了什么？）', words: ["what's", 'wrong', '?'], answer: "what's wrong ?" },

        // 7. there is a/an
        { type: 'lesson', title: '句型魔法：There is (有一个...)', content: "<p style=\"text-align: left; margin-bottom: 15px;\">表示某个地方存在某物，用 There is。如果要连上单数可数名词，需要加 <b style=\"color: var(--primary-color);\">a</b> 或 <b style=\"color: var(--secondary-color);\">an</b>。<br><br>• <b style=\"color: var(--primary-color);\">a</b> 用于辅音音素开头：There is <b>a</b> coat. (有一件外套)<br>• <b style=\"color: var(--secondary-color);\">an</b> 用于元音音素开头：There is <b>an</b> ice cream man. / There is <b>an</b> orange.<br><i>💡 用 an 是为了发音时的连读更加顺畅哦！</i></p>" },
        { type: 'mcq', module: '语法侦探', question: '___ a cup on the table.', hint: '桌上有一个杯子。', options: ['There is', 'There are', 'They are'], answer: 'There is' },
        { type: 'mcq', module: '语法侦探', question: 'There is ___ coat.', hint: '有一件外套。', options: ['a', 'an'], answer: 'a' },
        { type: 'mcq', module: '语法侦探', question: 'There is ___ orange.', hint: '有一个橙子。', options: ['an', 'a'], answer: 'an' },

        // 8. these / those
        { type: 'lesson', title: '指示代词：这些 (these) 与那些 (those)', content: "<p style=\"text-align: left; margin-bottom: 15px;\">还记得 this 和 that 吗？它们都有自己的复数兄弟！<br><br>• this (这个) ➡️ <b style=\"color: var(--primary-color);\">these</b> (这些，距离近)<br>• that (那个) ➡️ <b style=\"color: var(--secondary-color);\">those</b> (那些，距离远)<br><br><b>主系表句型大变身：</b><br>单数：This dress is nice.<br>复数：<b>These</b> dresses <b>are</b> nice.</p>" },
        { type: 'mcq', module: '语法侦探', question: '___ flowers are pink.', hint: '这些花是粉色的。', options: ['These', 'This'], answer: 'These' },
        { type: 'mcq', module: '语法侦探', question: '___ dresses are nice.', hint: '这些裙子很漂亮。', options: ['These', 'This'], answer: 'These' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '这些裙子很漂亮。', words: ['these', 'dresses', 'are', 'nice'], answer: 'these dresses are nice' }
    ],
    "17": [
        // 1. employee / employer
        { type: 'lesson', title: '词汇辨析：雇员与老板', content: "<p style=\"text-align: left; margin-bottom: 15px;\">• <b style=\"color: var(--primary-color);\">employ</b> (雇佣，动词)：The company employs thirty people.<br>• <b style=\"color: var(--secondary-color);\">employee</b> (雇员/员工)：They are my employees.<br>• <b style=\"color: #f59e0b;\">employer</b> (雇主/老板)：She is my employer.</p>" },
        { type: 'mcq', module: '词汇辨析', question: 'The company ___ thirty people.', hint: '公司雇佣了三十个人。', options: ['employs', 'employees'], answer: 'employs' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '他们是我的雇员。', words: ['they', 'are', 'my', 'employees'], answer: 'they are my employees' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '她是我的雇主。', words: ['she', 'is', 'my', 'employer'], answer: 'she is my employer' },

        // 2. 复合形容词
        { type: 'lesson', title: '构词法：奇妙的复合形容词', content: "<p style=\"text-align: left; margin-bottom: 15px;\">英文中有一些形容词是由“形容词/副词 + 动词ing”组合而成的：<br><br>• <b style=\"color: var(--primary-color);\">hard-working</b> (勤奋的/努力工作的)<br>• <b style=\"color: var(--primary-color);\">good-looking</b> (好看的)<br>• <b style=\"color: var(--primary-color);\">nice-smelling</b> (好闻的)</p>" },
        { type: 'mcq', module: '词汇辨析', question: 'He is a ___ boy.', hint: '他是一个勤奋的男孩。', options: ['hard-working', 'working'], answer: 'hard-working' },
        { type: 'mcq', module: '词汇辨析', question: 'She is a ___ girl.', hint: '她是一个好看的女孩。', options: ['good-looking', 'good'], answer: 'good-looking' },
        { type: 'mcq', module: '词汇辨析', question: 'This is a ___ flower.', hint: '这是一朵好闻的花。', options: ['nice-smelling', 'nice'], answer: 'nice-smelling' },

        // 3. man / woman 单复数
        { type: 'lesson', title: '特殊名词复数：男人与女人', content: "<p style=\"text-align: left; margin-bottom: 15px;\">遇到 man 和 woman 变复数，<b style=\"color: var(--error-color);\">不要加 s，把 a 变成 e！</b><br><br>• <b style=\"color: var(--primary-color);\">man ➡️ men</b> (读音 /e/)<br>• <b style=\"color: var(--secondary-color);\">woman ➡️ women</b> (读音发生了大变化，变成 /ɪ/)<br><br>包含它们的职业词也一样：policeman ➡️ policemen, postman ➡️ postmen.</p>" },
        { type: 'mcq', module: '单词拼图', question: 'one man ➡️ two ___', hint: '两个男人', options: ['men', 'mans'], answer: 'men' },
        { type: 'mcq', module: '单词拼图', question: 'one woman ➡️ two ___', hint: '两个女人', options: ['women', 'womans'], answer: 'women' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '两名男警察', words: ['two', 'policemen'], answer: 'two policemen' },

        // 4. office + er
        { type: 'lesson', title: '词汇拓展：office 与 officer', content: "<p style=\"text-align: left; margin-bottom: 15px;\">• <b style=\"color: var(--primary-color);\">office</b> (办公室)<br>• <b style=\"color: var(--secondary-color);\">officer</b> (官员，在办公室工作的人)：customs officer (海关官员), police officer (警官)。<br><br>• <b style=\"color: #f59e0b;\">office assistant</b> (办公室助理)：来自 assist (帮助) 这个动词。</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '在办公室里', words: ['in', 'the', 'office'], answer: 'in the office' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '海关官员', words: ['customs', 'officer'], answer: 'customs officer' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '办公室助理', words: ['office', 'assistant'], answer: 'office assistant' },

        // 5. and 目的 vs 并列
        { type: 'lesson', title: '语法大揭秘：and 的两副面孔', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b>1. 表示并列 (和/与)：</b><br>• This is Nicola, <b>and</b> this is Claire. (这是Nicola，这也是Claire。)<br>• Jack <b>and</b> Mike are friends.<br><br><b>2. 表示目的 (去/为了) - 常用于祈使句：</b><br>• Come <b>and</b> meet our employees. (过来去见见我们的员工。这里 and 相当于 to)</p>" },
        { type: 'mcq', module: '语法侦探', question: 'Lucy ___ Jerry are classmates.', hint: '露西和杰瑞是同班同学。', options: ['and', 'but', 'or'], answer: 'and' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '这是尼古拉，这是克莱尔。', words: ['this', 'is', 'Nicola', ',', 'and', 'this', 'is', 'Claire'], answer: 'this is Nicola , and this is Claire' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '过来见见我们的员工。', words: ['come', 'and', 'meet', 'our', 'employees'], answer: 'come and meet our employees' },

        // 6. what vs who
        { type: 'lesson', title: '特殊疑问词：What 与 Who', content: "<p style=\"text-align: left; margin-bottom: 15px;\">• <b style=\"color: var(--primary-color);\">What</b> (什么)：用来问事、物、名字、国籍、工作。<br>  What are their jobs? / What is your nationality?<br><br>• <b style=\"color: var(--secondary-color);\">Who</b> (谁)：专门用来问人。<br>  Who is this young man? / Who are those girls?</p>" },
        { type: 'mcq', module: '语法侦探', question: '- ___ are those girls?<br>- They are my students.', hint: '那些女孩是谁？', options: ['Who', 'What'], answer: 'Who' },
        { type: 'mcq', module: '语法侦探', question: '- ___ that lovely girl?<br>- She is my little sister.', hint: '那个可爱的女孩是谁？', options: ['Who is', 'What is'], answer: 'Who is' },
        { type: 'mcq', module: '语法侦探', question: '- ___ her job?<br>- She is a doctor.', hint: '她的工作是什么？', options: ['What is', 'Who is'], answer: 'What is' }
    ],
    "15": [
        // 1. customs & tourist
        { type: 'lesson', title: '旅游词汇：海关与游客', content: "<p style=\"text-align: left; margin-bottom: 15px;\">• <b style=\"color: var(--primary-color);\">customs</b> (海关)：go through customs / walk through customs (通过海关)<br>• <b style=\"color: var(--secondary-color);\">tourist</b> (游客)：A lot of tourists.<br><br><i>扩展词汇</i>：visit(拜访) ➡️ visitor(拜访者)；travel(旅行) ➡️ traveler(旅行者)。</p>" },
        { type: 'mcq', module: '词汇辨析', question: 'He is a ___.', hint: '他是一个游客。', options: ['tourist', 'visitor'], answer: 'tourist' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '通过海关。', words: ['go', 'through', 'customs'], answer: 'go through customs' },
        { type: 'mcq', module: '词汇辨析', question: 'A lot of ___.', hint: '许多游客。', options: ['tourists', 'tourist'], answer: 'tourists' },

        // 2. are you / are they
        { type: 'lesson', title: '一般疑问句：主谓要一致！', content: "<p style=\"text-align: left; margin-bottom: 15px;\">用 be 动词提问时，主语和回答一定要对应：<br><br>• <b>Are you (你们)</b> Swedish? ➡️ Yes, <b>we are</b>. / No, <b>we are not</b>.<br>• <b>Are your friends (他们)</b> Japanese? ➡️ Yes, <b>they are</b>. / No, <b>they aren't</b>.<br><br><i>提问和回答要死死绑定，不要乱串门哦。</i></p>" },
        { type: 'mcq', module: '情景小侦探', question: "- Are they dogs?<br>- Yes, ___.", hint: '是的，它们是。', options: ['they are', 'it is'], answer: 'they are' },
        { type: 'mcq', module: '语法侦探', question: '- Are you Swedish?<br>- Yes, ___.', hint: '是的，我们是。', options: ['we are', 'you are'], answer: 'we are' },
        { type: 'mcq', module: '语法侦探', question: '- Are your friends Japanese?<br>- No, ___.', hint: '不，他们不是。', options: ["they aren't", "we aren't"], answer: "they aren't" },

        // 3. 复数加s/es
        { type: 'lesson', title: '名词变复数：s 和 es 的游戏', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b>1. 大多数情况加 s：</b><br>• caps (在清辅音后读 /s/)<br>• bags (在浊辅音后读 /z/)<br><br><b>2. 以 x, s, sh, ch 结尾加 es：</b><br>• bus ➡️ buses<br>• watch ➡️ watches<br>• box ➡️ boxes<br>• brush ➡️ brushes<br><i>(加了 es 后，发音都是 /ɪz/)</i></p>" },
        { type: 'mcq', module: '词汇辨析', question: 'There are some ___ on the table.', hint: '桌子上有一些橙子。', options: ['oranges', 'orange'], answer: 'oranges' },
        { type: 'mcq', module: '词汇辨析', question: '- We are ___.<br>- We come from Denmark.', hint: '我们是丹麦人。', options: ['Danish', 'Denmark'], answer: 'Danish' },
        { type: 'mcq', module: '单词拼图', question: 'one bus ➡️ two ___', hint: '两辆公交车', options: ['buses', 'buss'], answer: 'buses' }
    ],
    "13": [
        // 1. 颜色与 same
        { type: 'lesson', title: '重点词汇：颜色与相同', content: "<p style=\"text-align: left; margin-bottom: 15px;\">扩展颜色词汇：<b style=\"color: var(--primary-color);\">green</b> (绿), <b style=\"color: var(--secondary-color);\">pink</b> (粉), <b style=\"color: #f59e0b;\">purple</b> (紫)。<br><br><b style=\"color: #10b981;\">same</b> (相同的)：<br>使用 same 时，前面<b style=\"color: var(--error-color);\">必须加上 the</b>！<br>• We are in <b>the same</b> class. (我们在同一个班)<br>• The twins look <b>the same</b>. (这对双胞胎长得一样)</p>" },
        { type: 'mcq', module: '语法侦探', question: 'We are in ___ city.', hint: '我们在同一个城市。', options: ['the same', 'same'], answer: 'the same' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我们在同一个班。', words: ['we', 'are', 'in', 'the', 'same', 'class'], answer: 'we are in the same class' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '这对双胞胎长得一样。', words: ['the', 'twins', 'look', 'the', 'same'], answer: 'the twins look the same' },

        // 2. come 与 upstairs
        { type: 'lesson', title: '动作短语：过来与上楼', content: "<p style=\"text-align: left; margin-bottom: 15px;\">• <b style=\"color: var(--primary-color);\">come on</b>: 加油 / 快点<br>• <b style=\"color: var(--secondary-color);\">come from</b>: 来自 (I come from China)<br><br>楼上楼下：<br>• <b style=\"color: #f59e0b;\">upstairs</b> (在楼上)：go upstairs (上楼)<br>• <b style=\"color: #10b981;\">downstairs</b> (在楼下)：go downstairs (下楼)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '上来。', words: ['come', 'upstairs'], answer: 'come upstairs' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '下楼去。', words: ['go', 'downstairs'], answer: 'go downstairs' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '过来。', words: ['come', 'here'], answer: 'come here' },

        // 3. what color
        { type: 'lesson', title: '特殊疑问句：问颜色', content: "<p style=\"text-align: left; margin-bottom: 15px;\">想知道什么颜色，就把 <b style=\"color: var(--primary-color);\">What color</b> 放句首：<br><br>• <b>What color</b> is your new dress? (你的新裙子是什么颜色？)<br>• <b>What color</b> is his shirt? (他的衬衫是什么颜色？)</p>" },
        { type: 'mcq', module: '情景小侦探', question: '- ___ is your cap?<br>- It\'s yellow.', hint: '你的帽子是什么颜色的？', options: ['What color', 'What'], answer: 'What color' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '你的新裙子是什么颜色？', words: ['what', 'color', 'is', 'your', 'new', 'dress', '?'], answer: 'what color is your new dress ?' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '他的衬衫是什么颜色？', words: ['what', 'color', 'is', 'his', 'shirt', '?'], answer: 'what color is his shirt ?' },

        // 4. and 目的
        { type: 'lesson', title: '语法点滴：and 表目的', content: "<p style=\"text-align: left; margin-bottom: 15px;\">在祈使句里，我们常常用 <b style=\"color: var(--primary-color);\">and</b> 来连接两个动作，后面的动作表示目的：<br><br>• Come upstairs <b>and</b> see it. (快上楼去看看它。)<br>• Come <b>and</b> look. (过来看看。)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '快上楼去看看它。', words: ['come', 'upstairs', 'and', 'see', 'it'], answer: 'come upstairs and see it' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '过来看看。', words: ['come', 'and', 'look'], answer: 'come and look' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '去帮帮他。', words: ['go', 'and', 'help', 'him'], answer: 'go and help him' },

        // 5. 形容词作表语和定语
        { type: 'lesson', title: '句型转换：这是一件漂亮的裙子', content: "<p style=\"text-align: left; margin-bottom: 15px;\">形容词的位置非常灵活，咱们来做个句型大变身：<br><br>• This dress is nice. (这条裙子很漂亮。 - Nice 作表语)<br>➡️ <b style=\"color: var(--primary-color);\">It's a nice dress.</b> (这是一条漂亮的裙子。 - Nice 成了定语修饰 dress)<br><br>• That pen is short. (那支笔很短。)<br>➡️ <b style=\"color: var(--secondary-color);\">It's a short pen.</b> (这是一支短笔。)</p>" },
        { type: 'mcq', module: '句型魔法师', question: "This coat is smart. -> It's a ___ coat.", hint: '这是一件时髦的外套。', options: ['smart', 'smartly'], answer: 'smart' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '这是一条漂亮的裙子。', words: ["it's", 'a', 'nice', 'dress'], answer: "it's a nice dress" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '这是一支短笔。', words: ["it's", 'a', 'short', 'pen'], answer: "it's a short pen" }
    ],
    "141": [
        // 1. excited vs exciting
        { type: 'lesson', title: '词法大爆炸：excited 与 exciting', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">excited</b>: 感到激动的（通常修饰人）。<br>• Sally was excited. (Sally很激动。)<br>• I'm excited about the trip tomorrow. (我对明天去旅行这件事儿感到很兴奋。)<br><br><b style=\"color: var(--secondary-color);\">exciting</b>: 令人兴奋的，刺激的（通常修饰物或事）。<br>• Isn't it exciting, he says. (这真是太让人兴奋了。)<br>• The movie is exciting. (这部电影很刺激。)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我对明天去旅行这件事儿感到很兴奋。', words: ["I'm", 'excited', 'about', 'the', 'trip', 'tomorrow'], answer: "I'm excited about the trip tomorrow" },
        { type: 'mcq', module: '词汇侦探', question: 'The movie is ___.', hint: '这部电影很刺激。', options: ['exciting', 'excited'], answer: 'exciting' },
        { type: 'mcq', module: '词汇侦探', question: 'Sally was ___.', hint: 'Sally很激动。', options: ['excited', 'exciting'], answer: 'excited' },

        // 2. amused vs amusing / embarrassed vs embarrassing
        { type: 'lesson', title: '词汇拓展：更多 -ed 与 -ing 形容词', content: "<p style=\"text-align: left; margin-bottom: 15px;\">许多形容词都有这种规律：<br><br><b>amused (感到好笑的) vs amusing (令人发笑的)</b><br>• Sally was amused. (她觉得这件事挺好笑的。)<br>• The lady was amusing. (这位女士很好笑。)<br><br><b>embarrassed (感到尴尬的) vs embarrassing (让人尴尬的)</b><br>• I was embarrassed. (我好尴尬呀。)<br>• It was so embarrassing. (太让人尴尬了。)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '她觉得这件事挺好笑的。', words: ['Sally', 'was', 'amused'], answer: 'Sally was amused' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我好尴尬呀。', words: ['I', 'was', 'embarrassed'], answer: 'I was embarrassed' },
        { type: 'mcq', module: '语法侦探', question: 'It was so ___.', hint: '太让人尴尬了。', options: ['embarrassing', 'embarrassed'], answer: 'embarrassing' },

        // 3. get on / get off / get on with
        { type: 'lesson', title: '重点短语：get 的方位搭配', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">get on</b>: 登上（火车、公交等）。<br>• Where do we get on the bus? (我们在哪里上公交车呀？)<br><br><b style=\"color: var(--secondary-color);\">get off</b>: 下车。<br>• Where do we get off the bus? (我们在哪里下车呢？)<br><br><b>get on with</b>: 着手/继续做某事。<br>• Jane got on with her work. (Jane继续做着她的工作。)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我们在哪里下车呢？', words: ['where', 'do', 'we', 'get', 'off', 'the', 'bus', '?'], answer: 'where do we get off the bus ?' },
        { type: 'mcq', module: '介词侦探', question: 'Jane got ___ with her work.', hint: 'Jane继续做着她的工作。', options: ['on', 'off'], answer: 'on' },
        { type: 'mcq', module: '介词侦探', question: 'Where do we get ___ the bus?', hint: '我们在哪里上公交车呀？', options: ['on', 'up'], answer: 'on' },

        // 4. opposite
        { type: 'lesson', title: '重点词汇：opposite (在对面 / 相反的)', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">opposite</b> 可以做介词，表示“在……的对面”：<br>• sat opposite Sally (坐在Sally的对面)<br>• Jenny sat opposite him at breakfast. (Jenny吃早餐的时候就坐在他的对面。)<br><br>它也可以做形容词，表示“相反的，完全对立的”：<br>• opposite direction (相反的方向)<br>• She is completely opposite to me. (她和我完全对立。)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: 'Jenny吃早餐的时候就坐在他的对面。', words: ['Jenny', 'sat', 'opposite', 'him', 'at', 'breakfast'], answer: 'Jenny sat opposite him at breakfast' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '她和我完全对立。', words: ['she', 'is', 'completely', 'opposite', 'to', 'me'], answer: 'she is completely opposite to me' },
        { type: 'mcq', module: '词汇侦探', question: 'He went to the ___ direction.', hint: '他去了相反的方向。', options: ['opposite', 'same'], answer: 'opposite' },

        // 5. curiously / curious
        { type: 'lesson', title: '词法大爆炸：curious 与 curiously', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">curious</b> 是形容词，表示“好奇的” (be curious about 对……好奇)：<br>• Steve was curious about the universe. (史蒂夫对宇宙很好奇。)<br>• Sally was curious about everything. (Sally对一切都很好奇。)<br><br><b style=\"color: var(--secondary-color);\">curiously</b> 是副词，用来修饰动词：<br>• \"Are you an artist?\" Sarah asked curiously. (\"你是画家吗？\" Sarah好奇地问道。)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: 'Sally对一切都很好奇。', words: ['Sally', 'was', 'curious', 'about', 'everything'], answer: 'Sally was curious about everything' },
        { type: 'mcq', module: '词汇侦探', question: 'Steve was curious ___ the universe.', hint: '史蒂夫对宇宙很好奇。', options: ['about', 'of'], answer: 'about' },
        { type: 'mcq', module: '词法大爆炸', question: 'Sarah asked ___.', hint: 'Sarah好奇地问道。', options: ['curiously', 'curious'], answer: 'curiously' },

        // 6. powder / compact
        { type: 'lesson', title: '生活词汇：粉末与粉盒', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">powder</b> (粉末 / 擦粉)：<br>• She put some powder on her face. (她往脸上拍了拍粉。)<br>• add more milk powder (再加一点奶粉)<br>• She powdered her face. (她往脸上擦了一点粉。)<br><br><b style=\"color: var(--secondary-color);\">compact</b> (带镜化妆盒 / 小巧紧凑的)：<br>• She took a compact with her. (她带了带镜化妆盒。)<br>• The kitchen is compact, but well equipped. (这个厨房空间很小很紧凑，但是设备俱全。)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '她往脸上擦了一点粉。', words: ['she', 'powdered', 'her', 'face'], answer: 'she powdered her face' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '她往脸上拍了拍粉。', words: ['she', 'put', 'some', 'powder', 'on', 'her', 'face'], answer: 'she put some powder on her face' },
        { type: 'mcq', module: '词义辨析', question: 'The kitchen is compact, but well equipped. 这句话中 compact 的意思是：', hint: '小巧紧凑的', options: ['小巧紧凑的', '带镜化妆盒'], answer: '小巧紧凑的' },

        // 7. ugly / pretty / beautiful
        { type: 'lesson', title: '词汇辨析：美与丑', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--error-color);\">ugly</b>: 丑陋的。<br>• She gives me an ugly hat. (她给了我一顶特别难看的帽子。)<br><br><b style=\"color: var(--primary-color);\">pretty</b>: 漂亮的（常用于日常表达）。<br>• She is a pretty girl. (她是个漂亮的女孩。)<br><br><b style=\"color: var(--secondary-color);\">beautiful</b>: 美丽的（程度更深）。<br>• She is a very beautiful woman. (她是一个非常美丽的女人。)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '她给了我一顶特别难看的帽子。', words: ['she', 'gives', 'me', 'an', 'ugly', 'hat'], answer: 'she gives me an ugly hat' },
        { type: 'mcq', module: '词汇辨析', question: 'She is a ___ girl.', hint: '她是个漂亮的女孩。', options: ['pretty', 'ugly'], answer: 'pretty' },
        { type: 'mcq', module: '词汇侦探', question: 'She is a very ___ woman.', hint: '她是一个非常美丽的女人。', options: ['beautiful', 'beautifully'], answer: 'beautiful' },

        // 8. 复合形容词 (数联名单)
        { type: 'lesson', title: '语法重点：数联名单', content: "<p style=\"text-align: left; margin-bottom: 15px;\">我们有一个口诀叫 <b style=\"color: var(--primary-color);\">数联名单</b>：当“数字”和“名词”之间用连字符(-)连接作定语时，名词必须用<b style=\"color: var(--error-color);\">单数</b>形式。<br><br>• my four-year-old daughter (我四岁的女儿) <i>(不能用 years)</i><br>• my six-year-old son (我六岁的儿子)<br>• a two-year-old dog (一条两岁的狗)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我六岁的儿子', words: ['my', 'six-year-old', 'son'], answer: 'my six-year-old son' },
        { type: 'mcq', module: '语法侦探', question: 'Jack is a ___ boy.', hint: '杰克是一个五岁的男孩。', options: ['five-year-old', 'five-years-old'], answer: 'five-year-old' },
        { type: 'mcq', module: '语法侦探', question: 'It is a ___ dog.', hint: '一条两岁的狗。', options: ['two-year-old', 'two-years-old'], answer: 'two-year-old' },

        // 9. 被动语态 (be + done)
        { type: 'lesson', title: '语法大爆炸：被动语态', content: "<p style=\"text-align: left; margin-bottom: 15px;\">当动作是主语“被”执行的时，需要用到<b style=\"color: var(--primary-color);\">被动语态</b>。<br>结构：<b style=\"color: var(--secondary-color);\">be 动词 + 过去分词 (done) + (by ...)</b><br><br>• This book <b>was published</b> in 1981. (这本书出版于1981年。)<br>• The bread <b>is eaten</b> by the dog. (面包被狗吃了。)<br>• A new cinema <b>is built</b> here. (这里建了一个新的电影院。)<br>• Some pens <b>were bought</b> by them. (一些笔被他们买了。)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '面包被狗吃了。', words: ['the', 'bread', 'is', 'eaten', 'by', 'the', 'dog'], answer: 'the bread is eaten by the dog' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '这里建了一个新的电影院。', words: ['a', 'new', 'cinema', 'is', 'built', 'here'], answer: 'a new cinema is built here' },
        { type: 'mcq', module: '语法侦探', question: 'This book ___ in 1981.', hint: '这本书出版于1981年。', options: ['was published', 'published'], answer: 'was published' },

        // 10. be dressed in
        { type: 'lesson', title: '短语辨析：穿着 (be dressed in vs wear)', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">be dressed in</b> 用来表示“穿着某种衣服的状态”，用法类似于 wear：<br><br>• The lady was dressed in a blue coat and a large funny hat. (这位女士穿着一件蓝色的大衣和一顶大而滑稽的帽子。)<br>• Jim was dressed in a white jacket. (Jim穿着一件白色的夹克。)<br>• He wears a blue coat. (他穿着一件蓝色大衣。)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: 'Jim穿着一件白色的夹克。', words: ['Jim', 'was', 'dressed', 'in', 'a', 'white', 'jacket'], answer: 'Jim was dressed in a white jacket' },
        { type: 'mcq', module: '词汇搭档', question: 'The lady was dressed ___ a blue coat.', hint: '这位女士穿着一件蓝色的大衣。', options: ['in', 'with'], answer: 'in' },
        { type: 'mcq', module: '词汇侦探', question: 'He ___ a blue coat.', hint: '他穿着一件蓝色大衣。', options: ['wears', 'dressed'], answer: 'wears' },

        // 11. make up
        { type: 'lesson', title: '一词多义：make up', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">make up</b> 的含义非常丰富：<br><br>1. <b>化妆</b>：She then began to make up her face. (她就开始打扮起来。)<br>2. <b>编造</b>：It's unkind to make up stories about others. (编造别人的故事对别人很不好。)<br>3. <b>和好</b>：At last they made up. (最后他们和好如初了。)<br><br>💡 合在一起 <b style=\"color: var(--secondary-color);\">makeup</b> 还可以作名词表示“化妆品”。</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '编造别人的故事对别人很不好。', words: ["it's", 'unkind', 'to', 'make', 'up', 'stories', 'about', 'others'], answer: "it's unkind to make up stories about others" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '最后他们和好如初了。', words: ['at', 'last', 'they', 'made', 'up'], answer: 'at last they made up' },
        { type: 'mcq', module: '词义辨析', question: 'She then began to make up her face. 这句话中 make up 的意思是：', hint: '化妆', options: ['化妆', '编造'], answer: '化妆' },

        // 12. put away
        { type: 'lesson', title: '短语搭档：put away', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">put away</b> 表示“收好，放到一边放好”：<br><br>• She put away her compact and smiled kindly. (她把她的粉盒收起来了，友好的微笑着。)<br>• Would you put away your toys? (你能把玩具给收好吗？)<br>• Put away your shoes. (把鞋子给放好。)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '你能把玩具给收好吗？', words: ['would', 'you', 'put', 'away', 'your', 'toys', '?'], answer: 'would you put away your toys ?' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '把鞋子给放好。', words: ['put', 'away', 'your', 'shoes'], answer: 'put away your shoes' },
        { type: 'mcq', module: '情景小侦探', question: 'Would you ___ your toys?', hint: '你能把玩具给收好吗？', options: ['put away', 'put on'], answer: 'put away' }
    ],
    "143": [
        // 1. be surrounded by
        { type: 'lesson', title: '重点短语：被...包围 (be surrounded by)', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">surround</b> 作为及物动词常常用于被动语态，表示“被……包围”：<br><br>• He is surrounded by blue balloons. (他被蓝色的气球包围着。)<br>• I was surrounded by the enemies. (我被敌人包围啦。)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我被敌人包围啦。', words: ['I', 'was', 'surrounded', 'by', 'the', 'enemies'], answer: 'I was surrounded by the enemies' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '他被蓝色的气球包围着。', words: ['he', 'is', 'surrounded', 'by', 'blue', 'balloons'], answer: 'he is surrounded by blue balloons' },
        { type: 'mcq', module: '介词侦探', question: 'I was surrounded ___ the enemies.', hint: '我被敌人包围啦。', options: ['by', 'with'], answer: 'by' },

        // 2. wood vs woods
        { type: 'lesson', title: '词汇辨析：wood 的单复数奥秘', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">wood (不可数)</b>：木头，木材。<br>• Their house was made of wood. (他们的房子是用木头建造的。)<br><br><b style=\"color: var(--secondary-color);\">woods (复数)</b>：树林。<br>• a walk through the woods (林中散步)<br>• Alice went for a walk in the woods after dinner. (Alice晚饭后去树林里散步。)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: 'Alice晚饭后去树林里散步。', words: ['Alice', 'went', 'for', 'a', 'walk', 'in', 'the', 'woods', 'after', 'dinner'], answer: 'Alice went for a walk in the woods after dinner' },
        { type: 'mcq', module: '词汇侦探', question: 'Their house was made of ___.', hint: '他们的房子是用木头建造的。', options: ['wood', 'woods'], answer: 'wood' },
        { type: 'mcq', module: '词义辨析', question: 'in the woods 的意思是：', hint: '在树林里', options: ['在树林里', '在木头里'], answer: '在树林里' },

        // 3. through vs across
        { type: 'lesson', title: '介词辨析：穿过 (through vs across)', content: "<p style=\"text-align: left; margin-bottom: 15px;\">这两个词都可以表示“穿过”，但是路径大不相同：<br><br>1. <b style=\"color: var(--primary-color);\">through</b>：从内部穿过（立体空间）。<br>• The sunlight goes through the window. (阳光从窗户透过来。)<br><br>2. <b style=\"color: var(--secondary-color);\">across</b>：从表面穿过（平面从一端到另一端）。<br>• Don't run across the road. (不要横穿马路。)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '阳光从窗户透过来。', words: ['the', 'sunlight', 'goes', 'through', 'the', 'window'], answer: 'the sunlight goes through the window' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '不要横穿马路。', words: ["don't", 'run', 'across', 'the', 'road'], answer: "don't run across the road" },
        { type: 'mcq', module: '介词侦探', question: 'I saw him ___ the window.', hint: '我透过窗户看到了他。', options: ['through', 'across'], answer: 'through' },

        // 4. litter
        { type: 'lesson', title: '词法大爆炸：litter 的多重身份', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">litter 作名词</b>：垃圾，杂乱的东西。<br>• Don't leave litter on the ground. (不要在地上留下垃圾。)<br><br><b style=\"color: var(--secondary-color);\">litter 作动词</b>：乱扔 / 散落。<br>• No littering. (不要乱扔垃圾。)<br>• Broken bottles littered the sidewalk. (碎掉的瓶子散落在人行道上。)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '不要在地上留下垃圾。', words: ["don't", 'leave', 'litter', 'on', 'the', 'ground'], answer: "don't leave litter on the ground" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '碎掉的瓶子散落在人行道上。', words: ['broken', 'bottles', 'littered', 'the', 'sidewalk'], answer: 'broken bottles littered the sidewalk' },
        { type: 'mcq', module: '常识标志', question: '我们在公园常常看到的 No ___ 表示“不要乱扔垃圾”。', hint: '不要乱扔垃圾', options: ['littering', 'litter'], answer: 'littering' },

        // 5. throw 的搭配
        { type: 'lesson', title: '动词短语：throw 的常见搭配', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">throw</b> 表示“扔、抛”：<br>• He's throwing stones into the river. (他在朝河里扔石子。)<br><br><b>💡 常见短语：</b><br>• <b style=\"color: var(--secondary-color);\">throw away</b> (扔掉)：Throw away those boxes. (把那些垃圾给扔掉。)<br>• <b style=\"color: var(--error-color);\">throw up</b> (呕吐)：I'm going to throw up. (我想要吐啦。) / That smell makes me want to throw up. (那个味道让人想吐。)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '他在朝河里扔石子。', words: ["he's", 'throwing', 'stones', 'into', 'the', 'river'], answer: "he's throwing stones into the river" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '把那些盒子给扔掉。', words: ['throw', 'away', 'those', 'boxes'], answer: 'throw away those boxes' },
        { type: 'mcq', module: '情景小侦探', question: 'That smell makes me want to ___.', hint: '那个味道让人想吐。', options: ['throw up', 'throw away'], answer: 'throw up' },

        // 6. count
        { type: 'lesson', title: '一词多义：count (数与算数)', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">count</b> 可以表示轻点数字：<br>• I'm counting the stars in the sky. (我在数天上的星星。)<br>• Let's <b>count down</b> from ten to zero. (我们从十倒数到零吧。)<br><br>它还可以表示“算数，作数”：<br>• It doesn't count this time. (这一次不算。)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我们在数天上的星星。', words: ["I'm", 'counting', 'the', 'stars', 'in', 'the', 'sky'], answer: "I'm counting the stars in the sky" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我们从十倒数到零吧。', words: ["let's", 'count', 'down', 'from', 'ten', 'to', 'zero'], answer: "let's count down from ten to zero" },
        { type: 'mcq', module: '情景小侦探', question: '- You made a mistake.<br>- It doesn\'t ___ this time.', hint: '这一次不算。', options: ['count', 'count down'], answer: 'count' },

        // 7. cover
        { type: 'lesson', title: '重点词汇：cover', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">cover (动词) 覆盖：</b><br>• The clouds had covered the entire sky. (乌云遮蔽了整个天空。)<br>• The desk was <b>covered with</b> papers. (桌子被铺满了纸片。)<br><br><b style=\"color: var(--secondary-color);\">cover (名词) 封面/套子：</b><br>• I want a sofa with washable covers. (我想要一张沙发，它的沙发套可以拆洗。)<br>• the cover of the book (书的封面)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '乌云遮蔽了整个天空。', words: ['the', 'clouds', 'had', 'covered', 'the', 'entire', 'sky'], answer: 'the clouds had covered the entire sky' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '桌子被铺满了纸片。', words: ['the', 'desk', 'was', 'covered', 'with', 'papers'], answer: 'the desk was covered with papers' },
        { type: 'mcq', module: '词汇侦探', question: 'I want a sofa with washable ___.', hint: '我想要一张带可拆洗沙发套的沙发。', options: ['covers', 'papers'], answer: 'covers' },

        // 8. between vs among
        { type: 'lesson', title: '介词辨析：在……之间', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">between</b>：用于<b style=\"color: var(--error-color);\">两者</b>之间。<br>• We tied a rope between two trees. (我们在两棵树之间系了一根绳子。)<br><br><b style=\"color: var(--secondary-color);\">among</b>：用于<b style=\"color: var(--error-color);\">三者或三者以上</b>的群体之中。<br>• They walked among the crowds. (他们在人群中走。)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我们在两棵树之间系了一根绳子。', words: ['we', 'tied', 'a', 'rope', 'between', 'two', 'trees'], answer: 'we tied a rope between two trees' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '他们在人群中走。', words: ['they', 'walked', 'among', 'the', 'crowds'], answer: 'they walked among the crowds' },
        { type: 'mcq', module: '介词侦探', question: '___ the four movies, which do you like best?', hint: '在这四部电影之中，你哪一部最喜欢？', options: ['Among', 'Between'], answer: 'Among' },

        // 9. prosecute
        { type: 'lesson', title: '重点词汇：依法处置 (prosecute)', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">prosecute</b>: 依法处置，起诉。<br><br>• You will be prosecuted. (你会被依法处置的。)<br>• Anyone will be prosecuted. (任何人都会被依法处置。)<br>• He decided to prosecute her. (他决定去起诉她。)<br>• The police decided not to prosecute. (警方决定不对他进行起诉。)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '他决定去起诉她。', words: ['he', 'decided', 'to', 'prosecute', 'her'], answer: 'he decided to prosecute her' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '警方决定不对他进行起诉。', words: ['the', 'police', 'decided', 'not', 'to', 'prosecute'], answer: 'the police decided not to prosecute' },
        { type: 'mcq', module: '语法侦探', question: 'Anyone will be ___.', hint: '任何人都会被依法处置。', options: ['prosecuted', 'prosecute'], answer: 'prosecuted' },

        // 10. keep + 宾语 + 宾补
        { type: 'lesson', title: '句型结构：保持……状态 (keep)', content: "<p style=\"text-align: left; margin-bottom: 15px;\">我们经常使用 <b style=\"color: var(--primary-color);\">keep + 宾语 + 宾语补足语</b> 的结构来表示保持某种状态：<br><br>• Visitors have been asked to keep the woods clean and tidy. (游客被要求保持树林干净整洁。)<br>• Please keep the door and the window open. (请保持门窗打开。)<br>• The noise kept him awake. (噪音让他睡不着 / 醒着。)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '请保持门窗打开。', words: ['please', 'keep', 'the', 'door', 'and', 'the', 'window', 'open'], answer: 'please keep the door and the window open' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '噪音让他睡不着。', words: ['the', 'noise', 'kept', 'him', 'awake'], answer: 'the noise kept him awake' },
        { type: 'mcq', module: '语法侦探', question: 'Please keep the room ___.', hint: '请保持房间干净。', options: ['clean', 'cleanly'], answer: 'clean' },

        // 11. 现在完成时的被动语态
        { type: 'lesson', title: '时态进阶：现在完成时的被动语态', content: "<p style=\"text-align: left; margin-bottom: 15px;\">当某事“已经被”做完时，我们使用<b style=\"color: var(--primary-color);\">现在完成时的被动语态</b>。<br>结构：<b style=\"color: var(--secondary-color);\">have/has + been + 过去分词</b><br><br>• His novel has been published. (他的小说已经被出版啦。)<br>• I've been told not to go there. (我被告知不要去那里。)<br>• Mary has been taken good care of. (玛丽已经得到了很好的照顾。)<br>• The letter has been received by him. (信已经被他收到了。)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '他的小说已经被出版啦。', words: ['his', 'novel', 'has', 'been', 'published'], answer: 'his novel has been published' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '信已经被他收到了。', words: ['the', 'letter', 'has', 'been', 'received', 'by', 'him'], answer: 'the letter has been received by him' },
        { type: 'mcq', module: '语法侦探', question: 'Mary ___ taken good care of.', hint: '玛丽已经得到了很好的照顾。', options: ['has been', 'have been'], answer: 'has been' },

        // 12. 主语从句
        { type: 'lesson', title: '语法大爆炸：主语从句', content: "<p style=\"text-align: left; margin-bottom: 15px;\">如果句子的主语本身是一个完整的句子，那么这就是<b style=\"color: var(--primary-color);\">主语从句</b>。常用的引导词有：<br><br>1. <b>what</b> (关系代词)：<br>• What I saw made me very sad. (我看见的让我非常伤心。)<br>• What I wanna know is this. (我想知道的就是这件事情。)<br>2. <b>that</b> (陈述事实)：<br>• That you will win the medal seems unlikely. (你想获得奖牌的这件事情看起来是不可能的。)<br>3. <b>if/whether</b> (是否)：<br>• Whether she is coming or not doesn't matter. (她来不来这件事情都不重要。)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我看见的让我非常伤心。', words: ['what', 'I', 'saw', 'made', 'me', 'very', 'sad'], answer: 'what I saw made me very sad' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我想知道的就是这件事情。', words: ['what', 'I', 'wanna', 'know', 'is', 'this'], answer: 'what I wanna know is this' },
        { type: 'mcq', module: '语法侦探', question: '___ she is coming or not doesn\'t matter.', hint: '她来不来这件事情都不重要。', options: ['Whether', 'What'], answer: 'Whether' },

        // 13. 一般将来时的被动语态
        { type: 'lesson', title: '时态进阶：一般将来时的被动语态', content: "<p style=\"text-align: left; margin-bottom: 15px;\">当某事在未来“将被”发生时，使用<b style=\"color: var(--primary-color);\">一般将来时的被动语态</b>。<br>结构：<b style=\"color: var(--secondary-color);\">will + be + 过去分词</b><br><br>• You will be punished by dad. (你会被爸爸惩罚的。)<br>• The meeting won't be held tomorrow. (明天不会举行会议。)<br><br>💡 注意：无论人称怎么变化，will 后面永远跟原形 be 喔！</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '你会被爸爸惩罚的。', words: ['you', 'will', 'be', 'punished', 'by', 'dad'], answer: 'you will be punished by dad' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '明天不会举行会议。', words: ['the', 'meeting', "won't", 'be', 'held', 'tomorrow'], answer: 'the meeting won\'t be held tomorrow' },
        { type: 'mcq', module: '语法侦探', question: 'The meeting ___ held tomorrow.', hint: '明天不会举行会议。', options: ["won't be", "won't"], answer: "won't be" }
    ],
    "41": [
        // 1. 不可数名词
        { type: 'lesson', title: '语法大爆炸：不可数名词', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">不可数名词</b>：无法直接用数字数的名词（如液体、食物等），前面不能直接加 a/an。<br><br>常见不可数名词：<br>• cheese (奶酪) / bread (面包) / meat (肉)<br>• chocolate (巧克力) / sugar (糖)<br>• coffee (咖啡) / milk (牛奶) / tea (茶)<br>• juice (果汁) / lemonade (柠檬汁)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '桌子上有一片面包。', words: ['there', 'is', 'a', 'piece', 'of', 'bread', 'on', 'the', 'table'], answer: 'there is a piece of bread on the table' },
        { type: 'mcq', module: '语法侦探', question: '下面哪一个词是不可数名词？', hint: '糖', options: ['sugar', 'apple'], answer: 'sugar' },
        { type: 'mcq', module: '语法侦探', question: '下面哪一个词是不可数名词？', hint: '肉', options: ['meat', 'egg'], answer: 'meat' },

        // 2. tobacco vs cigarette / candy vs sweet
        { type: 'lesson', title: '词汇辨析：容易混淆的词', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">tobacco (烟草 / 烟丝) vs cigarette (香烟)</b><br>• This tin of tobacco is yours. (这罐烟丝是给你的。)<br><br><b style=\"color: var(--secondary-color);\">candy (美式) vs sweet (英式)</b><br>• Well, you can eat some sweets. (好吧，你可以吃一点糖。)<br>💡 注意：sugar 指调味用的白砂糖，而 candy/sweet 指包装好的糖果。</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '这罐烟丝是给你的。', words: ['this', 'tin', 'of', 'tobacco', 'is', 'yours'], answer: 'this tin of tobacco is yours' },
        { type: 'mcq', module: '词汇辨析', question: '___ 经常用于英式英语，表示“糖果”。', hint: '糖果', options: ['sweet', 'sugar'], answer: 'sweet' },
        { type: 'mcq', module: '词汇辨析', question: '___ 表示散装的烟丝或烟草成分。', hint: '烟草', options: ['tobacco', 'cigarette'], answer: 'tobacco' },

        // 3. 计量不可数名词的短语
        { type: 'lesson', title: '重点语法：不可数名词的量词', content: "<p style=\"text-align: left; margin-bottom: 15px;\">怎么数不可数名词？加上表示容器或形状的“量词”！<br><br>• <b style=\"color: var(--primary-color);\">a piece of</b> (一块/片): a piece of cheese (一块奶酪) / a piece of meat (一块肉)<br>• <b style=\"color: var(--primary-color);\">a loaf of</b> (一条): a loaf of bread (一条面包)<br>• <b style=\"color: var(--primary-color);\">a bar of</b> (一小块): a bar of chocolate (一小块巧克力)<br>• <b style=\"color: var(--primary-color);\">a bottle of</b> (一瓶): a bottle of milk (一瓶牛奶) / a bottle of honey (一瓶蜂蜜)<br>• <b style=\"color: var(--primary-color);\">a pound of</b> (一磅): a pound of sugar (一磅糖)<br>• <b style=\"color: var(--primary-color);\">a tin of</b> (一罐): a tin of tobacco (一罐烟丝)<br>• <b style=\"color: var(--primary-color);\">a cup/glass of</b> (一杯): a cup of tea (一杯茶) / a glass of juice (一大玻璃杯果汁)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '一杯柠檬汁', words: ['a', 'cup', 'of', 'lemonade'], answer: 'a cup of lemonade' },
        { type: 'mcq', module: '量词匹配', question: '半瓶牛奶的英文表达是：', hint: '半瓶牛奶', options: ['half a bottle of milk', 'half a cup of milk'], answer: 'half a bottle of milk' },
        { type: 'mcq', module: '量词匹配', question: '一小块巧克力', hint: '一小块巧克力', options: ['a bar of chocolate', 'a loaf of chocolate'], answer: 'a bar of chocolate' },

        // 4. half 与 quarter
        { type: 'lesson', title: '数量表达：一半与四分之一', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">half</b> 表示“一半”：<br>• half an orange (半个橙子)<br>• half a pound of coffee (半磅咖啡)<br>• half past ten (十点半)<br><br><b style=\"color: var(--secondary-color);\">a quarter</b> 表示“四分之一”：<br>• a quarter of an hour (四分之一小时/一刻钟)<br>• a quarter past ten (十点一刻)<br>• a quarter of a pound of tea (四分之一磅茶)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '半个橙子', words: ['half', 'an', 'orange'], answer: 'half an orange' },
        { type: 'mcq', module: '数量侦探', question: '___ of an hour 表示一刻钟。', hint: '四分之一', options: ['a quarter', 'half'], answer: 'a quarter' },
        { type: 'mcq', module: '时间表达', question: '十点一刻可以表达为 ___ past ten.', hint: '一刻', options: ['a quarter', 'half'], answer: 'a quarter' },

        // 5. well 与 certainly
        { type: 'lesson', title: '日常口语：well 与 certainly', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">well</b> 的多重身份：<br>1. 身体好：She is well. (她身体很好。)<br>2. 动作好：Jane can play the piano well. (Jane弹钢琴弹得很不错。)<br>3. 语气词(好吧)：Well, it's certainly not for me. (好吧，反正不是给我的。)<br><br><b style=\"color: var(--secondary-color);\">certainly</b> (肯定地 / 没问题)：<br>• I'm certainly not going there again. (我肯定是不会再去那儿啦。)<br>• Certainly I can help. (当然可以啦。)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: 'Jane弹钢琴弹得很不错。', words: ['Jane', 'can', 'play', 'the', 'piano', 'well'], answer: 'Jane can play the piano well' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我肯定是不会再去那儿啦。', words: ["I'm", 'certainly', 'not', 'going', 'there', 'again'], answer: "I'm certainly not going there again" },
        { type: 'mcq', module: '词汇侦探', question: 'How is she? She is ___.', hint: '她身体很好。', options: ['well', 'good'], answer: 'well' },

        // 6. for
        { type: 'lesson', title: '介词魔法：for 的常见用法', content: "<p style=\"text-align: left; margin-bottom: 15px;\">介词 <b style=\"color: var(--primary-color);\">for</b> 有很多实用含义：<br><br>1. <b>给某人的</b>：Here are some apples for you. (有一些苹果是给你的。)<br>2. <b>对某人来说</b>：It's important for us to learn English. (对我们来说学英语很重要。)<br>3. <b>支持某人</b>：I'm for you forever. (我永远支持你。)<br>💡 补充：I am with you. 也可以表示我支持你。</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '有一些苹果是给你的。', words: ['here', 'are', 'some', 'apples', 'for', 'you'], answer: 'here are some apples for you' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我永远支持你。', words: ["I'm", 'for', 'you', 'forever'], answer: "I'm for you forever" },
        { type: 'mcq', module: '介词侦探', question: 'It\'s important ___ us to learn English.', hint: '对我们来说学英语很重要。', options: ['for', 'to'], answer: 'for' }
    ],
    "43": [
        // 1. 肯定回答与催促
        { type: 'lesson', title: '日常口语：肯定回答与催促', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b>表达“没问题/当然可以”：</b><br>• <b style=\"color: var(--primary-color);\">of course</b>: Of course I can finish it. (没问题，我可以完成它。)<br>• <b style=\"color: var(--primary-color);\">certainly</b>: Certainly I will be back in a few minutes. (当然，我很快就会回来。)<br>• <b style=\"color: var(--primary-color);\">sure</b>: Sure, I'll finish my homework. (没问题，我会完成作业。)<br><br><b>表达催促“快一点”：</b><br>• <b style=\"color: var(--secondary-color);\">hurry up / come on / be quick</b><br>• Hurry up, we are late. (快一点，我们要迟到啦。)<br>相反表达“慢一点”可用 <b style=\"color: var(--error-color);\">slow down</b>。</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '没问题，我可以完成它。', words: ['of', 'course', 'I', 'can', 'finish', 'it'], answer: 'of course I can finish it' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '快一点，我们要迟到啦。', words: ['hurry', 'up', ',', 'we', 'are', 'late'], answer: 'hurry up , we are late' },
        { type: 'mcq', module: '日常交际', question: '想要让别人“慢一点”，你可以说：', hint: '慢一点', options: ['Slow down', 'Hurry up'], answer: 'Slow down' },

        // 2. 容器词汇
        { type: 'lesson', title: '生活词汇：常见容器', content: "<p style=\"text-align: left; margin-bottom: 15px;\">英语中有各种不同用途的容器词汇：<br><br>• <b style=\"color: var(--primary-color);\">kettle</b>: 水壶 (烧水用的)<br>• <b style=\"color: var(--primary-color);\">bottle</b>: 瓶子<br>• <b style=\"color: var(--primary-color);\">teapot</b>: 茶壶 (泡茶用的)<br>• <b style=\"color: var(--primary-color);\">mug</b>: 马克杯 (带柄的大杯子)</p>" },
        { type: 'mcq', module: '常识连线', question: '用来烧水的“水壶”英文是：', hint: '水壶', options: ['kettle', 'teapot'], answer: 'kettle' },
        { type: 'mcq', module: '常识连线', question: '用来泡茶的“茶壶”英文是：', hint: '茶壶', options: ['teapot', 'bottle'], answer: 'teapot' },
        { type: 'mcq', module: '常识连线', question: '通常带手柄的陶瓷“马克杯”英文是：', hint: '马克杯', options: ['mug', 'kettle'], answer: 'mug' },

        // 3. find (找 vs 发现)
        { type: 'lesson', title: '动词魔法：find 的两副面孔', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">find 表“找到”</b>（强调找的结果）：<br>• I can't find a job. (我找不到工作。)<br>• Where can we find the book? (我们在哪里能找到这本书啊？)<br><br><b style=\"color: var(--secondary-color);\">find 表“发现 / 认为”</b> (find + 宾语 + 宾补)：<br>• I find cooking very relaxing. (我发现烹饪非常的让人放松。)<br>• I find jogging very interesting. (我发现慢跑非常有意思。)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我发现烹饪非常的让人放松。', words: ['I', 'find', 'cooking', 'very', 'relaxing'], answer: 'I find cooking very relaxing' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我们在哪里能找到这本书啊？', words: ['where', 'can', 'we', 'find', 'the', 'book', '?'], answer: 'where can we find the book ?' },
        { type: 'mcq', module: '词汇侦探', question: 'I ___ jogging very interesting.', hint: '我发现慢跑非常有意思。', options: ['find', 'look for'], answer: 'find' },

        // 4. can 表达能力
        { type: 'lesson', title: '情态动词：can 表达能力', content: "<p style=\"text-align: left; margin-bottom: 15px;\">情态动词 <b style=\"color: var(--primary-color);\">can</b> 可以用来表达“会”或“能”做某事，后面直接加<b style=\"color: var(--error-color);\">动词原形</b>。<br><br>• I can play the piano. (我会弹钢琴。)<br>• Can you swim? (你会游泳吗？)<br>• Can you answer this question? (你会回答这个问题吗？)<br>• Can you speak English? (你会说英语吗？)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '你会回答这个问题吗？', words: ['can', 'you', 'answer', 'this', 'question', '?'], answer: 'can you answer this question ?' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '你会说中文吗？', words: ['can', 'you', 'speak', 'Chinese', '?'], answer: 'can you speak Chinese ?' },
        { type: 'mcq', module: '语法侦探', question: 'Can you ___ a car?', hint: '你会开车吗？', options: ['drive', 'driving'], answer: 'drive' },

        // 5. there be 一般疑问句
        { type: 'lesson', title: '句型变身：There be 句型的一般疑问句', content: "<p style=\"text-align: left; margin-bottom: 15px;\">把 There be 变成疑问句，只要把 be 动词提前即可，同时记得把肯定句里的 <b style=\"color: var(--error-color);\">some 变成 any</b>！<br><br>• 肯定：There is some water in the bottle. (瓶子里有些水。)<br>• 疑问：<b style=\"color: var(--primary-color);\">Is there any</b> water in the bottle? (瓶子里有水吗？)<br><br>• 肯定：There are some boys.<br>• 疑问：<b style=\"color: var(--primary-color);\">Are there any</b> boys? <br>• 回答：Yes, there are. / No, there aren't.</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '这个水壶里有没有水呀？', words: ['is', 'there', 'any', 'water', 'in', 'this', 'kettle', '?'], answer: 'is there any water in this kettle ?' },
        { type: 'mcq', module: '语法侦探', question: '___ there any bananas?', hint: '有一些香蕉吗？', options: ['Are', 'Is'], answer: 'Are' },
        { type: 'mcq', module: '语法侦探', question: '- Is there a shirt?<br>- Yes, ___.', hint: '是的，有一件。', options: ['there is', 'it is'], answer: 'there is' },

        // 6. 其他零散知识点 (now, boil)
        { type: 'lesson', title: '小知识点合集：now 与 boil', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">now (现在进行时标志词)：</b><br>• I'm cleaning the room now. (我现在正在清理房间。)<br>• What are you doing now? (你现在在干嘛呀？)<br><br><b style=\"color: var(--secondary-color);\">boil (煮，煮沸)：</b><br>• I'm waiting for the water to boil. (我在等水煮开。)<br>• The kettle is boiling. (水壶里的水开了。)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '他现在正在弹吉他。', words: ['he', 'is', 'playing', 'the', 'guitar', 'now'], answer: 'he is playing the guitar now' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我在等水煮开。', words: ["I'm", 'waiting', 'for', 'the', 'water', 'to', 'boil'], answer: "I'm waiting for the water to boil" },
        { type: 'mcq', module: '词汇侦探', question: 'The kettle is ___.', hint: '水壶里的水开了。', options: ['boiling', 'boil'], answer: 'boiling' }
    ],
    "45": [
        // 1. minute / second
        { type: 'lesson', title: '时间词汇：一小会儿', content: "<p style=\"text-align: left; margin-bottom: 15px;\">我们常用时间名词来表达“等一下/一小会儿”：<br><br>• <b style=\"color: var(--primary-color);\">wait a minute</b> / <b style=\"color: var(--primary-color);\">wait a second</b>: 等我一分钟/一秒钟 (引申为：等一下)。<br>• Wait a second, I will be right back. (等我一下，我会马上回来。)<br>• Come here for a minute. (过来一小会儿。)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '等我一下，我会马上回来。', words: ['wait', 'a', 'second', ',', 'I', 'will', 'be', 'right', 'back'], answer: 'wait a second , I will be right back' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '等我五分钟。', words: ['wait', 'for', 'five', 'minutes'], answer: 'wait for five minutes' },
        { type: 'mcq', module: '日常交际', question: '“请等一下”可以说 Wait a ___.', hint: '等一下', options: ['minute', 'time'], answer: 'minute' },

        // 2. ask 的用法
        { type: 'lesson', title: '重点动词：ask (请求与询问)', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">ask 表请求：</b><br>• <b>ask sb for sth</b>: I asked him for a pen. (我请他给我一支笔。)<br>• <b>ask sb to do</b>: My mother asks me to study hard. (我妈妈要求我努力学习。)<br><br><b style=\"color: var(--secondary-color);\">ask 表询问：</b><br>• He wants to ask me some questions. (他想要问我一些问题。)<br>• Amy is asking the way to the store. (Amy正在问去商店的路。)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我向他请求帮助。', words: ['I', 'ask', 'him', 'for', 'help'], answer: 'I ask him for help' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我妈妈要求我努力学习。', words: ['my', 'mother', 'asks', 'me', 'to', 'study', 'hard'], answer: 'my mother asks me to study hard' },
        { type: 'mcq', module: '介词侦探', question: 'I asked him ___ a pen.', hint: '我请他给我一支笔。', options: ['for', 'to'], answer: 'for' },

        // 3. terrible 与 next
        { type: 'lesson', title: '词汇辨析：terrible 与 next', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">terrible (糟糕的/可怕的)：</b><br>• Her French is terrible. (她的法语很糟糕。)<br>• a terrible thought (一个可怕的想法)<br><br><b style=\"color: var(--secondary-color);\">next (下一个/紧挨着)：</b><br>• You can ask the next question. (你可以问下一个问题了。)<br>• Jane lives next door. (Jane住在隔壁。)<br>• The shop is next to the bank. (商店紧挨着银行。)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '商店紧挨着银行。', words: ['the', 'shop', 'is', 'next', 'to', 'the', 'bank'], answer: 'the shop is next to the bank' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '你可以问下一个问题了。', words: ['you', 'can', 'ask', 'the', 'next', 'question'], answer: 'you can ask the next question' },
        { type: 'mcq', module: '词义辨析', question: 'My English is terrible. 句中 terrible 意思是：', hint: '糟糕的', options: ['糟糕的', '极好的'], answer: '糟糕的' },

        // 4. can 表示推测与请求
        { type: 'lesson', title: '情态动词进阶：can 表示推测与请求', content: "<p style=\"text-align: left; margin-bottom: 15px;\">我们学过 can 表示“能力”，它还有其他含义：<br><br>1. <b style=\"color: var(--primary-color);\">表示推测 (可能)</b>：He can be at home. (他可能在家呢。)<br>2. <b style=\"color: var(--secondary-color);\">表示请求 (委婉询问)</b>：Can you come here, please? (可以请你过来一下吗？)<br>3. <b style=\"color: var(--error-color);\">表示允许 (可以)</b>：Can I have a piece of bread? (我可以吃一片面包吗？) / You can drink some juice. (你可以喝一些果汁。)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '他可能在家呢。', words: ['he', 'can', 'be', 'at', 'home'], answer: 'he can be at home' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我可以吃一片面包吗？', words: ['can', 'I', 'have', 'a', 'piece', 'of', 'bread', '?'], answer: 'can I have a piece of bread ?' },
        { type: 'mcq', module: '情景小侦探', question: 'You ___ drink some juice.', hint: '你可以喝一些果汁。', options: ['can', 'must'], answer: 'can' },

        // 5. can 不同句型的变化
        { type: 'lesson', title: '句式转换：情态动词 can', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--error-color);\">注意：情态动词 can 不随主语变化，且后面必须加动词原形！</b><br><br>• 肯定句：Tim can speak English. (Tim会说英语。)<br>• 否定句 (加 not)：You can't (cannot) run on the road. (你不能在路上跑。)<br>• 疑问句 (提至句首)：Can they have some meat? (他们能吃一些肉吗？)<br>• 疑问回答：Yes, he can. / No, they can't.</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '你不能在路上跑。', words: ['you', "can't", 'run', 'on', 'the', 'road'], answer: 'you can\'t run on the road' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: 'Tim会说英语。', words: ['Tim', 'can', 'speak', 'English'], answer: 'Tim can speak English' },
        { type: 'mcq', module: '语法侦探', question: '- Can they dance?<br>- No, ___.', hint: '不，他们不会。', options: ["they can't", "they aren't"], answer: "they can't" },

        // 6. what's the matter
        { type: 'lesson', title: '日常交际：怎么了？', content: "<p style=\"text-align: left; margin-bottom: 15px;\">看到别人有麻烦或不舒服，我们可以这样询问：<br><br>• <b style=\"color: var(--primary-color);\">What's the matter with you?</b> (你怎么了？)<br>• <b style=\"color: var(--primary-color);\">What's wrong with you?</b> (你怎么了？)<br>• <b style=\"color: var(--primary-color);\">What's the trouble with you?</b> (你有什么麻烦吗？)<br>• <b style=\"color: var(--primary-color);\">What happened?</b> (发生什么了？)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '你怎么了？', words: ["what's", 'the', 'matter', 'with', 'you', '?'], answer: "what's the matter with you ?" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '发生什么了？', words: ['what', 'happened', '?'], answer: 'what happened ?' },
        { type: 'mcq', module: '日常交际', question: 'What\'s the trouble ___ you?', hint: '你有什么麻烦吗？', options: ['with', 'of'], answer: 'with' }
    ],
    "47": [
        // 1. 实意动词与不及物动词
        { type: 'lesson', title: '动词分类：及物与不及物', content: "<p style=\"text-align: left; margin-bottom: 15px;\">我们把有实际意义的动词叫做<b style=\"color: var(--primary-color);\">实义动词</b>（如 like, go, find）。实义动词又分为两类：<br><br>1. <b>及物动词</b>：后面直接加宾语。I like dogs. (我喜欢狗。)<br>2. <b>不及物动词</b>：单独使用，或加介词后再加宾语。<br>• He is dancing. (他正在跳舞。)<br>• She is listening to music. (她正在听音乐。)<br>• Look at him. (看他。)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '他正在跳舞。', words: ['he', 'is', 'dancing'], answer: 'he is dancing' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '她正在听音乐。', words: ['she', 'is', 'listening', 'to', 'music'], answer: 'she is listening to music' },
        { type: 'mcq', module: '介词侦探', question: 'Look ___ him.', hint: '看他。', options: ['at', 'on'], answer: 'at' },

        // 2. want 的用法
        { type: 'lesson', title: '重点动词：want', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">want</b> 是一个及物动词，表示“想要”：<br><br>• <b style=\"color: var(--secondary-color);\">want sth (想要某物)</b>：<br>We want some hot water. (我们想要一些热水。)<br><br>• <b style=\"color: var(--secondary-color);\">want to do sth (想要做某事)</b>：<br>I want to buy some clothes. (我想要买衣服。)<br>What do you want to do? (你想要做什么呢？)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我想要买衣服。', words: ['I', 'want', 'to', 'buy', 'some', 'clothes'], answer: 'I want to buy some clothes' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我们想要一些热水。', words: ['we', 'want', 'some', 'hot', 'water'], answer: 'we want some hot water' },
        { type: 'mcq', module: '语法侦探', question: 'I want ___ have dinner.', hint: '我想要吃晚餐。', options: ['to', 'for'], answer: 'to' },

        // 3. 实义动词的一般疑问句与否定 (do/don't)
        { type: 'lesson', title: '句型变身：实义动词的疑问与否定', content: "<p style=\"text-align: left; margin-bottom: 15px;\">含有实义动词的句子，不能直接把动词提前提问，必须请<b style=\"color: var(--error-color);\">助动词 do</b> 来帮忙！<br><br>• <b style=\"color: var(--primary-color);\">疑问句 (Do you...?)</b>：<br>Do you want to go shopping? (你想去购物吗？)<br>Do you work in the bank? (你在银行工作吗？)<br>回答：Yes, I do. / No, I don't.<br><br>• <b style=\"color: var(--primary-color);\">否定句 (don't...)</b>：<br>I don't like milk in my coffee. (我不喜欢咖啡里放牛奶。)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '你想去购物吗？', words: ['do', 'you', 'want', 'to', 'go', 'shopping', '?'], answer: 'do you want to go shopping ?' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '你在银行工作吗？', words: ['do', 'you', 'work', 'in', 'the', 'bank', '?'], answer: 'do you work in the bank ?' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我不喜欢咖啡里放牛奶。', words: ['I', "don't", 'like', 'milk', 'in', 'my', 'coffee'], answer: 'I don\'t like milk in my coffee' },
        { type: 'mcq', module: '语法侦探', question: '___ you speak English?', hint: '你说英语吗？', options: ['Do', 'Are'], answer: 'Do' },

        // 4. 可数名词与不可数名词在句子里的使用
        { type: 'lesson', title: '语法大爆炸：名词在句子中的使用', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">可数名词</b>在句中<b style=\"color: var(--error-color);\">绝不能“裸奔”</b>（单独使用）：<br>• 要么变复数表示泛指：I like dogs. (我喜欢狗。)<br>• 要么加冠词：There is a bookcase in my room. (房间里有一个书架。)<br><br><b style=\"color: var(--secondary-color);\">不可数名词</b>可以单独使用：<br>• I like bread. (我喜欢面包。)<br>• I'd like some water. (我想要一些水。)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '房间里有一个书架。', words: ['there', 'is', 'a', 'bookcase', 'in', 'my', 'room'], answer: 'there is a bookcase in my room' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我想要一些水。', words: ["I'd", 'like', 'some', 'water'], answer: "I'd like some water" },
        { type: 'mcq', module: '语法侦探', question: 'Do you want some ___?', hint: '你想要一些面包吗？', options: ['bread', 'breads'], answer: 'bread' },
        { type: 'mcq', module: '语法侦探', question: 'Do you like ___?', hint: '你喜欢苹果吗？', options: ['apples', 'apple'], answer: 'apples' }
    ],
    "49": [
        // 1. 名词所有格表地点与肉类词汇
        { type: 'lesson', title: '生活词汇：去哪儿买肉？', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">at the + 职业名称's</b> 可以表示“在某个店里”：<br>• butcher (屠夫) -> at the butcher's (在肉店)<br>• barber (理发师) -> at the barber's (在理发店)<br><br><b style=\"color: var(--secondary-color);\">常见肉类 (不可数名词)</b>：<br>beef(牛肉), steak(牛排), lamb(羔羊肉), pork(猪肉)。<br>💡 注意：chicken 作“鸡肉”时不可数：I don't like chicken.<br>作“小鸡”时可数：There are some chickens on the grass.</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我不喜欢鸡肉。', words: ['I', "don't", 'like', 'chicken'], answer: 'I don\'t like chicken' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '草地上有一些小鸡。', words: ['there', 'are', 'some', 'chickens', 'on', 'the', 'grass'], answer: 'there are some chickens on the grass' },
        { type: 'mcq', module: '常识连线', question: 'at the ___ 表示“在理发店”。', hint: '在理发店', options: ['barber\'s', 'butcher\'s'], answer: 'barber\'s' },

        // 2. tell 的双宾语与特殊含义
        { type: 'lesson', title: '重点动词：tell 的多重身份', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">tell (告诉) 可以接双宾语</b>：<br>• Can you tell him the story? (你能给他讲这个故事吗？)<br><br><b style=\"color: var(--secondary-color);\">tell 的特殊用法</b>：<br>1. 表“判断”：I can't tell the difference. (我无法判断有什么区别。)<br>2. 固定搭配：To tell you the truth, the house is quite small. (跟我说实话，这个房子真的太小了。)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '你能给他讲这个故事吗？', words: ['can', 'you', 'tell', 'him', 'the', 'story', '?'], answer: 'can you tell him the story ?' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '说实话，这个房子真的太小了。', words: ['to', 'tell', 'you', 'the', 'truth', ',', 'the', 'house', 'is', 'quite', 'small'], answer: 'to tell you the truth , the house is quite small' },
        { type: 'mcq', module: '词汇侦探', question: 'I can\'t tell the ___.', hint: '我无法判断有什么区别。', options: ['difference', 'truth'], answer: 'difference' },

        // 3. 选择疑问句
        { type: 'lesson', title: '句型变身：选择疑问句 (or)', content: "<p style=\"text-align: left; margin-bottom: 15px;\">当你需要给对方提供多个选项时，可以使用 <b style=\"color: var(--primary-color);\">or (或者)</b> 来连接，这就是<b style=\"color: var(--error-color);\">选择疑问句</b>。<br>回答时不能用 Yes/No，必须选其中一个！<br><br>• Do you want beef or lamb? (你想要牛肉还是羊肉啊？)<br>• Are you a teacher or a doctor? (你是一名老师还是一名医生呢？)<br>• Can you dance or sing? (你是会唱歌呢还是会跳舞呢？)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '你想要牛肉还是羊肉啊？', words: ['do', 'you', 'want', 'beef', 'or', 'lamb', '?'], answer: 'do you want beef or lamb ?' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '你是一名老师还是一名医生呢？', words: ['are', 'you', 'a', 'teacher', 'or', 'a', 'doctor', '?'], answer: 'are you a teacher or a doctor ?' },
        { type: 'mcq', module: '语法侦探', question: 'Can you dance ___ sing?', hint: '你是会唱歌呢还是会跳舞呢？', options: ['or', 'and'], answer: 'or' },

        // 4. 第三人称单数 (三单)
        { type: 'lesson', title: '时态进阶：一般现在时 (三单变化)', content: "<p style=\"text-align: left; margin-bottom: 15px;\">在一般现在时中，如果主语是<b style=\"color: var(--primary-color);\">第三人称单数 (he/she/it/单数名词)</b>，实义动词必须变形！<br><br>1. 直接加 s：like -> likes<br>• This monkey likes bananas. (这只猴子喜欢香蕉。)<br>2. 以 ch, sh, s, x, o 结尾加 es：<br>• He teaches Japanese. (他教日语。)<br>• She goes to the library. (她去图书馆。)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '他教日语。', words: ['he', 'teaches', 'Japanese'], answer: 'he teaches Japanese' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '她去图书馆。', words: ['she', 'goes', 'to', 'the', 'library'], answer: 'she goes to the library' },
        { type: 'mcq', module: '语法侦探', question: 'This monkey ___ bananas.', hint: '这只猴子喜欢香蕉。', options: ['likes', 'like'], answer: 'likes' },

        // 5. 三单的否定、疑问与省略
        { type: 'lesson', title: '时态进阶：三单的疑问与否定', content: "<p style=\"text-align: left; margin-bottom: 15px;\">当主语是第三人称单数时，助动词要从 do/don't 变成 <b style=\"color: var(--error-color);\">does/doesn't</b>，并且后面的动词<b style=\"color: var(--primary-color);\">恢复原形</b>！<br><br>• 否定：Nancy doesn't want to go to the park.<br>• 疑问：Does Tim read books in the morning?<br><br><b>💡 省略句用法：</b><br>如果前后动作一样，可以用助动词代替前面的动作：<br>I like milk, but my brother doesn't. (我喜欢牛奶，但是我弟弟不喜欢。)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: 'Nancy不想去公园。', words: ['Nancy', "doesn't", 'want', 'to', 'go', 'to', 'the', 'park'], answer: 'Nancy doesn\'t want to go to the park' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: 'Tim在早上读书吗？', words: ['does', 'Tim', 'read', 'books', 'in', 'the', 'morning', '?'], answer: 'does Tim read books in the morning ?' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我喜欢牛奶，但是我弟弟不喜欢。', words: ['I', 'like', 'milk', ',', 'but', 'my', 'brother', "doesn't"], answer: 'I like milk , but my brother doesn\'t' }
    ],
    "51": [
        // 1. 四季与天气气候
        { type: 'lesson', title: '四季与气候', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">四季 (前面搭配介词 in)</b>：<br>spring (春天) / summer (夏天) / autumn 🇬🇧 / fall 🇺🇸 (秋天) / winter (冬天)。<br>• I often fly kites in spring. (我经常在春天放风筝。)<br><br><b style=\"color: var(--secondary-color);\">weather vs climate</b>：<br>• <b style=\"color: var(--error-color);\">weather</b> 指短期的天气：The weather is fine today.<br>• <b style=\"color: var(--error-color);\">climate</b> 指长期的气候：My hometown has a pleasant climate. (我的家乡气候宜人。)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我经常在春天放风筝。', words: ['I', 'often', 'fly', 'kites', 'in', 'spring'], answer: 'I often fly kites in spring' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我的家乡气候宜人。', words: ['my', 'hometown', 'has', 'a', 'pleasant', 'climate'], answer: 'my hometown has a pleasant climate' },
        { type: 'mcq', module: '介词侦探', question: 'I like swimming ___ summer.', hint: '我喜欢在夏天游泳。', options: ['in', 'at'], answer: 'in' },
        { type: 'mcq', module: '词汇辨析', question: 'The ___ is fine today.', hint: '今天天气不错。', options: ['weather', 'climate'], answer: 'weather' },

        // 2. 天气词汇 (动词与名词)
        { type: 'lesson', title: '一词多用：rain 与 snow', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">rain</b> 和 <b style=\"color: var(--primary-color);\">snow</b> 既可以是名词（雨/雪），也可以是动词（下雨/下雪）！<br><br>• 作动词：<br>It rains a lot today. (今天雨下得挺大的。)<br>It's snowing all over the country. (到处都在下雪。)<br>• 作名词：<br>Don't stand in the rain. (不要在这个雨里站着。)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '不要在这个雨里站着。', words: ["don't", 'stand', 'in', 'the', 'rain'], answer: "don't stand in the rain" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '到处都在下雪。', words: ["it's", 'snowing', 'all', 'over', 'the', 'country'], answer: "it's snowing all over the country" },
        { type: 'mcq', module: '语法侦探', question: 'It ___ a lot today.', hint: '今天雨下得挺大的。', options: ['rains', 'rainy'], answer: 'rains' },

        // 3. 月份与频率副词
        { type: 'lesson', title: '时间魔法：月份与频率', content: "<p style=\"text-align: left; margin-bottom: 15px;\">💡 介词小口诀：<b style=\"color: var(--error-color);\">年份月份季节，前面都用 in！</b><br>• It's hot in August. (8月的时候，天气很热。)<br><br><b style=\"color: var(--primary-color);\">常见频率副词 (按频率从高到低)</b>：<br>• <b style=\"color: var(--secondary-color);\">always</b> (一直/总是)：I will always love you. (我永远爱你。)<br>• <b style=\"color: var(--secondary-color);\">often</b> (经常)：He often plays football. (他经常踢足球。)<br>• <b style=\"color: var(--secondary-color);\">sometimes</b> (有时候)：Sometimes I go to school by taxi. (我有时候坐出租车去学校。)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我永远爱你。', words: ['I', 'will', 'always', 'love', 'you'], answer: 'I will always love you' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我有时候坐出租车去学校。', words: ['sometimes', 'I', 'go', 'to', 'school', 'by', 'taxi'], answer: 'sometimes I go to school by taxi' },
        { type: 'mcq', module: '介词侦探', question: 'It\'s hot ___ August.', hint: '8月的时候，天气很热。', options: ['in', 'on'], answer: 'in' },
        { type: 'mcq', module: '词汇侦探', question: 'He ___ plays football.', hint: '他经常踢足球。', options: ['often', 'always'], answer: 'often' },

        // 4. 询问天气句型
        { type: 'lesson', title: '日常交际：询问天气', content: "<p style=\"text-align: left; margin-bottom: 15px;\">英语中有两种常见的询问天气的固定句型：<br><br>1. <b style=\"color: var(--primary-color);\">What's the weather like...?</b> (like 这里是介词，意为“像”)<br>• What's the weather like in spring? (春天的时候天气怎么样？)<br><br>2. <b style=\"color: var(--secondary-color);\">How's the weather...?</b><br>• How's the weather in May? (五月的天气怎么样？)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '春天的时候天气怎么样？', words: ["what's", 'the', 'weather', 'like', 'in', 'spring', '?'], answer: "what's the weather like in spring ?" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '五月的天气怎么样？', words: ["how's", 'the', 'weather', 'in', 'May', '?'], answer: "how's the weather in May ?" },
        { type: 'mcq', module: '日常交际', question: '___ the weather like in April?', hint: '四月份的天气是什么样的呀？', options: ['What\'s', 'How\'s'], answer: 'What\'s' },
        { type: 'mcq', module: '日常交际', question: '___ the weather in Beijing?', hint: '北京天气怎么样？', options: ['How\'s', 'What\'s'], answer: 'How\'s' },

        // 5. 特殊疑问句中的三单变化
        { type: 'lesson', title: '句式转换：疑问句里的三单', content: "<p style=\"text-align: left; margin-bottom: 15px;\">我们学过“你来自哪儿？”可以说 <b style=\"color: var(--primary-color);\">Where do you come from?</b><br>如果在特殊疑问句里，主语变成了第三人称单数，助动词 do 也要随之变成 <b style=\"color: var(--error-color);\">does</b>！<br><br>• Where <b style=\"color: var(--error-color);\">does she</b> come from? (她来自哪儿？)<br>• Where <b style=\"color: var(--error-color);\">does Sam</b> come from? (Sam来自哪里？)<br>• Lu Ming comes from China. (鲁明来自中国。)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '鲁明来自中国。', words: ['Lu', 'Ming', 'comes', 'from', 'China'], answer: 'Lu Ming comes from China' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: 'Sam来自哪里？', words: ['where', 'does', 'Sam', 'come', 'from', '?'], answer: 'where does Sam come from ?' },
        { type: 'mcq', module: '语法侦探', question: 'They ___ come from China.', hint: '他们不来自中国。', options: ['don\'t', 'doesn\'t'], answer: 'don\'t' },
        { type: 'mcq', module: '语法侦探', question: 'Where ___ she come from?', hint: '她来自哪儿？', options: ['does', 'do'], answer: 'does' }
    ],
    "53": [
        // 1. mild vs wet vs dry
        { type: 'lesson', title: '词汇辨析：气候与状态', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">mild (温暖的/温和的/轻微的)</b>：<br>• It's a mild winter. (这是一个温暖的冬天。)<br>• a mild cough (轻微的咳嗽)<br>• My mom is a mild person. (我的妈妈是一个性情温和的人。)<br><br><b style=\"color: var(--secondary-color);\">wet (潮湿的/没干的)</b>：<br>• The weather is wet in summer. (在夏天的时候天气很潮湿。)<br>• The paint is wet. (油漆未干。)<br><br><b style=\"color: var(--error-color);\">dry (干燥的/弄干)</b>：<br>• The climate is dry in Harbin. (哈尔滨的天气比较干燥。)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我的妈妈是一个性情温和的人。', words: ['my', 'mom', 'is', 'a', 'mild', 'person'], answer: 'my mom is a mild person' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '轻微的咳嗽', words: ['a', 'mild', 'cough'], answer: 'a mild cough' },
        { type: 'mcq', module: '词汇小达人', question: 'The paint is ___.', hint: '油漆未干。', options: ['wet', 'dry'], answer: 'wet' },

        // 2. season, best, early, late
        { type: 'lesson', title: '重点词汇拓展', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">season (季节/电视剧的季)</b>：<br>• There will be a new season of Carmen. (电视剧卡门会有新的一季。)<br><br><b style=\"color: var(--secondary-color);\">best (最/最好的)</b>：<br>• She likes English best. (她最喜欢英语。)<br>• You are the best student. (你是最好的学生。)<br><br><b style=\"color: var(--error-color);\">rise (升起/增加)</b> vs <b style=\"color: var(--error-color);\">set (落下)</b>：<br>• The sun rises in the east. (太阳从东方升起。)<br>• The sun sets early. (太阳下山很早。)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '太阳从东方升起。', words: ['the', 'sun', 'rises', 'in', 'the', 'east'], answer: 'the sun rises in the east' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '你是最好的学生。', words: ['you', 'are', 'the', 'best', 'student'], answer: 'you are the best student' },
        { type: 'mcq', module: '常识连线', question: 'There will be a new ___ of Carmen.', hint: '电视剧卡门会有新的一季。', options: ['season', 'climate'], answer: 'season' },

        // 3. 气候与方位的表达
        { type: 'lesson', title: '气候询问与东南西北', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">询问气候：</b> What's the climate like in... / How's the climate in...<br>• What's the climate like in Beijing? (北京的气候怎么样啊？)<br><br><b style=\"color: var(--secondary-color);\">方位介词 (in/on/to)：</b><br>1. <b style=\"color: var(--error-color);\">in (所属关系)</b>: Harbin is in the north of China. (哈尔滨在中国的北部/内)<br>2. <b style=\"color: var(--error-color);\">on (接壤挨着)</b>: Russia is on the north of China. (俄罗斯在中国的北边/外挨着)<br>3. <b style=\"color: var(--error-color);\">to (隔海相望/不挨着)</b>: Japan is to the east of China. (日本在中国的东边/外不挨着)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '北京的气候怎么样啊？', words: ["what's", 'the', 'climate', 'like', 'in', 'Beijing', '?'], answer: "what's the climate like in Beijing ?" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '哈尔滨在中国的北部。', words: ['Harbin', 'is', 'in', 'the', 'north', 'of', 'China'], answer: 'Harbin is in the north of China' },
        { type: 'mcq', module: '介词侦探', question: 'Japan is ___ the east of China.', hint: '日本在中国的东边（不挨着）。', options: ['to', 'on'], answer: 'to' },

        // 4. which / favorite 询问最喜欢
        { type: 'lesson', title: '日常交际：你最喜欢什么？', content: "<p style=\"text-align: left; margin-bottom: 15px;\">我们有两种方式询问“最喜欢的东西”：<br><br>1. <b style=\"color: var(--primary-color);\">Which + 名词 + do/does sb like best?</b><br>• Which season does he like best? (他最喜欢哪个季节？)<br>• Which colors does Mary like best? (Mary最喜欢哪些颜色？)<br><br>2. <b style=\"color: var(--secondary-color);\">What's one's favorite + 名词?</b><br>• What's your favorite subject? (你最喜欢的科目是什么？)<br>• What's her favorite city? (她最喜欢哪个城市？)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '他最喜欢哪个季节？', words: ['which', 'season', 'does', 'he', 'like', 'best', '?'], answer: 'which season does he like best ?' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '你最喜欢的科目是什么？', words: ["what's", 'your', 'favorite', 'subject', '?'], answer: "what's your favorite subject ?" },
        { type: 'mcq', module: '语法侦探', question: 'Which fruit ___ you like best?', hint: '你最喜欢哪个水果呀？', options: ['do', 'does'], answer: 'do' }
    ],
    "55": [
        // 1. live, stay, home 的用法
        { type: 'lesson', title: '词汇辨析：live 与 stay', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">live (居住/生活/生存)</b>：<br>• I live in Beijing. (我住在北京。)<br>• People can't live without water. (人类的生存不能离开水。)<br><br><b style=\"color: var(--secondary-color);\">stay (待在/保持状态)</b>：<br>• You need to stay calm. (你需要保持冷静。)<br><br><b style=\"color: var(--error-color);\">home (副词：到家/在家)</b>：<br>副词前<b style=\"color: var(--error-color);\">不加 to！</b><br>• go home (回家)<br>• come here (到这儿来)<br>• go upstairs (上楼)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '人类的生存不能离开水。', words: ['people', "can't", 'live', 'without', 'water'], answer: 'people can\'t live without water' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '你需要保持冷静。', words: ['you', 'need', 'to', 'stay', 'calm'], answer: 'you need to stay calm' },
        { type: 'mcq', module: '介词侦探', question: 'We usually go ___ at 5 pm.', hint: '我们通常下午五点回家。', options: ['home', 'to home'], answer: 'home' },

        // 2. 一天中的时间与 arrive
        { type: 'lesson', title: '介词攻略：时间点与到达', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">早中晚的介词搭配</b>：<br>长线时间用 in：in the morning / in the afternoon / in the evening<br>短暂时刻用 at：at noon (在中午) / at night (在晚上) / at midnight (在午夜)<br><br><b style=\"color: var(--secondary-color);\">arrive (到达)</b>：<br>本身是不及物动词：We will arrive early. (我们会早点到。)<br>加大地点用 in：arrive in Spain (到达西班牙)<br>加小地点用 at：arrive at school (到了学校)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我中午吃了面条。', words: ['I', 'had', 'noodles', 'for', 'lunch'], answer: 'I had noodles for lunch' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '到了学校', words: ['arrive', 'at', 'school'], answer: 'arrive at school' },
        { type: 'mcq', module: '介词侦探', question: 'She eats her lunch ___ noon.', hint: '她总是在中午吃午饭。', options: ['at', 'in'], answer: 'at' },

        // 3. 日常活动的介词搭配
        { type: 'lesson', title: '日常表达：该不该加 to？', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">带有介词 (to/at) 的日常活动</b>：<br>• go to work (去上班)<br>• go to school (去上学，指身份是学生)<br>• go to bed (去睡觉)<br>• stay at home (待在家里)<br><br><b style=\"color: var(--secondary-color);\">无需加介词的直接动作</b>：<br>• have lunch (吃午饭)<br>• watch TV (看电视)<br>• do the housework (做家务)<br>• read his newspaper (看他的报纸)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '去上学', words: ['go', 'to', 'school'], answer: 'go to school' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '看电视', words: ['watch', 'TV'], answer: 'watch TV' },
        { type: 'mcq', module: '介词侦探', question: 'Miss Sawyer usually stays ___ home.', hint: '索耶太太通常待在家里。', options: ['at', 'in'], answer: 'at' },

        // 4. 频率副词大本营
        { type: 'lesson', title: '时间魔法：频率副词排行', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">频率排行榜 (从高到低)</b>：<br>1. always (总是) > 2. usually (通常) > 3. often (经常) > 4. sometimes (有时) > 5. never (从不)<br>• I never drink milk. (我从来都不喝牛奶。)<br><br><b style=\"color: var(--secondary-color);\">频率词的位置</b>：<br>动词前面：My father usually walks home.<br>be动词后面：She is always late for class.<br>词组 (every day) 放句末：I go to school every day.</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我从来都不喝牛奶。', words: ['I', 'never', 'drink', 'milk'], answer: 'I never drink milk' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '她总是上课迟到。', words: ['she', 'is', 'always', 'late', 'for', 'class'], answer: 'she is always late for class' },
        { type: 'mcq', module: '词汇连线', question: 'I go to school ___.', hint: '我每天去学校上学。', options: ['every day', 'everyday'], answer: 'every day' },

        // 5. 询问日常习惯 (usually/often)
        { type: 'lesson', title: '日常交际：你通常做什么？', content: "<p style=\"text-align: left; margin-bottom: 15px;\">想要询问别人平时都习惯做些什么，可以用这样的句型：<br><br>1. <b style=\"color: var(--primary-color);\">What do you usually/often do...?</b><br>• What do you often do in the evening? (你每天晚上一般都做什么？)<br><br>2. 换成<b style=\"color: var(--error-color);\">第三人称单数 (三单)</b> 时用 does：<br>• What does Adam usually do in the afternoon? (Adam下午通常都做什么？)<br>• He usually plays football with friends. (注意回答时动词 play 要加 s)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '你每天晚上一般都做什么？', words: ['what', 'do', 'you', 'often', 'do', 'in', 'the', 'evening', '?'], answer: 'what do you often do in the evening ?' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: 'Adam下午通常都做什么？', words: ['what', 'does', 'Adam', 'usually', 'do', 'in', 'the', 'afternoon', '?'], answer: 'what does Adam usually do in the afternoon ?' },
        { type: 'mcq', module: '语法侦探', question: 'He usually ___ football with friends.', hint: '他通常和朋友踢足球。', options: ['plays', 'play'], answer: 'plays' }
    ],
    "57": [
        // 1. 时间点与 on foot
        { type: 'lesson', title: '生活词汇：整点与步行', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">整点时间的表达</b>：<br>• It's six o'clock in the morning. (早上六点钟。)<br>• six am (早上六点) / six pm (晚上六点)<br><br><b style=\"color: var(--secondary-color);\">步行 (on foot)</b>：<br>“步行”是一个固定搭配：I go to school on foot. (我步行去学校。)<br>💡 注意特殊单复数变化：foot(单直脚) -> feet(双脚)；goose(鹅) -> geese；tooth(牙) -> teeth。</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我步行去学校。', words: ['I', 'go', 'to', 'school', 'on', 'foot'], answer: 'I go to school on foot' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '早上六点钟。', words: ["it's", 'six', "o'clock", 'in', 'the', 'morning'], answer: "it's six o'clock in the morning" },
        { type: 'mcq', module: '单复数陷阱', question: 'I have two ___.', hint: '我有两只脚。', options: ['feet', 'foot'], answer: 'feet' },

        // 2. 具体时间的口语表达
        { type: 'lesson', title: '时间魔法：几点几分怎么说？', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">询问时间</b>：What's the time? / What time is it?<br><br><b style=\"color: var(--secondary-color);\">表达具体分钟</b>：<br>1. 直接念数字：four ten (4点10分)<br>2. 用 past (半小时内)：five past ten (十点过五分) / a quarter past four (四点一刻)<br>3. 用 to (差几分到下个钟头)：five to ten (十点差五分，即9:55)<br>4. 一半：half past four (四点半)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '四点一刻。', words: ["it's", 'a', 'quarter', 'past', 'four'], answer: "it's a quarter past four" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '几点钟了？', words: ["what's", 'the', 'time', '?'], answer: "what's the time ?" },
        { type: 'mcq', module: '时间换算', question: '9:55 可以用 It\'s five ___ ten 表示。', hint: '十点差五分', options: ['to', 'past'], answer: 'to' },

        // 3. 交通方式大揭秘
        { type: 'lesson', title: '介词攻略：出行交通方式', content: "<p style=\"text-align: left; margin-bottom: 15px;\">英语中表示乘坐某种交通工具，最常见的句型是 <b style=\"color: var(--primary-color);\">by + 交通工具名称（中间绝不加冠词 a）</b>！<br><br>• by car (坐汽车)<br>• by bus (坐公交车)<br>• I go to America by plane. (我坐飞机去美国。)<br><br>💡 例外是“步行”，我们不说 by foot，而要用 <b style=\"color: var(--error-color);\">on foot</b> 或 <b style=\"color: var(--error-color);\">by walking</b>。</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我坐飞机去美国。', words: ['I', 'go', 'to', 'America', 'by', 'plane'], answer: 'I go to America by plane' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '他们正在步行去学校。', words: ['they', 'are', 'going', 'to', 'school', 'on', 'foot'], answer: 'they are going to school on foot' },
        { type: 'mcq', module: '介词侦探', question: 'I go to work ___ bus.', hint: '我坐公交车去上班。', options: ['by', 'by a'], answer: 'by' },

        // 4. 一般现在时 VS 现在进行时
        { type: 'lesson', title: '时态对决：一般现在时 VS 现在进行时', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">现在进行时 (正在发生)</b>：<br>标志词：now, at the moment, these days (这一阶段), look(看), listen(听)。<br>• Look, Mary is dancing! (快看，玛丽正在跳舞呢！)<br>• Listen, someone is singing! (快听，有人正在唱歌！)<br><br><b style=\"color: var(--secondary-color);\">一般现在时 (经常习惯/客观真理)</b>：<br>标志词：often, usually, every day 等。<br>• The sun rises in the east. (太阳从东方升起。)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '快看，玛丽正在跳舞呢！', words: ['look', ',', 'Mary', 'is', 'dancing', '!'], answer: 'look , Mary is dancing !' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '太阳从东方升起。', words: ['the', 'sun', 'rises', 'in', 'the', 'east'], answer: 'the sun rises in the east' },
        { type: 'mcq', module: '时态侦探', question: 'Listen, someone is ___!', hint: '快听，有人正在唱歌！', options: ['singing', 'sings'], answer: 'singing' }
    ],
    "59": [
        // 1. 买东西与尺码表达
        { type: 'lesson', title: '购物英语：我想要买...', content: "<p style=\"text-align: left; margin-bottom: 15px;\">在商店里想要买东西或点餐，最礼貌委婉的表达是 <b style=\"color: var(--primary-color);\">I would like... (I'd like...)</b>：<br>• I would like some beef, please. (我想要些牛肉。)<br>• I'd like a cup of coffee. (我想要一杯咖啡。)<br><br><b style=\"color: var(--secondary-color);\">常见的尺码 (size) 表达</b>：<br>• large size (大号 / L)<br>• medium size (中号 / M)<br>• small size (小号 / S)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我想要些牛肉。', words: ['I', 'would', 'like', 'some', 'beef', ',', 'please'], answer: 'I would like some beef , please' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '我想要一杯咖啡。', words: ["I'd", 'like', 'a', 'cup', 'of', 'coffee'], answer: "I'd like a cup of coffee" },
        { type: 'mcq', module: '常识连线', question: 'Do you want the ___ size or the small size?', hint: '你要大号的还是小号的？', options: ['large', 'venti'], answer: 'large' },

        // 2. 询问对方是否有某物
        { type: 'lesson', title: '购物英语：你们这儿有...吗？', content: "<p style=\"text-align: left; margin-bottom: 15px;\">向店家询问是否有某个物品，可以用句型 <b style=\"color: var(--primary-color);\">Do you have...?</b><br><br>1. 如果是<b style=\"color: var(--error-color);\">单数名词</b>，用 a / an / a bottle of：<br>• Do you have a bottle of glue? (你有一瓶胶水吗？)<br>2. 如果是<b style=\"color: var(--error-color);\">复数或不可数名词</b>，前面一定要搭配 any：<br>• Do you have any water? (你这儿有水吗？)<br>3. <b style=\"color: var(--secondary-color);\">主语是三单</b>，记得用 does：<br>• Does Jerry have a book? (Jerry有一本书吗？)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '你有一瓶胶水吗？', words: ['do', 'you', 'have', 'a', 'bottle', 'of', 'glue', '?'], answer: 'do you have a bottle of glue ?' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '你这儿有水吗？', words: ['do', 'you', 'have', 'any', 'water', '?'], answer: 'do you have any water ?' },
        { type: 'mcq', module: '语法侦探', question: '___ Jerry have a book?', hint: 'Jerry有一本书吗？', options: ['Does', 'Do'], answer: 'Does' },

        // 3. that's all 与 else
        { type: 'lesson', title: '日常交际：就这些，别的还要吗？', content: "<p style=\"text-align: left; margin-bottom: 15px;\"><b style=\"color: var(--primary-color);\">that's all</b> (就是这些了 / 就这样)：<br>• 买完东西可以说：That's all, thank you. (就是这些啦，谢谢你。)<br>• 课程结束可以说：That's all for today. (今天咱们就到这儿啦。)<br><br><b style=\"color: var(--secondary-color);\">else (别的/其他)</b>：一般跟在疑问词后面。<br>• What else do you want? (你还想要点什么呀？)<br>• Who else? (还有谁？)<br>• Where else does Max want to go? (Max还想去其他地方吗？)</p>" },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '你还想要点什么呀？', words: ['what', 'else', 'do', 'you', 'want', '?'], answer: 'what else do you want ?' },
        { type: 'build', module: '句型魔法师', question: '点击单词组装句子：', hint: '就是这些啦，谢谢你。', words: ["that's", 'all', ',', 'thank', 'you'], answer: "that's all , thank you" },
        { type: 'mcq', module: '语法小达人', question: 'Where ___ does Max want to go?', hint: 'Max还想去其他地方吗？', options: ['else', 'other'], answer: 'else' }
    ]
};
