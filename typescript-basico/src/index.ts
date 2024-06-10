
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

    //arrays - unitype
    let dados: string[] = ["Flavio", "Jullya", "Maria"];
    let dados2 : Array<string> = ["Flavio", "Jullya", "Maria"];

    //arrays- multitype
    let infos: (string | number)[] = ["Flavio", 13, "Jullya", 3, "Maria", 12];

    //tuplas
    let boleto: [string, number, number] = ["conta de agua", 199.90, 83502958];

    //datas
    let aniversario: Date = new Date("2024-06-12 10:00");
    console.log(aniversario.toLocaleString("BR"));