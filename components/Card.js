export default class Card {
    constructor(ctx, text, x, y) {
        this.ctx = ctx
        this.text = text
        this.x = x
        this.y = y
        this.maxWidth = 100
        this.color = 'white'
        this.fontFamily = 'Garamond'
        this.fontSize = 16
    }

    drawText() {
        this.ctx.font = `${this.fontSize}px ${this.fontFamily}`
        this.ctx.fontSize = this.fontSize
        this.ctx.fillStyle = this.color
        this.ctx.fillText(this.text, this.x, this.y, this.maxWidth)
    }
}