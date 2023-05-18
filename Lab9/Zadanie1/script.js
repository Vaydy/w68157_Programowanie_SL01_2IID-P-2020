function changeColor(buttonId) {
    var buttons = document.getElementsByTagName('button');
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].id == 'button' + buttonId) {
            buttons[i].classList.toggle('clicked');
        } else {
            buttons[i].classList.remove('clicked');
        }
    }
}
function toggleVisibility(elementId) {
    var element = document.getElementById(elementId);
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}
