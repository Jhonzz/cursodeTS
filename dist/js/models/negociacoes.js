export class Negociacoes {
    constructor() {
        this.negociacoes = []; //Ele guarda a lista de negoçiações
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return [...this.negociacoes]; //Pega cada item dessa lista e coloca nessa nova lista
    }
}
const negociacoes = new Negociacoes();
negociacoes.lista().forEach(n => {
    n.volume;
});
