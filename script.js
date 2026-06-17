const { createClient } = supabase;
const sb = createClient(
  "https://yfuhthqwlascdimarnyv.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlmdWh0aHF3bGFzY2RpbWFybnl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE3MDU4MDEsImV4cCI6MjA5NzI4MTgwMX0.R5_VoI63fLqRtffnGPjfcVzCQPiklr_63UvNrOhP90k",
);

// ═══════════════════════════════════════════════
// PLAN DATA
// ═══════════════════════════════════════════════
const PLAN = [
  {
    short: "Seg",
    name: "Segunda",
    tag: "musculo",
    tagLabel: "Musculação",
    tagClass: "tag-musculo",
    title: "Push - Peito, Ombro, Tríceps",
    sections: [
      {
        label: "Exercícios",
        items: [
          {
            name: "Supino inclinado",
            detail: "3x 6–8",
          },
          {
            name: "Voador máquina",
            detail: "3x 6–8",
          },
          {
            name: "Desenvolvimento",
            detail: "3x 6–8",
          },
          {
            name: "Elevação lateral",
            detail: "4x 8–10",
          },
          {
            name: "Tríceps corda",
            detail: "4x 6–8",
          },
        ],
      },
    ],
  },
  {
    short: "Ter",
    name: "Terça",
    tag: "corrida",
    tagLabel: "Corrida",
    tagClass: "tag-corrida",
    title: "Intervalado",
    variants: ["V1 400m", "V2 1km", "V3 Pirâmide", "V4 Ladeira"],
    sections: {
      0: [
        {
          label: "Velocidade pura - 400m",
          items: [
            {
              name: "Aquecimento",
              detail: "10–15 min trote leve + 5 min educativos",
            },
            { name: "Tiros", detail: "10x 400m - esforço 9/10" },
            { name: "Descanso", detail: "2 min parado ou caminhando" },
          ],
        },
      ],
      1: [
        {
          label: "Resistência de ritmo - 1km",
          items: [
            {
              name: "Aquecimento",
              detail: "10–15 min trote + 4 acelerações 50m",
            },
            { name: "Tiros", detail: "5x 1.000m - ritmo 5–10km, esforço 8/10" },
            { name: "Descanso", detail: "4 min trote regenerativo" },
          ],
        },
      ],
      2: [
        {
          label: "Pirâmide escalonada",
          items: [
            { name: "Aquecimento", detail: "15 min trote leve" },
            { name: "Série", detail: "400m → 800m → 1.200m → 800m → 400m" },
            {
              name: "Intensidade",
              detail: "Máx nos 400m | 5km nos 800m | 10km nos 1.200m",
            },
          ],
        },
      ],
      3: [
        {
          label: "Força em ladeira",
          items: [
            { name: "Aquecimento", detail: "15 min trote plano" },
            {
              name: "Tiros",
              detail: "8–10 rep de 150m em subida - esforço máximo",
            },
            { name: "Descanso", detail: "Descer caminhando até a base" },
          ],
        },
      ],
    },
  },
  {
    short: "Qua",
    name: "Quarta",
    tag: "musculo",
    tagLabel: "Musculação",
    tagClass: "tag-musculo",
    title: "Pull - Costas, Bíceps",
    sections: [
      {
        label: "Exercícios",
        items: [
          {
            name: "Puxada aberta",
            detail: "3x 6–8",
          },
          {
            name: "Puxada fechada",
            detail: "3x 6–8",
          },
          {
            name: "Remada curvada pronada",
            detail: "3x 6–8",
          },
          {
            name: "Remada unilateral banco",
            detail: "3x 6–8",
          },
          {
            name: "Crucifixo invertido deitado",
            detail: "3x 8–10",
          },
          {
            name: "Rosca alternada com giro",
            detail: "3x 6–8",
          },
          {
            name: "Rosca scott barra",
            detail: "3x 6–8",
          },
          {
            name: "Rosca martelo",
            detail: "3x 6–8",
          },
          {
            name: "Antebraço biset",
            detail: "Rosca pegada invertida + extensão de punho",
          },
        ],
      },
    ],
  },
  {
    short: "Qui",
    name: "Quinta",
    tag: "corrida",
    tagLabel: "Regenerativo",
    tagClass: "tag-corrida",
    title: "Corrida regenerativa",
    variants: [
      "V1 pós-400m",
      "V2 pós-1km",
      "V3 pós-pirâmide",
      "V4 pós-ladeira",
    ],
    sections: {
      0: [
        {
          label: "",
          items: [
            { name: "30 min", detail: "Trote bem lento ou caminhada ativa" },
          ],
        },
      ],
      1: [
        { label: "", items: [{ name: "20–30 min", detail: "Trote conversa" }] },
      ],
      2: [
        {
          label: "",
          items: [
            {
              name: "30 min",
              detail: "Atividade sem impacto - bike leve ou elíptico",
            },
          ],
        },
      ],
      3: [
        {
          label: "",
          items: [
            { name: "20 min", detail: "Caminhada plana ou trote muito leve" },
          ],
        },
      ],
    },
  },
  {
    short: "Sex",
    name: "Sexta",
    tag: "musculo",
    tagLabel: "Musculação",
    tagClass: "tag-musculo",
    title: "Perna - Completo",
    variants: ["V1 Unilateral", "V2 Força", "V3 Pliometria"],
    sections: {
      0: [
        {
          label: "Unilateral + Glúteos",
          items: [
            { name: "Cadeira extensora unilateral", detail: "3x 6–8" },
            { name: "Mesa flexora unilateral", detail: "3x 6–8" },
            { name: "Afundo", detail: "3x 8–10" },
            { name: "Stiff unilateral", detail: "3x 8–10" },
            { name: "Avanço subindo em caixa", detail: "3x 8–10" },
            { name: "Cadeira abdutora", detail: "2 séries" },
            { name: "Panturrilha em pé unilateral", detail: "3 séries" },
          ],
        },
      ],
      1: [
        {
          label: "Força",
          items: [
            { name: "Agachamento livre", detail: "3x 6–8" },
            { name: "Leg press unilateral", detail: "3x 6–8" },
            { name: "Cadeira extensora unilateral", detail: "3x 6–8" },
            { name: "Stiff", detail: "4x 6–8" },
            { name: "Mesa flexora unilateral", detail: "4x 6–8" },
            { name: "Cadeira adutora", detail: "3x 6–8" },
            { name: "Panturrilha sentado", detail: "3x 6–8" },
          ],
        },
      ],
      2: [
        {
          label: "Pliometria",
          items: [{ name: "Sessão de pliometria", detail: "30–40 min" }],
        },
      ],
    },
  },
  {
    short: "Sáb",
    name: "Sábado",
    tag: "descanso",
    tagLabel: "Variado",
    tagClass: "tag-descanso",
    title: "Sábado",
    variants: ["V1 Off", "V2 Bike", "V3 Braço+Ombro"],
    sections: {
      0: [
        {
          label: "",
          items: [{ name: "Descanso", detail: "Ou mobilidade + core leve" }],
        },
      ],
      1: [{ label: "", items: [{ name: "Bike leve", detail: "30–60 min" }] }],
      2: [
        {
          label: "Braço + Ombro",
          items: [
            { name: "Rosca alternada halter", detail: "3x 6–8" },
            { name: "Rosca scott barra", detail: "3x 6–8" },
            { name: "Rosca martelo", detail: "3x 6–8" },
            { name: "Elevação lateral", detail: "3x 8–10" },
            { name: "Crucifixo invertido polia", detail: "3x 8–10" },
            { name: "Antebraço", detail: "3 séries" },
          ],
        },
      ],
    },
  },
  {
    short: "Dom",
    name: "Domingo",
    tag: "corrida",
    tagLabel: "Longão",
    tagClass: "tag-corrida",
    title: "Longão",
    variants: [
      "V1 Velocidade",
      "V2 Resistência",
      "V3 Pirâmide",
      "V4 Força/Ladeira",
    ],
    sections: {
      0: [
        {
          label: "",
          items: [
            {
              name: "10–20 km",
              detail: "Foco em rodagem",
            },
          ],
        },
      ],
      1: [
        {
          label: "",
          items: [
            {
              name: "12–26 km",
              detail: "Sustentação de ritmo",
            },
          ],
        },
      ],
      2: [
        {
          label: "",
          items: [
            {
              name: "16–18 km",
              detail: "Recuperação cardiovascular",
            },
          ],
        },
      ],
      3: [
        { label: "", items: [{ name: "14–32 km", detail: "Pico de rodagem" }] },
      ],
    },
  },
];

// ═══════════════════════════════════════════════
// DATABASE
// ═══════════════════════════════════════════════
let db = { logs: [], week: 5 };

async function loadDB() {
  const [settingsRes, logsRes] = await Promise.all([
    sb.from("settings").select("current_week").eq("id", 1).single(),
    sb.from("workout_logs").select("*"),
  ]);

  if (settingsRes.error) throw settingsRes.error;
  if (logsRes.error) throw logsRes.error;

  db.week = settingsRes.data?.current_week ?? 5;
  db.logs = (logsRes.data || []).map((r) => ({
    id: r.id,
    date: r.date,
    week: r.week,
    dayIndex: r.day_index,
    variant: r.variant,
    status: r.status,
    exercises: r.exercises,
    note: r.note ?? "",
  }));
}

async function saveWeek() {
  const { error } = await sb
    .from("settings")
    .upsert({ id: 1, current_week: db.week });
  if (error) console.error("saveWeek:", error);
}

async function upsertLog(log) {
  const { error } = await sb.from("workout_logs").upsert({
    id: log.id,
    date: log.date,
    week: log.week,
    day_index: log.dayIndex,
    variant: log.variant,
    status: log.status,
    exercises: log.exercises,
    note: log.note,
  });
  if (error) console.error("upsertLog:", error);
}

async function removeLog(id) {
  const { error } = await sb.from("workout_logs").delete().eq("id", id);
  if (error) console.error("removeLog:", error);
}

// ═══════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════
let activeDay = 0;
let activeVariant = 0;
let logDraft = {};
let editingLogId = null;

// ═══════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════
function esc(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function today() {
  return new Date().toISOString().split("T")[0];
}

function fmtDate(iso) {
  if (!iso) return "";
  const [y, m, d] = iso.split("-");
  const mon = [
    "jan",
    "fev",
    "mar",
    "abr",
    "mai",
    "jun",
    "jul",
    "ago",
    "set",
    "out",
    "nov",
    "dez",
  ];
  return `${parseInt(d)} ${mon[+m - 1]} ${y}`;
}

function getSections(dayIdx, variant) {
  const d = PLAN[dayIdx];
  if (d.variants) return d.sections[variant] || [];
  return d.sections;
}

function getAllItems(dayIdx, variant) {
  return getSections(dayIdx, variant).flatMap((s) => s.items);
}

function logsForDay(dayIdx) {
  return db.logs
    .filter((l) => l.dayIndex === dayIdx)
    .sort((a, b) => b.date.localeCompare(a.date));
}

function countFilledExercises(log) {
  return (log.exercises || []).filter((e) =>
    e.sets?.some((s) => s.weight || s.reps),
  ).length;
}

// ═══════════════════════════════════════════════
// RENDER - WEEK VIEW
// ═══════════════════════════════════════════════
function renderWeek() {
  setHeader(`Treino <span class="hdr-sub">Sem. ${db.week} / 24</span>`, false);

  const weekLogs = db.logs.filter((l) => l.week === db.week);
  const dayStatus = {};
  weekLogs.forEach((l) => {
    if (l.status === "done") dayStatus[l.dayIndex] = "done";
    else if (!dayStatus[l.dayIndex]) dayStatus[l.dayIndex] = "in_progress";
  });

  const daysHtml = PLAN.map((d, i) => {
    const st = dayStatus[i];
    const cls = [
      "day-card",
      i === activeDay ? "active" : "",
      st === "done" ? "has-done" : "",
      st === "in_progress" ? "has-progress" : "",
    ]
      .filter(Boolean)
      .join(" ");
    return `
    <div class="${cls}" data-day="${i}">
      <div class="dc-short">${esc(d.short)}</div>
      <span class="dc-tag ${d.tagClass}">${esc(d.tagLabel)}</span>
      <div class="day-dot"></div>
    </div>`;
  }).join("");

  document.getElementById("content").innerHTML = `
    <div class="week-sel">
      <button class="wnav" onclick="changeWeek(-1)">‹</button>
      <div class="winfo">
        <div class="wlabel">Semana ${db.week} / 24</div>
        <span class="wbadge">${db.week < 24 ? "Em progresso" : "Última semana"}</span>
      </div>
      <button class="wnav" onclick="changeWeek(1)">›</button>
    </div>
    <div class="days">${daysHtml}</div>
    <div id="dayDetail"></div>
  `;

  document.querySelectorAll(".day-card").forEach((el) => {
    el.addEventListener("click", () => selectDay(+el.dataset.day));
  });

  renderDayDetail();
}

// ═══════════════════════════════════════════════
// RENDER - DAY DETAIL
// ═══════════════════════════════════════════════
function renderDayDetail() {
  const d = PLAN[activeDay];
  const logs = logsForDay(activeDay).slice(0, 8);

  const inProgressToday = db.logs
    .filter(
      (l) =>
        l.dayIndex === activeDay &&
        l.status === "in_progress" &&
        l.date === today(),
    )
    .sort((a, b) => b.id.localeCompare(a.id));

  const bannerHtml = inProgressToday
    .map((log) => {
      const filled = countFilledExercises(log);
      return `
      <div class="ip-banner" data-lid="${esc(log.id)}">
        <div class="ip-icon">⏱</div>
        <div class="ip-body">
          <div class="ip-title">Treino em andamento</div>
          <div class="ip-sub">${fmtDate(log.date)} · ${filled} exercício${filled !== 1 ? "s" : ""} preenchido${filled !== 1 ? "s" : ""}</div>
        </div>
        <div class="ip-cta">Continuar →</div>
      </div>`;
    })
    .join("");

  const tabsHtml = d.variants
    ? `
    <div class="vtabs">
      ${d.variants
        .map(
          (v, i) => `
        <span class="vtab${i === activeVariant ? " sel" : ""}" data-vi="${i}">${esc(v)}</span>`,
        )
        .join("")}
    </div>`
    : "";

  const sections = getSections(activeDay, activeVariant);
  const secHtml = sections
    .map(
      (s) => `
    <div>
      ${s.label ? `<div class="sec-label">${esc(s.label)}</div>` : ""}
      ${s.items
        .map(
          (it) => `
        <div class="ex-card" data-exname="${esc(it.name)}">
          <div class="ex-name">${esc(it.name)}</div>
          ${it.detail ? `<div class="ex-detail">${esc(it.detail)}</div>` : ""}
          ${it.loads?.length ? `<div class="ex-loads">${it.loads.map((l) => `<span class="load-chip">${esc(l)}</span>`).join("")}</div>` : ""}
          ${it.note ? `<span class="note-chip">✓ ${esc(it.note)}</span>` : ""}
          <div class="ex-hist-hint">Toque para ver histórico →</div>
        </div>`,
        )
        .join("")}
    </div>`,
    )
    .join("");

  const logsHtml = logs.length
    ? logs
        .map((log) => {
          const isDone = log.status === "done";
          const isIP = log.status === "in_progress";
          const statusCls = isDone ? "done" : isIP ? "in-progress" : "done";
          const statusLabel = isDone ? "✓ Concluído" : "⏱ Em andamento";
          const variantLabel =
            log.variant != null && PLAN[activeDay].variants
              ? ` · ${esc(PLAN[activeDay].variants[log.variant] || "")}`
              : "";

          const exRows = log.exercises
            .filter((e) => e.sets?.some((s) => s.weight || s.reps))
            .map((e) => {
              const sets = e.sets
                .filter((s) => s.weight || s.reps)
                .map((s) =>
                  s.weight ? `${s.weight}kg×${s.reps}` : `${s.reps} rep`,
                )
                .join(" | ");
              return `<div class="le-ex"><b>${esc(e.name)}:</b> ${esc(sets)}${e.note ? ` <span style="color:var(--text3);font-style:italic">- ${esc(e.note)}</span>` : ""}</div>`;
            })
            .join("");

          return `
      <div class="log-entry ${statusCls}">
        <div class="le-head">
          <div class="le-left">
            <span class="le-date">${fmtDate(log.date)}</span>
            <span class="le-status ${statusCls}">${statusLabel}</span>
          </div>
          <div class="le-meta">
            <span class="le-week">Sem. ${log.week}${variantLabel}</span>
            <button class="le-edit" data-lid="${esc(log.id)}" title="Editar">✎</button>
            <button class="le-del" data-lid="${esc(log.id)}" title="Excluir">×</button>
          </div>
        </div>
        ${exRows || '<div style="font-size:12px;color:var(--text3)">Nenhum exercício preenchido ainda</div>'}
        ${log.note ? `<div class="le-note">"${esc(log.note)}"</div>` : ""}
      </div>`;
        })
        .join("")
    : `<div class="empty-logs">Nenhum treino registrado ainda para ${esc(d.name)}</div>`;

  document.getElementById("dayDetail").innerHTML = `
    <div class="day-detail">
      <div class="dd-head">
        <span class="dd-title">${esc(d.title)}</span>
        <button class="dd-reg" id="btnReg">+ Novo registro</button>
      </div>
      ${bannerHtml}
      ${tabsHtml}
      <div class="sections">${secHtml}</div>
      <div class="past-logs">
        <div class="pl-title">Histórico - ${esc(d.name)}</div>
        ${logsHtml}
      </div>
    </div>`;

  document
    .getElementById("btnReg")
    .addEventListener("click", () => openLog(null));

  document.querySelectorAll(".ip-banner").forEach((el) => {
    el.addEventListener("click", () => openLog(el.dataset.lid));
  });

  document.querySelectorAll(".vtab").forEach((el) => {
    el.addEventListener("click", () => selectVariant(+el.dataset.vi));
  });

  document.querySelectorAll(".ex-card").forEach((el) => {
    el.addEventListener("click", () => showHistory(el.dataset.exname));
  });

  document.querySelectorAll(".le-edit").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      openLog(el.dataset.lid);
    });
  });

  document.querySelectorAll(".le-del").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      deleteLog(el.dataset.lid);
    });
  });
}

function selectDay(i) {
  activeDay = i;
  activeVariant = 0;
  renderWeek();
}
function selectVariant(i) {
  activeVariant = i;
  renderDayDetail();
}

function changeWeek(d) {
  db.week = Math.max(1, Math.min(24, db.week + d));
  saveWeek();
  renderWeek();
}

// ═══════════════════════════════════════════════
// LOG MODAL - OPEN
// ═══════════════════════════════════════════════
function openLog(logId) {
  const existing = logId ? db.logs.find((l) => l.id === logId) : null;
  editingLogId = existing?.id || null;

  const variant = existing?.variant ?? activeVariant;
  const planItems = getAllItems(activeDay, variant);

  logDraft = {
    status: existing?.status || "in_progress",
    note: existing?.note || "",
    exercises: planItems.map((it) => {
      const saved = existing?.exercises?.find((e) => e.name === it.name);
      return {
        name: it.name,
        planned: it.detail || "",
        sets: saved?.sets?.length
          ? JSON.parse(JSON.stringify(saved.sets))
          : [{ weight: "", reps: "" }],
        note: saved?.note || "",
      };
    }),
  };

  const d = PLAN[activeDay];
  const variantLabel = d.variants ? ` · ${d.variants[variant]}` : "";
  document.getElementById("logTitle").textContent = d.title;
  document.getElementById("logSubtitle").textContent = existing
    ? `Editando registro de ${fmtDate(existing.date)}${variantLabel}`
    : `${fmtDate(today())} · Sem. ${db.week}${variantLabel}`;

  renderLogForm();
  document.getElementById("logOverlay").style.display = "flex";
}

// ═══════════════════════════════════════════════
// LOG MODAL - RENDER FORM
// ═══════════════════════════════════════════════
function renderLogForm() {
  const scrollTop =
    document.querySelector("#logOverlay .sheet")?.scrollTop || 0;

  const exHtml = logDraft.exercises
    .map((ex, ei) => {
      const hasData = ex.sets.some((s) => s.weight || s.reps);
      return `
    <div class="lf-ex${hasData ? " has-data" : ""}">
      <div class="lf-ex-head">
        <span>${esc(ex.name)}</span>
        <span class="lf-planned">${esc(ex.planned)}</span>
      </div>
      <div class="lf-ex-body">
        <div class="sh-cols">
          <div class="sh-label">Peso (kg)</div>
          <div class="sh-label">Reps</div>
          <div></div>
        </div>
        ${ex.sets
          .map(
            (s, si) => `
          <div class="set-row" data-ei="${ei}" data-si="${si}">
            <input class="set-in" type="number" step="0.5" inputmode="decimal" placeholder="-" value="${esc(s.weight)}"
              onchange="setVal(${ei},${si},'weight',this.value)">
            <input class="set-in" type="number" inputmode="numeric" placeholder="-" value="${esc(s.reps)}"
              onchange="setVal(${ei},${si},'reps',this.value)">
            <button class="set-rm" onclick="removeSet(${ei},${si})">×</button>
          </div>`,
          )
          .join("")}
        <button class="add-set" onclick="addSet(${ei})">＋ série</button>
        <textarea class="ex-note-in" placeholder="Nota do exercício..."
          oninput="logDraft.exercises[${ei}].note=this.value">${esc(ex.note)}</textarea>
      </div>
    </div>`;
    })
    .join("");

  document.getElementById("logForm").innerHTML = `
    ${exHtml}
    <div style="margin-top:8px">
      <div class="gn-label">Observações do treino</div>
      <textarea class="gn-in" placeholder="Como foi? Algo a observar..."
        oninput="logDraft.note=this.value">${esc(logDraft.note)}</textarea>
    </div>
    <div class="save-btns">
      <button class="btn-secondary" onclick="saveLog('in_progress')">Salvar progresso</button>
      <button class="btn-primary" onclick="saveLog('done')">Finalizar treino ✓</button>
    </div>
  `;

  requestAnimationFrame(() => {
    const sheet = document.querySelector("#logOverlay .sheet");
    if (sheet) sheet.scrollTop = scrollTop;
  });
}

// ═══════════════════════════════════════════════
// LOG MODAL - SAVE
// ═══════════════════════════════════════════════
function flushInputs() {
  document.querySelectorAll(".set-row").forEach((row) => {
    const ei = +row.dataset.ei,
      si = +row.dataset.si;
    const [wIn, rIn] = row.querySelectorAll(".set-in");
    const ex = logDraft.exercises[ei];
    if (ex?.sets[si]) {
      ex.sets[si].weight = wIn?.value || "";
      ex.sets[si].reps = rIn?.value || "";
    }
  });
  document.querySelectorAll(".ex-note-in").forEach((el, ei) => {
    if (logDraft.exercises[ei]) logDraft.exercises[ei].note = el.value;
  });
  const gnEl = document.querySelector(".gn-in");
  if (gnEl) logDraft.note = gnEl.value;
}

async function saveLog(status) {
  flushInputs();

  let log;
  if (editingLogId) {
    const idx = db.logs.findIndex((l) => l.id === editingLogId);
    if (idx >= 0) {
      db.logs[idx] = {
        ...db.logs[idx],
        status,
        exercises: logDraft.exercises,
        note: logDraft.note,
      };
      log = db.logs[idx];
    }
  } else {
    log = {
      id: Date.now().toString(),
      date: today(),
      week: db.week,
      dayIndex: activeDay,
      variant: activeVariant,
      status,
      exercises: logDraft.exercises,
      note: logDraft.note,
    };
    db.logs.push(log);
  }

  await upsertLog(log);
  closeLog();
  renderWeek();
}

function setVal(ei, si, field, val) {
  if (logDraft.exercises[ei]?.sets[si]) {
    logDraft.exercises[ei].sets[si][field] = val;
  }
}

function addSet(ei) {
  flushInputs();
  logDraft.exercises[ei].sets.push({ weight: "", reps: "" });
  renderLogForm();
}

function removeSet(ei, si) {
  if (logDraft.exercises[ei].sets.length <= 1) return;
  flushInputs();
  logDraft.exercises[ei].sets.splice(si, 1);
  renderLogForm();
}

async function deleteLog(id) {
  if (!confirm("Excluir este registro?")) return;
  db.logs = db.logs.filter((l) => l.id !== id);
  await removeLog(id);
  renderWeek();
}

function closeLog() {
  document.getElementById("logOverlay").style.display = "none";
}

// ═══════════════════════════════════════════════
// HISTORY MODAL
// ═══════════════════════════════════════════════
function showHistory(exName) {
  const entries = db.logs
    .filter((l) => l.status !== "in_progress")
    .flatMap((log) =>
      log.exercises
        .filter(
          (e) => e.name === exName && e.sets?.some((s) => s.weight || s.reps),
        )
        .map((e) => ({
          date: log.date,
          week: log.week,
          sets: e.sets,
          note: e.note,
        })),
    )
    .sort((a, b) => a.date.localeCompare(b.date));

  const maxW = Math.max(
    0,
    ...entries.flatMap((e) => e.sets.map((s) => parseFloat(s.weight) || 0)),
  );

  let prevMaxW = 0;
  const rows = entries.length
    ? entries
        .map((e, idx) => {
          const curMax = Math.max(
            0,
            ...e.sets.map((s) => parseFloat(s.weight) || 0),
          );
          const isPR = curMax > 0 && curMax === maxW;
          const prog =
            idx > 0 && curMax > prevMaxW
              ? `<span class="hist-prog up">↑ ${(curMax - prevMaxW).toFixed(1)}kg</span>`
              : idx > 0
                ? `<span class="hist-prog same">-</span>`
                : "";
          prevMaxW = Math.max(prevMaxW, curMax);

          const setsStr = e.sets
            .filter((s) => s.weight || s.reps)
            .map((s) =>
              s.weight ? `${s.weight}kg×${s.reps}` : `${s.reps} rep`,
            )
            .join("<br>");

          return `<tr>
      <td>${fmtDate(e.date)}<br><span style="font-size:11px;color:var(--text3)">Sem. ${e.week}</span></td>
      <td>${setsStr}${isPR ? ' <span class="hist-pr">↑ PR</span>' : ""}${prog ? "<br>" + prog : ""}</td>
      <td style="color:var(--text3);font-size:12px">${esc(e.note || "-")}</td>
    </tr>`;
        })
        .join("")
    : `<tr><td colspan="3"><div class="hist-empty">Nenhum dado registrado ainda<br><small>Finalize um treino para ver o histórico</small></div></td></tr>`;

  document.getElementById("histContent").innerHTML = `
    <div class="hist-name">${esc(exName)}</div>
    <div class="hist-sub">Histórico de cargas · ${entries.length} sessão${entries.length !== 1 ? "ões" : ""}</div>
    <table class="hist-table">
      <thead><tr><th>Data</th><th>Séries</th><th>Nota</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>
  `;

  document.getElementById("histOverlay").style.display = "flex";
}

function closeHist() {
  document.getElementById("histOverlay").style.display = "none";
}

// ═══════════════════════════════════════════════
// SHARED UI
// ═══════════════════════════════════════════════
function setHeader(html, showBack) {
  document.getElementById("hdrTitle").innerHTML = html;
  document.getElementById("btnBack").classList.toggle("vis", !!showBack);
}

function goBack() {
  renderWeek();
}

function overlayClick(e, id) {
  if (e.target === document.getElementById(id)) {
    if (id === "logOverlay") closeLog();
    else closeHist();
  }
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeLog();
    closeHist();
  }
});

// ═══════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════
(async () => {
  document.getElementById("content").innerHTML =
    '<div style="text-align:center;padding:60px 20px;color:var(--text3);font-size:13px">Carregando...</div>';
  try {
    await loadDB();
    renderWeek();
  } catch (err) {
    document.getElementById("content").innerHTML =
      `<div style="text-align:center;padding:60px 20px;color:var(--red);font-size:13px">
        Erro ao conectar ao banco.<br><small>${esc(err.message)}</small>
      </div>`;
    console.error(err);
  }
})();
