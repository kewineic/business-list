import {BusinessList} from "../models/BusinessList.js";
import {Message} from "../models/Message.js";
import {BusinessView} from "../views/BusinessView.js";
import {MessageView} from "../views/MessageView.js";
import {BusinessService} from "../services/BusinessService.js";
import {DateHelper} from "../helpers/DateHelper.js";
import {Bind} from "../helpers/Bind.js";
import {Business} from "../models/Business.js";

export class BusinessController{

    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputDate = $("#date");
        this._inputAmount = $("#amount");
        this._inputValue = $("#value");   
        this._currentSort = '';
        this._service = new BusinessService()

   
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

        this._init();
    }

    _init(){
        this._service
            .list()
            .then(businessList => 
                businessList.forEach(business => 
                    this._businessList.add(business)))
            .catch(err => this._message.text = err);
    }

    add(event){
        event.preventDefault();

        let negotiation = this._createNegotiation();

        this._service
            .register(negotiation)
            .then(message => {
                this._businessList.add(negotiation);
                this._message.text = message;
                this._cleanForm();
            })
            .catch(err => this._message.text = err);

    }   

    importBusiness(){
        this._service
            .import(this._businessList.negotiations)
            .then(businessList => businessList.forEach(business => {
                this._businessList.add(business);
                this._message.text = 'Negociaçoes do período importadas'
            }))
            .catch(err => this._message.text = err);
    }

    exclude(){
        this._service
            .delete()
            .then(message => {
                this._message.text = message;
                this._businessList.delete(); 
            })
            .catch(err => this._message.text = err);
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