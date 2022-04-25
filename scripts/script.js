let blocks = document.querySelectorAll('.block')
const resetBtn = document.querySelector('.btn-reset')

blocks.forEach((block, index) => {
    block.addEventListener('click', (e) => {
        if (e.target.closest('.left') && index != 0) {
            let num = blocks[index - 1].firstElementChild.textContent
            blocks[index - 1].firstElementChild.textContent = blocks[index].firstElementChild.textContent
            blocks[index].firstElementChild.textContent = num
        }
        if (e.target.closest('.right') && index != 24) {
            let num = blocks[index + 1].firstElementChild.textContent
            blocks[index + 1].firstElementChild.textContent = blocks[index].firstElementChild.textContent
            blocks[index].firstElementChild.textContent = num
        }
        if (e.target.closest('.top') && index != 0 && index != 1 && index != 2 && index != 3 && index != 4) {
            let num = blocks[index - 5].firstElementChild.textContent
            blocks[index - 5].firstElementChild.textContent = blocks[index].firstElementChild.textContent
            blocks[index].firstElementChild.textContent = num
        }
        if (e.target.closest('.bottom') && index != 20 && index != 21 && index != 22 && index != 23 && index != 24) {
            let num = blocks[index + 5].firstElementChild.textContent
            blocks[index + 5].firstElementChild.textContent = blocks[index].firstElementChild.textContent
            blocks[index].firstElementChild.textContent = num
        }
    })
})

resetBtn.addEventListener('click', () => {
    blocks.forEach((block, index) => {
        block.firstElementChild.textContent = index
    })
})