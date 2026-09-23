# Project Images & Asset Replacement Guide

This folder contains dedicated asset directories for each client project showcased in Azhar Khan's portfolio.

## Directory Structure

```
public/images/projects/
├── big-language-solutions/
│   ├── hero.png            # Main high-res dashboard / product screenshot
│   ├── screen-1.png        # LanguageNow Translation Workspace
│   ├── screen-2.png        # IPVault Patent Claim Diff
│   └── mobile.png          # InterpVault Mobile Dispatch
├── saal/
│   ├── hero.png            # SAAL GovCore Bilingual AI Intelligence Portal
│   ├── permit-queue.png    # Case Officer Verification Table
│   └── mobile.png          # Citizen Permitting App
├── cura-patient/
│   ├── hero.png            # Clinician iPad EHR SOAP Dashboard
│   ├── patient-app.png     # Patient Health Passport (iOS/Android)
│   └── vitals.png          # Telehealth Vitals Telemetry
├── wasl/
│   ├── hero.png            # WASL Dubai Tenant Service Hub
│   ├── direct-debit.png    # Digital Lease Renewal & Cheque Schedule
│   └── crm.png             # Enterprise Leasing Agent CRM
├── gulfhr/
│   ├── hero.png            # GulfHR Prism GCC Multi-Entity Payroll Command
│   ├── mobile-ess.png      # Employee Self-Service Mobile
│   └── org-chart.png       # Interactive Organizational Chart
├── growers/
│   ├── hero.png            # Growers FieldOps NDVI Satellite GIS Map
│   ├── mobile-scouting.png # Offline Field Scouting & Pin Logging
│   └── retail.png          # Ag-Retailer Input Dispatch
├── stride-learning/
│   ├── hero.png            # StridePulse Student Daily Timeline & Hub
│   ├── speedgrader.png     # Educator Rubric SpeedGrader
│   └── parent-app.png      # Parent Progress Mobile
├── macroplate/
│   ├── hero.png            # MacroPlate Cloud Kitchen & Courier Dispatch
│   ├── meal-planner.png    # Interactive Weekly Macro Meal Planner
│   └── mobile.png          # Courier Route & Delivery App
└── bajaj-finserv/
    ├── hero.png            # Bajaj Finserv Lead Management Command Center
    ├── kyc-drawer.png      # Instant CIBIL & KYC OCR Verification
    └── mobile-crm.png      # Field Sales Representative Android App
```

## How to Add Real Screenshots

1. Save your exported Figma or production screenshots (recommended resolution: `1920x1080` or `1440x900`, PNG or WebP) into the respective project directory above.
2. In `src/components/ui/ProjectMockup.tsx` or `src/data/projects.ts`, you can reference the image path directly:
   ```ts
   heroImage: '/images/projects/big-language-solutions/hero.png'
   ```
3. The portfolio will automatically render the image with responsive retina scaling while preserving the minimal editorial frame.
