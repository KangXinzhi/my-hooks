/**
 * 
 * @param obj可以为任意类型，包括字符串、数字、boolean、null、undefined、数组、对象、函数、日期、正则表达式、symbol
 * @returns 
 * 
 * 通过cacheParams来缓存参数，可以拷贝环形引用的对象
 */

const deepClone = (obj) => {
    if (obj instanceof Object) {
        let arr = {}
        for (let key in obj) {
            if (obj[key] instanceof Object) {
                arr[key] = deepClone(obj[key])
            } else {
                arr[key] = obj[key]
            }
        }
    } else {
        return obj
    }

}

let hong = {
    name: "xiaohong",
    age: 20,
    children: {
        name: "xiaoming",
        age: 6
    }
}

let lan = deepClone(hong);
lan['name'] = "xiaolan"

console.log(lan, hong)