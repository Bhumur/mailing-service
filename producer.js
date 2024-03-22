const { Queue } = require('bullmq');

const notificationQueue = new Queue('email-queue',{
    connection :{
        host: '127.0.0.1',
        port: '6379'
    }
});

async function init () {
    const res = await notificationQueue.add('email to bhumur', {
        email: "bhumur@gmail",
        subject: "Welcome Home",
        body: "Hey bhumur",
    });
    console.log('Job added to queue :', res.id);
}

init();