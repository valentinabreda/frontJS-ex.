window.onload =() => {
    ex1()
    ex2()
    ex3()
    ex4()
    ex5()
    ex6()
};

const ex1 = () => {
    alert('Bienvenido a mi sitio')
};

const ex2 = () => {

    const result = confirm('Está seguro de querer avanzar?');

    if(!result) {
        return actualizarTituloH2('Lamentamos que no quieras continuar tu visita por este maravilloso sitio')
    }
    actualizarTituloH2('Que alegria que quieras continuar en este sitio!')
}

const actualizarTituloH2= (textoAModificar) => {
    let tituloH2 = document.querySelector('h2');
    console.log(tituloH2)
    tituloH2.innerHTML = textoAModificar;
    tituloH2.style.textAlign = 'center'
}

const ex3 = () => {
    const name = prompt('Ingrese su nombre');
    document.querySelector('h1').innerText = `Bienvenido ${name}`
}

const ex4 = () => {
    const age = prompt('Cual es tu edad?');
    if(age <= 18) {
        document.querySelector('.container-general').style.display = 'none';
        
        const contenidosBloqueados = document.querySelectorAll('.contenido-bloqueado');
        
        for(let contBloq of contenidosBloqueados) {
            contBloq.style.display = 'block' //itera sobre cada div y los bloquea
        }
    }
}

const ex5 = () => {
    const hobbies = prompt('Ingrese sus hobbies');
    const arrayOfHobbies = hobbies.split(","); //esto separa por comas lo que ingresemos en el prompt

    if(arrayOfHobbies.includes('programacion')
    || arrayOfHobbies.includes('programación')
    || arrayOfHobbies.includes('programar')
    ) {
        alert('Que bueno que te guste la programación');
    } else {
        alert('Que lastima que no te guste la programación');
    }

    if(arrayOfHobbies.length < 3){
        return;
    }

    const articleHobbies = document.querySelector('.hobbies');

    articleHobbies.innerHTML += "<ol>";

    for(let hobbie of arrayOfHobbies.slice(0, 3)){
        articleHobbies.innerHTML += `<li> ${hobbie}`
    }

    articleHobbies.innerHTML += "<ol>";
}

const ex6 = () => {
    const hobbies = prompt('Ingrese sus hobbies');
    const arrayOfHobbies = hobbies.split(","); //esto separa por comas lo que ingresemos en el prompt

    if(arrayOfHobbies.includes('programacion')
    || arrayOfHobbies.includes('programación')
    || arrayOfHobbies.includes('programar')
    ) {
        document.querySelector('.background-img').style.backgroundImage = "url('img/programmer.jpge')";
    } else {
        document.querySelector('.background-img').style.backgroundImage = "url('img/gatito.jpge')"

    }
}

