class MensagemView extends View{

  constructor(elemento){
    super(elemento);
  }

  tempalte(model){
    return model.texto ?`<p class="alet alert-info">${model.texto}</p>` : `<p></p>`;
  }
}