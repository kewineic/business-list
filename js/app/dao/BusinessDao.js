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
}