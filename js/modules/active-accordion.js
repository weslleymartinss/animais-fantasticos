export default function activeAccordion() {
    const accordionList = document.querySelectorAll('[data-anima="accordion"] dt')
    accordionList

    function tabAccordion(event) {
        this.classList.toggle('ativo')
        this.nextElementSibling.classList.toggle('ativo')
    }

    accordionList.forEach((dt) => {
        dt.addEventListener('click', tabAccordion)
    })
}