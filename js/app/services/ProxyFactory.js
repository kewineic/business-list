class ProxyFactory{

    static create(object, props, action){
        return new Proxy(object, {
            get(target, prop, receiver){
                if(props.includes(prop) && ProxyFactory._isFunction(target[prop])){
                    return function(){
                        let returnReflect = Reflect.apply(target[prop], target, arguments);
                        action(target);
                        return returnReflect
                    }
                }
                return Reflect.get(target, prop, receiver);
            },

            set(target, prop, value, receiver){

                let returnReflect = Reflect.set(target, prop, value, receiver);
                if(props.includes(prop)){
                    action(target);
                }
                return returnReflect; 
              
            }
        });
    }

    static _isFunction(functionValidate){
        return typeof(functionValidate) == typeof(Function)
    }

}