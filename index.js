const catalogo = require('./catalago');

//função para adicionar filme
function adicionarFilme(titulo, duracao, atores, anoDeLancamento, emCartaz){
    const novoFilme = {
        codigo: catalogo.length +1,
        titulo: titulo,
        duracao: duracao,
        atores: atores,
        anoDeLancamento: anoDeLancamento,
        emCartaz: emCartaz
    };
    catalogo.push(novoFilme);
    console.log("O filme: " + novoFilme.titulo +  " foi cadastrado com sucesso");
    console.table(catalogo);
    console.log("-".repeat(120));
}

console.log(adicionarFilme("Coração de Ferro", 2.14, ["Brad Pitt", "Logan Lerman"], 2015, true));

//Função buscar filme
//Fiquei com dúvida, perguntar para o professor.
function buscarFilme(codigo){
    const filmeProcurado = catalogo[codigo - 1];
    if (filmeProcurado){
        console.log('Filme procurado:');
        return console.log(filmeProcurado);
    }else{
        return "Filme não encontrado!"
    }
}

console.log(buscarFilme(1))

//Função Alterar Status do Cartaz
function alterarStatusEmCartaz(codigo, statusNovo){
    const procurarFilme = catalogo[codigo - 1];
    if (procurarFilme){
        console.log("Filme procurado para realizar alterações: ");
        console.log(procurarFilme);
        console.log("-".repeat(99));
        console.log("Alterando o status do filme em cartaz...");
        console.log("-".repeat(99));
        procurarFilme.emCartaz = !statusNovo;
        return console.log(procurarFilme);
    }else{
        return "filme não encontrado!";
    }
}

console.log(alterarStatusEmCartaz(1, 0));
console.table(catalogo);

//Função listar catálogo utilizando arrow function
const listarCatalogo = () =>{
    for (let i = 0; i < catalogo.length; i++){
        console.log("Título: " + catalogo[i].titulo);
        console.log("-".repeat(99));
        console.log("Duração: " + catalogo[i].duracao);
        console.log("-".repeat(99));
        console.log("Atores: " + catalogo[i].atores);
        console.log("-".repeat(99));
        console.log("Ano da Lançamento: " + catalogo[i].anoDeLancamento);
        console.log("-".repeat(99));
    }
}

console.log(listarCatalogo());

console.log("Filmes em cartaz: ");
const listarFilmesEmCartaz = () =>{
    for(let i = 0; i < catalogo.length; i++){
        catalogo[i].emCartaz == true ? console.log(catalogo[i]) : "";
    }
}

console.log(listarFilmesEmCartaz());