/* DORA Akademie – SPA-Router, Rendering, Fortschritt (localStorage). */
(function () {
  "use strict";
  const COURSES = window.COURSES || [];
  const byId = Object.fromEntries(COURSES.map(c => [c.id, c]));
  const app = document.getElementById("app");
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  const KEY = "dora.progress.v1";
  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; } }
  function savep(p) { try { localStorage.setItem(KEY, JSON.stringify(p)); } catch {} }
  const progress = Object.assign({ lessons: {}, quiz: {} }, load());
  const markLesson = (cid, lid) => { progress.lessons[cid + "/" + lid] = true; savep(progress); };
  const lessonDone = (cid, lid) => !!progress.lessons[cid + "/" + lid];
  function setQuiz(cid, score, total) { const pr = progress.quiz[cid]; if (!pr || score > pr.score) progress.quiz[cid] = { score, total }; savep(progress); }
  const courseUnits = (c) => c.lessons.length + (c.quiz ? 1 : 0);
  function courseDone(c) { let d = c.lessons.filter(l => lessonDone(c.id, l.id)).length; if (c.quiz && progress.quiz[c.id] && progress.quiz[c.id].score >= Math.ceil(progress.quiz[c.id].total * 0.6)) d++; return d; }
  const coursePct = (c) => Math.round(courseDone(c) / courseUnits(c) * 100);

  function courseCard(c) {
    const pct = coursePct(c);
    return `<a class="card course-card" href="#/kurs/${c.id}">
      <div class="ico">${c.icon}</div><h3>${esc(c.title)}</h3><p>${esc(c.summary)}</p>
      <div class="progress-label"><span>${c.lessons.length} Lektionen</span><span>${pct}%</span></div>
      <div class="progress"><i style="width:${pct}%"></i></div>
      <div class="meta-row" style="margin-top:.8rem"><span class="badge lvl-${c.level}">${c.level}</span><span>⏱ ${esc(c.duration)}</span></div></a>`;
  }
  function taskCard(t) {
    return `<a class="card course-card" href="#/aufgabe/${t.id}"><div class="ico">${t.icon}</div>
      <h3>${esc(t.title)}</h3><p>${esc(t.desc)}</p>
      <div class="meta-row"><span class="badge">interaktiv</span><span>mit Mandatsdaten</span></div></a>`;
  }

  function viewHome() {
    const lessons = COURSES.reduce((a, c) => a + c.lessons.length, 0);
    const pills = Object.values(window.PILLARS);
    return `
    <section class="hero">
      <div>
        <span class="kicker">// Verordnung (EU) 2022/2554 · gilt seit 17.01.2025</span>
        <h1>DORA verstehen – und sicher umsetzen.</h1>
        <p class="lead">Die DORA Akademie erklärt die digitale operationale Resilienz im Finanzsektor Schritt für Schritt: alle fünf Säulen, alle RTS &amp; ITS und praktische Aufgaben mit generierten Mandatsdaten.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#/kurse">Kurse starten →</a>
          <a class="btn btn-ghost" href="#/standards">RTS &amp; ITS ansehen</a>
        </div>
        <div class="hero-stats">
          <div><div class="num">5</div><div class="lbl">Säulen</div></div>
          <div><div class="num">${window.STANDARDS.length}</div><div class="lbl">RTS / ITS</div></div>
          <div><div class="num">64</div><div class="lbl">Artikel erklärt</div></div>
          <div><div class="num">${lessons}+</div><div class="lbl">Lektionen</div></div>
        </div>
      </div>
      <div class="terminal" aria-hidden="true">
        <div class="bar"><span></span><span></span><span></span></div>
<pre><span class="c-m"># DORA · 5 Säulen</span>
<span class="c-g">1</span> IKT-Risikomanagement        <span class="c-m">Art. 5–16</span>
<span class="c-g">2</span> Vorfälle &amp; Meldung         <span class="c-m">Art. 17–23</span>
<span class="c-g">3</span> Resilienz-Tests (TLPT)      <span class="c-m">Art. 24–27</span>
<span class="c-g">4</span> Drittparteienrisiko         <span class="c-m">Art. 28–44</span>
<span class="c-g">5</span> Informationsaustausch       <span class="c-m">Art. 45</span>
<span class="c-y">Ziel: Störungen überstehen, nicht nur verhindern.</span> ▋</pre>
      </div>
    </section>

    <div class="section-title"><h2>Die fünf Säulen</h2></div>
    ${(window.ANIM ? window.ANIM.pillars() : "")}
    <div class="grid grid-3" style="margin-top:1.2rem">${pills.slice(0, 6).map(p => `<div class="card"><div class="ico" style="font-size:1.6rem;width:48px;height:48px;display:grid;place-items:center;border-radius:12px;background:var(--panel-2);border:1px solid var(--border);margin-bottom:.6rem">${p.icon}</div><h3 style="font-size:1.05rem">${esc(p.name)}</h3><p class="muted" style="font-size:.88rem">${esc(p.art)}</p></div>`).join("")}</div>

    <div class="section-title"><h2>DORA animiert erklärt</h2><a class="link" href="#/artikel">Alle 64 Artikel →</a></div>
    <p class="muted" style="margin-top:-.4rem">Bewegte Grafiken statt Paragraphenwüste – die Kernmechaniken auf einen Blick:</p>
    <div style="display:grid;gap:1rem">
      ${(window.ANIM ? window.ANIM.incidentTimeline() : "")}
      <div class="grid grid-2">
        ${(window.ANIM ? window.ANIM.rtoRpo() : "")}
        ${(window.ANIM ? window.ANIM.registerFlow() : "")}
      </div>
    </div>

    <div class="section-title"><h2>Kurse</h2><a class="link" href="#/kurse">Alle anzeigen →</a></div>
    <div class="grid grid-3">${COURSES.slice(0, 6).map(courseCard).join("")}</div>

    <div class="section-title"><h2>Praktische Aufgaben</h2><a class="link" href="#/aufgaben">Alle Aufgaben →</a></div>
    <div class="grid grid-3">${window.TASKS.map(taskCard).join("")}</div>

    <div class="callout" style="margin-top:2.5rem"><span class="tag">Hinweis</span>
      <p>Die DORA Akademie ist ein didaktisches Angebot ohne Gewähr und ersetzt keine Rechts- oder Compliance-Beratung. Maßgeblich sind ausschließlich die amtlichen Texte in EUR-Lex.</p></div>`;
  }

  function viewCatalog() {
    return `<div class="breadcrumb"><a href="#/">Start</a> / Kurse</div>
      <h1>Alle Kurse</h1><p class="muted">Von den Grundlagen bis zur Aufsicht über kritische Drittdienstleister. Dein Fortschritt bleibt lokal im Browser.</p>
      <div class="grid grid-3" style="margin-top:1.5rem">${COURSES.map(courseCard).join("")}</div>`;
  }

  function viewStandards() {
    const base = window.DORA_BASE;
    const groups = {};
    window.STANDARDS.forEach(s => { (groups[s.pillar] = groups[s.pillar] || []).push(s); });
    const section = (pid) => {
      const p = window.PILLARS[pid]; const list = groups[pid] || [];
      if (!list.length) return "";
      return `<div class="section-title" style="margin-bottom:.6rem"><h2 style="font-size:1.15rem">${p.icon} ${esc(p.name)}</h2></div>
        <div class="lesson-list">${list.map(s => `<div class="lesson-row" style="align-items:flex-start">
          <span class="idx ${s.typ === "ITS" ? "quiz" : ""}" style="width:52px;font-size:.72rem">${s.typ}</span>
          <span class="t"><a href="${s.eurlex}" target="_blank" rel="noopener"><strong>(EU) ${esc(s.nr)}</strong></a> · ${esc(s.kurz)}
            <small>${esc(s.titel)} · ${esc(s.art)}</small></span>
          <a class="chev" href="${s.eurlex}" target="_blank" rel="noopener" title="EUR-Lex">↗</a></div>`).join("")}</div>`;
    };
    return `<div class="breadcrumb"><a href="#/">Start</a> / RTS &amp; ITS</div>
      <h1>Level-2-Standards: RTS &amp; ITS</h1>
      <p class="muted">DORA wird durch technische Standards konkretisiert: <strong>RTS</strong> (Regulierungsstandards, delegierte Verordnungen) und <strong>ITS</strong> (Durchführungsstandards). Unten die verabschiedeten Rechtsakte, gruppiert nach Säule. Klick öffnet den amtlichen Text in EUR-Lex.</p>
      <div class="callout" style="margin:1rem 0"><span class="tag">Basisrechtsakt</span>
        <p><a href="${base.eurlex}" target="_blank" rel="noopener"><strong>Verordnung (EU) ${base.nr}</strong></a> – ${esc(base.titel)}</p></div>
      ${["risiko", "vorfaelle", "testen", "dritte", "aufsicht"].map(section).join("")}
      <p class="muted" style="font-size:.85rem;margin-top:1.5rem">Neben RTS/ITS bestehen ergänzende Leitlinien der ESAs (z. B. zu aggregierten Kosten/Verlusten und zur Aufsichtskooperation). Diese Übersicht dient der Orientierung; maßgeblich ist EUR-Lex.</p>`;
  }

  // ---- Artikel-Navigator (alle 64 DORA-Artikel) ----
  const ARTS = window.ARTICLES || {};
  const CHAPS = window.CHAPTERS || [];
  function standardsForArticle(n) {
    return (window.STANDARDS || []).filter(s => {
      const nums = (s.art.match(/\d+/g) || []).map(Number);
      return nums.includes(n);
    });
  }
  const artAnim = { 6:"riskCycle", 11:"riskCycle", 12:"rtoRpo", 18:"incidentTimeline", 19:"incidentTimeline", 20:"incidentTimeline", 28:"registerFlow", 31:"oversight", 33:"oversight", 42:"oversight" };

  function viewArticles() {
    const sec = CHAPS.map(ch => {
      let chips = "";
      for (let n = ch.range[0]; n <= ch.range[1]; n++) {
        const a = ARTS[n]; if (!a) continue;
        const st = standardsForArticle(n).length;
        chips += `<a class="art-chip" href="#/artikel/${n}"><span class="an">Art. ${n}</span><span class="at">${esc(a[0])}</span>${st ? `<span class="asb">${st} RTS/ITS</span>` : ""}</a>`;
      }
      return `<div class="section-title" style="margin:1.6rem 0 .5rem"><h2 style="font-size:1.1rem">Kapitel ${ch.id} · ${esc(ch.name)}</h2><span class="muted" style="font-size:.8rem">Art. ${ch.range[0]}–${ch.range[1]}</span></div>
        <div class="art-grid">${chips}</div>`;
    }).join("");
    return `<div class="breadcrumb"><a href="#/">Start</a> / Artikel</div>
      <h1>Artikel-Navigator</h1>
      <p class="muted">Alle <strong>64 Artikel</strong> der Verordnung (EU) 2022/2554 – nach Kapiteln geordnet, mit Querverweisen zwischen den Artikeln und Verknüpfung zu den passenden RTS/ITS. Klick auf einen Artikel öffnet die Kurzerläuterung.</p>
      <div class="callout" style="margin:1rem 0"><span class="tag">So liest du DORA</span><p>DORA ist ein zusammenhängendes System: Risikomanagement (Kap. II) liefert die Basis, Vorfälle (Kap. III) und Tests (Kap. IV) prüfen sie, Drittparteien (Kap. V) und Austausch (Kap. VI) erweitern sie. Folge den <strong>„Verwandte Artikel"</strong>-Verknüpfungen, um die Zusammenhänge zu verstehen.</p></div>
      ${sec}
      <p class="muted" style="font-size:.85rem;margin-top:1.5rem">Erläuterungen sind didaktische Zusammenfassungen; maßgeblich ist der amtliche Text in EUR-Lex.</p>`;
  }

  function viewArticle(nRaw) {
    const n = parseInt(nRaw, 10); const a = ARTS[n]; if (!a) return notFound();
    const ch = CHAPS.find(c => n >= c.range[0] && n <= c.range[1]);
    const [title, kurz, see] = a;
    const sts = standardsForArticle(n);
    const relCourse = ch && ch.pillar ? COURSES.find(c => c.pillar === ch.pillar) : null;
    const anim = artAnim[n] && window.ANIM && window.ANIM[artAnim[n]] ? window.ANIM[artAnim[n]]() : "";
    const prevN = n > 1 ? n - 1 : null, nextN = n < 64 ? n + 1 : null;
    const seeChips = (see && see.length) ? `<div class="key-points" style="margin-top:1.3rem"><h4>Verwandte Artikel</h4>
      <div class="art-grid">${see.map(m => ARTS[m] ? `<a class="art-chip" href="#/artikel/${m}"><span class="an">Art. ${m}</span><span class="at">${esc(ARTS[m][0])}</span></a>` : "").join("")}</div></div>` : "";
    const stBox = sts.length ? `<div class="key-points" style="margin-top:1.3rem"><h4>Konkretisierende RTS/ITS</h4><ul>${sts.map(s => `<li><a href="${s.eurlex}" target="_blank" rel="noopener">(EU) ${esc(s.nr)}</a> – ${esc(s.kurz)} <span class="badge">${s.typ}</span></li>`).join("")}</ul></div>` : "";
    const courseBox = relCourse ? `<div class="callout" style="margin-top:1.3rem"><span class="tag">Passender Kurs</span><p>Vertiefe dieses Thema im Kurs <a href="#/kurs/${relCourse.id}">${esc(relCourse.title)}</a>.</p></div>` : "";
    const law = window.ARTICLE_TEXT && window.ARTICLE_TEXT[n] ? `<details class="lawtext" open><summary>Amtlicher Wortlaut – Artikel ${n}</summary><div class="lawbody">${window.ARTICLE_TEXT[n]}</div></details>` : "";
    return `<div class="breadcrumb"><a href="#/">Start</a> / <a href="#/artikel">Artikel</a> / Art. ${n}</div>
      <p class="muted" style="margin:0">${ch ? "Kapitel " + ch.id + " · " + esc(ch.name) : ""}</p>
      <h1 style="margin:.2rem 0 .1rem">Artikel ${n} – ${esc(title)}</h1>
      <p class="lead" style="margin:.4rem 0 1.1rem">${kurz}</p>
      ${anim ? `<div style="margin:1.2rem 0">${anim}</div>` : ""}
      ${law}
      ${stBox}
      ${seeChips}
      ${courseBox}
      <div class="lesson-nav" style="margin-top:1.6rem">
        ${prevN ? `<a class="btn btn-ghost" href="#/artikel/${prevN}">← Art. ${prevN}</a>` : `<a class="btn btn-ghost" href="#/artikel">← Übersicht</a>`}
        <a class="btn btn-ghost" href="${(window.DORA_BASE||{}).eurlex || '#'}" target="_blank" rel="noopener">Bei EUR-Lex prüfen ↗</a>
        ${nextN ? `<a class="btn btn-primary" href="#/artikel/${nextN}">Art. ${nextN} →</a>` : `<a class="btn btn-primary" href="#/artikel">Zur Übersicht</a>`}
      </div>`;
  }

  function viewCourse(cid) {
    const c = byId[cid]; if (!c) return notFound();
    const pct = coursePct(c);
    const rows = c.lessons.map((l, i) => { const done = lessonDone(c.id, l.id);
      return `<a class="lesson-row" href="#/kurs/${c.id}/${l.id}"><span class="idx ${done ? "done" : ""}">${done ? "✓" : i + 1}</span>
        <span class="t">${esc(l.title)}<small>${esc(l.subtitle || "")}</small></span><span class="chev">→</span></a>`; }).join("");
    const qz = progress.quiz[c.id];
    const quizRow = c.quiz ? `<a class="lesson-row" href="#/kurs/${c.id}/quiz"><span class="idx quiz">★</span>
      <span class="t">Abschluss-Quiz<small>${qz ? "Bestes Ergebnis: " + qz.score + "/" + qz.total : c.quiz.length + " Fragen"}</small></span><span class="chev">→</span></a>` : "";
    const rel = (window.STANDARDS.filter(s => s.pillar === c.pillar));
    return `<div class="breadcrumb"><a href="#/">Start</a> / <a href="#/kurse">Kurse</a> / ${esc(c.title)}</div>
      <div class="course-head"><div class="ico">${c.icon}</div>
        <div style="flex:1;min-width:240px"><h1 style="margin-bottom:.3rem">${esc(c.title)}</h1>
          <div class="tag-row"><span class="badge lvl-${c.level}">${c.level}</span><span class="badge">⏱ ${esc(c.duration)}</span>${c.tags.map(t => `<span class="badge">${esc(t)}</span>`).join("")}</div>
          <p class="muted" style="margin:.7rem 0 0">${esc(c.summary)}</p></div></div>
      <div class="progress-label"><span>Fortschritt</span><span>${courseDone(c)}/${courseUnits(c)} · ${pct}%</span></div>
      <div class="progress"><i style="width:${pct}%"></i></div>
      <div class="lesson-list">${rows}${quizRow}</div>
      ${rel.length ? `<div class="key-points" style="margin-top:1.4rem"><h4>Passende RTS/ITS</h4><ul>${rel.map(s => `<li><a href="${s.eurlex}" target="_blank" rel="noopener">(EU) ${esc(s.nr)}</a> – ${esc(s.kurz)} (${s.typ})</li>`).join("")}</ul></div>` : ""}`;
  }

  function viewLesson(cid, lid) {
    const c = byId[cid]; if (!c) return notFound();
    if (lid === "quiz") return viewQuiz(c);
    const idx = c.lessons.findIndex(l => l.id === lid); const l = c.lessons[idx]; if (!l) return notFound();
    markLesson(c.id, l.id);
    const prev = idx > 0 ? c.lessons[idx - 1] : null, next = idx < c.lessons.length - 1 ? c.lessons[idx + 1] : null;
    const nextHref = next ? `#/kurs/${c.id}/${next.id}` : (c.quiz ? `#/kurs/${c.id}/quiz` : `#/kurs/${c.id}`);
    const nextLbl = next ? "Nächste Lektion →" : (c.quiz ? "Zum Abschluss-Quiz →" : "Zur Kursübersicht →");
    return `<div class="breadcrumb"><a href="#/kurse">Kurse</a> / <a href="#/kurs/${c.id}">${esc(c.title)}</a> / Lektion ${idx + 1}</div>
      <div class="lesson"><div>
        <p class="muted" style="margin:0">${c.icon} ${esc(c.title)} · Lektion ${idx + 1}/${c.lessons.length}</p>
        <h1 style="margin:.2rem 0 .1rem">${esc(l.title)}</h1><p class="muted" style="margin:0 0 1.2rem">${esc(l.subtitle || "")}</p>
        ${l.anim && window.ANIM && window.ANIM[l.anim] ? `<div style="margin:0 0 1.3rem">${window.ANIM[l.anim]()}</div>` : ""}
        <div class="lesson-body">${l.html}</div>
        ${l.arts && l.arts.length ? `<div class="key-points" style="margin-top:1.3rem"><h4>Artikel zum Nachschlagen</h4><div class="art-grid">${l.arts.map(n => (window.ARTICLES && window.ARTICLES[n]) ? `<a class="art-chip" href="#/artikel/${n}"><span class="an">Art. ${n}</span><span class="at">${esc(window.ARTICLES[n][0])}</span></a>` : "").join("")}</div></div>` : ""}
        <div class="lesson-nav">
          ${prev ? `<a class="btn btn-ghost" href="#/kurs/${c.id}/${prev.id}">← Zurück</a>` : `<a class="btn btn-ghost" href="#/kurs/${c.id}">← Übersicht</a>`}
          <a class="btn btn-primary" href="${nextHref}">${nextLbl}</a></div></div></div>`;
  }

  function viewQuiz(c) {
    if (!c.quiz) return notFound();
    setTimeout(() => wireQuiz(c), 0);
    return `<div class="breadcrumb"><a href="#/kurse">Kurse</a> / <a href="#/kurs/${c.id}">${esc(c.title)}</a> / Quiz</div>
      <h1>Abschluss-Quiz: ${esc(c.title)}</h1><p class="muted">Ab 60 % gilt der Kurs als abgeschlossen.</p>
      <form class="quiz" id="quizForm">${c.quiz.map((q, qi) => `<div class="q" data-qi="${qi}"><div class="qt">${qi + 1}. ${esc(q.q)}</div>
        ${q.options.map((o, oi) => `<label class="opt"><input type="radio" name="q${qi}" value="${oi}"><span>${esc(o)}</span></label>`).join("")}
        <div class="explain">${esc(q.explain)}</div></div>`).join("")}
        <button type="submit" class="btn btn-primary">Auswerten</button></form><div id="quizResult"></div>`;
  }
  function wireQuiz(c) {
    const form = document.getElementById("quizForm"); if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault(); let score = 0;
      c.quiz.forEach((q, qi) => {
        const qEl = form.querySelector(`.q[data-qi="${qi}"]`), chosen = form.querySelector(`input[name="q${qi}"]:checked`);
        qEl.classList.add("answered");
        qEl.querySelectorAll(".opt").forEach((opt, oi) => { opt.classList.remove("correct", "wrong"); if (oi === q.answer) opt.classList.add("correct"); else if (chosen && +chosen.value === oi) opt.classList.add("wrong"); });
        if (chosen && +chosen.value === q.answer) score++;
      });
      setQuiz(c.id, score, c.quiz.length);
      const pct = Math.round(score / c.quiz.length * 100), pass = pct >= 60;
      const res = document.getElementById("quizResult");
      res.innerHTML = `<div class="quiz-result"><div class="score" style="color:${pass ? "var(--accent)" : "var(--warn)"}">${score}/${c.quiz.length}</div>
        <p>${pct}% richtig — ${pass ? "bestanden! 🎉 Kurs abgeschlossen." : "noch nicht bestanden (60 % nötig)."}</p>
        <div style="display:flex;gap:.6rem;justify-content:center;flex-wrap:wrap;margin-top:.6rem">
        <a class="btn btn-ghost" href="#/kurs/${c.id}">Zur Kursübersicht</a><a class="btn btn-primary" href="#/dashboard">Mein Fortschritt</a></div></div>`;
      res.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  function viewTasks() {
    return `<div class="breadcrumb"><a href="#/">Start</a> / Aufgaben</div>
      <h1>Praktische Aufgaben</h1>
      <p class="muted">Anwenden statt nur lesen: Jede Aufgabe arbeitet mit <strong>generierten Mandatsdaten</strong> (fiktive Finanzunternehmen, Dienstleister, Vorfälle). Alles läuft lokal im Browser.</p>
      <div class="grid grid-3" style="margin-top:1.5rem">${window.TASKS.map(taskCard).join("")}</div>`;
  }
  function viewTask(id) {
    const t = window.TASKS_BY_ID[id]; if (!t) return notFound();
    setTimeout(() => { const el = document.getElementById("taskMount"); if (el) t.mount(el); }, 0);
    return `<div class="breadcrumb"><a href="#/aufgaben">Aufgaben</a> / ${esc(t.title)}</div>
      <h1>${t.icon} ${esc(t.title)}</h1><p class="muted">${esc(t.desc)}</p><div id="taskMount"></div>`;
  }

  function viewDashboard() {
    const totalLessons = COURSES.reduce((a, c) => a + c.lessons.length, 0);
    const doneLessons = COURSES.reduce((a, c) => a + c.lessons.filter(l => lessonDone(c.id, l.id)).length, 0);
    const doneCourses = COURSES.filter(c => coursePct(c) === 100).length;
    const quizzes = Object.keys(progress.quiz).length;
    const certs = COURSES.filter(c => coursePct(c) === 100);
    const rows = COURSES.map(c => { const pct = coursePct(c);
      return `<a class="lesson-row" href="#/kurs/${c.id}"><span class="idx ${pct === 100 ? "done" : ""}">${pct === 100 ? "✓" : c.icon}</span>
        <span class="t">${esc(c.title)}<small>${courseDone(c)}/${courseUnits(c)} erledigt</small></span>
        <span style="width:120px"><span class="progress"><i style="width:${pct}%"></i></span></span>
        <span class="chev" style="width:42px;text-align:right">${pct}%</span></a>`; }).join("");
    const certHtml = certs.length ? certs.map(c => `<div class="cert"><div class="seal">🏅</div>
      <p class="muted" style="margin:.2rem 0">Die DORA Akademie bescheinigt den Abschluss des Kurses</p>
      <h2 style="margin:.2rem 0">${esc(c.title)}</h2>
      <p class="muted">Quiz bestanden mit ${progress.quiz[c.id] ? progress.quiz[c.id].score + "/" + progress.quiz[c.id].total : "—"} · Alle Lektionen durchgearbeitet.</p>
      <button class="btn btn-ghost btn-sm" onclick="window.print()">Zertifikat drucken / als PDF speichern</button></div>`).join("")
      : `<p class="muted">Noch kein Kurs vollständig abgeschlossen. Arbeite alle Lektionen durch und bestehe das Quiz, um ein Zertifikat zu erhalten.</p>`;
    return `<div class="breadcrumb"><a href="#/">Start</a> / Mein Fortschritt</div><h1>Mein Fortschritt</h1>
      <div class="stat-grid"><div class="stat"><div class="n">${doneLessons}/${totalLessons}</div><div class="l">Lektionen</div></div>
        <div class="stat"><div class="n">${doneCourses}</div><div class="l">Kurse fertig</div></div>
        <div class="stat"><div class="n">${quizzes}</div><div class="l">Quizze</div></div>
        <div class="stat"><div class="n">${certs.length}</div><div class="l">Zertifikate</div></div></div>
      <div class="section-title"><h2>Kurse</h2></div><div class="lesson-list">${rows}</div>
      <div class="section-title"><h2>Zertifikate</h2></div>${certHtml}
      <p style="margin-top:2rem"><button class="btn btn-ghost btn-sm" id="resetBtn">Fortschritt zurücksetzen</button></p>`;
  }

  function viewGlossar() {
    const G = [
      ["DORA", "Digital Operational Resilience Act – Verordnung (EU) 2022/2554 über die digitale operationale Resilienz im Finanzsektor."],
      ["RTS", "Regulatory Technical Standard – technischer Regulierungsstandard (als delegierte Verordnung der Kommission), konkretisiert DORA."],
      ["ITS", "Implementing Technical Standard – technischer Durchführungsstandard (Durchführungsverordnung), z. B. Formulare/Vorlagen."],
      ["ESAs", "European Supervisory Authorities: EBA, ESMA und EIOPA – entwickeln die RTS/ITS gemeinsam."],
      ["Kritische/wichtige Funktion", "Funktion, deren Ausfall Geschäftsfortführung, Finanzstabilität oder aufsichtliche Pflichten wesentlich beeinträchtigen würde."],
      ["Schwerwiegender Vorfall", "IKT-Vorfall, der die Kriterien/Schwellen des RTS 2024/1772 erfüllt und damit meldepflichtig ist."],
      ["Informationsregister", "Register aller vertraglichen Vereinbarungen über IKT-Dienstleistungen (Art. 28 Abs. 3, ITS 2024/2956)."],
      ["IKT-Drittdienstleister", "Anbieter von IKT-Dienstleistungen für Finanzunternehmen (z. B. Cloud, Rechenzentrum, Software-as-a-Service)."],
      ["CTPP", "Critical ICT Third-Party Provider – von den ESAs als kritisch eingestufter IKT-Anbieter unter direkter EU-Aufsicht."],
      ["Lead Overseer", "Federführende ESA, die die Aufsicht (Oversight) über einen bestimmten CTPP ausübt."],
      ["TLPT", "Threat-Led Penetration Testing – bedrohungsorientierter Penetrationstest, angelehnt an TIBER-EU (Art. 26, RTS 2025/1190)."],
      ["LEI", "Legal Entity Identifier – 20-stellige Kennung zur eindeutigen Identifikation von Rechtsträgern (u. a. im Informationsregister)."],
      ["RTO / RPO", "Recovery Time / Recovery Point Objective – Wiederanlaufzeit bzw. maximal tolerierbarer Datenverlust bei der Wiederherstellung."],
      ["Proportionalität", "Grundsatz, Anforderungen an Größe, Risiko und Komplexität auszurichten (Art. 4); vereinfachter Rahmen nach Art. 16."],
    ];
    return `<div class="breadcrumb"><a href="#/">Start</a> / Glossar</div><h1>Glossar</h1>
      <p class="muted">Die wichtigsten DORA-Begriffe auf einen Blick.</p>
      <dl class="gloss">${G.map(([t, d]) => `<dt>${esc(t)}</dt><dd>${esc(d)}</dd>`).join("")}</dl>`;
  }

  function viewUeber() {
    return `<div class="breadcrumb"><a href="#/">Start</a> / Über</div><h1>Über die DORA Akademie</h1>
      <p class="muted">Eine freie, interaktive Lernplattform zur Verordnung (EU) 2022/2554 (DORA) und ihren technischen Standards – für Compliance, IT, Risiko und Revision in Finanzunternehmen und bei IKT-Dienstleistern.</p>
      <div class="key-points"><h4>Prinzipien</h4><ul>
        <li>Nah am Normtext – alle Verweise auf Artikel und RTS/ITS mit EUR-Lex-Link.</li>
        <li>Üben statt nur lesen – Aufgaben mit generierten Mandatsdaten.</li>
        <li>Datensparsam – kein Konto, kein Tracking; Fortschritt bleibt lokal.</li>
      </ul></div>
      <p class="muted">Die Inhalte sind didaktische Zusammenfassungen und können die amtlichen Texte, Guidelines der ESAs und nationale Konkretisierungen nicht vollständig abbilden. <strong>Keine Rechtsberatung.</strong> Maßgeblich ist stets EUR-Lex. Stand der Rechtsakte: 2024–2025.</p>`;
  }

  const notFound = () => `<div class="center" style="padding:3rem 0"><h1>404</h1><p class="muted">Diese Seite gibt es nicht.</p><a class="btn btn-primary" href="#/">Zur Startseite</a></div>`;

  function render() {
    const hash = location.hash.replace(/^#/, "") || "/";
    const p = hash.split("/").filter(Boolean);
    let html;
    if (p.length === 0) html = viewHome();
    else if (p[0] === "kurse") html = viewCatalog();
    else if (p[0] === "standards") html = viewStandards();
    else if (p[0] === "artikel" && p.length === 2) html = viewArticle(p[1]);
    else if (p[0] === "artikel") html = viewArticles();
    else if (p[0] === "kurs" && p.length === 2) html = viewCourse(p[1]);
    else if (p[0] === "kurs" && p.length === 3) html = viewLesson(p[1], p[2]);
    else if (p[0] === "aufgaben") html = viewTasks();
    else if (p[0] === "aufgabe" && p[1]) html = viewTask(p[1]);
    else if (p[0] === "dashboard") html = viewDashboard();
    else if (p[0] === "glossar") html = viewGlossar();
    else if (p[0] === "ueber") html = viewUeber();
    else html = notFound();
    app.innerHTML = html; window.scrollTo(0, 0); app.focus({ preventScroll: true });
    document.querySelectorAll("#mainNav a").forEach(a => { const h = a.getAttribute("href").replace(/^#/, ""); a.classList.toggle("active", hash === h || (h !== "/" && hash.startsWith(h))); });
    document.getElementById("mainNav").classList.remove("open");
    const rb = document.getElementById("resetBtn");
    if (rb) rb.onclick = () => { if (confirm("Wirklich den gesamten lokalen Fortschritt löschen?")) { localStorage.removeItem(KEY); progress.lessons = {}; progress.quiz = {}; render(); } };
  }

  const navToggle = document.getElementById("navToggle");
  if (navToggle) navToggle.onclick = () => { const nav = document.getElementById("mainNav"); const open = nav.classList.toggle("open"); navToggle.setAttribute("aria-expanded", open ? "true" : "false"); };
  window.addEventListener("hashchange", render);
  render();
})();
