const token = [
    "TOKEN_test_TOKEN", //test
], devToken = [
    "TOKEN_test.dev_TOKEN", //Stoplookin9
    "TOKEN_test.coDev_TOKEN", //spectre729
], eventToken = [
    "EVENT_rickastley_EVENT",
], specialToken = process.env.TOKEN;

//import stuff in
const ran = require('./server/lib/random'), 
    fast = require('./server/lib/fasttalk'),
    //c = require('./server/config.json'), 
    app = require('./app'),
    server = require('./server/map');
//import html data in
const tokenInput = document.getElementById('nameInput'),
    nameInput = document.getElementById('nameInput');
//import definitions and index them
var def = (() => {
    let d = require('./server/lib/definitions'), i = 0;
    for (let x in d) {
        if (!d.hasOwnProperty(x)) continue; 
        d[x].index = i++;
        } return d;
})();