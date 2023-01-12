const nome = "Gabriel Fortes";
let nome2 = ""
let pessoaDefault = {
    nome: "Gabriel Fortes",
    idade: "22",
    trabalho: "Programador",
}

let nomes = ["Gabriel Fortes", "Luciano Fortes", "Gislaine Fortes"];

let pessoas = [
    {
    nome: "Gabriel Fortes",
    idade: "22",
    trabalho: "Programador",
    },
    {
    nome: "Luciano Fortes",
    idade: "53",
    trabalho: "Porteiro",   
    },
    {
    nome: "Gislaine Fortes",
    idade: "47",
    trabalho: "Do Lar",
    }
];

let pessoalistaVazia = []

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);
}

function imprimirPessoas() {
    pessoas.forEach((item) => {
        console.log("Nome");
        console.log(item.nome);
       
        console.log("Idade");
        console.log(item.idade);
        
        console.log("Trabalho");
        console.log(item.trabalho);
    })
}

adicionarPessoa({
    nome: "Pedro silva",
    idade: "30",
    trabalho: "Frentista"
})

imprimirPessoas();





















// Let- Posso alterar o valor
// Const- Não posso alterar o valor

// function alterarNome() {
//     nome2 = "Maria Silva"
//     console.log("Valor Alterado:");
//     console.log(nome2);
// }
// function recebeEalteraNome(novoNome) {
//     nome2 = novoNome
//     console.log("Valor alterado recebendo um nome:");
//     console.log(nome2);
// }

// function imprimirPessoa(pessoa) {
//     console.log("Nome:");
//     console.log(pessoa.nome);
    
//     console.log("Idade:");
//     console.log(pessoa.idade);
    
//     console.log("Trabalho:");
//     console.log(pessoa.trabalho);
// }
//imprimirPessoa(pessoaDefault);

// imprimirPessoa({
//     nome: "Maria Fortes",
//     idade: "25",
//     trabalho: "UX/UI Designer",
// })

//recebeEalteraNome("João Fortes");
//recebeEalteraNome("Maria Fortes")
//alterarNome();

