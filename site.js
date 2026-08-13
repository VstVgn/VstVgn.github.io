(() => {
  const translations = {
    Publications: "学术成果", Life: "生活", "Academic Service": "学术服务",
    "About Me": "关于我", News: "近况", "Selected Publications": "代表性成果",
    "Journal Articles": "期刊论文", "Conference Proceedings": "会议论文",
    Interest: "研究兴趣", Goal: "研究目标", Collaboration: "合作",
    "Peer Review": "同行评审", "reviews completed": "次审稿",
    Upcoming: "即将发表", Journal: "期刊", "Under review": "审稿中",
    "Manuscript in preparation for submission": "稿件准备投稿中",
    Abstract: "摘要", "Hide abstract": "收起摘要",
    Sport: "运动", Music: "音乐", Dance: "舞蹈", "Table Tennis": "乒乓球",
    Background: "经历", Photo: "照片", Highlights: "高光时刻", Piano: "钢琴",
    Drum: "架子鼓", Composition: "作曲", "Latin Dance": "拉丁舞",
    "Under Construction": "内容建设中", "Selected Compositions": "作品选集",
    "Now playing:": "正在播放："
  };

  const contentTranslations = {
    "hero-intro": `你好！我是<a href="https://mse.osu.edu/" target="_blank" rel="noopener noreferrer">材料科学与工程系</a>博士候选人，就读于<a href="https://osu.edu" target="_blank" rel="noopener noreferrer">俄亥俄州立大学</a>，师从 <a href="https://people.engineering.osu.edu/people/chowdhury.24" target="_blank" rel="noopener noreferrer">Enam Chowdhury 博士</a>，主要研究超快激光与物质相互作用的计算建模。我也在俄亥俄州立大学获得了物理学与数学双学士学位。`,
    "research-interest": `我的研究聚焦于超短脉冲激光诱导损伤，以及多层反射镜、光栅和金属-介质混合涂层中的电子动力学、场增强与能量吸收的仿真建模。`,
    "research-goal": `我的目标是建立实用的仿真框架，解释超短脉冲激光损伤机制，并为下一代拍瓦级激光系统设计更耐损伤的光学涂层与光栅。`,
    collaboration: `我曾与<a href="https://www.engr.colostate.edu/ece/people/carmen-menoni/" target="_blank" rel="noopener noreferrer">科罗拉多州立大学 Carmen Menoni 博士团队</a>及 <a href="http://www.xuvlasers.com/welcome.html" target="_blank" rel="noopener noreferrer">XUV Lasers Inc.</a> 合作，验证多种光学元件的激光损伤阈值。我也期待与更多团队合作开展激光诱导损伤阈值建模与光学涂层设计优化。`,
    "news-talk": `受邀为罗切斯特大学的 <a href="https://www.lle.rochester.edu/" target="_blank">Laboratory for Laser Energetics</a> 作线上报告：“2D FDTD Modeling of Ultrashort Laser-Matter Interactions”。`,
    "news-award": `凭借<a href="https://doi.org/10.1117/12.3071987" target="_blank" rel="noopener noreferrer">“Keldysh ionization based-FDTD modeling of laser-induced damage threshold of MLD-IBS compression gratings for petawatt 2 μm laser systems”</a>，获得 <a href="https://spie.org/conferences-and-exhibitions/laser-damage" target="_blank">SPIE Laser-Induced Damage in Optical Materials 2025</a> MJ Soileau 最佳学生论文奖。[<a href="https://mse.osu.edu/news/2026/03/mse-doctoral-candidate-ziyao-su-receives-best-student-paper-award" target="_blank">OSU 新闻</a>]`,
    "news-candidacy": `通过博士候选资格考试。论文委员会成员：<a href="https://people.engineering.osu.edu/people/chowdhury.24" target="_blank" rel="noopener noreferrer">Enam Chowdhury 博士</a>、<a href="https://people.engineering.osu.edu/people/windl.1" target="_blank" rel="noopener noreferrer">Wolfgang Windl 博士</a>、<a href="https://people.engineering.osu.edu/people/ghazisaeidi.1" target="_blank" rel="noopener noreferrer">Maryam Ghazisaeidi 博士</a>和 <a href="https://people.engineering.osu.edu/people/hwang.458" target="_blank" rel="noopener noreferrer">Jinwoo Hwang 博士</a>。`,
    "news-phd": `在<a href="https://osu.edu" target="_blank" rel="noopener noreferrer">俄亥俄州立大学</a><a href="https://mse.osu.edu/" target="_blank" rel="noopener noreferrer">材料科学与工程系</a>开始博士阶段学习，导师为 <a href="https://people.engineering.osu.edu/people/chowdhury.24" target="_blank" rel="noopener noreferrer">Enam Chowdhury 博士</a>。`,
    "table-tennis": `我从 7 岁起接受了约三年的乒乓球训练，教练为<a href="https://www.douyin.com/user/MS4wLjABAAAAonDPc5VkkgLb9TlkUxZpwA0_EYXYhEQ-IQcuhXt2RG0?from_tab_name=main&vid=7644897827390778233" target="_blank" rel="noopener noreferrer">张积亮</a>——前河南省队运动员，曾于 2004 至 2007 年在台湾训练奥运选手。经历一段较长的停训后，我在大学期间重新开始打球，目前常在<a href="https://www.columbustabletennisclub.org/" target="_blank" rel="noopener noreferrer">哥伦布乒乓球俱乐部（CTTC）</a>训练，也偶尔前往<a href="https://www.matchpointpickleballclub.com/table-tennis" target="_blank" rel="noopener noreferrer">Matchpoint 俱乐部</a>。我是<a href="https://www.usatt.org/" target="_blank" rel="noopener noreferrer">美国乒乓球协会（USATT）</a>注册球员，并曾代表俄亥俄州立大学参加<a href="https://www.nctta.org/" target="_blank" rel="noopener noreferrer">美国大学乒乓球协会（NCTTA）</a>联赛。`,
    rating: `当前 USATT 积分：1953`,
    "composition-1": `我在俄亥俄州立大学也辅修了音乐。对我而言，作曲是释放想法与情绪的一种重要方式。从2014 年开始，我在几乎不懂乐理的情况下便尝试写音乐，只因为有强烈的创作冲动。如今我的乐理知识仍谈不上深厚，但经过多年缓慢探索，我逐渐能够写出打动自己的作品。`,
    "composition-2": `随着人工智能迅速发展，一分钟生成的音乐或许比我逐音符写上数周的作品更悦耳、节奏更丰富、和声也更精巧，这难免令人五味杂陈。但正如旅程的意义不仅在终点，也在沿途风景，创作的过程本身才是我真正享受的部分。`,
    "photo-1":"2026 CTTC U4200 双打冠军。", "photo-2":"2026 Match Point 四月赛 U2000 冠军。", "photo-3":"2026 Lida Cup 团体冠军。", "photo-4":"2026 NCTTA 中西部赛区男子单打赛，爱荷华大学。", "photo-5":"2025 第 17 届 CTTTI B 组团体冠军。", "photo-6":"2025 NCTTA 分区混合团体冠军。", "photo-7":"2025 NCTTA 分区混合团体赛。", "photo-8":"2025 NCTTA CTTC 分区赛。",
    "win-1":"获得 <a href='https://www.omnipong.com/EntryForms/1115-28.pdf' target='_blank' rel='noopener noreferrer'>2026 CTTC 双打赛</a> U4200 冠军！", "win-2":"获得 <a href='https://www.omnipong.com/EntryForms/1087-142.pdf' target='_blank' rel='noopener noreferrer'>2026 Match Point 四月赛</a> U2000 冠军！", "win-3":"获得 2026 Lida Cup 团体冠军！", "win-4":"获得 <a href='https://www.nctta.org/' target='_blank' rel='noopener noreferrer'>2025-2026 NCTTA 俄亥俄中部分区赛</a>团体冠军及男子单打亚军！", "win-5":"获得 <a href='https://www.omnipong.com/EntryForms/1115-26.pdf' target='_blank' rel='noopener noreferrer'>CTTTI B 组团体赛</a>冠军！"
  };

  const normalize = value => value.replace(/\s+/g, " ").trim();
  const readStoredLanguage = () => {
    try { return localStorage.getItem("site-language"); } catch (_) { return null; }
  };
  const storeLanguage = lang => {
    try { localStorage.setItem("site-language", lang); } catch (_) { /* URL fallback below */ }
  };

  function setLanguage(lang) {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.body.classList.toggle("lang-zh", lang === "zh");
    document.querySelectorAll("[data-en][data-zh]").forEach(el => {
      el.innerHTML = lang === "zh" ? el.dataset.zh : el.dataset.en;
    });
    document.querySelectorAll("[data-content-key]").forEach(el => {
      if (!el.dataset.enHtml) el.dataset.enHtml = el.innerHTML;
      el.innerHTML = lang === "zh" ? contentTranslations[el.dataset.contentKey] : el.dataset.enHtml;
    });
    document.querySelectorAll("h1, h2, h3, .life-tag, .life-title, .championship-header, .music-list-header, .pub-meta, .abstract-toggle").forEach(el => {
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
      a.href = lang === "zh" ? "files/ZiyaoSu_CV_中文.pdf" : "files/ZiyaoSu_CV_English.pdf";
    });
    document.querySelectorAll(".nav-links a").forEach(a => {
      const base = a.getAttribute("href").split("?")[0];
      a.setAttribute("href", lang === "zh" ? `${base}?lang=zh` : base);
    });
    document.title = document.title.replace(lang === "zh" ? "Publications" : "学术成果", lang === "zh" ? "学术成果" : "Publications").replace(lang === "zh" ? "Life" : "生活", lang === "zh" ? "生活" : "Life");
    storeLanguage(lang);
  }

  const initialize = () => {
    document.querySelectorAll(".horizontal-photo-strip figcaption").forEach((el, index) => el.dataset.contentKey = `photo-${index + 1}`);
    document.querySelectorAll(".championship-text").forEach((el, index) => el.dataset.contentKey = `win-${index + 1}`);
    const toggle = document.querySelector(".language-toggle");
    toggle?.addEventListener("click", () => setLanguage(document.documentElement.lang.startsWith("zh") ? "en" : "zh"));
    document.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", event => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      const destination = a.href;
      document.body.classList.add("page-leaving", "cards-leaving");
      window.setTimeout(() => { window.location.href = destination; }, 320);
    }));
    document.querySelectorAll(".abstract-toggle").forEach(button => button.addEventListener("click", () => {
      const abstract = button.closest(".pub-item")?.querySelector(".pub-abstract");
      if (!abstract) return;
      abstract.toggleAttribute("hidden");
      const zh = document.documentElement.lang.startsWith("zh");
      button.textContent = abstract.hidden ? (zh ? "摘要" : "Abstract") : (zh ? "收起摘要" : "Hide abstract");
    }));
    const urlLanguage = new URLSearchParams(window.location.search).get("lang");
    setLanguage(urlLanguage === "zh" ? "zh" : (readStoredLanguage() || "en"));
    requestAnimationFrame(() => document.body.classList.add("page-ready"));
  };

  initialize();
})();
