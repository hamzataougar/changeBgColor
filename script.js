function changeBgColor(color){
    let bg = document.querySelector('.bg');
    let selectedColor= color.value;
    bg.style.background = selectedColor;
    bg.innerHTML = color.options[color.selectedIndex].text;
}