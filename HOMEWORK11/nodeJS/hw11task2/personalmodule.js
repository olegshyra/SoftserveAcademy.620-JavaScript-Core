module.exports = exports = function() {
let date = new Date();
let timeNow = parseInt(date.getHours());
//let dateNow = parseInt(date.getVarDate());
let massege = "";
const path = require('path');
const os = require('os');
console.log('time:'+timeNow);
if ((timeNow < 5) || timeNow >= 23){
    massege = "Good night,";
}
else
    if ((timeNow < 11) && timeNow >= 5){
      massege = "Good morning,";
    }
    else
        if ((timeNow < 17) && timeNow >= 11){
          massege = "Good day,";
        }
        else
            if ((timeNow < 23) && timeNow >= 17){
              massege = "Good evening,";
            }
            else massege = "Hi,";
  let today = (new Date()).toString().split(' ');
  massege = 'Date of request:' + today + '\n' + massege + require("os").userInfo().username;
  return(massege);
};