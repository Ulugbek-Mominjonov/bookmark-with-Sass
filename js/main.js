window.addEventListener('DOMContentLoaded', () => {
    let siteNav = document.querySelector('.sitenav__container'),
        togglerBtn = document.querySelector('.dropdown'),
        toggleMenu = document.querySelector('.sitenav__links'),
        logo = document.querySelector('.logo__img')

    if (togglerBtn){
        togglerBtn.addEventListener('click', () => {
            logo.classList.toggle('logo__img--toggle');
            togglerBtn.classList.toggle('dropdown--open')
            siteNav.classList.toggle('sitenav__container--open');
            toggleMenu.classList.toggle('sitenav__links--open')
        })
    }
})