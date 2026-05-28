document.addEventListener('DOMContentLoaded', function () {
    var carousels = document.querySelectorAll('.carousel');

    Array.prototype.forEach.call(carousels, function (carousel) {
        var slides = carousel.querySelectorAll('.slide');
        var dotsContainer = carousel.querySelector('.dots');
        var prevBtn = carousel.querySelector('.prev');
        var nextBtn = carousel.querySelector('.next');
        var current = 0;

        if (slides.length === 0 || !dotsContainer || !prevBtn || !nextBtn) {
            return;
        }

        Array.prototype.forEach.call(slides, function (_, index) {
            var dot = document.createElement('button');
            dot.type = 'button';

            if (index === 0) {
                dot.className = 'active';
                slides[index].classList.add('active');
            }

            dot.addEventListener('click', function () {
                showSlide(index);
            });

            dotsContainer.appendChild(dot);
        });

        var dots = dotsContainer.querySelectorAll('button');

        function showSlide(index) {
            slides[current].classList.remove('active');
            dots[current].classList.remove('active');

            current = (index + slides.length) % slides.length;

            slides[current].classList.add('active');
            dots[current].classList.add('active');
        }

        prevBtn.addEventListener('click', function () {
            showSlide(current - 1);
        });

        nextBtn.addEventListener('click', function () {
            showSlide(current + 1);
        });

        setInterval(function () {
            showSlide(current + 1);
        }, 5000);
    });
});
