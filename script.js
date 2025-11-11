// Theme Management
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Initialize theme
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    html.setAttribute('data-theme', savedTheme);
}

initTheme();

// Toggle theme
themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Typewriter Effect
const typewriterElement = document.getElementById('typewriter');
const roles = ['CAD Engineer', 'Automation Specialist', 'Mechanical Engineer'];
let currentRoleIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

function typewriter() {
    const currentRole = roles[currentRoleIndex];
    
    if (!isDeleting && currentCharIndex <= currentRole.length) {
        typewriterElement.textContent = currentRole.substring(0, currentCharIndex);
        currentCharIndex++;
        setTimeout(typewriter, 100);
    } else if (isDeleting && currentCharIndex >= 0) {
        typewriterElement.textContent = currentRole.substring(0, currentCharIndex);
        currentCharIndex--;
        setTimeout(typewriter, 50);
    } else if (!isDeleting && currentCharIndex > currentRole.length) {
        isDeleting = true;
        setTimeout(typewriter, 2000);
    } else if (isDeleting && currentCharIndex < 0) {
        isDeleting = false;
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;
        setTimeout(typewriter, 500);
    }
}

typewriter();

// Hero Background Animation
const heroBackground = document.getElementById('heroBackground');
let mouseX = 50;
let mouseY = 50;

document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) * 100;
    mouseY = (e.clientY / window.innerHeight) * 100;
    updateHeroBackground();
});

function updateHeroBackground() {
    const theme = html.getAttribute('data-theme');
    if (theme === 'dark') {
        heroBackground.style.background = 
            `radial-gradient(circle at ${mouseX}% ${mouseY}%, rgba(0, 240, 255, 0.3) 0%, rgba(176, 38, 255, 0.2) 50%, transparent 70%)`;
    } else {
        heroBackground.style.background = 
            `radial-gradient(circle at ${mouseX}% ${mouseY}%, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 50%, transparent 70%)`;
    }
}

updateHeroBackground();

// Particle Effect
const heroParticles = document.getElementById('heroParticles');

function createParticles() {
    const particleCount = 50;
    const theme = html.getAttribute('data-theme');
    const particleColor = theme === 'dark' ? '#06b6d4' : '#3b82f6';
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.background = particleColor;
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        heroParticles.appendChild(particle);
    }
}

createParticles();

// Space Theme - Stars and Planets
function createSpaceTheme() {
    const starsContainer = document.getElementById('starsContainer');
    const planetsContainer = document.getElementById('planetsContainer');
    
    if (!starsContainer || !planetsContainer) return;
    
    // Create stars - reduce count on mobile for performance
    const starCount = window.innerWidth <= 768 ? 100 : 200;
    const sizes = ['small', 'medium', 'large'];
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = `star ${sizes[Math.floor(Math.random() * sizes.length)]}`;
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (Math.random() * 2 + 2) + 's';
        starsContainer.appendChild(star);
    }
    
    // Create planets
    const planets = [
        { class: 'planet-1', element: document.createElement('div') },
        { class: 'planet-2', element: document.createElement('div') },
        { class: 'planet-3', element: document.createElement('div') },
        { class: 'planet-4', element: document.createElement('div') }
    ];
    
    planets.forEach(planet => {
        planet.element.className = `planet ${planet.class}`;
        planetsContainer.appendChild(planet.element);
    });
}

// Initialize space theme
createSpaceTheme();

// Skills Data
const skills = [
    { name: 'UG-NX', icon: 'fas fa-cog', level: 90, color: '#06b6d4' },
    { name: 'Teamcenter', icon: 'fas fa-cog', level: 85, color: '#3b82f6' },
    { name: 'Python', icon: 'fab fa-python', level: 80, color: '#fbbf24' },
    { name: 'Excel VBA', icon: 'fas fa-file-excel', level: 90, color: '#10b981' },
    { name: 'Power Query', icon: 'fas fa-chart-line', level: 85, color: '#9333ea' },
    { name: 'Power BI', icon: 'fas fa-chart-bar', level: 80, color: '#f97316' },
    { name: 'PLM Systems', icon: 'fas fa-sitemap', level: 85, color: '#ec4899' },
    { name: 'SAP', icon: 'fas fa-database', level: 75, color: '#3b82f6' },
    { name: 'JAVA', icon: 'fab fa-java', level: 70, color: '#f97316' },
    { name: 'Git & GitHub', icon: 'fab fa-github', level: 75, color: '#9ca3af' },
];

// Render Skills
function renderSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    skillsGrid.innerHTML = skills.map((skill, index) => `
        <div class="skill-card glass" style="transition-delay: ${index * 0.05}s">
            <div class="skill-icon" style="color: ${skill.color}">
                <i class="${skill.icon}"></i>
            </div>
            <h4 class="skill-name">${skill.name}</h4>
            <div class="skill-progress">
                <div class="skill-progress-bar" data-level="${skill.level}" style="background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)"></div>
            </div>
            <p class="skill-level">${skill.level}%</p>
        </div>
    `).join('');
    
    // Observe skill cards for scroll animations
    setTimeout(() => {
        document.querySelectorAll('.skill-card').forEach(card => {
            scrollAnimationObserver.observe(card);
        });
    }, 100);
}

// Call renderSkills to populate the skills section
renderSkills();

// Enhanced Scroll Animations (defined early for use in render functions)
const scrollAnimationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Remove observer after animation to improve performance
            scrollAnimationObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Animate skill progress bars on scroll
const skillProgressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target.querySelector('.skill-progress-bar');
            if (progressBar) {
                const level = progressBar.getAttribute('data-level');
                setTimeout(() => {
                    progressBar.style.width = level + '%';
                }, 300);
            }
        }
    });
}, { threshold: 0.1 });

// Observe skill cards for progress bar animation (will be called after renderSkills)
setTimeout(() => {
    document.querySelectorAll('.skill-card').forEach(card => {
        skillProgressObserver.observe(card);
    });
}, 200);

// Projects Data

const projects = [
    {
        id: 1,
        title: 'Automation & Reporting System with Aras PLM',
        description: 'Excel tool integrated with Aras PLM to automate data fetching and task allocation',
        longDescription: 'Built an Excel tool integrated with Aras PLM to automate real-time data fetching and task allocation based on resource availability, with interactive dashboards for tracking progress. Used Excel VBA for automation, Aras Innovator API for data integration, and Power Query for data transformation. This solution saved approximately 35+ hours/monthly by reducing manual data extraction, improving accuracy, and enabling real-time reporting.',
        tags: ['Automation', 'PLM', 'Excel VBA'],
        technologies: ['Excel VBA', 'Aras PLM API', 'Power Query', 'Power BI'],
    },
    {
        id: 2,
        title: 'Excel Automation Systems',
        description: 'Automated Excel reporting systems saving 20+ hours/month',
        longDescription: 'Developed automated Excel reporting systems using VBA and Power Query that streamlined data processing workflows. Created dashboards in Excel & Power BI for pricing and sales performance tracking. This automation significantly reduced manual work and improved data accuracy across multiple departments.',
        tags: ['Automation', 'Excel', 'VBA'],
        technologies: ['Excel VBA', 'Power Query', 'Power BI', 'Excel'],
    },
    {
        id: 3,
        title: 'Marine Engine Component Design',
        description: 'Designed and analyzed marine engine components and piping systems',
        longDescription: 'Designed and analyzed marine engine components and piping systems for optimal performance. Created detailed GD&T-compliant production drawings and managed BOMs using Teamcenter PLM. Collaborated with international teams for design support, quality checks, and project planning.',
        tags: ['CAD Design', 'PLM', 'Manufacturing'],
        technologies: ['UG-NX', 'Teamcenter', 'GD&T', 'BOM Management'],
    },
    {
        id: 4,
        title: 'NPD Project Management System',
        description: 'Managed new product development projects with cross-functional coordination',
        longDescription: 'Managed NPD projects by coordinating with cross-functional teams including Customer, Purchase, R&D, Store & Costing departments. Managed client communication and new business RFQ tracking via PLM. Worked on cost estimation, RM pricing, new development costs, manufacturing costs, and SAP-based data processing.',
        tags: ['Project Management', 'PLM', 'SAP'],
        technologies: ['PLM Tools', 'SAP', 'Excel', 'Project Management'],
    },

    {
    id: 5,
    title: 'Portfolio Generator',
    description: 'Generate a professional portfolio website instantly from your resume — no coding required.',
    longDescription: 'Created an AI-powered portfolio generator that builds a complete personal portfolio website in minutes. Users can upload their resume and profile photo, and the system automatically extracts data such as projects, experience, and skills using the Gemini API. The app then generates a responsive HTML portfolio with modern UI, TailwindCSS animations, and dark/light themes. This tool empowers non-developers to create sleek, professional portfolios without writing a single line of code.',
    tags: ['AI Automation', 'Web Development', 'Portfolio Builder'],
    technologies: ['HTML', 'Tailwind CSS', 'JavaScript', 'Gemini API', 'PDF.js'],
    link: 'portfolio-generator.html', // change this if your live URL differs
    demoLabel: 'View Live Demo'
}




];

// Experience/Timeline Data
const experiences = [
    {
        company: 'MAN Energy Solutions',
        role: 'CAD Engineer',
        location: 'Chh. Sambhajinagar, India',
        period: 'Jun 2024 - Present',
        description: 'Designing marine engine components and creating automation solutions.',
        achievements: [
            'Saved 35+ hours/month through automation',
            'Created PLM-integrated automation tools',
            'Trained 50+ colleagues in Excel automation',
            'Collaborated with international teams'
        ],
        technologies: ['UG-NX', 'Teamcenter', 'Excel VBA', 'Power Query', 'Aras PLM']
    },
    {
        company: 'Endurance Technologies Ltd',
        role: 'Management Trainee Engineer',
        location: 'Chh. Sambhajinagar, India',
        period: 'Jan 2023 - Jun 2024',
        description: 'Managed NPD projects and created automation systems.',
        achievements: [
            'Automated Excel reporting saving 20+ hours/month',
            'Created Power BI dashboards for analytics',
            'Managed cross-functional team coordination',
            'Improved data accuracy by 90%'
        ],
        technologies: ['SAP', 'Excel VBA', 'Power BI', 'PLM Tools']
    }
];

// Render Timeline
function renderTimeline() {
    const timeline = document.getElementById('timeline');
    if (!timeline) return;
    
    timeline.innerHTML = experiences.map((exp, index) => `
        <div class="timeline-item scroll-fade-in" style="transition-delay: ${index * 0.2}s">
            <div class="timeline-marker">
                <div class="timeline-dot"></div>
                ${index < experiences.length - 1 ? '<div class="timeline-line"></div>' : ''}
            </div>
            <div class="timeline-content glass">
                <div class="timeline-header">
                    <div>
                        <h3 class="timeline-role">${exp.role}</h3>
                        <p class="timeline-company">${exp.company}</p>
                    </div>
                    <span class="timeline-period">${exp.period}</span>
                </div>
                <p class="timeline-location">
                    <i class="fas fa-map-marker-alt"></i> ${exp.location}
                </p>
                <p class="timeline-description">${exp.description}</p>
                <div class="timeline-achievements">
                    <h4>Key Achievements:</h4>
                    <ul>
                        ${exp.achievements.map(ach => `<li><i class="fas fa-check-circle"></i> ${ach}</li>`).join('')}
                    </ul>
                </div>
                <div class="timeline-tech">
                    ${exp.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
    
    // Observe timeline items
    document.querySelectorAll('.timeline-item').forEach(item => {
        scrollAnimationObserver.observe(item);
    });
}

renderTimeline();

// Render Projects with Enhanced Cards
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    const projectMetrics = [
        { id: 1, hours: '35+', accuracy: '90%', efficiency: '3x' },
        { id: 2, hours: '20+', accuracy: '85%', efficiency: '2.5x' },
        { id: 3, components: '50+', drawings: '100+', collaboration: 'Global' },
        { id: 4, projects: '15+', teams: '5', cost: '30%' }
    ];
    
    projectsGrid.innerHTML = projects.map((project, index) => {
        const metrics = projectMetrics[index] || {};
        return `
        <div class="project-card scroll-slide-up" data-project-id="${project.id}" style="transition-delay: ${index * 0.1}s">
            <div class="project-image">
                <div class="project-number">0${project.id}</div>
                <div class="project-overlay"></div>
            </div>
            <div class="project-content">
                <div class="project-header">
                    <h3 class="project-title">${project.title}</h3>
                    <span class="project-category">${project.tags[0]}</span>
                </div>
                <p class="project-description">${project.description}</p>
                ${Object.keys(metrics).length > 0 ? `
                <div class="project-metrics">
                    ${metrics.hours ? `<div class="metric"><i class="fas fa-clock"></i><span>${metrics.hours}hrs saved</span></div>` : ''}
                    ${metrics.accuracy ? `<div class="metric"><i class="fas fa-check-circle"></i><span>${metrics.accuracy} accuracy</span></div>` : ''}
                    ${metrics.efficiency ? `<div class="metric"><i class="fas fa-chart-line"></i><span>${metrics.efficiency} faster</span></div>` : ''}
                    ${metrics.components ? `<div class="metric"><i class="fas fa-cogs"></i><span>${metrics.components} components</span></div>` : ''}
                    ${metrics.projects ? `<div class="metric"><i class="fas fa-folder"></i><span>${metrics.projects} projects</span></div>` : ''}
                </div>
                ` : ''}
                <div class="project-tags">
                    ${project.tags.slice(0, 3).map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link" onclick="event.stopPropagation()"><i class="fab fa-github"></i> Code</a>` : ''}
                    ${(project.liveUrl || project.link) ? `<a href="${project.liveUrl || project.link}" target="_blank" rel="noopener noreferrer" class="project-link" onclick="event.stopPropagation()"><i class="fas fa-external-link-alt"></i> ${project.demoLabel || 'Live'}</a>` : ''}

                    <button class="project-link view-details" onclick="event.stopPropagation(); const projectId = ${project.id}; openProjectModal(projectId);">
                        <i class="fas fa-info-circle"></i> Details
                    </button>
                </div>
            </div>
        </div>
    `;
    }).join('');
    
    // Add click handlers
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            const projectId = parseInt(card.getAttribute('data-project-id'));
            openProjectModal(projectId);
        });
        scrollAnimationObserver.observe(card);
    });
}

// Call renderProjects to populate the projects section
renderProjects();

// Project Modal
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

function openProjectModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;
    
    modalBody.innerHTML = `
        <h3 class="modal-title">${project.title}</h3>
        <p class="modal-description">${project.longDescription}</p>
        <div class="modal-technologies">
            <h4>Technologies</h4>
            <div class="modal-tech-tags">
                ${project.technologies.map(tech => `<span class="project-tag">${tech}</span>`).join('')}
            </div>
        </div>
        <div class="modal-buttons">
            ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary"><i class="fab fa-github"></i> View Code</a>` : ''}
            ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary"><i class="fas fa-external-link-alt"></i> Visit Site</a>` : ''}
        </div>
    `;
    
    modal.classList.add('active');
}

function closeProjectModal() {
    modal.classList.remove('active');
}

modalClose.addEventListener('click', closeProjectModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeProjectModal();
    }
});

// Tech Stack data removed - using skills data instead

// Tech Stack rendering removed - now using skills section only

// Tech items are now handled by the main scrollAnimationObserver

// Contact Form
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };
    
    console.log('Form submitted:', formData);
    
    // Show success message
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Message Sent! ✓';
    submitButton.disabled = true;
    
    // Reset form
    setTimeout(() => {
        contactForm.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 3000);
});

// Smooth scroll is handled below with offset

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Scroll animations for fade-in-left and fade-in-right are handled by scrollAnimationObserver

// Navbar scroll effect with parallax
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        navbar.style.backdropFilter = 'blur(15px)';
    } else {
        navbar.style.boxShadow = 'none';
        navbar.style.backdropFilter = 'blur(10px)';
    }
    
    lastScroll = currentScroll;
});

// Magnetic Button Effect
function addMagneticEffect(element) {
    let baseTransform = '';
    
    element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        const magneticX = x * 0.15;
        const magneticY = y * 0.15;
        
        element.style.transform = `translate(${magneticX}px, ${magneticY}px) scale(1)`;
        baseTransform = `translate(${magneticX}px, ${magneticY}px)`;
    });
    
    element.addEventListener('mouseleave', () => {
        element.style.transform = 'translate(0, 0) scale(1)';
        baseTransform = '';
    });
}

// Apply magnetic effect to buttons
document.querySelectorAll('.btn').forEach(btn => {
    addMagneticEffect(btn);
});

// Parallax Effect for Sections
function initParallax() {
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            const speed = 0.5;
            
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const yPos = -(rect.top * speed);
                section.style.transform = `translateY(${yPos * 0.1}px)`;
            }
        });
    });
}

initParallax();

// Smooth scroll with offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Ripple Effect for Buttons
function createRipple(e) {
    const button = e.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', createRipple);
});

// Handle Hero Image
const heroImage = document.getElementById('heroImage');
if (heroImage) {
    heroImage.addEventListener('error', function() {
        // If image fails to load, create a placeholder gradient
        this.style.display = 'none';
        const placeholder = document.createElement('div');
        placeholder.className = 'hero-image';
        placeholder.style.background = 'var(--accent-gradient)';
        placeholder.style.display = 'flex';
        placeholder.style.alignItems = 'center';
        placeholder.style.justifyContent = 'center';
        placeholder.style.fontSize = '4rem';
        placeholder.style.color = 'rgba(255, 255, 255, 0.8)';
        placeholder.innerHTML = '<i class="fas fa-user"></i>';
        this.parentElement.insertBefore(placeholder, this);
    });
}

// Observe all scroll animation elements
function initScrollAnimations() {
    // Observe section headers
    document.querySelectorAll('.section-header').forEach(header => {
        scrollAnimationObserver.observe(header);
    });
    
    // Observe scroll-fade-in elements
    document.querySelectorAll('.scroll-fade-in').forEach(el => {
        scrollAnimationObserver.observe(el);
    });
    
    // Observe scroll-slide-up elements (projects)
    document.querySelectorAll('.scroll-slide-up').forEach((el, index) => {
        if (!el.style.transitionDelay) {
            el.style.transitionDelay = `${index * 0.1}s`;
        }
        scrollAnimationObserver.observe(el);
    });
    
    // Observe skill cards with stagger
    document.querySelectorAll('.skill-card').forEach((card, index) => {
        if (!card.classList.contains('visible')) {
            scrollAnimationObserver.observe(card);
        }
    });
    
    // Observe tech items with stagger
    document.querySelectorAll('.tech-item').forEach((item, index) => {
        if (!item.classList.contains('visible')) {
            scrollAnimationObserver.observe(item);
        }
    });
}

// Initialize scroll animations on page load
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
});

// Re-initialize after dynamic content loads
setTimeout(() => {
    initScrollAnimations();
}, 500);

// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Update particles on theme change
themeToggle.addEventListener('click', () => {
    setTimeout(() => {
        heroParticles.innerHTML = '';
        createParticles();
        updateHeroBackground();
    }, 300);
});
