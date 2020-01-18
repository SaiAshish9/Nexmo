const express=require('express')

const app=express()


const accountSid = 'ACb4c2180b0b5d3635174c97bf80f48743';
const authToken = 'a196629698fd0e4ca151ab2bb6b36324';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+12054311041',
     to: '+918920125544'
   })
  .then(message => console.log(message));
  // .sid

app.listen(3000,()=>{
  console.log("server started");
})
