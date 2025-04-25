


function create() {

    const nomeF = document.getElementById('nome').value
    const descF = document.getElementById('descricao').value
    const time = document.getElementById('Minutos').value
    const mostrar = document.getElementById('mostrar')

    mostrar.innerHTML = `
    <p>Filme: ${nomeF}</p>
    <p>Descrição: ${descF}</p>
    <p>Tempo: ${transformarEmH(time)}</p>
    `

    resetForm()
}

function transformarEmH(e) {

    const horas = Math.floor(e/ 60);          
    const min = e % 60;
    const textoHoras = (`00${horas}`).slice(-2);
    const textoMinutos = (`00${min}`).slice(-2);
    
    return `${textoHoras }:${textoMinutos}`;

}

function resetForm() {

    const nomeF = document.getElementById('nome').value = ""
    const descF = document.getElementById('descricao').value = ""
    const time = document.getElementById('Minutos').value = ""


}








