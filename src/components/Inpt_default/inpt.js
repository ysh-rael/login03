
export default ({target:esse}) =>  esse.value ? esse.nextSibling.classList.add('no-empty') : esse.nextSibling.classList.remove('no-empty')
