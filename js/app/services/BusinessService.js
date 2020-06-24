class BusinessService{

    constructor(){
        this.http = new HttpService();
    }

    getAllBusiness(){
        return Promise.all([
            this.importBusiness(),
            this.businessImportLastWeek(),
            this.businessImportWeekBeforeLast()
        ]).then(periods => {
            let business = periods
                .reduce((data, period) => data.concat(period), []);
            return business
        }).catch(err =>{
            throw new Error(err);
        });
    }

    importBusiness(){ 
        return this.http
            .get('negociacoes/semana')
            .then(response => {
                return response.map(business =>
                    new Business(new Date(business.data), business.quantidade, business.valor));
            })
            .catch(err => {
                console.log(err);
                throw new Error('Não foi possível obter as negociações da semana..');
            })
    }

    businessImportLastWeek(){
        return this.http
            .get('negociacoes/anterior')
            .then(response => {
                return response.map(business =>
                    new Business(new Date(business.data), business.quantidade, business.valor));
            })
            .catch(err => {
                console.log(err);
                throw new Error('Não foi possível obter as negociações da semana anterior..');
            })
    }   

    businessImportWeekBeforeLast(){
        return this.http
            .get('negociacoes/retrasada')
            .then(response => {
                return response.map(business =>
                    new Business(new Date(business.data), business.quantidade, business.valor));
            })
            .catch(err => {
                console.log(err);
                throw new Error('Não foi possível obter as negociações da semana retrasada..');
            })
    }   

    exclude(){
        this._businessList.delete();
        this._message.text = "Lista de negociação apagada com sucesso!";
    }
}