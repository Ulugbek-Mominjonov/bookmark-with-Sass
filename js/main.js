window.addEventListener('DOMContentLoaded', () => {
    // TOGLER 
    let siteNav = document.querySelector('.sitenav__container'),
        togglerBtn = document.querySelector('.dropdown'),
        toggleMenu = document.querySelector('.sitenav__links'),
        logo = document.querySelector('.logo__img');

    if (togglerBtn){
        togglerBtn.addEventListener('click', () => {
            logo.classList.toggle('logo__img--toggle');
            togglerBtn.classList.toggle('dropdown--open');
            siteNav.classList.toggle('sitenav__container--open');
            toggleMenu.classList.toggle('sitenav__links--open');
        })
    };

    // TABS 
    let tabsItem = document.querySelectorAll('.tabs__item'),
        tabsLink = document.querySelectorAll('.tabs__link'),
        tabsPanels = document.querySelectorAll('.panel')

    tabsLink.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            tabsItem.forEach(item => {
                item.classList.remove('tabs__item--active');
            });
            
            link.parentElement.classList.add('tabs__item--active');

            tabsPanels.forEach(panel => {
                panel.classList.remove('panel--active');
            })
            document.querySelector(link.getAttribute('href')).classList.add('panel--active');
        })
    });

    // ADD MARGIN FOR EXTENSION 
    // let extensionItem = document.querySelectorAll('.extension__item');
    // if(window.innerWidth > 992){
    //     console.log(window.innerWidth);
    //     let defaultMargin = 0;
    //     let stepMargin = 40;
    //     function addMargin () {
    //         extensionItem.forEach(item => {
    //             item.style.marginTop = `${defaultMargin}px`;
    //             defaultMargin += stepMargin;
    //         })  
    //     }
    //     addMargin();
    // }
    // DOTS 
    let dots = document.querySelectorAll('.dots');
    function createDot (){
        dots.forEach(item => {
            for (let i = 0; i < 17; i++) {
                let dot = document.createElement('div');
                dot.classList.add('dot');
                item.appendChild(dot); 
            }
        })
    }
    createDot()

})