const ffmpeg = require('ffmpeg-cli');
const imageController = require('./image-controller');
const STREAM_ID = `live_468016471_gTJoiyNAMoOmwuQWdJAU6mHhJdOrdi`;
const INGEST_ENDPOINT = `live-lhr`;
const REFRESH_FLAGS = '-hls_list_size 30 -hls_flags delete_segments+append_list+omit_endlist';
const SCALE_FLAGS = '-vf scale=1920x1080'
const QUALITY_FLAGS = '-q:v 0';
const COMMANDS = `-nostdin -framerate 15 -re -loop 1 -i ${imageController.IMAGE_FILENAME} ${REFRESH_FLAGS} ${SCALE_FLAGS} -f flv -vcodec libx264 ${QUALITY_FLAGS} -pix_fmt yuv420p -preset slow -r 15 -g 30 "rtmp://${INGEST_ENDPOINT}.twitch.tv/app/${STREAM_ID}"`;

const startStreaming = () =>
{
    ffmpeg.run(COMMANDS).catch((error) =>
    {
        console.error(error);
    });
};

module.exports =
{
    startStreaming: startStreaming
};