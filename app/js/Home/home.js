"use strict"

window.onload = () => {
    const  
        rootWrapper        = document.getElementById('root_wrapper'),
        openSidebarBtn     = document.getElementById('open_sidebar'),
        fakeOpenSidebar    = document.getElementById('open_sidebar_fake'),
        mobileSidebarClose = document.getElementById('mobile_close_sidebar')

    openSidebarBtn.onclick = event => {
        if (event.target.checked) {
            rootWrapper.classList.add('active')
            fakeOpenSidebar.classList.add('active')
        } else {
            rootWrapper.classList.remove('active')
            fakeOpenSidebar.classList.remove('active')
        }
    }

    mobileSidebarClose.onclick = () => {
        openSidebarBtn.checked = false
        rootWrapper.classList.remove('active')
        fakeOpenSidebar.classList.remove('active')
    }
}