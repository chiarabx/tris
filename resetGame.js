function resetGame() {
    var boxes = document.querySelectorAll('.box'); 
    boxes.forEach(function(elemento) {
        elemento.innerHTML = ''
    })
}