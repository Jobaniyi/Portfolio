// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic section highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

// Light/Dark mode toggle
const toggleSwitch = document.querySelector('#theme-switch');
toggleSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});

// Typing animation
const typingElement = document.querySelector('.typing');
if (typingElement) {
    const texts = ['STEM Consultant', 'Web Developer', 'Tech Enthusiast'];
    let i = 0, j = 0, currentText = '', isDeleting = false;

    function type() {
        if (i < texts.length) {
            if (!isDeleting && j <= texts[i].length) {
                currentText = texts[i].substring(0, j++);
                typingElement.textContent = currentText;
            }

            if (isDeleting && j > 0) {
                currentText = texts[i].substring(0, j--);
                typingElement.textContent = currentText;
            }

            if (j === texts[i].length && !isDeleting) {
                isDeleting = true;
                setTimeout(type, 1000);
            } else if (j === 0 && isDeleting) {
                isDeleting = false;
                i++;
                if (i === texts.length) i = 0;
            }

            setTimeout(type, isDeleting ? 50 : 100);
        }
    }

    type();
}
