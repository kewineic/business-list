class BusinessList{
    constructor(){
        this._businessList = []; 
    }

    add(negotiation){
        this._businessList.push(negotiation);
    }

    get negotiations(){
       return [].concat(this._businessList);
    }

    delete(){
        this._businessList = [];
    }

}
