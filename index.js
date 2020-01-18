const express=require('express')

const app=express()


const accountSid = '';
const authToken = '';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+12054311041',
     to: '+91##########'
   })
  .then(message => console.log(message));
  // .sid

app.listen(3000,()=>{
  console.log("server started");
})
