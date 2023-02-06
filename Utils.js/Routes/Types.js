//  Determine route info
class Route {
    constructor(url , method , statusCode = 200){
        this.url = url;
        this.method = method;
        this.statusCode = statusCode
    }
}

class viewRoute extends Route{
    constructor(url , method, content, statusCode = 200){
        super(url , method, statusCode);
        this.contentType = 'text/html';
        this.content = content;
    }

    render(){
        return `<main id="root">
        ${this.content}
        </main>`

    }
    

}
class APIRoute extends Route{
    constructor(url  , method, contentHandler , statusCode = 200){
        super(url , method, statusCode);
        this.contentType = "application/json";
        this.contentHandler = contentHandler;
    }


    render(reqBody){
        return this.contentHandler(reqBody)
    }

    

}


module.exports = {
    viewRoute,
    APIRoute,
    Route
}