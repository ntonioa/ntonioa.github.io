document.addEventListener('DOMContentLoaded', () => {
  // Open modal
  document.querySelectorAll('.open-modal').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const modalId = this.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = 'block';
        modal._previousFocus = document.activeElement;
        const firstFocusable = modal.querySelector('.close, a, button, input, [tabindex]');
        if (firstFocusable) firstFocusable.focus();
      }
    });
  });

  function closeModal(modal) {
    modal.style.display = 'none';
    if (modal._previousFocus) modal._previousFocus.focus();
  }

  // Close modal when clicking X
  document.querySelectorAll('.modal .close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function () {
      closeModal(this.closest('.modal'));
    });
  });

  // Close modal when clicking outside
  window.addEventListener('click', function (event) {
    document.querySelectorAll('.modal').forEach(modal => {
      if (event.target === modal) {
        closeModal(modal);
      }
    });
  });

  // Close modal on Escape key
  window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      document.querySelectorAll('.modal').forEach(modal => {
        if (modal.style.display !== 'none' && modal.style.display !== '') {
          closeModal(modal);
        }
      });
    }
  });

  // Trap focus inside open modal
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('keydown', function (e) {
      if (e.key !== 'Tab') return;
      const focusable = modal.querySelectorAll('a, button, input, [tabindex]:not([tabindex="-1"]), .close');
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });
  });
});
