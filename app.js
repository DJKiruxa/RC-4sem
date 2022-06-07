const express = require("express"); 
const app = express();
app.use(express.static(__dirname));
const urlencodedParser = express.urlencoded({extended: false});
  
app.post("/download", urlencodedParser, function (request, response) {

    if(!request.body) {
        return response.sendStatus(400);
    
    }
    console.log(request.body);

	if(typeof request.body.playerName != "string"){     
    let json = {
        stattus: 'error',
        message: "Inccorrect type of data: playerName"
    };
    response.end(JSON.stringify(json));
    return response.sendStatus(400);
    }

    if(typeof request.body.playerPosition != "string"){     
    let json = {
        status: 'error',
        message: "Inccorrect type of data: playerPosition"
    };
    response.end(JSON.stringify(json));
    return response.sendStatus(400);
    }
    
    if(typeof Number(request.body.playerNumber) != "number"){    
    let json = {
        status: 'error',
        message: "Inccorrect type of data: playerNumber"
    };
    response.end(JSON.stringify(json));
    return response.sendStatus(400);
    }

    if((!request.body.playerName) || (!request.body.playerPosition) || (!request.body.playerPosition)){    
    let json = {
        status: 'error',
        message: "Not enough data"
    };
    response.end(JSON.stringify(json));
    return response.sendStatus(400);
    }

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
