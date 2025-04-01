const experienciaButton = document.getElementById('experienciaNav');
const proyectosButton = document.getElementById('proyectosNav');
const sobreMiButton = document.getElementById('sobreMiNav');
const tecnologiasButton = document.getElementById('tecnologiasNav');

const experienciaDiv = document.getElementById('experiencia');
const proyectosDiv = document.getElementById('proyectos');
const sobreMiDiv = document.getElementById('sobre-mi');
const tecnologiasDiv = document.getElementById('tecnologias');

window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
        document.getElementById('backgroundHeader').classList.add('bg-white/60', 'backdrop-blur-3xl', 'py-2', 'px-5');
    } else {
        document.getElementById('backgroundHeader').classList.remove('bg-white/60', 'backdrop-blur-3xl', 'py-2', 'px-5');
    }

    if (isElementInViewport(experienciaDiv)) {
        experienciaButton.classList.add('text-yellow-400');

        proyectosButton.classList.remove('text-yellow-400');
        sobreMiButton.classList.remove('text-yellow-400');
        tecnologiasButton.classList.remove('text-yellow-400');
    } else if (isElementInViewport(proyectosDiv)) {
        proyectosButton.classList.add('text-yellow-400');

        experienciaButton.classList.remove('text-yellow-400');
        sobreMiButton.classList.remove('text-yellow-400');
        tecnologiasButton.classList.remove('text-yellow-400');
    } else if (isElementInViewport(tecnologiasDiv)) {
        tecnologiasButton.classList.add('text-yellow-400');

        experienciaButton.classList.remove('text-yellow-400');
        sobreMiButton.classList.remove('text-yellow-400');
        proyectosButton.classList.remove('text-yellow-400');
    }
    else if (isElementInViewport(sobreMiDiv)) {
        sobreMiButton.classList.add('text-yellow-400');

        experienciaButton.classList.remove('text-yellow-400');
        proyectosButton.classList.remove('text-yellow-400');
        tecnologiasButton.classList.remove('text-yellow-400');
    }
});

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}