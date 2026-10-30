(() => {
  const translations = {
    Publications: "学术成果", Life: "生活", "Academic Service": "学术服务",
    News: "近况", "Selected Publications": "代表性成果",
    "Journal Articles": "期刊论文", "Conference Proceedings": "会议录",
    "Peer Review": "同行评审", "reviews completed": "次审稿",
    "Journal Reviewer": "期刊审稿", "Instructional Assistant": "教学助理",
    "Professional Memberships": "专业会员",
    "In Progress": "进展中", Journal: "期刊", "Under review": "审稿中",
    "Manuscript in preparation for submission": "投稿中",
    Publishing: "出版中",
    Abstract: "摘要", "Hide abstract": "收起摘要",
    Sport: "运动", Music: "音乐", Dance: "舞蹈", "Table Tennis": "乒乓球",
    Background: "经历", Photo: "照片", Highlights: "高光时刻", Piano: "钢琴",
    Drum: "架子鼓", Composition: "作曲", "Latin Dance": "拉丁舞",
    "Under Construction": "建设中", "Selected Compositions": "作品选集",
    "Now playing:": "正在播放：", BibTeX: "BibTeX",
    Copy: "复制", Copied: "已复制", Preprint: "预印本", Slides: "幻灯片"
  };

  const contentTranslations = {
    "hero-intro": `你好！我是<a href="https://mse.osu.edu/" target="_blank" rel="noopener noreferrer">材料科学与工程系</a>博士候选人，就读于<a href="https://osu.edu" target="_blank" rel="noopener noreferrer">俄亥俄州立大学</a>，导师是 <a href="https://people.engineering.osu.edu/people/chowdhury.24" target="_blank" rel="noopener noreferrer">Enam Chowdhury 博士</a>，主要研究超快激光与物质相互作用的计算建模。我的研究目标是建立实用的仿真框架，阐明超短脉冲激光损伤机制，并为下一代拍瓦级激光系统中更耐损伤的光学涂层与光栅设计提供指导。我也在俄亥俄州立大学获得了物理学与数学双学士学位。`,
    "news-talk": `受邀为罗切斯特大学的 <a href="https://www.lle.rochester.edu/" target="_blank">Laboratory for Laser Energetics</a> 作线上报告：“2D FDTD Modeling of Ultrashort Laser-Matter Interactions”。`,
    "news-award": `凭借<a href="https://doi.org/10.1117/12.3071987" target="_blank" rel="noopener noreferrer">“Keldysh ionization based-FDTD modeling of laser-induced damage threshold of MLD-IBS compression gratings for petawatt 2 μm laser systems”</a>，获得 <a href="https://spie.org/conferences-and-exhibitions/laser-damage" target="_blank">SPIE Laser-Induced Damage in Optical Materials 2025</a> MJ Soileau 最佳学生论文奖。[<a href="https://mse.osu.edu/news/2026/03/mse-doctoral-candidate-ziyao-su-receives-best-student-paper-award" target="_blank">OSU 新闻</a>]`,
    "news-cover": `参与制作 <a href="https://opg.optica.org/ome/issue.cfm?volume=15&issue=2" target="_blank" rel="noopener noreferrer">Optical Materials Express 2025 年 2 月刊</a>的封面。[<a href="https://mse.osu.edu/news/2025/02/work-mse-doctoral-candidates-featured-cover-optical-materials-express" target="_blank" rel="noopener noreferrer">OSU 新闻</a>]。`,
    "news-candidacy": `通过博士候选资格考试。论文委员会成员：<a href="https://people.engineering.osu.edu/people/chowdhury.24" target="_blank" rel="noopener noreferrer">Enam Chowdhury 博士</a>、<a href="https://people.engineering.osu.edu/people/windl.1" target="_blank" rel="noopener noreferrer">Wolfgang Windl 博士</a>、<a href="https://people.engineering.osu.edu/people/ghazisaeidi.1" target="_blank" rel="noopener noreferrer">Maryam Ghazisaeidi 博士</a>和 <a href="https://people.engineering.osu.edu/people/hwang.458" target="_blank" rel="noopener noreferrer">Jinwoo Hwang 博士</a>。`,
    "news-phd": `在<a href="https://osu.edu" target="_blank" rel="noopener noreferrer">俄亥俄州立大学</a><a href="https://mse.osu.edu/" target="_blank" rel="noopener noreferrer">材料科学与工程系</a>开始博士阶段学习，导师为 <a href="https://people.engineering.osu.edu/people/chowdhury.24" target="_blank" rel="noopener noreferrer">Enam Chowdhury 博士</a>。`,
    "table-tennis": `我从 7 岁起接受了约三年的乒乓球训练，教练为<a href="https://www.douyin.com/user/MS4wLjABAAAAonDPc5VkkgLb9TlkUxZpwA0_EYXYhEQ-IQcuhXt2RG0?from_tab_name=main&vid=7644897827390778233" target="_blank" rel="noopener noreferrer">张积亮</a>——前河南省队运动员，曾于 2004 至 2007 年在台湾训练奥运选手。经历一段较长的停训后，我在大学期间重新开始打球，目前常在<a href="https://www.columbustabletennisclub.org/" target="_blank" rel="noopener noreferrer">哥伦布乒乓球俱乐部（CTTC）</a>训练，也偶尔前往<a href="https://www.matchpointpickleballclub.com/table-tennis" target="_blank" rel="noopener noreferrer">Matchpoint 俱乐部</a>。我是<a href="https://www.usatt.org/" target="_blank" rel="noopener noreferrer">美国乒乓球协会（USATT）</a>注册球员，并曾代表俄亥俄州立大学参加<a href="https://www.nctta.org/" target="_blank" rel="noopener noreferrer">美国大学乒乓球协会（NCTTA）</a>联赛。`,
    rating: `当前 USATT 积分：1953`,
    "composition-1": `我在俄亥俄州立大学也辅修了音乐。对我而言，作曲是释放想法与情绪的一种重要方式。从2014 年开始，我在几乎不懂乐理的情况下便尝试写音乐，只因为有强烈的创作冲动。如今我的乐理知识仍谈不上深厚，但经过多年缓慢探索，我逐渐能够写出打动自己的作品。`,
    "composition-2": `随着人工智能迅速发展，一分钟生成的音乐或许比我逐音符写上数周的作品更悦耳、节奏更丰富、和声也更精巧，这难免令人五味杂陈。但正如旅程的意义不仅在终点，也在沿途风景，创作的过程本身才是我真正享受的部分。`,
    "photo-1":"2026 CTTC 9月 U4200 双打冠军。", "photo-2":"2026 CTTC 5月 U4200 双打冠军。", "photo-3":"2026 Match Point 四月赛 U2000 冠军。", "photo-4":"2026 Lida Cup 团体冠军。", "photo-5":"2026 NCTTA 中西部赛区男子单打赛，爱荷华大学。", "photo-6":"2025 第 17 届 CTTTI B 组团体冠军。", "photo-7":"2025 NCTTA 分区混合团体冠军。", "photo-8":"2025 NCTTA 分区混合团体赛。", "photo-9":"2025 NCTTA CTTC 分区赛。",
    "win-1":"获得 <a href='https://www.omnipong.com/EntryForms/1115-30.pdf' target='_blank' rel='noopener noreferrer'>2026 CTTC 9月双打赛</a> U4200 和 U4000 冠军！", "win-2":"获得 <a href='https://www.omnipong.com/EntryForms/1115-28.pdf' target='_blank' rel='noopener noreferrer'>2026 CTTC 5月双打赛</a> U4200 冠军！", "win-3":"获得 <a href='https://www.omnipong.com/EntryForms/1087-142.pdf' target='_blank' rel='noopener noreferrer'>2026 Match Point 四月赛</a> U2000 冠军！", "win-4":"获得 2026 Lida Cup 团体冠军！", "win-5":"获得 <a href='https://www.nctta.org/' target='_blank' rel='noopener noreferrer'>2025-2026 NCTTA 俄亥俄中部分区赛</a>团体冠军及男子单打亚军！", "win-6":"获得 <a href='https://www.omnipong.com/EntryForms/1115-26.pdf' target='_blank' rel='noopener noreferrer'>CTTTI B 组团体赛</a>冠军！"
  };

  const normalize = value => value.replace(/\s+/g, " ").trim();

  const abbreviateAuthorName = name => {
    const parts = normalize(name).split(" ");
    if (parts.length < 2) return name;
    const surname = parts.pop();
    const initials = parts.map(part => {
      if (/^[A-Z](?:\.-?[A-Z])?\.?$/.test(part)) return part.endsWith(".") ? part : `${part}.`;
      return part.split("-").map(piece => `${piece.charAt(0).toUpperCase()}.`).join("-");
    });
    return `${initials.join(" ")} ${surname}`;
  };

  const abbreviateAuthorList = authors =>
    authors.split(/\s+and\s+/).map(abbreviateAuthorName).join(" and ");

  const knownFullAuthorNames = [
    "Mohamed Yaseen Noor", "Enam A. Chowdhury", "Carmen S. Menoni",
    "Joseph R. Smith", "Vitaly E. Gruzdev", "Ziyao Su", "Johnny Eschbach",
    "Ravleen Kaur", "Andy Lee", "Conrad Kuz", "Turan Erdogan", "Doug Smith",
    "Emma DeAngelis", "Fariha Musarrat", "Alok Sutradhar", "Milo Eder",
    "Justin Twardowski", "Alphonse Marra", "Michael Chini", "Zenghu Chang",
    "Christopher Chae", "Sadikul Alam", "Hantian Gao", "Liam Clink",
    "Leonard Brillson", "Jinwoo Hwang", "Simin Zhang", "Charles Varin",
    "Adam Fisher", "Ryan Siebenaller"
  ];

  function initializeAuthorNames() {
    document.querySelectorAll(".pub-authors, .pub-author-line").forEach(container => {
      const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
      const textNodes = [];
      while (walker.nextNode()) textNodes.push(walker.currentNode);
      textNodes.forEach(node => {
        knownFullAuthorNames.forEach(name => {
          node.nodeValue = node.nodeValue.split(name).join(abbreviateAuthorName(name));
        });
      });
    });
  }

  const journalMetrics = {
    Optica: { impact: "8.8", jcr: "Q1", rising: "Q1", top: true },
    "Optics Letters": { impact: "3.3", jcr: "Q2", rising: "Q2", top: false },
    "High Power Laser Science and Engineering": { impact: "6.1", jcr: "Q1", rising: "Q1", top: true },
    "Physics of Plasmas": { impact: "2.5", jcr: "Q2", rising: "Q3", top: false },
    "Ultrafast Science": { impact: "7.5", jcr: "Q1", rising: "Q1", top: true },
    "ACS Applied Materials & Interfaces": { impact: "7.9", jcr: "Q1", rising: "Q2", top: true }
  };

  const publicationMetadata = {
    "10.1364/ol.608170": { author: "Ziyao Su and Enam A. Chowdhury", journal: "Opt. Lett.", volume: "51", number: "15", pages: "4236--4239", publisher: "Optica Publishing Group", month: "Aug" },
    "10.1017/hpl.2026.10161": { author: "Ziyao Su and Enam A. Chowdhury", journal: "High Power Laser Sci. Eng.", volume: "14", pages: "1--17", publisher: "Cambridge University Press" },
    "10.1364/cleo_at.2026.jw1.123": { author: "Ziyao Su and Enam A. Chowdhury", booktitle: "CLEO 2026", pages: "JW1.123", publisher: "Optica Publishing Group" },
    "10.1021/acsami.5c16451": { author: "Emma DeAngelis and Christopher Chae and Sadikul Alam and Hantian Gao and Mohamed Yaseen Noor and Ziyao Su and Liam Clink and Leonard Brillson and Jinwoo Hwang and Enam A. Chowdhury", journal: "ACS Appl. Mater. Interfaces", volume: "18", number: "1", pages: "2892--2904", publisher: "American Chemical Society", month: "Jan" },
    "10.1117/12.3071987": { citationKey: "Su2025Keldysh", author: "Ziyao Su and Mohamed Yaseen Noor and Emma DeAngelis and Carmen S. Menoni and Enam A. Chowdhury", title: "Keldysh ionization based-FDTD modeling of laser-induced damage threshold of MLD-IBS compression gratings for petawatt 2 µm laser systems", titleBraces: 2, volume: "PC13729", booktitle: "Laser-Induced Damage in Optical Materials 2025", editor: "Christopher Wren Carr and Carmen S. Menoni and Michael D. Thomas and Marco Jup{\\'e}", organization: "International Society for Optics and Photonics", publisher: "SPIE", pages: "PC1372907", keywords: "FDTD, LIDT, Grating, Keldysh photoionization" },
    "10.1017/hpl.2025.10041": { author: "Joseph R. Smith and Ziyao Su and Simin Zhang and Charles Varin and Vitaly E. Gruzdev and Enam A. Chowdhury", journal: "High Power Laser Sci. Eng.", volume: "13", pages: "e60", publisher: "Cambridge University Press" },
    "10.1117/12.3033000": { citationKey: "Su2024Electron", author: "Ziyao Su and Joseph R. Smith and Enam A. Chowdhury", title: "Electron dynamics of femtosecond laser induced plasma inside multilayer dielectric high reflectors studied using particle-in-cell (PIC) approach", titleBraces: 2, volume: "PC13190", booktitle: "Laser-Induced Damage in Optical Materials 2024", editor: "Christopher Wren Carr and Detlev Ristau and Carmen S. Menoni and Michael D. Thomas", organization: "International Society for Optics and Photonics", publisher: "SPIE", pages: "PC1319006", keywords: "Particle in Cell, Keldysh Ionization, plasma, multi-layer dielectric mirror, ultrashort few-cycle pulse, thermalization" },
    "10.1117/12.3032774": { citationKey: "Fisher2024Plasma", author: "Adam Fisher and Ryan Siebenaller and Emma DeAngelis and Mohamed Yaseen Noor and Conrad Kuz and Justin Twardowski and Milo Eder and Ziyao Su and Enam A. Chowdhury", title: "Study of plasma dynamics of femtosecond laser damage in metal thiophosphates", titleBraces: 2, volume: "PC13190", booktitle: "Laser-Induced Damage in Optical Materials 2024", editor: "Christopher Wren Carr and Detlev Ristau and Carmen S. Menoni and Michael D. Thomas", organization: "International Society for Optics and Photonics", publisher: "SPIE", pages: "PC131900Q", keywords: "femtosecond laser damge, pump probe microscopy, 2D material, van der Waals layered material, plasma dynamics, atomic force microscopy" },
    "10.1364/cleo_si.2024.sf3h.5": { author: "Ziyao Su and Joseph R. Smith and Enam A. Chowdhury", booktitle: "CLEO 2024", pages: "SF3H.5", publisher: "Optica Publishing Group" },
    "10.1364/ol.483581": { author: "Simin Zhang and Ziyao Su and Carmen S. Menoni and Enam A. Chowdhury", journal: "Opt. Lett.", volume: "48", number: "5", pages: "1212--1215", publisher: "Optica Publishing Group", month: "Mar", url: "https://opg.optica.org/ol/abstract.cfm?URI=ol-48-5-1212" },
    "10.1364/cleo_si.2022.sf3l.3": { author: "Simin Zhang and Ziyao Su and Carmen S. Menoni and Enam A. Chowdhury", booktitle: "Conference on Lasers and Electro-Optics", pages: "SF3L.3", publisher: "Optica Publishing Group" }
  };

  function initializeNews() {
    const list = document.querySelector(".news-list");
    const button = document.querySelector(".news-more");
    if (!list || !button) return;
    const items = [...list.children];
    let visibleCount = 4;
    const render = () => {
      items.forEach((item, index) => { item.hidden = index >= visibleCount; });
      button.hidden = visibleCount >= items.length;
    };
    button.addEventListener("click", () => {
      const previousCount = visibleCount;
      visibleCount += 4;
      render();
      items.slice(previousCount, visibleCount).forEach(item => {
        item.classList.add("news-reveal");
        item.addEventListener("animationend", () => item.classList.remove("news-reveal"), { once: true });
      });
    });
    render();
  }

  function createBibTeX(item) {
    const title = normalize(item.querySelector(".pub-title")?.textContent || "Untitled");
    const fallbackAuthors = normalize(item.querySelector(".pub-authors")?.textContent || "")
      .replace(/,\s+and\s+|\s+and\s+/g, ", ").split(/,\s*/).filter(Boolean).join(" and ");
    const venueText = normalize(item.querySelector(".pub-venue")?.textContent || "");
    const [kind = "Journal", venue = ""] = venueText.split("·").map(part => part.trim());
    const yearText = normalize(item.closest(".year-section")?.querySelector(".sticky-year")?.textContent || "");
    const year = /^\d{4}$/.test(yearText) ? yearText : "";
    const doiUrl = item.querySelector('a[href*="doi.org/"]')?.href || "";
    const doi = doiUrl.replace(/^https?:\/\/(dx\.)?doi\.org\//, "");
    const metadata = publicationMetadata[doi.toLowerCase()] || {};
    const authors = abbreviateAuthorList(metadata.author || fallbackAuthors);
    const firstAuthor = authors.split(/\s+and\s+/)[0] || "Su";
    const surname = (firstAuthor.match(/[A-Za-zÀ-ÖØ-öø-ÿ'-]+$/) || ["Su"])[0].replace(/[^A-Za-z0-9]/g, "");
    const stopwords = new Set(["the", "and", "with", "from", "into", "based", "using", "study", "modeling", "modelling"]);
    const keyword = (title.match(/[A-Za-z]+/g) || ["Work"]).find(word => word.length > 3 && !stopwords.has(word.toLowerCase())) || "Work";
    const key = metadata.citationKey || `${surname}${year || "Work"}${keyword}`;
    const type = kind.toLowerCase().startsWith("proceeding") ? "inproceedings" : "article";
    const venueField = type === "inproceedings" ? "booktitle" : "journal";
    const bibTitle = metadata.title || title;
    const titleValue = metadata.titleBraces === 2 ? `{{${bibTitle}}}` : `{${bibTitle}}`;
    const fields = [
      `  author = {${authors}},`,
      `  title = ${titleValue},`
    ];
    if (metadata.volume) fields.push(`  volume = {${metadata.volume}},`);
    fields.push(`  ${venueField} = {${metadata[venueField] || venue}},`);
    if (metadata.number) fields.push(`  number = {${metadata.number}},`);
    if (metadata.editor) fields.push(`  editor = {${metadata.editor}},`);
    if (metadata.organization) fields.push(`  organization = {${metadata.organization}},`);
    if (metadata.publisher) fields.push(`  publisher = {${metadata.publisher}},`);
    if (metadata.pages) fields.push(`  pages = {${metadata.pages}},`);
    if (metadata.keywords) fields.push(`  keywords = {${metadata.keywords}},`);
    if (metadata.month) fields.push(`  month = {${metadata.month}},`);
    if (year) fields.push(`  year = {${year}},`);
    if (doi) fields.push(`  doi = {${doi}},`);
    if (doiUrl) fields.push(`  URL = {${metadata.url || doiUrl}},`);
    const status = normalize(item.querySelector(".pub-meta")?.textContent || "");
    if (!year && status) fields.push(`  note = {${status}},`);
    fields[fields.length - 1] = fields[fields.length - 1].replace(/,$/, "");
    return `@${type}{${key},\n${fields.join("\n")}\n}`;
  }

  function initializePublicationTools() {
    document.querySelectorAll(".pub-item").forEach(item => {
      const venueText = normalize(item.querySelector(".pub-venue")?.textContent || "");
      const venue = venueText.split("·").slice(1).join("·").trim();
      const yearText = normalize(item.closest(".year-section")?.querySelector(".sticky-year")?.textContent || "");
      if (!/^\d{4}$/.test(yearText)) {
        if (!item.hasAttribute("data-keep-links")) item.querySelector(".pub-links")?.remove();
        return;
      }

      let links = item.querySelector(".pub-links");
      if (!links) {
        links = document.createElement("div");
        links.className = "pub-links";
        const abstract = item.querySelector(".pub-abstract");
        if (abstract) abstract.before(links);
        else item.append(links);
      }

      const existingLinks = [...links.querySelectorAll("a")];
      const doiLink = existingLinks.find(link => /doi\.org\//.test(link.href) && !/arxiv/i.test(link.href));
      const preprintLink = existingLinks.find(link => /arxiv|preprint/i.test(`${link.href} ${link.textContent}`));
      const slidesLink = existingLinks.find(link => /slide/i.test(`${link.href} ${link.textContent}`));
      const title = item.querySelector(".pub-title");
      if (doiLink && title && !title.querySelector("a")) {
        const anchor = document.createElement("a");
        anchor.href = doiLink.href;
        anchor.target = "_blank";
        anchor.rel = "noopener noreferrer";
        while (title.firstChild) anchor.append(title.firstChild);
        title.append(anchor);
      }
      links.replaceChildren();

      const metric = journalMetrics[venue];
      const isConference = /^Proceeding\b/i.test(venueText);
      const addMetric = (kind, value) => {
        const badge = document.createElement("span");
        badge.className = `pub-badge badge-${kind}${value ? "" : " is-unavailable"}`;
        badge.textContent = `${kind === "impact" ? "IF" : kind.toUpperCase()} ${value || "—"}`;
        links.append(badge);
      };
      if (isConference) {
        const conferenceBadge = document.createElement("span");
        conferenceBadge.className = "pub-badge badge-conference";
        conferenceBadge.dataset.en = "Conference";
        conferenceBadge.dataset.zh = "会议";
        conferenceBadge.textContent = "Conference";
        links.append(conferenceBadge);
      } else {
        addMetric("impact", metric?.impact);
        addMetric("jcr", metric?.jcr);
        const risingBadge = document.createElement("span");
        risingBadge.className = `pub-badge badge-rising${metric?.rising ? "" : " is-unavailable"}`;
        risingBadge.textContent = metric?.rising ? `新锐 ${metric.rising}${metric.top ? " · TOP" : ""}` : "新锐 —";
        links.append(risingBadge);
      }

      const abstract = item.querySelector(".pub-abstract");
      if (abstract) {
        const abstractButton = document.createElement("button");
        abstractButton.className = "abstract-toggle";
        abstractButton.type = "button";
        abstractButton.dataset.en = "Abstract";
        abstractButton.dataset.zh = "摘要";
        abstractButton.textContent = "Abstract";
        links.append(abstractButton);
      } else {
        const disabled = document.createElement("span");
        disabled.className = "pub-action is-unavailable";
        disabled.dataset.en = "Abstract";
        disabled.dataset.zh = "摘要";
        disabled.textContent = "Abstract";
        links.append(disabled);
      }

      const bibButton = document.createElement("button");
      bibButton.className = "bibtex-toggle";
      bibButton.type = "button";
      bibButton.dataset.en = "BibTeX";
      bibButton.dataset.zh = "BibTeX";
      bibButton.textContent = "BibTeX";
      bibButton.setAttribute("aria-expanded", "false");
      links.append(bibButton);

      const addResource = (label, link) => {
        if (link) {
          const anchor = document.createElement("a");
          anchor.className = "pub-action";
          anchor.href = link.href;
          anchor.target = "_blank";
          anchor.rel = "noopener noreferrer";
          anchor.dataset.en = label;
          anchor.dataset.zh = translations[label] || label;
          anchor.textContent = label;
          links.append(anchor);
        } else {
          const disabled = document.createElement("span");
          disabled.className = "pub-action is-unavailable";
          disabled.dataset.en = label;
          disabled.dataset.zh = translations[label] || label;
          disabled.textContent = label;
          disabled.setAttribute("aria-disabled", "true");
          links.append(disabled);
        }
      };
      if (isConference) addResource("Slides", slidesLink);
      else addResource("Preprint", preprintLink);

      const bibPanel = document.createElement("div");
      bibPanel.className = "bibtex-panel";
      bibPanel.hidden = true;
      const code = document.createElement("code");
      code.textContent = createBibTeX(item);
      const copy = document.createElement("button");
      copy.type = "button";
      copy.className = "bib-copy";
      copy.dataset.en = "Copy";
      copy.dataset.zh = "复制";
      copy.textContent = "Copy";
      bibPanel.append(code, copy);
      links.after(bibPanel);

      bibButton.addEventListener("click", () => {
        bibPanel.toggleAttribute("hidden");
        bibButton.setAttribute("aria-expanded", String(!bibPanel.hidden));
      });
      copy.addEventListener("click", async () => {
        try { await navigator.clipboard.writeText(code.textContent); }
        catch (_) {
          const range = document.createRange();
          range.selectNodeContents(code);
          getSelection().removeAllRanges();
          getSelection().addRange(range);
        }
        const zh = document.documentElement.lang.startsWith("zh");
        copy.textContent = zh ? "已复制" : "Copied";
        window.setTimeout(() => { copy.textContent = zh ? "复制" : "Copy"; }, 1200);
      });
    });
  }

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
      a.href = lang === "zh" ? "assets/documents/ziyao-su-cv-zh.pdf" : "assets/documents/ziyao-su-cv-en.pdf";
    });
    document.querySelectorAll(".nav-links a").forEach(a => {
      const base = a.getAttribute("href").split("?")[0];
      a.setAttribute("href", lang === "zh" ? `${base}?lang=zh` : base);
    });
    document.title = document.title.replace(lang === "zh" ? "Publications" : "学术成果", lang === "zh" ? "学术成果" : "Publications").replace(lang === "zh" ? "Life" : "生活", lang === "zh" ? "生活" : "Life");
  }

  const initialize = () => {
    initializeNews();
    initializeAuthorNames();
    initializePublicationTools();
    document.querySelectorAll(".horizontal-photo-strip figcaption").forEach((el, index) => el.dataset.contentKey = `photo-${index + 1}`);
    document.querySelectorAll(".championship-text").forEach((el, index) => el.dataset.contentKey = `win-${index + 1}`);
    document.querySelectorAll(".pub-authors strong, .pub-author-line strong").forEach(author => {
      if (["Ziyao Su", "Z. Su"].includes(normalize(author.textContent))) author.classList.add("author-highlight");
    });
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
    setLanguage(urlLanguage === "zh" ? "zh" : "en");
    requestAnimationFrame(() => document.body.classList.add("page-ready"));
  };

  initialize();
})();
