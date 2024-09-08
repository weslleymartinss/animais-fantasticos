export default function activeImg() {
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