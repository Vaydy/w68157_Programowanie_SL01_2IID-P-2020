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
