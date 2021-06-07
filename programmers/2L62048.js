const Gcd = (a, b) => {
    while (b > 0) {
        let c = a % b;
        a = b;
        b = c;
    }
    return a;
}

function solution(w, h) {
    const gcd = Gcd(w, h);
    return w * h - (w + h - gcd);
}