const form = document.getElementById('form');
 



let linhas = '';

form. addEventListener('submit', function(e){
    e.preventDefault();

    adicionarLinha();
    atualizaTabela();
    
});

function adicionarLinha() {
    const inputNome = document.getElementById('nome');
    const inputNumero = document.getElementById('numero');


        let linha = '<tr>';
        linha += `<td> ${inputNome.value}</td>`;
        linha += `<td> ${inputNumero.value}</td>`;
        linha += `</tr>`

        linhas += linha;
    
    inputNome.value = '';
    inputNumero.value = '';
}

function atualizaTabela (){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas;
}

