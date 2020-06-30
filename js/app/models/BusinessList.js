class BusinessList {
    constructor() {
        this._businessList = [];
    }

    add(negotiation) {
        this._businessList.push(negotiation);
    }

    get negotiations() {
        return [].concat(this._businessList);
    }

    delete() {
        this._businessList = [];
    }

    get totalVolume() {
        return this.negotiations.reduce((total, item) => total + item.volume, 0.0);
    }

    sortting(criterion) {
        this._businessList.sort(criterion);
    }

    reverseSortting() {
        this._businessList.reverse();
    }

}
//# sourceMappingURL=BusinessList.js.map