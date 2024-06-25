function blau(){
    window.location.href = "Unterseiten/r6 leon fertig/r6 new.html";
}



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
