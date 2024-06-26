function eins(){
    window.location.href = "r6 new - Verknüpfung.lnk";
}
function zwei(){
    window.location.href = "Unterseiten/r6 leon fertig/r6 new.html";
}

function drei(){
    window.location.href = "Unterseiten/r6 leon fertig/r6 new.html";
}

function vier(){
    window.location.href = "Unterseiten/r6 leon fertig/r6 new.html";
}

function fünf(){
    window.location.href = "Unterseiten/r6 leon fertig/r6 new.html";
}


document.addEventListener('DOMContentLoaded', function() {
    const events = document.querySelectorAll('.box-event');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.5
    });

    events.forEach(event => {
        observer.observe(event);
    });
});


