document.addEventListener('DOMContentLoaded', () => {
  // Open modal
  document.querySelectorAll('.open-modal').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // ← Previene il comportamento di default (tornare in cima)
      const modalId = this.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = 'block';
      }
    });
  });

  // Close modal when clicking X
  document.querySelectorAll('.modal .close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function () {
      this.closest('.modal').style.display = 'none';
    });
  });

  // Close modal when clicking outside
  window.addEventListener('click', function (event) {
    document.querySelectorAll('.modal').forEach(modal => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
});
