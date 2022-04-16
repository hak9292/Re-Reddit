import mongoose from "mongoose";
import Comment from './models/Comment.js';
import 'dotenv/config';

mongoose
    .connect(process.env.MONGODB_URI, {
useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('MONGO CONNECTION OPEN!!!');
    })
    .catch((err) => {
        console.log(err);
    });

const seedComments = [
    {
        author: 'Model-51',
        title: 'SBGW289',
        body: 'I would love to hear what others think of SBGW289? My AD told me I could have one in 5 weeks!',
        date: new Date()
    },
    {
        author: 'Ambitious_Drag_2395',
        title: 'Spring bar (1) US$15',
        body: 'I have ordered a Grand Seiko “spring drive”, it is coming soon.. I ask the boutique if I could have a spare spring bar.. Service center told the boutique 1 piece 500 baht or 2 pieces 1000 baht ($30).. Normal? Thailand only?',
        date: new Date()
    },
    {
        author: 'Leino22',
        title: 'Need help deciding',
        body: 'I am looking at getting one of the titanium dive watches I just can’t figure out if I should get the high beat or the spring drive. Right now I’m leaning towards the spring drive as it is the classic Grand Seiko movement and it’s cheaper as well. Any thoughts would be greatly appreciated',
        date: new Date()
    },
    {
        author: 'technice',
        title: 'Water Resistance Question',
        body: 'Greetings fellow GS fans/owners. Does anyone have experience with the water resistance of Grand Seiko timepieces? I just ordered an SBGM221, and they say it is "splash resistant" up to 30 meters. Also noticed that some of Grand Seikos sports watches are also rated at 30 meters. While it leaves something to be desired, 30 meters is a lot more than a splash... have any of you submerged yours and had it survive? Thanks!',
        date: new Date()
    },
    {
        author: 'Mr_Cucumber',
        title: 'SBGW231 - Has the Bubble Issue Been Fixed?',
        body: 'I’ve been tempted to grab an SBGW231 for a while, but I’ve noticed that the model had some issues with bubbles (glue?) beneath the crystal. There have been several threads I’ve found across the web regarding this issue. The watch I tested on when I visited an AD last time (about three-four months ago) had very obvious bubbles on the left side of the crystal. Also, most pics I see on the internet seem to have this issue. \n Do you know if GS has resolved this issue yet? I don’t know why this issue seem to only have affected the SBGW231. I’ve never seen this issue affect the SBGW235 or SBGW267, which are basically different versions of the aforementioned watch. GS is famous for it’s quality control, so I don’t know why this model has been struck with this defect…',
        date: new Date()
    }
];

const seedDB = async() => {
    await Comment.deleteMany({});
    await Comment.insertMany(seedComments);
};

seedDB().then(() => {
    mongoose.connection.close();
})