const hexToColor = (hex) =>
{
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    let color = result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;

    if (color == null)
    {
        return null;
    }

    color.name = hex;
    color.chatColor = 'DodgerBlue';
    color.defaultColor = false;
    return color;
};

const wordToColor = (word) =>
{
    word = word.toLowerCase();

    let color = 
    {
        name: 'unknown',
        chatColor: '',
        defaultColor: false,
        r: 0,
        g: 0,
        b: 0
    };

    switch(word)
    {
        case 'red':
                color.name = 'red';
                color.chatColor = 'Red';
                color.defaultColor = true;
                color.r = 255;
                color.g = 0;
                color.b = 0;
                break;

        case 'blue':
                color.name = 'blue';
                color.chatColor = 'DodgerBlue';
                color.defaultColor = true;
                color.r = 30;
                color.g = 144;
                color.b = 255;
                break;

        case 'green':
                color.name = 'green';
                color.chatColor = 'Green';
                color.defaultColor = true;
                color.r = 0;
                color.g = 204;
                color.b = 0;
                break;

        case 'purple':
                color.name = 'purple';
                color.chatColor = 'BlueViolet';
                color.defaultColor = true;
                color.r = 153;
                color.g = 0;
                color.b = 153;
                break;

        case 'black':
                color.name = 'black';
                color.chatColor = 'Coral';
                color.defaultColor = true;
                color.r = 0;
                color.g = 0;
                color.b = 0;
                break;

        case 'white':
                color.name = 'white';
                color.chatColor = 'Firebrick';
                color.defaultColor = true;
                color.r = 255;
                color.g = 255;
                color.b = 255;
                break;

        case 'orange':
                color.name = 'orange';
                color.chatColor = 'YellowGreen';
                color.defaultColor = true;
                color.r = 255;
                color.g = 128;
                color.b = 0;
                break;

        case 'lightblue':
                color.name = 'lightblue';
                color.chatColor = 'CadetBlue';
                color.defaultColor = true;
                color.r = 0;
                color.g = 255;
                color.b = 255;
                break;

        case 'pink':
                color.name = 'pink';
                color.chatColor = 'HotPink';
                color.defaultColor = true;
                color.r = 255;
                color.g = 0;
                color.b = 255;
                break;

        case 'grey':
            color.name = 'grey';
            color.chatColor = 'GoldenRod';
            color.defaultColor = true;
            color.r = 160;
            color.g = 160;
            color.b = 160;
            break;

        case 'brown':
                color.name = 'blue';
                color.chatColor = 'Chocolate';
                color.defaultColor = true;
                color.r = 102;
                color.g = 51;
                color.b = 0;
                break;

        case 'random':
            color.name = 'a random color';
            color.chatColor = 'OrangeRed';
            color.defaultColor = true;
            color.r = Math.floor(Math.random() * 255);
            color.g = Math.floor(Math.random() * 255);
            color.b = Math.floor(Math.random() * 255);
            break;
    }

    return color;
};

module.exports =
{
    wordToColor: wordToColor,
    hexToColor: hexToColor,
};