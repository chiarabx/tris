describe ('testing resetGame', () => {
    document.body.innerHTML = __html__['index.html']
    var boxes 
    it ('all boxes are empty', ()=> {
        boxes = document.querySelectorAll('.box');
        function resetGame() {
            boxes.forEach(function(elemento) {
            elemento.innerHTML = ''
        })};
        expect(boxes[0].innerHTML).toBe('')
    })
})