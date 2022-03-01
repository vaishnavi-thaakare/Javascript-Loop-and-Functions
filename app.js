function add(x, y, operation) {
    var sum = x + y;
    operation(sum)
}
add(4, 5, divideBy2)
function divideBy2(sum) {
    let result = sum / 2;
    console.log(result)
}

