document.addEventListener('DOMContentLoaded', function () {
    var selector = document.getElementById('langSelect');

    function canviarIdioma(idioma) {
        document.documentElement.lang = idioma;

        var elements = document.querySelectorAll('[i18n]');
        Array.prototype.forEach.call(elements, function (element) {
            var text = element.getAttribute('data-' + idioma);

            if (text !== null) {
                element.textContent = text;
            }
        });

        var placeholders = document.querySelectorAll('[data-placeholder-es], [data-placeholder-ca]');
        Array.prototype.forEach.call(placeholders, function (element) {
            var placeholder = element.getAttribute('data-placeholder-' + idioma);

            if (placeholder !== null) {
                element.setAttribute('placeholder', placeholder);
            }
        });

        try {
            localStorage.setItem('idioma', idioma);
        } catch (error) {
            return;
        }
    }

    if (selector) {
        var idiomaGuardado = selector.value;

        try {
            idiomaGuardado = localStorage.getItem('idioma') || selector.value;
        } catch (error) {
            idiomaGuardado = selector.value;
        }

        selector.value = idiomaGuardado;

        selector.addEventListener('change', function () {
            canviarIdioma(this.value);
        });

        canviarIdioma(idiomaGuardado);
    }
});
