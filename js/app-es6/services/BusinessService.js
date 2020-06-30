import {HttpService} from "./HttpService.js";
import {ConnectionFactory} from "./ConnectionFactory.js";
import {BusinessDao} from "../dao/BusinessDao.js";
import {Business} from "../models/Business.js";


export class BusinessService{

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

    register(business){
        return ConnectionFactory
            .getConnection()
            .then(connection => new BusinessDao(connection))
            .then(dao => dao.add(business))
            .then(() => 'Negociaçao cadastrada com sucesso')
            .catch(err =>{
                console.log(err)
                throw new Error('Nao foi possível adicionar a negociaçao')
            });
    }

    list(){
        return ConnectionFactory
            .getConnection()
            .then(connection => new BusinessDao(connection))
            .then(dao => dao.listAll())
            .catch(err => {
                console.log(err)
                throw new Error('Nao foi possível obter as negociaçoes')
            })
    }

    delete(){
        return ConnectionFactory
            .getConnection()
            .then(connection => new BusinessDao(connection))
            .then(dao => dao.clearAll())
            .then(() => 'Negociaçoes apagadas com sucesso')
            .catch(err => {
                console.log(err)
                throw new Error ('Nao foi possível apagar as negociaçoes')
            });
    }

    import(currentList){
        return this.getAllBusiness()
        .then(businessList => 
            businessList.filter(business => 
                !currentList.some(existentBusiness => 
                    business.isEquals(existentBusiness)
                )
            )
        )
        .catch(err => {
            console.log(err);
            throw new Error('Nao foi possível importar as negociaçoes');
        });
    }
}