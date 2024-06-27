function eins(){
    window.location.href = "Einzelne Projekte/r6 leon fertig/r6 new.html";
}
function zwei(){
    window.location.href = "Einzelne Projekte/rechner/apple rechner number 2.html";
}

function drei(){
    window.location.href = "Einzelne Projekte/Autorennen/Untitled-1.html";
}

function vier(){
    window.location.href = "Unterseiten/r6 leon fertig/r6 new.html";
}

function fünf(){
    window.location.href = "Unterseiten/r6 leon fertig/r6 new.html";
}



document.addEventListener('DOMContentLoaded', function() {
    const events = document.querySelectorAll('.box');

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
