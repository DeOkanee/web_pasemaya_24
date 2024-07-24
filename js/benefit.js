
    document.addEventListener('DOMContentLoaded', function() {
        let confettiTriggered = false;
        window.addEventListener('scroll', function() {
            const benefitSection = document.querySelector('.benefit');
            const sectionPosition = benefitSection.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.5;

            if (sectionPosition < screenPosition && !confettiTriggered) {
                confettiTriggered = true;
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 }
                });
            }
        });
    });

