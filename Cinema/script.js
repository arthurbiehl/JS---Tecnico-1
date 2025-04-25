


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

    const trans = e / 60;

    return trans.toFixed(2);

}

function resetForm() {

    const nomeF = document.getElementById('nome').value = ""
    const descF = document.getElementById('descricao').value = ""
    const time = document.getElementById('Minutos').value = ""


}








