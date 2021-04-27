const $button = document.querySelector('.but15')


function update(){
    //frames
    frames++
    // console.log(frames)
    //
    clearCanvas()
    fondo.draw()
    ar.draw()
}


function start(){
    if(intervalId) return
    intervalId  = setInterval(update, 1000/60)
}

$button.onclick = start

function clearCanvas(){
    ctx.clearRect(0, 0, $canvas.width, $canvas.height)
}
