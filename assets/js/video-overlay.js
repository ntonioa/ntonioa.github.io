document.addEventListener('click', e => {
  const link = e.target.closest('.video-thumb');
  if (!link) return;

  e.preventDefault();
  const id = link.dataset.videoId;
  if (!id) return;

  const ov = document.createElement('div');
  ov.id = 'video-overlay';
  ov.innerHTML = `
    <div class="close" aria-label="Close video" role="button">&times;</div>
    <iframe src="https://www.youtube.com/embed/${id}?autoplay=1&rel=0"
            title="YouTube video" frameborder="0"
            allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
  document.body.appendChild(ov);

  ov.querySelector('.close').onclick =
  ov.onclick = evt => {
    if (evt.target === ov || evt.target.classList.contains('close')) {
      ov.remove();
    }
  };
});
