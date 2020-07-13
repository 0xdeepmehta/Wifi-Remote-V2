/*************************************************************
 * Name: Wifi Remote V2 Client
 * Version: 2.0.0
 * Language: Javascript
 * Author: @vivekascoder
 * Mail: vivekascoder@gmail.com
 * Date: 12 July 2020
 * Time: 11:25 PM
 ************************************************************/

// Declaring all the dom buttons here...
var play = document.querySelector("button[command='play']");
var volume_down = document.querySelector("button[command='volume_down']");
var volume_up = document.querySelector("button[command='volume_up']");
var close_window = document.querySelector("button[command='close_window']");
var open_terminal = document.querySelector("button[command='open_terminal']");
var open_firefox = document.querySelector("button[command='open_firefox']");
var press_tab = document.querySelector("button[command='press_tab']");
var log_out = document.querySelector("button[command='log_out']");
var shut_down = document.querySelector("button[command='shut_down']");
var arrow_left = document.querySelector("button[command='arrow_left']");
var arrow_right = document.querySelector("button[command='arrow_right']");
var arrow_up = document.querySelector("button[command='arrow_up']");
var arrow_down = document.querySelector("button[command='arrow_down']");
var press_enter = document.querySelector("button[command='press_enter']");
var write = document.querySelector("button[command='write']");

var url = "ws://192.168.43.188:5678"
// Change the URL above with your local ip address
// You can find your local ip with 'sudo ifconfig' in Linux
// And 'ipconfig' in windows

let socket = new WebSocket(url);
play.addEventListener("click", clickHandler);
volume_down.addEventListener("click", clickHandler);
volume_up.addEventListener("click", clickHandler);
close_window.addEventListener("click", clickHandler);
open_terminal.addEventListener("click", clickHandler);
open_firefox.addEventListener("click", clickHandler);
press_tab.addEventListener("click", clickHandler);
log_out.addEventListener("click", clickHandler);
shut_down.addEventListener("click", clickHandler);
arrow_left.addEventListener("click", clickHandler);
arrow_right.addEventListener("click", clickHandler);
arrow_up.addEventListener("click", clickHandler);
arrow_down.addEventListener("click", clickHandler);
press_enter.addEventListener("click", clickHandler);
write.addEventListener("click", writeHandler);

function clickHandler(e){
    var command = e.target.attributes.command.value;
    console.log(command);
    socket.send(command);
}
function writeHandler(){
    var text = document.getElementById('text').value;
    socket.send(text);
}
socket.onopen = ()=>{
    alert("Success: WEbSocket Connection is live.")
}
socket.onclose = ()=>{
    alert("WebSocket Connection to host machine is stopped.")
}