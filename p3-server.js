const fs = require("fs");
const fastify = require("fastify")();
const {coinCount,coins} = require("./p3-module.js");

 // GET route
 fastify.get("/", (request, reply) => {
     fs.readFile(`${__dirname}/index.html`,(error, data)=> {
         if (error){
            //reply.statusCode=500;
            reply.code(500);
            //reply.code=500;
            reply.header('Content-Type','text/html');
            reply.send("Errorprocessingrequest");
         }
        else{
            //reply.statusCode=200;
            reply.code(200);
            //reply.code=200;
            reply.header('Content-Type','text/html');
            //reply.setHeader('Content-Type','text/html');
            reply.send(data);
            //reply.write(data);
            //reply.end();
        }
        } ) 
 });
    // Start server and listen to requests using Fastify
const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  console.log(`Server listening on http://${listenIP}:${listenPort}`);
  //console.log(`Server listening on ${listenIP}:${listenPort}`);
}); 
//coin
fastify.get("/coin", (request, reply) => {
      const {denom = 0, count = 0} = request.query
      console.log("this is a test", denom,count);
      
    let coinValue = coinCount({ denom: parseInt(denom), count: parseInt(count) })
        //reply.statusCode=200;
        reply.code(200);
        //reply.code=200;
        reply.header('Content-Type','text/html');
        //reply.setHeader('Content-Type','text/html');
        reply.send(`<h2>Value of ${count} of ${denom} is ${coinValue}</h2><br /><a href="/">Home</a>`);
        //reply.write(data);
        //reply.end();
       
       } ) ;
    //coins
    fastify.get("/coins", (request, reply) => {
    const {option} = request.query
    console.log("get coins from query")
                
    let coinValue = "";

    switch(option) {
            case "1": 
           coinValue = coinCount({ denom: 5, count: 3 }, { denom: 10, count: 2 });   // option = 1
            break;

            case "2": 
            coinValue = coinCount(...coins);    // option = 2
            break;

            case "3": 
            coinValue = coinCount(coins);    // Extra credit: option = 3
            break;

            default: coinValue = 0;
            break;
    }
        
   // let coinValue = coinCount({ denom: parseInt(denom), count: parseInt(count) })
    //reply.statusCode=200;
    reply.code(200);
    //reply.code=200;
    reply.header('Content-Type','text/html');
    //reply.setHeader('Content-Type','text/html');
    reply.send(`<h2>Option ${option} value is ${coinValue}</h2><br /><a href="/">Home</a>`);
    //reply.write(data);
    //reply.end();
                 
} ) ;