"use strict"

window.onload = () => {
    const  
        rootWrapper        = document.getElementById('root_wrapper'),
        openSidebarBtn     = document.getElementById('open_sidebar'),
        fakeOpenSidebar    = document.getElementById('open_sidebar_fake'),
        mobileSidebarClose = document.getElementById('mobile_close_sidebar')

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
}