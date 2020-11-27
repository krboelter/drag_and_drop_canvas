import PageSetup from './components/PageSetup.js'
import Card from './components/Card.js'

export const canvas = document.getElementById("canvas")
export const ctx = canvas.getContext("2d")


function main() {
    PageSetup(canvas)
    const someCard = new Card(ctx, 'Hello World', 100, 100)
    someCard.maxWidth = 200
    someCard.fontSize = 55
    someCard.drawText()
}

main()
