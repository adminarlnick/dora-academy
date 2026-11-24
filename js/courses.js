/* DORA Akademie – Kursinhalte. Reine Daten; von js/app.js gerendert.
   Hinweis: didaktische Zusammenfassung – maßgeblich sind die amtlichen Texte (EUR-Lex). */
window.COURSES = [
{
  id:"grundlagen", title:"DORA-Grundlagen", icon:"⚖️", level:"Einsteiger", pillar:"risiko",
  duration:"ca. 45 Min", tags:["Überblick","Geltungsbereich","Governance"],
  summary:"Was DORA ist, für wen sie gilt, seit wann – und wie die fünf Säulen und die Verantwortung des Leitungsorgans zusammenhängen.",
  lessons:[
    {id:"was-ist", title:"Was ist DORA?", subtitle:"Ziel, Rechtsnatur, Zeitplan",
     html:`<p>DORA – der <strong>Digital Operational Resilience Act</strong> – ist die <strong>Verordnung (EU) 2022/2554</strong> über die digitale operationale Resilienz im Finanzsektor. Sie trat am 16.&nbsp;Januar 2023 in Kraft und gilt <strong>seit dem 17.&nbsp;Januar 2025</strong> unmittelbar in allen Mitgliedstaaten.</p>
     <p>Als <em>Verordnung</em> gilt DORA direkt – ohne nationale Umsetzung – und schafft erstmals einen einheitlichen EU-Rahmen dafür, dass Finanzunternehmen schwerwiegende IKT-Störungen (Cyberangriffe, Ausfälle) überstehen, darauf reagieren und sich erholen können.</p>
     <h3>Die fünf Säulen</h3>
     <ol>
       <li><strong>IKT-Risikomanagement</strong> (Art.&nbsp;5–16)</li>
       <li><strong>Behandlung & Meldung IKT-bezogener Vorfälle</strong> (Art.&nbsp;17–23)</li>
       <li><strong>Testen der digitalen operationalen Resilienz</strong> (Art.&nbsp;24–27)</li>
       <li><strong>Management des IKT-Drittparteienrisikos</strong> (Art.&nbsp;28–44)</li>
       <li><strong>Informationsaustausch</strong> über Cyberbedrohungen (Art.&nbsp;45)</li>
     </ol>
     <div class="callout"><span class="tag">Merksatz</span><p>DORA verschiebt den Fokus von „Hauptsache verschlüsselt" zu <strong>Resilienz</strong>: Störungen gelten als unvermeidbar – entscheidend ist, sie zu begrenzen und handlungsfähig zu bleiben.</p></div>
     <div class="key-points"><h4>Das Wichtigste</h4><ul>
       <li>DORA = Verordnung (EU) 2022/2554, Geltung seit 17.01.2025.</li>
       <li>Fünf Säulen, konkretisiert durch RTS/ITS (Level-2).</li>
       <li>Ziel: digitale operationale Resilienz, nicht nur IT-Sicherheit.</li>
     </ul></div>`},
    {id:"geltungsbereich", title:"Für wen gilt DORA?", subtitle:"Finanzunternehmen & IKT-Drittdienstleister",
     html:`<p>DORA gilt für einen <strong>sehr breiten</strong> Kreis von <strong>Finanzunternehmen</strong> (Art.&nbsp;2) – u.&nbsp;a. Kreditinstitute, Zahlungs- und E-Geld-Institute, Wertpapierfirmen, Versicherer, Kryptowerte-Dienstleister, Handelsplätze, Zentralverwahrer, Verwalter alternativer Investmentfonds und viele mehr. Zusätzlich adressiert DORA <strong>IKT-Drittdienstleister</strong> (z.&nbsp;B. Cloud-Anbieter), für kritische Anbieter sogar mit direkter EU-Aufsicht.</p>
     <h3>Proportionalität</h3>
     <p>Die Anforderungen sind nach <strong>Größe, Risikoprofil und Komplexität</strong> abgestuft (Art.&nbsp;4). Kleine, nicht komplexe Unternehmen und bestimmte Kategorien dürfen einen <strong>vereinfachten IKT-Risikomanagementrahmen</strong> (Art.&nbsp;16) nutzen. „One size fits all" gilt nicht – aber Mindeststandards schon.</p>
     <div class="callout warn"><span class="tag">Wichtig</span><p>DORA ist <em>lex specialis</em>: Wo sie auf IKT-Risiken anwendbar ist, geht sie entsprechenden allgemeinen Vorgaben (z.&nbsp;B. NIS2) für Finanzunternehmen vor.</p></div>`},
    {id:"governance", title:"Governance & Verantwortung", subtitle:"Das Leitungsorgan in der Pflicht",
     html:`<p>DORA macht IKT-Risiko zur <strong>Chefsache</strong>. Nach Art.&nbsp;5 trägt das <strong>Leitungsorgan</strong> (Vorstand/Geschäftsleitung) die <strong>letztverantwortliche</strong> Rolle für das IKT-Risikomanagement – es kann nicht vollständig delegiert werden.</p>
     <h3>Kernpflichten des Leitungsorgans</h3>
     <ul>
       <li>Genehmigung und Überwachung der IKT-Risikostrategie und -Leitlinien.</li>
       <li>Festlegung von Rollen, Verantwortlichkeiten und angemessenen Budgets.</li>
       <li>Genehmigung und Überprüfung der Strategie zu IKT-Drittdienstleistern.</li>
       <li>Laufende <strong>Schulung</strong>, um IKT-Risiken beurteilen zu können.</li>
     </ul>
     <div class="key-points"><h4>Das Wichtigste</h4><ul>
       <li>Breiter Anwendungsbereich: nahezu der gesamte Finanzsektor + IKT-Dienstleister.</li>
       <li>Proportionalität + vereinfachter Rahmen für kleine Einheiten.</li>
       <li>Das Leitungsorgan haftet und muss sich aktiv kümmern und schulen.</li>
     </ul></div>`}
  ],
  quiz:[
    {q:"Seit wann gilt DORA unmittelbar?", options:["Seit 16.01.2023","Seit 17.01.2025","Seit 01.01.2024","Noch gar nicht"], answer:1, explain:"DORA trat 2023 in Kraft, gilt aber erst seit dem 17. Januar 2025."},
    {q:"Welche ist KEINE der fünf DORA-Säulen?", options:["IKT-Risikomanagement","Meldung von IKT-Vorfällen","Eigenkapitalanforderungen","Drittparteienrisiko"], answer:2, explain:"Eigenkapital ist Bankenaufsicht (CRR/CRD), nicht DORA. DORA regelt operationale IKT-Resilienz."},
    {q:"Wer trägt laut Art. 5 die letztverantwortliche Rolle?", options:["Der IT-Dienstleister","Das Leitungsorgan","Die interne Revision","Die Aufsichtsbehörde"], answer:1, explain:"Das Leitungsorgan trägt die nicht delegierbare Gesamtverantwortung."},
    {q:"Was ermöglicht das Proportionalitätsprinzip (Art. 4/16)?", options:["Komplett von DORA befreit zu sein","Einen vereinfachten Rahmen für kleine, nicht komplexe Unternehmen","Längere Meldefristen für alle","Verzicht auf jede Dokumentation"], answer:1, explain:"Kleine/nicht komplexe Einheiten dürfen einen vereinfachten IKT-Risikomanagementrahmen nutzen – befreit sind sie nicht."},
    {q:"Welche Rechtsnatur hat DORA?", options:["Eine Richtlinie, national umzusetzen","Eine unmittelbar geltende Verordnung","Eine unverbindliche Leitlinie","Ein nationales Gesetz"], answer:1, explain:"Als EU-Verordnung gilt DORA direkt, ohne nationale Umsetzung."}
  ]
},
{
  id:"risiko", title:"Säule 1 – IKT-Risikomanagement", icon:"🛡️", level:"Fortgeschritten", pillar:"risiko",
  duration:"ca. 50 Min", tags:["Art. 5–16","RTS 2024/1774","BCM"],
  summary:"Der IKT-Risikomanagementrahmen: Strategie, Schutz, Erkennung, Reaktion, Wiederherstellung – konkretisiert durch RTS 2024/1774.",
  lessons:[
    {id:"rahmen", title:"Der IKT-Risikomanagementrahmen", subtitle:"Art. 6–8",
     html:`<p>Jedes Finanzunternehmen braucht einen <strong>soliden, dokumentierten IKT-Risikomanagementrahmen</strong> (Art.&nbsp;6) als Teil des Gesamtrisikomanagements. Er muss mindestens jährlich und nach größeren Vorfällen überprüft werden.</p>
     <h3>Kernbausteine</h3>
     <ul>
       <li><strong>Strategie & Leitlinien</strong> inklusive Risikotoleranz.</li>
       <li><strong>Identifikation</strong> (Art.&nbsp;8): alle IKT-gestützten Funktionen, Informations- und IKT-Assets inventarisieren, Abhängigkeiten und kritische/wichtige Funktionen bestimmen.</li>
       <li>Kontinuierliche Überwachung und Aktualisierung.</li>
     </ul>
     <p>Der delegierte <strong>RTS 2024/1774</strong> präzisiert Tools, Methoden, Prozesse und Richtlinien – von Zugriffsrechten über Kryptografie bis Netzwerk- und Change-Management.</p>
     <div class="callout"><span class="tag">Kernbegriff</span><p><strong>Kritische oder wichtige Funktion:</strong> eine Funktion, deren Ausfall die Finanzstabilität, die solide Fortführung des Geschäfts oder die Erfüllung aufsichtlicher Pflichten wesentlich beeinträchtigen würde. Dieser Begriff zieht sich durch ganz DORA.</p></div>`},
    {id:"schutz-erkennung", title:"Schutz, Prävention und Erkennung", subtitle:"Art. 9–10",
     html:`<p><strong>Schutz & Prävention</strong> (Art.&nbsp;9): Sicherheitsrichtlinien, starke Authentifizierung, Verschlüsselung, Zugriffsmanagement nach dem Prinzip der geringsten Rechte, sichere Konfiguration, Patch- und Schwachstellenmanagement.</p>
     <p><strong>Erkennung</strong> (Art.&nbsp;10): Mechanismen, um anomale Aktivitäten und IKT-Vorfälle <em>früh</em> zu erkennen – mit mehreren Kontrollebenen, Alarmierungsschwellen und Protokollierung, damit nichts unbemerkt bleibt.</p>
     <div class="callout warn"><span class="tag">Praxis</span><p>Erkennung ist nur so gut wie die Reaktion darauf. DORA verlangt definierte Schwellen und klare Eskalationswege – Logs, die niemand auswertet, erfüllen die Anforderung nicht.</p></div>`},
    {id:"reaktion-bcm", title:"Reaktion, Wiederherstellung & Backups", subtitle:"Art. 11–13",
     html:`<p>Säule 1 endet nicht bei der Erkennung, sondern verlangt <strong>Weitermachen-Können</strong>.</p>
     <h3>Business Continuity (Art. 11–12)</h3>
     <ul>
       <li><strong>IKT-Geschäftsfortführungsleitlinie</strong> und Notfallpläne, regelmäßig getestet.</li>
       <li><strong>Backups & Wiederherstellung</strong>: Backup-Richtlinie, getrennte, geschützte Backups, getestete Restore-Verfahren, definierte Wiederanlaufziele (RTO/RPO).</li>
       <li><strong>Krisenkommunikation</strong>: interne und externe Kommunikation im Störfall.</li>
     </ul>
     <h3>Lernen (Art. 13)</h3>
     <p>Nach Vorfällen und Tests sind <strong>Lessons Learned</strong> auszuwerten und in den Rahmen zurückzuspielen – kontinuierliche Verbesserung ist Pflicht, kein Bonus.</p>
     <div class="key-points"><h4>Das Wichtigste</h4><ul>
       <li>Der Rahmen deckt den vollen Zyklus: Identifizieren → Schützen → Erkennen → Reagieren → Wiederherstellen → Lernen.</li>
       <li>Backups müssen getrennt, geschützt und <em>getestet</em> sein.</li>
       <li>RTS 2024/1774 liefert die konkreten technischen Anforderungen.</li>
     </ul></div>`}
  ],
  quiz:[
    {q:"Welcher RTS konkretisiert den IKT-Risikomanagementrahmen?", options:["RTS 2024/1772","RTS 2024/1774","ITS 2024/2956","RTS 2025/1190"], answer:1, explain:"RTS (EU) 2024/1774 legt Tools, Methoden, Prozesse und Richtlinien fest (inkl. vereinfachtem Rahmen)."},
    {q:"Was ist eine 'kritische oder wichtige Funktion'?", options:["Jede IT-Anwendung","Eine Funktion, deren Ausfall das Unternehmen/die Stabilität wesentlich beeinträchtigt","Nur das Rechenzentrum","Eine gesetzlich verbotene Tätigkeit"], answer:1, explain:"Der Begriff knüpft an die wesentliche Beeinträchtigung von Geschäft, Stabilität oder Pflichten an und ist zentral für ganz DORA."},
    {q:"Wie oft muss der IKT-Risikomanagementrahmen mindestens überprüft werden?", options:["Alle 5 Jahre","Mindestens jährlich (und nach größeren Vorfällen)","Nur auf Anordnung","Monatlich"], answer:1, explain:"Mindestens jährlich sowie anlassbezogen nach schwerwiegenden Vorfällen."},
    {q:"Welche Anforderung gehört zu Backups (Art. 12)?", options:["Backups im selben System wie die Produktivdaten","Getrennte, geschützte und getestete Wiederherstellung","Backups nur einmal pro Jahr","Keine Wiederanlaufziele nötig"], answer:1, explain:"Backups müssen getrennt/geschützt sein und die Wiederherstellung regelmäßig getestet werden (RTO/RPO)."},
    {q:"Was verlangt Art. 13 nach Vorfällen/Tests?", options:["Sofortige Entlassung der IT-Leitung","Auswertung von Lessons Learned und Verbesserung des Rahmens","Abschalten aller Systeme","Nur eine Pressemitteilung"], answer:1, explain:"Erkenntnisse sind auszuwerten und in den Rahmen einzuarbeiten – kontinuierliche Verbesserung."}
  ]
},
{
  id:"vorfaelle", title:"Säule 2 – IKT-Vorfälle & Meldung", icon:"🚨", level:"Fortgeschritten", pillar:"vorfaelle",
  duration:"ca. 55 Min", tags:["Art. 17–23","RTS 2024/1772","RTS 2025/301","ITS 2025/302"],
  summary:"Vorfälle erkennen, klassifizieren und fristgerecht melden – inkl. Klassifizierungskriterien und Meldefristen. Passende Übungen im Aufgabenbereich.",
  lessons:[
    {id:"prozess", title:"Vorfallmanagement-Prozess", subtitle:"Art. 17",
     html:`<p>Finanzunternehmen müssen einen <strong>IKT-Vorfallmanagementprozess</strong> einrichten, um IKT-bezogene Vorfälle zu erkennen, zu steuern und zu melden (Art.&nbsp;17). Dazu gehören: Erfassung/Protokollierung, Einstufung nach Priorität, Rollen, Eskalation, Ursachenanalyse und Kommunikation.</p>
     <p>Ein <strong>IKT-bezogener Vorfall</strong> ist ein Ereignis, das die Sicherheit von Netzwerk-/Informationssystemen beeinträchtigt und nachteilige Auswirkungen auf die Verfügbarkeit, Authentizität, Integrität oder Vertraulichkeit von Daten oder Diensten hat.</p>`},
    {id:"klassifizierung", title:"Klassifizierung schwerwiegender Vorfälle", subtitle:"Art. 18 · RTS 2024/1772",
     html:`<p>Nicht jeder Vorfall ist meldepflichtig – nur <strong>schwerwiegende</strong>. Ob ein Vorfall „schwerwiegend" (major) ist, bestimmt sich nach den Kriterien des <strong>RTS 2024/1772</strong>.</p>
     <h3>Die Klassifizierungskriterien (Art. 18 Abs. 1)</h3>
     <ul>
       <li><strong>Betroffene Kunden/Gegenparteien/Transaktionen</strong> (Anzahl, Anteil, Wert).</li>
       <li><strong>Reputationsauswirkungen</strong>.</li>
       <li><strong>Dauer & Ausfallzeit</strong> des Vorfalls.</li>
       <li><strong>Geografische Ausbreitung</strong> (betroffene Mitgliedstaaten).</li>
       <li><strong>Datenverluste</strong> (Verfügbarkeit, Authentizität, Integrität, Vertraulichkeit).</li>
       <li><strong>Kritikalität der betroffenen Dienste</strong>.</li>
       <li><strong>Wirtschaftliche Auswirkungen</strong> (absolute und relative Kosten/Verluste).</li>
     </ul>
     <div class="callout"><span class="tag">So funktioniert es</span><p>Der RTS definiert <strong>Wesentlichkeitsschwellen</strong> je Kriterium und eine Logik, ab wann ein Vorfall als schwerwiegend gilt (z.&nbsp;B. Betroffenheit kritischer Dienste <em>oder</em> das Überschreiten mehrerer primärer/sekundärer Schwellen).</p></div>
     <p>👉 Übe das im Aufgabenbereich: <a href="#/aufgabe/klassifizierung">Vorfall-Klassifizierung</a> mit generierten Fällen.</p>`},
    {id:"meldung", title:"Meldung & Fristen", subtitle:"Art. 19 · RTS 2025/301 · ITS 2025/302",
     html:`<p>Schwerwiegende Vorfälle sind der <strong>zuständigen Behörde</strong> zu melden (Art.&nbsp;19) – in <strong>drei Stufen</strong>:</p>
     <ol>
       <li><strong>Erstmeldung (initial notification):</strong> unverzüglich, sehr zeitnah nach Einstufung als schwerwiegend.</li>
       <li><strong>Zwischenmeldung (intermediate report):</strong> sobald sich der Status wesentlich ändert bzw. in vorgegebenem Abstand – mit aktualisierten Informationen.</li>
       <li><strong>Abschlussmeldung (final report):</strong> nach Abschluss der Ursachenanalyse, mit Grundursachen und tatsächlichen Auswirkungen.</li>
     </ol>
     <p><strong>RTS 2025/301</strong> legt Inhalt und Fristen fest, <strong>ITS 2025/302</strong> die Standardformulare und das Verfahren. Zusätzlich können <strong>erhebliche Cyberbedrohungen freiwillig</strong> gemeldet werden.</p>
     <div class="callout warn"><span class="tag">Merke</span><p>Die genauen Stundenfristen stehen im RTS 2025/301 und hängen an der Entdeckung/Einstufung. Entscheidend ist ein eingeübter Prozess, der die Erstmeldung sehr schnell auslöst.</p></div>
     <p>👉 Rechne Fristen durch: <a href="#/aufgabe/fristen">Meldefristen-Rechner</a>.</p>
     <div class="key-points"><h4>Das Wichtigste</h4><ul>
       <li>Nur schwerwiegende Vorfälle sind meldepflichtig – Kriterien aus RTS 2024/1772.</li>
       <li>Dreistufige Meldung: Erst-, Zwischen-, Abschlussmeldung (RTS 2025/301 / ITS 2025/302).</li>
       <li>Erhebliche Cyberbedrohungen können freiwillig gemeldet werden.</li>
     </ul></div>`}
  ],
  quiz:[
    {q:"Welche Vorfälle sind meldepflichtig?", options:["Alle IKT-Vorfälle","Nur als schwerwiegend klassifizierte","Nur Cyberangriffe","Nur Vorfälle über 1 Mio. € Schaden"], answer:1, explain:"Meldepflichtig sind schwerwiegende (major) Vorfälle gemäß den Kriterien des RTS 2024/1772."},
    {q:"Welches ist KEIN Klassifizierungskriterium nach Art. 18?", options:["Dauer und Ausfallzeit","Geografische Ausbreitung","Aktienkurs des Mutterkonzerns","Betroffene Kunden/Transaktionen"], answer:2, explain:"Der Aktienkurs ist kein Kriterium. Maßgeblich sind u. a. Kunden, Dauer, Geografie, Datenverlust, Kritikalität, wirtschaftliche Auswirkungen."},
    {q:"Aus wie vielen Stufen besteht die Vorfallmeldung?", options:["Einer","Zwei","Drei (Erst-, Zwischen-, Abschlussmeldung)","Fünf"], answer:2, explain:"Erstmeldung, Zwischenmeldung und Abschlussmeldung (Art. 19, RTS 2025/301)."},
    {q:"Welcher Rechtsakt liefert die Meldeformulare?", options:["RTS 2024/1772","ITS 2025/302","RTS 2024/1774","RTS 2025/1190"], answer:1, explain:"ITS (EU) 2025/302 regelt Standardformulare, Vorlagen und Verfahren der Meldung."},
    {q:"Was gilt für erhebliche Cyberbedrohungen?", options:["Zwingende Meldung binnen 1 Stunde","Freiwillige Meldung möglich","Verbot der Weitergabe","Meldung nur jährlich"], answer:1, explain:"Erhebliche Cyberbedrohungen können freiwillig gemeldet werden (Art. 19 Abs. 2)."}
  ]
},
{
  id:"testen", title:"Säule 3 – Resilienztests & TLPT", icon:"🧪", level:"Fortgeschritten", pillar:"testen",
  duration:"ca. 40 Min", tags:["Art. 24–27","RTS 2025/1190","TLPT"],
  summary:"Vom regelmäßigen Testprogramm bis zu bedrohungsorientierten Penetrationstests (TLPT) für die größten Häuser.",
  lessons:[
    {id:"programm", title:"Das Testprogramm", subtitle:"Art. 24–25",
     html:`<p>Finanzunternehmen müssen ein <strong>risikobasiertes Programm zum Testen der digitalen operationalen Resilienz</strong> unterhalten (Art.&nbsp;24). Es umfasst ein Spektrum von Tests – angemessen zu Größe und Risiko.</p>
     <h3>Typische Testarten (Art. 25)</h3>
     <ul>
       <li>Schwachstellenbewertungen und -scans</li>
       <li>Open-Source- und Netzwerk-Sicherheitsanalysen</li>
       <li>Lückenanalysen, Penetrationstests</li>
       <li>Szenariobasierte Tests, Kompatibilitäts- und Performance-Tests</li>
     </ul>
     <p>Kritische IKT-Systeme sind <strong>mindestens jährlich</strong> zu testen. Festgestellte Schwächen sind priorisiert zu beheben.</p>`},
    {id:"tlpt", title:"Bedrohungsorientierte Penetrationstests (TLPT)", subtitle:"Art. 26–27 · RTS 2025/1190",
     html:`<p><strong>TLPT</strong> (Threat-Led Penetration Testing) sind realistische Angriffssimulationen gegen <em>produktive</em> Systeme, angelehnt am europäischen Rahmen <strong>TIBER-EU</strong>. Sie sind <strong>nicht für alle</strong> Pflicht, sondern nur für Unternehmen, die die Behörden anhand von Kriterien (Bedeutung, Risikoprofil, Systemrelevanz) bestimmen.</p>
     <h3>Eckpunkte</h3>
     <ul>
       <li>Durchführung <strong>mindestens alle 3 Jahre</strong>.</li>
       <li>Einbezug kritischer/wichtiger Funktionen – auch bei IKT-Drittdienstleistern.</li>
       <li>Einsatz qualifizierter, unabhängiger Tester; interne Tester nur unter strengen Bedingungen.</li>
       <li>Behördliche Anerkennung der Testdurchführung (gegenseitige Anerkennung in der EU).</li>
     </ul>
     <p>Der <strong>RTS 2025/1190</strong> legt die Kriterien für die TLPT-Pflicht, Anforderungen an interne Tester, Testumfang, -methodik und die Ergebnis-/Behebungsphasen fest.</p>
     <div class="key-points"><h4>Das Wichtigste</h4><ul>
       <li>Alle: regelmäßiges, risikobasiertes Testprogramm; kritische Systeme jährlich.</li>
       <li>Nur bestimmte, von der Behörde benannte Häuser: TLPT alle 3 Jahre.</li>
       <li>TLPT lehnt sich an TIBER-EU an; RTS 2025/1190 liefert die Details.</li>
     </ul></div>`}
  ],
  quiz:[
    {q:"Wie oft sind kritische IKT-Systeme mindestens zu testen?", options:["Alle 3 Jahre","Mindestens jährlich","Monatlich","Nur bei Vorfällen"], answer:1, explain:"Kritische IKT-Systeme/-Anwendungen sind mindestens jährlich zu testen (Art. 24/25)."},
    {q:"Für wen sind TLPT verpflichtend?", options:["Für alle Finanzunternehmen","Nur für von der Behörde anhand von Kriterien bestimmte Unternehmen","Nur für Cloud-Anbieter","Für niemanden"], answer:1, explain:"TLPT betrifft nur Unternehmen, die die Behörden nach Bedeutung/Risiko bestimmen (RTS 2025/1190)."},
    {q:"In welchem Mindestturnus werden TLPT durchgeführt?", options:["Jährlich","Alle 3 Jahre","Alle 5 Jahre","Einmalig"], answer:1, explain:"TLPT sind mindestens alle drei Jahre durchzuführen."},
    {q:"An welchen Rahmen lehnt sich TLPT an?", options:["ISO 9001","TIBER-EU","PCI-DSS","Basel III"], answer:1, explain:"Das TLPT-Konzept orientiert sich am europäischen TIBER-EU-Rahmen."},
    {q:"Was regelt RTS 2025/1190 u. a.?", options:["Backup-Intervalle","Kriterien der TLPT-Pflicht und Anforderungen an interne Tester","Meldeformulare","Eigenkapital"], answer:1, explain:"Der RTS legt TLPT-Kriterien, Tester-Anforderungen, Testumfang/-methodik und Behebungsphasen fest."}
  ]
},
{
  id:"dritte", title:"Säule 4 – IKT-Drittparteienrisiko", icon:"🔗", level:"Fortgeschritten", pillar:"dritte",
  duration:"ca. 55 Min", tags:["Art. 28–30","RTS 2024/1773","RTS 2025/532","ITS 2024/2956"],
  summary:"Auslagerungen an IKT-Dienstleister steuern: Grundprinzipien, Vertragspflichten, Unterauftragsvergabe und das Informationsregister.",
  lessons:[
    {id:"prinzipien", title:"Grundprinzipien & Strategie", subtitle:"Art. 28",
     html:`<p>IKT-Dienstleister (v.&nbsp;a. Cloud) sind aus dem Finanzbetrieb nicht mehr wegzudenken – und ein zentrales Risiko. DORA verlangt, das <strong>IKT-Drittparteienrisiko</strong> als integralen Teil des IKT-Risikomanagements zu steuern (Art.&nbsp;28).</p>
     <h3>Kernpflichten</h3>
     <ul>
       <li><strong>Strategie</strong> für IKT-Drittparteienrisiko, inkl. Multi-Vendor-Überlegungen.</li>
       <li><strong>Informationsregister</strong> aller vertraglichen Vereinbarungen führen (s.&nbsp;u.).</li>
       <li><strong>Vorabprüfung</strong> vor Vertragsschluss: Due Diligence, Risikobewertung, Konzentrationsrisiko, Ausstiegsfähigkeit.</li>
       <li>Besondere Sorgfalt, wenn <strong>kritische oder wichtige Funktionen</strong> betroffen sind.</li>
     </ul>
     <div class="callout"><span class="tag">Prinzip</span><p>Auslagern heißt nicht Verantwortung abgeben: Das Finanzunternehmen bleibt <strong>voll verantwortlich</strong> für die ausgelagerte Funktion.</p></div>`},
    {id:"vertraege", title:"Vertragspflichten & Unterauftrag", subtitle:"Art. 30 · RTS 2024/1773 · RTS 2025/532",
     html:`<p>Art.&nbsp;30 schreibt <strong>Mindestvertragsinhalte</strong> vor – strenger, wenn kritische/wichtige Funktionen betroffen sind. Dazu zählen u.&nbsp;a.:</p>
     <ul>
       <li>klare Leistungsbeschreibung, Service-Level und Standorte der Datenverarbeitung,</li>
       <li>Informations-, <strong>Zugangs-, Prüf- und Audit-Rechte</strong> (auch für die Aufsicht),</li>
       <li>Mitwirkung bei Vorfällen und Sicherheitsanforderungen,</li>
       <li><strong>Ausstiegsstrategien</strong> und Kündigungsrechte,</li>
       <li>Regelungen zur <strong>Unterauftragsvergabe</strong>.</li>
     </ul>
     <p>Der <strong>RTS 2024/1773</strong> konkretisiert die Leitlinie/Policy für solche Verträge, der <strong>RTS 2025/532</strong> die Anforderungen an die <strong>Unterauftragsvergabe (Subcontracting)</strong> kritischer/wichtiger Funktionen.</p>
     <div class="callout warn"><span class="tag">Falle</span><p>Standard-AGB vieler Cloud-Anbieter erfüllen die DORA-Vertragspflichten oft <em>nicht</em> – insbesondere Audit- und Ausstiegsrechte müssen aktiv nachverhandelt werden.</p></div>`},
    {id:"register", title:"Das Informationsregister", subtitle:"Art. 28 Abs. 3 · ITS 2024/2956",
     html:`<p>Jedes Finanzunternehmen führt ein <strong>Informationsregister</strong> (Register of Information) über <em>alle</em> vertraglichen Vereinbarungen zur Nutzung von IKT-Dienstleistungen – auf Einzel-, teil- und konsolidierter Ebene. Die Aufsicht kann es anfordern; es wird in standardisierter Form (meist jährlich) übermittelt.</p>
     <h3>Was drin steht (ITS 2024/2956)</h3>
     <p>Das ITS definiert <strong>Standardvorlagen</strong> mit verknüpften Tabellen (z.&nbsp;B. zur meldenden Einheit, zu den Vereinbarungen, zu den IKT-Drittdienstleistern, zu den gestützten Funktionen und deren Kritikalität, zu Unterauftragnehmern). Jeder Dienstleister wird u.&nbsp;a. über einen <strong>LEI</strong> (Legal Entity Identifier) eindeutig identifiziert.</p>
     <div class="callout"><span class="tag">In der Praxis</span><p>Das Register ist oft die größte Fleißarbeit der Umsetzung: Verträge, Funktionen, Kritikalität und Unterauftragsketten vollständig und konsistent zu erfassen.</p></div>
     <p>👉 Übe eine Registereingabe im Aufgabenbereich: <a href="#/aufgabe/register">Informationsregister befüllen</a>.</p>
     <div class="key-points"><h4>Das Wichtigste</h4><ul>
       <li>Verantwortung bleibt beim Finanzunternehmen; Register über alle IKT-Verträge pflegen.</li>
       <li>Strenge Mindestvertragsinhalte bei kritischen/wichtigen Funktionen (Audit, Exit, Subcontracting).</li>
       <li>RTS 2024/1773 & 2025/532 sowie ITS 2024/2956 liefern die Details.</li>
     </ul></div>`}
  ],
  quiz:[
    {q:"Was gilt bei Auslagerung an IKT-Dienstleister?", options:["Die Verantwortung geht auf den Dienstleister über","Das Finanzunternehmen bleibt voll verantwortlich","DORA ist dann nicht anwendbar","Verträge sind nicht nötig"], answer:1, explain:"Die Letztverantwortung für die ausgelagerte Funktion verbleibt beim Finanzunternehmen."},
    {q:"Welches Instrument erfasst alle IKT-Drittvereinbarungen?", options:["Das Risikoregister","Das Informationsregister (Register of Information)","Das Handelsregister","Die Bilanz"], answer:1, explain:"Das Informationsregister nach Art. 28 Abs. 3, standardisiert durch ITS 2024/2956."},
    {q:"Welcher RTS betrifft die Unterauftragsvergabe kritischer/wichtiger Funktionen?", options:["RTS 2025/532","RTS 2024/1772","ITS 2025/302","RTS 2025/1190"], answer:0, explain:"RTS (EU) 2025/532 präzisiert die Subcontracting-Anforderungen."},
    {q:"Womit werden Dienstleister im Register eindeutig identifiziert?", options:["Mit der Umsatzsteuer-ID","Mit einem LEI (Legal Entity Identifier)","Mit der IBAN","Mit einer Telefonnummer"], answer:1, explain:"Der LEI identifiziert die Rechtsträger im Informationsregister eindeutig."},
    {q:"Warum reichen Standard-Cloud-AGB oft nicht?", options:["Sie sind zu teuer","Audit- und Ausstiegsrechte fehlen häufig","Sie sind auf Deutsch","Sie sind zu kurz"], answer:1, explain:"DORA verlangt u. a. Audit-/Zugangs- und Ausstiegsrechte, die Standard-AGB oft nicht vorsehen."}
  ]
},
{
  id:"aufsicht", title:"Aufsicht über kritische Drittdienstleister", icon:"🏛️", level:"Experte", pillar:"aufsicht",
  duration:"ca. 35 Min", tags:["Art. 31–44","RTS 2024/1502","RTS 2025/295"],
  summary:"Wie kritische IKT-Drittdienstleister (CTPP) bestimmt werden und wie die neue EU-Aufsicht über sie funktioniert.",
  lessons:[
    {id:"ctpp", title:"Kritische Drittdienstleister (CTPP)", subtitle:"Art. 31 · RTS 2024/1502",
     html:`<p>DORA schafft etwas Neues: eine <strong>direkte EU-Aufsicht</strong> über besonders wichtige IKT-Anbieter. Die ESAs benennen <strong>kritische IKT-Drittdienstleister (CTPP)</strong> anhand von Kriterien wie der systemischen Bedeutung, der Zahl/Bedeutung der abhängigen Finanzunternehmen und der Substituierbarkeit.</p>
     <p>Der <strong>RTS 2024/1502</strong> präzisiert diese <strong>Einstufungskriterien</strong> (Art.&nbsp;31 Abs.&nbsp;2). Für jeden CTPP wird eine der ESAs als <strong>federführende Überwacher (Lead Overseer)</strong> bestimmt.</p>
     <div class="callout"><span class="tag">Neu</span><p>Erstmals werden IKT-Anbieter (z.&nbsp;B. große Cloud-Hyperscaler) <em>direkt</em> auf EU-Ebene beaufsichtigt – nicht nur indirekt über ihre Finanzkunden.</p></div>`},
    {id:"oversight", title:"Der Oversight-Rahmen", subtitle:"Art. 32–44 · RTS 2025/295",
     html:`<p>Der <strong>Lead Overseer</strong> kann gegenüber CTPP u.&nbsp;a. Informationen anfordern, Untersuchungen und Vor-Ort-Prüfungen durchführen und <strong>Empfehlungen</strong> aussprechen – etwa zu Sicherheit, Subcontracting oder Risikokonzentration. Folgt ein CTPP den Empfehlungen nicht, drohen <strong>Zwangsgelder</strong>, und Finanzunternehmen müssen die Nutzung ggf. einschränken.</p>
     <p>Der <strong>RTS 2025/295</strong> harmonisiert die <strong>Bedingungen für die Durchführung der Überwachungstätigkeiten</strong> (wie der Lead Overseer prüft, zusammenarbeitet und berichtet).</p>
     <div class="key-points"><h4>Das Wichtigste</h4><ul>
       <li>ESAs benennen CTPP nach RTS 2024/1502; ein Lead Overseer wird zugeordnet.</li>
       <li>Direkte EU-Aufsicht mit Prüf-, Empfehlungs- und Sanktionsbefugnissen.</li>
       <li>RTS 2025/295 regelt die Durchführung der Aufsicht.</li>
     </ul></div>`}
  ],
  quiz:[
    {q:"Was ist ein CTPP?", options:["Ein Finanzprodukt","Ein kritischer IKT-Drittdienstleister unter EU-Aufsicht","Ein Meldeformular","Eine Testmethode"], answer:1, explain:"CTPP = Critical ICT Third-Party Provider, von den ESAs benannt und direkt beaufsichtigt."},
    {q:"Welcher RTS präzisiert die Einstufungskriterien für CTPP?", options:["RTS 2024/1502","RTS 2024/1774","ITS 2025/302","RTS 2025/532"], answer:0, explain:"RTS (EU) 2024/1502 konkretisiert Art. 31 Abs. 2 (CTPP-Kriterien)."},
    {q:"Wer übt die direkte Aufsicht über einen CTPP aus?", options:["Das nationale Finanzamt","Ein federführender Überwacher (Lead Overseer)","Die EZB allein","Der CTPP selbst"], answer:1, explain:"Für jeden CTPP wird eine ESA als Lead Overseer bestimmt."},
    {q:"Was kann der Lead Overseer bei Nichtbefolgung verhängen?", options:["Freiheitsstrafen","Zwangsgelder","Steuernachzahlungen","Nichts"], answer:1, explain:"Bei Nichtbefolgung von Empfehlungen drohen u. a. Zwangsgelder; Finanzunternehmen müssen die Nutzung ggf. beschränken."},
    {q:"Was ist neu an diesem Aufsichtsrahmen?", options:["Erstmals direkte EU-Aufsicht über IKT-Anbieter","Banken werden abgeschafft","Cloud wird verboten","Nur nationale Zuständigkeit"], answer:0, explain:"DORA führt erstmals eine direkte EU-Aufsicht über kritische IKT-Drittdienstleister ein."}
  ]
},
{
  id:"austausch", title:"Säule 5 – Informationsaustausch", icon:"🤝", level:"Einsteiger", pillar:"austausch",
  duration:"ca. 20 Min", tags:["Art. 45"],
  summary:"Freiwilliger, vertrauensvoller Austausch über Cyberbedrohungen – damit nicht jeder dieselben Angriffe allein lernt.",
  lessons:[
    {id:"sharing", title:"Austausch über Cyberbedrohungen", subtitle:"Art. 45",
     html:`<p>Die fünfte Säule ist die kürzeste: DORA <strong>ermöglicht</strong> (nicht erzwingt) den <strong>Austausch von Informationen und Erkenntnissen über Cyberbedrohungen</strong> zwischen Finanzunternehmen (Art.&nbsp;45) – etwa Indikatoren für Kompromittierung (IOCs), Taktiken, Techniken und Verfahren der Angreifer (TTPs), Warnungen und Konfigurationshinweise.</p>
     <h3>Bedingungen</h3>
     <ul>
       <li>Austausch innerhalb <strong>vertrauenswürdiger Gemeinschaften</strong>.</li>
       <li>Schutz der Vertraulichkeit; Einhaltung von Datenschutz (DSGVO) und Wettbewerbsrecht.</li>
       <li>Finanzunternehmen, die teilnehmen, melden dies ihrer Behörde.</li>
     </ul>
     <div class="callout"><span class="tag">Idee</span><p>Was einer lernt, schützt alle: Geteilte Bedrohungsinformationen verkürzen die Reaktionszeit der gesamten Branche – ein Angreifer kann denselben Trick nicht überall neu ausprobieren.</p></div>
     <div class="key-points"><h4>Das Wichtigste</h4><ul>
       <li>Informationsaustausch ist freiwillig, aber ausdrücklich erwünscht.</li>
       <li>Nur in vertrauenswürdigen Kreisen und datenschutzkonform.</li>
       <li>Teilnahme ist der Behörde anzuzeigen.</li>
     </ul></div>`}
  ],
  quiz:[
    {q:"Ist der Informationsaustausch nach Art. 45 verpflichtend?", options:["Ja, für alle","Nein, er ist freiwillig","Nur für Banken","Nur für CTPP"], answer:1, explain:"Art. 45 ermöglicht den Austausch, schreibt ihn aber nicht vor."},
    {q:"Was wird typischerweise geteilt?", options:["Kundenstammdaten","Bedrohungsindikatoren, TTPs und Warnungen","Gehaltslisten","Bilanzen"], answer:1, explain:"Geteilt werden Cyberbedrohungsinformationen wie IOCs, TTPs und Warnungen – keine personenbezogenen/geheimen Geschäftsdaten."},
    {q:"Welche Rahmenbedingung gilt?", options:["Beliebige Weitergabe an jeden","Austausch in vertrauenswürdigen Gemeinschaften, datenschutzkonform","Nur per Post","Nur anonym ins Internet"], answer:1, explain:"Austausch erfolgt in vertrauenswürdigen Kreisen unter Wahrung von Datenschutz und Wettbewerbsrecht."}
  ]
}
];
