(() => {
  const translations = {
    Publications: "学术成果", Life: "生活", "Academic Service": "学术服务",
    "About Me": "关于我", News: "近况", "Selected Publications": "代表性成果",
    "Journal Articles": "期刊论文", "Conference Proceedings": "会议论文",
    Interest: "研究兴趣", Goal: "研究目标", Collaboration: "合作",
    "Peer Review": "同行评审", "Journal reviewer": "期刊审稿人",
    "reviews completed": "次审稿", "review records": "审稿记录",
    Upcoming: "即将发表", Journal: "期刊", "Under review": "审稿中",
    "Manuscript in preparation for submission": "稿件准备投稿中",
    Abstract: "摘要", "Hide abstract": "收起摘要",
    Sport: "运动", Music: "音乐", Dance: "舞蹈", "Table Tennis": "乒乓球",
    Background: "经历", Photo: "照片", Highlights: "高光时刻", Piano: "钢琴",
    Drum: "架子鼓", Composition: "作曲", "Latin Dance": "拉丁舞",
    "Under Construction": "内容建设中", "Selected Compositions": "作品选集",
    "Now playing:": "正在播放：", Email: "邮箱", "Google Scholar": "谷歌学术",
    "Oral Presentation": "口头报告"
  };

  const longTranslations = {
    "Hi! I am a PhD candidate in Materials Science and Engineering at The Ohio State University. I am currently working with Dr. Enam Chowdhury on computational modeling of ultrafast laser–matter interactions. I received my B.S. degrees in Physics and Mathematics at OSU as well.": "你好！我是俄亥俄州立大学材料科学与工程专业博士候选人，师从 Enam Chowdhury 博士，研究方向为超快激光与物质相互作用的计算建模。我也在俄亥俄州立大学获得了物理学与数学双学士学位。",
    "My research focuses on modeling ultrashort-laser-induced damage, electron dynamics, field enhancement, and energy absorption in multilayer mirrors, gratings, and hybrid metal–dielectric coatings": "我的研究聚焦于超短脉冲激光诱导损伤建模，以及多层反射镜、光栅和金属-介质混合涂层中的电子动力学、场增强与能量吸收。",
    "My goal is to develop practical simulation frameworks that explain ultrashort-laser damage mechanisms and support the design of more damage-resistant optical coatings and gratings for next-generation PW laser systems.": "我的目标是建立实用的仿真框架，解释超短脉冲激光损伤机制，并为下一代拍瓦级激光系统设计更耐损伤的光学涂层与光栅。"
  };

  const contentTranslations = {
    "hero-intro": `你好！我是<a href="https://mse.osu.edu/" target="_blank" rel="noopener noreferrer">俄亥俄州立大学材料科学与工程系</a>博士候选人，师从 <a href="https://people.engineering.osu.edu/people/chowdhury.24" target="_blank" rel="noopener noreferrer">Enam Chowdhury 博士</a>，主要研究超快激光与物质相互作用的计算建模。我也在俄亥俄州立大学获得了物理学与数学双学士学位。`,
    "research-interest": `我的研究聚焦于超短脉冲激光诱导损伤建模，以及多层反射镜、光栅和金属-介质混合涂层中的电子动力学、场增强与能量吸收。`,
    "research-goal": `我的目标是建立实用的仿真框架，解释超短脉冲激光损伤机制，并为下一代拍瓦级激光系统设计更耐损伤的光学涂层与光栅。`,
    collaboration: `我曾与<a href="https://www.engr.colostate.edu/ece/people/carmen-menoni/" target="_blank" rel="noopener noreferrer">科罗拉多州立大学 Carmen Menoni 博士团队</a>及 <a href="http://www.xuvlasers.com/welcome.html" target="_blank" rel="noopener noreferrer">XUV Lasers Inc.</a> 合作，验证多种光学元件的激光损伤阈值。我也期待与更多团队合作开展激光诱导损伤阈值建模与光学涂层设计优化。`,
    "news-talk": `受邀为<a href="https://www.lle.rochester.edu/" target="_blank">罗切斯特大学激光能量学实验室</a>作线上报告：“超短脉冲激光-物质相互作用的二维 FDTD 建模”。`,
    "news-award": `凭借“基于 Keldysh 电离的 FDTD 模型：面向拍瓦级 2 μm 激光系统的 MLD-IBS 压缩光栅激光损伤阈值研究”，获得 <a href="https://spie.org/conferences-and-exhibitions/laser-damage" target="_blank">SPIE 2025 激光诱导光学材料损伤会议</a> MJ Soileau 最佳学生论文奖。[<a href="https://mse.osu.edu/news/2026/03/mse-doctoral-candidate-ziyao-su-receives-best-student-paper-award" target="_blank">OSU 新闻</a>]`,
    "news-candidacy": `通过博士候选资格考试。论文委员会成员：Enam Chowdhury 博士、Wolfgang Windl 博士、Maryam Ghazisaeidi 博士和 Jinwoo Hwang 博士。`,
    "news-phd": `在<a href="https://osu.edu" target="_blank" rel="noopener noreferrer">俄亥俄州立大学</a>材料科学与工程系开始博士阶段学习，导师为 Enam Chowdhury 博士。`,
    "table-tennis": `我从 7 岁起接受了约三年的乒乓球训练，教练为<a href="https://www.douyin.com/user/MS4wLjABAAAAonDPc5VkkgLb9TlkUxZpwA0_EYXYhEQ-IQcuhXt2RG0?from_tab_name=main&vid=7644897827390778233" target="_blank" rel="noopener noreferrer">张继良</a>——前河南省队运动员，曾于 2004 至 2007 年在台湾训练奥运选手。经历一段较长的停训后，我在大学期间重新开始打球，目前常在<a href="https://www.columbustabletennisclub.org/" target="_blank" rel="noopener noreferrer">哥伦布乒乓球俱乐部（CTTC）</a>训练，也偶尔前往 Matchpoint。我是美国乒乓球协会注册球员，并曾代表俄亥俄州立大学参加 NCTTA 大学生联赛。`,
    rating: `当前 USATT 积分：1953`,
    "composition-1": `我在俄亥俄州立大学辅修音乐。对我而言，作曲是释放想法与情绪的一种重要方式。2014 年，我在几乎不懂乐理时便开始写音乐，只因为有强烈的创作冲动。如今我的乐理知识仍谈不上深厚，但经过多年缓慢探索，我逐渐能够写出打动自己的作品。`,
    "composition-2": `随着人工智能迅速发展，一分钟生成的音乐或许比我逐音符写上数周的作品更悦耳、节奏更丰富、和声也更精巧，这难免令人五味杂陈。但正如旅程的意义不仅在终点，也在沿途风景，创作的过程本身才是我真正享受的部分。`,
    "photo-1":"2026 CTTC U4200 双打冠军。", "photo-2":"2026 Match Point 四月赛 U2000 冠军。", "photo-3":"2026 Lida Cup 团体冠军。", "photo-4":"2026 NCTTA 中西部赛区男子单打赛，爱荷华大学。", "photo-5":"2025 第 17 届 CTTTI B 组团体冠军。", "photo-6":"2025 NCTTA 分区混合团体冠军。", "photo-7":"2025 NCTTA 分区混合团体赛。", "photo-8":"2025 NCTTA CTTC 分区赛。",
    "win-1":"获得 2026 CTTC 双打赛 U4200 冠军！", "win-2":"获得 2026 Match Point 四月赛 U2000 冠军！", "win-3":"获得 2026 Lida Cup 团体冠军！", "win-4":"获得 2025-2026 NCTTA 俄亥俄中部分区赛团体冠军及男子单打亚军！", "win-5":"获得 CTTTI B 组团体赛冠军！"
  };

  const normalize = value => value.replace(/\s+/g, " ").trim();
  const remember = el => { if (!el.dataset.en) el.dataset.en = normalize(el.textContent); };

  function setLanguage(lang) {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.body.classList.toggle("lang-zh", lang === "zh");
    document.querySelectorAll("[data-en][data-zh]").forEach(el => {
      el.innerHTML = lang === "zh" ? el.dataset.zh : el.dataset.en;
    });
    document.querySelectorAll("[data-translate]").forEach(el => {
      remember(el);
      const source = el.dataset.en;
      el.textContent = lang === "zh" ? (longTranslations[source] || translations[source] || source) : source;
    });
    document.querySelectorAll("[data-content-key]").forEach(el => {
      if (!el.dataset.enHtml) el.dataset.enHtml = el.innerHTML;
      el.innerHTML = lang === "zh" ? contentTranslations[el.dataset.contentKey] : el.dataset.enHtml;
    });
    document.querySelectorAll("h1, h2, h3, .life-tag, .life-title, .championship-header, .music-list-header, .now-playing, .pub-meta, .abstract-toggle").forEach(el => {
      if (!el.dataset.en) el.dataset.en = normalize(el.textContent);
      const source = el.dataset.en;
      el.textContent = lang === "zh" ? (translations[source] || source) : source;
    });

    const toggle = document.querySelector(".language-toggle");
    if (toggle) {
      toggle.setAttribute("aria-label", lang === "zh" ? "Switch to English" : "切换至中文");
      toggle.querySelectorAll("span").forEach(s => s.classList.toggle("active", s.dataset.lang === lang));
    }
    document.querySelectorAll("a[data-cv-link]").forEach(a => {
      a.href = lang === "zh" ? "files/CV_Ziyao Su_ 中文.pdf" : "files/CV_Ziyao Su_English.pdf";
    });
    document.title = document.title.replace(lang === "zh" ? "Publications" : "学术成果", lang === "zh" ? "学术成果" : "Publications").replace(lang === "zh" ? "Life" : "生活", lang === "zh" ? "生活" : "Life");
    localStorage.setItem("site-language", lang);
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".horizontal-photo-strip figcaption").forEach((el, index) => el.dataset.contentKey = `photo-${index + 1}`);
    document.querySelectorAll(".championship-text").forEach((el, index) => el.dataset.contentKey = `win-${index + 1}`);
    const toggle = document.querySelector(".language-toggle");
    toggle?.addEventListener("click", () => setLanguage(document.documentElement.lang.startsWith("zh") ? "en" : "zh"));
    document.querySelectorAll("a[href$='.html']").forEach(a => a.addEventListener("click", () => document.body.classList.add("page-leaving")));
    document.querySelectorAll(".abstract-toggle").forEach(button => button.addEventListener("click", () => {
      const abstract = button.closest(".pub-item")?.querySelector(".pub-abstract");
      if (!abstract) return;
      abstract.toggleAttribute("hidden");
      const zh = document.documentElement.lang.startsWith("zh");
      button.textContent = abstract.hidden ? (zh ? "摘要" : "Abstract") : (zh ? "收起摘要" : "Hide abstract");
    }));
    setLanguage(localStorage.getItem("site-language") || "en");
    requestAnimationFrame(() => document.body.classList.add("page-ready"));
  });
})();
