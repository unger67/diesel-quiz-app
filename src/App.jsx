import { useState } from "react";

const HFC_LOGO = "data:image/png;base64,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";

// ── Fragen (correct = 0-basierter Index der richtigen Antwort) ───────────────
const QUESTIONS = [
  {
    id: 1,
    question: "Wenn im Flug aus Versehen der Battery-Master-Schalter ausgeschaltet wird,",
    options: [
      "bleibt der Motor sofort stehen, weil die FADEC nicht mehr von der Batterie versorgt wird.",
      "sind Funk und Transponder stromlos.",
      "passiert erst mal gar nichts, weil der Alternator weiterhin elektrische Energie liefert, Erregung des Alternators über die Notbatterie.",
      "leuchtet sofort die Alternator-Warnung auf.",
    ],
    correct: 2, // "passiert erst mal gar nichts..."
  },
  {
    id: 2,
    question: "Beim Winterbetrieb mit niedrigen Temperaturen,",
    options: [
      "verzichte ich beim Preflight Check auf das Fahren der Klappen um die Batterie zu schonen.",
      "muss ich den Triebwerksstart mit Alternate Air durchführen.",
      "glühe ich durch mehrfaches Schalten des Engine Master Switches mehrfach vor um den Motor vor dem Start gut anzuwärmen.",
      "starte ich nach Möglichkeit das Triebwerk mit externer Spannungsversorgung.",
    ],
    correct: 0, // "verzichte ich beim Preflight Check auf das Fahren der Klappen..."
  },
  {
    id: 3,
    question: "Wann wird der FADEC-Reset durchgeführt?",
    options: [
      "Wenn eine FADEC-Leuchte rot leuchtet.",
      "Wenn die rote Alternator Leuchte blinkt.",
      "Wenn die beiden gelben Caution Leuchten an sind.",
      "Wenn eine oder beide FADEC-Leuchten rot blinken.",
    ],
    correct: 3, // "Wenn eine oder beide FADEC-Leuchten rot blinken."
  },
  {
    id: 4,
    question: "Nach dem Start des Motors: Wie ist das Normalverfahren für das Warmlaufen des Motors?",
    options: [
      "Da der Motor eine Wasserkühlung hat, kann auf das Warmlaufen verzichtet werden.",
      "Triebwerk ca. 2 min mit Load-Hebel in Leerlauf laufen lassen. Dann die Propellerdrehzahl auf 1700 RPM steigern bis eine Öltemperatur von 95°C und eine Kühlmitteltemperatur von 60°C erreicht ist.",
      "Triebwerk ca. 2 min mit Load-Hebel in Leerlauf laufen lassen. Dann kann die Propellerdrehzahl bis auf max. 1400 RPM gesteigert werden (nicht auf dem LH Vorfeld), bis eine Öltemperatur von 50°C und eine Kühlmitteltemperatur von 60°C erreicht ist.",
      "Triebwerk ca. 1 min mit Load-Hebel in Leerlauf laufen lassen. Dann die Propellerdrehzahl auf 1400 RPM steigern bis eine Öltemperatur von 60°C und eine Kühlmitteltemperatur von 50°C erreicht ist.",
    ],
    correct: 2, // "Triebwerk ca. 2 min... 1400 RPM..."
  },
  {
    id: 5,
    question: "Ich kontrolliere die Leistungsabgabe des Alternators durch folgende Maßnahmen:",
    options: [
      "Ich erhöhe die Load auf 20% und schalten den Engine-Master-Schalter aus, dabei darf die Drehzahl nicht einbrechen.",
      "Ich erhöhe die Load, so dass sich 1700 RPM einstellen und schalten den Battery-Master-Schalter für 5 sec aus. Die Volt-Anzeige darf während dieser Zeit nicht einbrechen.",
      "Ich erhöhe die Load auf 20% und schalte Verbraucher zu (z.B. Landeklappen), dann dürfen Volt- und Ammeter nur ganz kurz zucken.",
      "Ich erhöhe die Load, so dass sich 1400 RPM einstellen und schalten den Engine-Master-Schalter aus, dabei darf die Volt-Anzeige nicht einbrechen.",
    ],
    correct: 2, // "Ich erhöhe die Load auf 20% und schalte Verbraucher zu (z.B. Landeklappen)..."
  },
  {
    id: 6,
    question: "Welcher Kraftstoff wird im HFC für den Betrieb der CD-155 Motoren bevorzugt verwendet?",
    options: [
      "AVGAS",
      "Benzin",
      "Auto-Diesel",
      "Jet A-1",
    ],
    correct: 2, // "Auto-Diesel"
  },
  {
    id: 7,
    question: "Was wird als Common Rail bezeichnet?",
    options: [
      "Eine elektronische Steuerungseinheit",
      "Der elektronisch geregelte Hochdruckspeicher des Kraftstoffsystems",
      "Ein mechanisches Kraftstoffventil",
      "Ein mechanisches Einspritzsystem",
    ],
    correct: 1, // "Der elektronisch geregelte Hochdruckspeicher..."
  },
  {
    id: 8,
    question: "Welcher physikalische Parameter trägt maßgeblich zur höheren Effizienz des Dieselmotors bei?",
    options: [
      "Reduzierte Luftkompression",
      "Höheres Verdichtungsverhältnis",
      "Niedrigere Betriebstemperatur",
      "Direkte Zündkerzensteuerung",
    ],
    correct: 1, // "Höheres Verdichtungsverhältnis"
  },
  {
    id: 9,
    question: "Der Umbau des Antriebs vom Benzinmotor zum Dieselmotor ist möglich geworden durch:",
    options: [
      "Die entsprechende EMZ (Ergänzende Muster Zulassung) für C172",
      "Eine LTA (Lufttüchtigkeitsanweisung)",
      "Die FADEC (Full Authority Digital Engine Control) mit ECU A und ECU B",
      "Ein SB (Service Bulletin)",
    ],
    correct: 0, // "Die entsprechende EMZ..."
  },
  {
    id: 10,
    question: "Welches Dieselmotorenmodell ist aktuell in der Cessna 172 des HFC verbaut?",
    options: [
      "CD-155 / Centurion 2.0S",
      "Lycoming O-320",
      "Continental IO-360",
      "Centurion 1.7",
    ],
    correct: 0, // "CD-155 / Centurion 2.0S"
  },
  {
    id: 11,
    question: "Eine oder beide FADEC Leuchten blinken rot. Muss sofort das Notverfahren eingeleitet werden?",
    options: [
      "Ja",
      "Nein, ich drücke den CED/AED Knopf.",
      "Nein, die FADEC-Backup-Batterie versorgt immer den Motor.",
      "Nein, ich drücke den FADEC Testknopf für min. 2 Sekunden.",
    ],
    correct: 3, // "Nein, ich drücke den FADEC Testknopf..."
  },
  {
    id: 12,
    question: "Zur Vermeidung des Trockenfliegens eines Kraftstofftanks bei einer Seitenwindlandung:",
    options: [
      "wird die elektrische Kraftstoffpumpe zugeschaltet.",
      "sorgt in allen möglichen Fluglagen immer der Header- oder Reservoir Tank.",
      "wird im Gegenanflug das Kraftstoffventil auf Stellung BOTH gestellt und die elektrische Kraftstoffpumpe zugeschaltet.",
      "wird im Gegenanflug auf den im Endanflug tieferliegenden Tank (Luv Tank) geschaltet.",
    ],
    correct: 2, // "wird im Gegenanflug das Kraftstoffventil auf Stellung BOTH gestellt..."
  },
  {
    id: 13,
    question: "Wann darf zum Aufwärmen des Kraftstoffs in den Tanks (für den Start bei niedrigen Temperaturen) die Load über die 1400 RPM bis zur Startleistung erhöht werden?",
    options: [
      "Wenn die CHT Anzeige im grünen Bereich ist.",
      "Wenn OP und OT grün sind, aber bitte nicht vor Rollweg U.",
      "Wenn OT und CT grün sind.",
      "Wenn alle Anzeigen am CED und AED grün sind.",
    ],
    correct: 2, // "Wenn OT und CT grün sind..."
  },
  {
    id: 14,
    question: "Nach dem Warmlauf des Motors betätigen Sie den FADEC-Testknopf und es passiert nichts. Was könnte die Ursache sein?",
    options: [
      "Ich habe zuvor nicht den Test/Confirm Knopf gedrückt.",
      "Der Load-Lever steht nicht in der Leerlauf-Position.",
      "Die Tanktemperatur ist zu niedrig.",
      "Die Batterie ist ziemlich leer.",
    ],
    correct: 1, // "Der Load-Lever steht nicht in der Leerlauf-Position."
  },
  {
    id: 15,
    question: "Welchen Beitrag leistet das Zweimassenschwungrad zur Motorstabilität?",
    options: [
      "Reduktion des Treibstoffverbrauchs",
      "Dämpfung von Torsionsschwingungen",
      "Erhöhung der mechanischen Leistung",
      "Verbesserung der Zylinderkompression",
    ],
    correct: 1, // "Dämpfung von Torsionsschwingungen"
  },
  {
    id: 16,
    question: "Welche Drehzahl sollte der Motor beim Takeoff mindestens erreichen?",
    options: [
      "2240 RPM",
      "2400 RPM",
      "2300 RPM",
      "2000 RPM",
    ],
    correct: 0, // "2240 RPM"
  },
  {
    id: 17,
    question: "Wer baute den ersten Dieselmotor?",
    options: [
      "Henry Ford",
      "Rudolf Diesel",
      "Karl Benz",
      "Nikolaus Otto",
    ],
    correct: 1, // "Rudolf Diesel"
  },
  {
    id: 18,
    question: "Bei einem Flug an einem ungewöhnlich heißen Sommertag geht im niedrigen Reiseflug nach ca. 1 Stunde das AED Caution Licht an und die Temperaturanzeige des linken Tanks steht auf gelb (ca. +70 Grad):",
    options: [
      "Im Reiseflug (ruhige Luft) schalte ich auf den rechten Tank und warte ab. Sobald alle Anzeigen wieder grün sind, schalte ich den Tankwahlhebel wieder auf BOTH.",
      "Ich schalte den Motor aus, damit er nicht überhitzt.",
      "Ich mache eine Sicherheitslandung.",
      "Ich führe einen Schiebeflug durch, damit der Rumpf die linke Tankseite abschattet und sich der Tank nicht weiter aufheizt.",
    ],
    correct: 0, // "Im Reiseflug schalte ich auf den rechten Tank..."
  },
  {
    id: 19,
    question: "Wofür steht Load in der Anzeige des Dieselmotors?",
    options: [
      "Die Batteriespannung",
      "Die Restlaufzeit des Motors",
      "Die tatsächlich abgegebene Motorleistung in Prozent",
      "Die aktuelle Propellerstellung",
    ],
    correct: 2, // "Die tatsächlich abgegebene Motorleistung in Prozent"
  },
  {
    id: 20,
    question: "Welche Energiequellen stehen zur Aufrechterhaltung der FADEC-Funktionalität zur Verfügung?",
    options: [
      "Alternator",
      "Alle genannten",
      "FADEC-Notbatterie",
      "Batterie",
    ],
    correct: 1, // "Alle genannten"
  },
  {
    id: 21,
    question: "Welche Mindestdrehzahl ist beim Motorstart vor dem Loslassen des Starters erforderlich?",
    options: [
      "2000 RPM",
      "1400 RPM",
      "1000 RPM",
      "500 RPM",
    ],
    correct: 3, // "500 RPM"
  },
  {
    id: 22,
    question: "Das Problem beim Trockenfliegen eines Tanks",
    options: [
      "entsteht durch den Header- oder Reservoir-Tank. Nach Wiederherstellung der Kraftstoffversorgung lässt sich dieser nicht mehr entlüften.",
      "liegt bei der motorseitigen Kraftstoffpumpe. Durch das Fördern von Luft wird die Hochdruckstufe nicht mehr mit Kraftstoff geschmiert und kann zu einem späteren Zeitpunkt fressen und abscheren.",
      "besteht nicht bei Verwendung von Jet A-1.",
      "entsteht durch die aufwendige Entlüftungsprozedur der Einspritzpumpe und der Common Rail.",
    ],
    correct: 1, // "liegt bei der motorseitigen Kraftstoffpumpe..."
  },
  {
    id: 23,
    question: "Du hast den Motor gestartet und stellst fest, dass der Öldruck nach dem Start unter 2.3 bar (im roten Segment) verbleibt. Wie verhältst du dich?",
    options: [
      "Nach dem Start ist ein geringer Öldruck normal, der Druck korreliert mit der Leistung.",
      "Ich stelle den Motor sofort ab.",
      "Ich beobachte den Öldruck eine Minute. Schwankt er, stelle ich den Motor ab.",
      "Ich beobachte den Öldruck während des Warmlaufens zwei Minuten. Wenn er bis dahin ins grüne Segment steigt, ist alles in Ordnung und ich fahre fort.",
    ],
    correct: 1, // "Ich stelle den Motor sofort ab."
  },
  {
    id: 24,
    question: "Der Alternator fällt aus, was durch die rote VOLTS Anzeige angezeigt wird. Außerdem hat der Gegencheck eine negative Amperemeter-Anzeige ergeben. Was tust du?",
    options: [
      "Ich überprüfe die 3 relevanten Selbstschalter (ALT, ALT FLD, WARN). Kann die Stromversorgung nicht wiederhergestellt werden, schalte ich alle unnötigen Verbraucher aus und fliege zum nächsten geeigneten Flugplatz.",
      "Ich drücke den CED/AED Knopf, um die VOLTS Anzeige zu löschen.",
      "Ich kann mein Flugvorhaben ohne weitere Einschränkungen fortführen, weil die Erreger-Notbatterie einspringt.",
      "Ich ziehe den roten Knopf mit der Beschriftung ALT STATIC AIR PULL ON und kann ganz normal weiterfliegen.",
    ],
    correct: 0, // "Ich überprüfe die 3 relevanten Selbstschalter..."
  },
];

const PASS_THRESHOLD = 0.75;

function getRomanDate() {
  return new Date().toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function getCertificateHtml(name, memberId, score, total, passed) {
  const percent = Math.round((score / total) * 100);
  const dateStr = getRomanDate();
  const html = `<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
<title>Zertifikat – ${name}</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Montserrat:wght@300;400;600&display=swap');
  *{margin:0;padding:0;box-sizing:border-box;}
  body{width:297mm;height:210mm;background:#fdfaf5;font-family:'Cormorant Garamond',serif;display:flex;align-items:center;justify-content:center;overflow:hidden;}
  .page{width:100%;height:100%;padding:14mm;display:flex;align-items:center;justify-content:center;position:relative;}
  .border-outer{position:absolute;inset:10mm;border:3px solid #1d4e8f;}
  .border-inner{position:absolute;inset:12.5mm;border:1px solid #1d4e8f;}
  .corner{position:absolute;width:14mm;height:14mm;border-color:#1d4e8f;border-style:solid;}
  .corner-tl{top:9mm;left:9mm;border-width:3px 0 0 3px;}
  .corner-tr{top:9mm;right:9mm;border-width:3px 3px 0 0;}
  .corner-bl{bottom:9mm;left:9mm;border-width:0 0 3px 3px;}
  .corner-br{bottom:9mm;right:9mm;border-width:0 3px 3px 0;}
  .content{text-align:center;z-index:1;padding:0 16mm;}
  .logo{height:28mm;margin-bottom:4mm;object-fit:contain;}
  .org{font-family:'Montserrat',sans-serif;font-weight:300;font-size:8pt;letter-spacing:3px;text-transform:uppercase;color:#1d4e8f;margin-bottom:4mm;}
  .title{font-size:36pt;font-weight:700;color:#0f1e3a;line-height:1;margin-bottom:2mm;}
  .subtitle{font-size:12pt;font-weight:400;font-style:italic;color:#3b6cbf;margin-bottom:6mm;}
  .text{font-size:11pt;color:#1a2a40;line-height:1.7;margin-bottom:3mm;}
  .name{font-size:26pt;font-weight:600;font-style:italic;color:#1d4e8f;border-bottom:1.5px solid #1d4e8f;display:inline-block;padding:0 10mm 1mm;margin:2mm 0;}
  .score-badge{display:inline-block;background:#1d4e8f;color:#fff;font-family:'Montserrat',sans-serif;font-size:9pt;letter-spacing:2px;padding:2mm 6mm;margin:3mm 0;}
  .meta{font-family:'Montserrat',sans-serif;font-size:7pt;letter-spacing:2px;color:#3b6cbf;margin-top:5mm;}
  .ornament{font-size:16pt;color:#1d4e8f;letter-spacing:6px;margin-bottom:2mm;}
  .topic{font-family:'Montserrat',sans-serif;font-size:8pt;letter-spacing:2px;color:#3b6cbf;margin-bottom:4mm;}
</style>
</head>
<body>
<div class="page">
  <div class="border-outer"></div>
  <div class="border-inner"></div>
  <div class="corner corner-tl"></div>
  <div class="corner corner-tr"></div>
  <div class="corner corner-bl"></div>
  <div class="corner corner-br"></div>
  <div class="content">
    <div style="background:#fff;border-radius:8px;padding:6px 16px;display:inline-block;margin-bottom:4mm;"><img src=${HFC_LOGO} class="logo" alt="HFC Hamburg" style="display:block;" /></div>
    <div class="org">Mitglied-Nr. ${memberId}</div>
    <div class="ornament">✦ ✦ ✦</div>
    <div class="title">${passed ? "Zertifikat" : "Teilnahmebescheinigung"}</div>
    <div class="subtitle">${passed ? "über erfolgreich bestandene Prüfung" : "über Prüfungsteilnahme"}</div>
    <div class="topic">Dieselmotor CD-155 / Centurion 2.0S · Cessna 172</div>
    <p class="text">Hiermit wird bestätigt, dass</p>
    <div class="name">${name}</div>
    <p class="text" style="margin-top:4mm;">den Wissenstest zum Dieselmotorbetrieb erfolgreich ${passed ? "bestanden" : "abgelegt"} hat.</p>
    <div class="score-badge">${score} von ${total} Fragen korrekt · ${percent}%</div>
    <div class="meta">Ausgestellt am ${dateStr} &nbsp;·&nbsp; Mindestpunktzahl: ${Math.round(PASS_THRESHOLD * 100)}%</div>
  </div>
</div>
</body>
</html>`;
  return html;
}

// ── UI ───────────────────────────────────────────────────────────────────────
function ProgressBar({ current, total }) {
  const pct = (current / total) * 100;
  return (
    <div style={{ marginBottom: 28 }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#7c8a99", marginBottom: 6 }}>
        <span>Frage {current} von {total}</span>
        <span>{Math.round(pct)}%</span>
      </div>
      <div style={{ background: "#e8edf2", borderRadius: 99, height: 6, overflow: "hidden" }}>
        <div style={{ width: `${pct}%`, height: "100%", background: "linear-gradient(90deg,#1d4e8f,#3b82f6)", borderRadius: 99, transition: "width 0.4s cubic-bezier(.4,0,.2,1)" }} />
      </div>
    </div>
  );
}

export default function App() {
  const [screen, setScreen] = useState("intro");
  const [name, setName] = useState("");
  const [memberId, setMemberId] = useState("");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selected, setSelected] = useState(null);
  const [confirmed, setConfirmed] = useState(false);
  const [errors, setErrors] = useState({});

  const q = QUESTIONS[current];
  const score = QUESTIONS.filter((q) => answers[q.id] === q.correct).length;
  const passed = score / QUESTIONS.length >= PASS_THRESHOLD;

  function startQuiz() {
    const e = {};
    if (!name.trim()) e.name = "Bitte gib deinen Namen ein.";
    if (!memberId.trim()) e.memberId = "Bitte gib deine Mitgliedsnummer ein.";
    if (Object.keys(e).length) return setErrors(e);
    setScreen("quiz");
  }

  function handleConfirm() {
    if (selected === null) return;
    setAnswers((prev) => ({ ...prev, [q.id]: selected }));
    setConfirmed(true);
  }

  function handleNext() {
    if (current + 1 < QUESTIONS.length) {
      setCurrent((c) => c + 1);
      setSelected(null);
      setConfirmed(false);
    } else {
      setScreen("result");
    }
  }

  function restart() {
    setScreen("intro");
    setName(""); setMemberId(""); setCurrent(0);
    setAnswers({}); setSelected(null); setConfirmed(false); setErrors({});
  }

  const NAVY = "#1d4e8f";
  const card = { background: "#fff", borderRadius: 20, boxShadow: "0 4px 40px rgba(0,0,0,0.08)", padding: "40px 44px", maxWidth: 660, width: "100%" };
  const inputStyle = (hasErr) => ({ width: "100%", padding: "12px 16px", borderRadius: 10, border: `1.5px solid ${hasErr ? "#ef4444" : "#dde3ea"}`, fontSize: 15, fontFamily: "inherit", outline: "none", background: "#fafbfc" });
  const btnPrimary = { background: `linear-gradient(135deg, ${NAVY} 0%, #3b82f6 100%)`, color: "#fff", border: "none", borderRadius: 10, padding: "14px 32px", fontSize: 15, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" };
  const optionLetters = ["A", "B", "C", "D"];

  // ── INTRO ─────────────────────────────────────────────────────────────────
  if (screen === "intro") return (
    <div style={{ minHeight: "100vh", background: `linear-gradient(135deg, #eef3fb 0%, #dbeafe 100%)`, display: "flex", alignItems: "center", justifyContent: "center", padding: 20, fontFamily: "'DM Sans','Segoe UI',sans-serif" }}>
      <div style={card}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ background: "#fff", borderRadius: 12, padding: "10px 20px", display: "inline-block", marginBottom: 16, boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}><img src={HFC_LOGO} alt="HFC Hamburg Logo" style={{ height: 64, objectFit: "contain", display: "block" }} /></div>
          <h1 style={{ fontSize: 24, fontWeight: 700, color: "#0f172a", marginBottom: 4 }}>Dieselmotor-Wissenstest</h1>
          <p style={{ color: "#64748b", fontSize: 14 }}>CD-155 / Centurion 2.0S · Cessna 172</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>Vollständiger Name</label>
            <input style={inputStyle(errors.name)} placeholder="Max Mustermann" value={name} onChange={(e) => { setName(e.target.value); setErrors((p) => ({ ...p, name: null })); }} />
            {errors.name && <p style={{ color: "#ef4444", fontSize: 12, marginTop: 4 }}>{errors.name}</p>}
          </div>
          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>Mitgliedsnummer</label>
            <input style={inputStyle(errors.memberId)} placeholder="z. B. M-12345" value={memberId} onChange={(e) => { setMemberId(e.target.value); setErrors((p) => ({ ...p, memberId: null })); }} />
            {errors.memberId && <p style={{ color: "#ef4444", fontSize: 12, marginTop: 4 }}>{errors.memberId}</p>}
          </div>
        </div>
        <div style={{ marginTop: 20, padding: "14px 16px", background: "#eff6ff", borderRadius: 10, borderLeft: `3px solid ${NAVY}`, fontSize: 13, color: "#374151", lineHeight: 1.7 }}>
          ✅ <strong>75 % Mindestpunktzahl</strong> zum Bestehen<br />
          🏆 Bei Bestehen erhalten Sie ein <strong>Zertifikat</strong><br />
          📋 <strong>24 Fragen</strong> · Kein Zeitlimit
        </div>
        <button style={{ ...btnPrimary, width: "100%", marginTop: 24 }} onClick={startQuiz}>Test starten →</button>
      </div>
    </div>
  );

  // ── QUIZ ──────────────────────────────────────────────────────────────────
  if (screen === "quiz") return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg,#eef3fb 0%,#dbeafe 100%)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20, fontFamily: "'DM Sans','Segoe UI',sans-serif" }}>
      <div style={card}>
        <ProgressBar current={current + 1} total={QUESTIONS.length} />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
          <div style={{ background: "#fff", borderRadius: 8, padding: "4px 10px", display: "inline-block" }}><img src={HFC_LOGO} alt="HFC" style={{ height: 28, objectFit: "contain", display: "block" }} /></div>
        </div>
        <div style={{ background: "#f0f4fb", borderRadius: 12, padding: "18px 20px", marginBottom: 20 }}>
          <p style={{ fontSize: 10, fontWeight: 700, color: NAVY, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 6 }}>Frage {current + 1}</p>
          <p style={{ fontSize: 16, fontWeight: 600, color: "#0f172a", lineHeight: 1.55 }}>{q.question}</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 22 }}>
          {q.options.map((opt, idx) => {
            let bg = "#fafbfc", border = "1.5px solid #dde3ea", color = "#1e293b";
            if (confirmed) {
              if (idx === q.correct) { bg = "#f0fdf4"; border = "2px solid #22c55e"; color = "#166534"; }
              else if (idx === selected && selected !== q.correct) { bg = "#fef2f2"; border = "2px solid #ef4444"; color = "#991b1b"; }
            } else if (selected === idx) { bg = "#eff6ff"; border = `2px solid ${NAVY}`; color = NAVY; }
            const badgeBg = confirmed && idx === q.correct ? "#22c55e" : confirmed && idx === selected && selected !== q.correct ? "#ef4444" : selected === idx && !confirmed ? NAVY : "#e2e8f0";
            const badgeColor = (confirmed && (idx === q.correct || (idx === selected && selected !== q.correct))) || (selected === idx && !confirmed) ? "#fff" : "#64748b";
            return (
              <div key={idx} onClick={() => !confirmed && setSelected(idx)}
                style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "12px 14px", borderRadius: 10, background: bg, border, color, cursor: confirmed ? "default" : "pointer", transition: "all 0.15s", fontWeight: selected === idx || (confirmed && idx === q.correct) ? 600 : 400 }}>
                <span style={{ width: 28, height: 28, borderRadius: 8, background: badgeBg, color: badgeColor, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, flexShrink: 0, transition: "all 0.15s" }}>
                  {confirmed && idx === q.correct ? "✓" : confirmed && idx === selected && selected !== q.correct ? "✗" : optionLetters[idx]}
                </span>
                <span style={{ fontSize: 14, lineHeight: 1.5, paddingTop: 4 }}>{opt}</span>
              </div>
            );
          })}
        </div>
        {!confirmed ? (
          <button style={{ ...btnPrimary, width: "100%", opacity: selected === null ? 0.45 : 1, cursor: selected === null ? "not-allowed" : "pointer" }} onClick={handleConfirm} disabled={selected === null}>
            Antwort bestätigen
          </button>
        ) : (
          <div>
            <div style={{ padding: "11px 14px", borderRadius: 10, background: selected === q.correct ? "#f0fdf4" : "#fef2f2", borderLeft: `3px solid ${selected === q.correct ? "#22c55e" : "#ef4444"}`, fontSize: 13, color: selected === q.correct ? "#166534" : "#991b1b", fontWeight: 500, marginBottom: 12 }}>
              {selected === q.correct ? "✅ Richtig! Gut gemacht." : `❌ Falsch. Richtige Antwort: „${q.options[q.correct]}"`}
            </div>
            <button style={{ ...btnPrimary, width: "100%" }} onClick={handleNext}>
              {current + 1 < QUESTIONS.length ? "Nächste Frage →" : "Ergebnis anzeigen"}
            </button>
          </div>
        )}
      </div>
    </div>
  );

  // ── RESULT ────────────────────────────────────────────────────────────────
  if (screen === "result") {
    const pct = Math.round((score / QUESTIONS.length) * 100);
    const certHtml = getCertificateHtml(name, memberId, score, QUESTIONS.length, passed);
    return (
      <div style={{ minHeight: "100vh", background: passed ? "linear-gradient(135deg,#f0fdf4,#d1fae5)" : "linear-gradient(135deg,#fff1f2,#ffe4e6)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20, fontFamily: "'DM Sans','Segoe UI',sans-serif" }}>
        <div style={{ ...card, maxWidth: 680, textAlign: "center" }}>
          <div style={{ fontSize: 60, marginBottom: 12 }}>{passed ? "🏆" : "📚"}</div>
          <h2 style={{ fontSize: 24, fontWeight: 700, color: passed ? "#14532d" : "#881337", marginBottom: 6 }}>
            {passed ? "Herzlichen Glückwunsch!" : "Leider nicht bestanden"}
          </h2>
          <p style={{ color: "#64748b", fontSize: 14, marginBottom: 24 }}>{name} · Nr. {memberId}</p>
          <div style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 24 }}>
            {[
              { label: "Richtig", value: score, color: "#22c55e" },
              { label: "Falsch", value: QUESTIONS.length - score, color: "#ef4444" },
              { label: "Ergebnis", value: `${pct}%`, color: passed ? NAVY : "#f59e0b" },
            ].map((s) => (
              <div key={s.label} style={{ background: "#fff", border: `2px solid ${s.color}25`, borderRadius: 14, padding: "14px 18px", minWidth: 86 }}>
                <div style={{ fontSize: 24, fontWeight: 700, color: s.color }}>{s.value}</div>
                <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>

          {passed && (
            <div style={{ marginBottom: 20 }}>
              <iframe
                srcDoc={certHtml}
                style={{ width: "100%", height: 320, border: "1.5px solid #dde3ea", borderRadius: 12, display: "block" }}
                title="Zertifikat Vorschau"
              />
              <p style={{ fontSize: 12, color: "#94a3b8", marginTop: 8 }}>
                🖨️ Klicken Sie auf „Drucken" und wählen Sie „Als PDF speichern"
              </p>
              <button
                style={{ ...btnPrimary, background: "linear-gradient(135deg,#22c55e,#16a34a)", padding: "13px 28px", marginTop: 10 }}
                onClick={() => {
                  const w = window.open("", "_blank");
                  if (w) { w.document.write(certHtml); w.document.close(); setTimeout(() => w.print(), 800); }
                }}
              >
                🖨️ Zertifikat drucken / als PDF speichern
              </button>
            </div>
          )}

          {!passed && (
            <div style={{ padding: "12px 16px", borderRadius: 10, background: "#fff1f2", border: "1.5px solid #fecdd3", fontSize: 13, color: "#881337", marginBottom: 22, lineHeight: 1.6 }}>
              Sie haben {pct}% erreicht. Zum Bestehen sind {Math.round(PASS_THRESHOLD * 100)}% erforderlich.
            </div>
          )}

          <button style={{ background: "#fff", color: "#374151", border: "1.5px solid #dde3ea", borderRadius: 10, padding: "12px", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", width: "100%" }} onClick={restart}>
            ↩ Neu starten
          </button>

          <details style={{ marginTop: 24, textAlign: "left" }}>
            <summary style={{ cursor: "pointer", fontSize: 13, color: "#64748b", fontWeight: 600 }}>Antworten überprüfen</summary>
            <div style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 7 }}>
              {QUESTIONS.map((q, i) => {
                const ok = answers[q.id] === q.correct;
                return (
                  <div key={q.id} style={{ padding: "9px 12px", borderRadius: 8, background: ok ? "#f0fdf4" : "#fef2f2", borderLeft: `3px solid ${ok ? "#22c55e" : "#ef4444"}`, fontSize: 12 }}>
                    <strong style={{ color: "#374151" }}>{i + 1}. {q.question}</strong><br />
                    <span style={{ color: ok ? "#166534" : "#991b1b" }}>{ok ? "✓" : "✗"} {q.options[answers[q.id]]}</span>
                    {!ok && <span style={{ color: "#166534", display: "block" }}>✓ Richtig: {q.options[q.correct]}</span>}
                  </div>
                );
              })}
            </div>
          </details>
        </div>
      </div>
    );
  }
  return null;
}
