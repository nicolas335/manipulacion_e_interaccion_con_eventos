window.addEventListener('load', () => {

    let $ = (e) => document.querySelector(e) 
    //JavaScript del Index
    let container = $('.container');
    let subtitulo = $('.subtitulo');
    let destacado = document.querySelectorAll('p') 
    let fondo = $('body');
    let enlace = $('a');
    
    let nombre = prompt('Ingrese su nombre');
    console.log(nombre);
    if(nombre !=''){
        subtitulo.innerHTML += nombre;
    }else{
        subtitulo.innerHTML += 'INVITADO';
    }
        
    subtitulo.style.textTransform = 'uppercase';
    let confirmar = confirm('Desea colocar un fondo de pantalla ')
    if(confirmar){
        fondo.classList.add('fondo');
        enlace.style.color = '#E51B3E';
    }
    
    for(let i = 0 ; i < destacado.length; i++){
        if(i % 2 == 0){
            destacado[i].classList.add('destacadoPar');
        }else{
            destacado[i].classList.add('destacadoImpar');
        }
    }
    

    container.style.display = 'block';


let logo = $('figure')
let menu = $('#menu')

logo.addEventListener('click', (e) => {
    console.log('hiciste click');
    $('#menu').classList.toggle('mostrar')
})

menu.addEventListener('mouseleave', (e) => {
    console.log('Sacaste el mouse')
    menu.classList.toggle('mostrar')
})

})