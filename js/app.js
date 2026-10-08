/**
 * Core Application Script for Mahindra NextGen Talent Card Architecture & Portal
 */

document.addEventListener('DOMContentLoaded', () => {
  App.init();
});

const App = {
  init() {
    this.renderHeaderAndSidebar();
    this.setupSidebarToggle();
    this.setupMobileMenu();
    this.setupRoleSwitcher();
    this.setupHelpModal();
    this.setupInfoTooltips();
    this.updateHelpBadgeCounter();
  },

  // Highlight current active navigation link and handle sidebar collapse state
  renderHeaderAndSidebar() {
    const currentPath = window.location.pathname.split('/').pop() || 'dashboard.html';
    document.querySelectorAll('.nav-item').forEach(item => {
      const href = item.getAttribute('href');
      if (href && (href.endsWith(currentPath) || (currentPath === '' && href.endsWith('dashboard.html')))) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Restore sidebar state
    const isCollapsed = localStorage.getItem('sidebar_collapsed') === 'true';
    const sidebar = document.getElementById('sigSidebar') || document.getElementById('mainSidebar') || document.querySelector('.sidebar');
    if (sidebar) {
      if (isCollapsed) {
        sidebar.classList.add('collapsed');
      }

      // Inject Signature User Status Card for legacy sidebars only if not already present
      if (!sidebar.classList.contains('sig-sidebar') && !document.getElementById('sidebarStatusCard')) {
        const user = TalentStore.get('currentUser') || MAHINDRA_DATA.currentUser;
        const toggleWrap = sidebar.querySelector('.sidebar-toggle-wrap');
        const statusCard = document.createElement('div');
        statusCard.className = 'sidebar-status-card';
        statusCard.id = 'sidebarStatusCard';
        statusCard.innerHTML = `
          <div class="status-dot"></div>
          <div class="status-info">
            <strong id="sidebarUserName">${user.name.split(' ')[0]} (${user.role})</strong>
            <span id="sidebarUserDesignation">${user.designation.substring(0, 24)}...</span>
          </div>
        `;
        if (toggleWrap) {
          sidebar.insertBefore(statusCard, toggleWrap);
        } else {
          sidebar.appendChild(statusCard);
        }
      }
    }
  },

  setupSidebarToggle() {
    const toggleBtn = document.getElementById('sidebarToggleBtn') || document.getElementById('sigSidebarToggleBtn');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        this.toggleSidebar();
      });
    }

    const menuToggleBtn = document.getElementById('menuToggleBtn') || document.querySelector('.menu-toggle');
    if (menuToggleBtn) {
      menuToggleBtn.addEventListener('click', () => {
        this.toggleSidebar();
      });
    }
  },

  toggleSidebar() {
    const sidebar = document.getElementById('sigSidebar') || document.getElementById('mainSidebar') || document.querySelector('.sidebar') || document.querySelector('.tc-sidebar');
    if (sidebar) {
      sidebar.classList.toggle('collapsed');
      const isCollapsed = sidebar.classList.contains('collapsed');
      localStorage.setItem('sidebar_collapsed', isCollapsed);
      const icon = document.getElementById('sidebarToggleIcon');
      if (icon) {
        icon.textContent = isCollapsed ? '▶' : '◀';
      }
    }
  },

  // Setup mobile navigation drawer
  setupMobileMenu() {
    const toggleBtn = document.querySelector('.mobile-menu-toggle');
    const sidebar = document.querySelector('.app-sidebar');
    let backdrop = document.querySelector('.sidebar-backdrop');

    if (!backdrop && sidebar) {
      backdrop = document.createElement('div');
      backdrop.className = 'sidebar-backdrop';
      document.body.appendChild(backdrop);
    }

    if (toggleBtn && sidebar) {
      toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('sidebar-open');
        backdrop.classList.toggle('active');
      });

      backdrop.addEventListener('click', () => {
        sidebar.classList.remove('sidebar-open');
        backdrop.classList.remove('active');
      });
    }
  },

  // Demo Role Switcher
  setupRoleSwitcher() {
    const roleSelect = document.getElementById('demoRoleSelector');
    if (roleSelect) {
      const user = TalentStore.get('currentUser') || MAHINDRA_DATA.currentUser;
      roleSelect.value = user.role;

      roleSelect.addEventListener('change', (e) => {
        const newRole = e.target.value;
        let updatedUser = { ...user, role: newRole };
        if (newRole === 'Employee') {
          updatedUser.name = "Aditi Deshmukh";
          updatedUser.designation = "Lead - EV Charging Infra (MLP 2026)";
          updatedUser.empId = "10928145";
        } else if (newRole === 'Manager') {
          updatedUser.name = "Suresh Raman";
          updatedUser.designation = "VP - EV Strategy & Reporting Manager";
          updatedUser.empId = "M1002914";
        } else if (newRole === 'BHR') {
          updatedUser.name = "Megha Patil";
          updatedUser.designation = "Lead - Business HR & Talent Architecture";
          updatedUser.empId = "M1004821";
        } else if (newRole === 'GroupHR') {
          updatedUser.name = "Anand Mahindra / Delnaz & Sakshi";
          updatedUser.designation = "Group Talent Intelligence & Executive Board";
          updatedUser.empId = "GEB-001";
        }
        TalentStore.set('currentUser', updatedUser);
        this.showToast(`Switched active view to role: ${newRole} (${updatedUser.name})`, 'info');
        
        // Update user badge if on page
        const userRoleElem = document.querySelector('.user-role-badge');
        const userNameElem = document.querySelector('.user-name');
        if (userRoleElem) userRoleElem.textContent = newRole;
        if (userNameElem) userNameElem.textContent = updatedUser.name;

        // Update signature sidebar status card
        const sbName = document.getElementById('sidebarUserName');
        const sbRole = document.getElementById('sidebarUserDesignation');
        if (sbName) sbName.textContent = `${updatedUser.name.split(' ')[0]} (${newRole})`;
        if (sbRole) sbRole.textContent = `${updatedUser.designation.substring(0, 24)}...`;

        // Trigger custom event for components that listen
        document.dispatchEvent(new CustomEvent('roleChanged', { detail: updatedUser }));
      });
    }
  },

  // Persistent Help / Request Modal (Live Counter (h))
  setupHelpModal() {
    // Inject floating button if not present
    if (!document.getElementById('floatingHelpBtn')) {
      const floatBtn = document.createElement('div');
      floatBtn.id = 'floatingHelpBtn';
      floatBtn.className = 'floating-help-btn';
      floatBtn.innerHTML = `
        <span style="font-size: 1.1rem;">💬</span>
        <span style="font-weight: 700;">Request / Help</span>
        <span class="help-badge-counter" id="helpCounterBadge">2</span>
      `;
      document.body.appendChild(floatBtn);

      floatBtn.addEventListener('click', () => {
        this.openHelpModal();
      });
    }

    // Help Modal Overlay
    if (!document.getElementById('helpModalOverlay')) {
      const modal = document.createElement('div');
      modal.id = 'helpModalOverlay';
      modal.className = 'modal-overlay';
      modal.innerHTML = `
        <div class="modal-box animate-fade-in">
          <div class="modal-header">
            <div>
              <h3 style="font-size: 1.15rem; color: var(--ink-black);"><span style="color: var(--rising-red);">Mahindra Rise</span> • Help & Correction Desk</h3>
              <p style="font-size: 0.78rem; color: var(--steel-grey); margin-top: 2px;">Persistent routing to BHR with IT desk escalation</p>
            </div>
            <button type="button" class="btn btn-ghost btn-sm" onclick="App.closeModal('helpModalOverlay')">✕</button>
          </div>
          <div class="modal-body">
            <form id="helpTicketForm">
              <div class="form-group">
                <label class="form-label required">Target Field / Section</label>
                <select class="form-control" id="helpTargetSection" required>
                  <option value="">-- Select Section --</option>
                  <option value="Personal Details">Personal Details (Photograph, DOB, Email)</option>
                  <option value="Programme & Current Role">Programme & Current Role (Location, Manager, Business)</option>
                  <option value="Education Details">Education Details (PG / UG / Class XII / Scores)</option>
                  <option value="Prior Work Experience">Prior Work Experience (Company, Duration, Project Impact)</option>
                  <option value="Summer Internship (SIP)">Mahindra Summer Internship (SIP) Details</option>
                  <option value="Mahindra Stint History">Mahindra Stint History & Milestones</option>
                  <option value="Learning Needs & IDP">Learning Needs & IDP Interventions</option>
                  <option value="Performance & Ratings">Performance History & CAB Scale</option>
                  <option value="Strengths & Opportunity">Strengths & Areas of Opportunity</option>
                  <option value="Recognition & Awards">Recognition & External Awards</option>
                  <option value="Career Aspirations">Career Aspirations & Location Mobility</option>
                  <option value="Career Readiness">Career Readiness & Possible Next Roles</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label required">Issue Type</label>
                <select class="form-control" id="helpIssueType" required>
                  <option value="Data Correction">Data Inaccuracy / Request Value Correction</option>
                  <option value="Document Upload Verification">Document / Certificate Verification</option>
                  <option value="Stint Transition Update">Stint Transition / Milestone Log</option>
                  <option value="Permission / Access Issue">Access & Permission Query (Route to IT)</option>
                  <option value="General Query">General Talent Architecture Question</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label required">Detailed Description & Evidence</label>
                <textarea class="form-control" id="helpDescription" rows="4" placeholder="Explain the exact change required with supporting justification..." required></textarea>
                <span class="form-helper">Requests are automatically audited and routed to your designated BHR Lead (Megha Patil).</span>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" onclick="App.closeModal('helpModalOverlay')">Cancel</button>
            <button type="button" class="btn btn-primary" onclick="App.submitHelpTicket()">Submit Request to BHR</button>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
    }
  },

  openHelpModal(prefillSection = '') {
    const modal = document.getElementById('helpModalOverlay');
    if (modal) {
      if (prefillSection) {
        const secSelect = document.getElementById('helpTargetSection');
        if (secSelect) secSelect.value = prefillSection;
      }
      modal.classList.add('open');
    }
  },

  submitHelpTicket() {
    const section = document.getElementById('helpTargetSection').value;
    const issueType = document.getElementById('helpIssueType').value;
    const desc = document.getElementById('helpDescription').value;

    if (!section || !issueType || !desc) {
      this.showToast('Please fill all required ticket fields', 'warning');
      return;
    }

    const user = TalentStore.get('currentUser') || MAHINDRA_DATA.currentUser;
    TalentStore.addHelpTicket({
      talentId: user.empId,
      talentName: user.name,
      section: section,
      field: section,
      issueType: issueType,
      description: desc,
      assignedTo: "Megha Patil (BHR Lead)"
    });

    this.closeModal('helpModalOverlay');
    document.getElementById('helpTicketForm').reset();
    this.updateHelpBadgeCounter();
    this.showToast('Help request successfully routed to BHR Queue!', 'success');
  },

  updateHelpBadgeCounter() {
    const openCount = (TalentStore.getHelpTickets() || []).filter(t => t.status === 'Open' || t.status === 'In Review').length;
    const badge = document.getElementById('helpCounterBadge');
    if (badge) {
      badge.textContent = openCount;
      badge.style.display = openCount > 0 ? 'inline-flex' : 'none';
    }
  },

  // Interactive Info (i) Icon Modal & Tooltips
  setupInfoTooltips() {
    // Dynamic global listener for info buttons
    document.addEventListener('click', (e) => {
      const infoBtn = e.target.closest('.info-icon-btn');
      if (infoBtn) {
        const fieldName = infoBtn.getAttribute('data-field') || 'Field Information';
        const infoDesc = infoBtn.getAttribute('data-info') || 'Detailed field metadata from Mahindra Talent Card Architecture.';
        const sourceColor = infoBtn.getAttribute('data-source') || 'Green (HR Database)';
        const designSugg = infoBtn.getAttribute('data-design') || '-';
        const personaRule = infoBtn.getAttribute('data-persona-rule') || 'Core field across applicable cohorts.';

        this.openInfoModal(fieldName, infoDesc, sourceColor, designSugg, personaRule);
      }
    });

    if (!document.getElementById('infoModalOverlay')) {
      const modal = document.createElement('div');
      modal.id = 'infoModalOverlay';
      modal.className = 'modal-overlay';
      modal.innerHTML = `
        <div class="modal-box animate-fade-in" style="max-width: 520px;">
          <div class="modal-header" style="background: var(--bg-slate);">
            <div>
              <div style="font-size: 0.72rem; text-transform: uppercase; font-weight: 700; color: var(--rising-red); letter-spacing: 0.08em;">Data Governance & Architecture Specification</div>
              <h3 id="infoModalTitle" style="font-size: 1.15rem; color: var(--ink-black); margin-top: 2px;">Field Name</h3>
            </div>
            <button type="button" class="btn btn-ghost btn-sm" onclick="App.closeModal('infoModalOverlay')">✕</button>
          </div>
          <div class="modal-body" style="display: flex; flex-direction: column; gap: 14px;">
            <div>
              <span class="text-muted" style="font-size: 0.78rem; font-weight: 700; text-transform: uppercase;">Definition / Purpose</span>
              <p id="infoModalDesc" style="font-size: 0.92rem; color: var(--ink-black); margin-top: 3px;"></p>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; background: #fafafa; padding: 12px; border-radius: var(--radius-sm); border: 1px solid var(--border-grey);">
              <div>
                <span class="text-muted" style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase;">Data Source Tier</span>
                <div id="infoModalSource" style="margin-top: 4px;"></div>
              </div>
              <div>
                <span class="text-muted" style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase;">Design / Control</span>
                <div id="infoModalDesign" style="font-size: 0.85rem; font-weight: 600; color: var(--steel-grey); margin-top: 4px;"></div>
              </div>
            </div>

            <div>
              <span class="text-muted" style="font-size: 0.78rem; font-weight: 700; text-transform: uppercase;">Persona & Completeness Logic</span>
              <p id="infoModalPersona" style="font-size: 0.85rem; color: var(--steel-grey); margin-top: 3px;"></p>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary btn-sm" onclick="App.closeModal('infoModalOverlay')">Got It</button>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
    }
  },

  openInfoModal(title, desc, source, design, persona) {
    const modal = document.getElementById('infoModalOverlay');
    if (modal) {
      document.getElementById('infoModalTitle').textContent = title;
      document.getElementById('infoModalDesc').textContent = desc;
      
      let sourceHtml = `<span class="src-indicator src-green">● Green (HR Database)</span>`;
      if (source.toLowerCase().includes('orange') || source.toLowerCase().includes('api')) {
        sourceHtml = `<span class="src-indicator src-orange">▲ Orange (System / API)</span>`;
      } else if (source.toLowerCase().includes('red') || source.toLowerCase().includes('people')) {
        sourceHtml = `<span class="src-indicator src-red">■ Red (Human Input/Verified)</span>`;
      }
      document.getElementById('infoModalSource').innerHTML = sourceHtml;
      document.getElementById('infoModalDesign').textContent = design;
      document.getElementById('infoModalPersona').textContent = persona;

      modal.classList.add('open');
    }
  },

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('open');
  },

  // Toast Notification System
  showToast(message, type = 'info') {
    let container = document.getElementById('toastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toastContainer';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast-msg';
    let icon = 'ℹ️';
    if (type === 'success') {
      icon = '✅';
      toast.style.borderLeftColor = 'var(--success)';
    } else if (type === 'warning') {
      icon = '⚠️';
      toast.style.borderLeftColor = 'var(--warning)';
    } else if (type === 'danger') {
      icon = '🛑';
      toast.style.borderLeftColor = 'var(--rising-red)';
    }

    toast.innerHTML = `
      <span>${icon}</span>
      <span style="font-weight: 500;">${message}</span>
    `;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3800);
  }
};
