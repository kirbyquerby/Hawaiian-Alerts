function robotCheck(){

    var newImg = document.createElement("img");
    newImg.src = "robotcheck_hardcoded_boxes.png";
    newImg.onclick = captchaClick;
    document.getElementById("checkPlaceholder").appendChild(newImg);
    robotCheck.count = 0;
    robotCheck.img = newImg;

}

function doDrill(){
    window.alert("Good job!");
}

function doReal(){
    window.alert("Oh no, wrong button! Don't tell anyone and maybe nobody will notice?");
}

function successfulCaptcha(){
    robotCheck.img.style.display = "none";
    document.getElementById("captchaInit").src="norobotSuccess.png";
    document.getElementById("buttonholder").style.display = "block";
}

function captchaClick(){
    console.log("hello");
    var newCount = ++robotCheck.count;
    robotCheck.img.src = "robotcheck_hardcoded_boxes_stage_"+newCount+".png";

    if(newCount == 5){
        setTimeout(successfulCaptcha, 1000);
    }
    

}