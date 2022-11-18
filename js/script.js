let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}




window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');




}

document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
}
document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');
}


function loader() {
    document.querySelector('.loder-container').classList.add('fade-out');

}

function fadeOut() {
    setInterval(loader, 3000);
}
window.onload = fadeOut;