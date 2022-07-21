export class Negociacao {
  //ao invés de atribuir os valores por aqui dá pra atribuir pelo próprio constructor

  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}
  get volume(): number {
    return this.quantidade * this.valor;
  }

  //getter não pode haver msm nome que a propriedade/atributo

  get data(): Date {
    const data = new Date(this._data.getTime());
    return data;
  }
}
