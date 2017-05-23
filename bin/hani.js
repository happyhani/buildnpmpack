#!/usr/bin/env node
var util=require("util");
console.log("hello,i'm zuojy,you can type command name/site/email");
var cmd=process.argv[2];
if(cmd){
    switch(cmd){
        case "name":
            console.log("¹þÄá");
            break;
        case "site":
            console.log("http://zuojy.com");
            break;
        case "email":
            console.log("123456789@qq.com");
            break;
    }
}