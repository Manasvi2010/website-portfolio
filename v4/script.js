document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.slide-up, .fade-in, .zoom-in');

    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(animateOnScroll, { threshold: 0.3 });

    elements.forEach(element => observer.observe(element));
});
