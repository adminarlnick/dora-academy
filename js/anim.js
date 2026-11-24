/* DORA Akademie – animierte SVG-Erklärgrafiken (Video-Ersatz, selbsttragend mit eingebettetem CSS).
   Jede Funktion gibt einen SVG-String zurück; aufrufbar aus Lektionen, Artikeln und der Startseite. */
(function () {
  "use strict";
  const A = {};
  // gemeinsame Farben
  const C = { bg:"#0e1630", pan:"#15204a", line:"#2a3f78", acc:"#5b8cff", acc2:"#38d9c6", ink:"#eaf0ff", mut:"#9fb0d6", warn:"#ffb454", ok:"#4cd083", bad:"#ff6b7a" };

  // 1) Fünf Säulen der Resilienz – wandernder Scheinwerfer
  A.pillars = function () {
    const items = [
      ["🛡️","IKT-Risiko­management","Art. 5–16"],
      ["🚨","Vorfälle &amp; Meldung","Art. 17–23"],
      ["🧪","Resilienz-Tests","Art. 24–27"],
      ["🔗","Drittparteien­risiko","Art. 28–44"],
      ["🤝","Informations­austausch","Art. 45"],
    ];
    const w=720,h=240,n=items.length,gap=18,pw=(w-40-gap*(n-1))/n;
    let bars="";
    items.forEach((it,i)=>{
      const x=20+i*(pw+gap);
      bars+=`<g class="pil" style="animation-delay:${i*1.4}s">
        <rect x="${x}" y="70" width="${pw}" height="150" rx="12" class="pbar"/>
        <text x="${x+pw/2}" y="118" text-anchor="middle" font-size="34">${it[0]}</text>
        <text x="${x+pw/2}" y="162" text-anchor="middle" class="pt" font-size="12">${it[1].split("­").join("")}</text>
        <text x="${x+pw/2}" y="196" text-anchor="middle" class="pm" font-size="10.5">${it[2]}</text></g>`;
    });
    return svg(w,h,`<style>
      .pbar{fill:${C.pan};stroke:${C.line}}
      .pt{fill:${C.ink};font-weight:700}.pm{fill:${C.mut}}
      .pil{transform-origin:center;animation:pil 7s ease-in-out infinite}
      @keyframes pil{0%,100%{opacity:.5}12%{opacity:1}24%{opacity:.5}}
      .pil:hover{opacity:1!important}
      .cap{fill:${C.acc2};font-weight:700}
      @media(prefers-reduced-motion:reduce){.pil{animation:none;opacity:1}}
    </style>
    <text x="20" y="40" class="cap" font-size="15">Die fünf Säulen von DORA – ein System, kein Einzelbaustein</text>
    ${bars}`);
  };

  // 2) Meldekette eines schwerwiegenden Vorfalls – wandernder Fortschritt
  A.incidentTimeline = function () {
    const steps = [
      ["Erkennung","T0","Vorfall eingestuft"],
      ["Erstmeldung","≤ 24 h","als schwerwiegend"],
      ["Zwischen","≤ 72 h","Lagebild"],
      ["Abschluss","≤ 1 Monat","Ursachen &amp; Lehren"],
    ];
    const w=760,h=210,n=steps.length,x0=95,x1=w-90,span=x1-x0;
    let dots="";
    steps.forEach((s,i)=>{
      const x=x0+span*i/(n-1);
      dots+=`<g>
        <circle cx="${x}" cy="90" r="12" class="node" style="animation-delay:${i*1.1}s"/>
        <text x="${x}" y="95" text-anchor="middle" font-size="11" fill="#06122e" font-weight="800">${i+1}</text>
        <text x="${x}" y="58" text-anchor="middle" class="st" font-size="12.5">${s[0]}</text>
        <text x="${x}" y="128" text-anchor="middle" class="sb" font-size="12" font-weight="800">${s[1]}</text>
        <text x="${x}" y="148" text-anchor="middle" class="sm" font-size="10">${s[2]}</text></g>`;
    });
    return svg(w,h,`<style>
      .track{stroke:${C.line};stroke-width:4}
      .fill{stroke:${C.acc};stroke-width:4;stroke-dasharray:${span};stroke-dashoffset:${span};animation:fill 6s ease-in-out infinite}
      .node{fill:${C.pan};stroke:${C.acc};stroke-width:3;animation:pop 6s ease-in-out infinite}
      .st{fill:${C.ink};font-weight:700}.sb{fill:${C.acc2}}.sm{fill:${C.mut}}
      @keyframes fill{0%{stroke-dashoffset:${span}}70%,100%{stroke-dashoffset:0}}
      @keyframes pop{0%,100%{fill:${C.pan}}50%{fill:${C.acc}}}
      @media(prefers-reduced-motion:reduce){.fill{stroke-dashoffset:0;animation:none}.node{fill:${C.acc};animation:none}}
    </style>
    <text x="50" y="30" class="cap" fill="${C.acc2}" font-size="15" font-weight="700">Meldekette eines schwerwiegenden IKT-Vorfalls (Art. 19 · RTS 2025/301)</text>
    <line x1="${x0}" y1="90" x2="${x1}" y2="90" class="track"/>
    <line x1="${x0}" y1="90" x2="${x1}" y2="90" class="fill"/>
    ${dots}
    <text x="50" y="190" class="sm" fill="${C.mut}" font-size="10.5">Fristen indikativ; maßgeblich sind RTS 2025/301 &amp; ITS 2025/302.</text>`);
  };

  // 3) IKT-Risikomanagement-Zyklus – rotierende Hervorhebung
  A.riskCycle = function () {
    const items = [["Identifizieren","Art. 8"],["Schützen","Art. 9"],["Erkennen","Art. 10"],["Reagieren","Art. 11"],["Wiederherstellen","Art. 12"],["Lernen","Art. 13"]];
    const w=420,h=420,cx=210,cy=215,R=140,n=items.length;
    let nodes="";
    items.forEach((it,i)=>{
      const a=-Math.PI/2+2*Math.PI*i/n, x=cx+R*Math.cos(a), y=cy+R*Math.sin(a);
      nodes+=`<g class="cn" style="animation-delay:${i*1}s">
        <circle cx="${x}" cy="${y}" r="42" class="cc"/>
        <text x="${x}" y="${y-2}" text-anchor="middle" class="ct" font-size="12.5">${it[0]}</text>
        <text x="${x}" y="${y+15}" text-anchor="middle" class="cm" font-size="10.5">${it[1]}</text></g>`;
    });
    return svg(w,h,`<style>
      .ring{fill:none;stroke:${C.line};stroke-width:2;stroke-dasharray:6 8}
      .cc{fill:${C.pan};stroke:${C.acc};stroke-width:2.5}
      .ct{fill:${C.ink};font-weight:700}.cm{fill:${C.acc2}}
      .cn{transform-origin:center;animation:cyc 6s ease-in-out infinite}
      @keyframes cyc{0%,100%{opacity:.55}50%{opacity:1}}
      .cn:nth-child(2){animation-delay:0s}
      @media(prefers-reduced-motion:reduce){.cn{animation:none;opacity:1}}
    </style>
    <circle cx="${cx}" cy="${cy}" r="${R}" class="ring"><animateTransform attributeName="transform" type="rotate" from="0 ${cx} ${cy}" to="360 ${cx} ${cy}" dur="30s" repeatCount="indefinite"/></circle>
    <text x="${cx}" y="${cy-6}" text-anchor="middle" fill="${C.acc2}" font-size="14" font-weight="800">IKT-Risiko-</text>
    <text x="${cx}" y="${cy+14}" text-anchor="middle" fill="${C.acc2}" font-size="14" font-weight="800">zyklus</text>
    <text x="${cx}" y="${cy+34}" text-anchor="middle" fill="${C.mut}" font-size="10.5">laufend, nicht einmalig</text>
    ${nodes}`);
  };

  // 4) RTO / RPO am Zeitstrahl
  A.rtoRpo = function () {
    const w=720,h=210,x0=40,x1=w-40,mid=360,yb=120;
    return svg(w,h,`<style>
      .axis{stroke:${C.line};stroke-width:3}
      .ev{fill:${C.bad}}
      .seg{stroke-width:8;fill:none;stroke-linecap:round}
      .rpo{stroke:${C.warn};animation:dash 4s ease-in-out infinite}
      .rto{stroke:${C.acc2};animation:dash 4s ease-in-out infinite .5s}
      .lab{fill:${C.ink};font-weight:700}.sub{fill:${C.mut}}
      @keyframes dash{0%{opacity:.4}50%{opacity:1}100%{opacity:.4}}
      @media(prefers-reduced-motion:reduce){.rpo,.rto{animation:none;opacity:1}}
    </style>
    <text x="40" y="34" fill="${C.acc2}" font-size="15" font-weight="700">RPO &amp; RTO – wie viel Datenverlust und Ausfall sind tolerierbar? (Art. 12)</text>
    <line x1="${x0}" y1="${yb}" x2="${x1}" y2="${yb}" class="axis"/>
    <circle cx="${mid}" cy="${yb}" r="9" class="ev"/>
    <text x="${mid}" y="${yb-18}" text-anchor="middle" class="lab" font-size="12">Störung</text>
    <line x1="${mid-170}" y1="${yb}" x2="${mid}" y2="${yb}" class="seg rpo"/>
    <circle cx="${mid-170}" cy="${yb}" r="7" fill="${C.warn}"/>
    <text x="${mid-170}" y="${yb-16}" text-anchor="middle" class="sub" font-size="11">letztes Backup</text>
    <text x="${mid-85}" y="${yb+28}" text-anchor="middle" fill="${C.warn}" font-size="12" font-weight="700">RPO</text>
    <text x="${mid-85}" y="${yb+44}" text-anchor="middle" class="sub" font-size="10">max. Datenverlust</text>
    <line x1="${mid}" y1="${yb}" x2="${mid+210}" y2="${yb}" class="seg rto"/>
    <circle cx="${mid+210}" cy="${yb}" r="7" fill="${C.acc2}"/>
    <text x="${mid+210}" y="${yb-16}" text-anchor="middle" class="sub" font-size="11">Betrieb wieder da</text>
    <text x="${mid+105}" y="${yb+28}" text-anchor="middle" fill="${C.acc2}" font-size="12" font-weight="700">RTO</text>
    <text x="${mid+105}" y="${yb+44}" text-anchor="middle" class="sub" font-size="10">max. Ausfallzeit</text>`);
  };

  // 5) Oversight über kritische Drittdienstleister (CTPP)
  A.oversight = function () {
    const w=720,h=200;
    const box=(x,t,s,cls)=>`<g class="flow ${cls}"><rect x="${x}" y="70" width="150" height="70" rx="12" class="fb"/>
      <text x="${x+75}" y="100" text-anchor="middle" class="ft" font-size="12.5">${t}</text>
      <text x="${x+75}" y="120" text-anchor="middle" class="fs" font-size="10.5">${s}</text></g>`;
    const arrow=(x)=>`<g class="arr"><line x1="${x}" y1="105" x2="${x+40}" y2="105" stroke="${C.acc}" stroke-width="3"/><polygon points="${x+40},105 ${x+32},100 ${x+32},110" fill="${C.acc}"/></g>`;
    return svg(w,h,`<style>
      .fb{fill:${C.pan};stroke:${C.line}}
      .d1 .fb{stroke:${C.acc}}.d2 .fb{stroke:${C.acc2}}.d3 .fb{stroke:${C.warn}}
      .ft{fill:${C.ink};font-weight:700}.fs{fill:${C.mut}}
      .flow{animation:step 5s ease-in-out infinite}
      .d2{animation-delay:.6s}.d3{animation-delay:1.2s}.d4{animation-delay:1.8s}
      @keyframes step{0%,100%{opacity:.55}30%{opacity:1}}
      @media(prefers-reduced-motion:reduce){.flow{animation:none;opacity:1}}
    </style>
    <text x="20" y="40" fill="${C.acc2}" font-size="15" font-weight="700">Aufsicht über kritische IKT-Drittdienstleister (Art. 31–42)</text>
    ${box(20,"CTPP","kritischer Anbieter","d1")}
    ${arrow(172)}
    ${box(218,"Lead Overseer","federführende ESA","d2")}
    ${arrow(370)}
    ${box(416,"Empfehlungen","an den CTPP","d3")}
    ${arrow(568)}
    ${box(550,"","","d4").replace('x="550"','x="560"')}
    <g class="flow d4"><rect x="560" y="70" width="150" height="70" rx="12" class="fb" style="stroke:${C.ok}"/>
      <text x="635" y="100" text-anchor="middle" class="ft" font-size="12.5">Nat. Behörde</text>
      <text x="635" y="120" text-anchor="middle" class="fs" font-size="10.5">setzt durch (Art. 42)</text></g>`);
  };

  // 6) Datenfluss Informationsregister
  A.registerFlow = function () {
    const w=720,h=200;
    return svg(w,h,`<style>
      .rb{fill:${C.pan};stroke:${C.line}}.rt{fill:${C.ink};font-weight:700}.rs{fill:${C.mut}}
      .pkt{fill:${C.acc2}}
      @media(prefers-reduced-motion:reduce){.pkt{display:none}}
    </style>
    <text x="20" y="38" fill="${C.acc2}" font-size="15" font-weight="700">Informationsregister: Verträge dokumentieren &amp; melden (Art. 28 · ITS 2024/2956)</text>
    <g><rect x="20" y="75" width="150" height="80" rx="12" class="rb"/><text x="95" y="108" text-anchor="middle" class="rt" font-size="12.5">Finanz-</text><text x="95" y="126" text-anchor="middle" class="rt" font-size="12.5">unternehmen</text></g>
    <g><rect x="285" y="75" width="150" height="80" rx="12" class="rb" style="stroke:${C.acc}"/><text x="360" y="108" text-anchor="middle" class="rt" font-size="12.5">Informations-</text><text x="360" y="126" text-anchor="middle" class="rt" font-size="12.5">register (LEI)</text></g>
    <g><rect x="550" y="75" width="150" height="80" rx="12" class="rb" style="stroke:${C.ok}"/><text x="625" y="115" text-anchor="middle" class="rt" font-size="12.5">Aufsichtsbehörde</text></g>
    <line x1="170" y1="115" x2="285" y2="115" stroke="${C.line}" stroke-width="3"/>
    <line x1="435" y1="115" x2="550" y2="115" stroke="${C.line}" stroke-width="3"/>
    <circle class="pkt" r="6" cx="170" cy="115"><animate attributeName="cx" from="170" to="285" dur="2s" repeatCount="indefinite"/></circle>
    <circle class="pkt" r="6" cx="435" cy="115"><animate attributeName="cx" from="435" to="550" dur="2s" begin="1s" repeatCount="indefinite"/></circle>
    <text x="360" y="178" text-anchor="middle" class="rs" font-size="11">Register laufend pflegen · jährlich melden · bei neuen Verträgen aktualisieren</text>`);
  };

  function svg(w,h,inner){
    return `<div class="anim-fig"><svg viewBox="0 0 ${w} ${h}" width="100%" preserveAspectRatio="xMidYMid meet" role="img" style="display:block;background:${C.bg};border:1px solid ${C.line};border-radius:14px">${inner}</svg></div>`;
  }
  window.ANIM = A;
})();
