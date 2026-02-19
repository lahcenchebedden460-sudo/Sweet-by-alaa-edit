const text = document.querySelector('.logo-text');

document.addEventListener('mousemove', (e) => {
    let x = (window.innerWidth / 2 - e.pageX) / 25;
    let y = (window.innerHeight / 2 - e.pageY) / 25;
    
    text.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    // يمكنك إضافة تنسيق CSS لـ .active لإظهار القائمة
});
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

document.querySelectorAll('.product-card').forEach((card) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});
const textContainer = document.querySelector('.sparkle-container');

function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.position = 'absolute';
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.top = Math.random() * 100 + '%';
    sparkle.style.fontSize = '12px';
    sparkle.style.color = '#f1c40f';
    sparkle.style.opacity = '0';
    sparkle.style.transition = 'opacity 0.5s';
    
    textContainer.appendChild(sparkle);
    
    setTimeout(() => { sparkle.style.opacity = '1'; }, 100);
    setTimeout(() => { sparkle.remove(); }, 1000);
}

// إنشاء بريق جديد كل نصف ثانية
setInterval(createSparkle, 500);
