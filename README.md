# Mahindra Rise • NextGen Talent Card Architecture & Talent Intelligence Portal

A fully clickable, responsive, premium static prototype built in **Vanilla HTML5, Vanilla CSS3, and Vanilla JavaScript** for the **Mahindra Talent Intelligence Project** (MLP, GMC, and MALT leadership programmes).

---

## 🚀 Quick Start / How to Run

1. Simply double-click `index.html` in your file explorer, or open it in any modern browser (Chrome, Safari, Edge, Firefox).
2. Alternatively, run a lightweight local server:
   ```bash
   python3 -m http.server 8000
   ```
   and navigate to `http://localhost:8000/index.html`.

---

## 📌 Requirements Analyzed & Cross-Referenced

### 1. Excel Workbook Architecture (`Mahindra_NextGen_Talent_Card_Architecture.xlsx`)
- **`01_Logic` Sheet**:
  - **Color-Coding Source Tiering**:
    - 🟢 **Green**: Already available in the core HR Database.
    - 🟠 **Orange**: Sourced dynamically from system/API (SAP, PeopleStrong, Graph APIs).
    - 🔴 **Red**: Human input required from Employee/Manager, strictly verified via BHR workflow.
  - **BHR Immutability & Audit Rule**: Every changed/new value must be BHR-verified before updating live profiles.
  - **Dynamic Persona Rules**: `Yes` (Mandatory/Counted in live completeness %), `Optional` (Visible, does not reduce score), `No` (Completely hidden).
  - **Persistent Request / Help (h) Icon**: Live counter with issue routing to Business HR & IT.
  - **Draft Save vs Submit**: Save & Continue stages drafts locally; Final Submit routes into BHR review queue.

- **`02_Base` Sheet (180 Rows / 146 Governed Fields)**:
  - Complete 15-Bucket structure faithfully implemented:
    1. **Status Governance**: Active, Resigned, Exited, Separation Reason & Date.
    2. **Personal Details**: Photo, Full Name, Emp ID, DOB, Official Email.
    3. **Programme & Current Mahindra Details**: Programme (MLP/GMC/MALT), Batch, Business Unit, Sector, Grade, Function, Base Location, Reporting Manager.
    4. **Education Details**: PG, UG, Class XII, Institute Tiering, Honors, Capstone Highlights.
    5. **Professional Certifications**: Issuing Body, Validity, Credential ID.
    6. **Prior External Work Experience**: Organization, Duration, Role, Critical Project with SMART/STAR Evidence.
    7. **Mahindra Summer Internship (SIP)**: Future Shaper Mentor, Deliverables, Quantifiable ROI.
    8. **Mahindra Full-Time Work Experience & Stint Journey**: Rotational Stints 1, 2, 3, Duration, Managers, Stint Milestones, Verified Business Impact.
    9. **Learning Needs (IDP)**: Functional & Behavioural CAB Needs.
    10. **Learning Interventions & Action Tracking**: Programs, Certifications, Action Taken, Business Outcome.
    11. **Performance History**: Multi-year ratings, CAB scale, 9-Box position.
    12. **Strengths & Areas of Opportunity**: Evidence-based SWOT (Context → Action → Result).
    13. **Recognition & Awards**: Individual vs Team, Internal vs External, Year, Role.
    14. **Career Aspirations & Preferences**: Preferred Domains, Functions, Mobility Openness (Open/Conditional/Not Open), Preferred Locations, Short & Long Term Goals.
    15. **Career Readiness & Succession**: Slated Next Roles (up to 3), Horizon (0–1y, 1–3y, 3–5y), Verified Evidence.
    16. **Profile Governance**: Last Updated, Verifier, Next Trigger Event (End of Stint, Role Change, Annual Review) & Live Completeness %.

### 2. Teams Discussion Transcript (`Talent Intelligence Project - Data Fields.docx`)
- **Key Leadership Guidance (Urvashi, Kamalkishore Purohit, Vijay Harde, Varun)**:
  - **Cohort Personas**: Distinguish clearly between **MLP 2027** (pre-join campus, high emphasis on 10th/12th/UG/PG/SIP), **MLP 2026** (active rotational stints), **MLP 2024–25** (completed rotations, full-time role), **GMC 2019–23** (older cadre, multi-sector moves), and **MALT** (senior lateral hires with extensive prior industry pedigree).
  - **Confidentiality & Role Views**: Strengths/Gaps and Manager 9-Box assessments are confidential for Managers, BHR, and Leadership.
  - **Future Shaper Mentors**: Track dedicated executive mentors assigned during SIP.
  - **STAR & SMART Evidence**: Require quantifiable context, action, and outcomes in prior projects and stints.
  - **Graph API Ingestion**: Accommodate both automated Graph API ingestion from SAP/group companies and manual BHR-verified workflows.
  - **Executive One-Page PDF Export**: One-click summary sheet for leadership review meetings and promotions.

---

## 🌟 Application Architecture & Pages Created

| Page | File | Purpose & Key Features |
| :--- | :--- | :--- |
| **Portal Entry / Login** | [`index.html`](file:///Users/user/Desktop/My%20Projects/AI/Tenant%20Cart/index.html) | Single Sign-On simulation, Mahindra Rise branding hero, and **1-Click Interactive Role & Persona Presets**. |
| **Executive Dashboard** | [`pages/dashboard.html`](file:///Users/user/Desktop/My%20Projects/AI/Tenant%20Cart/pages/dashboard.html) | High-Potential KPI Cards, **Interactive 9-Box Matrix**, Cohort Breakdown by Persona, and Urgent BHR Queue. |
| **Talent Directory** | [`pages/talent-directory.html`](file:///Users/user/Desktop/My%20Projects/AI/Tenant%20Cart/pages/talent-directory.html) | Live search, multi-filter by Programme/Sector/Persona/Readiness, Table View & Card View toggle, Pagination. |
| **NextGen Talent Card** | [`pages/talent-card.html`](file:///Users/user/Desktop/My%20Projects/AI/Tenant%20Cart/pages/talent-card.html) | **Flagship Page**: Interactive Persona Switcher Engine (MLP 2027, MLP 2026, MLP 2024-25, GMC, MALT), Live Completeness Gauge, 15 Governed Buckets, `(i)` Tooltips, persistent `(h)` Help Desk, and BHR Submit. |
| **Create / Edit Profile** | [`pages/talent-edit.html`](file:///Users/user/Desktop/My%20Projects/AI/Tenant%20Cart/pages/talent-edit.html) | 5-Step Guided Wizard, STAR Impact Helpers, validations, and local draft staging. |
| **BHR Verification Queue** | [`pages/bhr-approvals.html`](file:///Users/user/Desktop/My%20Projects/AI/Tenant%20Cart/pages/bhr-approvals.html) | BHR Audit Center, side-by-side Old vs New Value Diffs, Interactive Approve/Reject Modals, and Batch Verification. |
| **Strategic Analytics** | [`pages/talent-analytics.html`](file:///Users/user/Desktop/My%20Projects/AI/Tenant%20Cart/pages/talent-analytics.html) | 9-Box Matrix Drill-down, Cross-Sector Mobility Transfers (Auto ↔ Farm ↔ TechM ↔ MMFSL), and Succession Slates. |
| **Masters & Architecture** | [`pages/masters-admin.html`](file:///Users/user/Desktop/My%20Projects/AI/Tenant%20Cart/pages/masters-admin.html) | Master Catalogs (Sectors, Programmes, CAB Themes, Role Families), Graph API status, and Add Master Modal. |
| **Help & Query Desk** | [`pages/help-requests.html`](file:///Users/user/Desktop/My%20Projects/AI/Tenant%20Cart/pages/help-requests.html) | Persistent Help Desk ticket management, SLA tracking, and resolution actions. |
| **Executive One-Pager** | [`pages/talent-onepager.html`](file:///Users/user/Desktop/My%20Projects/AI/Tenant%20Cart/pages/talent-onepager.html) | Executive One-Page Printable / PDF Talent Card for leadership reviews. |

---

## 🎨 Design System & Visual Identity

- **Mahindra Color Palette**:
  - **Rising Red**: `#E31837` (CTAs, primary highlights, active badges, progress indicators)
  - **Ink Black**: `#231F20` (Headings, primary typography, dark glass surfaces)
  - **Steel Grey**: `#4D4D4F` & `#707073` (Secondary metadata, icons, labels)
  - **Light Grey & Slate**: `#C6C7C8` & `#F8F9FB` (Borders, card dividers, page background)
  - **Pure White**: `#FFFFFF` (Card surfaces, clean contrast)
- **Glossy UI Theme**:
  - Layered glossy cards with subtle glass reflections and red accent headers.
  - Interactive hover transitions, smooth pill selectors, and responsive mobile drawers.
  - Zero placeholder graphics: High-tech generated Mahindra automotive & mobility visual assets in `assets/images/`.

---

## 👥 Supported Roles & Interactive Demonstration

Use the persistent **Active Role Switcher** in the top header or the presets on `index.html`:
1. **Business HR (BHR Lead - Megha Patil)**: Full governance oversight, review pending diff queues, approve/reject changes, manage refresh triggers.
2. **Employee (Talent Candidate - Aditi Deshmukh / Rohan Mehta)**: View own Talent Card, log help/correction requests via `(h)` button, update draft sections.
3. **Reporting Manager (Suresh Raman)**: Evaluate stint performance, submit evidence-based strengths/gaps, and assess career readiness horizons (0–1y, 1–3y).
4. **Group HR / Executive Board (Delnaz, Sakshi, Anand Mahindra)**: High-level 9-box talent matrix, cross-sector mobility flows, succession slates, and one-click PDF exports.

---

## 📁 Project Directory Structure

```text
├── index.html                   # SSO Portal Entry & Role Presets
├── README.md                    # Comprehensive Documentation
├── css/
│   ├── variables.css            # Mahindra Design Tokens & Colors
│   ├── global.css               # Typography, Reset, Utilities & Animations
│   ├── layout.css               # Sidebar, Sticky Header, App Shell
│   ├── components.css           # Glossy Cards, Badges, 9-Box, Modals, Tooltips
│   └── responsive.css           # Desktop, Tablet, Mobile & Print Styles
├── js/
│   ├── mock-data.js             # 15-Bucket Datasets & LocalStorage Sync
│   ├── app.js                   # Layout, Help Modal, Tooltips, Toasts, Drawer
│   ├── talent-card.js           # Dynamic Persona Filter & Completeness Engine
│   ├── bhr-approvals.js         # Diff Review & Verification Workflow
│   └── talent-analytics.js      # Interactive 9-Box Matrix & Mobility
├── pages/
│   ├── dashboard.html           # Executive Talent Command Center
│   ├── talent-directory.html    # Search & Filterable Cadre Directory
│   ├── talent-card.html         # Flagship Interactive Talent Card
│   ├── talent-edit.html         # Profile Builder & Multi-Step Wizard
│   ├── bhr-approvals.html       # BHR Audit & Verification Center
│   ├── talent-analytics.html    # Strategic 9-Box & Succession Intelligence
│   ├── masters-admin.html       # Masters Configuration & API Status
│   ├── help-requests.html       # Persistent Help Desk & Ticket SLA
│   └── talent-onepager.html     # Printable Executive One-Pager (PDF)
└── assets/
    └── images/
        ├── login-hero.jpg       # High-tech Mahindra Rise AI Network Visual
        └── banner-bg.jpg        # Glossy Carbon Red Header Banner
```

---

*Mahindra NextGen Talent Card Architecture • Built with Vanilla HTML5, CSS3 & JavaScript.*
