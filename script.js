const toggleButton=document.getElementById("toggle-btn")
const sidebar=document.getElementById("sidebar")

console.log(document.getElementById('sidebar'));
function toggleSidebar(){
    toggleButton.classList.toggle('rotate')
    sidebar.classList.toggle('close')
}
function toggleSubMenu(button){
    button.nextElementSibling.classList.toggle('show')
    button.classList.toggle('rotate')
}