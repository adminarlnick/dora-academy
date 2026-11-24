/* DORA Akademie – Katalog der Level-2-Rechtsakte (RTS/ITS). Amtliche Titel aus EUR-Lex.
   typ: RTS = technischer Regulierungsstandard, ITS = technischer Durchführungsstandard. */
window.DORA_BASE = {
  celex: "32022R2554", nr: "2022/2554", kurz: "DORA",
  titel: "Verordnung (EU) 2022/2554 über die digitale operationale Resilienz im Finanzsektor (DORA)",
  eurlex: "https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32022R2554"
};

window.STANDARDS = [
  { nr: "2024/1774", typ: "RTS", pillar: "risiko", art: "Art. 15 & 16 Abs. 3",
    titel: "RTS zu Tools, Methoden, Prozessen und Richtlinien für das IKT-Risikomanagement und zum vereinfachten IKT-Risikomanagementrahmen",
    kurz: "IKT-Risikomanagement-Rahmen (voll & vereinfacht)",
    eurlex: "https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=OJ:L_202401774" },
  { nr: "2024/1772", typ: "RTS", pillar: "vorfaelle", art: "Art. 18 Abs. 3",
    titel: "RTS zur Festlegung der Kriterien für die Klassifizierung von IKT-bezogenen Vorfällen und Cyberbedrohungen, der Wesentlichkeitsschwellen und der Einzelheiten der Meldungen",
    kurz: "Klassifizierung von Vorfällen & Wesentlichkeitsschwellen",
    eurlex: "https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=OJ:L_202401772" },
  { nr: "2025/301", typ: "RTS", pillar: "vorfaelle", art: "Art. 20 Buchst. a",
    titel: "RTS zu Inhalt und Fristen für Erst-, Zwischen- und Abschlussmeldung schwerwiegender IKT-bezogener Vorfälle sowie Inhalt der freiwilligen Meldung erheblicher Cyberbedrohungen",
    kurz: "Meldeinhalte & -fristen für schwerwiegende Vorfälle",
    eurlex: "https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=OJ:L_202500301" },
  { nr: "2025/302", typ: "ITS", pillar: "vorfaelle", art: "Art. 20 Buchst. b",
    titel: "ITS zu Standardformularen, Vorlagen und Verfahren für Finanzunternehmen zur Meldung eines schwerwiegenden IKT-bezogenen Vorfalls oder einer erheblichen Cyberbedrohung",
    kurz: "Meldeformulare & -verfahren",
    eurlex: "https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=OJ:L_202500302" },
  { nr: "2025/1190", typ: "RTS", pillar: "testen", art: "Art. 26 Abs. 11",
    titel: "RTS zu Kriterien für die Bestimmung TLPT-pflichtiger Finanzunternehmen, Anforderungen an interne Tester, Testumfang, Testmethodik und -konzept sowie Ergebnis-, Abschluss- und Behebungsphasen",
    kurz: "Bedrohungsorientierte Penetrationstests (TLPT)",
    eurlex: "https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=OJ:L_202501190" },
  { nr: "2024/1773", typ: "RTS", pillar: "dritte", art: "Art. 28 Abs. 10",
    titel: "RTS zum detaillierten Inhalt der Leitlinie für vertragliche Vereinbarungen über die Nutzung von IKT-Dienstleistungen zur Unterstützung kritischer oder wichtiger Funktionen durch IKT-Drittdienstleister",
    kurz: "Leitlinie/Policy für IKT-Drittdienstleister-Verträge",
    eurlex: "https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=OJ:L_202401773" },
  { nr: "2025/532", typ: "RTS", pillar: "dritte", art: "Art. 30 Abs. 5",
    titel: "RTS zur Präzisierung der Aspekte, die ein Finanzunternehmen bei der Untervergabe von IKT-Dienstleistungen zur Unterstützung kritischer oder wichtiger Funktionen bestimmen und bewerten muss",
    kurz: "Unterauftragsvergabe (Subcontracting)",
    eurlex: "https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=OJ:L_202500532" },
  { nr: "2024/2956", typ: "ITS", pillar: "dritte", art: "Art. 28 Abs. 9",
    titel: "ITS zu Standardvorlagen für das Informationsregister aller vertraglichen Vereinbarungen über IKT-Dienstleistungen von IKT-Drittdienstleistern",
    kurz: "Informationsregister (Register of Information)",
    eurlex: "https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=OJ:L_202402956" },
  { nr: "2024/1502", typ: "RTS", pillar: "aufsicht", art: "Art. 31 Abs. 2",
    titel: "RTS zur näheren Bestimmung der Kriterien für die Einstufung von IKT-Drittdienstleistern als kritisch (CTPP)",
    kurz: "Einstufung kritischer IKT-Drittdienstleister (CTPP)",
    eurlex: "https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=OJ:L_202401502" },
  { nr: "2025/295", typ: "RTS", pillar: "aufsicht", art: "Art. 41 Abs. 1",
    titel: "RTS zur Harmonisierung der Bedingungen für die Durchführung der Überwachungstätigkeiten (Oversight) gegenüber kritischen IKT-Drittdienstleistern",
    kurz: "Durchführung der Aufsicht (Oversight)",
    eurlex: "https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=OJ:L_202500295" },
];

window.PILLARS = {
  risiko:   { icon: "🛡️", name: "IKT-Risikomanagement", art: "Art. 5–16" },
  vorfaelle:{ icon: "🚨", name: "Behandlung & Meldung von IKT-Vorfällen", art: "Art. 17–23" },
  testen:   { icon: "🧪", name: "Testen der digitalen Resilienz", art: "Art. 24–27" },
  dritte:   { icon: "🔗", name: "IKT-Drittparteienrisiko", art: "Art. 28–44" },
  aufsicht: { icon: "🏛️", name: "Aufsicht über kritische Drittdienstleister", art: "Art. 31–44" },
  austausch:{ icon: "🤝", name: "Informationsaustausch", art: "Art. 45" },
};
