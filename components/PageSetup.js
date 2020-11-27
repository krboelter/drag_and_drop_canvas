export default function PageSetup(canvas) {
    const cc = document.getElementById("canvas-container").style
    const cv = {
        width: window.innerWidth,
        height: window.innerHeight,
        bgColor: 'black'
    }

    // set canvas container properties
    cc.width = `${cv.width}`
    cc.height = `${cv.height}`
    cc.display = 'flex'
    cc.justifyContent = 'center'
    cc.alignItems = 'center'


    // set canvas properties
    canvas.width = cv.width
    canvas.height = cv.height
    canvas.style.backgroundColor = cv.bgColor
}