var fibonacci = function () {
    var total = 3;
    for (var i = 3; i < 1000; i++) {
        if (i % 2 !== 0 && i % 3 !== 0) {
            total += i;
        }
    }
    return total;
};
console.log(fibonacci());
