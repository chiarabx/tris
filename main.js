let matrix = [['','',''],['','',''],['','','']]
let turno = 1

function tris(cella) {
    let idBoxString = cella.id
    idBox = idBoxString.split('-')
    idCella = idBox[1].split('')
    console.log(idCella[0],idCella[1])
    posX = idCella[1]
    posY = idCella[0]
    if(isValidStep(matrix,turno,posX,posY)) {
        turno == 1 ? matrix[posY][posX] = 'X' : matrix[posY][posX] = 'O'
        setValues(matrix)
        if (getWinner(matrix)) showWinner(matrix)
        turno = -turno
    } else {
        setTimeout(()=>{
            alert('LA CELLA è GIà PIENA!!'); 
        },10) 
    }
}

function isValidStep(matrice,turno,posX,posY) {
    return matrice[posY][posX] != '' ? false : true
}

function setValues(matrice) {
    for(let i=0; i<3; i++) {
        for(let j=0; j<3; j++) {
            document.querySelector('#box-'+i+j).innerHTML = matrice[i][j]
        }
    }
}

function getWinner(matrice) {
    if ((matrice[0][0]+matrice[0][1]+matrice[0][2] == 'XXX') || [matrice[1][0]+matrice[1][1]+matrice[1][2]] == 'XXX' || [matrice[2][0]+matrice[2][1]+matrice[2][2]] == 'XXX' || [matrice[0][0]+matrice[1][0]+matrice[2][0]] == 'XXX' || [matrice[0][1]+matrice[1][1]+matrice[2][1]] == 'XXX' || [matrice[2][0]+matrice[2][1]+matrice[2][2]] == 'XXX' || [matrice[0][0]+matrice[1][1]+matrice[2][2]] == 'XXX' || [matrice[0][2]+matrice[1][2]+matrice[2][2]] == 'XXX') {
        return 'X'
    }
    if ((matrice[0][0]+matrice[0][1]+matrice[0][2] == 'OOO') || [matrice[1][0]+matrice[1][1]+matrice[1][2]] == 'OOO' || [matrice[2][0]+matrice[2][1]+matrice[2][2]] == 'OOO' || [matrice[0][0]+matrice[1][0]+matrice[2][0]] == 'OOO' || [matrice[0][1]+matrice[1][1]+matrice[2][1]] == 'OOO' || [matrice[2][0]+matrice[2][1]+matrice[2][2]] == 'OOO' || [matrice[0][0]+matrice[1][1]+matrice[2][2]] == 'OOO' || [matrice[0][2]+matrice[1][2]+matrice[2][2]] == 'OOO') {
        return 'O'
    }
    else return null
}

function showWinner(matrice) {
    getWinner(matrice) == 'X' ? document.querySelector('#mostra-vincitore').innerHTML = 'X VINCE' : document.querySelector('#mostra-vincitore').innerHTML = 'O VINCE'
}

function resetGame() {
    var boxes = document.querySelectorAll('.box'); 
    boxes.forEach(function(elemento) {
        elemento.innerHTML = ''
    })
    matrix = [['','',''],['','',''],['','','']]
    document.querySelector('#mostra-vincitore').innerHTML = ''
}