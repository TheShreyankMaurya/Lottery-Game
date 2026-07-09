function genArr(n) {
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = Math.floor(Math.random() * 10);
    }

    return arr;
}

function sum(ticket) {
    let sum = 0;
    for (let el of ticket) {
        sum += el;
    }
    return sum;
}

export { genArr, sum };
