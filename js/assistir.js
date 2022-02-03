function ininciaModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        
    modal.classList.add('mostrar');

    modal.addEventListener('click', (e) =>{
        if (e.target.id == modalId || e.target.className == 'fechar') {
            modal.classList.remove('mostrar');
        }
    });
}
}

const assistir = document.querySelector('.assistir');

assistir.addEventListener('click', () =>ininciaModal('modal-assistir')); 
console.log(assistir);