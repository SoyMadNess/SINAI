// Contenido dinámico y funcionalidades adicionales

// Efecto de carga de página
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Reproducir animación al cargar
    const elements = document.querySelectorAll('.service-card, .galeria-item, .precio-card');
    elements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
    });
});

// Función para cambiar tema (opcional)
const toggleTheme = () => {
    const root = document.documentElement;
    const currentBg = getComputedStyle(root).getPropertyValue('--bg-dark');
    
    if (currentBg.includes('0a0a0a')) {
        root.style.setProperty('--bg-dark', '#1a1a1a');
        root.style.setProperty('--bg-darker', '#0f0f0f');
    } else {
        root.style.setProperty('--bg-dark', '#0a0a0a');
        root.style.setProperty('--bg-darker', '#050505');
    }
};

// Función para mostrar notificaciones
const showNotification = (message, type = 'info') => {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #0066ff, #00ffff);
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
};

// Animación de botones
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Efecto ripple en botones
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            left: ${x}px;
            top: ${y}px;
            animation: rippleEffect 0.6s ease-out;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Agregar estilos de animación al documento
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    
    @keyframes rippleEffect {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .loaded {
        opacity: 1;
    }
`;
document.head.appendChild(style);

// Contar visitantes (simulado)
let visitCount = localStorage.getItem('visitCount') || 0;
visitCount = parseInt(visitCount) + 1;
localStorage.setItem('visitCount', visitCount);

console.log(`👾 Visitas totales: ${visitCount}`);

// Función para validar email
const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

// Mejorar validación del formulario
const contactForm = document.querySelector('.contacto-form');
if (contactForm) {
    const emailInput = contactForm.querySelector('input[type="email"]');
    
    emailInput.addEventListener('blur', function() {
        if (this.value && !validateEmail(this.value)) {
            this.style.borderColor = '#ff0000';
            this.style.boxShadow = '0 0 10px rgba(255, 0, 0, 0.5)';
        } else {
            this.style.borderColor = '#0066ff';
            this.style.boxShadow = 'none';
        }
    });
}

// Generar efecto de clic en cualquier elemento interactivo
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
        // Efecto visual de clic
    }
});

// Log de información
console.log(`
╔═══════════════════════════════════════╗
║   Papeleria y Libreria SINAI!         ║
╚═══════════════════════════════════════╝
`);
