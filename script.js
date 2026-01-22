const toggleButton=document.getElementById("toggle-btn")
const sidebar=document.getElementById("sidebar")

console.log(document.getElementById('sidebar'));
function toggleSidebar(){
    toggleButton.classList.toggle('rotate')
    sidebar.classList.toggle('close')
    closeAllSubMenus()
}
function toggleSubMenu(button){
    if(!button.nextElementSibling.classList.contains('show')){
        closeAllSubMenus()
    }
    button.nextElementSibling.classList.toggle('show')
    button.classList.toggle('rotate')

    if(sidebar.classList.contains('close')){
        button.classList.toggle('rotate')
        sidebar.classList.toggle('close')
    }
}

function closeAllSubMenus(){
     Array.from(sidebar.getElementsByClassName('show')).forEach(ul =>{
        ul.classList.remove('show')
        ul.previousElementSibling.classList.remove('rotate')
    } )
}