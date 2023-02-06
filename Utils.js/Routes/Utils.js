const routes = require("./index.js")

const getRoutesInfo = (method , url, reqBody) => {
    const route = routes[method + url] || routes["notfound"];
    const info = {
        statusCode: route.statusCode,
        contentType: route.contentType,
        content: route.render()
    };

    return info;

}


module.exports =  { getRoutesInfo };
