/**
 * Core Application Script for Mahindra NextGen Talent Card Architecture & Portal
 * Implements Dynamic Role-Based Access Control (RBAC) & View Adaptation
 */

document.addEventListener('DOMContentLoaded', () => {
  App.init();
});

const App = {
  // Master Role Profiles Configuration
  ROLE_PROFILES: {
    Employee: {
      role: "Employee",
      name: "Aditi Deshmukh",
      designation: "Lead - EV Charging Infra (MLP 2026)",
      empId: "10928145",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80",
      roleLabel: "Cadre Talent",
      defaultPage: "dashboard.html"
    },
    Manager: {
      role: "Manager",
      name: "Suresh Raman",
      designation: "VP - EV Strategy & Reporting Manager",
      empId: "M1002914",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
      roleLabel: "Reporting Manager",
      defaultPage: "dashboard.html"
    },
    BHR: {
      role: "BHR",
      name: "Megha Patil",
      designation: "Lead - Business HR & Talent Architecture",
      empId: "M1004821",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80",
      roleLabel: "BHR Lead",
      defaultPage: "dashboard.html"
    },
    GroupHR: {
      role: "GroupHR",
      name: "Anand Mahindra / GEB",
      designation: "Group Talent Intelligence & Executive Board",
      empId: "GEB-001",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&auto=format&fit=crop&q=80",
      roleLabel: "Executive Board",
      defaultPage: "dashboard.html"
    }
  },

  // Role-Specific Navigation Definitions
  ROLE_NAV_CONFIG: {
    Employee: [
      {
        id: 'dashboard',
        label: 'My Dashboard',
        href: 'dashboard.html',
        icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"></rect><rect x="14" y="3" width="7" height="7" rx="1.5"></rect><rect x="14" y="14" width="7" height="7" rx="1.5"></rect><rect x="3" y="14" width="7" height="7" rx="1.5"></rect></svg>`
      },
      {
        id: 'talent-card',
        label: 'My Talent Card',
        href: 'talent-card.html?id=EMP-109281',
        icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`
      },
      {
        id: 'marketplace',
        label: 'Stint Marketplace',
        href: 'team-mobility.html',
        icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>`
      },
      {
        id: 'help',
        label: 'Help & Requests',
        href: 'help-requests.html',
        icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`,
        badge: '1'
      }
    ],

    Manager: [
      {
        id: 'dashboard',
        label: 'Manager Dashboard',
        href: 'dashboard.html',
        icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"></rect><rect x="14" y="3" width="7" height="7" rx="1.5"></rect><rect x="14" y="14" width="7" height="7" rx="1.5"></rect><rect x="3" y="14" width="7" height="7" rx="1.5"></rect></svg>`
      },
      {
        id: 'team-mobility',
        label: 'Team & Mobility',
        href: 'team-mobility.html',
        icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`
      },
      {
        id: 'directory',
        label: 'Talent Directory',
        href: 'talent-directory.html',
        icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line></svg>`
      },
      {
        id: 'talent-card',
        label: 'Talent Dossiers',
        href: 'talent-card.html',
        icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`
      },
      {
        id: 'help',
        label: 'Help & Requests',
        href: 'help-requests.html',
        icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`
      }
    ],

    BHR: [
      {
        id: 'dashboard',
        label: 'Dashboard',
        href: 'dashboard.html',
        icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"></rect><rect x="14" y="3" width="7" height="7" rx="1.5"></rect><rect x="14" y="14" width="7" height="7" rx="1.5"></rect><rect x="3" y="14" width="7" height="7" rx="1.5"></rect></svg>`
      },
      {
        id: 'talent-card',
        label: 'NextGen Talent Card',
        href: 'talent-card.html',
        icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`
      },
      {
        id: 'directory',
        label: 'Talent Directory',
        href: 'talent-directory.html',
        icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line></svg>`
      },
      {
        id: 'analytics',
        label: 'Analytics & 9-Box',
        href: 'talent-analytics.html',
        icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`
      },
      {
        id: 'bhr-queue',
        label: 'BHR Queue',
        href: 'bhr-approvals.html',
        icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>`,
        badge: '4'
      },
      {
        id: 'team-mobility',
        label: 'Team & Mobility',
        href: 'team-mobility.html',
        icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`
      },
      {
        id: 'help',
        label: 'Help Queue',
        href: 'help-requests.html',
        icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`,
        badge: '2'
      },
      {
        id: 'settings',
        label: 'Settings',
        href: 'masters-admin.html',
        icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>`
      }
    ],

    GroupHR: [
      {
        id: 'dashboard',
        label: 'Board Dashboard',
        href: 'dashboard.html',
        icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"></rect><rect x="14" y="3" width="7" height="7" rx="1.5"></rect><rect x="14" y="14" width="7" height="7" rx="1.5"></rect><rect x="3" y="14" width="7" height="7" rx="1.5"></rect></svg>`
      },
      {
        id: 'analytics',
        label: 'Analytics & 9-Box',
        href: 'talent-analytics.html',
        icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`
      },
      {
        id: 'directory',
        label: 'Talent Directory',
        href: 'talent-directory.html',
        icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line></svg>`
      },
      {
        id: 'talent-card',
        label: 'Leadership Dossiers',
        href: 'talent-card.html',
        icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`
      },
      {
        id: 'team-mobility',
        label: 'Group Mobility',
        href: 'team-mobility.html',
        icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`
      },
      {
        id: 'settings',
        label: 'Masters Admin',
        href: 'masters-admin.html',
        icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>`
      }
    ]
  },

  // Allowed pages whitelist per role
  ALLOWED_PAGES_PER_ROLE: {
    Employee: ['dashboard.html', 'talent-card.html', 'team-mobility.html', 'help-requests.html'],
    Manager: ['dashboard.html', 'talent-card.html', 'talent-directory.html', 'team-mobility.html', 'help-requests.html', 'talent-edit.html'],
    BHR: ['dashboard.html', 'talent-card.html', 'talent-directory.html', 'talent-analytics.html', 'bhr-approvals.html', 'team-mobility.html', 'masters-admin.html', 'help-requests.html', 'talent-edit.html', 'talent-onepager.html'],
    GroupHR: ['dashboard.html', 'talent-card.html', 'talent-directory.html', 'talent-analytics.html', 'team-mobility.html', 'masters-admin.html', 'talent-onepager.html']
  },

  init() {
    this.syncActiveUser();
    this.renderRoleBasedNavigation();
    this.setupSidebarToggle();
    this.setupMobileMenu();
    this.setupRoleSwitcher();
    this.setupHelpModal();
    this.setupInfoTooltips();
    this.updateHelpBadgeCounter();
  },

  syncActiveUser() {
    let currentUser = TalentStore.get('currentUser');
    if (!currentUser || !currentUser.role) {
      currentUser = this.ROLE_PROFILES.BHR;
      TalentStore.set('currentUser', currentUser);
    }
    return currentUser;
  },

  // Render navigation links dynamically according to current active role
  renderRoleBasedNavigation() {
    const user = this.syncActiveUser();
    const role = user.role || 'BHR';
    const navItems = this.ROLE_NAV_CONFIG[role] || this.ROLE_NAV_CONFIG.BHR;
    const currentPath = window.location.pathname.split('/').pop() || 'dashboard.html';

    // 1. Update Navigation Links Stack in Sidebar
    const navStack = document.querySelector('.sig-nav-stack') || document.querySelector('.sidebar-nav') || document.getElementById('sidebarNavList');
    if (navStack) {
      let navHtml = '';
      navItems.forEach(item => {
        const itemFilename = item.href.split('?')[0];
        const isActive = (itemFilename === currentPath) || 
                         (currentPath === '' && itemFilename === 'dashboard.html');

        navHtml += `
          <a href="${item.href}" class="sig-nav-item ${isActive ? 'active' : ''}" title="${item.label}">
            <span class="sig-nav-icon">${item.icon}</span>
            <span class="sig-nav-label">${item.label}</span>
            ${item.badge ? `<span class="sig-nav-badge">${item.badge}</span>` : ''}
          </a>
        `;
      });
      navStack.innerHTML = navHtml;
    }

    // 2. Update User Profile Cards in Navbar and Sidebar
    this.updateUserProfileElements(user);

    // 3. Check Page Access
    this.guardPageAccess(role, currentPath);
  },

  updateUserProfileElements(user) {
    // Top Navbar
    const navAvatar = document.querySelector('.tc-user-avatar');
    const navName = document.querySelector('.tc-user-name');
    const navRole = document.querySelector('.tc-user-role');
    if (navAvatar && user.avatar) navAvatar.src = user.avatar;
    if (navName && user.name) navName.textContent = user.name;
    if (navRole) navRole.textContent = user.roleLabel || user.role;

    // Signature Sidebar Profile Card
    const sigAvatar = document.querySelector('.sig-avatar-img');
    const sigName = document.querySelector('.sig-profile-name');
    const sigSub = document.querySelector('.sig-profile-sub');
    if (sigAvatar && user.avatar) sigAvatar.src = user.avatar;
    if (sigName && user.name) sigName.textContent = user.name;
    if (sigSub && user.designation) sigSub.textContent = user.designation;

    // Role select sync
    const roleSelect = document.getElementById('demoRoleSelector');
    if (roleSelect && user.role) {
      roleSelect.value = user.role;
    }
  },

  guardPageAccess(role, currentPath) {
    const allowed = this.ALLOWED_PAGES_PER_ROLE[role] || this.ALLOWED_PAGES_PER_ROLE.BHR;
    const cleanPath = currentPath.split('?')[0];

    // If on a page not permitted for this role, redirect to role's default page
    if (cleanPath && !allowed.includes(cleanPath)) {
      const profile = this.ROLE_PROFILES[role] || this.ROLE_PROFILES.BHR;
      const targetPage = profile.defaultPage;

      this.showToast(`Access to ${cleanPath} is restricted for ${profile.roleLabel}. Redirecting to ${targetPage}...`, 'warning');
      setTimeout(() => {
        window.location.href = targetPage;
      }, 1000);
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
      const currentUser = this.syncActiveUser();
      roleSelect.value = currentUser.role;

      roleSelect.addEventListener('change', (e) => {
        const newRole = e.target.value;
        const profile = this.ROLE_PROFILES[newRole] || this.ROLE_PROFILES.BHR;
        
        TalentStore.set('currentUser', profile);
        this.showToast(`Active Perspective: ${profile.roleLabel} (${profile.name})`, 'info');
        
        // Re-render navigation & user elements
        this.renderRoleBasedNavigation();

        // Trigger custom event for components on the current page to adapt
        document.dispatchEvent(new CustomEvent('roleChanged', { detail: profile }));
      });
    }
  },

  // Persistent Help / Request Modal
  setupHelpModal() {
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
              <h3 style="font-size: 1.15rem; color: var(--ink-black);"><span style="color: var(--rising-red);">Mahindra Rise</span> • Help &amp; Correction Desk</h3>
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

    const user = TalentStore.get('currentUser') || this.ROLE_PROFILES.Employee;
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
          <div class="modal-header" style="background: #f8fafc;">
            <div>
              <div style="font-size: 0.72rem; text-transform: uppercase; font-weight: 700; color: #e31837; letter-spacing: 0.08em;">Data Governance &amp; Architecture Specification</div>
              <h3 id="infoModalTitle" style="font-size: 1.15rem; color: #0f172a; margin-top: 2px;">Field Name</h3>
            </div>
            <button type="button" class="btn btn-ghost btn-sm" onclick="App.closeModal('infoModalOverlay')">✕</button>
          </div>
          <div class="modal-body" style="display: flex; flex-direction: column; gap: 14px;">
            <div>
              <span class="text-muted" style="font-size: 0.78rem; font-weight: 700; text-transform: uppercase;">Definition / Purpose</span>
              <p id="infoModalDesc" style="font-size: 0.92rem; color: #0f172a; margin-top: 3px;"></p>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; background: #f8fafc; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0;">
              <div>
                <span class="text-muted" style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase;">Data Source Tier</span>
                <div id="infoModalSource" style="margin-top: 4px;"></div>
              </div>
              <div>
                <span class="text-muted" style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase;">Design / Control</span>
                <div id="infoModalDesign" style="font-size: 0.85rem; font-weight: 600; color: #475569; margin-top: 4px;"></div>
              </div>
            </div>

            <div>
              <span class="text-muted" style="font-size: 0.78rem; font-weight: 700; text-transform: uppercase;">Persona &amp; Completeness Logic</span>
              <p id="infoModalPersona" style="font-size: 0.85rem; color: #475569; margin-top: 3px;"></p>
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
      
      let sourceHtml = `<span class="badge badge-verified">● Green (HR Database)</span>`;
      if (source.toLowerCase().includes('orange') || source.toLowerCase().includes('api')) {
        sourceHtml = `<span class="badge badge-persona-gmc">▲ Orange (System / API)</span>`;
      } else if (source.toLowerCase().includes('red') || source.toLowerCase().includes('people')) {
        sourceHtml = `<span class="badge badge-persona-mlp26">■ Red (Human Input/Verified)</span>`;
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
      toast.style.borderLeftColor = '#10b981';
    } else if (type === 'warning') {
      icon = '⚠️';
      toast.style.borderLeftColor = '#f59e0b';
    } else if (type === 'danger') {
      icon = '🛑';
      toast.style.borderLeftColor = '#e31837';
    }

    toast.innerHTML = `
      <span>${icon}</span>
      <span style="font-weight: 600; font-size: 12.5px;">${message}</span>
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
