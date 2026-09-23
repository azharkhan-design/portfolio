import React from 'react';

interface ProjectMockupProps {
  type: string;
  title: string;
  category: string;
  client: string;
  className?: string;
  interactive?: boolean;
  imageUrl?: string;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({
  type,
  title,
  category,
  client,
  className = '',
  interactive = false,
  imageUrl
}) => {
  return (
    <div
      className={`relative w-full aspect-[16/10] bg-surface rounded-sm border border-subtle overflow-hidden select-none transition-all duration-300 ${
        interactive ? 'group-hover:border-strong group-hover:shadow-md' : ''
      } ${className}`}
    >
      {imageUrl ? (
        <div className="w-full h-full overflow-hidden bg-surface flex items-center justify-center">
          <img
            src={imageUrl}
            alt={`${client} · ${title}`}
            className="w-full h-full object-cover object-top"
          />
        </div>
      ) : (
        <>
          {/* Mockup Window Titlebar */}
          <div className="flex items-center justify-between px-3.5 py-2 border-b border-subtle bg-badge/60 text-[11px] font-mono text-muted">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700"></span>
              <span className="ml-2 font-medium tracking-tight text-secondary text-[11px] truncate max-w-[180px] md:max-w-none">
                {client} · {title}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[9px] uppercase tracking-wider bg-surface border border-subtle">
                {category.split('/')[0].trim()}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>
          </div>

          {/* Mockup Body: High-Fidelity Vector UI based on domain */}
          <div className="p-3 sm:p-5 h-[calc(100%-33px)] overflow-hidden bg-surface flex flex-col justify-between">
            {type === 'dashboard' && <BigLanguageDashboard />}
            {type === 'portal' && (title.includes('SAAL') ? <SaalGovernmentPortal /> : <WaslPropertyPortal />)}
            {type === 'healthcare' && <CuraPatientHealthcareUI />}
            {type === 'hr' && <GulfHRPayrollUI />}
            {type === 'agritech' && <GrowersFarmAgritechUI />}
            {type === 'edtech' && <StrideLearningEdTechUI />}
            {type === 'logistics' && <MacroPlateLogisticsUI />}
            {type === 'fintech' && <BajajFintechLeadUI />}
          </div>
        </>
      )}
    </div>
  );
};

/* 01 — Big Language Solutions UI */
const BigLanguageDashboard = () => (
  <div className="h-full flex flex-col gap-3 text-xs">
    <div className="flex items-center justify-between pb-2 border-b border-subtle">
      <div className="flex items-center gap-2">
        <span className="font-semibold text-primary">LanguageNow Pro</span>
        <span className="text-[10px] px-1.5 py-0.5 bg-badge rounded border border-subtle font-mono">Workspace: Global Patent Vault</span>
      </div>
      <div className="flex gap-2">
        <span className="text-[10px] px-2 py-0.5 bg-primary text-inverse font-mono font-medium rounded-sm">5 Active Queues</span>
      </div>
    </div>

    {/* Metric Mini-Cards */}
    <div className="grid grid-cols-3 gap-2">
      <div className="p-2 bg-badge/40 rounded border border-subtle">
        <div className="text-[10px] text-muted uppercase font-mono">Translated Words</div>
        <div className="text-sm font-semibold text-primary mt-0.5">1.48M</div>
        <div className="text-[9px] text-emerald-600 dark:text-emerald-400 font-mono">↑ 14.2% this week</div>
      </div>
      <div className="p-2 bg-badge/40 rounded border border-subtle">
        <div className="text-[10px] text-muted uppercase font-mono">SLA Adherence</div>
        <div className="text-sm font-semibold text-primary mt-0.5">99.8%</div>
        <div className="text-[9px] text-muted font-mono">Target: &gt;99.0%</div>
      </div>
      <div className="p-2 bg-badge/40 rounded border border-subtle">
        <div className="text-[10px] text-muted uppercase font-mono">Active Linguists</div>
        <div className="text-sm font-semibold text-primary mt-0.5">84 Live</div>
        <div className="text-[9px] text-emerald-600 dark:text-emerald-400 font-mono">● 18 Jurisdictions</div>
      </div>
    </div>

    {/* Split Translation Workspace Preview */}
    <div className="flex-1 min-h-0 grid grid-cols-2 gap-2 bg-badge/20 p-2 rounded border border-subtle font-mono text-[10px]">
      <div className="p-2 bg-surface rounded border border-subtle overflow-hidden">
        <div className="text-[9px] text-muted uppercase mb-1 flex justify-between">
          <span>Source: EN-US (Patent Claims)</span>
          <span className="text-primary font-bold">Original</span>
        </div>
        <p className="text-secondary line-clamp-3 leading-relaxed">
          "1. A cloud-distributed neural arbitration apparatus configured to validate cryptographic multi-tenant state changes across heterogeneous..."
        </p>
      </div>
      <div className="p-2 bg-surface rounded border border-subtle overflow-hidden">
        <div className="text-[9px] text-muted uppercase mb-1 flex justify-between">
          <span>Target: DE-DE / JA-JP</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold">Validated (98.4%)</span>
        </div>
        <p className="text-secondary line-clamp-3 leading-relaxed">
          "1. Eine Cloud-verteilte neuronale Arbitrationsvorrichtung, die konfiguriert ist, kryptografische Mandantenzustandsänderungen über heterogene..."
        </p>
      </div>
    </div>
  </div>
);

/* 02 — SAAL.ai Government Intelligence Portal */
const SaalGovernmentPortal = () => (
  <div className="h-full flex flex-col gap-3 text-xs">
    <div className="flex items-center justify-between pb-2 border-b border-subtle">
      <div className="flex items-center gap-2">
        <span className="font-semibold text-primary font-display">SAAL GovCore · Cognitive Portal</span>
        <span className="text-[10px] px-1.5 py-0.5 bg-badge rounded border border-subtle font-mono">Bilingual (LTR/RTL)</span>
      </div>
      <span className="text-[10px] px-2 py-0.5 bg-neutral-900 text-white dark:bg-white dark:text-black font-mono font-medium rounded-sm">Official Permit Pipeline</span>
    </div>

    <div className="grid grid-cols-4 gap-2">
      <div className="p-2 bg-badge/40 rounded border border-subtle col-span-2">
        <div className="text-[10px] text-muted uppercase font-mono">Case Intake Velocity</div>
        <div className="text-sm font-semibold text-primary mt-0.5">14,280 Daily</div>
        <div className="text-[9px] text-emerald-600 dark:text-emerald-400 font-mono">AI OCR Pre-verified: 94.2%</div>
      </div>
      <div className="p-2 bg-badge/40 rounded border border-subtle col-span-2">
        <div className="text-[10px] text-muted uppercase font-mono">Avg Turnaround</div>
        <div className="text-sm font-semibold text-primary mt-0.5">4.2 Minutes</div>
        <div className="text-[9px] text-emerald-600 dark:text-emerald-400 font-mono">↓ 72% from legacy benchmark</div>
      </div>
    </div>

    {/* Verification queue table */}
    <div className="flex-1 min-h-0 bg-surface rounded border border-subtle overflow-hidden text-[10px] font-mono">
      <div className="grid grid-cols-4 p-1.5 bg-badge/60 text-muted uppercase font-medium border-b border-subtle">
        <span>Citizen Case</span>
        <span>Service Type</span>
        <span>AI Score</span>
        <span className="text-right">Action</span>
      </div>
      <div className="grid grid-cols-4 p-1.5 border-b border-subtle/50 items-center">
        <span className="font-semibold text-primary">#UAE-90412-DXB</span>
        <span className="text-secondary truncate">Commercial Lic.</span>
        <span className="text-emerald-600 dark:text-emerald-400 font-semibold">99.8% Match</span>
        <span className="text-right text-[9px] text-primary font-bold">Approve →</span>
      </div>
      <div className="grid grid-cols-4 p-1.5 items-center">
        <span className="font-semibold text-primary">#UAE-88194-AUH</span>
        <span className="text-secondary truncate">Residency Endorsement</span>
        <span className="text-emerald-600 dark:text-emerald-400 font-semibold">98.4% Match</span>
        <span className="text-right text-[9px] text-primary font-bold">Approve →</span>
      </div>
    </div>
  </div>
);

/* 03 — Cura Patient Healthcare / Clinical UI */
const CuraPatientHealthcareUI = () => (
  <div className="h-full flex flex-col gap-2.5 text-xs">
    <div className="flex items-center justify-between pb-2 border-b border-subtle">
      <div className="flex items-center gap-2">
        <span className="font-semibold text-primary">Cura Patient EHR · Othena</span>
        <span className="text-[10px] px-1.5 py-0.5 bg-badge rounded border border-subtle font-mono">HIPAA Encrypted</span>
      </div>
      <span className="text-[10px] px-2 py-0.5 bg-emerald-600 text-white font-mono font-medium rounded-sm">Patient Active</span>
    </div>

    {/* Patient Vitals telemetry */}
    <div className="grid grid-cols-4 gap-1.5 font-mono">
      <div className="p-1.5 bg-badge/40 rounded border border-subtle">
        <div className="text-[9px] text-muted">Heart Rate</div>
        <div className="text-xs font-bold text-primary">72 <span className="text-[8px] font-normal text-muted">bpm</span></div>
      </div>
      <div className="p-1.5 bg-badge/40 rounded border border-subtle">
        <div className="text-[9px] text-muted">Blood Pressure</div>
        <div className="text-xs font-bold text-primary">120/80</div>
      </div>
      <div className="p-1.5 bg-badge/40 rounded border border-subtle">
        <div className="text-[9px] text-muted">SpO2 Oxygen</div>
        <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400">99%</div>
      </div>
      <div className="p-1.5 bg-badge/40 rounded border border-subtle">
        <div className="text-[9px] text-muted">Temp</div>
        <div className="text-xs font-bold text-primary">98.6°F</div>
      </div>
    </div>

    {/* Clinical Notes & Tele-visit */}
    <div className="flex-1 min-h-0 grid grid-cols-2 gap-2 bg-badge/20 p-2 rounded border border-subtle">
      <div className="p-2 bg-surface rounded border border-subtle flex flex-col justify-between">
        <div>
          <div className="text-[9px] font-mono text-muted uppercase">SOAP Assessment</div>
          <div className="text-[11px] font-medium text-primary mt-1">Post-operative follow-up (Day 14)</div>
          <p className="text-[10px] text-secondary mt-0.5 line-clamp-2">Vitals stable. Surgical site healing cleanly. Tapering oral analgesics.</p>
        </div>
        <div className="text-[9px] font-mono text-emerald-600 dark:text-emerald-400">● E-Rx Refill Authorized</div>
      </div>
      <div className="p-2 bg-surface rounded border border-subtle flex flex-col justify-between">
        <div>
          <div className="text-[9px] font-mono text-muted uppercase">Telehealth Portal</div>
          <div className="text-[11px] font-medium text-primary mt-1">Next Video Consult</div>
          <p className="text-[10px] text-secondary mt-0.5">Dr. Sarah Lin, MD · 10:30 AM PST</p>
        </div>
        <div className="text-[9px] font-mono text-muted">WebRTC Encrypted Link</div>
      </div>
    </div>
  </div>
);

/* 04 — WASL Real Estate Portal */
const WaslPropertyPortal = () => (
  <div className="h-full flex flex-col gap-2.5 text-xs">
    <div className="flex items-center justify-between pb-2 border-b border-subtle">
      <div className="flex items-center gap-2">
        <span className="font-semibold text-primary font-display">WASL Asset &amp; Tenant Hub</span>
        <span className="text-[10px] px-1.5 py-0.5 bg-badge rounded border border-subtle font-mono">50,000+ Units</span>
      </div>
      <span className="text-[10px] px-2 py-0.5 bg-primary text-inverse font-mono font-medium rounded-sm">Ejari Digital Validated</span>
    </div>

    <div className="grid grid-cols-3 gap-2">
      <div className="p-2 bg-badge/40 rounded border border-subtle col-span-2">
        <div className="text-[10px] text-muted uppercase font-mono">Active Lease Contract</div>
        <div className="text-sm font-semibold text-primary mt-0.5">Wasl Tower · Unit 2404</div>
        <div className="text-[9px] text-muted font-mono">Renewal Status: Approved (Direct Debit active)</div>
      </div>
      <div className="p-2 bg-badge/40 rounded border border-subtle">
        <div className="text-[10px] text-muted uppercase font-mono">SLA Speed</div>
        <div className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">&lt;24 Hrs</div>
        <div className="text-[9px] text-muted font-mono">Maintenance</div>
      </div>
    </div>

    <div className="flex-1 min-h-0 bg-surface rounded border border-subtle p-2 font-mono text-[10px] flex flex-col justify-between">
      <div className="flex justify-between items-center pb-1 border-b border-subtle">
        <span className="text-muted">Direct Debit Schedule</span>
        <span className="text-emerald-600 dark:text-emerald-400 font-bold">4 Cheques Digitized</span>
      </div>
      <div className="grid grid-cols-4 gap-1 text-center py-1">
        <div className="p-1 bg-badge rounded border border-subtle text-[9px]">Q1: Paid ✓</div>
        <div className="p-1 bg-badge rounded border border-subtle text-[9px]">Q2: Paid ✓</div>
        <div className="p-1 bg-badge rounded border border-subtle text-[9px] font-semibold text-primary">Q3: Due Sep</div>
        <div className="p-1 bg-badge rounded border border-subtle text-[9px] text-muted">Q4: Dec</div>
      </div>
    </div>
  </div>
);

/* 05 — GulfHR HCM & Payroll UI */
const GulfHRPayrollUI = () => (
  <div className="h-full flex flex-col gap-2.5 text-xs">
    <div className="flex items-center justify-between pb-2 border-b border-subtle">
      <div className="flex items-center gap-2">
        <span className="font-semibold text-primary">GulfHR Prism · GCC Payroll</span>
        <span className="text-[10px] px-1.5 py-0.5 bg-badge rounded border border-subtle font-mono">WPS SIF Validated</span>
      </div>
      <span className="text-[10px] px-2 py-0.5 bg-emerald-600 text-white font-mono font-medium rounded-sm">100% Compliant</span>
    </div>

    <div className="grid grid-cols-3 gap-2">
      <div className="p-2 bg-badge/40 rounded border border-subtle">
        <div className="text-[10px] text-muted uppercase font-mono">Gross Disbursement</div>
        <div className="text-sm font-semibold text-primary mt-0.5">AED 4.82M</div>
        <div className="text-[9px] text-muted font-mono">1,240 Employees</div>
      </div>
      <div className="p-2 bg-badge/40 rounded border border-subtle">
        <div className="text-[10px] text-muted uppercase font-mono">EOSB / Gratuity</div>
        <div className="text-sm font-semibold text-primary mt-0.5">AED 890K</div>
        <div className="text-[9px] text-muted font-mono">Accrued to date</div>
      </div>
      <div className="p-2 bg-badge/40 rounded border border-subtle">
        <div className="text-[10px] text-muted uppercase font-mono">Audit Anomalies</div>
        <div className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">0 Flagged</div>
        <div className="text-[9px] text-emerald-600 dark:text-emerald-400 font-mono">Ready for release</div>
      </div>
    </div>

    <div className="flex-1 min-h-0 bg-surface rounded border border-subtle p-2 font-mono text-[10px] flex flex-col justify-between">
      <div className="flex justify-between items-center text-muted border-b border-subtle pb-1">
        <span>Employee Roster</span>
        <span>Dept / Role</span>
        <span>Net Salary</span>
        <span>Status</span>
      </div>
      <div className="flex justify-between items-center py-0.5">
        <span className="text-primary font-medium">Tariq Al-Mansoor</span>
        <span className="text-secondary truncate max-w-[90px]">Engineering Lead</span>
        <span className="text-primary font-bold">AED 34,500</span>
        <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Processed</span>
      </div>
    </div>
  </div>
);

/* 06 — Growers Agriculture & Farm UI */
const GrowersFarmAgritechUI = () => (
  <div className="h-full flex flex-col gap-2.5 text-xs">
    <div className="flex items-center justify-between pb-2 border-b border-subtle">
      <div className="flex items-center gap-2">
        <span className="font-semibold text-primary">Growers FieldOps · NDVI GIS</span>
        <span className="text-[10px] px-1.5 py-0.5 bg-badge rounded border border-subtle font-mono">Offline-First Engine</span>
      </div>
      <span className="text-[10px] px-2 py-0.5 bg-emerald-600 text-white font-mono font-medium rounded-sm">Sync Active</span>
    </div>

    <div className="grid grid-cols-3 gap-2 font-mono">
      <div className="p-2 bg-badge/40 rounded border border-subtle">
        <div className="text-[10px] text-muted uppercase">Field Acreage</div>
        <div className="text-sm font-semibold text-primary mt-0.5">1,420 ac</div>
        <div className="text-[9px] text-muted">Section North-4</div>
      </div>
      <div className="p-2 bg-badge/40 rounded border border-subtle">
        <div className="text-[10px] text-muted uppercase">Crop Health (NDVI)</div>
        <div className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">0.82 High</div>
        <div className="text-[9px] text-muted">Corn / Stage V6</div>
      </div>
      <div className="p-2 bg-badge/40 rounded border border-subtle">
        <div className="text-[10px] text-muted uppercase">Spray Window</div>
        <div className="text-sm font-semibold text-primary mt-0.5">Optimal</div>
        <div className="text-[9px] text-muted">Wind 4mph NW</div>
      </div>
    </div>

    <div className="flex-1 min-h-0 bg-badge/20 rounded border border-subtle p-2 flex items-center justify-between font-mono text-[10px]">
      <div>
        <div className="font-semibold text-primary">Prescription #F-902-Herbicide</div>
        <div className="text-secondary text-[9px] mt-0.5">Automated retail dispatch to Midwest Ag Supplier</div>
      </div>
      <div className="px-2 py-1 bg-primary text-inverse rounded-xs text-[9px] font-bold">
        $18,400 Rebate Applied
      </div>
    </div>
  </div>
);

/* 07 — Stride Learning EdTech UI */
const StrideLearningEdTechUI = () => (
  <div className="h-full flex flex-col gap-2.5 text-xs">
    <div className="flex items-center justify-between pb-2 border-b border-subtle">
      <div className="flex items-center gap-2">
        <span className="font-semibold text-primary">StridePulse LMS · Student Hub</span>
        <span className="text-[10px] px-1.5 py-0.5 bg-badge rounded border border-subtle font-mono">K-12 Platform</span>
      </div>
      <span className="text-[10px] px-2 py-0.5 bg-primary text-inverse font-mono font-medium rounded-sm">Today's Schedule</span>
    </div>

    <div className="grid grid-cols-3 gap-2">
      <div className="p-2 bg-badge/40 rounded border border-subtle">
        <div className="text-[10px] text-muted uppercase font-mono">Course Mastery</div>
        <div className="text-sm font-semibold text-primary mt-0.5">94%</div>
        <div className="text-[9px] text-emerald-600 dark:text-emerald-400 font-mono">AP Physics &amp; Calc</div>
      </div>
      <div className="p-2 bg-badge/40 rounded border border-subtle">
        <div className="text-[10px] text-muted uppercase font-mono">Tasks Completed</div>
        <div className="text-sm font-semibold text-primary mt-0.5">4 of 5</div>
        <div className="text-[9px] text-muted font-mono">1 pending submission</div>
      </div>
      <div className="p-2 bg-badge/40 rounded border border-subtle">
        <div className="text-[10px] text-muted uppercase font-mono">Teacher SpeedGrader</div>
        <div className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">Instant</div>
        <div className="text-[9px] text-muted font-mono">Audio Rubrics</div>
      </div>
    </div>

    <div className="flex-1 min-h-0 bg-surface rounded border border-subtle p-2 flex items-center justify-between font-mono text-[10px]">
      <div>
        <span className="font-semibold text-primary">Next Live Class: Quantum Mechanics 101</span>
        <div className="text-muted text-[9px] mt-0.5">Starting in 15 mins with Dr. Elena Vance</div>
      </div>
      <span className="px-2 py-1 bg-badge border border-subtle rounded text-[9px] text-primary font-medium">Join Classroom</span>
    </div>
  </div>
);

/* 08 — MacroPlate Food Logistics UI */
const MacroPlateLogisticsUI = () => (
  <div className="h-full flex flex-col gap-2.5 text-xs">
    <div className="flex items-center justify-between pb-2 border-b border-subtle">
      <div className="flex items-center gap-2">
        <span className="font-semibold text-primary">MacroPlate Kitchen &amp; Logistics</span>
        <span className="text-[10px] px-1.5 py-0.5 bg-badge rounded border border-subtle font-mono">45k Meals / Week</span>
      </div>
      <span className="text-[10px] px-2 py-0.5 bg-emerald-600 text-white font-mono font-medium rounded-sm">99.4% Accuracy</span>
    </div>

    <div className="grid grid-cols-3 gap-2 font-mono">
      <div className="p-2 bg-badge/40 rounded border border-subtle">
        <div className="text-[10px] text-muted uppercase">Daily Target</div>
        <div className="text-sm font-semibold text-primary mt-0.5">2,200 kcal</div>
        <div className="text-[9px] text-muted">180g P / 220g C / 65g F</div>
      </div>
      <div className="p-2 bg-badge/40 rounded border border-subtle">
        <div className="text-[10px] text-muted uppercase">Assembly Line</div>
        <div className="text-sm font-semibold text-primary mt-0.5">Batch #42</div>
        <div className="text-[9px] text-emerald-600 dark:text-emerald-400">Packaging station active</div>
      </div>
      <div className="p-2 bg-badge/40 rounded border border-subtle">
        <div className="text-[10px] text-muted uppercase">Courier Routes</div>
        <div className="text-sm font-semibold text-primary mt-0.5">18 Active</div>
        <div className="text-[9px] text-muted">SoCal Dispatch</div>
      </div>
    </div>

    <div className="flex-1 min-h-0 bg-surface rounded border border-subtle p-2 flex items-center justify-between font-mono text-[10px]">
      <div>
        <span className="font-semibold text-primary">Sous-Vide Grilled Salmon &amp; Quinoa Bowl</span>
        <div className="text-muted text-[9px]">Custom exclusion: Dairy-free, low sodium</div>
      </div>
      <span className="px-2 py-1 bg-badge border border-subtle rounded font-bold text-primary">Station 3 Ready</span>
    </div>
  </div>
);

/* 09 — Bajaj Finserv FinTech UI */
const BajajFintechLeadUI = () => (
  <div className="h-full flex flex-col gap-2.5 text-xs">
    <div className="flex items-center justify-between pb-2 border-b border-subtle">
      <div className="flex items-center gap-2">
        <span className="font-semibold text-primary">Bajaj Finserv LMS · Enterprise CRM</span>
        <span className="text-[10px] px-1.5 py-0.5 bg-badge rounded border border-subtle font-mono">18k Active Agents</span>
      </div>
      <span className="text-[10px] px-2 py-0.5 bg-primary text-inverse font-mono font-medium rounded-sm">Lead Triage Live</span>
    </div>

    <div className="grid grid-cols-3 gap-2 font-mono">
      <div className="p-2 bg-badge/40 rounded border border-subtle">
        <div className="text-[10px] text-muted uppercase">Monthly Intake</div>
        <div className="text-sm font-semibold text-primary mt-0.5">500k+ Leads</div>
        <div className="text-[9px] text-emerald-600 dark:text-emerald-400">↑ 22% Velocity</div>
      </div>
      <div className="p-2 bg-badge/40 rounded border border-subtle">
        <div className="text-[10px] text-muted uppercase">Credit Scoring</div>
        <div className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">&lt;3 Mins</div>
        <div className="text-[9px] text-muted">CIBIL API Instant</div>
      </div>
      <div className="p-2 bg-badge/40 rounded border border-subtle">
        <div className="text-[10px] text-muted uppercase">Disbursal Pipeline</div>
        <div className="text-sm font-semibold text-primary mt-0.5">₹42.5 Cr</div>
        <div className="text-[9px] text-muted">This week</div>
      </div>
    </div>

    <div className="flex-1 min-h-0 bg-surface rounded border border-subtle p-2 flex items-center justify-between font-mono text-[10px]">
      <div>
        <span className="font-semibold text-primary">Lead #BF-88219 (Pre-Approved Home Loan)</span>
        <div className="text-muted text-[9px]">CIBIL 820 · Aadhaar KYC Verified · Instant In-Principle Sanction</div>
      </div>
      <span className="px-2 py-1 bg-primary text-inverse rounded text-[9px] font-bold">Issue Sanction →</span>
    </div>
  </div>
);
