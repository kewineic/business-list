class BusinessController{

    constructor(){
        let $ = document.querySelector.bind(document);

        this._inputDate = $("#date");
        this._inputAmount = $("#amount");
        this._inputValue = $("#value");   

        Object.freeze(this);
    }

    add(event){
        event.preventDefault();

        let dateHelper = new DateHelper()
        
        let business = new Business(
            dateHelper.stringToDate(this._inputDate), 
            this._inputAmount.value,
            this._inputValue.value,
        );
    }   
}