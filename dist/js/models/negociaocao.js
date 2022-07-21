export class Negociacao {
    //ao invés de atribuir os valores por aqui dá pra atribuir pelo próprio constructor
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    //getter não pode haver msm nome que a propriedade/atributo
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
}
