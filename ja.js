


document.addEventListener('DOMContentLoaded', function() {
    const events = document.querySelectorAll('.timeline-event');

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


function profil(){
    window.location.href = "Unterseiten/Profil website/Untitled-1.html";
}

function Projekte(){
    window.location.href = "Unterseiten/projekte/Untitled-1.html";
}







