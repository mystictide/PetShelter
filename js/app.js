const navtoggle = document.getElementsByClassName('nav-toggle')[0]
const navbarlinks = document.getElementsByClassName('navbar-links')[0]

navtoggle.addEventListener('click', () => {
    navbarlinks.classList.toggle('active')
})
