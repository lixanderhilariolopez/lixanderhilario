const codeSelector = document.getElementById('codigo');
const form = document.getElementById('formulario')

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
    if(selectOptions[codeSelector.value] && selectOptions[codeSelector.value].codigo === window.localStorage.getItem('codigo')){
        const tituloForm = document.getElementById('titulo');
        const autorForm = document.getElementById('autor');
        const estanteForm = document.getElementById('estante');
        const numero = document.getElementById('numero')
        const nombre = document.getElementById('devuelto')
        const curso = document.getElementById('curso')
        const fechaD = document.getElementById('entrega')

        const { autor, titulo, estante } = selectOptions[codeSelector.value];

        tituloForm.value = titulo
        autorForm.value = autor
        estanteForm.value = estante
        numero.value = window.localStorage.getItem('numero')
        curso.value = window.localStorage.getItem('curso')
        nombre.value = window.localStorage.getItem('devuelto')
        fechaD.value = window.localStorage.getItem('entrega')

        window.localStorage.clear()
    }
    else{
        const tituloForm = document.getElementById('titulo');
        const autorForm = document.getElementById('autor');
        const estanteForm = document.getElementById('estante');
        const numero = document.getElementById('numero')
        const nombre = document.getElementById('nombre')
        const apellido = document.getElementById('apellido')
        const curso = document.getElementById('curso')
        const fechaS = document.getElementById('Fecha_S')
        const fechaD = document.getElementById('Fecha_D')

        tituloForm.value = ''
        autorForm.value = ''
        estanteForm.value = ''
        numero.value = ''
        apellido.value = ''
        curso.value = ''
        nombre.value = ''
        fechaS.value = ''
        fechaD.value = ''
    }
})

form.addEventListener('submit', (e)=>{
    e.preventDefault()
})