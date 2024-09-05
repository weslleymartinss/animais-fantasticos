function activeImg() {
    const tabImgs = document.querySelectorAll('.js-tabimgs li')
    const tabDescricao = document.querySelectorAll('.js-tabdescricao section')
    if (tabImgs.length && tabDescricao.length) {

        tabDescricao[0].classList.add('ativo')
        function activeTab(index) {
            tabDescricao.forEach((section) => {
                section.classList.remove('ativo')
            })

            tabDescricao[index].classList.add('ativo')
        }

        tabImgs.forEach((clickImg, index) => {
            clickImg.addEventListener('click', () => {
                activeTab(index)
            })
        })
    }
}
activeImg()

function activeAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt')
    accordionList

    function tabAccordion(event) {
        this.classList.toggle('ativo')
        this.nextElementSibling.classList.toggle('ativo')
    }

    accordionList.forEach((dt) => {
        dt.addEventListener('click', tabAccordion)
    })
}
activeAccordion()

function initScrollSuave() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

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
initScrollSuave()


function activeScrollAnimation() {
    const sections = document.querySelectorAll('.js-scroll')
    const windowMetade = window.innerHeight * 0.6

    
    function animaScroll() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top
            const isSectionVisible = (sectionTop - windowMetade)
            if (isSectionVisible < 0) {
                section.classList.add('ativo')
            }
            else {
                section.classList.remove('ativo')
            }
        })
    }
    window.addEventListener('scroll', animaScroll)
    animaScroll() 
}
activeScrollAnimation()

function novaFuncao () {
    asdasd
}








