const { viewRoute , APIRoute } = require("./Types.js")

const routes = {
    "GET/": new viewRoute("/" , "GET" , "<h1>HOME</h1>"),
    "GET/new" : new viewRoute("/new" , "GET" , "<h1>Is this real life?</h1>"),
    "GET/about" : new APIRoute("/about" , "GET" , (reqBody) => JSON.stringify({name: "Qunnderrie" , city: "Columbus"})),
    "POST/echo" : new APIRoute("/echo" , "POST", function (reqBody){
       return JSON.stringify({url: this.url , method : this.method, reqBody})
    }),
    notfound: new viewRoute("*" , "*" , "<h1>404 NOT FOUND!</h1>", 404)


}


module.exports = routes;

