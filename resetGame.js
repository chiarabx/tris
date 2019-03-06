function resetGame() {
    boxes.forEach(function(elemento) {
        elemento.innerHTML = ''
    })
    matrix = [[0,0,0],[0,0,0],[0,0,0]]
}