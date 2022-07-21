export class Negociacoes {
    constructor() {
        this.negociacoes = []; //Ele guarda a lista de negoçiações
    }
    //ou Array<Negociacao>
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        //ReadonlyArray<Negociacao>
        return this.negociacoes;
        //return [...this.negociacoes] Pega cada item dessa lista e coloca nessa nova lista
    }
}
