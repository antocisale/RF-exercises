const urlParser = require('./parser'),
    parseSlashes = urlParser.parseSlashes,
    parseUrl = urlParser.parseUrl,
    getParamsValues = urlParser.getParamsValues;

test("validate an object is created with 3 keys and its instances", () => {
    expect(
        parseSlashes('/:version/api/:collection/:id', '/6/api/listings/3')
    ).toStrictEqual({
        version: "6",
        collection: "listings",
        id: "3"
    })
});

test("validate the error if the url doesn't match the instances", () => {
        expect(() => {
            parseSlashes('/:version/api/:id', '/6/api/listings/3')
        }).toThrow('Error in url format');
    
});

test('separate 3 params in different attibutes of an object',()=>{
    let params = getParamsValues('param1=hola&param2=hola2&param3=hola3');
    expect(params).toStrictEqual({
        param1: "hola",
        param2: "hola2",
        param3: "hola3"
    })

});

test('check if the format and the url given return the correct object',()=>{
    let urlFormatString = '/:version/api/:collection/:id';
    let urlInstance = '/6/api/listings/3?sort=desc&limit=10';
    let result = parseUrl(urlFormatString,urlInstance);
    expect(result).toStrictEqual({
        version: "6",
        collection:"listings",
        id: "3",
        sort: "desc",
        limit: "10"
    })

});

test('check if an url without params is returned correctly', ()=>{
    let urlFormatString = '/:version/api/:collection/:id';
    let urlInstance = '/6/api/listings/3';
    let result = parseUrl(urlFormatString,urlInstance);
    expect(result).toStrictEqual({
        version: "6",
        collection:"listings",
        id: "3"
    })
})