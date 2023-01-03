window.addEventListener('load', () => {

    let $ = (e) => document.querySelector(e) 

    let body = $('body');
    let moviesListTitulo = $('.moviesListTitulo');

    let modo = confirm('Desea modo oscuro');
    if(modo){
        body.style.backgroundColor = '#7f7f7f'
        body.classList.add('fondoMoviesList');
    }
    
    
    moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
    moviesListTitulo.style.color ='white';
    moviesListTitulo.style.backgroundColor = 'teal';
    moviesListTitulo.style.padding = '20px';


let logo = $('figure')

logo.addEventListener('mouseover', (e) => {
    body.style.backgroundColor = '#7f7f7f';
        body.classList.add('fondoMoviesList');
    
})
logo.addEventListener('mouseleave', (e) => {
    body.style.backgroundColor = 'white';
        body.classList.remove('fondoMoviesList');
    console.log('Aca esta lo que queres')
})

})


