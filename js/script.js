function openSettings(option){
    document.getElementById('background-panel').style.display = 'flex';
    document.getElementById(option + '-panel').style.display = 'block';
    setTimeout(() => {
        document.getElementById('background-panel').style.opacity = '1';
    }, 10);
    setTimeout(() => {
        document.getElementById(option + '-panel').style.marginBottom = '0vh';
    }, 100);
}

function closeSettings(option){
    document.getElementById(option + '-panel').style.marginBottom = '-100vh';
    setTimeout(() => {
        document.getElementById('background-panel').style.opacity = '0';
    }, 400);
    setTimeout(() => {
        document.getElementById('background-panel').style.display = 'none';
        document.getElementById(option + '-panel').style.display = 'none';
    }, 600);
}

function showHeaderInfo(){
    setTimeout(() => {
        document.getElementById("back").style.display = "inline-block";
        document.getElementById("step-button").style.display = "inline-block";
        setTimeout(() => {
            document.getElementById("back").style.opacity = "1";
            document.getElementById("step-button").style.opacity = '1';
            document.getElementById("header").setAttribute("align", "center");
        }, 100);
    }, 400);
}

function hideHeaderInfo(){
    setTimeout(() => {
        document.getElementById("header").setAttribute("align", "left");
        document.getElementById("step-button").style.opacity = '0';
        document.getElementById("back").style.opacity = "0";
        setTimeout(() => {
            document.getElementById("back").style.display = "none";
            document.getElementById("step-button").style.display = "none";
        }, 10);
    }, 400);
}

function nextPage(previous, next){
    document.getElementById("back").setAttribute("onclick", "previousPage('" + next + "', '" + previous + "')");

    previous = document.getElementById(previous).style;
    next = document.getElementById(next).style;

    previous.marginLeft = '-100vw';
    setTimeout(() => {
        previous.display = 'none';
        next.display = 'block';
        setTimeout(() => {
            next.marginLeft = '0vw';
        }, 1);
    }, 400);
}

function previousPage(actual, previous){
    if(previous == "index"){
        hideHeaderInfo();
    }

    previous = document.getElementById(previous).style;
    actual = document.getElementById(actual).style;

    actual.marginLeft = '100vw';
    setTimeout(() => {
        actual.display = 'none';
        previous.display = 'block';
        setTimeout(() => {
            previous.marginLeft = '0vw';
        }, 100);
    }, 400);
}

function verifyInput(input, button, type){
    y = true;
    for(x = 0; x < input.length; x++){
        if(document.getElementById(input[x]).value == ""){
            y = false;
        }
    }

    changeSkip(y, button, type);
}

function changeSkip(status, button, type){
    button = document.getElementById(button);

    switch(type){
        case 1:
            if(status){
                button.innerHTML = "Next";
            }
            else{
                button.innerHTML = "Skip";
            }
        break;
        case 2:
            if(status){
                button.style.opacity = "1";
            }
            else{
                button.style.opacity = "0";
            }
        break;
    }
}

function verifyCriteria(type, e){
    switch(type){
        case "num":
            allowedKeys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            if(allowedKeys.includes(parseInt(e.key, 10))){
                return true;
            }
            else{
                return false;
            }
        break;
    }
}