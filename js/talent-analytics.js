/**
 * Mahindra NextGen Talent Analytics & 9-Box Intelligence Engine
 * Confidential & Proprietary - Mahindra Group HR
 */

const TalentAnalytics = {
  activeCadre: 'all',
  activeSector: 'all',
  selectedBoxId: 'b3',

  // 9-Box matrix dataset with simulated candidate pools
  nineBoxData: [
    // Row 1: High Potential
    {
      id: "b1",
      title: "Enigma / Rough Diamond",
      pot: "High",
      perf: "Low",
      count: 6,
      pct: "5.7%",
      tier: "enigma",
      tag: "High Pot • Low Perf",
      candidates: [
        { name: "Devansh Nair", role: "Stint Lead - EV Battery Systems", cadre: "MLP 2026", id: "EMP-109292", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80", sector: "Auto - BEV" },
        { name: "Siddharth Sen", role: "Project Manager - Agritech", cadre: "GMC 2022", id: "EMP-107730", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80", sector: "Farm Equipment" }
      ]
    },
    {
      id: "b2",
      title: "Future Leader / High Potential",
      pot: "High",
      perf: "Med",
      count: 26,
      pct: "24.8%",
      tier: "high-pot",
      tag: "High Pot • Med Perf",
      candidates: [
        { name: "Kunal Mehra", role: "Lead - Digital Customer Journeys", cadre: "MLP 2025", id: "EMP-108845", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80", sector: "Tech Mahindra" },
        { name: "Neha Kashyap", role: "Manager - Rural Product Design", cadre: "GMC 2021", id: "EMP-107740", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80", sector: "Financial Services" },
        { name: "Sameer Joshi", role: "Commercial Operations Lead", cadre: "MALT", id: "EMP-106525", avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=120&auto=format&fit=crop&q=80", sector: "Aerospace" }
      ]
    },
    {
      id: "b3",
      title: "Star Talent / Cadre Driver",
      pot: "High",
      perf: "High",
      count: 38,
      pct: "36.2%",
      tier: "star",
      isStar: true,
      tag: "High Pot • High Perf",
      candidates: [
        { name: "Aditi Deshmukh", role: "Lead - EV Charging Infra & Channel Expansion", cadre: "MLP 2026", id: "EMP-109281", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80", sector: "Automotive & Farm" },
        { name: "Sneha Rao", role: "Head - MSME & Micro-Enterprise Lending", cadre: "GMC 2021", id: "EMP-107721", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&auto=format&fit=crop&q=80", sector: "Financial Services" },
        { name: "Rajesh Nair", role: "VP - Composite Aerostructures Program", cadre: "MALT", id: "EMP-106519", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&auto=format&fit=crop&q=80", sector: "Aerospace & Defence" },
        { name: "Ananya Sen", role: "Chief Architect - Connected Vehicle Cloud", cadre: "MLP 2024–25", id: "EMP-108842", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80", sector: "Tech Mahindra" }
      ]
    },

    // Row 2: Medium Potential
    {
      id: "b4",
      title: "Dilemma / Inconsistent",
      pot: "Med",
      perf: "Low",
      count: 4,
      pct: "3.8%",
      tier: "dilemma",
      tag: "Med Pot • Low Perf",
      candidates: [
        { name: "Vikrant Patil", role: "Supply Chain Analyst", cadre: "MLP 2026", id: "EMP-109310", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&auto=format&fit=crop&q=80", sector: "Auto Components" }
      ]
    },
    {
      id: "b5",
      title: "Core Player / Key Contributor",
      pot: "Med",
      perf: "Med",
      count: 22,
      pct: "21.0%",
      tier: "core",
      tag: "Med Pot • Med Perf",
      candidates: [
        { name: "Pooja Hegde", role: "Senior Manager - Dealer Network", cadre: "GMC 2020", id: "EMP-107780", avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=120&auto=format&fit=crop&q=80", sector: "Automotive" },
        { name: "Gautam Seth", role: "Risk Assessment Specialist", cadre: "MALT", id: "EMP-106540", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&auto=format&fit=crop&q=80", sector: "Financial Services" }
      ]
    },
    {
      id: "b6",
      title: "High Performer / Master",
      pot: "Med",
      perf: "High",
      count: 34,
      pct: "32.4%",
      tier: "high-perf",
      tag: "Med Pot • High Perf",
      candidates: [
        { name: "Arvind Swamy", role: "Plant Engineering Head", cadre: "GMC 2019", id: "EMP-107650", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80", sector: "Farm Equipment" },
        { name: "Divya Balan", role: "Senior Delivery Manager", cadre: "MLP 2024", id: "EMP-108890", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80", sector: "Tech Mahindra" }
      ]
    },

    // Row 3: Low Potential
    {
      id: "b7",
      title: "Underperformer",
      pot: "Low",
      perf: "Low",
      count: 0,
      pct: "0.0%",
      tier: "underperf",
      tag: "Low Pot • Low Perf",
      candidates: []
    },
    {
      id: "b8",
      title: "Effective / Solid Worker",
      pot: "Low",
      perf: "Med",
      count: 4,
      pct: "3.8%",
      tier: "effective",
      tag: "Low Pot • Med Perf",
      candidates: [
        { name: "Manoj Chawla", role: "Operations Officer", cadre: "Cadre Alum", id: "EMP-105510", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80", sector: "Lifespaces" }
      ]
    },
    {
      id: "b9",
      title: "Solid Professional / Expert",
      pot: "Low",
      perf: "High",
      count: 8,
      pct: "7.6%",
      tier: "solid",
      tag: "Low Pot • High Perf",
      candidates: [
        { name: "Kavita Srinivasan", role: "Compliance & Safety Auditor", cadre: "MALT", id: "EMP-106590", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80", sector: "Aerospace" }
      ]
    }
  ],

  init() {
    this.renderNineBoxGrid();
    this.renderSectorBars();
    this.setupCadreFilter();
    this.setupModalListeners();
  },

  renderNineBoxGrid() {
    const container = document.getElementById('nineBoxMatrixContainer');
    if (!container) return;

    let html = `
      <div class="ta-ninebox-wrapper">
        <div class="ta-ninebox-body">
          <div class="ta-ninebox-y-axis">
            ▲ POTENTIAL (Low → High)
          </div>
          <div class="ta-ninebox-grid">
    `;

    this.nineBoxData.forEach(b => {
      const isSelected = b.id === this.selectedBoxId;
      html += `
        <div class="ta-cell ${b.tier} ${isSelected ? 'active' : ''}" id="cell-${b.id}" onclick="TalentAnalytics.selectNineBoxCell('${b.id}')">
          <div class="ta-cell-header">
            <span class="ta-cell-title">${b.title}</span>
            ${b.isStar ? '<span class="ta-cell-badge">⭐</span>' : ''}
          </div>
          <div class="ta-cell-footer">
            <span class="ta-cell-count">${b.count}</span>
            <span class="ta-cell-share">${b.pct}</span>
          </div>
        </div>
      `;
    });

    html += `
          </div>
        </div>
        <div class="ta-ninebox-x-axis">
          PERFORMANCE (Low → High) ▶
        </div>
      </div>
    `;

    container.innerHTML = html;
    this.updateSelectedInfo();
  },

  selectNineBoxCell(boxId) {
    this.selectedBoxId = boxId;
    const box = this.nineBoxData.find(b => b.id === boxId);
    if (!box) return;

    // Update active visual cell
    document.querySelectorAll('.ta-cell').forEach(c => c.classList.remove('active'));
    const activeEl = document.getElementById(`cell-${boxId}`);
    if (activeEl) activeEl.classList.add('active');

    this.updateSelectedInfo();
    this.openClusterModal(box);
  },

  updateSelectedInfo() {
    const infoEl = document.getElementById('nineBoxSelectedInfo');
    if (!infoEl) return;

    const box = this.nineBoxData.find(b => b.id === this.selectedBoxId) || this.nineBoxData[2];
    infoEl.innerHTML = `
      <div class="ta-selection-label">
        Selected: <strong>${box.title}</strong> (${box.count} Talents • ${box.pct} of calibrated cohort)
      </div>
      <button type="button" class="ta-btn-inspect-cluster" onclick="TalentAnalytics.openClusterModal()">
        👥 View Talents Slate (${box.count}) ➔
      </button>
    `;
  },

  openClusterModal(boxObj) {
    const box = boxObj || this.nineBoxData.find(b => b.id === this.selectedBoxId) || this.nineBoxData[2];
    const modalBackdrop = document.getElementById('taTalentModal');
    const modalTitle = document.getElementById('taModalTitle');
    const modalBody = document.getElementById('taModalBody');
    if (!modalBackdrop || !modalTitle || !modalBody) return;

    modalTitle.innerHTML = `<span>${box.isStar ? '⭐' : '📊'}</span> <span>${box.title} (${box.count} Talents)</span>`;
    
    if (box.candidates && box.candidates.length > 0) {
      modalBody.innerHTML = box.candidates.map(c => `
        <div class="ta-modal-talent-item">
          <div class="ta-modal-talent-left">
            <img src="${c.avatar}" alt="${c.name}" class="ta-modal-talent-avatar">
            <div class="ta-modal-talent-info">
              <div class="ta-modal-talent-name">${c.name}</div>
              <div class="ta-modal-talent-role">${c.role} • <strong>${c.sector}</strong></div>
            </div>
          </div>
          <div class="d-flex align-center gap-sm">
            <span class="badge badge-persona-mlp26">${c.cadre}</span>
            <a href="talent-card.html?id=${c.id}" class="btn btn-secondary btn-sm" style="padding: 4px 10px; font-size: 11px;">
              Talent Card ➔
            </a>
          </div>
        </div>
      `).join('');
    } else {
      modalBody.innerHTML = `
        <div style="text-align: center; padding: 24px; color: #64748b; font-size: 12px;">
          No underperforming talents recorded in this cycle calibration.
        </div>
      `;
    }

    modalBackdrop.classList.add('active');
  },

  closeModal() {
    const modalBackdrop = document.getElementById('taTalentModal');
    if (modalBackdrop) modalBackdrop.classList.remove('active');
  },

  setupModalListeners() {
    const modalBackdrop = document.getElementById('taTalentModal');
    if (modalBackdrop) {
      modalBackdrop.addEventListener('click', (e) => {
        if (e.target === modalBackdrop) this.closeModal();
      });
    }
  },

  renderSectorBars() {
    const container = document.getElementById('sectorBarsContainer');
    if (!container) return;

    const sectors = [
      { name: 'Automotive (AFS Auto)', pct: 94, color: '#e31837', count: '47/50 Reviews' },
      { name: 'Farm Equipment (AFS Farm)', pct: 88, color: '#f59e0b', count: '38/43 Reviews' },
      { name: 'Aerospace & Defence', pct: 92, color: '#10b981', count: '23/25 Reviews' },
      { name: 'Financial Services (MMFSL)', pct: 82, color: '#3b82f6', count: '28/34 Reviews' },
      { name: 'Tech Mahindra / Mobility Cloud', pct: 78, color: '#8b5cf6', count: '32/41 Reviews' }
    ];

    container.innerHTML = sectors.map(s => `
      <div class="ta-sector-row">
        <div class="ta-sector-meta">
          <span class="ta-sector-name">${s.name}</span>
          <span class="ta-sector-pct">${s.pct}% <span style="font-weight: 500; font-size: 10.5px; color: #64748b;">(${s.count})</span></span>
        </div>
        <div class="ta-progress-track">
          <div class="ta-progress-fill" style="width: ${s.pct}%; background: ${s.color};"></div>
        </div>
      </div>
    `).join('');
  },

  setupCadreFilter() {
    const filterSelect = document.getElementById('cadreFilterSelect');
    if (filterSelect) {
      filterSelect.addEventListener('change', (e) => {
        this.activeCadre = e.target.value;
        App.showToast(`Calibrating 9-Box & Analytics for: ${e.target.options[e.target.selectedIndex].text}`, 'info');
      });
    }
  }
};
