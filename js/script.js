document.addEventListener('DOMContentLoaded', function() {
    const bannerSlider = document.querySelector('.hero__slider');
    const servicesItems = document.querySelectorAll('.services__item');
    const servicesPhotos = document.querySelectorAll('.services__photo');
    const partnersSlider = document.querySelector('.partners__slider');

    if (bannerSlider) {
        new Swiper(bannerSlider, {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
            slidesPerView: 1,
            autoplay: {
                delay: 5000,
                stopOnLastSlide: false,
            },
            speed: 1000,
            loop: true
        })
    }

    if (servicesItems && servicesPhotos) {
        servicesItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                servicesItems.forEach(item => item.classList.remove('active'));
                servicesPhotos.forEach(photo => photo.classList.remove('active'));
                item.classList.add('active');
                servicesPhotos[index].classList.add('active');
            });
        });
    }
    
    if (partnersSlider) {
        new Swiper(partnersSlider, {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
            slidesPerView: 3,
            centeredSlides: true,
            loop: true
        })
    }
})