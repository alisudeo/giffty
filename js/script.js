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