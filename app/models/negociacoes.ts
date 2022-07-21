import { Negociacao } from "./negociaocao.js";

export class Negociacoes {
  private negociacoes: Negociacao[] = []; //Ele guarda a lista de negoçiações
  //ou Array<Negociacao>

  adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  lista(): readonly Negociacao[] {
    //ReadonlyArray<Negociacao>

    return this.negociacoes;
    //return [...this.negociacoes] Pega cada item dessa lista e coloca nessa nova lista
  }
}
