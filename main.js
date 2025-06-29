var typed = new Typed(".text", {
   strings: ["Frontend Developer", "Web Developer","Full-Stack Developer"],
   typeSpeed: 100,
   backSpeed: 100,
   backDelay: 1000,
   loop: true
});

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (mobileMenuBtn && navbar) {
        mobileMenuBtn.addEventListener('click', function() {
            navbar.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navbar.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
                
                // Remove active class from all links
                navLinks.forEach(l => l.classList.remove('active'));
                // Add active class to clicked link
                this.classList.add('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navbar.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                navbar.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        });
    }
    
    // Active navigation based on scroll position
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveNav() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const correspondingNavLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (correspondingNavLink) {
                    correspondingNavLink.classList.add('active');
                }
            }
        });
    }
    
    // Update active nav on scroll
    window.addEventListener('scroll', updateActiveNav);
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed header
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Scroll animations for About Me section
const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

// Observe the About Me section
const aboutSection = document.querySelector('.about');
if (aboutSection) {
    observer.observe(aboutSection);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Top arrow scroll to top functionality
document.querySelector('.top').addEventListener('click', function(e) {
    e.preventDefault();
    // Check if the clicked element is the plus icon
    if (e.target.classList.contains('bx-plus')) {
        showDownloadPopup();
    } else {
        // Scroll to top for arrow icon
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
});

function showDownloadPopup() {
    // Create download popup HTML
    const popupHTML = `
        <div class="download-popup" id="downloadPopup">
            <div class="download-content">
                <h3>Download Resume</h3>
                <p>Choose your preferred format:</p>
                <div class="download-buttons">
                    <a href="#" class="download-btn pdf">
                        <i class='bx bxs-file-pdf'></i>
                        PDF Format
                    </a>
                    <a href="#" class="download-btn doc">
                        <i class='bx bxs-file-doc'></i>
                        Word Format
                    </a>
                </div>
                <span class="close-popup">&times;</span>
            </div>
        </div>
    `;

    // Add popup to page
    document.body.insertAdjacentHTML('beforeend', popupHTML);

    // Show popup
    const popup = document.getElementById('downloadPopup');
    popup.style.display = 'flex';

    // Close popup functionality
    const closeBtn = popup.querySelector('.close-popup');
    closeBtn.addEventListener('click', closeDownloadPopup);

    // Close popup when clicking outside
    popup.addEventListener('click', function(e) {
        if (e.target === popup) {
            closeDownloadPopup();
        }
    });

    // Close popup with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeDownloadPopup();
        }
    });
}

function closeDownloadPopup() {
    const popup = document.getElementById('downloadPopup');
    if (popup) {
        popup.remove();
    }
}

// Project modal functionality
const projectData = {
    project1: {
        title: " Online Laundry Management System",
        description: "The application was developed as a project for 1st Year 2nd semester, featuring a clean and efficient interface focused on employee usability.",
        contribution: "Cart Management",
        technologies: ["JavaScript", "PHP", "HTML", "CSS", "MySQL"],
        features: ["User-friendly cart functionality", "Dynamic item add/remove features", "Responsive design", "Database integration"]
    },
    project2: {
        title: "Online Hotel Reservation System",
        description: "This system was created as a 2nd Year 1st semester project with an emphasis on smooth and intuitive booking interfaces.",
        contribution: "Booking Management ",
        technologies: ["Java", "JavaScript", "HTML", "CSS","MySQL Workbench"],
        features: ["Reservation & cancellation features", "Real-time room availability", "Clean and intuitive user flow", "Admin panel for hotel management"]
    },
    project3: {
        title: " Online Glass Inventory Management System",
        description: "Developed in the 2nd Year 2nd semester, this inventory system focused on maintaining an efficient flow for inventory repairs and stock.", 
        contribution: "Maintenance and Repair",
        technologies: ["MERN Stack (MongoDB, Express, React, Node.js)", "HTML", "CSS"],
        features: ["Product Catalog Management", "Sales Management", "Customer Management", "Delivery Management","Employee Dashboard","Inventory Management","Reports & Analytics","Responsive User Interface","Secure Backend Integration"]
    },
    project4: {
        title: "Online Food Donation System",
        description: "Created for the 3rd Year 1st semester, this project aims to streamline the food donation process for individuals and organizations.",
        contribution: "Food Donation Submission Management",
        technologies: ["MERN Stack (MongoDB, Express, React, Node.js)", "HTML", "CSS"],
        features: ["Donor registration", "Food tracking", "Location services", "Community outreach"]
    },
    project5: {
        title: "Cooking Skill Sharing Platform",
        description: " Built as a 3rd Year 1st semester group project, the platform enables users to share and discover cooking skills and recipes interactively.",
        contribution: "User Interactivity & Engagement Features",
        technologies: ["Java(Spring Boot)", "React.js", "HTML", "CSS"],
        features: ["OAuth 2.0 Authentication Integration","Skill-Sharing Post System", "Interactive Community Feed", "User profiles", "Commenting & Reactions","Responsive Frontend Design","Backend with Spring Boot","Media Upload Support","Skill Discovery and Learning"]
    },
    project6: {
        title: "Mini Blog Shopping Cart",
        description: " This project focused on blending blogging and e-commerce functionality into one responsive web solution.",
        contribution: "All the features",
        technologies: ["JavaScript", "PHP", "HTML", "CSS", "MySQL"],
        features: ["Blog & product listing integration", "Shopping cart functionality", "Admin panel", "Category-based filtering"]
    },
    project8: {
        title: "Task App",
        description: "Developed a mobile application using Kotlin in Android Studio for managing tasks. Implemented features such as adding, editing,deleting, and searching notes with data stored locally using Shared Preferences.",
        technologies: ["Kotlin", "Android Studio", "Shared Preferences"],
        features: ["Task Creation & Management", "User-Friendly UI", "Responsive & Adaptive Layout"]
    }
};

// Add click event listeners to project links
document.querySelectorAll('.layer a').forEach((link, index) => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        // Map the index to the correct project key
        const projectKeys = ['project1', 'project2', 'project3', 'project4', 'project5', 'project6','project8'];
        const projectKey = projectKeys[index];
        const project = projectData[projectKey];
        if (project) {
            showProjectModal(project);
        }
    });
});

function showProjectModal(project) {
    // Create modal HTML
    const modalHTML = `
        <div class="modal" id="projectModal">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title">${project.title}</h3>
                    <span class="close">&times;</span>
                </div>
                <div class="modal-body">
                    <p>${project.description}</p>
                    ${project.title !== "Task App" ? `
                    <h4>My Contribution:</h4>
                    <p>${project.contribution}</p>
                    ` : ''}
                    <h4>Technologies Used:</h4>
                    <ul>
                        ${project.technologies.map(tech => `<li>${tech}</li>`).join('')}
                    </ul>
                    <h4>Key Features:</h4>
                    <ul>
                        ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `;

    // Add modal to page
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Show modal
    const modal = document.getElementById('projectModal');
    modal.style.display = 'block';

    // Close modal functionality
    const closeBtn = modal.querySelector('.close');
    closeBtn.addEventListener('click', closeModal);

    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.remove();
    }
}

// Floating Action Menu functionality
const fabButton = document.getElementById('fabButton');
const fabOptions = document.querySelector('.fab-options');

fabButton.addEventListener('click', function() {
    fabButton.classList.toggle('active');
    fabOptions.classList.toggle('show');
});

// Handle fab option clicks
document.querySelectorAll('.fab-option').forEach(option => {
    option.addEventListener('click', function() {
        const tooltip = this.getAttribute('data-tooltip');
        
        switch(tooltip) {
            case 'Download Resume':
                downloadResumePDF();
                break;
            case 'Contact Me':
                // Scroll to contact section
                const contactSection = document.querySelector('.contact');
                if (contactSection) {
                    contactSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
                break;
            case 'Portfolio':
                // Scroll to portfolio section
                const homeSection = document.querySelector('#home');
                if (homeSection) {
                    homeSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
                break;
        }
        
        // Close the menu after clicking an option
        fabButton.classList.remove('active');
        fabOptions.classList.remove('show');
    });
});

// Close menu when clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.closest('.floating-action-menu')) {
        fabButton.classList.remove('active');
        fabOptions.classList.remove('show');
    }
});

function downloadResumePDF() {
    // Method 1: Try direct download
    const link = document.createElement('a');
    link.href = 'src/Harshaka Herath.pdf';
    link.download = 'Harshaka_Herath_Resume.pdf';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Method 2: Alternative approach if first doesn't work
    setTimeout(() => {
        const link2 = document.createElement('a');
        link2.href = 'src/Harshaka Herath.pdf';
        link2.download = 'Harshaka_Herath_Resume.pdf';
        link2.setAttribute('download', 'Harshaka_Herath_Resume.pdf');
        link2.style.display = 'none';
        document.body.appendChild(link2);
        link2.click();
        document.body.removeChild(link2);
    }, 100);
}

// Contact form submission
document.querySelector('.contact-form form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data using name attributes
    const name = this.querySelector('input[name="name"]').value;
    const email = this.querySelector('input[name="email"]').value;
    const subject = this.querySelector('input[name="subject"]').value;
    const message = this.querySelector('textarea[name="message"]').value;
    
    // Validate form data
    if (!name || !email || !message) {
        alert('Please fill in all required fields (Name, Email, and Message)');
        return;
    }
    
    // Create email body
    const emailBody = `
Name: ${name}
Email: ${email}
Subject: ${subject || 'Contact Form Submission'}
Message: ${message}
    `;
    
    // Create mailto link
    const mailtoLink = `mailto:herathharshaka@gmail.com?subject=${encodeURIComponent(subject || 'Contact Form Submission')}&body=${encodeURIComponent(emailBody)}`;
    
    // Open default email client
    window.open(mailtoLink);
    
    // Show success message
    showContactSuccess();
    
    // Clear form
    this.reset();
});

function showContactSuccess() {
    // Create success message
    const successHTML = `
        <div class="contact-success" id="contactSuccess">
            <div class="success-content">
                <i class='bx bx-check-circle'></i>
                <h3>Message Sent!</h3>
                <p>Your message has been sent successfully. We'll get back to you soon!</p>
                <button class="close-success">OK</button>
            </div>
        </div>
    `;
    
    // Add to page
    document.body.insertAdjacentHTML('beforeend', successHTML);
    
    // Show success message
    const success = document.getElementById('contactSuccess');
    success.style.display = 'flex';
    
    // Close success message
    const closeBtn = success.querySelector('.close-success');
    closeBtn.addEventListener('click', closeContactSuccess);
    
    // Auto close after 5 seconds
    setTimeout(closeContactSuccess, 5000);
}

function closeContactSuccess() {
    const success = document.getElementById('contactSuccess');
    if (success) {
        success.remove();
    }
}

// Services popup functionality
const servicesData = {
    uiux: {
        title: "UI/UX Design",
        description: "Creating intuitive and visually appealing user experiences that enhance user engagement and satisfaction.",
        details: [
            "User Research & Analysis",
            "Wireframing & Prototyping",
            "Visual Design & Branding",
            "User Testing & Iteration",
            "Responsive Design Implementation",
            "Accessibility Compliance"
        ],
        tools: ["Figma"],
        benefits: [
            "Improved user engagement and satisfaction",
            "Reduced user errors and confusion",
            "Enhanced brand perception",
            "Increased conversion rates",
            "Better accessibility for all users"
        ]
    },
    frontend: {
        title: "Frontend Development",
        description: "Creating responsive and high-performing user interfaces that adapt to all devices and enhance the digital experience.",
        details: [
            "Pixel-perfect UI Implementation",
            "Responsive Web Design",
            "API Integration",
            "Cross-browser Compatibility",
            "Component Reusability & Optimization",
        ],
        tools: ["HTML, CSS, JavaScript (ES6+)", "React.js, Next.js", "Tailwind CSS, Bootstrap", "Git & GitHub", "Chrome DevTools"],
        benefits: [
            "Smooth and fast user interactions",
            "Better retention with responsive UI",
            "Modern, clean, and scalable code",
            "Improved frontend performance",
            "Compatible across all major browsers"
        ]
    },
    backend: {
        title: "Backend Development",
        description: "Powering your applications with secure, efficient, and scalable backend systems and APIs.",
        details: [
            "API Development & Integration",
            "Business Logic Implementation",
            "Database Management & Optimization",
            "Authentication & Authorization",
            "Caching & Background Jobs",
            "Deployment & Server Setup"
        ],
        tools: ["Node.js, Express.js", "Java, Spring Boot", "Python", "MongoDB, MySQL"],
        benefits: [
            "Reliable and secure backend functionality",
            "Optimized database queries and performance",
            "Clean and scalable server-side code",
            "Easy integration with frontend and third-party tools",
            "Stable infrastructure for your digital product"
        ]
    },
    mobile: {
        title: "Mobile App Development",
        description: "Designing and developing engaging mobile apps that deliver smooth performance and a native-like experience.",
        details: [
            "Cross-Platform App Development",
            "API Integration & Data Handling",
            "Offline Functionality & Caching",
            "Push Notifications",
            "App Store/Play Store Deployment",
            "UI/UX Design for Mobile"
        ],
        tools: ["React Native", "REST APIs", "JavaScript", "Android Studio"],
        benefits: [
            "Apps that work on both Android and iOS",
            "Cost-effective development",
            "Smooth and responsive user interfaces",
            "Real-time data syncing",
            "Scalable and maintainable codebase"
        ]
    },
    fullstack: {
        title: "Full-Stack Development",
        description: "Building end-to-end web applications with robust backend systems and dynamic, responsive frontends.",
        details: [
            "Full Application Architecture & Development",
            "RESTful API Design & Integration",
            "Database Design (SQL/NoSQL)",
            "Authentication & Authorization Systems",
            "DevOps & CI/CD Setup",
            "Performance Optimization"
        ],
        tools: ["MERN Stack (MongoDB, Express, React, Node.js)", "MySQL", "Git, GitHub Actions", "VS Code, Postman"],
        benefits: [
            "Scalable and maintainable applications",
            "Seamless data flow and backend logic",
            "Reduced time-to-market",
            "Secure and optimized performance",
            "End-to-end development from one provider"
        ]
    },
    qa: {
        title: "Quality Assurance",
        description: "Ensuring your product meets the highest standards through manual and automated testing processes.",
        details: [
            "Functional Testing (Manual & Automated)",
            "UI/UX Testing",
            "Bug Tracking & Reporting",
            "Cross-Device & Browser Testing",
            "Test Case Design & Execution",
            "Regression & Smoke Testing"
        ],
        tools: ["Selenium", "Postman"],
        benefits: [
            "Higher product stability",
            "Reduced bugs in production",
            "Better user trust and experience",
            "Faster time-to-market with fewer rollbacks",
            "Clear reporting and quality metrics"
        ]
    }
};

// Wait for DOM to be fully loaded before adding event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Add click event listeners to service "Learn More" buttons
    const serviceButtons = document.querySelectorAll('.read[data-service]');
    
    serviceButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const serviceKey = this.getAttribute('data-service');
            console.log('Button clicked - Service key:', serviceKey);
            
            // Check if service data exists
            if (servicesData && servicesData[serviceKey]) {
                console.log('Found service data for:', serviceKey);
                showServicesModal(servicesData[serviceKey]);
            } else {
                console.error('Service data not found for key:', serviceKey);
                console.log('Available services:', Object.keys(servicesData || {}));
            }
        });
    });
    
    console.log('Total service buttons found:', serviceButtons.length);
    serviceButtons.forEach((btn, index) => {
        console.log(`Button ${index + 1}:`, btn.getAttribute('data-service'));
    });
});

function showServicesModal(service) {
    console.log('Showing modal for service:', service.title);
    
    // Remove any existing modal first
    const existingModal = document.getElementById('servicesModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Create modal HTML with proper content
    const modalHTML = `
        <div class="services-modal" id="servicesModal">
            <div class="services-modal-content">
                <div class="services-modal-header">
                    <h3 class="services-modal-title">${service.title}</h3>
                    <span class="services-close" id="servicesClose">&times;</span>
                </div>
                <div class="services-modal-body">
                    <p>${service.description}</p>
                    
                    <h4>What I Offer:</h4>
                    <ul>
                        ${service.details.map(detail => `<li>${detail}</li>`).join('')}
                    </ul>
                    
                    <h4>Technologies & Tools:</h4>
                    <ul>
                        ${service.tools.map(tool => `<li>${tool}</li>`).join('')}
                    </ul>
                    
                    <h4>Benefits You'll Get:</h4>
                    <ul>
                        ${service.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `;

    // Add modal to page
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Show modal with a small delay to ensure DOM is ready
    setTimeout(() => {
        const modal = document.getElementById('servicesModal');
        if (modal) {
            modal.style.display = 'block';
            
            // Close modal functionality
            const closeBtn = document.getElementById('servicesClose');
            if (closeBtn) {
                closeBtn.addEventListener('click', closeServicesModal);
            }

            // Close modal when clicking outside
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    closeServicesModal();
                }
            });

            // Close modal with Escape key
            const escapeHandler = function(e) {
                if (e.key === 'Escape') {
                    closeServicesModal();
                    document.removeEventListener('keydown', escapeHandler);
                }
            };
            document.addEventListener('keydown', escapeHandler);
        }
    }, 10);
}

function closeServicesModal() {
    const modal = document.getElementById('servicesModal');
    if (modal) {
        modal.remove();
    }
}