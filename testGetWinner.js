
describe ('testing resetGame', () => {


	let mat1 =[['X','X','X'],[null,null,null],[null,null,null]]
	let mat2 =[['O','O','O'],[null,null,null],[null,null,null]]
	let mat3 =[['X',null,null],[null,'X',null],[null,null,'X']]
	let mat4 =[['X',null,'O'],[null,'X','O'],[null,null,'O']]

	// ['O','O','O']
	// ['X','X','X']
	// [null,null,null]

    it ('first row is X', ()=> {

    	var test1=getWinner(mat3)

        expect(test1).toBe('X')
    })	


    it ('first row is O', ()=> {

    	var test2=getWinner(mat2)

        expect(test2).toBe('O')
    })	


    it ('column is  O', ()=> {

    	var test4=getWinner(mat4)

        expect(test4).toBe('O')
    })	

})
    





