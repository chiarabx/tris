describe ('testing resetGame', () => {
    document.body.innerHTML = __html__['index.html']
    var boxes 
    it ('all boxes are empty', ()=> {
        boxes = document.querySelectorAll('.box');
        resetGame();
        expect(boxes[0].innerHTML).toBe('')
    })
})