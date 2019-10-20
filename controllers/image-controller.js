const fs = require('fs');
const PNG = require('pngjs').PNG;

const IMAGE_FILENAME = 'image.png';
const TICK_SPEED = 1000;
const IMAGE_WIDTH = 640;
const IMAGE_HEIGHT = 360;

const startTick = () =>
{
    setInterval(tick, TICK_SPEED);
};

const tick = () =>
{
    
};

const updatePixelColor = (cords, color) => 
{
    // Remove zero index.
    cords.x = cords.x - 1;
    cords.y = cords.y - 1;

    fs.createReadStream(IMAGE_FILENAME)
    .pipe(new PNG({
        filterType: 4
    }))
    .on('parsed', function() {
 
        for (var y = 0; y < this.height; y++) {
            for (var x = 0; x < this.width; x++) {
                var idx = (this.width * y + x) << 2;
 
                if (x == cords.x && y == cords.y)
                {
                    this.data[idx] = color.r;
                    this.data[idx+1] = color.g;
                    this.data[idx+2] = color.b;
                    console.log('Updated image pixel.');
                }
            }
        }
 
        this.pack().pipe(fs.createWriteStream(IMAGE_FILENAME));
    });
};

module.exports =
{
    startTick: startTick,
    updatePixelColor: updatePixelColor,
    IMAGE_FILENAME: IMAGE_FILENAME,
    IMAGE_WIDTH: IMAGE_WIDTH,
    IMAGE_HEIGHT: IMAGE_HEIGHT
};