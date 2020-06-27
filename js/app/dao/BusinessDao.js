class BusinessDao{
    constructor(connection){
        this._connection = connection; 
        this._store = 'business'; 
    }

    add(business){
        return new Promise((resolve, reject) => {
            let request = this._connection
                .transaction([this._store], 'readwrite')
                .objectStore(this._store)
                .add(business);

            request.onsuccess = () => {
                resolve();
            }

            request.onerror = () => {
                console.log(e.target.error);
                reject('Nao foi possível adicionar a negociaçao.');
            }
        });
    }

    listAll(){
        return new Promise((resolve, reject) => {
            let cursor = this._connection 
                .transaction([this._store], 'readwrite')
                .objectStore(this._store)
                .openCursor();

                let business = [];
                cursor.onsuccess = e => {
                    let current = e.target.result;
                    if(current){
                        let data = current.value;
                        business.push(new Business(data._date, data._amount, data._value));
                        current.continue();
                    }else{
                       resolve(business);
                    }
                }

                cursor.onerror = e => {
                    console.log(e.target.error);
                    reject('Nao foi possível listar as negociaçoes')
                }
        });
    }

    clearAll(){
        return new Promise((resolve, reject) => {
            let request = this._connection
                .transaction([this._store], 'readwrite')
                .objectStore(this._store)
                .clear();

                request.onsuccess = e => resolve('Negociaçoes removidas com sucesso.');
                request.onerror = e => {
                    console.log(e.target.error);
                    reject('Nao foi possível remover as negociaçoes.');
                    
                }
        });
    }
}