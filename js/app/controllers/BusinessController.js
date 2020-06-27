class BusinessController{

    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputDate = $("#date");
        this._inputAmount = $("#amount");
        this._inputValue = $("#value");   
        this._currentSort = '';

   
        this._businessList = new Bind(
                new BusinessList(),
                new BusinessView($("#businessView")),
                'add', 'delete', 'sortting', 'reverseSortting'
        );
      
    
        this._message = new Bind(
            new Message(),
            new MessageView($("#messageView")),
            'text'
        );

        ConnectionFactory
            .getConnection()
            .then(connection => new BusinessDao(connection))
            .then(dao => dao.listAll())
            .then(response => {
                response.forEach(business => {
                    this._businessList.add(business)
                })
            });       
    }

    add(event){
        event.preventDefault();

        ConnectionFactory
            .getConnection()
            .then(connection => {
                let business = this._createNegotiation();
                new BusinessDao(connection)
                    .add(business)
                    .then(() => {    
                        this._businessList.add(business);
                        this._message.text = 'Negociação adicionada com sucesso';
                        this._cleanForm();
                    });
            })
            .catch(erro => this._message.text = erro);
    }   

    importBusiness(){

        let service = new BusinessService;   
        service
            .getAllBusiness()
            .then(response => {
                response.forEach(business => this._businessList.add(business));
                this._message.text = 'Negociações do período importadas com sucesso';
            })
            .catch(err => this._message.text = err);
    }

    exclude(){
        this._businessList.delete();
        this._message.text = "Lista de negociação apagada com sucesso!";
    }

    _createNegotiation(){
        return new Business(
            DateHelper.stringToDate(this._inputDate.value), 
            parseInt(this._inputAmount.value),
            parseFloat(this._inputValue.value)
        );
    }

    _cleanForm(){
        this._inputDate.value = "";
        this._inputAmount.value = 1;
        this._inputValue.value = 0.0;
        this._inputDate.focus();
    }

    sortting(column){
        if(this._currentSort == column){
            this._businessList.reverseSortting();
        }else{
            this._businessList.sortting((a, b) => a[column] - b[column]);
        }
        this._currentSort = column;
    }
}