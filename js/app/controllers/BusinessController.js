class BusinessController{

    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputDate = $("#date");
        this._inputAmount = $("#amount");
        this._inputValue = $("#value");   

   
        this._businessList = new Bind(
                new BusinessList(),
                new BusinessView($("#businessView")),
                'add', 'delete'
        );
      
    
        this._message = new Bind(
            new Message(),
            new MessageView($("#messageView")),
            'text'
        );
    }

    add(event){
        event.preventDefault();
        this._businessList.add(this._createNegotiation());
        this._message.text = "Negociação adicionada com sucesso!"
        this._cleanForm();
    }   

    exclude(){
        this._businessList.delete();
        this._message.text = "Lista de negociação apagada com sucesso!";
    }

    _createNegotiation(){
        return new Business(
            DateHelper.stringToDate(this._inputDate.value), 
            this._inputAmount.value,
            this._inputValue.value
        );
    }

    _cleanForm(){
        this._inputDate.value = "";
        this._inputAmount.value = 1;
        this._inputValue.value = 0.0;
        this._inputDate.focus();
    }
}