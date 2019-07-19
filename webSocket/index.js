
// node-server
const WebSocketServer = require('ws').Server;
const wss = new WebSocketServer({ port: 8181 });
let sendRefresh;
const createSocket = () => {
    wss.on('connection', function(ws) {
        console.log('clients', wss.clients);
        console.log('client connected');
        ws.on('message', function(message) {
            console.log(message);
        });
        // 同时支持多链接
        sendRefresh = () => {
            wss.clients.forEach(function each(client) {
                client.send('refresh');
            });
        };
    });
};
const getsendRefresh = () => sendRefresh || function() {};

export {
    wss,
    getsendRefresh,
    createSocket
};

 // client
 ws.onopen = () => {
    console.log('connect Success!!!');
};
ws.onmessage = (evt) => {
    if (evt.data && `${evt.data}` === 'refresh') {
        this.getData();
    }
};
ws.onerror = (evt) => {
    ws.onclose = () => {
        console.log('connect has closed');
    };
};
