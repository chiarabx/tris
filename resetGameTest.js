describe("cerco di vedere se lo schema è vuoto", function() {
    document.body.innerHTML = __html__['index.html']
    let matrix = [['','',''],['','',''],['','','']]
    it("lo schema è vuoto", function() {
        resetGame()
        expect(matrix[0][0]).toBe('');
    });
});