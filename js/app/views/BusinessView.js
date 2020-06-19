class BusinessView{

    constructor(element){
        this._element = element;
    }

    _template(model){
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
        
            <tbody>
                ${model.negotiations.map(item => {
                    return `
                    <tr>
                        <td>${DateHelper.dateToString(item.date)}</td>
                        <td>${item.amount}</td>
                        <td>${item.value}</td>
                        <td>${item.volume}</td>
                    </tr>
                    `
                }).join('')}
            </tbody>
        
            <tfoot>
            </tfoot>
        </table>`
    }

    update(model){
        this._element.innerHTML = this._template(model);
    }
}