class BusinessService{

    importBusiness(){
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'negociacoes/semana');
            xhr.onreadystatechange = () => {
                if(xhr.readyState == 4){
                    if(xhr.status == 200){

                        resolve(JSON.parse(xhr.responseText)
                            .map(object => new Business(new Date(object.data), object.quantidade, object.valor)));
                    
                    }else{

                        console.log(xhr.responseText);
                        reject('Não foi possível obter as negociações da semana');
                    }
                }
            };
            xhr.send();
       });
    }   

    businessImportLastWeek(){
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'negociacoes/anterior');
            xhr.onreadystatechange = () => {
                if(xhr.readyState == 4){
                    if(xhr.status == 200){

                        resolve(JSON.parse(xhr.responseText)
                            .map(object => new Business(new Date(object.data), object.quantidade, object.valor)));
                        
                    }else{

                        console.log(xhr.responseText);
                        reject('Não foi possível obter as negociações da semana anterior');
                    }
                }
            };
            xhr.send();
       });
    }   

    businessImportWeekBeforeLast(){
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'negociacoes/retrasada');
            xhr.onreadystatechange = () => {
                if(xhr.readyState == 4){
                    if(xhr.status == 200){

                        resolve(JSON.parse(xhr.responseText)
                            .map(object => new Business(new Date(object.data), object.quantidade, object.valor)));
                        
                    }else{

                        console.log(xhr.responseText);
                        reject('Não foi possível obter as negociações da semana retrasada');
                    }
                }
            };
            xhr.send();
        });
    }   

    exclude(){
        this._businessList.delete();
        this._message.text = "Lista de negociação apagada com sucesso!";
    }
}