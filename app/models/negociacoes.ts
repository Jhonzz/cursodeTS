import { Negociacao } from "./negociaocao.js";

export class Negociacoes {
  private negociacoes: Array<Negociacao> = []; //Ele guarda a lista de negoçiações

  adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  lista(): ReadonlyArray<Negociacao> {
    return this.negociacoes;
    //return [...this.negociacoes] Pega cada item dessa lista e coloca nessa nova lista
  }
}
