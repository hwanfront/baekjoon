// Error: EACCES: permission denied

// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const input = ['7 8',
    '0 1 3',
    '1 1 7',
    '0 7 6',
    '1 7 1',
    '0 3 7',
    '0 4 2',
    '0 1 1',
    '1 1 1',
];

const [ n, m ] = input[0].split(' ').map((e) => Number(e));
const arr = new Array(n+1);
let res = '';

for(let i = 0; i <= n; i++) {
    arr[i] = i;
}

const find = (s) => {
    if(arr[s] === s) {
        return s;
    }
    return find(arr[s]);
}

const union = (start, end) => {
    const r_start = find(start);
    const r_end = find(end);
    if(r_start < r_end) {
        arr[r_end] = r_start;
        return;
    }
    arr[r_start] = r_end;
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