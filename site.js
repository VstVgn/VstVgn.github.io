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
