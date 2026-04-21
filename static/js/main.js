// main.js

(function () {
    const overlay   = document.getElementById('video-modal');
    const openBtn   = document.getElementById('how-it-works-btn');
    const closeBtn  = document.getElementById('modal-close-btn');
    const iframe    = document.getElementById('yt-iframe');

    if (!overlay || !openBtn) return;

    function openModal() {
        iframe.src = iframe.dataset.src;
        overlay.classList.add('is-open');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        overlay.classList.remove('is-open');
        iframe.src = '';
        document.body.style.overflow = '';
    }

    openBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);

    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) closeModal();
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && overlay.classList.contains('is-open')) closeModal();
    });
}());
