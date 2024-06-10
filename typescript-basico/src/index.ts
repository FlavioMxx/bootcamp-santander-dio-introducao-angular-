
//Variaveis
 

    //Tipos Primitivos: boolean, number, string;
    let ligado : boolean = true; //or false.
    let nome : string = "Maria";
    let idade : number = 2024;
    let altura : number = 1.79; //Number aceita casa decimal.

    //Tipos Especiais: null or undefined
    let nulo : null = null; //Recebe apenas null.
    let indefinido : undefined = undefined; //Recebe apenas undefined.

    //Tipos Abrangentes: any or void.
    let retornoVazio : void; //Não recebe nada, apenas "nada"
    let qualquerCoisa : any = "LITERALMENTE QUALQUER COISA"; //Posso colocar um camelo aqui, que vai dar bom.


    //objeto - sem previsibilidade
    let produto : object = {
        nome: "Maria",
        cidade: "SP",
        idade: 0,
    };


    //objeto - tipado - com previsibilidade
    type ProdutoLoja = {
        nome : string; 
        preco: number;
        unidades : number;
    }

    let meuProduto : ProdutoLoja = {
        nome : "Tenis",
        preco : 89.99,
        unidades : 5,
    }