/* DORA Akademie – Praktische Aufgaben mit generierten Mandatsdaten.
   Alles läuft lokal im Browser. Die Bewertungslogik ist eine offengelegte
   didaktische Heuristik – die verbindlichen Schwellen stehen in den RTS. */
(function () {
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const pick = (a) => a[Math.floor(Math.random() * a.length)];
  const randint = (a, b) => a + Math.floor(Math.random() * (b - a + 1));

  // ── Synthetische Mandatsdaten ──────────────────────────────────────────
  const ENTITIES = [
    { name: "Musterbank AG", art: "Kreditinstitut" },
    { name: "Nordlicht Versicherung AG", art: "Versicherungsunternehmen" },
    { name: "Rheinwerk Wertpapierhandel GmbH", art: "Wertpapierfirma" },
    { name: "Alpenkasse eG", art: "Kreditgenossenschaft" },
    { name: "Zahlwerk Payments GmbH", art: "Zahlungsinstitut" },
  ];
  const PROVIDERS = ["CloudNimbus Europe SE", "CoreBank Systems GmbH", "SecureHost AG", "DataFortress Ltd", "PayRails B.V.", "Helvetia DataCenter AG"];
  const FUNCTIONS = [
    { f: "Kernbankensystem", crit: true }, { f: "Zahlungsverkehrsabwicklung", crit: true },
    { f: "Betrugserkennung", crit: true }, { f: "Depotführung", crit: true },
    { f: "Datensicherung / Backup", crit: true }, { f: "E-Mail & Kollaboration", crit: false },
    { f: "Marketing-Website", crit: false }, { f: "Reisekostenabrechnung", crit: false },
  ];
  const COUNTRIES = ["DE", "IE", "NL", "FR", "LU"];

  function randLEI() {
    const ch = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let s = ""; for (let i = 0; i < 18; i++) s += ch[Math.floor(Math.random() * ch.length)];
    return s + String(randint(10, 99));
  }
  function genEntity() { const e = pick(ENTITIES); return { ...e, lei: randLEI() }; }
  function genContract() {
    const fn = pick(FUNCTIONS);
    return { provider: pick(PROVIDERS), lei: randLEI(), func: fn.f, critical: fn.crit,
      country: pick(COUNTRIES), sub: Math.random() < 0.45 };
  }

  // ── Aufgabe 1: Vorfall-Klassifizierung ─────────────────────────────────
  function genIncident() {
    const svcCrit = Math.random() < 0.55;
    const clientsPct = pick([0.2, 1, 3, 8, 12, 20, 35]);
    const downtime = pick([0.5, 1, 2, 4, 8, 26]);
    const geo = randint(1, 4);
    const econ = pick([5, 40, 90, 250, 800]) * 1000;
    const dataLoss = pick(["keiner", "Verfügbarkeit", "Integrität", "Vertraulichkeit"]);
    const func = svcCrit ? pick(FUNCTIONS.filter(f => f.crit)).f : pick(FUNCTIONS.filter(f => !f.crit)).f;
    // Offengelegte Heuristik (NICHT der amtliche Schwellenwert):
    const flags = [];
    if (svcCrit) flags.push("kritische/wichtige Funktion betroffen");
    if (clientsPct >= 10) flags.push("≥ 10 % der Kunden betroffen");
    if (downtime >= 2) flags.push("Ausfallzeit ≥ 2 Stunden");
    if (geo >= 2) flags.push("mehr als ein Mitgliedstaat betroffen");
    if (econ >= 100000) flags.push("wirtschaftliche Auswirkung ≥ 100.000 €");
    if (dataLoss === "Integrität" || dataLoss === "Vertraulichkeit") flags.push("Verlust der " + dataLoss);
    const major = (svcCrit && flags.length >= 2) || flags.length >= 3;
    return { svcCrit, clientsPct, downtime, geo, econ, dataLoss, func, flags, major };
  }

  const taskKlassifizierung = {
    id: "klassifizierung", title: "Vorfall-Klassifizierung", icon: "🚨",
    desc: "Beurteile generierte IKT-Vorfälle anhand der Kriterien aus Art. 18 / RTS 2024/1772: schwerwiegend oder nicht?",
    mount(el) {
      let score = 0, round = 0;
      function render() {
        const inc = genIncident(); round++;
        el.innerHTML = `
          <div class="progress-label"><span>Fall ${round}</span><span>Punkte: ${score}</span></div>
          <div class="phish-card" style="font-family:var(--sans)">
            <strong>IKT-Vorfall bei einem Finanzunternehmen</strong>
            <table style="width:100%;margin-top:.6rem;font-size:.92rem">
              <tr><td class="muted">Betroffene Funktion</td><td><strong>${esc(inc.func)}</strong> ${inc.svcCrit ? '<span class="pill bad">kritisch/wichtig</span>' : '<span class="pill ok">nicht kritisch</span>'}</td></tr>
              <tr><td class="muted">Betroffene Kunden</td><td>${inc.clientsPct} %</td></tr>
              <tr><td class="muted">Ausfallzeit</td><td>${inc.downtime} Std.</td></tr>
              <tr><td class="muted">Geografische Ausbreitung</td><td>${inc.geo} Mitgliedstaat(en)</td></tr>
              <tr><td class="muted">Datenverlust</td><td>${esc(inc.dataLoss)}</td></tr>
              <tr><td class="muted">Wirtschaftliche Auswirkung</td><td>${inc.econ.toLocaleString("de-DE")} €</td></tr>
            </table>
          </div>
          <div class="phish-actions">
            <button class="btn btn-primary" data-a="major">⚠ Schwerwiegend (meldepflichtig)</button>
            <button class="btn btn-ghost" data-a="minor">Nicht schwerwiegend</button>
          </div>
          <div id="verdict"></div>`;
        let answered = false;
        el.querySelectorAll("[data-a]").forEach(b => b.onclick = () => {
          if (answered) return; answered = true;
          const saysMajor = b.dataset.a === "major";
          const correct = saysMajor === inc.major;
          if (correct) score++;
          el.querySelector("#verdict").innerHTML = `<div class="callout ${correct ? "" : "danger"}" style="margin-top:1rem">
            <span class="tag">${correct ? "Richtig" : "Nicht ganz"}</span>
            <p>Dieser Vorfall ist <strong>${inc.major ? "schwerwiegend (meldepflichtig)" : "nicht schwerwiegend"}</strong>.</p>
            <p style="margin:.4rem 0 0">Ausschlaggebende Kriterien: ${inc.flags.length ? esc(inc.flags.join("; ")) : "keine Schwelle überschritten"}.</p>
            <p class="muted" style="font-size:.82rem;margin:.5rem 0 0">Hinweis: didaktische Heuristik – die verbindlichen Wesentlichkeitsschwellen stehen in RTS (EU) 2024/1772.</p>
            <button class="btn btn-ghost btn-sm" id="next" style="margin-top:.6rem">Nächster Fall →</button></div>`;
          el.querySelector("#next").onclick = render;
        });
      }
      render();
    }
  };

  // ── Aufgabe 2: Meldefristen-Rechner ────────────────────────────────────
  const taskFristen = {
    id: "fristen", title: "Meldefristen-Rechner", icon: "⏱️",
    desc: "Berechne aus Entdeckungs-/Einstufungszeitpunkt die indikativen Fristen für Erst-, Zwischen- und Abschlussmeldung.",
    mount(el) {
      const now = new Date();
      const pad = (n) => String(n).padStart(2, "0");
      const dv = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}T${pad(now.getHours())}:${pad(now.getMinutes())}`;
      el.innerHTML = `
        <div class="lab-tool">
          <label>Zeitpunkt der Einstufung als „schwerwiegend"</label>
          <input type="datetime-local" id="t0" value="${dv}">
          <button class="btn btn-primary btn-sm" id="calc" style="margin-top:.8rem">Fristen berechnen</button>
          <div class="result-box" id="out" style="margin-top:1rem">—</div>
          <p class="muted" style="font-size:.82rem;margin-top:.8rem">Indikative Orientierungswerte nach RTS (EU) 2025/301 (Richtung, nicht amtlich-verbindlich): Erstmeldung sehr zeitnah nach der Einstufung, Zwischenmeldung nach wenigen Tagen bzw. bei wesentlichen Änderungen, Abschlussmeldung nach Abschluss der Ursachenanalyse. Maßgeblich ist der amtliche RTS-Text.</p>
        </div>`;
      el.querySelector("#calc").onclick = () => {
        const t0 = new Date(el.querySelector("#t0").value);
        if (isNaN(t0)) { el.querySelector("#out").textContent = "Bitte gültigen Zeitpunkt wählen."; return; }
        const add = (h) => new Date(t0.getTime() + h * 3600000);
        const fmt = (d) => d.toLocaleString("de-DE", { dateStyle: "full", timeStyle: "short" });
        el.querySelector("#out").textContent =
          "Einstufung schwerwiegend: " + fmt(t0) + "\n\n" +
          "① Erstmeldung  (Orientierung: innerhalb 4 Std.)\n   → bis " + fmt(add(4)) + "\n\n" +
          "② Zwischenmeldung  (Orientierung: innerhalb 72 Std.)\n   → bis " + fmt(add(72)) + "\n\n" +
          "③ Abschlussmeldung  (Orientierung: innerhalb 1 Monat)\n   → bis " + fmt(add(24 * 30));
      };
      el.querySelector("#calc").click();
    }
  };

  // ── Aufgabe 3: Informationsregister befüllen ───────────────────────────
  const taskRegister = {
    id: "register", title: "Informationsregister befüllen", icon: "📒",
    desc: "Erfasse eine vertragliche Vereinbarung im Informationsregister (ITS 2024/2956) – aus generierten Mandatsdaten.",
    mount(el) {
      let ent = genEntity(), con = genContract();
      function render() {
        el.innerHTML = `
        <div class="lab-tool">
          <p class="muted" style="margin-top:0">Mandat / meldendes Finanzunternehmen:</p>
          <div class="result-box">${esc(ent.name)} (${esc(ent.art)})\nLEI: ${esc(ent.lei)}</div>
          <p class="muted" style="margin-top:1rem">Vertragliche Vereinbarung (Sachverhalt):</p>
          <div class="result-box">IKT-Drittdienstleister: ${esc(con.provider)}\nLEI des Dienstleisters: ${esc(con.lei)}\nUnterstützte Funktion: ${esc(con.func)}\nFunktion ist ${con.critical ? "KRITISCH/WICHTIG" : "nicht kritisch"}\nLand der Leistungserbringung: ${esc(con.country)}\nUnterauftragsvergabe: ${con.sub ? "JA" : "NEIN"}</div>
          <p style="margin-top:1rem"><strong>Deine Aufgabe:</strong> Trage die Register-Felder korrekt ein.</p>
          <label>RT-Feld: LEI des IKT-Drittdienstleisters</label>
          <input type="text" id="f_lei" placeholder="20 Zeichen" autocomplete="off">
          <label>Unterstützt eine kritische oder wichtige Funktion?</label>
          <select id="f_crit"><option value="">— wählen —</option><option value="ja">Ja</option><option value="nein">Nein</option></select>
          <label>Land der Leistungserbringung (ISO-Code)</label>
          <input type="text" id="f_land" maxlength="2" placeholder="z. B. DE" autocomplete="off">
          <label>Erfolgt eine Unterauftragsvergabe?</label>
          <select id="f_sub"><option value="">— wählen —</option><option value="ja">Ja</option><option value="nein">Nein</option></select>
          <button class="btn btn-primary" id="check" style="margin-top:1rem">Eintrag prüfen</button>
          <button class="btn btn-ghost" id="new" style="margin-top:1rem">Neuer Fall</button>
          <div id="res"></div>
        </div>`;
        el.querySelector("#new").onclick = () => { ent = genEntity(); con = genContract(); render(); };
        el.querySelector("#check").onclick = () => {
          const lei = el.querySelector("#f_lei").value.trim().toUpperCase();
          const crit = el.querySelector("#f_crit").value;
          const land = el.querySelector("#f_land").value.trim().toUpperCase();
          const sub = el.querySelector("#f_sub").value;
          const checks = [
            [/^[A-Z0-9]{20}$/.test(lei) && lei === con.lei, "LEI des Dienstleisters (20 Zeichen, exakt)"],
            [crit === (con.critical ? "ja" : "nein"), "Kritische/wichtige Funktion korrekt eingestuft"],
            [land === con.country, "Land der Leistungserbringung"],
            [sub === (con.sub ? "ja" : "nein"), "Unterauftragsvergabe korrekt angegeben"],
          ];
          const ok = checks.filter(c => c[0]).length;
          el.querySelector("#res").innerHTML = `<div class="callout ${ok === checks.length ? "" : "warn"}" style="margin-top:1rem">
            <span class="tag">${ok}/${checks.length} Felder korrekt</span>
            <ul style="margin:.5rem 0 0">${checks.map(c => `<li>${c[0] ? "✅" : "❌"} ${esc(c[1])}</li>`).join("")}</ul>
            ${ok === checks.length ? "<p style='margin:.5rem 0 0'>Sauber erfasst! So wächst ein vollständiges Informationsregister – Vertrag für Vertrag.</p>" : "<p class='muted' style='margin:.5rem 0 0'>Korrigiere die markierten Felder. Tipp: Kritikalität und Unterauftrag entscheiden über strengere Pflichten.</p>"}
          </div>`;
        };
      }
      render();
    }
  };

  window.TASKS = [taskKlassifizierung, taskFristen, taskRegister];
  window.TASKS_BY_ID = Object.fromEntries(window.TASKS.map(t => [t.id, t]));
  window.genEntity = genEntity; window.genContract = genContract;
})();
