const add = (a, b, callback) => {
    setTimeout(() => {
        //const result = a + b;
        callback(a + b);
    }, 2000);
}

add(1, 4, (sum) => {
    console.log(sum);
})