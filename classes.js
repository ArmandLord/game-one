//Fondo de canvas
class Fondo {
    constructor(){
        this.x = 0
        this.y = 0
        this.img = new Image()
        this.img.src = "https://i.ibb.co/q0JqVt5/armando.jpg" //"https://i.ibb.co/pKKHgDP/you.png"
        this.width = $canvas.width
        this.height = $canvas.height
        this.img.onload = () => {
            this.draw()
        }
    }
    draw(){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
}

//Personaje
class Personaje {
    constructor(x, y){
        this.x = x
        this.y = y
        this.width = 70
        this.height = 90
        this.vel = 10
        //sprites
        this.status = 'ORIGEN'
        this.animateHelper = 1
        //Jugador en reposo
        this.img = new Image
        this.img.src = "templerun/Idle__000.png"
        this.imgI = new Image()
        this.imgI.src = "templerun/Idle__000.png" //"https://arquitecturahb.com/wp-content/uploads/2019/05/arbol-3.png"
        //Jugador muerto (Game Over)
        this.img1D = new Image()
        this.img1D.src = "templerun/Dead__000.png"
        this.img2D = new Image()
        this.img2D.src = "templerun/Dead__001.png"
        this.img3D = new Image()
        this.img3D.src = "templerun/Dead__002.png"
        this.img4D = new Image()
        this.img4D.src = "templerun/Dead__003.png"
        this.img5D = new Image()
        this.img5D.src = "templerun/Dead__004.png"
        this.img6D = new Image()
        this.img6D.src = "templerun/Dead__005.png"
        this.img7D = new Image()
        this.img7D.src = "templerun/Dead__006.png"
        // //Jugador corriendo
        this.img1R = new Image()
        this.img1R.src = "templerun/Run__000.png"
        this.img2R = new Image()
        this.img2R.src = "templerun/Run__001.png"
        this.img3R = new Image()
        this.img3R.src = "templerun/Run__002.png"
        this.img4R = new Image()
        this.img4R.src = "templerun/Run__003.png"
        this.img5R = new Image()
        this.img5R.src = "templerun/Run__004.png"
        this.img6R = new Image()
        this.img6R.src = "templerun/Run__005.png"
        this.img7R = new Image()
        this.img7R.src = "templerun/Run__006.png"
        this.img8R = new Image()
        this.img8R.src = "templerun/Run__007.png"
        this.img9R = new Image()
        this.img9R.src = "templerun/Run__008.png"
        this.img10R = new Image()
        this.img10R.src = "templerun/Run__009.png"
        this.img.onload = () =>{
            this.draw()
        }
    //     this.draw = frames => {
    //         if(frames % 6 === 0){
    //             if(this.animateHelper >= 5){
    //               this.animateHelper = 0
    //             }else{
    //               this.animateHelper++
    //             }
    //           }
    //         if (this.status === 'ORIGEN'){
    //             this.img =  this.animateHelper === 1 ?  this.img1D :
    //                         this.animateHelper === 2 ?  this.img2D :
    //                         this.animateHelper === 3 ?  this.img3D :
    //                         this.animateHelper === 4 ?  this.img4D : 
    //                                                     this.img5D
    //           }
    //           ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    //     }
    }
    draw(){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
        // ctx.fillStyle = "red"
        // ctx.fillRect(this.x, this.y, this.width, this.height) 
    }
    move(mover){
        switch (mover) {
            case 'UP':
                if(this.y <= 25) return
                this.y -= this.vel
                break;
            case 'DOWN':
                if(this.y > $canvas.height-(this.height+7)) return
                this.y += this.vel
                break;
            case 'RIGHT':
                if(this.x > $canvas.width-(this.width+5)) return
                this.x += this.vel
                break;
            case 'LEFT':
                if(this.x <= 0) return
                this.x -= this.vel
                break;
        
            default:
                break;
        }
    }
}

//instancias
const fondo = new Fondo()

const ar = new Personaje(380, 25)

