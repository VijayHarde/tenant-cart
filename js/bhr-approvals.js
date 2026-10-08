/**
 * Mahindra BHR Verification & Audit Center Workflow Script
 * Confidential & Proprietary - Mahindra Group HR
 */

const BhrWorkflow = {
  currentFilter: 'All',

  init() {
    this.renderApprovalsTable();
    this.setupFilterButtons();
    this.updateCounters();
  },

  setupFilterButtons() {
    const filterBtns = document.querySelectorAll('.bhr-pill-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentFilter = btn.getAttribute('data-filter') || 'All';
        this.renderApprovalsTable();
      });
    });
  },

  updateCounters() {
    const list = TalentStore.getApprovals();
    const pending = list.filter(r => r.status.includes('Pending')).length;
    const approved = list.filter(r => r.status.includes('Approved')).length;
    const clarification = list.filter(r => r.status.includes('Clarification') || r.status.includes('Returned')).length;

    const countPending = document.getElementById('countPending');
    const countApproved = document.getElementById('countApproved');
    const countClarification = document.getElementById('countClarification');
    const countAll = document.getElementById('countAll');
    const kpiPending = document.getElementById('kpiPendingCount');
    const kpiApproved = document.getElementById('kpiApprovedCount');

    if (countPending) countPending.textContent = pending;
    if (countApproved) countApproved.textContent = approved;
    if (countClarification) countClarification.textContent = clarification;
    if (countAll) countAll.textContent = list.length;
    if (kpiPending) kpiPending.textContent = pending;
    if (kpiApproved) kpiApproved.textContent = approved;
  },

  renderApprovalsTable() {
    const list = TalentStore.getApprovals();
    const tbody = document.getElementById('approvalsTableBody');
    if (!tbody) return;

    let filtered = list;
    if (this.currentFilter === 'Pending') {
      filtered = list.filter(r => r.status.includes('Pending'));
    } else if (this.currentFilter === 'Approved') {
      filtered = list.filter(r => r.status.includes('Approved'));
    } else if (this.currentFilter === 'Clarification') {
      filtered = list.filter(r => r.status.includes('Clarification') || r.status.includes('Returned'));
    }

    if (filtered.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="7" style="text-align: center; padding: 36px 20px;">
            <div style="font-size: 2rem; margin-bottom: 8px;">🎉</div>
            <div class="font-bold text-sm" style="color: var(--bhr-text-primary);">No Requests Found</div>
            <div class="text-xs text-muted">All submissions under this category are fully reviewed and verified.</div>
          </td>
        </tr>
      `;
      return;
    }

    let html = '';
    filtered.forEach(req => {
      const isPending = req.status.includes('Pending');
      let statusBadge = `<span class="badge badge-pending">⏳ ${req.status}</span>`;
      if (req.status.includes('Approved')) {
        statusBadge = `<span class="badge badge-verified">✓ ${req.status}</span>`;
      } else if (req.status.includes('Clarification') || req.status.includes('Returned')) {
        statusBadge = `<span class="badge badge-resigned">⚠️ Clarification Requested</span>`;
      }

      let personaClass = 'badge-persona-mlp26';
      if (req.persona.includes('2027')) personaClass = 'badge-persona-mlp27';
      else if (req.persona.includes('GMC')) personaClass = 'badge-persona-gmc';
      else if (req.persona.includes('MALT')) personaClass = 'badge-persona-malt';

      html += `
        <tr>
          <td>
            <strong style="color: var(--bhr-text-primary); font-size: 0.88rem; display: block;">${req.id}</strong>
            <span class="text-xs text-muted" style="display: block; margin-top: 2px;">${req.submissionDate}</span>
          </td>
          <td>
            <a href="talent-card.html?id=${req.talentId}" class="font-bold text-sm" style="color: var(--bhr-red); text-decoration: none;">
              ${req.talentName}
            </a>
            <span class="badge ${personaClass}" style="font-size: 0.7rem; margin-left: 4px;">${req.persona}</span>
          </td>
          <td>
            <div class="font-bold text-xs" style="color: var(--bhr-text-primary);">${req.section}</div>
            <div class="text-xs text-muted" style="margin-top: 2px;">${req.fieldChanged}</div>
          </td>
          <td>
            <div class="bhr-diff-box">
              <div class="bhr-diff-old"><s>Old: ${req.oldValue}</s></div>
              <div class="bhr-diff-new">✨ New: ${req.newValue}</div>
            </div>
          </td>
          <td>
            <span class="text-xs font-semibold" style="color: var(--bhr-text-secondary);">${req.submittedBy}</span>
          </td>
          <td>
            ${statusBadge}
          </td>
          <td>
            <div class="d-flex align-center gap-xs">
              ${isPending ? `
                <button type="button" class="bhr-btn-action approve" onclick="BhrWorkflow.openApproveModal('${req.id}')">✓ Approve</button>
                <button type="button" class="bhr-btn-action return" onclick="BhrWorkflow.openRejectModal('${req.id}')">↩ Return</button>
              ` : `
                <button type="button" class="bhr-btn-action audit" onclick="BhrWorkflow.openDiffModal('${req.id}')">🔍 Audit Log</button>
              `}
            </div>
          </td>
        </tr>
      `;
    });

    tbody.innerHTML = html;
  },

  openApproveModal(reqId) {
    const list = TalentStore.getApprovals();
    const req = list.find(r => r.id === reqId);
    if (!req) return;

    if (!document.getElementById('approveModalOverlay')) {
      const modal = document.createElement('div');
      modal.id = 'approveModalOverlay';
      modal.className = 'modal-overlay';
      modal.innerHTML = `
        <div class="modal-box animate-fade-in" style="max-width: 500px;">
          <div class="modal-header">
            <h3 style="font-size: 1.15rem; color: #065f46;">✓ Confirm BHR Verification</h3>
            <button type="button" class="btn btn-ghost btn-sm" onclick="App.closeModal('approveModalOverlay')">✕</button>
          </div>
          <div class="modal-body">
            <p style="font-size: 0.9rem; color: var(--bhr-text-secondary); margin-bottom: 12px;">
              You are approving the proposed change for <strong id="approveTalentName" style="color: var(--bhr-text-primary);"></strong>:
            </p>
            <div style="background: #f8fafc; padding: 12px; border-radius: 8px; margin-bottom: 14px; border: 1px solid #e2e8f0;">
              <div class="text-xs text-muted" id="approveFieldSection"></div>
              <div class="text-sm font-bold" id="approveNewValue" style="color: #065f46; margin-top: 4px;"></div>
            </div>
            <div class="form-group">
              <label class="form-label font-bold text-xs">Verifier Remarks / Endorsement Note</label>
              <textarea class="form-control" id="approveRemarks" rows="2" placeholder="e.g. Verified with Reporting Manager and official program guidelines."></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" onclick="App.closeModal('approveModalOverlay')">Cancel</button>
            <button type="button" class="btn btn-primary" id="confirmApproveBtn">Verify &amp; Update Live Card</button>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
    }

    document.getElementById('approveTalentName').textContent = req.talentName;
    document.getElementById('approveFieldSection').textContent = `${req.section} • ${req.fieldChanged}`;
    document.getElementById('approveNewValue').textContent = `New Value: ${req.newValue}`;
    document.getElementById('approveRemarks').value = 'Verified with Reporting Manager and official program guidelines.';

    const confirmBtn = document.getElementById('confirmApproveBtn');
    confirmBtn.onclick = () => {
      const notes = document.getElementById('approveRemarks').value;
      TalentStore.approveRequest(req.id, notes);
      App.closeModal('approveModalOverlay');
      this.renderApprovalsTable();
      this.updateCounters();
      App.showToast(`Request ${req.id} approved & live profile updated!`, 'success');
    };

    document.getElementById('approveModalOverlay').classList.add('open');
  },

  openRejectModal(reqId) {
    const list = TalentStore.getApprovals();
    const req = list.find(r => r.id === reqId);
    if (!req) return;

    if (!document.getElementById('rejectModalOverlay')) {
      const modal = document.createElement('div');
      modal.id = 'rejectModalOverlay';
      modal.className = 'modal-overlay';
      modal.innerHTML = `
        <div class="modal-box animate-fade-in" style="max-width: 500px;">
          <div class="modal-header">
            <h3 style="font-size: 1.15rem; color: #991b1b;">⚠️ Request Clarification / Return Submission</h3>
            <button type="button" class="btn btn-ghost btn-sm" onclick="App.closeModal('rejectModalOverlay')">✕</button>
          </div>
          <div class="modal-body">
            <p style="font-size: 0.9rem; color: var(--bhr-text-secondary); margin-bottom: 12px;">
              Return change request for <strong id="rejectTalentName" style="color: var(--bhr-text-primary);"></strong> back to submitter with clarification instructions:
            </p>
            <div class="form-group">
              <label class="form-label font-bold text-xs required">Reason for Clarification / Return</label>
              <textarea class="form-control" id="rejectReasonInput" rows="3" placeholder="Specify why the entry cannot be verified (e.g. Needs quantifiable STAR impact metric / Missing RM approval email)" required></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" onclick="App.closeModal('rejectModalOverlay')">Cancel</button>
            <button type="button" class="btn btn-primary" style="background: #dc2626;" id="confirmRejectBtn">Send Clarification Request</button>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
    }

    document.getElementById('rejectTalentName').textContent = req.talentName;
    document.getElementById('rejectReasonInput').value = 'Please provide official supporting documentation or evidence of manager endorsement.';

    const confirmBtn = document.getElementById('confirmRejectBtn');
    confirmBtn.onclick = () => {
      const reason = document.getElementById('rejectReasonInput').value;
      if (!reason) {
        App.showToast('Please enter a reason for returning this submission', 'warning');
        return;
      }
      TalentStore.rejectRequest(req.id, reason);
      App.closeModal('rejectModalOverlay');
      this.renderApprovalsTable();
      this.updateCounters();
      App.showToast(`Request ${req.id} returned for clarification. Submitter notified.`, 'warning');
    };

    document.getElementById('rejectModalOverlay').classList.add('open');
  },

  openDiffModal(reqId) {
    const list = TalentStore.getApprovals();
    const req = list.find(r => r.id === reqId);
    if (!req) return;

    alert(`Audit Trail for ${req.id}:\nTalent: ${req.talentName}\nSection: ${req.section}\nOld Value: ${req.oldValue}\nNew Value: ${req.newValue}\nStatus: ${req.status}\nVerifier Note: ${req.reviewerNotes || req.rejectionReason || 'Approved by BHR'}`);
  }
};
