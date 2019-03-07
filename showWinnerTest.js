describe("testo se mostra l'utente che ha vinto", function() {
    document.body.innerHTML = __html__['index.html']
    let matrix = [['X','X','O'],['O','X','O'],['X','O','X']]
    it("sta mostrando il vincitore", function() {
        showWinner(matrix)
        expect(document.querySelector('#mostra-vincitore').innerHTML).toBe('X VINCE');
    });
});
      