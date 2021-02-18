// Error: RangeError: Maximum call stack size exceeded

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];
const arr = new Array();

rl.on("line", (c) => {
    input.push(c);
}).on("close", () => {
    const [ n, m ] = input[0].split(' ').map((e) => Number(e));
    let res = '';
    
    for(let i = 0; i <= n; i++) {
        arr[i] = i;
    }

    for(let i = 1; i <= m; i++) {
        const [ is, a, b ] = input[i].split(' ').map((e) => Number(e));
        if(is) {
            if(find(a) === find(b)) {
                res += "YES\n"
            } else {
                res += "NO\n"
            }
        } else {
            union(a, b);
        }
    }    
    console.log(res);

    process.exit();
});

const find = (s) => {
    if(arr[s] === s) {
        return s;
    }
    return find(arr[s]);
}

const union = (start, end) => {
    const r_start = find(start);
    const r_end = find(end);
    if(r_start > r_end) {
        arr[r_start] = r_end;
        return;
    }
    arr[r_end] = r_start;
}

