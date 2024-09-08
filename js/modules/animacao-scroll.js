export default function activeScrollAnimation() {
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