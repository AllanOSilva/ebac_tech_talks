AOS.init();

document.addEventListener('contextmenu', function(event){
    event.preventDefault();
    alert('O clique com o botão direito do mouse está desabilitado nesta página.');
});