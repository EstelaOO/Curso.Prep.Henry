const workItems = document.querySelectorAll('.work.item');//variable --referecia al celector".work.item"
const workItemsCount = workItems.length;
let currentIndex = 0; // para manejar la navegacion
const closeButton = document.querySelector('#close-button');//botones
const prevButton = document.querySelector('#prev-button');//
const nextButton = document.querySelector('#next-button');
const openCloseButton = document.querySelector('#buttonOpenCloseMenu');
const menuMobileItems = document.querySelector('#menu-mobile-items');
//para poder hacer interaccion en el sitio
openCloseButton.addEventListener('click',e->{
    menuMobileItems.classList.toggle('menu-mobile-clesed');
});
workItems.forEach(item ->{
    item.addEventListener('click',e->{
        e.preventDefault();
        currentIndex = parseInt(item.getAttribute('data-id'));
        const contentArr = document.querySelectorAll('#details-container .item'); //selecciona todos los items (decripciones) de la galeria y a cada clase se le asigna ocultar (display= none)
        
        document.querySelectorAll('#details-container .item').forEach(item ->{ item.classList.add('item-hide');}) //selecciona todos los items (decripciones) de la galeria y a cada clase se le asigna ocultar (display= none)
        document.querySelectorAll('#details-container .item')[currentIndex].toggle('item-hide'); //selecciona todos los items (decripci) me trae solo el elemento que quiero ver
        document.querySelector('#screen').style['animation-name'] = 'fade-in'; //selecciona todos los items (decripci) me trae solo el elemento que quiero ver
        document.querySelector('body').style['overflow'] = 'hidden'; //selecciona todos los items (decripci) me trae solo el elemento que quiero ver

        styleTimeout(() ->{
            document.querySelector('#details-container').style.display = 'block';
            }, 1000);
        styleTimeout(() ->{
            document.querySelector('#screen').style = '';
            }, 2000);
    });
});
closeButton.addEventListener('click' e ->{
    e.preventDefault();//es un link
        document.querySelector('#screen').style['animation-name'] = 'fade-in'; //selecciona todos los items (decripci) me trae solo el elemento que quiero ver
        document.querySelector('body').style['overflow'] = 'auto'; //auto para que aparesca el scroll

        styleTimeout(() ->{
            document.querySelector('#details-container').style.display = 'none';
            }, 1000);
        styleTimeout(() ->{
            document.querySelector('#screen').style = '';
            }, 2000);//deja el creen vasio para mandar a llamar a 'fade-in' cuando sea necesario
});
prevButton.addEventListener('click', e->{
    if(currentIndex -1 < 0){ //si desborda
        return;              // ya no haga nada
    }
    currentIndex--; //si no desborda entonces sigue disminuyendo
    loadGalleryItem(currentIndex); //
});
nextButton.addEventListener('click', e->{
    if(currentIndex +1 == workItemsCount){ 
        return;              // ya no haga nada
    }
    currentIndex++; //si no desborda entonces sigue aumentando
    loadGalleryItem(currentIndex); //
});
function loadGalleryItem(index){
    const items = document.querySelectorAll('#details-container.item');
    item.forEach(item -> {item.classList.add('item-hide')}); //voy a ocultar todos los elementos
    item[index].classList.toggle('item-hide '); //mostrar solo el del index seleccionado o el del index actual
}