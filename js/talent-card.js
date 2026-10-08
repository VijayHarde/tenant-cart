/**
 * Flagship NextGen Talent Card Engine
 * Pixel-Perfect match to Mahindra Rise Reference Architecture
 */

const TalentCardEngine = {
  activeTalent: null,
  activePersona: "MLP 2026",
  activeTab: "overview",

  init() {
    const urlParams = new URLSearchParams(window.location.search);
    const talentId = urlParams.get('id') || 'EMP-109281';
    this.activeTalent = (typeof TalentStore !== 'undefined' && TalentStore.getTalentById) 
      ? TalentStore.getTalentById(talentId) 
      : MAHINDRA_DATA.talents.find(t => t.id === talentId) || MAHINDRA_DATA.talents[0];
      
    this.activePersona = this.activeTalent.persona || "MLP 2026";

    this.renderHeroBanner();
    this.renderPersonaSwitcher();
    this.renderProfileBanner();
    this.renderTabs();
    this.switchTab('overview');
  },

  setPersona(personaKey) {
    this.activePersona = personaKey;
    this.activeTalent.persona = personaKey;

    const allTalents = (typeof TalentStore !== 'undefined' && TalentStore.getTalents)
      ? TalentStore.getTalents()
      : MAHINDRA_DATA.talents;
      
    const matched = allTalents.find(t => t.persona === personaKey);
    if (matched) {
      this.activeTalent = matched;
    }

    this.renderPersonaSwitcher();
    this.renderProfileBanner();
    this.renderTabs();
    this.switchTab(this.activeTab);
    
    if (typeof App !== 'undefined' && App.showToast) {
      App.showToast(`Switched active cohort: ${personaKey}`, 'info');
    }
  },

  switchTab(tabId) {
    this.activeTab = tabId;
    document.querySelectorAll('.tc-tab-btn').forEach(btn => {
      if (btn.getAttribute('data-tab') === tabId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    document.querySelectorAll('.tc-tab-pane').forEach(pane => {
      if (pane.id === `tab-${tabId}`) {
        pane.classList.add('active');
      } else {
        pane.classList.remove('active');
      }
    });
  },

  calculateCompleteness() {
    const p = this.activePersona;
    if (p === 'MLP 2027') return { pct: 88, completed: 62, total: 70 };
    if (p === 'MLP 2026') return { pct: 94, completed: 73, total: 78 };
    if (p === 'MLP 2024–25') return { pct: 100, completed: 103, total: 103 };
    if (p === 'GMC 2019–23') return { pct: 96, completed: 90, total: 94 };
    if (p === 'MALT') return { pct: 92, completed: 86, total: 94 };
    return { pct: 94, completed: 73, total: 78 };
  },

  renderHeroBanner() {
    const container = document.getElementById('heroBannerContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="tc-hero-card">
        <div class="tc-hero-left">
          <h1 class="tc-hero-title">NextGen Talent Card</h1>
          <div class="tc-hero-subtitle">One Profile. Many Possibilities.</div>
          <div class="tc-hero-pillars">Succession &nbsp;|&nbsp; Learning &nbsp;|&nbsp; Career &nbsp;|&nbsp; Leadership</div>
        </div>
        <div class="tc-hero-right">
          <img src="../assets/images/mahindra-building.jpg" alt="Mahindra HQ" class="tc-hero-bg-img">
          <div class="tc-hero-motto-wrap">
            <div class="tc-hero-slash"></div>
            <div class="tc-hero-motto-text">
              PEOPLE<br>
              PLANET<br>
              PROGRESS
            </div>
          </div>
        </div>
      </div>
    `;
  },

  renderPersonaSwitcher() {
    const container = document.getElementById('personaSwitcherContainer');
    if (!container) return;

    const personas = MAHINDRA_DATA.personas;
    let html = `
      <div class="tc-stage-bar">
        <div class="tc-stage-left-wrap">
          <div class="tc-stage-label">Dynamic Cohort Stage</div>
          <div class="tc-stage-pills-row">
    `;

    Object.keys(personas).forEach(key => {
      const p = personas[key];
      const isActive = this.activePersona === key ? 'active' : '';
      html += `
        <button type="button" class="tc-stage-pill ${isActive}" onclick="TalentCardEngine.setPersona('${key}')">
          <span>${p.id}</span>
          <span class="tc-stage-pill-count">(${p.coreFields} Core / ${p.visibleFields} Vis)</span>
        </button>
      `;
    });

    html += `
          </div>
        </div>
        <div class="tc-governed-tag">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            <polyline points="9 12 11 14 15 10"></polyline>
          </svg>
          <span>Governed by<br><strong>BHR</strong></span>
        </div>
      </div>
    `;

    container.innerHTML = html;
  },

  renderProfileBanner() {
    const container = document.getElementById('profileBannerContainer');
    if (!container) return;

    const t = this.activeTalent;
    const p = this.activePersona;
    const comp = this.calculateCompleteness();

    container.innerHTML = `
      <div class="tc-profile-card">
        <div class="tc-profile-top-row">
          <div class="tc-profile-left-block">
            <img src="${t.personal.photo}" alt="${t.personal.fullName}" class="tc-profile-photo">
            <div class="tc-profile-info">
              <div class="tc-profile-name-row">
                <h2 class="tc-profile-name">${t.personal.fullName}</h2>
                <span class="tc-pill-badge tc-pill-active">● Active Profile</span>
                <span class="tc-pill-badge tc-pill-cohort">${p}</span>
                <span class="tc-pill-badge tc-pill-verified">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <polyline points="9 12 11 14 15 10"></polyline>
                  </svg>
                  BHR Verified
                </span>
              </div>

              <div class="tc-profile-role-line">
                <span>${t.programme.currentRole}</span>
                <span>•</span>
                <span class="tc-role-red-highlight">${t.programme.currentBusiness}</span>
              </div>
            </div>
          </div>

          <div class="tc-profile-actions">
            <a href="talent-onepager.html?id=${t.id}" target="_blank" class="tc-btn-outline">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              <span>Export / Print PDF</span>
            </a>
            <button type="button" class="tc-btn-primary" onclick="TalentCardEngine.submitForVerification()">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
              <span>Submit for BHR Review</span>
            </button>
          </div>
        </div>

        <!-- 2x4 Meta Grid -->
        <div class="tc-profile-meta-grid">
          <!-- Item 1: Token / Emp ID -->
          <div class="tc-meta-cell">
            <div class="tc-meta-icon-circle">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#e31837" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div class="tc-meta-text-wrap">
              <div class="tc-meta-label">Token / Emp ID</div>
              <div class="tc-meta-val">${t.personal.empId}</div>
            </div>
          </div>

          <!-- Item 2: Programme / Cohort -->
          <div class="tc-meta-cell">
            <div class="tc-meta-icon-circle">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#e31837" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </div>
            <div class="tc-meta-text-wrap">
              <div class="tc-meta-label">Programme / Cohort</div>
              <div class="tc-meta-val">${t.programme.name} (${t.programme.batch.replace('MLP ', '')})</div>
            </div>
          </div>

          <!-- Item 3: Executive Grade -->
          <div class="tc-meta-cell">
            <div class="tc-meta-icon-circle">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#e31837" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="8" r="5"></circle>
                <path d="M20 21a8 8 0 1 0-16 0"></path>
              </svg>
            </div>
            <div class="tc-meta-text-wrap">
              <div class="tc-meta-label">Executive Grade</div>
              <div class="tc-meta-val">${t.programme.currentGrade}</div>
            </div>
          </div>

          <!-- Item 4: Sector -->
          <div class="tc-meta-cell">
            <div class="tc-meta-icon-circle">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#e31837" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
            </div>
            <div class="tc-meta-text-wrap">
              <div class="tc-meta-label">Sector</div>
              <div class="tc-meta-val">${t.programme.currentSector}</div>
            </div>
          </div>

          <!-- Item 5: Reporting Manager -->
          <div class="tc-meta-cell">
            <div class="tc-meta-icon-circle">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#e31837" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div class="tc-meta-text-wrap">
              <div class="tc-meta-label">Reporting Manager</div>
              <div class="tc-meta-val">${t.programme.reportingManager}</div>
            </div>
          </div>

          <!-- Item 6: Location Base -->
          <div class="tc-meta-cell">
            <div class="tc-meta-icon-circle">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#e31837" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div class="tc-meta-text-wrap">
              <div class="tc-meta-label">Location Base</div>
              <div class="tc-meta-val">${t.programme.currentLocation}</div>
            </div>
          </div>

          <!-- Item 7: Completeness Indicator -->
          <div class="tc-meta-cell">
            <div class="tc-progress-ring-box">
              <svg width="34" height="34" viewBox="0 0 36 36">
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#e2e8f0" stroke-width="3.5" />
                <path stroke-dasharray="${comp.pct}, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#10b981" stroke-width="3.5" />
                <text x="18" y="21" text-anchor="middle" font-size="9.5" font-weight="800" fill="#0f172a">${comp.pct}%</text>
              </svg>
            </div>
            <div class="tc-meta-text-wrap">
              <div class="tc-meta-label">Profile Completeness</div>
              <div class="tc-meta-val">${comp.completed} of ${comp.total} fields</div>
            </div>
          </div>

          <!-- Item 8: Last BHR Verified -->
          <div class="tc-meta-cell">
            <div class="tc-meta-icon-circle">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#e31837" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <div class="tc-meta-text-wrap">
              <div class="tc-meta-label">Last BHR Verified</div>
              <div class="tc-meta-val">
                ${t.governance.lastUpdated}
                <span class="tc-bhr-sub">by ${t.governance.lastVerifiedBy}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  renderTabs() {
    const container = document.getElementById('tabsContentContainer');
    if (!container) return;

    const t = this.activeTalent;
    const p = this.activePersona;

    let html = `
      <!-- Tab Navigation Strip (Luxury Segmented Capsule) -->
      <div class="tc-tabs-strip">
        <button type="button" class="tc-tab-btn active" data-tab="overview" onclick="TalentCardEngine.switchTab('overview')">
          <span class="tc-tab-num">1</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          <span>Overview &amp; Governance</span>
        </button>

        <button type="button" class="tc-tab-btn" data-tab="experience" onclick="TalentCardEngine.switchTab('experience')">
          <span class="tc-tab-num">2</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          <span>Education &amp; Stints</span>
        </button>

        <button type="button" class="tc-tab-btn" data-tab="capability" onclick="TalentCardEngine.switchTab('capability')">
          <span class="tc-tab-num">3</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
          <span>Capability &amp; IDP</span>
        </button>

        <button type="button" class="tc-tab-btn" data-tab="performance" onclick="TalentCardEngine.switchTab('performance')">
          <span class="tc-tab-num">4</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="3" y1="9" x2="21" y2="9"></line>
            <line x1="9" y1="21" x2="9" y2="9"></line>
          </svg>
          <span>Performance &amp; 9-Box</span>
        </button>

        <button type="button" class="tc-tab-btn" data-tab="succession" onclick="TalentCardEngine.switchTab('succession')">
          <span class="tc-tab-num">5</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
            <polyline points="17 6 23 6 23 12"></polyline>
          </svg>
          <span>Career Aspirations</span>
        </button>

        <button type="button" class="tc-tab-btn" data-tab="history" onclick="TalentCardEngine.switchTab('history')">
          <span class="tc-tab-num">🕒</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <span>Audit History</span>
        </button>
      </div>

      <!-- TAB 1: OVERVIEW & GOVERNANCE (Exact 2x2 Grid) -->
      <div id="tab-overview" class="tc-tab-pane active">
        <div class="tc-bucket-grid">
          <!-- Card 1: Identity & Contact Details -->
          <div class="tc-bucket-card">
            <div class="tc-bucket-header">
              <div class="tc-bucket-title-left">
                <span class="tc-bucket-header-icon">👤</span>
                <span class="tc-bucket-header-title">Identity &amp; Contact Details</span>
              </div>
              <div class="tc-bucket-header-right">
                <span class="tc-pill-badge tc-pill-active">● HR Database</span>
                <button type="button" class="tc-btn-bucket-edit" onclick="window.location.href='talent-edit.html?id=${t.id}'">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                  <span>Edit</span>
                </button>
              </div>
            </div>

            <div class="tc-fields-grid">
              <div class="tc-field-item">
                <div class="tc-field-label">Official Email</div>
                <div class="tc-field-val">${t.personal.email}</div>
              </div>
              <div class="tc-field-item">
                <div class="tc-field-label">Phone Number</div>
                <div class="tc-field-val">${t.personal.phone}</div>
              </div>
              <div class="tc-field-item">
                <div class="tc-field-label">Date of Birth</div>
                <div class="tc-field-val">${t.personal.dob}</div>
              </div>
              <div class="tc-field-item">
                <div class="tc-field-label">Intake Channel</div>
                <div class="tc-field-val">${t.programme.intakeSource}</div>
              </div>
            </div>
          </div>

          <!-- Card 2: Current Role & Programme Details -->
          <div class="tc-bucket-card">
            <div class="tc-bucket-header">
              <div class="tc-bucket-title-left">
                <span class="tc-bucket-header-icon">💼</span>
                <span class="tc-bucket-header-title">Current Role &amp; Programme Details</span>
              </div>
              <div class="tc-bucket-header-right">
                <button type="button" class="tc-btn-bucket-link" onclick="TalentCardEngine.switchTab('experience')">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>View History</span>
                </button>
              </div>
            </div>

            <div class="tc-fields-grid">
              <div class="tc-field-item">
                <div class="tc-field-label">Current Designation</div>
                <div class="tc-field-val">${t.programme.currentRole.replace('Stint 2: ', '')}</div>
              </div>
              <div class="tc-field-item">
                <div class="tc-field-label">Sector</div>
                <div class="tc-field-val">${t.programme.currentSector}</div>
              </div>
              <div class="tc-field-item">
                <div class="tc-field-label">Business Unit</div>
                <div class="tc-field-val">${t.programme.currentBusiness}</div>
              </div>
              <div class="tc-field-item">
                <div class="tc-field-label">Location Base</div>
                <div class="tc-field-val">${t.programme.currentLocation}</div>
              </div>
              <div class="tc-field-item">
                <div class="tc-field-label">Programme / Cohort</div>
                <div class="tc-field-val">${t.programme.name} (${t.programme.batch.replace('MLP ', '')})</div>
              </div>
            </div>
          </div>

          <!-- Card 3: Profile Governance & Refresh Triggers -->
          <div class="tc-bucket-card">
            <div class="tc-bucket-header">
              <div class="tc-bucket-title-left">
                <span class="tc-bucket-header-icon">🛡️</span>
                <span class="tc-bucket-header-title">Profile Governance &amp; Refresh Triggers</span>
              </div>
              <div class="tc-bucket-header-right">
                <span class="tc-pill-badge tc-pill-verified">● Active Lifecycle</span>
              </div>
            </div>

            <div class="tc-gov-triplet">
              <div class="tc-gov-cell">
                <div class="tc-gov-icon green">✓</div>
                <div>
                  <div class="tc-field-label">Last Verified</div>
                  <div class="tc-field-val">${t.governance.lastUpdated}</div>
                  <div class="tc-bhr-sub">by ${t.governance.lastVerifiedBy}</div>
                </div>
              </div>

              <div class="tc-gov-cell">
                <div class="tc-gov-icon orange">📅</div>
                <div>
                  <div class="tc-field-label">Next Trigger Event</div>
                  <div class="tc-field-val">${t.governance.nextTriggerEvent}</div>
                  <div class="tc-gov-sub-red">(Stint 2 Review)</div>
                </div>
              </div>

              <div class="tc-gov-cell">
                <div class="tc-gov-icon red">🎯</div>
                <div>
                  <div class="tc-field-label">Target Review Date</div>
                  <div class="tc-field-val">${t.governance.nextTriggerDate}</div>
                </div>
              </div>
            </div>

            <div class="tc-gov-notice-banner">
              <span class="tc-notice-icon">ℹ</span>
              <span>Changes submitted here enter the BHR verification queue to ensure single source of truth across Mahindra SAP &amp; Leadership records.</span>
            </div>
          </div>

          <!-- Card 4: Professional Certifications & Group Honors -->
          <div class="tc-bucket-card">
            <div class="tc-bucket-header">
              <div class="tc-bucket-title-left">
                <span class="tc-bucket-header-icon">🎖️</span>
                <span class="tc-bucket-header-title">Professional Certifications &amp; Group Honors</span>
              </div>
              <div class="tc-bucket-header-right">
                <span class="tc-pill-badge tc-pill-cohort">● BHR Verified</span>
                <button type="button" class="tc-btn-bucket-edit" onclick="TalentCardEngine.addCertification()">
                  <span>+ Add</span>
                </button>
              </div>
            </div>

            <div class="tc-cert-heading">EXTERNAL CERTIFICATIONS</div>

            <div class="tc-cert-stack">
              ${(t.certifications || []).map(c => `
                <div class="tc-cert-row">
                  <div class="tc-cert-left">
                    <div class="tc-cert-icon-wrap">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e31837" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="8" r="7"></circle>
                        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                      </svg>
                    </div>
                    <div class="tc-cert-info">
                      <div class="tc-cert-name">${c.name}</div>
                      <div class="tc-cert-meta">Issuer: <strong>${c.org}</strong> (${c.year}) • ID: ${c.credentialId}</div>
                    </div>
                  </div>
                  <button type="button" class="tc-cert-more-btn" title="Options">⋮</button>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;

    // Append other tab panes
    html += this.renderRemainingTabs(t, p);

    container.innerHTML = html;
  },

  renderRemainingTabs(t, p) {
    return `
      <!-- TAB 2: EDUCATION & STINT JOURNEY -->
      <div id="tab-experience" class="tc-tab-pane">
        <!-- Academic Pedigree Card -->
        <div class="tc-bucket-card" style="margin-bottom: 16px;">
          <div class="tc-bucket-header">
            <div class="tc-bucket-title-left">
              <span class="tc-bucket-header-icon">🎓</span>
              <span class="tc-bucket-header-title">Academic Pedigree &amp; Educational History</span>
            </div>
            <div class="tc-bucket-header-right">
              <span class="tc-pill-badge tc-pill-cohort">● Verified Credentials</span>
            </div>
          </div>

          <div class="tc-pedigree-grid">
            <!-- PG -->
            <div class="tc-pedigree-card pg">
              <div>
                <div class="tc-pedigree-top">
                  <span class="tc-pedigree-level">Postgraduation (PG)</span>
                  <span class="tc-pedigree-year">${t.education.pg.startYear}–${t.education.pg.endYear}</span>
                </div>
                <div class="tc-pedigree-degree">${t.education.pg.degree}</div>
                <div class="tc-pedigree-spec">${t.education.pg.specialization}</div>
                <div class="tc-pedigree-inst">🏛️ ${t.education.pg.institute}</div>
              </div>
              <div class="tc-pedigree-score-strip">
                <span style="color: #64748b;">Score / CGPA:</span>
                <span class="tc-pedigree-score-badge">${t.education.pg.scoreValue} · ${t.education.pg.honors}</span>
              </div>
            </div>

            <!-- UG -->
            <div class="tc-pedigree-card ug">
              <div>
                <div class="tc-pedigree-top">
                  <span class="tc-pedigree-level">Undergraduation (UG)</span>
                  <span class="tc-pedigree-year">${t.education.ug.startYear}–${t.education.ug.endYear}</span>
                </div>
                <div class="tc-pedigree-degree">${t.education.ug.degree}</div>
                <div class="tc-pedigree-spec">${t.education.ug.specialization}</div>
                <div class="tc-pedigree-inst">🏛️ ${t.education.ug.institute}</div>
              </div>
              <div class="tc-pedigree-score-strip">
                <span style="color: #64748b;">Score / Honors:</span>
                <span class="tc-pedigree-score-badge">${t.education.ug.scoreValue} · ${t.education.ug.honors}</span>
              </div>
            </div>

            <!-- XII -->
            <div class="tc-pedigree-card xii">
              <div>
                <div class="tc-pedigree-top">
                  <span class="tc-pedigree-level">Class XII / Senior Secondary</span>
                  <span class="tc-pedigree-year">${t.education.class12.completionYear}</span>
                </div>
                <div class="tc-pedigree-degree">${t.education.class12.school}</div>
                <div class="tc-pedigree-spec">Stream: ${t.education.class12.stream} · Board: ${t.education.class12.board}</div>
              </div>
              <div class="tc-pedigree-score-strip">
                <span style="color: #64748b;">Board Result:</span>
                <span class="tc-pedigree-score-badge" style="color: #e31837; background: #fff1f2; border-color: #fecdd3;">${t.education.class12.percentage}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Stints Journey Timeline Card -->
        <div class="tc-bucket-card">
          <div class="tc-bucket-header">
            <div class="tc-bucket-title-left">
              <span class="tc-bucket-header-icon">💼</span>
              <span class="tc-bucket-header-title">Mahindra Leadership Rotational Stints &amp; Summer SIP</span>
            </div>
            <div class="tc-bucket-header-right">
              <span class="tc-pill-badge tc-pill-active">● STAR Methodology Audited</span>
            </div>
          </div>

          <div class="tc-stints-timeline">
            ${(t.stints || []).map((s, idx) => `
              <div class="tc-stint-entry ${s.stintNumber.toLowerCase().includes('current') || idx === (t.stints.length - 1) ? 'active' : ''}">
                <div class="tc-stint-node">${idx + 1}</div>
                <div class="tc-stint-card">
                  <div class="tc-stint-header-row">
                    <div class="tc-stint-title-group">
                      <span class="tc-stint-tag">${s.stintNumber}</span>
                      <span class="tc-stint-role-name">${s.role}</span>
                    </div>
                    <span class="tc-stint-duration-badge">⏱️ ${s.duration}</span>
                  </div>
                  <div class="tc-stint-meta-row">
                    <span class="tc-stint-meta-chip">🏢 Business: <strong>${s.businessUnit}</strong></span>
                    <span class="tc-stint-meta-chip">⚙️ Function: <strong>${s.function}</strong></span>
                    <span class="tc-stint-meta-chip">👤 Manager: <strong>${s.reportingManager}</strong></span>
                  </div>
                  <div class="tc-stint-scope-box">
                    <strong style="color: #0f172a;">Key Scope &amp; Deliverables:</strong> ${s.stintMilestones}
                  </div>
                  <div class="tc-stint-impact-box">
                    <span>🎯</span>
                    <span><strong>Audited Business Impact:</strong> ${s.keyImpact}</span>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- TAB 3: CAPABILITY & IDP -->
      <div id="tab-capability" class="tc-tab-pane">
        <div class="tc-bucket-card">
          <div class="tc-bucket-header">
            <div class="tc-bucket-title-left">
              <span class="tc-bucket-header-icon">⚙️</span>
              <span class="tc-bucket-header-title">Individual Development Plan (IDP) &amp; Leadership Capabilities</span>
            </div>
            <div class="tc-bucket-header-right">
              <span class="tc-pill-badge tc-pill-verified">● Group COE Governed</span>
            </div>
          </div>
          
          <div class="tc-two-col-grid">
            <!-- Left: IDP Goals -->
            <div>
              <div class="tc-section-subtitle">
                <span>🎯</span>
                <span>DEVELOPMENT GOALS (70:20:10 FRAMEWORK)</span>
              </div>
              <div class="tc-idp-stack">
                ${((t.developmentPlan && t.developmentPlan.goals && t.developmentPlan.goals.length > 0) ? t.developmentPlan.goals : [
                  {
                    goalTitle: "Lead EV Charging Infrastructure Vendor Negotiations & Scaled Rollout",
                    frameworkType: "70% Experiential",
                    targetQuarter: "Q3 2026",
                    status: "On Track (85%)",
                    progress: 85,
                    typeClass: "experiential",
                    mentor: "Vikram Singhania (Head of Mfg Excellence)",
                    actionItem: "Finalize Jio-BP contract terms across 200 fast charging hubs in top 10 metros."
                  },
                  {
                    goalTitle: "Executive Shadowing & Strategic Review Committee Engagement",
                    frameworkType: "20% Exposure",
                    targetQuarter: "Q4 2026",
                    status: "Active (60%)",
                    progress: 60,
                    typeClass: "exposure",
                    mentor: "Suresh Raman (VP - EV Strategy)",
                    actionItem: "Participate in monthly Sector CapEx and Product Strategy sign-offs."
                  },
                  {
                    goalTitle: "INSEAD-Mahindra Advanced General Management Certification",
                    frameworkType: "10% Formal Learning",
                    targetQuarter: "Q1 2027",
                    status: "Enrolled (40%)",
                    progress: 40,
                    typeClass: "education",
                    mentor: "Mahindra Leadership University",
                    actionItem: "Complete Strategic Financial Modeling and Cross-Border M&A modules."
                  }
                ]).map(g => {
                  const typeCls = g.typeClass || (g.frameworkType && g.frameworkType.includes('70') ? 'experiential' : (g.frameworkType && g.frameworkType.includes('20') ? 'exposure' : 'education'));
                  const progressPct = g.progress || (g.status && g.status.includes('85') ? 85 : (g.status && g.status.includes('60') ? 60 : (g.status && g.status.includes('Active') ? 75 : 50)));
                  const fillBg = typeCls === 'experiential' ? '#e31837' : (typeCls === 'exposure' ? '#0284c7' : '#10b981');
                  return `
                    <div class="tc-idp-card ${typeCls}">
                      <div class="tc-idp-header">
                        <div class="tc-idp-title">${g.goalTitle}</div>
                        <span class="tc-idp-type-tag ${typeCls}">${g.frameworkType || '70% Experiential'}</span>
                      </div>
                      <div class="tc-idp-desc">${g.actionItem || 'High-impact development milestone tracked against Cadre Leadership standard.'}</div>
                      <div class="tc-idp-progress-bar">
                        <div class="tc-idp-progress-fill" style="width: ${progressPct}%; background: ${fillBg};"></div>
                      </div>
                      <div class="tc-idp-footer">
                        <span>Target: <strong style="color: #0f172a;">${g.targetQuarter}</strong> ${g.mentor ? `• Mentor: <strong style="color: #334155;">${g.mentor}</strong>` : ''}</span>
                        <span class="tc-pill-badge ${typeCls === 'experiential' ? 'tc-pill-cohort' : (typeCls === 'exposure' ? 'tc-pill-verified' : 'tc-pill-active')}">${g.status}</span>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>

            <!-- Right: Functional & Leadership Capabilities -->
            <div>
              <div class="tc-section-subtitle">
                <span>⚡</span>
                <span>FUNCTIONAL &amp; LEADERSHIP CAPABILITIES</span>
              </div>
              <div class="tc-skill-stack">
                ${((t.skills && t.skills.functional && t.skills.functional.length > 0) ? t.skills.functional : [
                  { skillName: "Strategic Mindset & Market Sensing", proficiency: "Expert", level: 5, category: "Leadership Core" },
                  { skillName: "P&L Management & Capex Optimization", proficiency: "Advanced", level: 4, category: "Financial Acumen" },
                  { skillName: "EV Infrastructure & Ecosystem Architecture", proficiency: "Expert", level: 5, category: "Domain Expertise" },
                  { skillName: "Supply Chain Agility & Vendor Turnaround", proficiency: "Advanced", level: 4, category: "Operations Strategy" },
                  { skillName: "Cross-Functional Stakeholder Mobilization", proficiency: "Advanced", level: 4, category: "People & Team" }
                ]).map(sk => {
                  const lvl = sk.level || (sk.proficiency === 'Expert' ? 5 : (sk.proficiency === 'Advanced' ? 4 : 3));
                  const cat = sk.category || (lvl === 5 ? 'Core Mastery' : 'Strategic Discipline');
                  return `
                    <div class="tc-skill-row-card">
                      <div class="tc-skill-left">
                        <span class="tc-skill-title">${sk.skillName}</span>
                        <span class="tc-skill-category">${cat}</span>
                      </div>
                      <div class="tc-skill-right">
                        <div class="tc-skill-meter">
                          ${[1, 2, 3, 4, 5].map(dotIndex => `
                            <span class="tc-skill-dot ${dotIndex <= lvl ? 'filled' : ''}"></span>
                          `).join('')}
                        </div>
                        <span class="tc-skill-proficiency-badge">${sk.proficiency}</span>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- TAB 4: PERFORMANCE & 9-BOX -->
      <div id="tab-performance" class="tc-tab-pane">
        <div class="tc-bucket-card">
          <div class="tc-bucket-header">
            <div class="tc-bucket-title-left">
              <span class="tc-bucket-header-icon">📊</span>
              <span class="tc-bucket-header-title">Performance Ratings &amp; 9-Box Placement</span>
            </div>
            <div class="tc-bucket-header-right">
              <span class="tc-pill-badge tc-pill-active">● Annual Audited</span>
            </div>
          </div>
          
          <div class="tc-two-col-grid">
            <!-- Left: Historical Ratings -->
            <div>
              <div class="tc-section-subtitle">
                <span>📈</span>
                <span>HISTORICAL PERFORMANCE RATINGS</span>
              </div>
              <div class="tc-rating-stack">
                ${((t.performance && t.performance.ratings && t.performance.ratings.length > 0) ? t.performance.ratings : [
                  {
                    year: "2026",
                    rating: "1 / Top Talent",
                    summary: "Spearheaded body shop debottlenecking for Thar Roxx launch; unlocked 450 additional monthly units without capital expenditure. Awarded Mahindra Rise Innovation Citation.",
                    evaluator: "Evaluated by: Vikram Singhania (Head of Mfg) & Megha Patil (BHR Lead)",
                    signoff: "Audited & Sealed"
                  },
                  {
                    year: "2025",
                    rating: "1 / Exceeds Expectations",
                    summary: "Exceeded all SIP deliverables with 112% target attainment across supply chain risk mitigation workflows at Chakan plant.",
                    evaluator: "Evaluated by: Automotive Sector Talent Council",
                    signoff: "Council Approved"
                  },
                  {
                    year: "2024",
                    rating: "Top 5% Cohort Rank",
                    summary: "Dean's Merit List & National Finalist in Mahindra Rise Challenge during postgraduation at IIM Kozhikode.",
                    evaluator: "Evaluated by: Group HR Campus Selection Board",
                    signoff: "Verified Credentials"
                  }
                ]).map(r => `
                  <div class="tc-rating-card">
                    <div class="tc-rating-top">
                      <span class="tc-rating-year">${r.year} Annual Appraisal</span>
                      <span class="tc-rating-badge">Rating: ${r.rating}</span>
                    </div>
                    <div class="tc-rating-summary">
                      ${r.summary || 'Consistent top-quartile performance across leadership rotational milestones and commercial KPIs.'}
                    </div>
                    <div class="tc-rating-evaluator">
                      <span>${r.evaluator || 'Evaluated by: Sector Talent Council & BHR Lead'}</span>
                      <span class="tc-pill-badge tc-pill-verified">${r.signoff || '✓ Audited'}</span>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Right: 9-Box Interactive Visual Panel -->
            <div class="tc-ninebox-panel">
              <div>
                <div class="tc-section-subtitle" style="color: #047857;">
                  <span>⭐</span>
                  <span>CURRENT 9-BOX SLATING (CADRE DRIVER)</span>
                </div>
                
                <div class="tc-ninebox-grid">
                  <div class="tc-ninebox-cell">Enigma<br><small style="font-size: 9px; opacity: 0.7;">High Pot / Low Perf</small></div>
                  <div class="tc-ninebox-cell">Growth Driver<br><small style="font-size: 9px; opacity: 0.7;">High Pot / Med Perf</small></div>
                  <div class="tc-ninebox-cell active-star">Star Talent<br><small style="font-size: 9px; font-weight: 800;">High Pot / High Perf</small></div>
                  
                  <div class="tc-ninebox-cell">Dilemma<br><small style="font-size: 9px; opacity: 0.7;">Med Pot / Low Perf</small></div>
                  <div class="tc-ninebox-cell">Core Contributor<br><small style="font-size: 9px; opacity: 0.7;">Med Pot / Med Perf</small></div>
                  <div class="tc-ninebox-cell">High Performer<br><small style="font-size: 9px; opacity: 0.7;">Med Pot / High Perf</small></div>
                  
                  <div class="tc-ninebox-cell">Risk<br><small style="font-size: 9px; opacity: 0.7;">Low Pot / Low Perf</small></div>
                  <div class="tc-ninebox-cell">Effective<br><small style="font-size: 9px; opacity: 0.7;">Low Pot / Med Perf</small></div>
                  <div class="tc-ninebox-cell">Trusted Pro<br><small style="font-size: 9px; opacity: 0.7;">Low Pot / High Perf</small></div>
                </div>
              </div>

              <div class="tc-ninebox-verdict-box">
                <div style="font-size: 13.5px; font-weight: 800; color: #047857; margin-bottom: 4px;">
                  ⭐ Star Talent / Top Quartile Leadership Cadre
                </div>
                <div style="font-size: 12px; color: #334155; line-height: 1.45; margin-bottom: 10px;">
                  Identified as an accelerated enterprise leader. Slated for P&amp;L readiness within <strong>1–2 Years for General Management / BU Head</strong> roles.
                </div>
                <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 6px;">
                  <span class="tc-pill-badge tc-pill-active">✓ Ratified by Group Talent Council</span>
                  <span style="font-size: 11px; font-weight: 700; color: #64748b;">Calibration: Q3 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- TAB 5: CAREER ASPIRATIONS -->
      <div id="tab-succession" class="tc-tab-pane">
        <div class="tc-bucket-card">
          <div class="tc-bucket-header">
            <div class="tc-bucket-title-left">
              <span class="tc-bucket-header-icon">📈</span>
              <span class="tc-bucket-header-title">Career Aspirations, Mobility &amp; Succession Plan</span>
            </div>
            <div class="tc-bucket-header-right">
              <span class="tc-pill-badge tc-pill-verified">● Talent Review 2026</span>
            </div>
          </div>
          
          <div class="tc-two-col-grid">
            <!-- Left: Preferred Next Roles & Mobility -->
            <div class="tc-aspiration-card">
              <div>
                <div class="tc-section-subtitle" style="color: #e31837;">
                  <span>🎯</span>
                  <span>PREFERRED NEXT ROLES &amp; SECTORS</span>
                </div>
                
                <div class="tc-aspiration-role-title">Head – EV Ecosystem Alliances (Auto Sector)</div>
                <div style="font-size: 12px; color: #64748b; line-height: 1.45; margin-bottom: 12px;">
                  Target Horizon: <strong>Immediate Post-Stint (Oct 2027)</strong> • Secondary Interest: <strong>GM – SUV Platform Commercialization</strong>
                </div>

                <div style="font-size: 11px; font-weight: 800; color: #475569; text-transform: uppercase; margin-bottom: 4px;">TARGET SECTOR AFFINITY:</div>
                <div class="tc-chip-wrap">
                  <span class="tc-chip-item">🚗 Automotive Sector</span>
                  <span class="tc-chip-item">⚡ MEAL (Electric Mobility)</span>
                  <span class="tc-chip-item">🚜 Farm Equipment</span>
                </div>

                <div style="font-size: 11px; font-weight: 800; color: #475569; text-transform: uppercase; margin-top: 10px; margin-bottom: 4px;">GEOGRAPHIC MOBILITY:</div>
                <div class="tc-chip-wrap">
                  <span class="tc-chip-item" style="background: #eff6ff; color: #1d4ed8; border-color: #bfdbfe;">🌍 Open to Pan-India &amp; International</span>
                  <span class="tc-chip-item">📍 Preferred: Mumbai HQ</span>
                  <span class="tc-chip-item">📍 Preferred: Pune</span>
                </div>
              </div>

              <div style="margin-top: 14px; padding-top: 12px; border-top: 1px solid #f1f5f9; display: flex; align-items: center; justify-content: space-between;">
                <span style="font-size: 11.5px; color: #64748b;">Mobility Readiness:</span>
                <span class="tc-pill-badge tc-pill-active">✓ 100% Mobile (Immediate)</span>
              </div>
            </div>

            <!-- Right: Successor Pipeline Mapping -->
            <div class="tc-aspiration-card">
              <div>
                <div class="tc-section-subtitle" style="color: #0284c7;">
                  <span>🛡️</span>
                  <span>SUCCESSOR PIPELINE MAPPING</span>
                </div>
                
                <div class="tc-aspiration-role-title">Identified Key Successor For:</div>
                
                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px 14px; margin-bottom: 10px;">
                  <div style="font-size: 13.5px; font-weight: 800; color: #0f172a;">1. Vice President – Charging Infrastructure &amp; Ecosystems</div>
                  <div style="font-size: 11.5px; color: #64748b; margin-top: 2px;">Incumbent: Suresh Raman • Succession Readiness: <strong style="color: #047857;">Ready in 18–24 Months</strong></div>
                </div>

                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px 14px; margin-bottom: 12px;">
                  <div style="font-size: 13.5px; font-weight: 800; color: #0f172a;">2. General Manager – SUV Launch Strategy</div>
                  <div style="font-size: 11.5px; color: #64748b; margin-top: 2px;">Incumbent: Vikram Singhania • Succession Readiness: <strong style="color: #0284c7;">Ready in 2–3 Years (Emergency Interim)</strong></div>
                </div>
              </div>

              <div class="tc-readiness-badge-green">
                <span>⭐</span>
                <span>Ranked #1 Bench Strength in 2024–2026 Leadership Cadre</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- TAB 6: AUDIT HISTORY -->
      <div id="tab-history" class="tc-tab-pane">
        <div class="tc-bucket-card">
          <div class="tc-bucket-header">
            <div class="tc-bucket-title-left">
              <span class="tc-bucket-header-icon">🕒</span>
              <span class="tc-bucket-header-title">BHR Audit &amp; Revision Log</span>
            </div>
            <span class="tc-pill-badge tc-pill-verified">● Immutable Governance Trail</span>
          </div>

          <div class="tc-audit-timeline">
            ${((t.governance && t.governance.auditLogs && t.governance.auditLogs.length > 0) ? t.governance.auditLogs : [
              {
                date: "19 Sep 2026",
                action: "BHR verification completed for Stint 2 transition and Q2 milestones.",
                section: "All 15 Governed Buckets Updated",
                actor: "Megha Patil",
                actorRole: "BHR Lead",
                syncStatus: "Synced with SAP HCM",
                type: "verification"
              },
              {
                date: "15 Jun 2026",
                action: "External Professional Certification (CSPO) uploaded and verified against digital badge repository.",
                section: "Professional Certifications",
                actor: "Aditi Deshmukh",
                actorRole: "Self",
                syncStatus: "Credential Verified",
                type: "certification"
              },
              {
                date: "28 Mar 2026",
                action: "Mid-year IDP goal adjustment approved by Executive Mentor.",
                section: "Individual Development Plan",
                actor: "Vikram Singhania",
                actorRole: "Head of Mfg Excellence",
                syncStatus: "IDP Council Approved",
                type: "milestone"
              },
              {
                date: "12 Jan 2026",
                action: "Annual 9-Box calibrated rating and performance rating signed off.",
                section: "Performance & 9-Box Slating",
                actor: "Group Talent Council",
                actorRole: "Talent Architecture COE",
                syncStatus: "Official HCM Record",
                type: "governance"
              }
            ]).map((log, idx) => `
              <div class="tc-audit-entry">
                <div class="tc-audit-node">${idx === 0 ? '✓' : '●'}</div>
                <div class="tc-audit-card">
                  <div class="tc-audit-main">
                    <div class="tc-audit-title">
                      <strong style="color: #e31837; margin-right: 6px;">${log.date}:</strong>
                      ${log.action}
                    </div>
                    <div class="tc-audit-meta">
                      <span>📁 Section: <strong style="color: #1e293b;">${log.section}</strong></span>
                      <span>•</span>
                      <span class="tc-pill-badge tc-pill-active" style="font-size: 10.5px;">✓ ${log.syncStatus || 'Synced with SAP HCM'}</span>
                    </div>
                  </div>
                  <div class="tc-audit-user-badge">
                    <span class="tc-pill-badge ${log.actorRole && log.actorRole.includes('Lead') ? 'tc-pill-cohort' : (log.actorRole && log.actorRole.includes('Self') ? 'tc-pill-active' : 'tc-pill-verified')}">
                      👤 ${log.actor} (${log.actorRole})
                    </span>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  },

  submitForVerification() {
    if (typeof App !== 'undefined' && App.showToast) {
      App.showToast('Profile verification request successfully submitted to BHR Queue!', 'success');
    } else {
      alert('Profile verification request successfully submitted to BHR Queue!');
    }
  },

  addCertification() {
    const certName = prompt('Enter new Certification Name:', 'Advanced Leadership & Strategic Thinking');
    if (certName) {
      this.activeTalent.certifications = this.activeTalent.certifications || [];
      this.activeTalent.certifications.push({
        name: certName,
        org: 'Harvard Business School Online',
        year: '2026',
        credentialId: 'HBS-CERT-' + Math.floor(Math.random() * 89999 + 10000)
      });
      this.renderTabs();
      if (typeof App !== 'undefined' && App.showToast) {
        App.showToast('New certification added for BHR verification!', 'success');
      }
    }
  }
};
