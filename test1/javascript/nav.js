document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.navbar-links');

    const navbarContainer = document.querySelector('.navbar-container');
    const homeSection = document.querySelector('#home-section');
    const homeHeight = homeSection.offsetHeight;

    window.addEventListener('scroll', () => {
        if (window.scrollY > homeHeight * 0.8) { // Après 80% de la section home
            navbarContainer.classList.add('scrolled');
        } else {
            navbarContainer.classList.remove('scrolled');
        }
    });

    function isMobile() {
        return window.innerWidth <= 768;
    }

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            if (isMobile()) {
                navLinks.classList.toggle('active');
                hamburger.classList.toggle('active');
            }
        });

        document.querySelectorAll('.navbar-links a').forEach(function(link){
            link.addEventListener('click', function(){ 
                if(isMobile()){
                    navLinks.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            });
        });
    }

    /*WINDOWS RESIZEMENT HANDLER*/
    window.addEventListener('resize', function(){
        if(!isMobile() && navLinks && navLinks.classList.contains('active')){
            navLinks.classList.remove('active');
            if(hamburger) hamburger.classList.remove('active');
        }
    });
});



