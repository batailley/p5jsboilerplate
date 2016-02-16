'use strict';
import  p5 from "../node_modules/p5/lib/p5";
import {pouet} from "./test";
//var p5 = require("../node_modules/p5/lib/p5");
function myApp() {
    var monP5 = new p5();
    pouet();
    return monP5;
};

document.addEventListener('DOMContentLoaded', function(){
    // do something
    window.App  = new myApp();

});