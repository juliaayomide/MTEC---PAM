function maior (a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
    return b;
    } else {
    return c;
    }
}

function menor(a, b, c) {
    var r = a < b && a < c ? a : b < a && b < c ? b : c;
    return r;
}

function formataMes(mes) {
     switch (mes){
        case 1:
            console.log('Janeiro');
            break;
        case 2:
            console.log('Fevereiro');
            break;
        case 3:
            console.log('Março');
            break;
        case 4:
            console.log('Abril');
            break;
        default:
            console.log('Não implementei ainda');

     }
}

console.log (maior(5, 2, 8));
console.log(menor(3, 4, 7));
formataMes(2)
