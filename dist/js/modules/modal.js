function modal() {
    // MODAL

    const modalTrigger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal'),
    modalCloseBtn = document.querySelector('[data-close]');

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', function() {
            modal.classList.toggle('show');
            
            document.body.style.overflow = 'hidden';
        });
    });

    function closeModal() {
    modal.classList.toggle('show');
    document.body.style.overflow = '';
    }
    
    modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.code === "Escape" && modal.classList.contains('show')) { 
            closeModal();
        }
    });
}

export default modal;