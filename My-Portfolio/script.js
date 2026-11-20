

// تحديد روابط القائمة
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        navLinks.forEach(function(item) {
            item.classList.remove('active');
        });

        link.classList.add('active');
    });
});


// رسالة التواصل
const contactButton = document.querySelector('.nav-button');

contactButton.addEventListener('click', function() {
    alert('أهلاً بك! يسعدني تواصلك معي.');
});


// رسالة البريد الإلكتروني
const emailButton = document.querySelector('.contact .main-button');

emailButton.addEventListener('click', function() {
    alert('سيتم فتح تطبيق البريد الإلكتروني للتواصل.');
});


// معلومات المشاريع
const projectsDetails = [
    {
        title: 'موقع مطعم',
        description: 'تصميم موقع إلكتروني لمطعم يهدف إلى عرض هوية المطعم وتقديم تجربة سهلة للزوار.',
        features: [
            'عرض قائمة الطعام',
            'التعريف بالمطعم وخدماته',
            'تصميم واجهة جذابة ومنظمة'
        ]
    },
    {
        title: 'بوابة جامعية',
        description: 'تصميم بوابة طلابية تساعد على تنظيم المعلومات الجامعية وتسهيل الوصول إليها.',
        features: [
            'عرض المعلومات الجامعية',
            'قسم للمواد الدراسية',
            'عرض الإعلانات والجدول الدراسي'
        ]
    },
    {
        title: 'موقع صالون تجميل',
        description: 'تصميم موقع تعريفي لصالون تجميل يعرض الخدمات بطريقة أنيقة.',
        features: [
            'عرض خدمات الصالون',
            'التعريف بالخدمات',
            'تنسيق بصري هادئ وأنيق'
        ]
    },
    {
        title: 'تصميم واجهة شخصية',
        description: 'تصور لواجهة Portfolio تعرض المهارات والأعمال بطريقة احترافية.',
        features: [
            'قسم تعريفي',
            'عرض المهارات',
            'معرض للمشاريع'
        ]
    },
    {
        title: 'واجهة تطبيق',
        description: 'تصور أولي لواجهة تطبيق إلكتروني يركز على سهولة الاستخدام وتنظيم المحتوى.',
        features: [
            'تنظيم عناصر الواجهة',
            'تصميم واضح وبسيط',
            'الاهتمام بتجربة المستخدم'
        ]
    },
    {
        title: 'موقع أعمال',
        description: 'تصميم صفحة تعريفية لمشروع أو شركة بهدف عرض الخدمات والمعلومات.',
        features: [
            'التعريف بالمشروع',
            'عرض الخدمات',
            'قسم للتواصل'
        ]
    }
];


// إنشاء نافذة تفاصيل المشاريع
const modal = document.createElement('div');
modal.className = 'project-modal';

modal.innerHTML = `
    <div class="modal-content">
        <button class="close-modal">&times;</button>
        <h2 class="modal-title"></h2>
        <p class="modal-description"></p>
        <h3>أبرز المميزات</h3>
        <ul class="modal-features"></ul>
    </div>
`;

document.body.appendChild(modal);


// تحديد عناصر النافذة
const modalTitle = modal.querySelector('.modal-title');
const modalDescription = modal.querySelector('.modal-description');
const modalFeatures = modal.querySelector('.modal-features');
const closeModal = modal.querySelector('.close-modal');


// فتح التفاصيل عند الضغط على صورة المشروع
const projectImages = document.querySelectorAll('.project-card img');

projectImages.forEach(function(image, index) {

    image.addEventListener('click', function() {

        const project = projectsDetails[index];

        modalTitle.textContent = project.title;
        modalDescription.textContent = project.description;

        modalFeatures.innerHTML = '';

        project.features.forEach(function(feature) {
            const item = document.createElement('li');
            item.textContent = feature;
            modalFeatures.appendChild(item);
        });

        modal.classList.add('show');
    });

});


// إغلاق النافذة
closeModal.addEventListener('click', function() {
    modal.classList.remove('show');
});


// الإغلاق عند الضغط خارج النافذة
modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.classList.remove('show');
    }
});


// الإغلاق باستخدام زر Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        modal.classList.remove('show');
    }
});
