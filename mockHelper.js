module.exports = { parseRequestAndGetJson }
const fs = require('fs');
const url = require('url');
const rootDirectory = './api/'
const rootUriPath = '/api3/'

let getPath = (method, fileName) => rootDirectory + method + '/' + fileName + '.json';

function getMyJson(path) {
    let preparedJson = null;
    try {
        preparedJson = JSON.parse(fs.readFileSync(path, 'utf8'));
    } catch (e) {
        console.log('Nothing Found');
    }
    return preparedJson;
}

function parseRequestAndGetJson(requestUrl) {
    let searchParameter = "";
    let queryData = url.parse(requestUrl, true).query;
    let pathname = url.parse(requestUrl).pathname;
    let methodName = pathname.substr(rootUriPath.length);

    if (queryData.inn)
        searchParameter = queryData.inn;

    if (queryData.ogrn)
        searchParameter = queryData.ogrn;

    if (queryData.fio)
        searchParameter = queryData.fio;

    if (queryData.q)
        searchParameter = queryData.q;

    if (queryData.innfl)
        searchParameter = queryData.innfl;

    console.log(`Method: ${methodName}  Param: ${searchParameter}`);

    return getMyJson(getPath(methodName, searchParameter));
}
