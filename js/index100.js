let n = 1

function showEven() {
    if (n%2 === 0) {
        console.log(n);
    }
}

while (n <= 100) {
    showEven();
    n++;
}