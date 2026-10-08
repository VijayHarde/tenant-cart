/**
 * Mahindra NextGen Talent Card Architecture & Talent Intelligence Mock Data
 * Derived directly from Mahindra_NextGen_Talent_Card_Architecture.xlsx (01_Logic & 02_Base)
 * and Talent Intelligence Project Discussion Transcripts
 */

const MAHINDRA_DATA = {
  // Current active logged in user & role simulation
  currentUser: {
    name: "Megha Patil",
    role: "BHR", // Options: "Employee", "Manager", "BHR", "GroupHR"
    empId: "M1004821",
    email: "patil.megha@mahindra.com",
    sector: "Auto & Farm Sector",
    designation: "Lead - Business HR & Talent Architecture"
  },

  // Personas Definition & Core Field Counts from Excel Row 179-180
  personas: {
    "MLP 2027": {
      id: "MLP 2027",
      name: "MLP 2027 (Pre-Join / Campus)",
      stage: "Pre-join / campus; Mahindra exposure mainly through SIP",
      emphasis: "Personal + education + Class XII + campus evidence + SIP + prior work if any",
      visibleFields: 91,
      coreFields: 70,
      badgeClass: "badge-persona-mlp27"
    },
    "MLP 2026": {
      id: "MLP 2026",
      name: "MLP 2026 (Rotational Stints)",
      stage: "Rotational / stint journey inside Mahindra",
      emphasis: "Stints, learning needs, interventions, project impact, early career preferences/readiness",
      visibleFields: 142,
      coreFields: 73,
      badgeClass: "badge-persona-mlp26"
    },
    "MLP 2024–25": {
      id: "MLP 2024–25",
      name: "MLP 2024–25 (Full-Time Deployment)",
      stage: "Completed rotations; now in full-time role",
      emphasis: "Mahindra role history, impact, performance, learning journey, readiness",
      visibleFields: 117,
      coreFields: 103,
      badgeClass: "badge-persona-mlp2425"
    },
    "GMC 2019–23": {
      id: "GMC 2019–23",
      name: "GMC 2019–23 (Cadre / Multi-Year)",
      stage: "Older programme cohorts; multiple years in system",
      emphasis: "Multiple Mahindra roles, impact, performance, development, readiness",
      visibleFields: 117,
      coreFields: 94,
      badgeClass: "badge-persona-gmc"
    },
    "MALT": {
      id: "MALT",
      name: "MALT (Accelerated Leadership Track)",
      stage: "Experienced / senior talent; external experience & sector rotations",
      emphasis: "Top prior companies/projects, Mahindra journey, performance, recognition, readiness",
      visibleFields: 117,
      coreFields: 94,
      badgeClass: "badge-persona-malt"
    }
  },

  // Talent Records
  talents: [
    {
      id: "EMP-109281",
      persona: "MLP 2026",
      status: "Active",
      separationDate: "",
      separationReason: "",
      personal: {
        photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80",
        fullName: "Aditi Deshmukh",
        empId: "10928145",
        dob: "1999-07-15",
        email: "aditi.deshmukh@mahindra.com",
        phone: "+91 98201 44521"
      },
      programme: {
        name: "MLP",
        batch: "MLP 2026",
        intakeSource: "Campus MBA (IIM Kozhikode)",
        currentBusiness: "Auto - Electric Vehicles (BEV)",
        currentSector: "Automotive & Farm",
        currentGrade: "M4",
        currentRole: "Stint 2: Lead - EV Charging Infra & Channel Expansion",
        currentFunction: "Sales & Marketing",
        currentLocation: "Mumbai (Mahindra Towers, Worli)",
        reportingManager: "Suresh Raman (VP - EV Strategy)",
        matrixManager: "Kavita Reddy (Head - Mobility Alliances)",
        journeyStage: "Stint 2 of 3"
      },
      education: {
        pg: {
          degree: "MBA",
          institute: "IIM Kozhikode",
          specialization: "Marketing & Strategy",
          startYear: "2024",
          endYear: "2026",
          scoreType: "CGPA",
          scoreValue: "3.72 / 4.0",
          honors: "Dean's Merit List, Winner Mahindra Rise Challenge",
          keyHighlight: "Led National Case Competition on EV Grid Integration; Published whitepaper on Battery Swapping economics"
        },
        ug: {
          degree: "B.Tech",
          institute: "VJTI Mumbai",
          specialization: "Electrical & Electronics Engineering",
          startYear: "2017",
          endYear: "2021",
          scoreType: "Percentage",
          scoreValue: "88.4%",
          honors: "First Class with Distinction",
          keyHighlight: "Developed smart BMS prototype for collegiate electric formula racing car (Formula Student India - Rank 2)"
        },
        class12: {
          board: "CBSE",
          school: "Delhi Public School, R.K. Puram",
          completionYear: "2017",
          stream: "Science (PCMC)",
          percentage: "95.6%"
        }
      },
      certifications: [
        { name: "Scrum Alliance Certified Product Owner (CSPO)", org: "Scrum Alliance", year: "2025", validity: "2027", credentialId: "CSPO-992144" },
        { name: "Executive EV Battery Technology & Power Train Systems", org: "IIT Madras / Center for Battery Eng.", year: "2024", validity: "Lifetime", credentialId: "IITM-EV-2024-81" }
      ],
      priorWork: [
        {
          company: "Tata Motors Ltd",
          title: "Senior Engineer - Power Electronics",
          duration: "24 months (Jul 2021 - Jun 2023)",
          function: "R&D / Powertrain",
          location: "Pune",
          criticalProject: "DC-Fast Charger Interoperability Validation",
          projectImpact: "Led firmware validation across 14 third-party CPO networks, reducing charge error disconnections by 34% across 8,000 public chargers nationwide."
        }
      ],
      sip: {
        sector: "Auto & Farm",
        businessUnit: "Mahindra Farm Equipment (FES)",
        function: "Digital Business & Agritech",
        sipMentor: "Anand Sundaresan (Future Shaper / Chief Technology Officer - FES)",
        duration: "8 Weeks (Apr 2025 - Jun 2025)",
        projectTitle: "Krish-e Smart Farm Implements As-a-Service Monetization",
        deliverables: "Designed telemetry subscription model for tractor implements; piloted in Nashik & Kolhapur across 140 farmers.",
        quantifiableImpact: "Achieved 18% trial-to-paid conversion in 60 days, validating ₹4.2 Cr annual recurring revenue stream model."
      },
      stints: [
        {
          stintNumber: "Stint 1",
          sector: "Auto & Farm",
          businessUnit: "Mahindra Auto - SUV Division",
          role: "Program Manager - Thar Roxx Launch Readiness",
          function: "Operations & Supply Chain Strategy",
          duration: "6 Months (Apr 2026 - Sep 2026)",
          reportingManager: "Vikram Singhania (Head of Manufacturing Excellence)",
          stintMilestones: "Debottlenecked body shop line throughput; resolved 4 vendor critical component bottlenecks.",
          keyImpact: "Improved assembly line cycle time by 4.2 seconds, unlocking 450 additional units/month output without capex."
        },
        {
          stintNumber: "Stint 2 (Current)",
          sector: "Auto & Farm",
          businessUnit: "Mahindra Electric Auto Ltd (MEAL)",
          role: "Lead - EV Charging Infra & Channel Expansion",
          function: "Sales & Marketing",
          duration: "6 Months (Oct 2026 - Present)",
          reportingManager: "Suresh Raman (VP - EV Strategy)",
          stintMilestones: "Rollout of 200 flagship EV destination fast hubs across top 10 metros in partnership with Jio-BP.",
          keyImpact: "Achieved 82% charger uptime and increased highway charging corridor visibility for BE.05 launch."
        }
      ],
      learningNeeds: {
        functional: "Strategic P&L Management & Pricing in High Volatility Commodity Cycles; Advanced Commercial Deal Structuring",
        behaviouralCAB: "Influencing without Authority in Matrix Governance; Executive Boardroom Storytelling with Data"
      },
      interventions: [
        {
          title: "Mahindra Emerging Leader Catalyst (MELC)",
          type: "Internal Cadre Program",
          status: "Completed",
          actionTaken: "Attended 5-day residential leadership immersion at Mahindra Learning Center (MLC Nashik).",
          impactOutcome: "Implemented structured agile sprint retrospectives in Stint 2 team, improving cross-functional turn-around by 25%."
        },
        {
          title: "Advanced Deal Structuring & Financial Modeling",
          type: "Executive Certification",
          status: "In Progress",
          actionTaken: "Enrolled in Wharton Online Executive Course sponsored by BHR.",
          impactOutcome: "Applied discounted cash flow sensitivity models to current EV CPO co-investment joint ventures."
        }
      ],
      performance: {
        history: [
          { year: "FY26 Mid-Year Stint 1 Review", rating: "4.5 / 5.0", cabRating: "Role Model", scale: "1 to 5 Scale" }
        ],
        nineBoxPosition: "High Potential / High Performance (Star Talent)"
      },
      strengthsAndGaps: {
        strengths: [
          { theme: "Customer Centricity & Market Insight", evidence: "Led deep dive interviews with 45 fleet operators to redesign the commercial EV telematics package, leading to 1,200 pre-orders." },
          { theme: "Execution Rigor & Agile Problem Solving", evidence: "Independently managed supply chain ramp-up during Thar Roxx line setup under extreme component supply pressure." }
        ],
        gaps: [
          { theme: "Senior Stakeholder Negotiation", gapEvidence: "Needs structured exposure in negotiating large multi-crore procurement & revenue share contracts with external corporate consortiums." }
        ]
      },
      recognition: [
        {
          name: "Mahindra Rise Innovation Spark Award",
          type: "Individual",
          source: "Internal",
          org: "Mahindra & Mahindra Ltd",
          year: "2026",
          role: "Lead",
          evidence: "Recognized for developing the predictive charging queue allocation algorithm piloted during Stint 2."
        }
      ],
      aspirations: {
        preferredDomains: ["Electric Mobility", "Commercial Strategy", "CleanTech Energy"],
        preferredFunctions: ["P&L Business Management", "Product Strategy", "Regional Sales Leadership"],
        crossSectorOpenness: "Open",
        mobilityPreference: "Conditional",
        preferredLocations: ["Mumbai", "Pune", "Bengaluru"],
        additionalExposure: ["Cross-functional Strategic Project", "International Market Immersion", "Boardroom Exposure"],
        shortTermRole: "Regional Sales Manager / EV Brand Product Head (1–3 years)",
        longTermDirection: "Business Head / Sector P&L Leadership"
      },
      readiness: {
        possibleNextRoles: [
          { role: "Regional Sales Manager - Auto (West Region)", horizon: "1–3 years", evidence: "Demonstrated commercial acumen in Stint 2 CPO partnership and Thar Roxx launch operations; strong analytical rigor." },
          { role: "Product Strategy Manager - Electric SUV Portfolio", horizon: "0–1 year", evidence: "Deep technical & marketing knowledge of battery EV architecture with direct mentor endorsement." }
        ]
      },
      governance: {
        lastUpdated: "2026-09-19",
        lastVerifiedBy: "Megha Patil (BHR Lead)",
        nextTriggerEvent: "End of current stint (Stint 2 Review)",
        nextTriggerDate: "2027-03-31",
        completenessScore: 94,
        openRequestsCount: 1,
        verificationStatus: "Verified"
      }
    },

    {
      id: "EMP-109355",
      persona: "MLP 2027",
      status: "Active",
      separationDate: "",
      separationReason: "",
      personal: {
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80",
        fullName: "Rohan Mehta",
        empId: "10935512",
        dob: "2001-04-18",
        email: "mehta.rohan@mahindra.com",
        phone: "+91 99304 88124"
      },
      programme: {
        name: "MLP",
        batch: "MLP 2027",
        intakeSource: "Campus MBA (IIM Ahmedabad)",
        currentBusiness: "Pre-Join / Mahindra Farm Equipment",
        currentSector: "Automotive & Farm",
        currentGrade: "Pre-Join Cadre",
        currentRole: "Management Trainee (Joining April 2027)",
        currentFunction: "Operations & Digital Supply Chain",
        currentLocation: "Ahmedabad / Campus",
        reportingManager: "Campus Talent Lead (Group HR)",
        matrixManager: "Purohit Kamalkishore (Talent Lead)",
        journeyStage: "Pre-Join / Second Year MBA"
      },
      education: {
        pg: {
          degree: "MBA",
          institute: "IIM Ahmedabad",
          specialization: "Operations & Supply Chain Management",
          startYear: "2025",
          endYear: "2027",
          scoreType: "CGPA",
          scoreValue: "3.85 / 4.0",
          honors: "Institute Rank 5, Tata Scholar",
          keyHighlight: "Authored case study on semiconductor buffer stocking strategies in automotive OEMs."
        },
        ug: {
          degree: "B.Tech",
          institute: "IIT Bombay",
          specialization: "Mechanical Engineering",
          startYear: "2019",
          endYear: "2023",
          scoreType: "CGPA",
          scoreValue: "9.12 / 10.0",
          honors: "Institute Silver Medal",
          keyHighlight: "Published IEEE paper on autonomous robotic path planning in manufacturing lines."
        },
        class12: {
          board: "CBSE",
          school: "The Mother's International School, New Delhi",
          completionYear: "2019",
          stream: "Science (PCMC)",
          percentage: "97.4%"
        }
      },
      certifications: [
        { name: "APICS Certified Supply Chain Professional (CSCP)", org: "ASCM", year: "2025", validity: "2028", credentialId: "CSCP-10298" }
      ],
      priorWork: [
        {
          company: "ITC Ltd",
          title: "Assistant Manager - Operations",
          duration: "20 months (Jul 2023 - Feb 2025)",
          function: "Supply Chain & Factory Logistics",
          location: "Bengaluru",
          criticalProject: "Automated Warehousing Integration",
          projectImpact: "Led installation of automated guided vehicle (AGV) system in central FMCG distribution center, saving ₹1.8 Cr annually."
        }
      ],
      sip: {
        sector: "Auto & Farm",
        businessUnit: "Mahindra Tractors (Farm Division)",
        function: "Digital Manufacturing & Industry 4.0",
        sipMentor: "Rajeshwar Rao (Senior VP - Farm Manufacturing Excellence)",
        duration: "8 Weeks (Apr 2026 - Jun 2026)",
        projectTitle: "AI Vision Inspection for Tractor Transmission Assemblies",
        deliverables: "Implemented machine-vision defect detection proof of concept on Zaheerabad tractor assembly line.",
        quantifiableImpact: "Reduced manual end-of-line inspection time from 8 mins to 45 secs with 99.4% defect recall, selected for all-plant rollout."
      },
      stints: [],
      learningNeeds: {
        functional: "Cross-border Logistics & Free Trade Agreement Customs Optimization",
        behaviouralCAB: "Influencing unionized shopfloor supervisors"
      },
      interventions: [],
      performance: {
        history: [],
        nineBoxPosition: "High Potential (Pre-Join Talent)"
      },
      strengthsAndGaps: {
        strengths: [],
        gaps: []
      },
      recognition: [
        {
          name: "Best Summer Internship Project (National Winner)",
          type: "Individual",
          source: "Internal",
          org: "Mahindra Group HR",
          year: "2026",
          role: "Lead",
          evidence: "Selected as Top 1 SIP across 80 interns nationwide for Zaheerabad AI inspection innovation."
        }
      ],
      aspirations: {
        preferredDomains: ["Manufacturing & Robotics", "Global Supply Chain", "AgTech Implements"],
        preferredFunctions: ["Plant Operations", "Strategic Sourcing", "Operations Digital Transformation"],
        crossSectorOpenness: "Open",
        mobilityPreference: "Open",
        preferredLocations: ["Mumbai", "Pune", "Hyderabad", "Zaheerabad"],
        additionalExposure: ["Cross-sector Exposure", "Visit New Facility"],
        shortTermRole: "Operations Lead / Plant Manager Stint",
        longTermDirection: "Chief Operating Officer / Manufacturing Head"
      },
      readiness: {
        possibleNextRoles: [
          { role: "Stint 1: Plant Operations & Supply Chain", horizon: "0–1 year", evidence: "Exceptional SIP performance in Zaheerabad plant and prior 20 months manufacturing experience at ITC." }
        ]
      },
      governance: {
        lastUpdated: "2026-09-28",
        lastVerifiedBy: "Megha Patil (BHR Lead)",
        nextTriggerEvent: "Campus Onboarding & Stint 1 Allocation",
        nextTriggerDate: "2027-04-15",
        completenessScore: 88,
        openRequestsCount: 0,
        verificationStatus: "Verified"
      }
    },

    {
      id: "EMP-108842",
      persona: "MLP 2024–25",
      status: "Active",
      separationDate: "",
      separationReason: "",
      personal: {
        photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80",
        fullName: "Ananya Sen",
        empId: "10884210",
        dob: "1997-11-20",
        email: "sen.ananya@mahindra.com",
        phone: "+91 97112 09843"
      },
      programme: {
        name: "MLP",
        batch: "MLP 2024–25",
        intakeSource: "Campus MBA (XLRI Jamshedpur)",
        currentBusiness: "Tech Mahindra / Mobility Solutions",
        currentSector: "IT & Services",
        currentGrade: "M3",
        currentRole: "Product Manager - Connected Vehicle Cloud Platforms",
        currentFunction: "Product Management & Technology",
        currentLocation: "Bengaluru (Tech Mahindra Campus)",
        reportingManager: "Karthik Narayanan (Senior Director - Mobility Platforms)",
        matrixManager: "Deepak Sharma (Global Delivery Head)",
        journeyStage: "Full-Time Role Post Rotations"
      },
      education: {
        pg: {
          degree: "MBA",
          institute: "XLRI Jamshedpur",
          specialization: "Business Management & IT Strategy",
          startYear: "2022",
          endYear: "2024",
          scoreType: "CGPA",
          scoreValue: "3.68 / 4.0",
          honors: "Top 10% of Cohort",
          keyHighlight: "Led XLRI Consulting Conclave 2023; authored paper on Cloud Sovereignty for Autonomous Fleets"
        },
        ug: {
          degree: "B.Tech",
          institute: "BIT Mesra",
          specialization: "Computer Science & Engineering",
          startYear: "2015",
          endYear: "2019",
          scoreType: "CGPA",
          scoreValue: "8.9 / 10.0",
          honors: "First Class with Distinction",
          keyHighlight: "Built cloud middleware for IoT telematics data pipelines."
        },
        class12: {
          board: "ICSE / ISC",
          school: "La Martiniere for Girls, Kolkata",
          completionYear: "2015",
          stream: "Science (Computers)",
          percentage: "96.2%"
        }
      },
      certifications: [
        { name: "AWS Certified Solutions Architect - Professional", org: "Amazon Web Services", year: "2025", validity: "2028", credentialId: "AWS-PSA-99018" },
        { name: "Pragmatic Institute Certified Product Leader", org: "Pragmatic Institute", year: "2024", validity: "Lifetime", credentialId: "PI-PMC-4482" }
      ],
      priorWork: [
        {
          company: "Microsoft India",
          title: "Software Engineer II - Azure IoT",
          duration: "34 months (Jul 2019 - Apr 2022)",
          function: "Software Engineering",
          location: "Hyderabad",
          criticalProject: "Azure Edge Gateway Optimization",
          projectImpact: "Optimized telemetry payload compression algorithm reducing cloud ingress costs by 22% for enterprise automotive clients."
        }
      ],
      sip: {
        sector: "IT & Services",
        businessUnit: "Tech Mahindra",
        function: "Digital Transformation",
        sipMentor: "CP Gurnani Mentorship Fellow",
        duration: "8 Weeks (Apr 2023 - Jun 2023)",
        projectTitle: "Connected Vehicle Over-The-Air (OTA) Pipeline",
        deliverables: "Designed cybersecurity verification framework for Tier-1 automotive software updates.",
        quantifiableImpact: "Directly deployed in 2 European OEM pilot bids, winning a $12M contract."
      },
      stints: [
        {
          stintNumber: "Stint 1",
          sector: "Auto & Farm",
          businessUnit: "Mahindra Research Valley (MRV Chennai)",
          role: "Lead - Software Defined Vehicle Architecture",
          function: "R&D Software Systems",
          duration: "6 Months (Apr 2024 - Sep 2024)",
          reportingManager: "Dr. R. Arunachalam (Head - MRV Software)",
          stintMilestones: "Integrated Adrenox OS middleware across next-gen Scorpio and XUV platforms.",
          keyImpact: "Reduced infotainment boot time by 35% and introduced wireless Apple CarPlay/Android Auto stability patches."
        },
        {
          stintNumber: "Stint 2",
          sector: "IT & Services",
          businessUnit: "Tech Mahindra - Enterprise AI",
          role: "Product Lead - Telematics Data Marketplace",
          function: "Product Management",
          duration: "6 Months (Oct 2024 - Mar 2025)",
          reportingManager: "Karthik Narayanan",
          stintMilestones: "Commercialized real-time vehicle health APIs for auto insurance underwriters.",
          keyImpact: "Signed partnership with 3 major Indian insurers, generating ₹8.5 Cr in ARR."
        }
      ],
      learningNeeds: {
        functional: "International Commercial Contracting & M&A Due Diligence in SaaS Platforms",
        behaviouralCAB: "Strategic Boardroom Presentation; Managing Cross-Cultural Distributed Engineering Teams"
      },
      interventions: [
        {
          title: "Mahindra Global Leadership Accelerator (MGLA)",
          type: "Cadre Immersion",
          status: "Completed",
          actionTaken: "Completed 360-degree leadership assessment and executive coaching journey.",
          impactOutcome: "Scaled team product velocity by 40% using outcome-driven OKRs."
        }
      ],
      performance: {
        history: [
          { year: "FY26 Annual Appraisal", rating: "4.8 / 5.0", cabRating: "Role Model", scale: "1 to 5 Scale" },
          { year: "FY25 Annual Appraisal", rating: "4.6 / 5.0", cabRating: "Role Model", scale: "1 to 5 Scale" }
        ],
        nineBoxPosition: "High Potential / High Performance (Top Talent)"
      },
      strengthsAndGaps: {
        strengths: [
          { theme: "Strategic Product Vision & Technological Acumen", evidence: "Pioneered the NextGen Connected Fleet OS currently utilized across 350,000+ active Mahindra vehicles." },
          { theme: "Commercial Monetization & Client Partnerships", evidence: "Led enterprise deal negotiations securing $12M multi-year recurring SaaS agreements with European partners." }
        ],
        gaps: [
          { theme: "Cross-Sector Physical Manufacturing Exposure", gapEvidence: "Primary background in software/digital; needs deeper stint/project immersion in heavy mechanical manufacturing & plant operations." }
        ]
      },
      recognition: [
        {
          name: "Mahindra Rise Innovation Icon Award",
          type: "Individual",
          source: "Internal",
          org: "Mahindra & Mahindra Group",
          year: "2025",
          role: "Lead",
          evidence: "Honored by Group Leadership for architecting the unified Adrenox Connect Telematics ecosystem."
        }
      ],
      aspirations: {
        preferredDomains: ["Software Defined Vehicles", "Mobility Platforms", "Artificial Intelligence"],
        preferredFunctions: ["Chief Product Officer", "Business Head - Digital Mobility", "Global Growth Strategy"],
        crossSectorOpenness: "Open",
        mobilityPreference: "Open",
        preferredLocations: ["Bengaluru", "Mumbai", "London (UK)", "Munich (Germany)"],
        additionalExposure: ["Cross-sector Project", "International Assignment", "Executive Mentorship"],
        shortTermRole: "Senior Product Director / Global Platform Lead (1–3 years)",
        longTermDirection: "Chief Technology Officer / Business Head"
      },
      readiness: {
        possibleNextRoles: [
          { role: "Head of Digital Products & Connected Services", horizon: "0–1 year", evidence: "Consistently rated 4.8/5.0 with exceptional delivery of the Adrenox Connected Vehicle Platform." },
          { role: "Business Unit Head - Tech Mahindra Mobility", horizon: "1–3 years", evidence: "Demonstrated strong P&L conversion capability ($12M pipeline won) and team leadership." }
        ]
      },
      governance: {
        lastUpdated: "2026-09-15",
        lastVerifiedBy: "Megha Patil (BHR Lead)",
        nextTriggerEvent: "Annual Talent Review & Promotion Gate",
        nextTriggerDate: "2027-04-30",
        completenessScore: 100,
        openRequestsCount: 0,
        verificationStatus: "Verified"
      }
    },

    {
      id: "EMP-107721",
      persona: "GMC 2019–23",
      status: "Active",
      separationDate: "",
      separationReason: "",
      personal: {
        photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=80",
        fullName: "Sneha Rao",
        empId: "10772144",
        dob: "1994-03-12",
        email: "rao.sneha@mahindra.com",
        phone: "+91 98821 00923"
      },
      programme: {
        name: "GMC",
        batch: "GMC 2021",
        intakeSource: "Campus MBA (IIM Calcutta)",
        currentBusiness: "Mahindra & Mahindra Financial Services (MMFSL)",
        currentSector: "Financial Services",
        currentGrade: "M2",
        currentRole: "Associate Vice President - Digital Rural Lending & Fintech Alliances",
        currentFunction: "Digital Strategy & Credit Products",
        currentLocation: "Mumbai (MMFSL Corporate Center)",
        reportingManager: "Raul Rebello (Managing Director & CEO - MMFSL)",
        matrixManager: "Dharmesh Vakharia (Chief Risk Officer)",
        journeyStage: "Cadre Leader (5+ Years in Mahindra System)"
      },
      education: {
        pg: {
          degree: "MBA",
          institute: "IIM Calcutta",
          specialization: "Finance & Quantitative Strategy",
          startYear: "2019",
          endYear: "2021",
          scoreType: "CGPA",
          scoreValue: "3.75 / 4.0",
          honors: "Roll of Honour",
          keyHighlight: "President, Finance Club; authored research on Micro-Credit underwriting in Agri Supply Chains."
        },
        ug: {
          degree: "B.A. (Hons) Economics",
          institute: "St. Stephen's College, Delhi",
          specialization: "Economics & Econometrics",
          startYear: "2014",
          endYear: "2017",
          scoreType: "Percentage",
          scoreValue: "92.6%",
          honors: "College First Rank",
          keyHighlight: "Published empirical study on financial inclusion in semi-urban India."
        },
        class12: {
          board: "CBSE",
          school: "National Public School, Indiranagar, Bengaluru",
          completionYear: "2014",
          stream: "Commerce with Maths",
          percentage: "98.2%"
        }
      },
      certifications: [
        { name: "Chartered Financial Analyst (CFA) - Level 3 Passed", org: "CFA Institute (USA)", year: "2022", validity: "Lifetime", credentialId: "CFA-881920" }
      ],
      priorWork: [
        {
          company: "Goldman Sachs",
          title: "Senior Financial Analyst - Investment Banking",
          duration: "24 months (Jul 2017 - Jun 2019)",
          function: "Investment Banking & Corporate Finance",
          location: "Bengaluru & Singapore",
          criticalProject: "Cross-Border FinTech M&A Advisory",
          projectImpact: "Executed financial due diligence and valuation models for a $450M Southeast Asia digital payments acquisition."
        }
      ],
      sip: {
        sector: "Automotive",
        businessUnit: "Mahindra & Mahindra Ltd - Group Strategy",
        function: "Corporate Strategy & Mergers",
        sipMentor: "Anish Shah (Managing Director & CEO Fellow)",
        duration: "8 Weeks (Apr 2020 - Jun 2020)",
        projectTitle: "Strategic Portfolio Reallocation & Capital Efficiency Model",
        deliverables: "Analyzed 10-year ROIC across all 22 Mahindra business units, recommending capital reallocation matrix.",
        quantifiableImpact: "Adopted as core framework in Group Executive Board 5-Year Capital Allocation Roadmap."
      },
      stints: [
        {
          stintNumber: "Rotation 1",
          sector: "Auto & Farm",
          businessUnit: "Mahindra Farm Division (FES)",
          role: "Manager - Rural Dealership Financial Transformation",
          function: "Commercial Sales Operations",
          duration: "12 Months (May 2021 - Apr 2022)",
          reportingManager: "Hemant Sikka (President - FES)",
          stintMilestones: "Redesigned inventory financing structure across 600+ tractor dealerships in North India.",
          keyImpact: "Reduced dealer working capital blockage by ₹180 Cr and reduced dealer default rates to under 0.6%."
        },
        {
          stintNumber: "Rotation 2",
          sector: "Real Estate & Hospitality",
          businessUnit: "Mahindra Lifespaces Ltd",
          role: "Senior Manager - Land Acquisition & Structured Finance",
          function: "Treasury & Strategic Investments",
          duration: "14 Months (May 2022 - Jun 2023)",
          reportingManager: "Amit Kumar Sinha (MD & CEO - Lifespaces)",
          stintMilestones: "Closed ₹400 Cr joint development agreement in Pune with structured debt syndicate.",
          keyImpact: "Secured project financing at 80 bps lower than benchmark borrowing rate, improving IRR by 2.4%."
        },
        {
          stintNumber: "Rotation 3 & Current",
          sector: "Financial Services",
          businessUnit: "MMFSL (Mahindra Finance)",
          role: "Associate Vice President - Digital Rural Lending",
          function: "Digital Business & P&L",
          duration: "28 Months (Jul 2023 - Present)",
          reportingManager: "Raul Rebello (MD & CEO)",
          stintMilestones: "Launched instant digital tractor loan disbursement engine leveraging satellite crop telemetry.",
          keyImpact: "Disbursed ₹3,200 Cr in FY26 with 40% reduction in turnaround time (from 5 days to 4 hours)."
        }
      ],
      learningNeeds: {
        functional: "Advanced Enterprise Risk Management & Basel III Regulatory Compliance; AI-driven Credit Underwriting",
        behaviouralCAB: "Leading Large Scale Cultural Transformations; Boardroom Negotiations"
      },
      interventions: [
        {
          title: "Mahindra Global Leadership Cadre Masterclass (Harvard Immersion)",
          type: "Executive Leadership",
          status: "Completed",
          actionTaken: "Completed Harvard Business School Executive Program on Disruptive Strategy & Fintech Governance.",
          impactOutcome: "Designed the 3-tier digital credit underwriting risk engine currently processing ₹500 Cr/month."
        }
      ],
      performance: {
        history: [
          { year: "FY26 Annual Appraisal", rating: "4.9 / 5.0", cabRating: "Role Model", scale: "1 to 5 Scale" },
          { year: "FY25 Annual Appraisal", rating: "4.7 / 5.0", cabRating: "Role Model", scale: "1 to 5 Scale" },
          { year: "FY24 Annual Appraisal", rating: "4.8 / 5.0", cabRating: "Role Model", scale: "1 to 5 Scale" }
        ],
        nineBoxPosition: "High Potential / High Performance (Star Cadre)"
      },
      strengthsAndGaps: {
        strengths: [
          { theme: "Cross-Sector Versatility & Strategic Acumen", evidence: "Successfully delivered high-impact financial turnarounds across 3 distinct Mahindra sectors (Farm, Lifespaces, Finance)." },
          { theme: "Digital Transformation & P&L Scaling", evidence: "Grew digital lending AUM from ₹400 Cr to ₹3,200 Cr in 24 months with industry-low delinquency metrics." }
        ],
        gaps: [
          { theme: "International Geography Exposure", gapEvidence: "Strong domestic Indian semi-urban and rural expertise; would benefit from international business leadership stint (e.g. US/Europe/Southeast Asia)." }
        ]
      },
      recognition: [
        {
          name: "Economic Times Young Leader (ET 40 Under 40)",
          type: "Individual",
          source: "External",
          org: "The Economic Times & BCG",
          year: "2025",
          role: "Individual",
          evidence: "Selected as one of India's Top 40 young business leaders under 40 for rural fintech innovation."
        },
        {
          name: "Mahindra Group Chairman's Excellence Award",
          type: "Team or Project",
          source: "Internal",
          org: "Mahindra Group",
          year: "2024",
          role: "Lead",
          evidence: "Recognized for cross-sector inventory financing breakthrough saving ₹180 Cr across dealer networks."
        }
      ],
      aspirations: {
        preferredDomains: ["Financial Services", "FinTech & Payments", "CleanTech Green Financing"],
        preferredFunctions: ["Chief Operating Officer", "Chief Business Officer", "Managing Director / CEO"],
        crossSectorOpenness: "Open",
        mobilityPreference: "Open",
        preferredLocations: ["Mumbai", "London", "Singapore", "New York"],
        additionalExposure: ["International Leadership Stint", "Group Executive Board Observer"],
        shortTermRole: "Executive Vice President / Chief Business Officer (1–3 years)",
        longTermDirection: "Managing Director / Chief Executive Officer - Financial Services"
      },
      readiness: {
        possibleNextRoles: [
          { role: "Chief Business Officer - Retail & Digital Financing", horizon: "0–1 year", evidence: "Proven leadership of ₹3,200 Cr digital portfolio, 3 sector rotations, and 4.9/5.0 sustained appraisal ratings." },
          { role: "Managing Director - Mahindra Rural Housing Finance", horizon: "1–3 years", evidence: "Deep understanding of rural credit distribution, risk modeling, and capital markets." }
        ]
      },
      governance: {
        lastUpdated: "2026-09-22",
        lastVerifiedBy: "Megha Patil (BHR Lead)",
        nextTriggerEvent: "Annual Cadre Review & Succession Slating",
        nextTriggerDate: "2027-03-31",
        completenessScore: 96,
        openRequestsCount: 0,
        verificationStatus: "Verified"
      }
    },

    {
      id: "EMP-106519",
      persona: "MALT",
      status: "Active",
      separationDate: "",
      separationReason: "",
      personal: {
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80",
        fullName: "Rajesh Nair",
        empId: "10651980",
        dob: "1988-09-04",
        email: "nair.rajesh@mahindra.com",
        phone: "+91 98402 11985"
      },
      programme: {
        name: "MALT",
        batch: "MALT 2024 Lateral Track",
        intakeSource: "Experienced Lateral Cadre (ex-Boeing / Pratt & Whitney)",
        currentBusiness: "Mahindra Aerospace & Defence",
        currentSector: "Aerospace & Defence",
        currentGrade: "M1",
        currentRole: "Vice President - Advanced Aerospace Manufacturing & Global Programs",
        currentFunction: "Operations & Aerospace Engineering",
        currentLocation: "Bengaluru (Aerospace Special Economic Zone)",
        reportingManager: "S. P. Shukla (Member of Group Executive Board / President - Aerospace & Defence)",
        matrixManager: "Vinod Sahay (Chief Operating Officer)",
        journeyStage: "MALT Executive Journey"
      },
      education: {
        pg: {
          degree: "M.S. in Aerospace Systems",
          institute: "Purdue University (USA)",
          specialization: "Aeronautical Structures & Composite Materials",
          startYear: "2012",
          endYear: "2014",
          scoreType: "GPA",
          scoreValue: "3.92 / 4.0",
          honors: "Graduate Research Fellow",
          keyHighlight: "Researched carbon-fiber composite fatigue tolerances for commercial supersonic airframes."
        },
        ug: {
          degree: "B.E. Mechanical",
          institute: "National Institute of Technology (NIT) Trichy",
          specialization: "Mechanical Engineering",
          startYear: "2006",
          endYear: "2010",
          scoreType: "CGPA",
          scoreValue: "9.3 / 10.0",
          honors: "Gold Medalist",
          keyHighlight: "Led SAE Aero Design Team to 3rd place in Global Competition in California."
        },
        class12: {
          board: "CBSE",
          school: "Kendriya Vidyalaya, Chennai",
          completionYear: "2006",
          stream: "Science",
          percentage: "96.8%"
        }
      },
      certifications: [
        { name: "FAA Certified Aircraft Assembly & Airworthiness Lead", org: "Federal Aviation Administration (USA)", year: "2018", validity: "Lifetime", credentialId: "FAA-AAL-77102" },
        { name: "Lean Six Sigma Master Black Belt", org: "ASQ", year: "2020", validity: "Lifetime", credentialId: "ASQ-MBB-9021" }
      ],
      priorWork: [
        {
          company: "Boeing Commercial Airplanes (Seattle, USA)",
          title: "Director of Production Operations - 787 Dreamliner Wing Systems",
          duration: "72 months (Jan 2018 - Dec 2023)",
          function: "Aerospace Manufacturing Operations",
          location: "Seattle, Washington (USA)",
          criticalProject: "787 Advanced Composite Wing Ramp-Up",
          projectImpact: "Led 650-member engineering workforce scaling production rate from 10 to 14 aircraft/month while reducing structural non-conformance defects by 42% ($38M annualized savings)."
        },
        {
          company: "Pratt & Whitney",
          title: "Senior Turbine Aerodynamics Engineer",
          duration: "36 months (Jul 2014 - Dec 2017)",
          function: "Turbomachinery Design",
          location: "Hartford, Connecticut (USA)",
          criticalProject: "Geared Turbofan (GTF) Engine Thermal Barrier Validation",
          projectImpact: "Patented turbine blade cooling channel geometry improving fuel efficiency by 1.6%."
        }
      ],
      sip: {
        sector: "Aerospace",
        businessUnit: "Lateral Entry (N/A)",
        function: "N/A",
        sipMentor: "N/A (Lateral MALT Hire)",
        duration: "N/A",
        projectTitle: "Experienced Lateral Hire - Accelerated Track",
        deliverables: "Bypassed SIP as senior executive cadre.",
        quantifiableImpact: "Direct deployment into VP Aerospace Manufacturing."
      },
      stints: [
        {
          stintNumber: "Mahindra Leadership Stint 1",
          sector: "Aerospace & Defence",
          businessUnit: "Mahindra Aerostructures Pvt Ltd",
          role: "VP - Advanced Aerospace Manufacturing & Global Programs",
          function: "Operations & Global Supply Chain",
          duration: "26 Months (Jan 2024 - Present)",
          reportingManager: "S. P. Shukla (Group President)",
          stintMilestones: "Achieved NADCAP, AS9100 Rev D certifications and secured long-term multi-tier contract with Airbus.",
          keyImpact: "Delivered ₹420 Cr aerostructures export revenue in FY26, increasing export margin by 320 bps through automated CNC milling lines."
        }
      ],
      learningNeeds: {
        functional: "Indian Defence Procurement Procedure (DAP 2020) & Strategic Offset Structuring; Public-Private Defence Joint Ventures",
        behaviouralCAB: "Navigating High-Level Government Defense Bureaucracy; Public Policy Advocacy"
      },
      interventions: [
        {
          title: "Mahindra Senior Leadership Conclave (Puri/Goa)",
          type: "Executive Retreat",
          status: "Completed",
          actionTaken: "Participated in strategic alignment with Group Executive Board.",
          impactOutcome: "Formulated the 2030 Aerospace Make-in-India Defence Export Blueprint."
        }
      ],
      performance: {
        history: [
          { year: "FY26 Annual Appraisal", rating: "4.7 / 5.0", cabRating: "Role Model", scale: "1 to 5 Scale" },
          { year: "FY25 Annual Appraisal", rating: "4.8 / 5.0", cabRating: "Role Model", scale: "1 to 5 Scale" }
        ],
        nineBoxPosition: "High Potential / High Performance (Executive Talent)"
      },
      strengthsAndGaps: {
        strengths: [
          { theme: "World-Class Aerospace Manufacturing Excellence", evidence: "Successfully transferred complex Boeing/Airbus aero-structure manufacturing processes to Mahindra Indian SEZ facility." },
          { theme: "Global Customer & OEM Relationship Management", evidence: "Personally led Airbus Tier-1 supplier audit receiving 99.8% compliance score and $80M 5-year order extension." }
        ],
        gaps: [
          { theme: "Commercial Automotive Mass-Volume Manufacturing", gapEvidence: "Extensive background in high-precision low-volume aerospace; would benefit from cross-pollination into high-velocity automotive EV assembly lines." }
        ]
      },
      recognition: [
        {
          name: "Aero India National Manufacturing Leadership Award",
          type: "Individual",
          source: "External",
          org: "Ministry of Defence / CII",
          year: "2025",
          role: "Lead",
          evidence: "Awarded for exceptional contribution to Make-in-India Aerospace component exports."
        }
      ],
      aspirations: {
        preferredDomains: ["Aerospace & Defence", "High-Tech Mobility", "Advanced Composites"],
        preferredFunctions: ["Chief Executive Officer - Aerospace", "Group Executive Board Member", "President - Industrial Businesses"],
        crossSectorOpenness: "Open",
        mobilityPreference: "Open",
        preferredLocations: ["Bengaluru", "Hyderabad", "Mumbai", "Paris (France)"],
        additionalExposure: ["Group Executive Board Direct Interaction", "Defense Ministry Advisory Taskforce"],
        shortTermRole: "Chief Executive Officer - Mahindra Aerostructures (1–3 years)",
        longTermDirection: "President - Aerospace, Defence & Industrial Systems"
      },
      readiness: {
        possibleNextRoles: [
          { role: "CEO - Mahindra Aerostructures Pvt Ltd", horizon: "0–1 year", evidence: "Transformed Bangalore aero facility into profitable ₹420 Cr export unit with flawless global OEM audits." },
          { role: "President - Mahindra Defence Systems", horizon: "1–3 years", evidence: "Global aerospace credentials, deep technical leadership, and proven execution rigour." }
        ]
      },
      governance: {
        lastUpdated: "2026-09-20",
        lastVerifiedBy: "Megha Patil (BHR Lead)",
        nextTriggerEvent: "Executive Cadre Review & GEB Slating",
        nextTriggerDate: "2027-05-15",
        completenessScore: 92,
        openRequestsCount: 0,
        verificationStatus: "Verified"
      }
    }
  ],

  // BHR Pending Verification Queue Items (Diff Review)
  bhrApprovals: [
    {
      id: "REQ-89021",
      talentId: "EMP-109281",
      talentName: "Aditi Deshmukh",
      persona: "MLP 2026",
      fieldChanged: "Career Aspiration & Preferences / Short-term Preferred Role",
      section: "Career Aspiration & Preferences",
      oldValue: "Regional Sales / Business Development",
      newValue: "Regional Sales Manager - Auto / Product Head Electric Vehicles",
      submittedBy: "Aditi Deshmukh (Employee)",
      submissionDate: "2026-10-06 14:30",
      status: "Pending BHR Verification",
      priority: "Normal",
      reasonProvided: "Updated aspiration following completion of Stint 2 commercial EV charging deployment milestone."
    },
    {
      id: "REQ-89022",
      talentId: "EMP-109281",
      talentName: "Aditi Deshmukh",
      persona: "MLP 2026",
      fieldChanged: "Career Readiness / Possible Next Role & Horizon",
      section: "Career Readiness",
      oldValue: "Regional Sales Manager (1–3 years)",
      newValue: "Product Strategy Manager - EV Portfolio (0–1 year) / Regional Sales Manager (1–3 years)",
      submittedBy: "Suresh Raman (Reporting Manager / VP - EV Strategy)",
      submissionDate: "2026-10-07 09:15",
      status: "Pending BHR Verification",
      priority: "High",
      reasonProvided: "Manager assessment following outstanding mid-year rating and delivery of 200 EV charging hubs."
    },
    {
      id: "REQ-89018",
      talentId: "EMP-109355",
      talentName: "Rohan Mehta",
      persona: "MLP 2027",
      fieldChanged: "Education Details / PG CGPA",
      section: "Education Details",
      oldValue: "3.75 / 4.0",
      newValue: "3.85 / 4.0 (Institute Rank 5)",
      submittedBy: "Rohan Mehta (Employee)",
      submissionDate: "2026-10-05 18:00",
      status: "Pending BHR Verification",
      priority: "Normal",
      reasonProvided: "Updated Term 4 audited grade sheet from IIM Ahmedabad academic portal."
    },
    {
      id: "REQ-88995",
      talentId: "EMP-106519",
      talentName: "Rajesh Nair",
      persona: "MALT",
      fieldChanged: "Recognition / External Award Evidence",
      section: "Recognition",
      oldValue: "Aero India Manufacturing Award Nominee",
      newValue: "Aero India National Manufacturing Leadership Award 2025 (Winner - CII/MoD)",
      submittedBy: "Rajesh Nair (Employee)",
      submissionDate: "2026-10-04 11:20",
      status: "Pending BHR Verification",
      priority: "Normal",
      reasonProvided: "Official award gazette published by CII and Ministry of Defence."
    }
  ],

  // Help / Correction Requests (from Persistent Help Icon (h))
  helpTickets: [
    {
      id: "HELP-401",
      talentId: "EMP-109281",
      talentName: "Aditi Deshmukh",
      section: "Programme Details",
      field: "Current Location",
      issueType: "Data Inaccuracy / Correction",
      description: "My Stint 2 location reflects Worli Office, but I am currently stationed at MEAL Plant Chakan for 3 months.",
      createdAt: "2026-10-07 10:15",
      status: "Open",
      assignedTo: "Megha Patil (BHR)",
      targetSla: "24 Hours"
    },
    {
      id: "HELP-402",
      talentId: "EMP-108842",
      talentName: "Ananya Sen",
      section: "Professional Certifications",
      field: "AWS Certificate Expiry",
      issueType: "Certificate Renewal Verification",
      description: "I have renewed my AWS Solutions Architect certification to 2028. Attached certificate PDF.",
      createdAt: "2026-10-06 16:45",
      status: "In Review",
      assignedTo: "IT & HR Automation Desk",
      targetSla: "48 Hours"
    },
    {
      id: "HELP-399",
      talentId: "EMP-107721",
      talentName: "Sneha Rao",
      section: "Career Readiness",
      field: "Executive Slating Visibility",
      issueType: "Access & Permission Query",
      description: "Query regarding whether leadership slating is visible during annual review cycle.",
      createdAt: "2026-10-03 09:30",
      status: "Resolved",
      assignedTo: "Megha Patil (BHR)",
      targetSla: "Resolved"
    }
  ],

  // Master Data Catalogs
  masters: {
    sectors: [
      { id: "S1", name: "Automotive & Farm", code: "AFS", buCount: 8, lead: "Rajesh Jejurikar" },
      { id: "S2", name: "Financial Services", code: "MMFSL", buCount: 4, lead: "Raul Rebello" },
      { id: "S3", name: "IT & Digital Services", code: "TECHM", buCount: 6, lead: "Mohit Joshi" },
      { id: "S4", name: "Real Estate & Hospitality", code: "MHRIL", buCount: 3, lead: "Amit Kumar Sinha" },
      { id: "S5", name: "Aerospace & Defence", code: "AERO", buCount: 3, lead: "S. P. Shukla" },
      { id: "S6", name: "Logistics & Supply Chain", code: "MLL", buCount: 2, lead: "Rampraveen Swaminathan" }
    ],
    programmes: [
      { id: "P1", code: "MLP", name: "Mahindra Leadership Programme", activeCohorts: ["MLP 2027", "MLP 2026", "MLP 2024–25"], totalTalent: 48 },
      { id: "P2", code: "GMC", name: "Group Management Cadre", activeCohorts: ["GMC 2019–23", "GMC 2024"], totalTalent: 64 },
      { id: "P3", code: "MALT", name: "Mahindra Accelerated Leadership Track", activeCohorts: ["MALT 2024", "MALT 2025", "MALT 2026"], totalTalent: 22 }
    ],
    cabThemes: [
      { id: "C1", category: "Core Leadership", theme: "Leveraging Synergies & Cross-Sector Collaboration", definition: "Breaks functional silos to create enterprise value across Mahindra businesses." },
      { id: "C2", category: "Core Leadership", theme: "Customer Centricity & Market Disruption", definition: "Anticipates unmet market needs and drives rapid product-market fit." },
      { id: "C3", category: "Execution", theme: "Agile Execution Rigour & Financial Discipline", definition: "Delivers measurable P&L impact on commitments with disciplined capital allocation." },
      { id: "C4", category: "People Leadership", theme: "Talent Catalyst & Inspirational Leadership", definition: "Builds high-performing diverse teams and coaches future Mahindra leaders." }
    ],
    roleFamilies: [
      "P&L / General Business Management",
      "Product Strategy & Innovation",
      "Sales, Marketing & Channel Expansion",
      "Manufacturing Excellence & Plant Operations",
      "Corporate Finance, Treasury & M&A",
      "Digital Platforms & Software Defined Vehicles",
      "Advanced Supply Chain & Procurement"
    ]
  },

  // Analytics Metrics
  analytics: {
    kpis: {
      totalHighPotential: 134,
      activeRotationalStints: 48,
      pendingBhrApprovals: 4,
      avgCompleteness: 94.2,
      crossSectorMobilityOpen: 82,
      readyNowPipelines: 28
    },
    cohortBreakdown: [
      { name: "MLP 2027", count: 18, color: "#4338ca", avgCompleteness: 88 },
      { name: "MLP 2026", count: 24, color: "#be185d", avgCompleteness: 94 },
      { name: "MLP 2024–25", count: 32, color: "#047857", avgCompleteness: 98 },
      { name: "GMC 2019–23", count: 38, color: "#c2410c", avgCompleteness: 96 },
      { name: "MALT", count: 22, color: "#6d28d9", avgCompleteness: 93 }
    ],
    nineBoxDistribution: {
      "Star Talent (High/High)": 38,
      "High Potential (Med Perf/High Pot)": 26,
      "High Performer (High Perf/Med Pot)": 34,
      "Core Player (Med Perf/Med Pot)": 22,
      "Solid Professional (High Perf/Low Pot)": 8,
      "Emerging Talent (Low Perf/High Pot)": 6
    },
    mobilityBySector: [
      { from: "Automotive", to: "Tech Mahindra", count: 12 },
      { from: "Farm Equipment", to: "Financial Services", count: 9 },
      { from: "Aerospace", to: "Auto EV", count: 6 },
      { from: "Lifespaces", to: "Hospitality", count: 4 }
    ]
  }
};

// Global Store Helper using localStorage
const TalentStore = {
  get: function(key) {
    const saved = localStorage.getItem('MAHINDRA_' + key);
    if (saved) {
      try { return JSON.parse(saved); } catch(e) { return null; }
    }
    return MAHINDRA_DATA[key] || null;
  },

  set: function(key, val) {
    localStorage.setItem('MAHINDRA_' + key, JSON.stringify(val));
  },

  init: function() {
    if (!localStorage.getItem('MAHINDRA_talents')) {
      this.set('talents', MAHINDRA_DATA.talents);
    }
    if (!localStorage.getItem('MAHINDRA_bhrApprovals')) {
      this.set('bhrApprovals', MAHINDRA_DATA.bhrApprovals);
    }
    if (!localStorage.getItem('MAHINDRA_helpTickets')) {
      this.set('helpTickets', MAHINDRA_DATA.helpTickets);
    }
    if (!localStorage.getItem('MAHINDRA_currentUser')) {
      this.set('currentUser', MAHINDRA_DATA.currentUser);
    }
  },

  getTalents: function() {
    this.init();
    return this.get('talents');
  },

  getTalentById: function(id) {
    const all = this.getTalents();
    return all.find(t => t.id === id) || all[0];
  },

  saveTalent: function(updatedTalent) {
    const all = this.getTalents();
    const idx = all.findIndex(t => t.id === updatedTalent.id);
    if (idx >= 0) {
      all[idx] = updatedTalent;
    } else {
      all.unshift(updatedTalent);
    }
    this.set('talents', all);
    return updatedTalent;
  },

  getApprovals: function() {
    this.init();
    return this.get('bhrApprovals');
  },

  approveRequest: function(reqId, reviewerNotes) {
    const list = this.getApprovals();
    const req = list.find(r => r.id === reqId);
    if (req) {
      req.status = "Approved by BHR";
      req.verifiedAt = new Date().toISOString().replace('T', ' ').substring(0, 16);
      req.reviewerNotes = reviewerNotes || "Approved as per verified supporting evidence.";
      this.set('bhrApprovals', list);
    }
    return req;
  },

  rejectRequest: function(reqId, reason) {
    const list = this.getApprovals();
    const req = list.find(r => r.id === reqId);
    if (req) {
      req.status = "Returned / Clarification Requested";
      req.rejectedAt = new Date().toISOString().replace('T', ' ').substring(0, 16);
      req.rejectionReason = reason || "Incomplete documentation provided.";
      this.set('bhrApprovals', list);
    }
    return req;
  },

  getHelpTickets: function() {
    this.init();
    return this.get('helpTickets');
  },

  addHelpTicket: function(ticket) {
    const list = this.getHelpTickets();
    ticket.id = "HELP-" + (400 + list.length + 1);
    ticket.createdAt = new Date().toISOString().replace('T', ' ').substring(0, 16);
    ticket.status = "Open";
    list.unshift(ticket);
    this.set('helpTickets', list);
    return ticket;
  }
};

TalentStore.init();
