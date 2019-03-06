    function getWinner(matrix) {
        if ((matrix[0][0]+matrix[0][1]+matrix[0][2] == 'XXX') || [matrix[1][0]+matrix[1][1]+matrix[1][2]] == 'XXX' || [matrix[2][0]+matrix[2][1]+matrix[2][2]] == 'XXX' || [matrix[0][0]+matrix[1][0]+matrix[2][0]] == 'XXX' || [matrix[0][1]+matrix[1][1]+matrix[2][1]] == 'XXX' || [matrix[2][0]+matrix[2][1]+matrix[2][2]] == 'XXX' || [matrix[0][0]+matrix[1][1]+matrix[2][2]] == 'XXX' || [matrix[0][2]+matrix[1][1]+matrix[2][0]] == 'XXX') {
            return 'X'
        }
        if ((matrix[0][0]+matrix[0][1]+matrix[0][2] == 'OOO') || [matrix[1][0]+matrix[1][1]+matrix[1][2]] == 'OOO' || [matrix[2][0]+matrix[2][1]+matrix[2][2]] == 'OOO' || [matrix[0][0]+matrix[1][0]+matrix[2][0]] == 'OOO' || [matrix[0][1]+matrix[1][1]+matrix[2][1]] == 'OOO' || [matrix[2][0]+matrix[2][1]+matrix[2][2]] == 'OOO' || [matrix[0][0]+matrix[1][1]+matrix[2][2]] == 'OOO' || [matrix[0][2]+matrix[1][1]+matrix[2][0]] == 'OOO') {
            return 'O'
        }
        else return null
    }