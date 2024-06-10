"use strict";
//Variaveis
//Tipos Primitivos: boolean, number, string;
let ligado = true; //or false.
let nome = "Maria";
let idade = 2024;
let altura = 1.79; //Number aceita casa decimal.
//Tipos Especiais: null or undefined
let nulo = null; //Recebe apenas null.
let indefinido = undefined; //Recebe apenas undefined.
//Tipos Abrangentes: any or void.
let retornoVazio; //Não recebe nada, apenas "nada"
let qualquerCoisa = "LITERALMENTE QUALQUER COISA"; //Posso colocar um camelo aqui, que vai dar bom.
//objeto - sem previsibilidade
let produto = {
    nome: "Maria",
    cidade: "SP",
    idade: 0,
};
let meuProduto = {
    nome: "Tenis",
    preco: 89.99,
    unidades: 5,
};
//arrays - unitype
let dados = ["Flavio", "Jullya", "Maria"];
let dados2 = ["Flavio", "Jullya", "Maria"];
//arrays- multitype
let infos = ["Flavio", 13, "Jullya", 3, "Maria", 12];
//tuplas
let boleto = ["conta de agua", 199.90, 83502958];
//datas
let aniversario = new Date("2024-06-12 10:00");
console.log(aniversario.toLocaleString("BR"));
