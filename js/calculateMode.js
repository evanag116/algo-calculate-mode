exports.calculateMode = function(arr) {
    
    let modes = []
    let currentMax = 0

    for (let i = 0; i < arr.length; i++) {

        let currentMaxCount = arr.filter(x => x==arr[i]).length
        
        if (currentMaxCount > currentMax) {
            currentMax = currentMaxCount
        }
    }


    for (let i = 0; i < arr.length; i++) {
        if (arr.filter(x => x==arr[i]).length == currentMax ^ modes.includes(arr[i])) {
            modes.push(arr[i])
        }
        
    }
    return modes
}




