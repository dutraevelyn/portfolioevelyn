document.querySelector('.gmail').addEventListener('click', function() {
    var form = document.querySelector('.enviaremail');
    if (form.classList.contains('hidden')) {
        form.classList.remove('hidden');
    } else {
        form.classList.add('hidden');
    }
});