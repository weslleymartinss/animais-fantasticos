function activeImg() {
    const tabImgs = document.querySelectorAll('[data-tab="imagens"] li')
    const tabDescricao = document.querySelectorAll('[data-tab="descricao"] section')
    if (tabImgs.length && tabDescricao.length) {
        tabDescricao[0].classList.add('ativo')

        function activeTab(index) {
            tabDescricao.forEach((section) => {
                section.classList.remove('ativo')
            })
            const direcao =  tabDescricao[index].dataset.anima
            tabDescricao[index].classList.add('ativo', direcao)
            console.log(tabDescricao[index])
        }

        tabImgs.forEach((clickImg, index) => {
            clickImg.addEventListener('click', () => {
                activeTab(index)
            })
        })
    }
}
activeImg()

function activeScrollAnimation() {
    const sections = document.querySelectorAll('[data-anima="scroll"] ')
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








