export default function ({test, selector, classCSS}) {
    try{
        if(!selector || !classCSS) return false
        const elems = Array.from( document.querySelectorAll(selector) )
            elems.forEach(elem => test ? elem.classList.remove(classCSS) : elem.classList.add(classCSS))
        return true
    } catch(err) {
        console.log('Não foi possível alterar class CSS: ', err)
        return false
    }
} 