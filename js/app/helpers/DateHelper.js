class DateHelper{

    constructor(){
        throw new Error('This class cannot be instantiated! Please call the static method..');
    }

    static stringToDate(string){
        
        if(!/\d{4}-\d{2}-\d{2}/.test(string)){
            throw new Error('The date must be in the format yyyy-mm-dd');
        }

        return new Date(...string
            .split('-')
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