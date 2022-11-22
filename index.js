console.log(`Welcome.`)
console.log(`Loading has started, make sure you have set everything up. keep in mind if you see this message the bot has not "started" its just loading.`)
console.log(`.`)
console.log(`..`)
console.log(`...`)
console.log(`....`)
console.log(`.....`)
console.log(`......`)
process.on('uncaughtException', function (err) {console.log(err.stack)})
const express = require('express');
const chalk = require ('chalk');
const app = require('./src/Application');

'use strict'
process.title = 'Hypixel Discord Chat Bridge'


console.log(chalk.blueBright` ██░ ██▓██   ██▓ ██▓███  ▓█████  ██▀███   ▄▄▄▄    ▒█████   ██▓     ██▓ ▄████▄  
▓██░ ██▒▒██  ██▒▓██░  ██▒▓█   ▀ ▓██ ▒ ██▒▓█████▄ ▒██▒  ██▒▓██▒    ▓██▒▒██▀ ▀█  
▒██▀▀██░ ▒██ ██░▓██░ ██▓▒▒███   ▓██ ░▄█ ▒▒██▒ ▄██▒██░  ██▒▒██░    ▒██▒▒▓█    ▄ 
░▓█ ░██  ░ ▐██▓░▒██▄█▓▒ ▒▒▓█  ▄ ▒██▀▀█▄  ▒██░█▀  ▒██   ██░▒██░    ░██░▒▓▓▄ ▄██▒
░▓█▒░██▓ ░ ██▒▓░▒██▒ ░  ░░▒████▒░██▓ ▒██▒░▓█  ▀█▓░ ████▓▒░░██████▒░██░▒ ▓███▀ ░
 ▒ ░░▒░▒  ██▒▒▒ ▒▓▒░ ░  ░░░ ▒░ ░░ ▒▓ ░▒▓░░▒▓███▀▒░ ▒░▒░▒░ ░ ▒░▓  ░░▓  ░ ░▒ ▒  ░
 ▒ ░▒░ ░▓██ ░▒░ ░▒ ░      ░ ░  ░  ░▒ ░ ▒░▒░▒   ░   ░ ▒ ▒░ ░ ░ ▒  ░ ▒ ░  ░  ▒   
 ░  ░░ ░▒ ▒ ░░  ░░          ░     ░░   ░  ░    ░ ░ ░ ░ ▒    ░ ░    ▒ ░░        
 ░  ░  ░░ ░                 ░  ░   ░      ░          ░ ░      ░  ░ ░  ░ ░      
        ░ ░                                    ░                      ░        
                                                                               `)
                                                                            
                                                                                                                                                        
   app
  .register()   
  .then(() => {
    app.connect()
  }).catch(err => {
    console.error(err) 
  })