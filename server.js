const http = require("http");
// import { getRoutesInfo } from './Utils';
const { getRoutesInfo } = require("./Utils.js/Routes/Utils.js")

const port = 3000;

const requestHandler = (req , res) => {

    const chunks = [];
    // Listen and collect req body chunks
    req.on("data", (chunk) => chunks.push(chunk));


    // Handle the response after all the req chunks have arrived
    req.on("end" , () => {
        const {method , url} = req;
        let reqBody;
        try{
            reqBody = JSON.parse(Buffer.concat(chunks).toString());
        } catch (err){
            console.error("Request body cannot be parsed to JSON.")
            reqBody = null;
    
        }

        const {statusCode = 200 , contentType , content} = getRoutesInfo(method , url , reqBody)

        res.writeHead(statusCode , {"content-type" : contentType});
        res.write(content);
        res.end();

    });
}
const server = http.createServer(requestHandler);

server.listen(port, () => {
    console.log("Server is listening on port 3000")
})