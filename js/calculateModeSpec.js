var mode = require("./calculateMode");



console.log(mode.calculateMode([1,2,3,4,3]) == [3,4])
console.log(mode.calculateMode([1,2,3]) == [1,2,3])
console.log(mode.calculateMode(["Evan", "Anabelle", "Birdie", "Evan"]) == ["Evan"])
console.log(mode.calculateMode([1.5, 2, 3, 4, 1.5, 2, 4]) == [1.5, 2, 4])
console.log(mode.calculateMode([true, true, false]) == [true])

