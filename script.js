function clock(){
    let secDotes=document.getElementById('seDotes')
let minDotes=document.getElementById('minDotes')
let hrDotes=document.getElementById('hrDotes')

var date=new Date()
var hours =date.getHours()%12  //convert to 12-hours format
var amPm= date.getHours() >= 12? 'PM':'AM'
hours= hours === 0? 12: hours ; //handle midnight (0 hours)


var minutes =date.getMinutes()
var second =date.getSeconds()


//dots===================================== second
var secondsDots=''
for(var i=1; i<61;i++){
    var rotattion =i*6 //rotate  eache line by 6 degree

    if(i=== second){
        secondsDots +='<div class="dot active" style="transform: rotate('+rotattion+'deg)"></div>';
    }else{
        secondsDots +='<div class="dot" style="transform: rotate('+rotattion+'deg)"></div>';
    }

}
//end============================================


//minute==================================================
var minutesDots=''
for(var i=1; i<61;i++){
    var rotattion =i*6 //rotate  eache line by 6 degree

    if(i=== minutes){
        minutesDots +='<div class="dot active" style="transform: rotate('+rotattion+'deg)"></div>';
    }else{
        minutesDots +='<div class="dot" style="transform: rotate('+rotattion+'deg)"></div>';
    }

}

//Hours=======================================

var hoursDots=''
for(var i=1; i<61;i++){
    var rotattion =i*6 //rotate  eache line by 6 degree

    if(i=== minutes){
        hoursDots +='<div class="dot active" style="transform: rotate('+rotattion+'deg)"></div>';
    }else{
        hoursDots +='<div class="dot" style="transform: rotate('+rotattion+'deg)"></div>';
    }

}

secDotes.innerHTML= secondsDots + '<b>' + amPm+ '</b>'+
 '<h2>'+ zero(second) + ' <br><span>second</span></h2>';
minDotes.innerHTML= minutesDots +'<h2>'+ zero(minutes) + '<br><span>Minutes</span></h2>';
hrDotes.innerHTML=hoursDots+'<h2>'+ zero(hours) + '<br><span>Hours</span></h2>';



}
function zero(number){
    if(number<10){
        return "0"+number
    }
    return number;
}
setInterval(clock,1000)





