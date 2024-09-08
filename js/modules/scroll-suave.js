export default function initScrollSuave() {
    const linksInternos = document.querySelectorAll('[data-anima="menu"] a[href^="#"]')

    function scrollToSection(event) {
        event.preventDefault()
        const href = event.currentTarget.getAttribute('href')
        const section = document.querySelector(href)
        console.log(href)
        console.log(section)
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection)

    })
}