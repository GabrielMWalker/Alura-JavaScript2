class ListaNegociacoes{
  constructor(){
    this.negociacoes = [];
  }

  adiciona(negociacoes){
    this._negociacoes.push(negociacoes);
  }

  get negociacoes(){
    return [].concat(this._negociacoes);
  }
}