window.addEventListener('load', () => {

    let $ = (e) => document.querySelector(e) 

    let titulo = $('.moviesAddTitulo')
    let formulario = $('#formulario');
    let article = $('article');

    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    titulo.addEventListener('mouseover', (e) => {
        titulo.style.color = 'violet'
    })
    titulo.addEventListener('mouseleave', (e) => {
        titulo.style.color = "black"
    })

    const inputTitulo = $('#titulo')


    let estadoSecreto = 0
    inputTitulo.addEventListener('keypress', function(e) {
        console.log('Tecla presionada ' + e.key);
        
        switch (true) {
            case (e.key=='s' || e.key=='S') && (estadoSecreto===0 || estadoSecreto===1):
                estadoSecreto = 1
                console.log('el estado es ' + estadoSecreto);
                break;
            case (e.key=='e' || e.key=='E') && estadoSecreto===1:
                estadoSecreto = 2
                console.log('el estado es ' + estadoSecreto);
                break;
            case (e.key=='c' || e.key=='C') && estadoSecreto===2:
                estadoSecreto = 3
                console.log('el estado es ' + estadoSecreto);
                break;
            case (e.key=='r' || e.key=='R') && estadoSecreto===3:
                estadoSecreto = 4
                console.log('el estado es ' + estadoSecreto);
                break;
            case (e.key=='e' || e.key=='E') && estadoSecreto===4:
                estadoSecreto = 5
                console.log('el estado es ' + estadoSecreto);
                break;
            case (e.key=='t' || e.key=='T') && estadoSecreto===5:
                estadoSecreto = 6
                console.log('el estado es ' + estadoSecreto);
                break;
            case (e.key=='o' || e.key=='O') && estadoSecreto===6:
                estadoSecreto = 7
                console.log('el estado es ' + estadoSecreto);
                break;
        
            default:
                estadoSecreto = 0
                console.log('el estado es ' + estadoSecreto);
                break;
        }

        if (estadoSecreto === 7) {
            window.alert('SECRETO MAGICO')
        }
    })


})