// CDN Chart.js used in cv.html

const CV = {
  name: "Branimir Cujic",
  contact: {
    tel: "+381648223371",
    email: "cujic@icloud.com",
    location: "Ruma, Serbia",
  },
  headline:
    "System Administrator with 10+ years of experience managing Windows Server, vSphere, and Active Directory for orgs with 1000+ users.",
  roles: [
    {
      role: "Team Lead / System Administrator",
      org: "AtoS - Siemens MMSA",
      period: "2022 - 2026",
      bullets: [
        "Managed IT infrastructure for 1000+ users (Active Directory, vSphere, Windows Server).",
        "Patch management + user reporting for 100+ servers (PowerShell, Ivanti) and implemented new policies.",
        "Maintained storage/backup (NETAPP, VEEAM v11) with ~99.9% uptime for critical systems.",
        "Supported Siemens applications and audits (HR, Legal, Access Control, CCTV).",
        "Basics of monitoring tools: Nagios, Qualys, SolarWinds.",
      ],
    },
    {
      role: "IT Manager",
      org: "Production Pool D.O.O.",
      period: "2016 - 2021",
      bullets: [
        "Log ppl, equipment, events.",
        "Form a team for IT interventions in the field .",
        "Build and maintain live production machines [AVL custom use case configuration].",
        "Oversaw NAS servers + production PCs; ensured ~99.5% uptime for critical systems.",
        "Managed network administration for live events (LAN, LED walls, DMX), supporting 50+ large productions.",
        "COVID app testing [ONLINE LIVE PRODUCTION] + technical rehearsals; reduced technical issues by ~65%.",
        "Lighting + video technician; improved AV integration quality.",
      ],
    },
    {
      role: "Freelance",
      org: "Worldwide",
      period: "2007 - Present",
      bullets: [
        "IT consulting for hospitals, government, and private sector; improved system efficiency/security.",
        "Built media servers for local file distribution; reduced latency ~20%.",
        "Developed/maintained WordPress sites (AWS, PHP); increased engagement.",
        "Home lab: Linux/MacOS, bash scripting, local AI/LLMs (Ollama, ChatGPT, DeepSeek).",
      ],
    },
  ],
  education: [
    { title: "Bachelor of Computer Science", org: "Singidunum University", period: "2011 - 2015" },
    { title: "CAD Technician", org: "Technical High School", period: "2002 - 2006" },
  ],
  languages: [
    { name: "English", level: "Proficient" },
    { name: "Serbian", level: "Native" },
  ],
  courses: [
    { title: "Google week", period: "Feb 2021", place: "“In centar” - Belgrade" },
    { title: "Google SEO", period: "Mar 2021", place: "“In centar” - Belgrade" },
  ],
  skills: {
    systems: ["Windows Server 2012R2/2022", "Active Directory", "vSphere 6/7/8", "Certificates"],
    scripting: ["PowerShell (basic)", "bash (basic)"],
    storage: ["NETAPP", "VEEAM", "Synology", "TrueNAS", "QNAP"],
    webCloud: ["AWS (basic)", "WordPress", "PHP", "SDLC principles"],
    tools: ["Ivanti 2024/2025", "Proxmox/vSphere", "vMix 27/28", "Resolume Arena 6/7", "Adobe"],
    soft: ["Critical/Analytical Thinking", "Team Collaboration", "Client Relationship Management"],
  },
};

function el(tag, cls, txt) {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (txt) n.textContent = txt;
  return n;
}

function renderCV() {
  // Header
  document.getElementById("cvName").textContent = CV.name;
  document.getElementById("cvHeadline").textContent = CV.headline;

  const contact = document.getElementById("cvContact");
  contact.innerHTML = `
    <span class="mono">${CV.contact.tel}</span>
    <span class="sep">/</span>
    <span class="mono">${CV.contact.email}</span>
    <span class="sep">/</span>
    <span class="mono">${CV.contact.location}</span>
  `;

  // Timeline
  const t = document.getElementById("timeline");
  CV.roles.forEach(r => {
    const item = el("div", "t-item");
    item.appendChild(el("div", "t-role", `${r.role} // ${r.org}`));
    item.appendChild(el("div", "t-meta mono", r.period));

    const ul = el("ul", "t-bullets");
    r.bullets.forEach(b => ul.appendChild(el("li", "", b)));
    item.appendChild(ul);

    t.appendChild(item);
  });

  // Education
  const edu = document.getElementById("eduList");
  CV.education.forEach(e => {
    const c = el("div", "card");
    c.innerHTML = `<strong>${e.title}</strong><div class="muted mono">${e.org} — ${e.period}</div>`;
    edu.appendChild(c);
  });

  // Courses
  const courses = document.getElementById("courseList");
  CV.courses.forEach(c0 => {
    const c = el("div", "card");
    c.innerHTML = `<strong>${c0.title}</strong><div class="muted mono">${c0.period} — ${c0.place}</div>`;
    courses.appendChild(c);
  });

  // Languages
  const langs = document.getElementById("langList");
  CV.languages.forEach(l => {
    const c = el("div", "card");
    c.innerHTML = `<strong>${l.name}</strong><div class="muted mono">${l.level}</div>`;
    langs.appendChild(c);
  });

  renderCharts();
}

function renderCharts() {
  const ctx1 = document.getElementById("chartSkills");
  const ctx2 = document.getElementById("chartFocus");

  // simple “signal” style charts; monochrome only
  const skillBuckets = [
    ["Systems", CV.skills.systems.length],
    ["Storage", CV.skills.storage.length],
    ["Tools", CV.skills.tools.length],
    ["Web/Cloud", CV.skills.webCloud.length],
    ["Scripting", CV.skills.scripting.length],
    ["Soft", CV.skills.soft.length],
  ];

  new Chart(ctx1, {
    type: "bar",
    data: {
      labels: skillBuckets.map(x => x[0]),
      datasets: [{
        label: "Density",
        data: skillBuckets.map(x => x[1]),
        borderWidth: 1,
      }],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: { enabled: true },
      },
      scales: {
        x: { ticks: { color: "#eaeaea" }, grid: { color: "rgba(255,255,255,0.06)" } },
        y: { ticks: { color: "#eaeaea" }, grid: { color: "rgba(255,255,255,0.06)" } },
      },
    },
  });

  // “Focus” radar: admin-heavy profile
  new Chart(ctx2, {
    type: "radar",
    data: {
      labels: ["Infra", "Virtualization", "AD/Identity", "Storage/Backup", "Automation", "Events/AV"],
      datasets: [{
        label: "Profile",
        data: [9, 8, 9, 8, 6, 6],
        borderWidth: 1,
        pointRadius: 2,
      }],
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        r: {
          angleLines: { color: "rgba(255,255,255,0.10)" },
          grid: { color: "rgba(255,255,255,0.10)" },
          pointLabels: { color: "#eaeaea" },
          ticks: { display: false },
          suggestedMin: 0,
          suggestedMax: 10,
        },
      },
    },
  });
}

window.addEventListener("DOMContentLoaded", renderCV);