document.querySelector('.gmail').addEventListener('click', function() {
    var form = document.querySelector('.enviaremail');
    if (form.classList.contains('hidden')) {
        form.classList.remove('hidden');
    } else {
        form.classList.add('hidden');
    }
});

window.sr = ScrollReveal({ reset: true })

sr.reveal('.titulo', { duration: 1000})
sr.reveal('.saudacao', { duration: 1000})
sr.reveal('.estudante', { duration: 1000})
sr.reveal('.redes', { duration: 1000})
sr.reveal('.container', { duration: 1000})
sr.reveal('.competencias', { duration: 1000})
sr.reveal('.top', { duration: 1000})
sr.reveal('.bottom', { duration: 1000})
sr.reveal('.estrela img', { duration: 1000})
sr.reveal('.carousel-inner', { duration: 1000})
sr.reveal('.contatos', { duration: 1000})
sr.reveal('#cv', { duration: 1000})

function clicar(){
    alert("Mensagem Enviada!")
}

