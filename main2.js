const MenuEmail2 = document.querySelector('.navbar-email');
const DesktopMenu2 = document.querySelector('.desktop-menu');
const MenuHanIcon2 = document.querySelector('.menu');
const MenuIconCarrito = document.querySelector('.navbar-shopping-cart');
const MobileMenu2 = document.querySelector('.mobile-menu');
const aside2 = document.querySelector('.product-detail');
 

MenuEmail2.addEventListener('click', toogleDesktopMenu);
MenuHanIcon2.addEventListener('click', toogleMobileMenu);
MenuIconCarrito.addEventListener('click', togleCarrito);

function toogleDesktopMenu(){
    DesktopMenu2.classList.toggle('inactive');
}

function toogleMobileMenu(){
    MobileMenu2.classList.toggle('inactive');
}

function togleCarrito(){
    const aside2Open = aside2.classList.contains('inactive');

    if(aside2Open){
        console.log('True');
    }else{
        console.log('False');
    }
    
    aside2.classList.toggle('inactive');


}