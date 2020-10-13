const Express = require("express");

const expressApplicationObject = new Express();


expressApplicationObject.get('/', (request, response) => {
    console.log("[server: Root GET request received");
    console.log("TYPE:", request.method);
    console.log("URL:", request.url);
    console.log("[server]: Response being dispatched ->");
    response.send('Root Route Hit, hello from the todo server');
});

expressApplicationObject.listen(9001, () => {
    console.log("[server]: App is listening on port 9001")
    });