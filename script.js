// High-performance State Management
function navigateTo(pageId) {
    const sections = document.querySelectorAll('.page-section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Clean UI state
    sections.forEach(s => s.classList.remove('active'));
    navLinks.forEach(l => {
        l.classList.remove('active-link', 'text-forest');
        l.classList.add('text-gray-500');
    });

    // Activate target
    const targetSection = document.getElementById(pageId);
    if (targetSection) {
        targetSection.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Update mobile menu UI
    document.getElementById('mobile-menu').classList.add('hidden');
}

// Mobile Menu Logic with Backdrop guard
const menuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn) {
    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileMenu.classList.toggle('hidden');
    });
}

document.addEventListener('click', () => {
    if (mobileMenu) mobileMenu.classList.add('hidden');
});

// Form Logic
function handleForm(e) {
    e.preventDefault();
    const form = document.getElementById('contactForm');
    const success = document.getElementById('successMessage');
    
    form.style.opacity = '0.5';
    form.style.pointerEvents = 'none';
    
    setTimeout(() => {
        form.classList.add('hidden');
        success.classList.remove('hidden');
    }, 1000);
}

// Scroll listener for Nav transparency
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('bg-white/95', 'shadow-sm');
        nav.classList.remove('bg-white/80');
    } else {
        nav.classList.remove('shadow-sm');
        nav.classList.add('bg-white/80');
    }
});