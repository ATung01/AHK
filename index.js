const robot = require('robotjs');

const macro = [
  { delay: 1000, key: 'a'},
  { delay: 500, key: 'b'},
  { delay: 250, key: 'c'}
]

let stopMacro = false

function runMacro() {
    // setInterval(checkStop, 100)
  while (!stopMacro) {
    macro.forEach( e => {
      robot.setKeyboardDelay(e.delay)
      robot.keyTap(e.key)
    })
  }
}
runMacro()
