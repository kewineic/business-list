class BusinessList{
    constructor(){
        this._businessList = []; 
    }

    add(negotiation){
        this._businessList.push(negotiation);
    }

    delete(){
        this._businessList = [];
    }

    get negotiations(){
       return [].concat(this._businessList);
    }
}