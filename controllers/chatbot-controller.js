const tmi = require('tmi.js');
const imageController = require('./image-controller');
const colorHelper = require('../helpers/color-helper');

const OPTIONS =
{
    options:
    {
        debug: true
    },
    connection:
    {
        cluster: 'aws',
        reconnect: true
    },
    identity:
    {
        username: 'AnEmptyCanvas',
        password: 'oauth:np0u1m18vdl6bvltxtmlrk3wfpgfn5'
    },
    channels: ['anemptycanvas'],
};

const startChatbot = () =>
{
    const client = new tmi.client(OPTIONS);
    client.connect();

    client.on('connected', (address, port) =>
    {
        client.action('anemptycanvas', 'Ready to paint.')
    });

    client.on('chat', (channel, user, message, self) =>
    {
        if (self) return;

        const messageSplit = message.split(' ');
        if (messageSplit.length != 4) return;

        if (messageSplit[0] != '!paint') return;

        const x = parseInt(messageSplit[1]);
        if (!x) return;
        if (x <= 0 || x > imageController.IMAGE_WIDTH) return;

        const y = parseInt(messageSplit[2]);
        if (!y) return;
        if (y <= 0 || y > imageController.IMAGE_HEIGHT) return;

        const cords =
        {
            x: x,
            y: y,
        };

        let color = null;
        if (messageSplit[3].charAt(0) == '#')
        {
            color = colorHelper.hexToColor(messageSplit[3]);
        }
        else
        {
            color = colorHelper.wordToColor(messageSplit[3]);
        }
        if (!color) return;
        if (color.name == 'unknown') return;
      
        if (color.defaultColor) client.color('anemptycanvas', color.chatColor);
        client.action('anemptycanvas', `${user.username} is painting x${x}, y${y} ${color.name}.`);
        imageController.updatePixelColor(cords, color);
    });
}

module.exports =
{
    startChatbot: startChatbot,
};



/*
channel: #anemptycanvas, user: {"badge-info":null,"badges":{"premium":"1"},"color":"#0000FF","display-name":"Mooseyballs","emotes":null,"flags":null,"id":"b50b685e-1092-4ee1-9882-55b61f379bb4","mod":false,"room-id":"468016471","subscriber":false,"tmi-sent-ts":"1571573450497","turbo":false,"user-id":"65841188","user-type":null,"emotes-raw":null,"badge-info-raw":null,"badges-raw":"premium/1","username":"mooseyballs","message-type":"chat"}, message: test
*/