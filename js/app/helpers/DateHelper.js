class DateHelper{

    constructor(){
        throw new Error('This class cannot be instantiated! Please call the static method..');
    }

    static stringToDate(string){
        return new Date(...
            string.value
            .split("-")
            .map((item, index) => {
                if(index == 1){
                    return item - 1
                }
                return item
            })
        );
    }

    static dateToString(date){
        return `${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()}` 
    }

}