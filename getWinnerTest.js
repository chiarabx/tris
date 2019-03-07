describe("testo mostra se ha vinto un utente", function() {
    document.body.innerHTML = __html__['index.html']
    let matrix = [['X','X','O'],['O','X','O'],['X','O','X']]
    it("c'è un vincitore", function() {
        expect(getWinner(matrix)).toBe('O');
    });
});