document.addEventListener('DOMContentLoaded', () => {
    console.log('Site de João Pessoa carregado!');

    const btnTop = document.getElementById('btnTop');
    if (btnTop) {
        btnTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});