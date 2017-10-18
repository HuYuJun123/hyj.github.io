/**
 * Created by 胡玉君 on 2017/7/8.
 */
class Canvas {
    constructor(dom) {
        this.canvas = dom;
        this.paint = this.canvas.getContext("2d");
        this.shape = "rect"
        this.style = "stroke"
        this.color = "#000000"
        this.width = this.canvas.offsetWidth
        this.height = this.canvas.offsetHeight
        this.arr = [this.paint.getImageData(0, 0, this.width, this.height)]
        this.n=3
        this.textzi=""
        this.textsize=12
        this.colorarr=[]
        this.colorway="linear"
    }
    
    clear(){
        this.paint.clearRect(0, 0, this.width, this.height)
        if (this.arr.length>0){
            this.paint.putImageData(this.arr[this.arr.length-1], 0, 0)
        }
    }
    save(){
        this.arr.push(this.paint.getImageData(0, 0, this.width, this.height))
    }
    dele(){
        if (this.arr.length==1){
            alert("请在画板上画出你的作品")
        }else if(this.arr.length>1) {
            this.arr.pop()
            this.paint.putImageData(this.arr[this.arr.length-1], 0, 0)
        }
    }

    rect(x, y, x1, y1) {
        if (this.style == "stroke") {
            this.paint.strokeStyle = this.color
            this.paint.strokeRect(x, y, x1 - x, y1 - y)
        } else if (this.style == "fill") {
            this.paint.fillStyle = this.color
            this.paint.fillRect(x, y, x1 - x, y1 - y)
        }
    }

    arc(x, y, x1, y1) {
        this.paint.beginPath()
        this.paint.arc(x, y, Math.sqrt(Math.pow(x1 - x, 2) + Math.pow(y1 - y, 2)), 0, Math.PI * 2, true)
        this.paint.closePath()
        if (this.style == "stroke") {
            this.paint.strokeStyle = this.color
            this.paint.stroke()
        } else if (this.style == "fill") {
            this.paint.fillStyle = this.color
            this.paint.fill()
        }
    }

    line(x, y, x1, y1) {
        this.paint.beginPath()
        this.paint.moveTo(x, y)
        this.paint.lineTo(x1, y1)
        this.paint.closePath()
        this.paint.strokeStyle = this.color
        this.paint.stroke()
    }

    poly(x, y, x1, y1){
        let ran=360/this.n
        let r=Math.sqrt(Math.pow(x1-x,2)+Math.pow(y1-y,2))
        this.paint.beginPath()
        for (let i=0;i<this.n;i++){
            this.paint.lineTo(x+Math.sin((i*ran+45)*Math.PI/180)*r,y+Math.cos((i*ran+45)*Math.PI/180)*r)
        }
        this.paint.closePath()
        if (this.style=="stroke"){
            this.paint.strokeStyle = this.color
            this.paint.stroke()
        }else if (this.style == "fill") {
            this.paint.fillStyle = this.color
            this.paint.fill()
        }
    }
    text(x, y){
        this.paint.font=`${this.textsize}px "宋体"`
        console.log(this.paint.font)
        if (this.style=="stroke"){
            this.paint.strokeStyle = this.color
            this.paint.strokeText(this.textzi,x,y)
        }else if (this.style == "fill") {
            this.paint.fillStyle = this.color
            this.paint.fillText(this.textzi,x,y)
        }
    }
    shade(x,y,x1,y1){
        if (this.colorway=="linear"){
           let linear=this.paint.createLinearGradient(x,0,x1,0)
            for (let i=0;i<this.colorarr.length;i++){
                linear .addColorStop(1/this.colorarr.length*i,this.colorarr[i])
            }
            this.color=linear
        }else if(this.colorway=="radial"){
            this.color=this.paint.createRadialGradient(x,y,1,x,y,Math.sqrt(Math.pow(x1 - x, 2) + Math.pow(y1 - y, 2)))
            for (let i=0;i<this.colorarr.length;i++){
                this.color.addColorStop(1/this.colorarr.length*i,this.colorarr[i])
            }
        }else {
            alert("请输入正确的渐变格式")
        }
    }
}