/*
public - Pode seu acesado tanto pela mesma classe, 
        classe filhas e outras classes.
--------------------------------------------------------------------
Protected - pode ser acesssado pela mesma classe e classes filhas,
            nao pode ser acessado por outras classes.
--------------------------------------------------------------------
Private - Pode ser acessada somente pela própria classe.
*/

class Pessoa {
    public nome: string = "";
   public idade: number = 0;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
    public comer(comida: string) {
        return `O ${this.nome} comeu ${comida}`
    }

    public fezAniversario(){
        return `O ${this.nome} fez tantos anos ${++this.idade}`;
    }
}

