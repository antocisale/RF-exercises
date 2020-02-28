let urlFormatString = '/:version/api/:collection/:id';
let urlInstance = '/6/api/listings/3?sort=desc&limit=10';

const createKeysArray = (keyStrings)=>{
    let urlFormat = keyStrings.split("/");
    let arr = []
    for (let elem of urlFormat){
        if (elem.charAt(0) ===":"){
            let modElem = elem.substring(1);
            arr.push(modElem)
        }
    }
    return arr
};

const parseSlashes = (format,instance)=>{
    let parsedObject = {};
    let formatArr = format.split('/');
    let instanceArr = instance.split('/');
    
    if (!(formatArr.length >= instanceArr.length))
        throw ('Error in url format');

    for(let i=0;i<formatArr.length;i++){
        if (formatArr[i].match('^:[a-zA-Z0-9]')){
            let modElem = formatArr[i].substring(1);
            parsedObject[modElem] = instanceArr[i]
        }
    }

    return parsedObject;
}

const getParamsValues = (url)=>{
    let obj = {}
    let paramExp='[a-zA-Z0-9]=[a-zA-Z0-9]';
    let params = url.split("&");

    for (let values of params){
        if (values.match(paramExp)){
            let parts = values.split("=");
            obj[parts[0]]= parts[1];
        }
    }
    return obj

}

const parseUrl = (format, url)=>{
    let dividedUrl = url.split("?");
    
    if (dividedUrl.length > 1){
        let mainObj = parseSlashes(format,dividedUrl[0]);
        let params = getParamsValues(dividedUrl[1]);
        let finalObj = {...mainObj,...params};
        return finalObj;
    }
    return parseSlashes(format,url);

}



module.exports = {
    parseSlashes,
    getParamsValues,
    parseUrl
}