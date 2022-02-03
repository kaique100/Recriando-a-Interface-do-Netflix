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

const botao = document.querySelector('.maisInfo');

botao.addEventListener('click', () =>ininciaModal('modal-info')); 
console.log(botao);