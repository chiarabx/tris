describe ('testing resetGame', () => {

   document.body.innerHTML = __html__['index.html']
   var boxes = document.querySelectorAll('.box')
   boxes[0].innerHTML='test'
   boxes[2]='0'

	function resetGame() {
	    boxes = document.querySelectorAll('.box'); 
	    boxes.forEach(function(elemento) {
	        elemento.innerHTML = ''
	    })
	}

    it ('all boxes are empty', ()=> {

    	//resetGame()

        expect(boxes[0].innerHTML).toBe('')
    })	

})
