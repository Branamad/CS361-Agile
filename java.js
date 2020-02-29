const randomColor = () => '#' + Math.random().toString(16).substr(-6)
const changeColor = () => document.body.style.backgroundColor = randomColor()

setInterval(() => {
  changeColor()
}, 5000)

// start color animation as soon as document is ready
document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    changeColor()
  }
}