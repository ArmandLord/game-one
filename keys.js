document.onkeydown = e => {
    switch(e.keyCode){
        case 38:
           return ar.move('UP')
        case 40:
           return ar.move('DOWN')
        case 39:
           return ar.move('RIGHT')
        case 37:
           return ar.move('LEFT')
        default:
            break;
    }
}

