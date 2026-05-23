function comenzar(){
    ponerBG();
    setTimeout(function(){

        window.location.assign('usuario.html');

    },1000);

    var sfxStart = new Audio('audio/start.mp3');
    sfxStart.play();
}

function ponerBG(){
    document.querySelector('.bg-transicion').classList.add('bg-transicion-show');
}

function guardarUsuario(){
    localStorage.setItem(
        'usuario',
        document.getElementById('usuario').value
    );
    window.location.assign('emocion.html');
}

let emocionActual = 1;
let emociones = [
    "Feliz",
    "Triste",
    "Estresado",
    "Cansado",
    "Enojado"
];

function siguienteEmocion(){
    emocionActual++;
    if(emocionActual == 6){

        emocionActual = 1;
    }
    cambiarEmocion();
}

function anteriorEmocion(){
    emocionActual--;
    if(emocionActual == 0){

        emocionActual = 5;
    }
    cambiarEmocion();
}

function cambiarEmocion(){

    document.getElementById('emocion').src =
    "img/emocion"+emocionActual+".png";

    document.getElementById('nombreEmocion').innerHTML =
    emociones[emocionActual - 1];

    var sfxclic = new Audio('audio/clic.mp3');
    sfxclic.play();
}

function seleccionarEmocion(){
    let emocionSeleccionada =
    emociones[emocionActual - 1];

    localStorage.setItem(
        'emocion',
        emocionSeleccionada
    );

    let visitas = localStorage.getItem('visitas');

    if(!visitas){
        visitas = 1;
    
    }else{
        visitas++;
    }

    localStorage.setItem('visitas', visitas);
    guardarEstadisticas(emocionSeleccionada);
    window.location.assign('consejos.html');
}

function guardarEstadisticas(emocion){
    let cantidad = localStorage.getItem(emocion);

    if(!cantidad){
        cantidad = 1;

    }else{
        cantidad++;
    }

    localStorage.setItem(emocion, cantidad);
}

function cargarConsejos(){
    let emocion = localStorage.getItem('emocion');

    if(emocion == 'Feliz'){
        document.getElementById('cajaConsejos').innerHTML = `
        <h2>😁 Qué bueno que te sientes feliz</h2>
        <p>Comparte tu felicidad con otras personas.</p>
        <p>Escucha música y mantén pensamientos positivos.</p>
        `;
    }

    else if(emocion == 'Triste'){
        document.getElementById('cajaConsejos').innerHTML = `
        <h2>😢 Todo mejorará</h2>
        <p>Habla con amigos o familiares.</p>
        <p>Haz actividades que disfrutes.</p>
        `;
    }

    else if(emocion == 'Estresado'){
        document.getElementById('cajaConsejos').innerHTML = `
        <h2>😓 Necesitas relajarte</h2>
        <p>Respira profundamente.</p>
        <p>Descansa unos minutos.</p>
        <p>Evita usar demasiado las redes sociales.</p>
        `;
    }

    else if(emocion == 'Cansado'){
        document.getElementById('cajaConsejos').innerHTML = `
        <h2>😴 Debes descansar</h2>
        <p>Duerme al menos 8 horas.</p>
        <p>Toma agua y evita desvelarte.</p>
        `;
    }

    else if(emocion == 'Enojado'){
        document.getElementById('cajaConsejos').innerHTML = `
        <h2>😡 Intenta calmarte</h2>
        <p>Respira profundamente.</p>
        <p>Escucha música relajante.</p>
        <p>Aléjate un momento de situaciones estresantes.</p>
        `;
    }

    if(localStorage.getItem('agenda')){
        document.getElementById('agenda').value = localStorage.getItem('agenda');
    }
}

function musicaRelax(){
    var relax = new Audio('audio/relax.mp3');
    relax.play();
}

function guardarAgenda(){
    localStorage.setItem(
        'agenda',
        document.getElementById('agenda').value
    );

    alert('Agenda guardada');
}

function irHistorial(){
    window.location.assign('historial.html');
}

function cargarHistorial(){

    document.getElementById('nombre').innerHTML =
    "Usuario: " +
    localStorage.getItem('usuario');

    document.getElementById('emocion').innerHTML =
    "Última emoción: " +
    localStorage.getItem('emocion');

    document.getElementById('visitas').innerHTML =
    "Visitas: " +
    localStorage.getItem('visitas');

    document.getElementById('feliz').innerHTML =
    "😄 Feliz: " +
    (localStorage.getItem('Feliz') || 0);

    document.getElementById('triste').innerHTML =
    "😢 Triste: " +
    (localStorage.getItem('Triste') || 0);

    document.getElementById('estresado').innerHTML =
    "😓 Estresado: " +
    (localStorage.getItem('Estresado') || 0);

    document.getElementById('cansado').innerHTML =
    "😴 Cansado: " +
    (localStorage.getItem('Cansado') || 0);

    document.getElementById('enojado').innerHTML =
    "😡 Enojado: " +
    (localStorage.getItem('Enojado') || 0);
}

function reiniciar(){
    localStorage.clear();
    window.location.assign('index.html');
}