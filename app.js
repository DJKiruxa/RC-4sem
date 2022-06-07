const express = require("express"); 
const app = express();
app.use(express.static(__dirname));
const urlencodedParser = express.urlencoded({extended: false});
  
app.post("/download", urlencodedParser, function (request, response) {

    

    let json = {
        name: 'Lacross',
        playerName: request.body.playerName,
        playerPosition: request.body.playerPosition,
        playerNumber: request.body.playerNumber,
        playerEquip: request.body.playerEquip
    };

    response.end(JSON.stringify(json));
    response.sendStatus(200);

    
});
port = 5500;
app.listen(port, ()=>console.log("Server up, port: ", port));
