// make a trial account by using your email id and login and you will get authoken and sid from there and then get to message section and there you will get trial number and and can use for api 

const express=require('express')
const app=express()

const accountsid="";//it willl get after making an account on twilio
const authToke="";//same up
const client=require('twilio')(accountsid,authToke)
client.messages.create({
    body:'hi bro',
    to:'',//which number you have to send
    from:' '//twilio trial number

})
.then((message)=>console.log(messagesid))