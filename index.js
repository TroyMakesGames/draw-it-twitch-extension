const streamingController = require('./controllers/streaming-controller');
const imageController = require('./controllers/image-controller');
const chatbotController = require('./controllers/chatbot-controller');

streamingController.startStreaming();
imageController.startTick();
chatbotController.startChatbot();