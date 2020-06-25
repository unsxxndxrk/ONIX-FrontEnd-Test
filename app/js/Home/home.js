const  
    rootWrapper        = document.getElementById('root_wrapper'),
    openSidebarBtn     = document.getElementById('open_sidebar'),
    fakeOpenSidebar    = document.getElementById('open_sidebar_fake'),
    mobileSidebarClose = document.getElementById('mobile_close_sidebar'),
    menuItems          = document.querySelectorAll('.header__nav-list-item-link'),
    containers         = document.querySelectorAll('.main-container'),
    main               = document.getElementById('main')

const activateMenuItem = event => {
    main.innerHTML = content[event.target.getAttribute('data-target')]

    setTimeout(() => {
        document.getElementById(event.target.getAttribute('data-target'))
            .classList.add('active')
    }, 250)

    menuItems.forEach((menuItem) => {
        if (menuItem.classList.contains('header__nav-li_active')) {
            menuItem.classList.remove('header__nav-li_active')
            return
        }
    })
    event.target.classList.add('header__nav-li_active')
}

menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', activateMenuItem)
})

const closeSidebar = () => {
    openSidebarBtn.checked = false
    rootWrapper.classList.remove('active')
    fakeOpenSidebar.classList.remove('active')
}

openSidebarBtn.onclick = event => {
    if (event.target.checked) {
        rootWrapper.classList.add('active')
        fakeOpenSidebar.classList.add('active')
    } else { closeSidebar() }
}

mobileSidebarClose.onclick = () => { closeSidebar() }

rootWrapper.onclick = event => {
    event.target.id !== 'open_sidebar' ? closeSidebar() : ''
}