document.addEventListener('DOMContentLoaded', function() {
    const landingPage = document.getElementById('landing-page');
    const celebrationPage = document.getElementById('celebration-page');
    const celebrationButton = document.getElementById('celebration-button');
    const confetti = document.getElementById("confetti");
    const decorativeImages = document.getElementById("decorative-images");

    celebrationButton.addEventListener('click', function() {
        // Hide landing page and show celebration page
        landingPage.classList.add('hidden');
        celebrationPage.classList.remove('hidden');
        confetti.classList.remove('hidden');
        decorativeImages.classList.remove('hidden');

        // Fade-in animation for celebration page
        celebrationPage.style.opacity = '0';
        setTimeout(() => {
            celebrationPage.style.opacity = '1';
            celebrationPage.style.transition = 'opacity 1s ease-in-out';
        }, 100);
    });
});

document.querySelectorAll('.card').forEach(card=>{
    card.addEventListener('click',()=>{
        const url = card.getAttribute('data-url');
        if(url){
            window.location.href = url;
        }
        else{
            console.error("No Url Found");
        }
    });
});