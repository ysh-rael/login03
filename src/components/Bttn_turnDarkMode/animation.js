const isDarkMode = () => window.localStorage.getItem('isDarkMode') === 'true'

const disableDarkMode = click => {
  if(click) window.localStorage.setItem('isDarkMode', 'false')

  const switchDarkMode = document.getElementById('checkbox')
  const containerMode  = document.getElementById('container-mode')
  if(!switchDarkMode || !containerMode) return;

  switchDarkMode.checked = true
  containerMode.classList.add('dark')
  containerMode.classList.remove('light')
}

const activateDarkMode = click => {
  if(click) window.localStorage.setItem('isDarkMode', 'true')

  const switchDarkMode = document.getElementById('checkbox')
  const containerMode  = document.getElementById('container-mode')
  if(!switchDarkMode || !containerMode) return;

  switchDarkMode.checked = false
  containerMode.classList.remove('dark')
  containerMode.classList.add('light')
}

window.onload = () =>  isDarkMode() ? activateDarkMode()    : disableDarkMode()

export default  () =>  isDarkMode() ? disableDarkMode(true) : activateDarkMode(true)