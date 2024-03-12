// var songFailure = new Audio("audio/fail")
// songFailure.play()



function show(){
    var display = document.getElementById('call');

    if(inp.value ===''){
    display.innerHTML='Invalid'
    var songFailure = new Audio("audio/fail-144746.mp3")
    songFailure.play()
}
else if(inp.value >= 0 && inp.value <40){
    display.innerHTML = 'F-Fail🥵😭'
    var songFailure = new Audio("audio/fail-144746.mp3")
    songFailure.play()

} else if(inp.value >= 40 && inp.value <45){
    display.innerHTML = "E-Pass🥺"
    var songFailure = new Audio("audio/fail-144746.mp3")
    songFailure.play()

}   else if(inp.value >= 45 && inp.value <50){
    display.innerHTML = "D-Pass😎"
    var songFailure = new Audio("audio/failure-drum-sound-effect-2-7184.mp3")
    songFailure.play()
} else if(inp.value >= 50 && inp.value <60){
    display.innerHTML = "C-Credit😬"
    var songFailure = new Audio("audio/success-1-6297.mp3")
    songFailure.play()
} else if(inp.value >= 60 && inp.value <70){
    display.innerHTML = "B-Good😋"
    var songFailure = new Audio("audio/success-1-6297.mp3")
    songFailure.play()
} else if(inp.value >= 70 && inp.value <=100){
    display.innerHTML = "A-Excellent🥰"
    var songFailure = new Audio("audio/Right Said Fred - Stand Up (For The Champions) .mp3")
    songFailure.play()
} else if(inp.value <0 ){
    display.innerHTML = "Invalid🤬"
    var songFailure = new Audio("audio/success-fanfare-trumpets-6185.mp3")
    songFailure.play()
} else if(inp.value > 100){
    display.innerHTML = "Invalid🤬"
    var songFailure = new Audio("audio/success-fanfare-trumpets-6185.mp3")
    songFailure.play()
}

}