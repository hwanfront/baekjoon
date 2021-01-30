const find = (tree, s) => {
    if(tree[s] === s) {
        return s;
    }
    return find(tree, tree[s]);
}

const union = (tree, start, end) => {
    const r_start = find(tree, start);
    const r_end = find(tree, end);
    tree[r_end] = r_start;
}
