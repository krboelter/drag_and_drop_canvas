export default class Card {
    constructor(ctx, text, x, y, width, height) {
        this.ctx = ctx
        this.text = text
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.paddingL = 10
        this.paddingR = 10
        this.paddingT = 10
        this.paddingB = 10
        this.textAlign = null
        this.borderColor = 'white'
        this.color = 'white'
        this.fontFamily = 'Garamond'
        this.fontSize = 16
        this.textX = this.x + this.paddingL
        this.textY = this.y + this.paddingT
    }

    drawCard() {
        // card border
        this.ctx.strokeStyle = this.borderColor
        this.ctx.strokeRect(this.x, this.y, this.width, this.height)

        // text
        const maxW = this.width - (this.paddingL + this.paddingR)
        this.ctx.font = `${this.fontSize}px ${this.fontFamily}`
        this.ctx.fontSize = this.fontSize
        this.ctx.fillStyle = this.color
        this.ctx.textAlign = 'left'
        this.ctx.textBaseline = 'top'
        this.ctx.fillText(this.text, this.textX, this.textY, maxW)

        if (this.textAlign === 'center') {
            this.ctx.clearRect(this.textX, this.textY, this.width - (this.paddingL + this.paddingR), this.fontSize)
            this.ctx.textBaseline = 'middle'
            this.textY = this.y + (this.height / 2)
            this.ctx.fillText(this.text, this.textX, this.textY, maxW)
        }
    }
}