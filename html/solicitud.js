const form = document.getElementById('formulario');

var getData = function (){
    var nombre = document.getElementById("nombre").value;
    var curso = document.getElementById("curso").value;
    var numero = document.getElementById("numero").value;
    var fechaS = document.getElementById("solicitud").value;
    var fechaD = document.getElementById("entrega").value;
    var titulo = document.getElementById("titulo").value;
    var autor = document.getElementById("autor").value;
    var codigo = document.getElementById("codigo").value;
    var estante = document.getElementById("estante").value;

    window.localStorage.setItem('nombre', nombre)
    window.localStorage.setItem('curso', curso)
    window.localStorage.setItem('numero', numero)
    window.localStorage.setItem('solicitud', fechaS)
    window.localStorage.setItem('entrega', fechaD)
    window.localStorage.setItem('titulo', titulo)
    window.localStorage.setItem('autor', autor)
    window.localStorage.setItem('codigo', codigo)
    window.localStorage.setItem('estante', estante)
}

const codeSelector = document.getElementById('codigo');

const selectOptions = {
    CADS: libros[0],
    ECNTQLE: libros[1],
    HP: libros[2],
    ERDG: libros[3],
    DQM: libros[4],
    EP: libros[5],
    EMMDO: libros[6],
    LTH: libros [7]
}

codeSelector.addEventListener('change', () =>{
    if(selectOptions[codeSelector.value]){
        const tituloForm = document.getElementById('titulo');
        const autorForm = document.getElementById('autor');
        const estanteForm = document.getElementById('estante');

        const { autor, titulo, estante } = selectOptions[codeSelector.value];

        tituloForm.value = titulo
        autorForm.value = autor
        estanteForm.value = estante
    }
    else{
        const tituloForm = document.getElementById('titulo');
        const autorForm = document.getElementById('autor');
        const estanteForm = document.getElementById('estante');

        tituloForm.value = ''
        autorForm.value = ''
        estanteForm.value = ''
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    getData();
})